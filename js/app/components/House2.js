define([
  "require",
  "backbone",
  "underscore",
  "app/events/KEvent",
  "app/models/Model",
  "app/util/ImageLoader",
  "app/util/Util",
  "app/components/HouseControlBar",
  "app/profile",
  "hammer",
  "app/components/Switcher",
], function (t) {
  var o = t("backbone"),
    e = t("underscore"),
    s = t("app/events/KEvent"),
    i = t("app/models/Model"),
    n = t("app/util/ImageLoader"),
    r = t("app/util/Util"),
    a = t("app/components/HouseControlBar"),
    h = (t("app/profile"), t("hammer"));
  return o.View.extend({
    id: "door-house",
    events: {
      "click .back-rect": "onBackRectClick",
      "click .control-rect": "onControlRectClick",
      "click a.inside-wall": "requestNewDoorImage",
      "click a.outside-wall": "requestNewDoorImage",
    },
    initialize: function () {
      e.bindAll(
        this,
        "render",
        "chooseClient",
        "setupPoints",
        "setupControlHandles",
        "redrawImg",
        "resizeCanvas",
        "redrawRect",
        "onHouseImageDone",
        "resetPoints",
        "requestNewDoorImage",
        "onModuleLoad",
        "onDoorImageDone",
        "setNewDoorImage",
        "showHouseImage",
        "isHouseImageLoadedRec",
        "onBackRectClick",
        "getB64ImageParams"
      ),
        (this.data = i.getInstance()),
        this.listenTo(s, s.HOUSE_IMAGE_CHANGE, this.onHouseImageChange),
        this.listenTo(s, s.HOUSE_ZOOM_IN, this.onHouseZoomIn),
        this.listenTo(s, s.HOUSE_ZOOM_OUT, this.onHouseZoomOut),
        this.listenTo(s, s.WINDOW_RESIZE_EVENT, this.onWindowResize),
        this.listenTo(s, s.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(
          s,
          s.UPDATE_HOUSE_DOOR_IMAGE,
          this.onUpdateHouseDoorImage
        ),
        this.listenTo(s, s.HOUSE_DOOR_RESET, this.onHouseDoorReset),
        this.listenTo(s, s.UPLOAD_SUCCESS, this.onUploadSuccess),
        this.listenTo(s, s.GET_HOUSE_DOOR_B64, this.onGetB64Image),
        this.listenTo(
          s,
          s.HOUSE_CANVAS_RESIZE_DONE,
          this.houseCanvasResizeDone
        ),
        this.listenTo(s, s.BAUFORM_CHANGE, this.setResetPoints),
        this.listenTo(s, s.DIMENSION_CHANGE, this.setResetPoints),
        this.listenTo(s, s.SIDE_REPEAT_CHANGE, this.setResetPoints),
        this.listenTo(s, s.HOUSE_DOOR_LOADED, this.onDoorImageLoaded),
        (this.isInitialized = !1),
        (this.isHousePredefined = !1),
        (this.doorHasWall = !1),
        (this.forcePointReset = !0),
        (this.isActive = !0),
        (this.currentZoomLevel = 0),
        (this.zoomLevels = [1, 1.4, 1.8]),
        (this.doorImageWidth = 0),
        (this.doorImageHeight = 0),
        (this.houseDoorLoader = new n()),
        this.houseDoorLoader.on("done", this.onDoorImageDone);
    },
    setup: function () {
      (this.houseImageLoader = new n()),
        this.houseImageLoader.on("done", this.onHouseImageDone),
        this.data.houseData && this.onHouseImageChange();
    },
    onHouseImageChange: function () {
      (this.isHousePredefined = !1),
        this.$("#controlHandles .control-point").attr("class", "control-point"),
        this.$("#controlHandles .control-scale").attr("class", "control-scale"),
        this.$("#controlHandles .control-scale-line").attr(
          "class",
          "control-scale-line"
        ),
        this.$("#controlHandles .control-rect").attr(
          "class",
          "control-rect no-stroke"
        ),
        this.houseImageLoader.url({
          url: this.data.houseData.largeImageUrl,
          type: "houseImage",
        }),
        (this.data.houseImageLoading = !0),
        s.trigger(s.OPEN_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
          background: !1,
        }),
        this.isInitialized &&
          (this.$("#house-door-canvas").hide(),
          this.$("#controlHandles").hide()),
        this.houseImageLoader.load();
    },
    onHouseImageDone: function (t) {
      var o = t.images[0].img;
      $(o).attr("class", "house-image house-view-layer").css("opacity", "0"),
        this.$(".house-image").replaceWith(o),
        (this.currentZoomLevel = 0),
        (this.houseImageDelayCount = 0),
        this.isHouseImageLoadedRec();
    },
    isHouseImageLoadedRec: function () {
      var t = this.$(".house-image");
      (t.width() > 1 && t.prop("naturalWidth") > 1) ||
      this.houseImageDelayCount > 25
        ? this.showHouseImage()
        : (r.log("delay house image:" + this.houseImageDelayCount),
          this.houseImageDelayCount++,
          e.delay(this.isHouseImageLoadedRec, 100));
    },
    showHouseImage: function () {
      this.resizeCanvas(),
        this.$(".house-image").css("opacity", "1"),
        this.isInitialized
          ? this.isHousePredefined != this.doorHasWall
            ? ((this.forcePointReset = !0), this.requestNewDoorImage())
            : (this.resetPoints(),
              this.redrawImg(),
              this.redrawRect(),
              s.trigger(s.CLOSE_POPUP),
              this.$("#house-door-canvas").show(),
              this.$("#controlHandles").show())
          : (this.setupPoints(), this.chooseClient());
    },
    onUploadSuccess: function (t) {
      (this.data.houseData = {
        largeImageUrl: t.url,
        bottom: 0,
        center: 0,
        scale: 1,
      }),
        this.onHouseImageChange();
    },
    onHouseZoomIn: function () {
      this.currentZoomLevel < this.zoomLevels.length - 1 &&
        (this.currentZoomLevel++,
        this.resizeCanvas(),
        this.redrawImg(),
        this.redrawRect());
    },
    onHouseZoomOut: function () {
      this.currentZoomLevel > 0 &&
        (this.currentZoomLevel--,
        this.resizeCanvas(),
        this.redrawImg(),
        this.redrawRect());
    },
    onBackRectClick: function (t) {
      this.$("#controlHandles .control-point").attr(
        "class",
        "control-point hidden"
      ),
        this.$("#controlHandles .control-scale").attr(
          "class",
          "control-scale hidden"
        ),
        this.$("#controlHandles .control-scale-line").attr(
          "class",
          "control-scale-line hidden"
        ),
        this.$("#controlHandles .control-rect").attr(
          "class",
          "control-rect no-stroke"
        );
    },
    onControlRectClick: function () {
      this.isHousePredefined ||
        (this.$("#controlHandles .control-point").attr(
          "class",
          "control-point"
        ),
        this.$("#controlHandles .control-scale").attr("class", "control-scale"),
        this.$("#controlHandles .control-scale-line").attr(
          "class",
          "control-scale-line"
        ));
    },
    onHouseDoorReset: function () {
      this.resetPoints(), this.redrawImg(), this.redrawRect();
    },
    onWindowResize: function () {
      this.isActive &&
        (this.resizeCanvas(), this.redrawImg(), this.redrawRect());
    },
    resizeCanvas: function (t) {
      var o = this.$(".house-image"),
        s = this.$(".container"),
        i = o.prop("naturalWidth") / s.width(),
        n = o.prop("naturalHeight") / s.height(),
        r =
          s.prop("scrollLeft") /
          (s.prop("scrollWidth") - s.prop("clientWidth")),
        a =
          s.prop("scrollTop") /
          (s.prop("scrollHeight") - s.prop("clientHeight"));
      this.data.isMobile()
        ? i < n
          ? (o.width(s.width() * this.zoomLevels[this.currentZoomLevel]),
            o.height("auto"))
          : (o.width("auto"),
            o.height(s.height() * this.zoomLevels[this.currentZoomLevel]))
        : i > n
        ? (o.width(s.width() * this.zoomLevels[this.currentZoomLevel]),
          o.height("auto"))
        : (o.width("auto"),
          o.height(s.height() * this.zoomLevels[this.currentZoomLevel]));
      var h = this.$("#controlHandles"),
        c = o.width() / h.attr("width"),
        l = this.$(".back-rect"),
        d = this.$("#house-door-canvas");
      if (
        (h.attr("width", o.width()),
        h.attr("height", o.height()),
        l.attr("width", o.width()),
        l.attr("height", o.height()),
        d.attr("width", o.width()),
        d.attr("height", o.height()),
        !this.data.isMobile())
      ) {
        var u = 0,
          p = 0;
        o.width() < s.prop("clientWidth") &&
          (u = (s.prop("clientWidth") - o.width()) / 2),
          o.height() < s.prop("clientHeight") &&
            (p = (s.prop("clientHeight") - o.height()) / 2);
        var g = { left: u, top: p };
        this.$(".container .house-view-layer").css(g);
      }
      var m = this.$("#controlHandles .control-point"),
        v = 0;
      e.forEach(
        this.controlPoints,
        function (t) {
          (t.x *= c),
            (t.y *= c),
            $(m[v]).attr("cx", t.x),
            $(m[v]).attr("cy", t.y),
            v++;
        },
        this
      );
      var f = s.prop("scrollWidth") - s.prop("clientWidth"),
        P = s.prop("scrollHeight") - s.prop("clientHeight");
      s.prop("scrollLeft", isFinite(r) ? f * r : 0.5 * f),
        s.prop("scrollTop", isFinite(a) ? P * a : 0.5 * P);
    },
    chooseClient: function () {
      var o = this.$("#house-door-canvas")[0];
      if (this.data.isOSX() && this.data.isSafari()) {
        o.getContext("2d");
        return void t(["app/components/HouseCanvas"], this.onModuleLoad);
      }
      var e = { antialias: !0, depth: !1, preserveDrawingBuffer: !0 };
      o.getContext("webgl", e) || o.getContext("experimental-webgl", e)
        ? t(["app/components/HouseWGLCanvas"], this.onModuleLoad)
        : t(["app/components/HouseCanvas"], this.onModuleLoad);
    },
    onModuleLoad: function (t) {
      var o = this.$("#house-door-canvas")[0];
      new t({ el: o });
      this.requestNewDoorImage();
    },
    setupPoints: function () {
      (this.controlPoints = [
        { x: 100, y: 100 },
        { x: 300, y: 100 },
        { x: 100, y: 400 },
        { x: 300, y: 400 },
      ]),
        (this.controlScale = { x: 100, y: 100 });
      var t = this.$("#controlHandles")[0];
      this.setupControlHandles(t, this.controlPoints);
    },
    setupControlHandles: function (t, o) {
      var s,
        i = this.$(".container")[0],
        n = 0,
        r = 0,
        a = "",
        c = { x: 0, y: 0 },
        l = e.bind(function (t) {
          (s = $(t.target)),
            (a = s.attr("class")),
            a.indexOf("control-point") >= 0
              ? ((c = o[t.target.attributes.pindex.value]),
                (n = c.x - t.center.x),
                (r = c.y - t.center.y),
                this.isHousePredefined ||
                  (this.$("#house-door-canvas").attr(
                    "class",
                    "house-view-layer transparent"
                  ),
                  this.$("#controlHandles .control-rect").attr(
                    "class",
                    "control-rect"
                  )))
              : a.indexOf("control-scale") >= 0
              ? ((n = this.controlScale.x - t.center.x),
                (r = this.controlScale.y - t.center.y),
                this.isHousePredefined ||
                  (this.$("#house-door-canvas").attr(
                    "class",
                    "house-view-layer transparent"
                  ),
                  this.$("#controlHandles .control-rect").attr(
                    "class",
                    "control-rect"
                  )))
              : a.indexOf("control-rect") >= 0
              ? ((a = "control-rect"),
                (n = this.controlScale.x - t.center.x),
                (r = this.controlScale.y - t.center.y),
                this.isHousePredefined ||
                  (this.$("#house-door-canvas").attr(
                    "class",
                    "house-view-layer transparent"
                  ),
                  this.$("#controlHandles .control-rect").attr(
                    "class",
                    "control-rect"
                  )))
              : ((a = "container"), (c.x = t.center.x), (c.y = t.center.y));
        }, this),
        d = e.bind(function (i) {
          if ("control-point" == a) {
            if (this.isHousePredefined) return;
            (c.x = i.center.x + n),
              (c.y = i.center.y + r),
              s.attr("cx", c.x),
              s.attr("cy", c.y),
              this.redrawRect();
          }
          if ("control-scale" == a) {
            if (this.isHousePredefined) return;
            var h,
              l = i.center.x + n - this.controlScale.x,
              d = 0,
              u = 0,
              p = 0,
              g = 0;
            e.forEach(
              this.controlPoints,
              function (t) {
                (p += t.x), (g += t.y), t.x > d && ((d = t.x), (h = u)), u++;
              },
              this
            ),
              (p /= 4),
              (g /= 4);
            var m = 99999,
              v = 0;
            (u = 0),
              e.forEach(
                this.controlPoints,
                function (t) {
                  t.y >= g && t.x < m && ((m = t.x), (v = u)), u++;
                },
                this
              );
            var f = this.controlPoints[v].x,
              P = this.controlPoints[v].y,
              w = this.controlPoints[h].x - f,
              y = this.controlPoints[h].y - P,
              H = (w + l) / w;
            if (((w += l), (y *= H), f + 10 > f + w))
              return void this.redrawRect(!0);
            (this.controlScale.x += l),
              (this.controlPoints[h].x = f + w),
              (this.controlPoints[h].y = P + y);
            var x = $(t).find(".control-point"),
              I = 0;
            e.forEach(
              o,
              function (t) {
                if (I != h) {
                  var o = this.controlPoints[I].x - f,
                    e = this.controlPoints[I].y - P;
                  (o *= H),
                    (e *= H),
                    (this.controlPoints[I].x = f + o),
                    (this.controlPoints[I].y = P + e);
                }
                $(x[I]).attr("cx", t.x), $(x[I]).attr("cy", t.y), I++;
              },
              this
            ),
              this.redrawRect(!0);
          }
          if ("control-rect" == a) {
            if (this.isHousePredefined) return;
            var l = i.center.x + n - this.controlScale.x,
              D = i.center.y + r - this.controlScale.y,
              x = $(t).find(".control-point"),
              I = 0;
            e.forEach(
              o,
              function (t) {
                (t.x += l),
                  (t.y += D),
                  $(x[I]).attr("cx", t.x),
                  $(x[I]).attr("cy", t.y),
                  I++;
              },
              this
            ),
              this.redrawRect();
          }
          if ("container" == a) {
            var E = this.$(".container"),
              l = c.x - i.center.x,
              D = c.y - i.center.y;
            E.prop("scrollLeft", E.prop("scrollLeft") + l),
              E.prop("scrollTop", E.prop("scrollTop") + D),
              (c.x = i.center.x),
              (c.y = i.center.y);
          }
        }, this),
        u = 0;
      if (
        (e.each(
          o,
          function (o) {
            var e = this.makeSVG("circle", {
              cx: o.x,
              cy: o.y,
              r: 30,
              class: this.isHousePredefined
                ? "control-point hidden"
                : "control-point",
              pindex: u,
            });
            t.appendChild(e), u++;
          },
          this
        ),
        this.data.isTouch())
      ) {
        var p = e.bind(function (t) {
          var o = $(t.target).attr("class");
          return (
            "touchstart" == t.type &&
              (o.match(/back-rect/)
                ? this.onBackRectClick()
                : o.match(/control-rect/) && this.onControlRectClick()),
            t.preventDefault(),
            !1
          );
        }, this);
        $(i).on("touchstart", p),
          $(i).on("touchmove", p),
          $(i).on("touchend", p);
      }
      var g = e.bind(function (t) {
          (n = 0),
            (r = 0),
            (s = null),
            (a = null),
            (c = { x: 0, y: 0 }),
            this.$("#house-door-canvas").attr("class", "house-view-layer"),
            this.$("#controlHandles .control-rect").attr(
              "class",
              "control-rect no-stroke"
            ),
            this.redrawImg(),
            this.redrawRect();
        }, this),
        m = new h(i);
      m.get("pan").set({ threshold: 0, prevent_default: !0 }),
        m.on("panstart", l),
        m.on("pan", d),
        m.on("panend", g);
    },
    makeSVG: function (t, o) {
      var e = document.createElementNS("http://www.w3.org/2000/svg", t);
      for (var s in o) e.setAttribute(s, o[s]);
      return e;
    },
    getPointsPath: function () {
      var t = "M";
      return (
        (t += this.controlPoints[0].x + "," + this.controlPoints[0].y + " "),
        (t += this.controlPoints[1].x + "," + this.controlPoints[1].y + " "),
        (t += this.controlPoints[3].x + "," + this.controlPoints[3].y + " "),
        (t += this.controlPoints[2].x + "," + this.controlPoints[2].y + " "),
        (t += this.controlPoints[0].x + "," + this.controlPoints[0].y + "Z")
      );
    },
    resetPoints: function () {
      var t = this.$(".house-image"),
        o = t.width() / t.prop("naturalWidth"),
        s = this.doorImageWidth * o,
        i = this.doorImageHeight * o,
        n = t.width() / 2,
        r = t.height() / 2 + i / 2;
      this.data.houseData.center > 0 &&
        ((n = this.data.houseData.center * o),
        (r = (t.prop("naturalHeight") - this.data.houseData.bottom) * o),
        (s *= this.data.houseData.scale),
        (i *= this.data.houseData.scale)),
        (this.controlPoints[0].x = n - s / 2),
        (this.controlPoints[0].y = r - i),
        (this.controlPoints[1].x = n + s / 2),
        (this.controlPoints[1].y = r - i),
        (this.controlPoints[2].x = n - s / 2),
        (this.controlPoints[2].y = r),
        (this.controlPoints[3].x = n + s / 2),
        (this.controlPoints[3].y = r);
      var a = this.$("#controlHandles .control-point"),
        h = 0;
      e.forEach(
        this.controlPoints,
        function (t) {
          $(a[h]).attr("cx", t.x), $(a[h]).attr("cy", t.y), h++;
        },
        this
      );
    },
    redrawImg: function (t) {
      (this.data.houseImageLoading = !0),
        s.trigger(s.HOUSE_COOR_UPDATE, this.controlPoints);
    },
    redrawRect: function (t) {
      this.$(".control-rect").attr("d", this.getPointsPath());
      var o = this.$("#controlHandles .control-scale"),
        s = this.$("#controlHandles .control-scale-line"),
        i = 0,
        n = 0,
        r = 0;
      e.forEach(
        this.controlPoints,
        function (t) {
          (n += t.x), (r += t.y), t.x > i && (i = t.x);
        },
        this
      ),
        (n /= 4),
        (r /= 4),
        t || (this.controlScale.x = i + 40),
        (this.controlScale.y = r);
      var a =
        "M" + (this.controlScale.x - 20) + "," + (this.controlScale.y - 23);
      (a += " " + (this.controlScale.x + 20) + "," + this.controlScale.y),
        (a +=
          " " + (this.controlScale.x - 20) + "," + (this.controlScale.y + 23)),
        (a +=
          " " +
          (this.controlScale.x - 20) +
          "," +
          (this.controlScale.y - 23) +
          "Z"),
        o.attr("d", a),
        s.attr({
          x1: n,
          y1: r,
          x2: this.controlScale.x - 20,
          y2: this.controlScale.y,
        });
    },
    setResetPoints: function () {
      this.forcePointReset = !0;
    },
    onMenuChange: function (t) {
      "myHouse" == t.state ? (this.isActive = !0) : (this.isActive = !1);
    },
    onUpdateHouseDoorImage: function () {
      this.resizeCanvas(), this.requestNewDoorImage(), this.redrawRect();
    },
    requestNewDoorImage: function () {
      this.doorHasWall = this.isHousePredefined;
      var t = this.data.conf("houseImageIgnoreWallState");
      (null == t || t) && this.$("#house-door-canvas").hide(),
        this.$("#controlHandles").hide(),
        (this.data.houseImageLoading = !0),
        s.trigger(s.OPEN_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
          background: !1,
        }),
        this.data.getB64Image(this.isHousePredefined);
    },
    onDoorImageLoaded: function (t) {
      s.trigger(s.CLOSE_POPUP),
        this.houseDoorLoader.url({
          url: "data:image/png;base64, " + t.image,
          type: "houseDoorImage",
        }),
        this.houseDoorLoader.load();
    },
    onDoorImageDone: function (t) {
      var o = t.images[0].img;
      this.setNewDoorImage(o);
    },
    setNewDoorImage: function (t) {
      (this.doorImageWidth = t.width),
        (this.doorImageHeight = t.height),
        (!this.isInitialized ||
          this.isHousePredefined ||
          this.forcePointReset) &&
          (this.resetPoints(),
          this.redrawRect(),
          (this.isInitialized = !0),
          (this.forcePointReset = !1)),
        s.trigger(s.HOUSE_DOOR_DONE, this.controlPoints, t),
        this.$("#house-door-canvas").show(),
        this.$("#controlHandles").show();
    },
    onGetB64Image: function () {
      var t = 1.2 * (2 * this.doorImageWidth + 2 * this.doorImageHeight),
        o = Math.sqrt(
          Math.pow(this.controlPoints[1].x - this.controlPoints[0].x, 2) +
            Math.pow(this.controlPoints[1].y - this.controlPoints[0].y, 2)
        );
      (o += Math.sqrt(
        Math.pow(this.controlPoints[3].x - this.controlPoints[1].x, 2) +
          Math.pow(this.controlPoints[3].y - this.controlPoints[1].y, 2)
      )),
        (o += Math.sqrt(
          Math.pow(this.controlPoints[2].x - this.controlPoints[0].x, 2) +
            Math.pow(this.controlPoints[2].y - this.controlPoints[0].y, 2)
        )),
        (o += Math.sqrt(
          Math.pow(this.controlPoints[3].x - this.controlPoints[2].x, 2) +
            Math.pow(this.controlPoints[3].y - this.controlPoints[2].y, 2)
        )),
        (this.pointsBeforeSave = []);
      var i = t / o,
        n = 0,
        r = 0,
        a = 999999,
        h = 999999;
      e.forEach(
        this.controlPoints,
        function (t) {
          this.pointsBeforeSave.push(e.clone(t)),
            (t.x *= i),
            (t.y *= i),
            t.x > n && (n = t.x),
            t.y > r && (r = t.y),
            t.x < a && (a = t.x),
            t.y < h && (h = t.y);
        },
        this
      ),
        (n -= a),
        (r -= h),
        e.forEach(
          this.controlPoints,
          function (t) {
            (t.x -= a), (t.y -= h);
          },
          this
        );
      var c = this.$("#house-door-canvas");
      c.attr("width", n),
        c.attr("height", r),
        s.trigger(s.HOUSE_COOR_UPDATE, this.controlPoints, !0);
    },
    houseCanvasResizeDone: function () {
      var t = this.$("#house-door-canvas"),
        o = t[0].toDataURL(),
        i = 0;
      e.forEach(
        this.pointsBeforeSave,
        function (t) {
          (this.controlPoints[i].x = t.x), (this.controlPoints[i].y = t.y), i++;
        },
        this
      ),
        this.resizeCanvas(),
        this.redrawImg(),
        this.redrawRect(),
        s.trigger(s.HOUSE_DOOR_B64_DONE, o, this.getB64ImageParams());
    },
    getB64ImageParams: function () {
      var t = { width: 0, height: 0, top: 99999, left: 99999 },
        o = this.$(".house-image"),
        s = o.prop("naturalWidth") / o.width();
      return (
        e.forEach(
          this.controlPoints,
          function (o) {
            var e = o.x * s,
              i = o.y * s;
            e > t.width && (t.width = e),
              i > t.height && (t.height = i),
              e < t.left && (t.left = e),
              i < t.top && (t.top = i);
          },
          this
        ),
        (t.width -= t.left),
        (t.height -= t.top),
        t
      );
    },
    render: function () {
      this.$el.append(
        "<div class='container'><img class='house-image house-view-layer' src='' alt=''><canvas width='500' height='500' class='house-view-layer' id='house-door-canvas'></canvas><svg width='500' height='500' class='house-view-layer' id='controlHandles'><rect class='back-rect' x='0' y='0' width='500' height='500'/><path d='M0,0 0,0 0,0 0,0Z' class='control-rect' /><path d='M0,0, 0,0 0,0Z' class='control-scale'/><line x1='0' x2='0' y1='0' y2='0' class='control-scale-line'/></svg></div><div class='control-bar'></div><div id='uploaded-img-wrapper'><img src='' /></div>"
      );
      var o =
        (new a({ el: this.$(".control-bar") }),
        this.data.conf("houseImageIgnoreWallState"));
      if (null != o && !o) {
        var e = t("app/components/Switcher"),
          s = new e().render().el;
        $(s).addClass(
          this.data.isInsideWall() ? "inside-wall" : "outside-wall"
        ),
          this.$el.append(s);
      }
      return this;
    },
  });
});
