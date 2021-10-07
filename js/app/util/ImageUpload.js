define([
  "require",
  "class",
  "jquery",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/events/KEvent",
  "app/profile",
  "json2",
], function (e) {
  var t = e("class"),
    a = e("jquery"),
    r = e("underscore"),
    o = e("app/models/Model"),
    n = e("app/events/KEvent"),
    s = e("app/util/Util"),
    n = e("app/events/KEvent"),
    i = e("app/profile");
  e("json2");
  return t.extend({
    isFileUp: !(!window.ProgressEvent || !window.FileReader),
    isFormDataUp: !!window.FormData,
    init: function (e) {
      r.bindAll(this, "upload", "_isXhrUpload", "onIframeUploadDone"),
        (this.data = o.getInstance()),
        (this.form = e),
        (this.serverName =
          s.getProtocol() +
          "://" +
          s.getServerNameWithPort(window.location.href)),
        a(window).on("message", this.onIframeUploadDone);
    },
    upload: function (e) {
      n.trigger(n.OPEN_POPUP, {
        module: "app/views/main/popup/SpinnerPopup",
        background: !1,
      }),
        this._isXhrUpload() ? this._uploadFormData(e) : this._uploadIFrame(e);
    },
    _uploadFormData: function (e) {
      var t = a(e.currentTarget),
        r = t.prop("files")[0],
        o = new FormData();
      o.append("file", r);
      var s = i.getHost();
      this.data.tracker.sendEvent("House", "Upload custom image"),
        a.ajax({
          url:
            s +
            "/upload?key=" +
            this.data.conf("partnerKey") +
            "&h=" +
            encodeURIComponent(this.serverName),
          cache: !1,
          contentType: !1,
          processData: !1,
          data: o,
          type: "POST",
          success: function (e) {
            n.trigger(n.CLOSE_POPUP),
              "ok" == e.status
                ? n.trigger(n.UPLOAD_SUCCESS, e)
                : "error" == e.status && alert(e.message);
          },
          error: function (e, t, a) {
            n.trigger(n.CLOSE_POPUP);
          },
        });
    },
    _uploadIFrame: function (e) {
      try {
        this.form.submit();
      } catch (e) {}
    },
    onIframeUploadDone: function (e) {
      var t = e.originalEvent.data,
        a = JSON.parse(t);
      "house-image" == a.type &&
        (n.trigger(n.CLOSE_POPUP),
        "ok" == a.status
          ? n.trigger(n.UPLOAD_SUCCESS, a)
          : "error" == a.status && alert(a.message));
    },
    _isXhrUpload: function () {
      return this.isFileUp || this.isFormDataUp;
    },
  });
});
