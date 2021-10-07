define([
  "require",
  "backbone",
  "lib/text!tpl/house-grid.html",
  "app/util/Util",
  "app/components/DoorImage2",
  "app/events/KEvent",
  "app/models/Model",
], function (i) {
  var e = i("backbone"),
    t = i("lib/text!tpl/house-grid.html"),
    a = i("app/util/Util"),
    s = i("app/components/DoorImage2"),
    n = i("app/events/KEvent"),
    o = i("app/models/Model"),
    d = null;
  return e.View.extend({
    id: "house-grid",
    events: { "click div.image > img": "onDoorTap" },
    scale: 1,
    imgdata: null,
    initialize: function () {
      _.bindAll(
        this,
        "scaleGrid",
        "onDoorViewChange",
        "onImageDone",
        "onDoorTap",
        "redrawImage"
      ),
        (d = _.template(t, { variable: "data" })),
        this.listenTo(n, n.DOOR_IMAGE_DONE, this.onImageDone),
        this.listenTo(n, n.DOOR_VIEW_CHANGE, this.onDoorViewChange),
        (this.data = o.getInstance()),
        (this.imgdata = this.data.conf("facade")),
        $(window).on("resize", _.debounce(this.redrawImage, 150));
    },
    onImageDone: function (i, e) {
      this.$el.css({ display: "block" }),
        this.doorViewChanged
          ? ((this.scale = e), this.redrawGrid(), (this.doorViewChanged = !1))
          : this.scaleGrid(e);
    },
    redrawImage: function () {
      this.data.loadDoorImage();
    },
    onDoorViewChange: function () {
      this.doorViewChanged = !0;
    },
    redrawGrid: function () {
      var i = this.data.isInsideWall();
      _.each(
        this.imgdata,
        function (e) {
          this.$(".grid .s" + e.index).css({
            "background-image":
              "url('" + (i ? e["inside-image"] : e["outside-image"]) + "')",
            "background-size": parseInt(e.size * this.scale) + "px",
            "background-position": this.getCalcPosition(
              "s" + e.index,
              e.position
            ),
            "background-repeat": e.repeat,
          });
        },
        this
      );
    },
    scaleGrid: function (i) {
      if (this.scale !== i) {
        if (((this.scale = i), this.scale >= 1))
          return this.resetBackgroundPosition(), void (this.scale = 1);
        _.each(
          this.imgdata,
          function (i) {
            this.$(".s" + i.index).css({
              "background-size": parseInt(i.size * this.scale) + "px",
              "background-position": this.getCalcPosition(
                "s" + i.index,
                i.position
              ),
            });
          },
          this
        );
      }
    },
    getCalcPosition: function (i, e) {
      switch (i) {
        case "s1":
        case "s4":
          return this.scale >= 1 ? "100% 100%" : "100% 99.9%";
        case "s2":
        case "s3":
        case "s6":
          return this.scale >= 1 ? "0 100%" : "0 99.9%";
      }
      return e;
    },
    resetBackgroundPosition: function () {
      _.each(
        this.imgdata,
        function (i) {
          this.$(".s" + i.index).css({
            "background-size": i.size + "px",
            "background-position": i.position,
          });
        },
        this
      );
    },
    onDoorTap: function () {
      if (this.data.conf("insideView") && !this.data.imageLoading) {
        var i = this.data.wallState;
        "outside-wall" === i
          ? this.data.wallStateChange({ state: "inside-wall" })
          : "inside-wall" === i &&
            this.data.wallStateChange({ state: "outside-wall" });
      }
    },
    render: function () {
      return (
        this.$el.append(d({ emptyImage: a.getImageUrl("empty.png") })),
        this.redrawGrid(),
        new s({ el: this.$(".image") }),
        this
      );
    },
  });
});
