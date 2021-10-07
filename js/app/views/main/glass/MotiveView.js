define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/util/Labels",
  "app/events/KEvent",
], function (e) {
  var t = e("backbone"),
    s = e("underscore"),
    i = e("app/models/Model"),
    a = e("app/util/Util"),
    d = e("app/util/Labels"),
    l = e("app/events/KEvent"),
    n = t.View.extend({
      tagName: "a",
      className: "glass-item",
      initialize: function () {
        s.bindAll(this, "render"),
          this.listenTo(l, l.DESTROY_COMPONENT, this.destroy);
      },
      destroy: function (e) {
        "motive_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        var e = this.model.get("label")
          ? this.model.get("label")
          : this.model.get("code");
        return (
          this.$el.append(
            '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><img src=\'' +
              this.model.get("url") +
              "' title=" +
              a.quote(e) +
              "><span class='name' title=" +
              a.quote(e) +
              ">" +
              e +
              "</span>"
          ),
          this.$el.attr("cid", this.model.cid),
          this
        );
      },
    });
  return t.View.extend({
    id: "motiv",
    className: "glass-sub-sub-view scrolling spinner",
    events: { "click .glass-item": "onMotiveClick" },
    initialize: function () {
      s.bindAll(this, "render", "getNewData", "preventClick"),
        (this.data = i.getInstance()),
        this.listenTo(l, l.MOTIVE_GLASS_DATA, this.onGlassData),
        this.listenTo(l, l.SIDE_GLASS_DATA, this.onGlassData),
        this.listenTo(l, l.GLASS_PART_CHANGE, this.getNewData),
        this.listenTo(l, l.ORNAMENT_CHANGE, this.determineSelection),
        this.listenTo(l, l.SIDE_MODEL_CHANGE, this.getNewData),
        this.render(),
        this.getNewData();
    },
    getNewData: function () {
      l.trigger(l.DESTROY_COMPONENT, "motive_view"),
        "side-glass" == this.data.cdd.glassPart &&
        (this.data.dd("hasDoorSideGlass") || this.data.cdd.sideModel)
          ? (this.showSpinner(!0), this.data.getSideGlass("side"))
          : "top-glass" == this.data.cdd.glassPart &&
            this.data.dd("hasDoorUpperMotive")
          ? (this.showSpinner(!0), this.data.getSideGlass("up"))
          : "door-glass" == this.data.cdd.glassPart &&
            this.data.dd("hasGlassMotive") &&
            (this.showSpinner(!0), this.data.getMotiveGlass());
    },
    onGlassData: function (e) {
      if (!e)
        return (
          this.showSpinner(!1),
          void this.$el.append(
            "<span class='not_available'>" +
              d.get("equipment", "NOT_AVAILABLE") +
              "</span>"
          )
        );
      this.$(".not_available").remove(),
        (this.list = new t.Collection(e)),
        this.list.forEach(function (e) {
          var t = new n({ model: e }).render();
          this.$el.append(t.el);
        }, this),
        this.determineSelection(),
        this.showSpinner(!1);
    },
    onMotiveClick: function (e) {
      if (!this.data.imageLoading) {
        var t = $(e.currentTarget),
          s = t.attr("cid");
        if (this.selectedCid != s) {
          this.selectedCid = s;
          var i = this.list.get(s);
          this.preventClick(i) ||
            (this.$(".glass-item.selected").removeClass("selected"),
            this.$(".glass-item[cid='" + s + "']").addClass("selected"),
            this.data.motiveChange(i));
        }
      }
    },
    preventClick: function (e) {
      return !1;
    },
    determineSelection: function () {
      var e;
      if (
        ("door-glass" == this.data.cdd.glassPart &&
        "motive" == this.data.cdd.getDoorGlassType()
          ? (e = this.data.cdd.getDoorGlass())
          : "side-glass" == this.data.cdd.glassPart &&
            "motive" == this.data.cdd.getSideGlassType()
          ? (e = this.data.cdd.getSideGlass())
          : "top-glass" == this.data.cdd.glassPart &&
            "motive" == this.data.cdd.getUpperGlassType() &&
            (e = this.data.cdd.getUpperGlass()),
        this.$(".glass-item.selected").removeClass("selected"),
        (this.selectedCid = null),
        e)
      ) {
        var t = this.list.findWhere({ code: e });
        t &&
          ((this.selectedCid = t.cid),
          this.$(".glass-item[cid='" + t.cid + "']").addClass("selected"));
      }
    },
    render: function () {
      return a.fixScrolling(this.$el, this.data), this;
    },
    showSpinner: function (e) {
      this.$el.toggleClass("spinner", e);
    },
  });
});
