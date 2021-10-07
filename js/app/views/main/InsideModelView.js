define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/models/Model",
  "app/util/Util",
  "app/events/KEvent",
], function (e) {
  var i = e("backbone"),
    t = e("underscore"),
    s = e("jquery"),
    n = e("app/models/Model"),
    d = e("app/util/Util"),
    l = e("app/events/KEvent"),
    a = i.View.extend({
      tagName: "a",
      className: "model-item",
      initialize: function () {
        t.bindAll(this, "render"),
          this.listenTo(l, l.DESTROY_COMPONENT, this.onDestroyComp);
      },
      onDestroyComp: function (e) {
        "inside_model_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        var e = this.model.get("name");
        return (
          this.$el.append(
            '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><img src=\'' +
              this.model.get("url") +
              "' title='" +
              e +
              "'><span>" +
              (e || this.model.get("model")) +
              "</span>"
          ),
          this.$el.attr("cid", this.model.cid),
          this
        );
      },
    });
  return i.View.extend({
    id: "inside-model-view",
    events: {
      "change .select > select": "onSeriesChange",
      "click #inside-model-sub-view > .model-item": "onModelClick",
    },
    initialize: function () {
      t.bindAll(this, "render", "showSpinner"),
        (this.data = n.getInstance()),
        this.listenTo(l, l.THUMBNAILS_INSIDE_DATA, this.onThumbnailData),
        this.listenTo(l, l.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(l, l.MENU_CHANGE_EVENT, this.onMenuChange),
        this.render(),
        this.showSpinner(!0),
        this.data.ddr
          ? ((this.isInitialized = !0), this.data.getThumbnailsInside())
          : (this.isInitialized = !1);
    },
    onDoorData: function (e) {
      this.isInitialized
        ? (l.trigger(l.DESTROY_COMPONENT, "inside_model_view"),
          (this.isDirty = !0))
        : ((this.isInitialized = !0), this.data.getThumbnailsInside());
    },
    onMenuChange: function (e) {
      "insideModel" == e.state &&
        this.isDirty &&
        ((this.isDirty = !1),
        this.data.getThumbnailsInside(),
        this.showSpinner(!0));
    },
    onThumbnailData: function (e) {
      this.thumbnailList = new i.Collection(e);
      var t = this.$("#inside-model-sub-view");
      this.thumbnailList.forEach(function (e) {
        var i = new a({ model: e }).render();
        t.append(i.el),
          e.get("model") == this.data.cdd.getInsideModel() &&
            (this.selectedCid = e.cid);
      }, this),
        this.refreshSelected(),
        this.showSpinner(!1);
    },
    refreshSelected: function () {
      this.$("a.model-item.selected").removeClass("selected"),
        this.$("a.model-item[cid='" + this.selectedCid + "']").addClass(
          "selected"
        );
    },
    onModelClick: function (e) {
      if (!this.data.imageLoading) {
        var i = s(e.currentTarget),
          t = i.attr("cid");
        if (this.selectedCid != t) {
          this.selectedCid = t;
          var n = this.thumbnailList.get(t);
          this.data.insideModelChange(n),
            l.trigger(l.SHOW_SWITCHER_REMARK),
            this.refreshSelected();
        }
      }
    },
    render: function () {
      return (
        this.$el.append(
          "<div id='inside-model-sub-view' class='scrolling clear spinner'>"
        ),
        d.fixScrolling(this.$("#inside-model-sub-view"), this.data),
        this
      );
    },
    showSpinner: function (e) {
      this.$("#inside-model-sub-view").toggleClass("spinner", e);
    },
  });
});
