define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/ImageUpload",
  "app/profile",
  "app/util/Labels",
  "lib/text!tpl/houseView.html",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    a = e("app/models/Model"),
    s = e("app/events/KEvent"),
    o = e("app/util/Util"),
    n = e("app/util/ImageUpload"),
    d = e("app/profile"),
    l = e("app/util/Labels"),
    h = e("lib/text!tpl/houseView.html"),
    r = t.View.extend({
      tagName: "a",
      className: "door-in-house-image-item",
      initialize: function () {
        i.bindAll(this, "render");
      },
      render: function () {
        var e = this.model.get("thumbnail2Url");
        return (
          e || (e = this.model.get("thumbnailUrl")),
          this.$el.append(
            '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><img src=\'' +
              e +
              "' />"
          ),
          this.$el.attr("cid", this.model.cid),
          this.model.get("center") > 0 && this.$el.addClass("predefined"),
          this
        );
      },
    });
  return t.View.extend({
    id: "house-view",
    className: "house-view",
    events: {
      "click .door-in-house-image-item": "onHouseImageClick",
      "change .file-input": "onFileInputChange",
      "click #save-image": "onSaveImageClick",
    },
    initialize: function () {
      i.bindAll(this, "onLoadHouseImageClick", "setDefaultImage"),
        (this.data = a.getInstance()),
        this.listenTo(s, s.HOUSE_IMAGES_DATA, this.onHouseImagesData),
        this.listenTo(s, s.UPLOAD_SUCCESS, this.onUploadDone),
        this.listenTo(s, s.HOUSE_DOOR_B64_DONE, this.onHouseDoorB64),
        this.listenTo(s, s.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(s, s.HOUSE_SAVE_DONE, this.onHouseImageSaveDone),
        (this.isUpload = !1),
        (this.serverName =
          o.getProtocol() +
          "://" +
          o.getServerNameWithPort(window.location.href)),
        (this.data.houseImageLoading = !0),
        this.render(),
        (this.imageUpload = new n(this.$("form"))),
        this.data.getHouseImages();
    },
    onHouseImagesData: function (e) {
      this.imageList = new t.Collection(e);
      var i = this.$("#door-in-house-images-list");
      this.imageList.forEach(function (e) {
        var t = new r({ model: e }).render();
        i.append(t.el);
      }, this),
        this.setDefaultImage(!0);
    },
    setDefaultImage: function (e) {
      if (e) {
        var t = this.imageList.at(0);
        (this.uploadImage = t.get("limage")),
          this.setPredefinedFlag(t),
          this.data.houseImageChange(t),
          (this.selectedCid = t.cid),
          this.$(".door-in-house-image-item.selected").removeClass("selected"),
          this.$(".door-in-house-image-item[cid='" + t.cid + "']").addClass(
            "selected"
          );
      } else s.trigger(s.UPDATE_HOUSE_DOOR_IMAGE);
      this.data.cdd.getTotalWidth() > 4e3 ||
      this.data.cdd.getTotalHeight() > 3500
        ? this.$("#door-in-house-images-list").addClass("disable-p")
        : this.$("#door-in-house-images-list").removeClass("disable-p");
    },
    onMenuChange: function (e) {
      "myHouse" == e.state && this.setDefaultImage();
    },
    onLoadHouseImageClick: function (e) {
      if (
        (e.preventDefault(), e.stopPropagation(), this.data.houseImageLoading)
      )
        return !1;
      if (this.data.isIos() || this.data.isWindowsPhone()) {
        var t = this.$("input.file-input").get(0),
          i = document.createEvent("MouseEvents");
        i.initMouseEvent(
          "click",
          !0,
          !0,
          window,
          0,
          0,
          0,
          0,
          0,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          (i.forwardedTouchEvent = !0),
          t.dispatchEvent(i);
      } else this.$("input.file-input").click();
    },
    onFileInputChange: function (e) {
      $(e.currentTarget).val() && this.imageUpload.upload(e);
    },
    onUploadDone: function (e) {
      this.$(".file-input").val(""),
        (this.uploadImage = e.image),
        (this.isUpload = !0),
        (this.selectedCid = null),
        this.$(".door-in-house-image-item.selected").removeClass("selected");
    },
    onSaveImageClick: function (e) {
      this.uploadImage &&
        (s.trigger(s.OPEN_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
        }),
        s.trigger(s.GET_HOUSE_DOOR_B64));
    },
    onHouseDoorB64: function (e, t) {
      var i = {
        image: e,
        houseImage: this.uploadImage,
        key: this.data.conf("partnerKey"),
        params: t,
        isUpload: this.isUpload,
      };
      this.data.saveImage(i);
    },
    onHouseImageSaveDone: function (e) {
      s.trigger(s.CLOSE_POPUP),
        s.trigger(s.OPEN_POPUP, {
          module: "app/views/main/popup/DownloadImagePopup",
          url: d.getHost() + "/rest/image/download/" + e.image,
        }),
        s.trigger(s.KEYBOARD_ON, {
          uniqueKey: "ESC_PRINT",
          keyCode: 27,
          triggerEvent: "CLOSE_POPUP",
          destroyable: !0,
        });
    },
    onHouseImageClick: function (e) {
      if (this.data.houseImageLoading) return !1;
      var t = $(e.currentTarget),
        i = t.attr("cid"),
        a = this.imageList.get(i);
      ((this.data.cdd.getTotalWidth() > 4e3 ||
        this.data.cdd.getTotalHeight() > 3500) &&
        a.get("center") > 0) ||
        a.cid == this.selectedCid ||
        ((this.selectedCid = a.cid),
        (this.uploadImage = a.get("limage")),
        (this.isUpload = !1),
        this.setPredefinedFlag(a),
        this.data.houseImageChange(a),
        this.$(".door-in-house-image-item.selected").removeClass("selected"),
        t.addClass("selected"));
    },
    setPredefinedFlag: function (e) {
      e.get("bottom") && e.get("center") && e.get("scale")
        ? (this.doorImagePredefined = !0)
        : (this.doorImagePredefined = !1);
    },
    render: function () {
      var e = i.template(h),
        t = l.all();
      return (
        i.extend(t, {
          url:
            d.getHost() +
            "/upload?key=" +
            this.data.conf("partnerKey") +
            "&if=1&h=" +
            encodeURIComponent(this.serverName),
        }),
        this.$el.html(e(t)),
        this.data.isIE9() &&
          (this.$el.addClass("ie9"),
          this.$("#fake-load-image").removeClass("hidden")),
        this.data.isIos() && this.$("#save-image").attr("target", "_blank"),
        o.fixScrolling(this.$(".scrolling"), this.data),
        this
      );
    },
  });
});
