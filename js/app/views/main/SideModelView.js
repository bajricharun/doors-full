define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "lib/text!tpl/sideModel.html",
  "app/util/Labels",
  "app/profile",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    s = e("app/models/Model"),
    l = e("app/events/KEvent"),
    d = e("app/util/Util"),
    a = e("lib/text!tpl/sideModel.html"),
    o = e("app/util/Labels"),
    n =
      (e("app/profile"),
      t.View.extend({
        tagName: "a",
        className: "model-item",
        initialize: function () {
          i.bindAll(this, "render"),
            this.listenTo(l, l.DESTROY_COMPONENT, this.onDestroyComp);
        },
        onDestroyComp: function (e) {
          "side_model_view" == e &&
            (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
        },
        render: function () {
          var e = this.model.get("name")
            ? this.model.get("name")
            : this.model.get("code");
          return (
            this.$el.append(
              '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><img src=\'' +
                this.model.get("thumbnail") +
                "' title='" +
                e +
                "'><span title='" +
                e +
                "'>" +
                e +
                "</span>"
            ),
            this.$el.attr("cid", this.model.cid),
            this
          );
        },
      }));
  return t.View.extend({
    id: "side-model-view",
    events: {
      "click .header": "onHeaderClick",
      "click .content > .model-item": "onSideModelClick",
      "click .background": "onHeaderClick",
    },
    initialize: function () {
      i.bindAll(this, "toggleVisible"),
        (this.data = s.getInstance()),
        this.listenTo(l, l.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(l, l.BAUFORM_CHANGE, this.toggleVisible),
        this.listenTo(l, l.SIDE_MODEL_DATA, this.onSideModelData),
        (this.tpl = i.template(a)),
        this.render(),
        (this.latestData = !1),
        this.toggleVisible();
    },
    onDoorData: function () {
      (this.latestData = !1),
        this.toggleVisible(),
        this.$el.hasClass("open") &&
          this.isDirty &&
          (this.data.getSideModels(),
          (this.isDirty = !1),
          (this.latestData = !0));
    },
    toggleVisible: function () {
      this.data.dd("hasDoorSideModel") &&
      (this.data.isLeftFrame() || this.data.isRightFrame())
        ? (this.$el.removeClass("hidden"),
          this.latestData ||
            ((this.isDirty = !0),
            l.trigger(l.DESTROY_COMPONENT, "side_model_view")))
        : this.$el.addClass("hidden");
    },
    onHeaderClick: function () {
      this.$el.toggleClass("open"),
        this.isDirty &&
          (this.data.getSideModels(),
          (this.isDirty = !1),
          (this.latestData = !0));
    },
    onSideModelData: function (e) {
      (this.list = new t.Collection(e)),
        this.list.add(
          new t.Model({
            remove: "true",
            code: "",
            thumbnail: "images/remove-sidemodel.jpg",
          })
        ),
        this.list.forEach(function (e) {
          var t = new n({ model: e }).render();
          e.get("code") == this.data.cdd.sideModel &&
            (t.$el.addClass("selected"), (this.selectedCid = e.cid)),
            this.$(".content").append(t.el);
        }, this);
    },
    onSideModelClick: function (e) {
      if (!this.data.imageLoading) {
        var t = $(e.currentTarget),
          i = t.attr("cid"),
          s = this.list.get(i);
        i != this.selectedCid &&
          ((this.selectedCid = i),
          this.$(".model-item").removeClass("selected"),
          s.get("remove")
            ? (t.addClass("selected"), this.data.sideModelChange(null))
            : (this.$(".content > .model-item.selected").removeClass(
                "selected"
              ),
              t.addClass("selected"),
              this.data.sideModelChange(s)));
      }
    },
    render: function () {
      return (
        this.$el.append(this.tpl({ label: o })),
        d.fixScrolling(this.$(".scrolling"), this.data),
        this
      );
    },
  });
});
