define([
  "require",
  "backbone",
  "app/events/KEvent",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "lib/text!tpl/switcher.html",
  "app/util/Labels",
], function (e) {
  var t = e("backbone"),
    i = e("app/events/KEvent"),
    a = e("underscore"),
    l = e("app/models/Model"),
    n = (e("app/util/Util"), e("lib/text!tpl/switcher.html")),
    s = e("app/util/Labels"),
    h = null;
  return t.View.extend({
    id: "switcher-btn",
    attributes: {
      title: s.exist("switcher", "REMARK") ? s.get("switcher", "REMARK") : "",
    },
    events: {
      "click a.outside-wall": "onSwitchClick",
      "click a.inside-wall": "onSwitchClick",
      "click .view-remark": "onViewRemarkClick",
    },
    initialize: function () {
      a.bindAll(this, "hideRemark", "onShowRemark"),
        (this.data = l.getInstance()),
        this.listenTo(i, i.DOOR_VIEW_CHANGE, this.onDoorViewChange),
        this.listenTo(i, i.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(i, i.SHOW_SWITCHER_REMARK, this.onShowRemark),
        (this.remarkShown = !1),
        (h = a.template(n));
    },
    onSwitchClick: function () {
      if (!this.data.imageLoading) {
        var e =
            "outside-wall" === this.data.wallState
              ? "InsideWall"
              : "OutsideWall",
          t = "OutsideWall" === e ? "outside-wall" : "inside-wall";
        this.data.wallStateChange({ module: "app/components/" + e, state: t });
      }
    },
    onDoorViewChange: function () {
      this.$el.removeClass().addClass(this.data.wallState),
        "inside-wall" == this.data.wallState &&
          (this.hideRemark(), (this.remarkShown = !0));
    },
    onViewRemarkClick: function () {
      this.hideRemark();
    },
    hideRemark: function () {
      this.$(".view-remark").removeClass("active");
    },
    onShowRemark: function () {
      this.remarkShown ||
        !s.exist("switcher", "REMARK") ||
        this.data.isInsideWall() ||
        this.$(".view-remark").addClass("active"),
        (this.remarkShown = !0);
    },
    render: function () {
      return this.$el.append(h({ label: s })), this;
    },
  });
});
