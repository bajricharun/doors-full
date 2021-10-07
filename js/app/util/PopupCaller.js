define(["require", "app/events/KEvent", "app/util/Labels"], function (e) {
  var p = e("app/events/KEvent"),
    t = e("app/util/Labels");
  return {
    openPopup: function (e) {
      p.trigger(p.OPEN_POPUP, {
        module: "app/views/main/popup/MessageDialog",
        template: e,
        class: "small250 fixed",
        title: t.get("popup", "ATTENTION"),
      }),
        p.trigger(p.KEYBOARD_ON, {
          uniqueKey: "ESC_POPUP",
          keyCode: 27,
          triggerEvent: "CLOSE_POPUP",
          destroyable: !0,
        });
    },
  };
});
