define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "lib/text!tpl/houseControl.html",
  "app/util/Util",
], function (e) {
  var t = e("backbone"),
    n = e("underscore"),
    i = e("app/models/Model"),
    o = e("app/events/KEvent"),
    s = e("lib/text!tpl/houseControl.html"),
    a = (e("app/util/Util"), null);
  return t.View.extend({
    events: {
      "click .icon.plus": "onPlusClick",
      "click .icon.minus": "onMinusClick",
      "click .icon.reset": "onResetClick",
    },
    initialize: function () {
      (this.data = i.getInstance()),
        (a = n.template(s)),
        this.listenTo(o, o.UPLOAD_SUCCESS, this.onUploadSuccess),
        this.render();
    },
    onPlusClick: function (e) {
      this.data.houseImageLoading || o.trigger(o.HOUSE_ZOOM_IN);
    },
    onMinusClick: function (e) {
      this.data.houseImageLoading || o.trigger(o.HOUSE_ZOOM_OUT);
    },
    onResetClick: function (e) {
      if (!this.data.houseImageLoading) {
        var t = $(e.currentTarget);
        t.find(".rotator").addClass("transition"),
          t.addClass("reseting"),
          n.debounce(function () {
            t.find(".rotator").removeClass("transition"),
              t.removeClass("reseting");
          }, 200)(),
          o.trigger(o.HOUSE_DOOR_RESET);
      }
    },
    onUploadSuccess: function () {
      this.$(".icon.reset").removeClass("hidden");
    },
    render: function () {
      return this.$el.append(a), this;
    },
  });
});
