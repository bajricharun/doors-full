define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/Labels",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    a = t("app/models/Model"),
    s = t("app/events/KEvent"),
    r = (t("app/util/Util"), t("app/util/Labels"));
  return e.View.extend({
    className: "section strong-border",
    template: i.template(
      "<div class='section-data prices'>                <div class='row price'>                    <div class='row-cell p-title'><%=data.label.get('print', 'PRICE_NO_VAT_LABEL')%></div>                    <div class='row-cell p-input door-price-surcharges-options '></div>                </div>                <div class='row price'>                    <div class='row-cell vat p-title'></div>                    <div class='row-cell vat p-input'></div>                </div>                <div class='row price final'>                    <div class='row-cell p-title'><%=data.label.get('print', 'PRICE_WITH_VAT_LABEL')%></div>                    <div class='row-cell door-price-with-vat p-input'></div>                </div>            </div>",
      { variable: "data" }
    ),
    initialize: function () {
      this.listenTo(s, s.PRICE, this.updatePrice),
        this.listenTo(s, s.MENU_CHANGE_EVENT, this.onMenuChange),
        (this.data = a.getInstance());
    },
    onMenuChange: function (t) {
      "anfrage" == t.state && this.updatePrice();
    },
    getVatLabel: function () {
      return (
        (this.data.priceData
          ? r.get("print", "VAT_LABEL") + " (" + this.data.priceData.vat + "%)"
          : r.get("print", "VAT_LABEL")) + ":"
      );
    },
    updatePrice: function () {
      this.$(".door-price-surcharges-options")
        .html(this.data.priceData.doorPriceDiscountOptions)
        .removeClass("spinner"),
        this.$(".vat.p-input")
          .html(this.data.priceData.vatAmount)
          .removeClass("spinner"),
        this.$(".vat.p-title").html(this.getVatLabel()),
        this.$(".door-price-with-vat")
          .html(
            this.data.getCurrency() + " " + this.data.priceData.doorPriceWithVAT
          )
          .removeClass("spinner");
    },
    render: function () {
      return (
        this.$el.append(this.template({ label: r })), this.updatePrice(), this
      );
    },
  });
});
