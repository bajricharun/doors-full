define([
  "require",
  "app/views/main/order/OrderView",
  "app/views/main/order/sections/BruttoOptions",
  "app/views/main/order/sections/DoorPrice",
  "app/views/main/order/sections/Discounts",
  "app/views/main/order/sections/OrderOptions",
  "app/views/main/order/sections/PriceVat",
  "app/models/Model",
  "app/util/Labels",
], function (e) {
  var i = e("app/views/main/order/OrderView"),
    t = e("app/views/main/order/sections/BruttoOptions"),
    s = e("app/views/main/order/sections/DoorPrice"),
    a = e("app/views/main/order/sections/Discounts"),
    n = e("app/views/main/order/sections/OrderOptions"),
    r = e("app/views/main/order/sections/PriceVat"),
    d = e("app/models/Model"),
    o = e("app/util/Labels"),
    p = Backbone.View.extend({
      initialize: function () {
        (this.data = d.getInstance()),
          this.$el.removeClass("hidden"),
          this.render();
      },
      render: function () {
        return (
          this.data.isPriceAndLogin() &&
            (this.$el.append(new t().el),
            this.$el.append(new s().render().el),
            this.$el.append(new a().render().el),
            this.$el.append(new n().el),
            this.$el.append(new r().render().el)),
          this
        );
      },
    });
  return i.extend({
    dataTpl: "lib/text!tpl/main/order-tpl.html",
    orderPositionView: p,
    _parent: i,
    className:
      (i.prototype.className ? i.prototype.className + " " : "") + "no-buttons",
    renderData: function () {
      i.prototype.renderData.apply(this, arguments),
        this.data.isPriceAndLogin() ||
          this.$el.find(".col-c").addClass("hidden");
    },
    render: function () {
      if (
        (i.prototype.render.apply(this, arguments),
        !this.data.isPriceAndLogin())
      ) {
        this.$el.find(".order-options").addClass("hidden");
        var e;
        o.exist("print", "INQUIRY_REMARK")
          ? (e = o.get("print", "INQUIRY_REMARK"))
          : this.data.cdd.getSideGlassDisabledRepeat() &&
            (this.data.cdd.getRepeatLeft() > 1 ||
              this.data.cdd.getRepeatRight() > 1) &&
            (e = o.get("print", "SIDE_ONREQUEST_REMARK")),
          e &&
            (this.$el
              .find(".data-container")
              .append(
                '<div class="remark-inquiry">        <div class="remark-inquiry-title">' +
                  o.get("print", "REMARK_TITLE") +
                  '</div>        <div class="remark-inquiry-text">' +
                  e +
                  "</div>    </div>"
              ),
            this.$el.find(".data-container").addClass("show-remark"));
      }
    },
    initialize: function () {
      (this.data = d.getInstance()),
        (this.data.isPublicPrice() || this.data.isPriceAndLogin()) &&
          (this.isOrder = !0),
        this.data.isPriceAndLogin()
          ? (this.buttonTemplate = _.template(""))
          : ((this.isWide = !1), this.$el.removeClass("no-buttons")),
        i.prototype.initialize.apply(this, arguments);
    },
  });
});
