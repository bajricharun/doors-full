define(["require", "app/views/main/ColorView"], function (e) {
  return e("app/views/main/ColorView").extend({
    onBBModelFound: function (e, a) {
      if (this.id == a) {
        (this.customColorData[e.cid] || "" == this.customColorData[e.cid]) &&
          e.set("customDesc", this.customColorData[e.cid]);
        var t = this.data.getCurrentPartSelectedColor();
        if (!t || t.code != e.get("code") || t.desc != e.get("customDesc")) {
          var i = this.data.getProfileRuleParams({}).series;
          "Luxury Line (fully glazed)" === i || "NATUR" === i
            ? (this.data.cdd.insideColorChanged = !0)
            : "Luxury Line (glass panel)" === i &&
              ((this.data.cdd.insideColorChanged = !0),
              (this.data.cdd.isColorPartChanged = !0),
              (this.data.cdd.isColorFrameAndPanelAllowed = !1)),
            this.data.colorChange(e);
        }
      }
    },
  });
});
