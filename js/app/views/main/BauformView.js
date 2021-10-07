define([
  "require",
  "backbone",
  "underscore",
  "app/events/KEvent",
  "app/util/Util",
  "app/models/Model",
], function (t) {
  var i = t("backbone"),
    e = t("underscore"),
    s = t("app/events/KEvent"),
    a = t("app/util/Util"),
    n = t("app/models/Model"),
    o = i.View.extend({
      tagName: "a",
      className: "bauform-item",
      initialize: function () {
        e.bindAll(this, "render"),
          this.listenTo(s, s.DESTROY_COMPONENT, this.onDestroy),
          (this.data = n.getInstance());
      },
      onDestroy: function (t) {
        "bauform_view" == t &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        return (
          this.$el.append(
            '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><i class="door"></i>'
          ),
          this.$el.attr({
            cid: this.model.cid,
            class: "bauform-item " + this.model.get("state").toLowerCase(),
          }),
          this.model.get("labelLang") &&
            this.$(".door").attr({ title: this.model.get("labelLang") }),
          this
        );
      },
    });
  return i.View.extend({
    className: "scrolling",
    id: "bauform-view",
    initialize: function () {
      e.bindAll(this, "render", "_reloadView"),
        (this.data = n.getInstance()),
        a.fixScrolling(this.$el, this.data),
        this.listenTo(s, s.BAUFORM, this.onBauformData),
        this.listenTo(s, s.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(s, s.PACKAGE_CHANGE, this.onNewData),
        this.listenTo(s, s.PROFILE_CHANGE, this.onNewData),
        this.listenTo(s, s.MENU_CHANGE_EVENT, this.onMenuChange),
        (this.isInitialized = !1),
        this.data.ddr &&
          ((this.isInitialized = !0), this.render(), this.data.getBauform());
    },
    events: { "click a.bauform-item": "onBauformClick" },
    onMenuChange: function (t) {
      "bauform" == t.state &&
        this.isDirty &&
        ((this.isDirty = !1), this._reloadView());
    },
    onNewData: function () {
      this.hasRules && (this.isDirty = !0);
    },
    onDoorData: function () {
      this.isInitialized
        ? (this.$el.attr(
            "class",
            "scrolling " + this.data.cdd.getFrameType().toLowerCase()
          ),
          this.hasRules && ((this.isDirty = !1), this._reloadView()))
        : ((this.isInitialized = !0), this._reloadView());
    },
    _reloadView: function () {
      this.clean(), this.destroy(), this.render(), this.data.getBauform();
    },
    onBauformData: function (t) {
      (this.hasRules = t.rules),
        (this.list = new i.Collection(t.list)),
        this.list.forEach(function (t) {
          var i = new o({ model: t }).render();
          this.$el.append(i.el);
        }, this),
        this.$el.attr(
          "class",
          "scrolling " + this.data.cdd.getFrameType().toLowerCase()
        );
    },
    onBauformClick: function (t) {
      if (!this.data.imageLoading) {
        var i = $(t.currentTarget),
          e = i.attr("cid"),
          s = this.list.get(e);
        this.checkRules(s) ||
          (this.data.changeBauform(s),
          this.$el.attr("class", "scrolling " + s.get("state").toLowerCase()));
      }
    },
    checkRules: function () {
      return !1;
    },
    clean: function () {
      this.list = null;
    },
    destroy: function () {
      s.trigger(s.DESTROY_COMPONENT, "bauform_view");
    },
    render: function () {
      return (
        this.$el.attr(
          "class",
          "spinner scrolling " + this.data.cdd.getFrameType().toLowerCase()
        ),
        this
      );
    },
  });
});
