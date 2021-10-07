define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/events/KEvent",
  "app/util/Util",
  "app/models/Model",
], function (t) {
  var i = t("backbone"),
    s = t("underscore"),
    e = t("jquery"),
    n = t("app/events/KEvent"),
    h = t("app/util/Util"),
    o = t("app/models/Model"),
    a = i.View.extend({
      template:
        '<div class="kslider-container">            <div class="kslider-label"></div>            <div class="kslider-ctrl">                <div class="kslider-minus">&minus;</div>                <div class="kslider-plus">+</div>                <div class="kslider-data"> <input maxlength="5" name="test" value="0"/> <span class="imperial hidden"></span> </div>            </div>            <div class="kslider-bar">                <div class="selected-kslider-bar">                    <div class="kslider-handle"><div></div></div>                </div>                <div class="limit"></div>            </div>',
      initialize: function (t, i) {
        (this.prop = {
          min: 0,
          max: 1e3,
          limit: null,
          start: 0,
          step: i.step || 1,
          decimalPlaces: i.decimalPlaces || 0,
          onDragEnd: function () {},
          onInputChange: function () {},
          enabled: !0,
          visible: !0,
          label: null,
          id: i.id,
        }),
          (this.mmValue = 0),
          (this.pxValue = 0),
          (this.init = !1),
          (this.width = 500),
          (this.diff = !1),
          s.extend(this.prop, i),
          (this.data = o.getInstance()),
          s.bindAll(
            this,
            "_render",
            "_dragStart",
            "_setup",
            "_onDrag",
            "_onDragEnd",
            "_mm2px",
            "_px2mm",
            "_getWidth",
            "_onInputChange",
            "_onInputKeydown",
            "_onTouchMove",
            "_onTouchEnd",
            "_onMinusClick",
            "_onPlusClick",
            "_onDoorImageLoad",
            "_onDoorImageDone",
            "_onDoorImageError",
            "_onWindowResize",
            "_onTouchStart",
            "_getLimit",
            "_resetInput",
            "enable"
          ),
          this.listenTo(n, n.DOOR_IMAGE_LOAD, this._onDoorImageLoad),
          this.listenTo(n, n.DOOR_IMAGE_DONE, this._onDoorImageDone),
          this.listenTo(n, n.DOOR_IMAGE_ERROR, this._onDoorImageError),
          this.listenTo(n, n.WINDOW_RESIZE_EVENT, this._onWindowResize),
          this._render(),
          (this.bar = this.$(".selected-kslider-bar")),
          (this.limit = this.$(".limit")),
          (this.handle = this.$(".kslider-handle")),
          (this.kdata = this.$(".kslider-data input")),
          (this.minus = this.$(".kslider-minus")),
          (this.plus = this.$(".kslider-plus")),
          (this.label = this.$(".kslider-label")),
          (this.imperial = this.$(".imperial")),
          this.prop.label
            ? this.label.html(this.prop.label)
            : this.label.html("no_name"),
          this.data.isTouch() && this.$el.addClass("touch"),
          this.prop.enabled
            ? ((this._enabled = !0), this._regEvents())
            : ((this._enabled = !1),
              this.$el.addClass("disabled"),
              this.kdata.prop("disabled", !0)),
          this.data.conf("imperialUnits") &&
            this.$(".imperial").removeClass("hidden"),
          s.debounce(this._setup, 10)();
      },
      _regEvents: function () {
        this.handle.on("mousedown", this._dragStart),
          this.kdata
            .on("change", this._onInputChange)
            .keydown(this._onInputKeydown),
          this.handle
            .on("touchmove", this._onTouchMove)
            .on("touchend", this._onTouchEnd)
            .on("touchstart", this._onTouchStart),
          this.kdata.keydown(this._onInputKeydown),
          this.kdata.blur(this._resetInput),
          this.minus.on("click", this._onMinusClick),
          this.plus.on("click", this._onPlusClick);
      },
      _unregEvents: function () {
        this.handle.off(), this.minus.off(), this.plus.off(), this.kdata.off();
      },
      _setup: function () {
        (this.handleWidth = this.handle.width()),
          (this.width = this._getWidth()),
          this._setValue(this._mm2px(this.prop.start), !0),
          this.prop.visible || this.$el.addClass("hidden");
      },
      _resetInput: function () {
        this.kdata.val(this.mmValue);
      },
      _onInputKeydown: function (t) {
        13 == (t.charCode ? t.charCode : t.keyCode ? t.keyCode : 0) &&
          (t.preventDefault(), this._onInputChange());
      },
      _dragStart: function (t) {
        this._stopEvent(t),
          1 === t.which &&
            0 != this._enabled &&
            ((this.width = this._getWidth()),
            n.trigger(n.SLIDER_DRAGGING, !0),
            e(document)
              .on("mousemove.kslider", this._onDrag)
              .on("mouseup.kslider", this._onDragEnd),
            e("body").addClass("dragging"));
      },
      _onDrag: function (t) {
        this._stopEvent(t), this._move(t.clientX);
      },
      _onDragEnd: function (t) {
        e(document).off(".kslider"),
          e("body").removeClass("dragging"),
          this.diff && (this._triggerDragEnd(), (this.diff = !1)),
          n.trigger(n.SLIDER_DRAGGING, !1);
      },
      _onTouchMove: function (t) {
        if (
          (this._stopEvent(t),
          t.originalEvent && 1 == t.originalEvent.touches.length)
        ) {
          var i = t.originalEvent.touches[0];
          this._move(i.clientX);
        }
      },
      _onTouchStart: function (t) {
        this._stopEvent(t), n.trigger(n.SLIDER_DRAGGING, !0);
      },
      _onTouchEnd: function (t) {
        this._stopEvent(t),
          this.diff && (this._triggerDragEnd(), (this.diff = !1)),
          n.trigger(n.SLIDER_DRAGGING, !1);
      },
      _onMinusClick: function (t) {
        this._stopEvent(t);
        var i = this._mm2px(this.mmValue - this.prop.step);
        i < 0 && (i = 0),
          this._setValue(i),
          this.timeout && clearTimeout(this.timeout),
          (this.timeout = setTimeout(e.proxy(this._triggerDragEnd, this), 500));
      },
      _onPlusClick: function (t) {
        this._stopEvent(t);
        var i = this._mm2px(this.mmValue + this.prop.step),
          s = this.width;
        i > s && (i = s);
        var n = this._getLimit();
        i > n && (i = n),
          this._setValue(i),
          this.timeout && clearTimeout(this.timeout),
          (this.timeout = setTimeout(e.proxy(this._triggerDragEnd, this), 500));
      },
      _move: function (t) {
        var i = this.$el.offset().left,
          s = (this.width, t - i);
        s < 0 && (s = 0);
        var e = this._getLimit();
        s > e && (s = e), this._setValue(s);
      },
      _setValue: function (t, i) {
        var s = h.round(t, this.prop.decimalPlaces);
        this.pxValue = s;
        var e = this._px2mm(t);
        e == this.mmValue || i || (this.diff = !0),
          (this.mmValue = h.round(e, this.prop.decimalPlaces)),
          this.handle.css({ left: s - this.handleWidth / 2 + "px" }),
          this.bar.css({ width: s + "px" });
        var n = this._getLimit();
        this.prop.limit && n < this.width
          ? (this.limit.show(),
            this.limit.css({ left: this._getLimit() + "px" }))
          : this.limit.hide();
        var o = this.mmValue;
        this.imperial.html("(" + h.getInch(o) + " inch)"), this.kdata.val(o);
      },
      _onInputChange: function () {
        var t = this.kdata.val();
        t = t.replace(",", ".");
        var i = t;
        if (
          (isNaN(i) && (i = this.prop.start),
          this.prop.limit && i > this.prop.limit && (i = this.prop.limit),
          i > this.prop.max && (i = this.prop.max),
          i < this.prop.min && (i = this.prop.min),
          this.kdata.val(i),
          i == this.mmValue)
        )
          return void this._triggerInputChange(t, i, t !== i);
        var s = this._mm2px(i),
          e = this.width;
        s > e && (s = e),
          s < 0 && (s = 0),
          this._setValue(s),
          this._triggerDragEnd(!0),
          this._triggerInputChange(t, i, t !== i);
      },
      _onWindowResize: function (t) {
        this._stopEvent(t), (this.width = this._getWidth());
        var i = this._mm2px(this.mmValue);
        this._setValue(i);
      },
      _onDoorImageLoad: function () {
        (this._enabled = !1), this._unregEvents();
      },
      _onDoorImageDone: function () {
        this.prop.enabled && ((this._enabled = !0), this._regEvents());
      },
      _onDoorImageError: function () {
        this.prop.enabled && ((this._enabled = !0), this._regEvents());
      },
      _triggerDragEnd: function (t) {
        "function" == typeof this.prop.onDragEnd &&
          this.prop.onDragEnd({
            mm: h.round(this.mmValue, this.prop.decimalPlaces),
            px: this.pxValue,
            id: this.prop.id,
            inputChange: t,
          });
      },
      _triggerInputChange: function (t, i, s) {
        "function" == typeof this.prop.onInputChange &&
          this.prop.onInputChange({
            inputValue: t,
            value: i,
            mm: h.round(this.mmValue, this.prop.decimalPlaces),
            id: this.prop.id,
            inputValueChanged: s,
          });
      },
      _stopEvent: function (t) {
        try {
          t.stopPropagation(), t.preventDefault();
        } catch (t) {}
      },
      _getWidth: function () {
        return this.$el.width();
      },
      _px2mm: function (t) {
        return (
          (t * (this.prop.max - this.prop.min) + this.width * this.prop.min) /
          this.width
        );
      },
      _mm2px: function (t) {
        return (
          ((t - this.prop.min) / (this.prop.max - this.prop.min)) * this.width
        );
      },
      _render: function () {
        return this.$el.append(e(this.template)), this;
      },
      _setValueDeb: function () {
        this._setValue(this._mm2px(this.prop.start));
      },
      _getLimit: function () {
        return this.prop.limit ? this._mm2px(this.prop.limit) : this.width;
      },
      enable: function (t) {
        this.prop.enabled != t &&
          ((this.prop.enabled = t),
          (this._enabled = t),
          t
            ? (this.$el.removeClass("disabled"),
              this.kdata.prop("disabled", !1),
              this._regEvents())
            : (this.$el.addClass("disabled"),
              this.kdata.prop("disabled", !0),
              this._unregEvents()));
      },
      getValue: function () {
        return {
          mm: h.round(this.mmValue, this.prop.decimalPlaces),
          px: this.pxValue,
          limit: this.prop.limit,
        };
      },
      visible: function (t) {
        t ? this.$el.removeClass("hidden") : this.$el.addClass("hidden");
      },
      setValue: function (t) {
        return (
          s.extend(this.prop, t),
          void 0 !== t.visible && this.visible(t.visible),
          s.debounce(
            s.bind(function () {
              (this.width = this._getWidth()),
                this._setValue(this._mm2px(this.prop.start));
            }, this),
            10
          )(),
          this
        );
      },
    });
  return {
    getInstance: function (t, i) {
      return new a({ el: t }, i);
    },
  };
});
