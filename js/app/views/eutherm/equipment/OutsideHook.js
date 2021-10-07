define([
  "require",
  "app/views/main/equipment/OutsideHook",
  "app/util/PopupCaller",
], function (e) {
  var i = e("app/views/main/equipment/OutsideHook"),
    t = e("app/util/PopupCaller");
  return i.extend({
    onBBModelFound: function (e, i) {
      if (this.id == i)
        return e.get("code").match(/KV/) &&
          this.data.cdd.getInsideHandle().match(/KV/)
          ? void t.openPopup("INVALID_HANDLE_SMART")
          : void this.data.outsideHandleChange(e);
    },
  });
});
