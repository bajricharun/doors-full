define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "lib/text!tpl/eutherm/construction2.html",
  "app/events/KEvent",
  "app/models/Model",
  "app/util/Util",
  "app/components/Slider",
  "app/util/Labels",
], function (t) {
  var i = t("backbone"),
    e = t("underscore"),
    a = t("jquery"),
    d = t("lib/text!tpl/eutherm/construction2.html"),
    s = t("app/events/KEvent"),
    n = t("app/models/Model"),
    h = t("app/util/Util"),
    o = t("app/components/Slider"),
    l = t("app/util/Labels"),
    r = i.View.extend({
      tagName: "a",
      initialize: function () {
        e.bindAll(this, "render"), (this.data = n.getInstance());
      },
      render: function () {
        return (
          this.$el.append(
            this.model.get("label")
              ? this.model.get("label")
              : this.model.get("code")
          ),
          this.$el.attr({ cid: this.model.cid, id: this.model.get("code") }),
          this
        );
      },
    });
  return i.View.extend({
    className: "scrolling",
    labels: null,
    id: "construction-view",
    events: {
      "change #repeatLeft select": "onRepeatLeftChange",
      "change #repeatRight select": "onRepeatRightChange",
      "click .info": "onRestrictionInfoClick",
      "click #din-direction > .subsection > a": "onDinClick",
      "click #inner_wing > .subsection > a": "onLeafSelectClick",
      "click #overlight_type > .subsection > a": "onOverlightTypeClick",
    },
    initialize: function () {
      e.bindAll(
        this,
        "render",
        "setData",
        "setDinImage",
        "onPanel2WidthChange",
        "onMiddleWidthChange",
        "onDoorWidthChange",
        "onDoorHeightChange",
        "onLeftWidthChange",
        "onRightWidthChange",
        "onTopHeightChange",
        "onDoorData"
      ),
        (this.template = e.template(d, { variable: "data" })),
        (this.data = n.getInstance()),
        this.listenTo(s, s.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(s, s.EQUIPMENT_DATA, this.onDinDirectionData),
        this.listenTo(s, s.FULL_DIMENSION_CHANGE, this.updateFullDimensions),
        this.listenTo(s, s.MENU_CHANGE_EVENT, this.onMenuChange),
        this.data.getEquipment("din"),
        this.render(),
        h.fixScrolling(this.$el, this.data),
        this.data.ddr && this.onDoorData(),
        this.setData();
    },
    render: function () {
      return (
        l.set("fullDim", this.data.getFullDimensions()),
        this.$el.html(this.template({ model: this.data, label: l })),
        (this.widthSlider = o.getInstance(this.$("#dWidth"), {
          min: this.data.cdd.minDoorWidth,
          max: this.data.cdd.maxDoorWidth,
          start: this.data.cdd.getWidth(),
          enabled: !0,
          onDragEnd: this.onDoorWidthChange,
          label: l.get("construction", "DOOR_WIDTH"),
        })),
        (this.heightSlider = o.getInstance(this.$("#dHeight"), {
          min: this.data.cdd.minDoorHeight,
          max: this.data.cdd.maxDoorHeight,
          start: this.data.cdd.getHeight(),
          enabled: !0,
          onDragEnd: this.onDoorHeightChange,
          label: l.get("construction", "DOOR_HEIGHT"),
        })),
        (this.door2WidthSlider = o.getInstance(this.$("#d2Width"), {
          min: this.data.cdd.minDoorWidth,
          max: this.data.cdd.maxDoorWidth,
          start: this.data.cdd.getPanel2Width(),
          enabled: !0,
          onDragEnd: this.onPanel2WidthChange,
          visible:
            this.data.isDoubleFrame() && this.data.conf("adjustablePanel2"),
          label: l.get("construction", "DOOR2_WIDTH"),
        })),
        (this.middleWidthSlider = o.getInstance(this.$("#mWidth"), {
          min: this.data.cdd.minSideWidth,
          max: this.data.cdd.maxSideWidth,
          start: this.data.cdd.getMiddleWidth(),
          enabled: !0,
          onDragEnd: this.onMiddleWidthChange,
          visible: this.data.isMiddleGlassFrame(),
          label: l.get("construction", "MIDDLE_WIDTH"),
        })),
        (this.leftSideSlider = o.getInstance(this.$("#lsWidth"), {
          min: this.data.cdd.minSideWidth,
          max: this.data.cdd.maxSideWidth,
          start: this.data.cdd.getLeftWidth(),
          enabled: !0,
          onDragEnd: this.onLeftWidthChange,
          visible: this.data.isLeftFrame(),
          label: l.get("construction", "LEFT_SIDE_WIDTH"),
        })),
        (this.rightSideSlider = o.getInstance(this.$("#rsWidth"), {
          min: this.data.cdd.minSideWidth,
          max: this.data.cdd.maxSideWidth,
          start: this.data.cdd.getRightWidth(),
          enabled: !0,
          onDragEnd: this.onRightWidthChange,
          visible: this.data.isRightFrame(),
          label: l.get("construction", "RIGHT_SIDE_WIDTH"),
        })),
        (this.topSideSlider = o.getInstance(this.$("#upHeight"), {
          min: this.data.cdd.minTopHeight,
          max: this.data.cdd.maxTopHeight,
          start: this.data.cdd.getTopHeight(),
          enabled: !0,
          onDragEnd: this.onTopHeightChange,
          visible: this.data.isTopFrame(),
          label: l.get("construction", "TOP_SIDE_HEIGHT"),
        })),
        this
      );
    },
    onDoorWidthChange: function (t) {
      this.data.dimensionsChange(t.mm, "dWidth");
    },
    onDoorHeightChange: function (t) {
      this.data.dimensionsChange(t.mm, "dHeight");
    },
    onPanel2WidthChange: function (t) {
      this.data.dimensionsChange(t.mm, "d2Width");
    },
    onMiddleWidthChange: function (t) {
      this.data.dimensionsChange(t.mm, "mWidth");
    },
    onLeftWidthChange: function (t) {
      this.data.dimensionsChange(t.mm, "lsWidth");
    },
    onRightWidthChange: function (t) {
      this.data.dimensionsChange(t.mm, "rsWidth");
    },
    onTopHeightChange: function (t) {
      this.data.dimensionsChange(t.mm, "upHeight");
    },
    onRepeatLeftChange: function (t) {
      if ((a(t.currentTarget).blur(), this.data.imageLoading))
        return void this.$(t.target).val(this.data.cdd.getRepeatLeft());
      this.data.sideRepeatLeftChange(t.target.value);
    },
    onRepeatRightChange: function (t) {
      if ((a(t.currentTarget).blur(), this.data.imageLoading))
        return void this.$(t.target).val(this.data.cdd.getRepeatRight());
      this.data.sideRepeatRightChange(t.target.value);
    },
    updateFullDimensions: function () {
      this.$("#fullDimension span.calculation").html(
        this.data.getFullDimensions()
      );
      var t = this.data.getTopWidthRestrictionText();
      t
        ? (this.$("#construction-max-width-remark span").html(t),
          this.$("#construction-max-width-remark").removeClass("hidden"))
        : this.$("#construction-max-width-remark").addClass("hidden");
    },
    onMenuChange: function (t) {
      "konstruktion" == t.state && (this.setData(), this.setSliders());
    },
    setSliders: function () {
      this.widthSlider.setValue({
        visible: !0,
        min: this.data.cdd.minDoorWidth,
        max: this.data.cdd.maxDoorWidth,
        start: this.data.cdd.getWidth(),
      }),
        this.heightSlider.setValue({
          visible: !0,
          min: this.data.cdd.minDoorHeight,
          max: this.data.cdd.maxDoorHeight,
          start: this.data.cdd.getHeight(),
        }),
        this.data.isDoubleFrame() && this.data.conf("adjustablePanel2")
          ? this.door2WidthSlider.setValue({
              visible: !0,
              min: this.data.cdd.minDoorWidth,
              max: this.data.cdd.maxDoorWidth,
              start: this.data.cdd.getPanel2Width(),
            })
          : this.door2WidthSlider.setValue({
              visible: !1,
              min: this.data.cdd.minDoorWidth,
              max: this.data.cdd.maxDoorWidth,
              start: this.data.cdd.getPanel2Width(),
            }),
        this.data.isMiddleGlassFrame()
          ? this.middleWidthSlider.setValue({
              visible: !0,
              min: this.data.cdd.minSideWidth,
              max: this.data.cdd.maxSideWidth,
              start: this.data.cdd.getMiddleWidth(),
            })
          : this.middleWidthSlider.setValue({
              visible: !1,
              min: this.data.cdd.minSideWidth,
              max: this.data.cdd.maxSideWidth,
              start: this.data.cdd.getMiddleWidth(),
            }),
        this.data.isLeftFrame()
          ? this.leftSideSlider.setValue({
              visible: !0,
              start: this.data.cdd.getLeftWidth(),
              min: this.data.cdd.minSideWidth,
              max: this.data.cdd.maxSideWidth,
            })
          : this.leftSideSlider.setValue({
              visible: !1,
              start: this.data.cdd.getLeftWidth(),
              min: this.data.cdd.minSideWidth,
              max: this.data.cdd.maxSideWidth,
            }),
        this.data.isRightFrame()
          ? this.rightSideSlider.setValue({
              visible: !0,
              start: this.data.cdd.getRightWidth(),
              min: this.data.cdd.minSideWidth,
              max: this.data.cdd.maxSideWidth,
            })
          : this.rightSideSlider.setValue({
              visible: !1,
              start: this.data.cdd.getRightWidth(),
              min: this.data.cdd.minSideWidth,
              max: this.data.cdd.maxSideWidth,
            }),
        this.data.isTopFrame()
          ? this.topSideSlider.setValue({
              visible: !0,
              start: this.data.cdd.getTopHeight(),
              min: this.data.cdd.minTopHeight,
              max: this.data.cdd.maxTopHeight,
            })
          : this.topSideSlider.setValue({
              visible: !1,
              start: this.data.cdd.getTopHeight(),
              min: this.data.cdd.minTopHeight,
              max: this.data.cdd.maxTopHeight,
            });
    },
    setData: function () {
      this.data.isLeftFrame()
        ? (this.$("#repeatLeft").removeClass("disabled"),
          this.$("#repeatLeft select").prop("disabled", !1))
        : (this.$("#repeatLeft").addClass("disabled"),
          this.$("#repeatLeft select").prop("disabled", !0)),
        this.data.isRightFrame()
          ? (this.$("#repeatRight").removeClass("disabled"),
            this.$("#repeatRight select").prop("disabled", !1))
          : (this.$("#repeatRight").addClass("disabled"),
            this.$("#repeatRight select").prop("disabled", !0)),
        this.$("#din-direction .subsection").attr(
          "class",
          "subsection radio-select " + this.data.cdd.getDinDirection()
        ),
        this.data.isTopFrame()
          ? (this.$("#overlight_type > .radio-select > a").removeClass(
              "disabled"
            ),
            this.data.cdd.getOverlightType()
              ? this.selectOverlight(this.data.cdd.getOverlightType())
              : (this.selectOverlight("overlight_fix"),
                this.data.overlightTypeChange("OVERLIGHT_FIX")))
          : this.$("#overlight_type > .radio-select > a").addClass("disabled");
    },
    onDinDirectionData: function (t, e) {
      "din" == e &&
        ((this.list = new i.Collection(t)),
        this.list.forEach(function (t) {
          var i = new r({ model: t }).render();
          this.$("#din-direction .subsection").append(i.el),
            t.get("code") == this.data.cdd.getDinDirection() &&
              (this.selectedCid = t.cid);
        }, this),
        this.$("#din-direction .subsection").attr(
          "class",
          "subsection radio-select " + this.data.cdd.getDinDirection()
        ),
        this.setDinImage());
    },
    onDinClick: function (t) {
      if (!this.data.imageLoading) {
        var i = a(t.currentTarget);
        this.selectedCid = i.attr("cid");
        var e = this.list.get(this.selectedCid);
        this.data.dinDirectionChange({
          code: e.get("code"),
          label: e.get("label"),
        }),
          this.$("#din-direction .subsection").attr(
            "class",
            "subsection radio-select " + e.get("code")
          ),
          this.setDinImage();
      }
    },
    setDinImage: function () {
      var t = this.list.get(this.selectedCid),
        i = t.get("url");
      i
        ? (this.$("#din_direction_img").show(),
          this.$("#din_direction_img > img").attr("src", i))
        : this.$("#din_direction_img").hide();
    },
    onLeafSelectClick: function (t) {
      if (!this.data.imageLoading && this.data.dd("innerFrameEnabled")) {
        var i = a(t.currentTarget),
          e = i.attr("cid"),
          d = this.wingsList.get(e);
        this.$("#inner_wing > .subsection > a.active").removeClass("active"),
          this.$(
            "#inner_wing > .subsection > a[cid=" + h.quote(e) + "]"
          ).addClass("active"),
          this.data.wingChange(d);
      }
    },
    onDoorData: function () {
      var t = this.data.dd("wings");
      t &&
        t.length > 0 &&
        (this.$("#inner_wing > .subsection").empty(),
        (this.wingsList = new i.Collection(t)),
        this.wingsList.each(function (t) {
          var i = a(
            "<a cid=" +
              h.quote(t.cid) +
              ">" +
              l.get("wing", t.get("code")) +
              "</a>"
          );
          t.get("privzeto") && i.addClass("active"),
            this.$("#inner_wing > .subsection").append(i);
        }, this),
        this.$("#inner_wing").toggleClass(
          "hidden",
          !this.data.dd("innerFrameEnabled")
        ));
    },
    onOverlightTypeClick: function (t) {
      if (this.data.isTopFrame()) {
        this.$("#overlight_type > .radio-select > a.active").removeClass(
          "active"
        );
        var i = a(t.currentTarget);
        i.addClass("active"),
          this.data.overlightTypeChange(i.attr("id").toUpperCase());
      }
    },
    selectOverlight: function (t) {
      this.$("#overlight_type > .radio-select > a.active").removeClass(
        "active"
      ),
        this.$(
          "#overlight_type > .radio-select > a[id=" +
            h.quote(t.toLowerCase()) +
            "]"
        ).addClass("active");
    },
  });
});
