define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Labels",
  "app/util/Util",
], function (e) {
  var i = e("backbone"),
    n = e("underscore"),
    t = (e("app/models/Model"), e("app/events/KEvent")),
    r = e("app/util/Labels");
  e("app/util/Util");
  return i.View.extend({
    events: { "click a": "onImpressumClick" },
    initialize: function () {
      n.bindAll(this, "onImpressumClick", "render"),
        this.$el.removeClass("hidden"),
        this.render();
    },
    onImpressumClick: function () {
      t.trigger(t.OPEN_POPUP, {
        module: "app/views/main/popup/ImpressumPopup2",
      }),
        t.trigger(t.KEYBOARD_ON, {
          uniqueKey: "ESC_PRINT",
          keyCode: 27,
          triggerEvent: "CLOSE_POPUP",
          destroyable: !0,
        });
    },
    render: function () {
      return this.$("a").html(r.get("impressum", "TITLE")), this;
    },
  });
});
