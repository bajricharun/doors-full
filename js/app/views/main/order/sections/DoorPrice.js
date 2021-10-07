define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/Labels",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    a = e("app/models/Model"),
    n = e("app/events/KEvent"),
    s = (e("app/util/Util"), e("app/util/Labels"));
  return t.View.extend({
    className: "section no-padding strong-border",
    template: i.template(
      "<div class='section-data'>                <div class='row price'>                    <div class='row-cell p-title'><%=data.label.get('print', 'DOOR_PRICE_WITH_MARGIN')%></div>                    <div class='row-cell p-input door-price-surcharges'></div>                </div>            </div>",
      { variable: "data" }
    ),
    initialize: function () {
      this.listenTo(n, n.PRICE, this.updatePrice),
        this.listenTo(n, n.MENU_CHANGE_EVENT, this.onMenuChange),
        (this.data = a.getInstance());
    },
    onMenuChange: function (e) {
      "anfrage" == e.state && this.updatePrice();
    },
    updatePrice: function () {
      this.$(".door-price-surcharges")
        .html(this.data.priceData.doorPriceSurcharges)
        .removeClass("spinner");
    },
    render: function () {
      return (
        this.$el.append(this.template({ label: s })), this.updatePrice(), this
      );
    },
  });
});
