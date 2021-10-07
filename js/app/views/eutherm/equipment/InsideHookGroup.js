define([
  "require",
  "app/views/main/equipment/InsideHookGroup",
  "app/util/PopupCaller",
], function (e) {
  var i = e("app/views/main/equipment/InsideHookGroup"),
    n = e("app/util/PopupCaller");
  return i.extend({
    onBBModelFound: function (e, i) {
      if (this.id == i)
        return e.get("code").match(/KV/) &&
          this.data.cdd.getOutsideHandle().match(/KV/)
          ? void n.openPopup("INVALID_HANDLE_SMART")
          : void this.data.insideHandleChange(e);
    },
  });
});
