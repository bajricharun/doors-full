define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/Labels",
  "app/views/main/order/InquiryView",
], function (e) {
  var i = (e("backbone"), e("underscore")),
    t = e("app/models/Model"),
    n = e("app/events/KEvent"),
    o =
      (e("app/util/Util"),
      e("app/util/Labels"),
      e("app/views/main/order/InquiryView"));
  return o.extend({
    isWide: !0,
    orderPositionView: "app/views/main/order/OrderPositionView",
    buttonTemplateData: function () {
      return i.extend(o.prototype.buttonTemplateData.apply(this), {
        downloadExcel: this.data.canDownloadExcel(),
      });
    },
    initialize: function () {
      i.bindAll(this, "buttonTemplateData"),
        (this.data = t.getInstance()),
        (this.data.isPublicPrice() || this.data.isPriceAndLogin()) &&
          this.$el.addClass("order-view"),
        this.listenTo(n, n.PRICE, this.onPrice),
        this.listenTo(n, n.PRICE_LOADING, this.onPrice),
        o.prototype.initialize.apply(this, arguments);
    },
    onSend: function (e) {
      this.priceOptionsValid &&
        (n.trigger(n.OPEN_POPUP, {
          module: "app/views/main/popup/InquiryForm2",
          partnerProps: { order: this.isOrder },
        }),
        n.trigger(n.KEYBOARD_ON, {
          uniqueKey: "ESC_INQUIRY",
          keyCode: 27,
          triggerEvent: "CLOSE_POPUP",
          destroyable: !0,
        }));
    },
    onDemandSendComplete: function (e) {
      this.redraw();
    },
    onViewLoad: function (e) {
      new e({ el: this.$(".order-options") });
    },
    onPrice: function () {
      this.$(".order-options").toggleClass("spinner", this.data.priceLoading);
    },
    render: function () {
      o.prototype.render.apply(this, arguments),
        "string" == typeof this.orderPositionView
          ? e([this.orderPositionView], this.onViewLoad)
          : this.onViewLoad(this.orderPositionView);
    },
  });
});
