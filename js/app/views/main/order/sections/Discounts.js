define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/components/Slider",
  "app/util/Labels",
], function (t) {
  var i = t("backbone"),
    a = t("underscore"),
    s = t("app/models/Model"),
    e = t("app/events/KEvent"),
    d = (t("app/util/Util"), t("app/components/Slider")),
    n = t("app/util/Labels");
  return i.View.extend({
    className: "section no-padding discounts",
    template: a.template(
      "<div class='section-data'>                <div class='row price user-discount-row'>                    <div class='row-cell p-title'><%=data.label.get('print', 'DISCOUNT')%>:</div>                    <div class='row-cell discount-slider p-input'></div>                    <div class='row-cell discount-price'></div>                </div>                <div class='row price additional-discount-row'>                    <div class='row-cell p-title'><%=data.label.get('print', 'ADDITIONAL_DISCOUNT')%>:</div>                    <div class='row-cell additional-discount-slider p-input'></div>                    <div class='row-cell additional-discount-price p-input'></div>                </div>            </div>",
      { variable: "data" }
    ),
    initialize: function () {
      a.bindAll(this, "onDiscountChange", "onAdditionalDiscountChange"),
        (this.data = s.getInstance()),
        this.listenTo(e, e.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(e, e.PRICE, this.updateView),
        this.listenTo(e, e.USER_DISCOUNT_UPDATE, this.updateView),
        this.listenTo(e, e.RESET_CONFIGURATION, this.updateView),
        this.listenTo(e, e.REFERENCE_LOADED, this.updateView);
    },
    onMenuChange: function (t) {
      "anfrage" === t.state && this.updateView();
    },
    updateView: function () {
      this.$(".discount-price")
        .html(
          0 !== this.data.cdd.getUserDiscount()
            ? this.data.priceData.doorPriceDiscount
            : ""
        )
        .removeClass("spinner"),
        this.$(".additional-discount-price")
          .html(
            0 !== this.data.cdd.getAdditionalDiscount()
              ? this.data.priceData.doorPriceAdditionalDiscount
              : ""
          )
          .removeClass("spinner");
      var t =
          this.data.userData && this.data.userData.discounts
            ? a.findWhere(this.data.userData.discounts, { type: "USER" })
            : null,
        i = !t || "USER_DISCOUNT_HIDDEN" === this.data.userData.discountSystem;
      this.$(".user-discount-row").toggleClass("hidden", i),
        this.discountSlider &&
          this.discountSlider.setValue({
            start: this.data.cdd.getUserDiscount(),
            visible: !0,
          });
      var s =
          this.data.userData && this.data.userData.discounts
            ? a.findWhere(this.data.userData.discounts, { type: "ADDITIONAL" })
            : null,
        e = !s || "USER_DISCOUNT_HIDDEN" === this.data.userData.discountSystem;
      this.$(".additional-discount-row").toggleClass("hidden", e),
        this.additionalDiscountSlider &&
          this.additionalDiscountSlider.setValue({
            start: this.data.cdd.getAdditionalDiscount(),
            visible: !0,
          }),
        this.$el.toggleClass("hidden", i && e);
    },
    onDiscountChange: function (t) {
      this.data.cdd.setUserDiscount(t.mm), this.data.getPrice();
    },
    onAdditionalDiscountChange: function (t) {
      this.data.cdd.setAdditionalDiscount(t.mm), this.data.getPrice();
    },
    render: function () {
      this.$el.append(this.template({ label: n }));
      var t =
        this.data.userData && this.data.userData.discounts
          ? a.findWhere(this.data.userData.discounts, { type: "USER" })
          : null;
      this.discountSlider = d.getInstance(this.$(".discount-slider"), {
        min: t ? t.min : 0,
        max: t ? t.max : 0,
        start: this.data.cdd.getUserDiscount(),
        enabled: !0,
        onDragEnd: this.onDiscountChange,
        label: " ",
        decimalPlaces: 2,
      });
      var i =
        this.data.userData && this.data.userData.discounts
          ? a.findWhere(this.data.userData.discounts, { type: "ADDITIONAL" })
          : null;
      return (
        (this.additionalDiscountSlider = d.getInstance(
          this.$(".additional-discount-slider"),
          {
            min: i ? i.min : 0,
            max: i ? i.max : 0,
            start: this.data.cdd.getAdditionalDiscount(),
            enabled: !0,
            onDragEnd: this.onAdditionalDiscountChange,
            label: " ",
            decimalPlaces: 2,
          }
        )),
        this.updateView(),
        this
      );
    },
  });
});
