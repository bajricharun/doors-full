define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/Labels",
  "lib/text!tpl/main/orderPositionRow.html",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    s = t("app/models/Model"),
    n = t("app/events/KEvent"),
    l = t("app/util/Util"),
    a = t("app/util/Labels"),
    o = t("lib/text!tpl/main/orderPositionRow.html"),
    d = null,
    u = e.View.extend({
      className: "row",
      events: {
        "input .item-value": "onValueChange",
        "input .p-title": "onTitleChange",
        "keydown input": "preventOnLoading",
        "mousedown select": "preventOnLoading",
      },
      onValueChange: function (t) {
        var e = $(t.target),
          i = e.val();
        if (((i = i.replace(",", ".")), isNaN(i)))
          0 == e.val().length &&
            ((this.inputValue = e.val()), this.model.set("value", e.val())),
            1 == e.val().length &&
              (e.val().indexOf("-") > -1 || e.val().indexOf("+") > -1) &&
              ((this.inputValue = e.val()), this.model.set("value", 0)),
            e.val(this.inputValue);
        else if (i > 1e5 || i < -1e5 || l.decimalPlaces(i) > 2)
          e.val(this.inputValue);
        else {
          var s = e.val();
          s.indexOf(".") > -1 && ((s = s.replace(".", ",")), e.val(s)),
            (this.inputValue = s),
            this.model.set("value", i);
        }
        this.isValid();
      },
      onTitleChange: function (t) {
        this.model.set("label", $(t.target).val()), this.isValid();
      },
      isValid: function () {
        this.model.get("custom") &&
        (!this.model.get("label") || this.model.get("label").length < 1)
          ? this.$(".p-title input").addClass("invalid")
          : this.$(".p-title input").removeClass("invalid"),
          this.model.has("value") &&
          "" !== this.model.get("value") &&
          !isNaN(this.model.get("value")) &&
          this.model.get("unit")
            ? this.$(".p-input input").removeClass("invalid")
            : this.$(".p-input input").addClass("invalid");
      },
      preventOnLoading: function (t) {
        this.data.priceLoading && t.preventDefault();
      },
      onCloseClick: function (t) {
        ("all_order_positions" == t.id ||
          ("order_position" == t.id && t.cid == this.model.cid)) &&
          this.destroyComponent();
      },
      destroyComponent: function () {
        this.remove(), this.$el.remove(), delete this.el, delete this.$el;
      },
      initialize: function () {
        i.bindAll(this, "isValid", "destroyComponent"),
          (this.data = s.getInstance()),
          this.listenTo(n, n.DESTROY_COMPONENT, this.onCloseClick),
          this.render();
      },
      render: function () {
        var t = this.model.get("custom")
          ? this.model.get("label")
          : a.get("orderOption", this.model.get("type").toUpperCase());
        return (
          this.$el.append(
            d({
              title: t,
              cid: this.model.cid,
              custom: this.model.get("custom"),
              value: this.model.get("value"),
            })
          ),
          (this.inputValue = this.model.get("value")),
          this.isValid(),
          this
        );
      },
    }),
    r = e.View.extend({
      template: i.template(
        '<div class="row-cell p-title"><%=data.title%></div>                              <div class="row-cell" ></div>                              <div class="row-cell p-input"></div>                              <div class="row-cell"></div>            ',
        { variable: "data" }
      ),
      className: "row hidden",
      initialize: function (t) {
        i.bindAll(this, "_updateValue", "_visible"),
          (this.type = t.type),
          (this.data = s.getInstance()),
          this.listenTo(n, n.PRICE, this._updateValue);
      },
      render: function () {
        return (
          this.$el.append(
            this.template({
              title: a.get("orderOption", this.type.toUpperCase()),
            })
          ),
          this._updateValue(),
          this
        );
      },
      _updateValue: function () {
        var t;
        this.data.priceData &&
          this.data.priceData.orderOptions &&
          (t = this.data.priceData.orderOptions[this.type.toLowerCase()]
            ? this.data.priceData.orderOptions[this.type.toLowerCase()].price
            : null),
          this.$(".p-input").empty().append(t),
          this._visible(!!t);
      },
      _visible: function (t) {
        this.$el.toggleClass("hidden", !t);
      },
    });
  return e.View.extend({
    className: "section options",
    template: i.template(
      "<div class='order-options-title'>                    <%=label.get('print', 'DEMAND_OPTIONS')%>                </div>                <div class='section-data'>                </div>                <div class='add-item'>                    <select></select>                </div>"
    ),
    CalculatedItemRenderer: r,
    initialize: function () {
      (this.data = s.getInstance()),
        (d = i.template(o)),
        i.bindAll(
          this,
          "renderSelect",
          "onListChange",
          "renderItem",
          "getPriceDelayed",
          "resetLists",
          "populateListFromCDD",
          "_getValidOptions"
        ),
        this.listenTo(n, n.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(n, n.RESET_CONFIGURATION, this.onResetConfiguration),
        this.listenTo(n, n.REFERENCE_LOADED, this.onReferenceLoaded),
        this.listenTo(n, n.USER_DISCOUNT_UPDATE, this.onDiscountSystemUpdate),
        (this.calculatedOptions = [
          "customCost1",
          "customCost2",
          "customCost3",
        ]),
        (this.itemOptions = new e.Collection([
          { type: null, used: !1, default: !0 },
          { type: "delivery", used: !1, unit: "eur" },
          { type: "dismantling", used: !1, unit: "eur" },
          { type: "mounting", used: !1, unit: "eur" },
          {
            type: "custom1",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 1,
          },
          {
            type: "custom2",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 2,
          },
          {
            type: "custom3",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 3,
          },
          {
            type: "custom4",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 4,
          },
          {
            type: "custom5",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 5,
          },
          {
            type: "custom6",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 6,
          },
          {
            type: "custom7",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 7,
          },
          {
            type: "custom8",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 8,
          },
          {
            type: "custom9",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 9,
          },
          {
            type: "custom10",
            used: !1,
            unit: "eur",
            custom: !0,
            label: null,
            customID: 10,
          },
        ])),
        (this.itemList = new e.Collection()),
        (this.prevOptionList = []),
        this.render(),
        this.populateListFromCDD(),
        this.renderSelect(),
        this.itemList.bind("change", this.onListChange),
        this.itemList.bind("remove", this.onListChange),
        this.itemList.bind("add", this.onListChange);
    },
    events: {
      "change .add-item select": "selectChange",
      "click .add-item .custom-add": "addCustomClick",
      "click .close-btn": "onCloseClick",
    },
    onResetConfiguration: function () {
      this.resetLists(),
        this.renderSelect(),
        n.trigger(n.PRICE_OPTIONS_VALID, {
          component: "orderOptions",
          valid: !0,
        });
    },
    onReferenceLoaded: function () {
      this.resetLists(),
        this.populateListFromCDD(),
        this.renderSelect(),
        n.trigger(n.PRICE_OPTIONS_VALID, {
          component: "orderOptions",
          valid: !0,
        });
    },
    populateListFromCDD: function () {
      this.data.cdd.demandOptions &&
        this.data.cdd.demandOptions.length > 0 &&
        ((this.ignoreChangeEvents = !0),
        i.forEach(
          this.data.cdd.demandOptions,
          function (t) {
            var e = this.itemOptions.findWhere({ type: t.type });
            this.renderItem(e, { value: t.value, label: t.label });
          },
          this
        ),
        this.itemList.each(function (t) {
          this.prevOptionList.push(t.toJSON());
        }, this),
        (this.ignoreChangeEvents = !1));
    },
    resetLists: function () {
      (this.prevOptionList = []),
        this.itemList.reset(),
        this.itemOptions.forEach(function (t) {
          t.set("used", !1);
        }, this),
        n.trigger(n.DESTROY_COMPONENT, { id: "all_order_positions" });
    },
    onListChange: function (t) {
      if (!this.ignoreChangeEvents) {
        var e = this._getValidOptions();
        if (!i.isEqual(e, this.prevOptionList)) {
          var s = this.prevOptionList.length != e.length;
          (this.prevOptionList = e),
            this.data.cdd.setDemandOptions(e),
            (t && t.changed && t.changed.label && !s) || this.getPriceDelayed();
        }
      }
    },
    getPriceDelayed: i.debounce(function () {
      this.data.getPrice(),
        this.$(".door-net-price").empty().addClass("spinner"),
        this.$(".net-price").empty().addClass("spinner"),
        this.$(".gross-price").empty().addClass("spinner");
    }, 750),
    _getValidOptions: function () {
      var t = [],
        e = !0;
      return (
        this.itemList.each(function (i) {
          if (
            !i.has("value") ||
            "" === i.get("value") ||
            isNaN(i.get("value")) ||
            !i.get("unit") ||
            (i.get("custom") && (!i.get("label") || i.get("label").length < 1))
          )
            return (e = !1), !1;
          t.push(i.toJSON());
        }),
        n.trigger(n.PRICE_OPTIONS_VALID, {
          component: "orderOptions",
          valid: e,
        }),
        t
      );
    },
    onCloseClick: function (t) {
      var e = $(t.currentTarget).attr("cid");
      n.trigger(n.DESTROY_COMPONENT, { id: "order_position", cid: e }),
        this.itemOptions
          .findWhere({ type: this.itemList.get(e).get("type") })
          .set("used", !1),
        this.itemList.remove(e),
        this.renderSelect();
    },
    selectChange: function (t) {
      var e = $(t.target).val(),
        i = this.itemOptions.get(e);
      i.get("type") && (this.renderItem(i), this.renderSelect());
      var s = this.itemOptions.findWhere({ default: !0 }).cid;
      s && $(t.target).val(s);
    },
    renderItem: function (t, i) {
      if (t) {
        var s = new e.Model(t.attributes);
        i && s.set(i),
          this.itemList.add(s),
          this.$(".add-item").removeClass("custom");
        var n = new u({ model: s });
        this.$(".section-data").append(n.el), t.set("used", !0);
      }
    },
    renderSelect: function () {
      this.cleanSelect(),
        this.itemOptions.each(function (t) {
          if (!t.get("used") && !t.get("margin")) {
            var e = t.get("type")
              ? this.getOptionLabel(t)
              : a.get("orderOption", "ADD_ITEM");
            this.$(".add-item select").append(
              "<option " +
                (t.get("default") ? "hidden selected" : "") +
                " value='" +
                t.cid +
                "'>" +
                e +
                "</option>"
            );
          }
        }, this);
    },
    getOptionLabel: function (t) {
      return t.get("type").match(/custom/gi)
        ? a.get("orderOption", "CUSTOM") + " " + t.get("customID")
        : a.get("orderOption", t.get("type").toUpperCase());
    },
    cleanSelect: function () {
      i.each(this.$(".add-item select > option"), function (t) {
        $(t).remove();
      });
    },
    render: function () {
      return (
        this.$el.append(this.template({ label: a })),
        i.forEach(
          this.calculatedOptions,
          function (t) {
            this.$(".section-data").append(
              new this.CalculatedItemRenderer({ type: t }).render().el
            );
          },
          this
        ),
        this
      );
    },
    onMenuChange: function (t) {
      "anfrage" == t.state && this._getValidOptions();
    },
  });
});
