define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/models/Model",
  "app/util/Util",
  "app/events/KEvent",
], function (e) {
  var i = e("backbone"),
    t = e("underscore"),
    n = e("jquery"),
    s = e("app/models/Model"),
    r = (e("app/util/Util"), e("app/events/KEvent"));
  return i.View.extend({
    initialize: function (e) {
      t.bindAll(this, "render", "onImageDone", "onImageError"),
        this.listenTo(r, r.DOOR_IMAGE_LOAD, this.onImageLoad),
        this.listenTo(r, r.DOOR_IMAGE_DONE, this.onImageDone),
        this.listenTo(r, r.DOOR_IMAGE_ERROR, this.onImageError),
        (this.data = s.getInstance());
    },
    onImageLoad: function () {
      this.rendered && this.$el.addClass("spinner");
    },
    onImageDone: function (e, i) {
      var t = e.getImageByType("doorImage");
      if (t) {
        var s = n(t.img),
          r = parseInt(t.img.width),
          a = parseInt(t.img.height);
        r && a
          ? ((this.w = r), (this.h = a))
          : this.w && this.h
          ? ((r = this.w), (a = this.h))
          : ((r = 0), (a = 0));
        var o = r * i,
          h = a * i,
          d = { width: o + "px", height: h + "px" };
        this.$el.css(d),
          o && h && s.css({ width: "100%", height: "100%" }),
          s.attr("draggable", !1),
          this.$("img").replaceWith(t.img);
      }
      this.$el.removeClass("spinner"), (this.rendered = !0);
    },
    onImageError: function (e) {
      this.$el.removeClass("spinner");
    },
  });
});
