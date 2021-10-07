define(["require", "app/views/main/equipment/HandleNewFingerprint"], function (
  e
) {
  var n = e("app/views/main/equipment/HandleNewFingerprint");
  return n.extend({
    IR: n.prototype.IR.extend({ disableForAccessControl: function () {} }),
    preventChange: function (e) {
      return !1;
    },
    outsideHandleChange: function (e) {
      this.data.outsideHandleChange(e);
      var n = e.get("option");
      if (e.get("hasAccessControl") && null != n) {
        var t = _.find(n, function (e) {
          return "secureLatch" === e.type;
        });
        null != t &&
          (this.data.cdd.setSecureLatch({ code: t.code, label: t.label }),
          this.data.setSecureLatchOptions(n));
      }
    },
  });
});
