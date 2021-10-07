define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/Labels",
  "lib/text!tpl/main/orderPositionRow.html",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    n = e("app/models/Model"),
    a = e("app/events/KEvent"),
    l = e("app/util/Util"),
    s = e("app/util/Labels"),
    o = e("lib/text!tpl/main/orderPositionRow.html"),
    d = t.View.extend({
      className: "row",
      events: {
        "input .item-value": "onValueChange",
        "change .p-title": "onTitleChange",
        "keydown input": "preventOnLoading",
        "mousedown select": "preventOnLoading",
      },
      initialize: function () {
        (this.data = n.getInstance()),
          (this.template = i.template(o)),
          this.listenTo(a, a.DESTROY_COMPONENT, this.onCloseClick),
          this.render();
      },
      onCloseClick: function (e) {
        ("all_additional_options" === e.id ||
          ("additional_option" == e.id && e.cid == this.model.cid)) &&
          this.destroyComponent();
      },
      destroyComponent: function () {
        this.remove(), this.$el.remove(), delete this.el, delete this.$el;
      },
      validate: function () {
        !this.model.get("label") || this.model.get("label").length < 1
          ? this.$(".p-title input").addClass("invalid")
          : this.$(".p-title input").removeClass("invalid"),
          !this.model.has("value") ||
          "" === this.model.get("value") ||
          isNaN(this.model.get("value"))
            ? this.$(".p-input input").addClass("invalid")
            : this.$(".p-input input").removeClass("invalid");
      },
      preventOnLoading: function (e) {
        this.data.priceLoading && e.preventDefault();
      },
      onValueChange: function (e) {
        var t = $(e.target),
          i = t.val();
        if (((i = i.replace(",", ".")), isNaN(i) && "-" !== i && "+" !== i))
          0 == t.val().length &&
            ((this.inputValue = t.val()), this.model.set("value", t.val())),
            t.val(this.inputValue);
        else if (i > 1e5 || i < -1e5 || l.decimalPlaces(i) > 2)
          t.val(this.inputValue);
        else {
          var n = t.val();
          n.indexOf(".") > -1 && ((n = n.replace(".", ",")), t.val(n)),
            (this.inputValue = n),
            this.model.set("value", i);
        }
        this.validate();
      },
      onTitleChange: function (e) {
        this.model.set("label", $(e.target).val()), this.validate();
      },
      render: function () {
        return (
          this.$el.append(
            this.template({
              custom: !0,
              title: this.model.get("label"),
              value: this.model.get("value"),
              cid: this.model.cid,
            })
          ),
          this.validate(),
          this
        );
      },
    }),
    r = t.Model.extend({
      isValid: function () {
        return !(
          !this.has("value") ||
          "" === this.get("value") ||
          isNaN(this.get("value")) ||
          !this.get("label") ||
          this.get("label").length < 1
        );
      },
    });
  return t.View.extend({
    className: "section options",
    events: {
      "click .add-item div": "onAddClick",
      "click .close-btn": "onCloseClick",
    },
    template: i.template(
      "<div class='order-options-title'>                    <%=label.get('print', 'ADDITIONAL_OPTIONS')%>                </div>                <div class='section-data'>                </div>                <div class='add-item'>                    <div><%=label.get('orderOption', 'ADD_ITEM')%></div>            </div>"
    ),
    initialize: function () {
      i.bindAll(
        this,
        "populateListFromCDD",
        "onValueChange",
        "onLabelChange",
        "onItemListRemove"
      ),
        this.listenTo(a, a.REFERENCE_LOADED, this.onReferenceLoaded),
        (this.data = n.getInstance()),
        (this.itemList = new t.Collection()),
        this.itemList.bind("change:value", this.onValueChange),
        this.itemList.bind("change:label", this.onLabelChange),
        this.itemList.bind("remove", this.onItemListRemove),
        this.render(),
        this.populateListFromCDD();
    },
    onValueChange: function (e) {
      var t = !0;
      if (e.isValid()) {
        var i = this.getAll();
        this.data.cdd.setAdditionalOptions(i), this.getPriceDelayed();
      } else t = !1;
      a.trigger(a.PRICE_OPTIONS_VALID, { component: "orderOptions", valid: t });
    },
    onLabelChange: function (e) {
      var t = !0,
        t = e.isValid();
      if (t) {
        var i = this.getAll();
        this.data.cdd.setAdditionalOptions(i);
      } else t = !1;
      a.trigger(a.PRICE_OPTIONS_VALID, { component: "orderOptions", valid: t });
    },
    getAll: function () {
      var e = [];
      return (
        this.itemList.each(function (t, i) {
          t.set("type", "additional" + (i + 1)), e.push(t.toJSON());
        }),
        e
      );
    },
    onItemListRemove: function (e) {
      a.trigger(a.PRICE_OPTIONS_VALID, {
        component: "orderOptions",
        valid: !0,
      });
      var t = this.getAll();
      this.data.cdd.setAdditionalOptions(t), this.getPriceDelayed();
    },
    onAddClick: function () {
      if (!(this.itemList.length >= 10)) {
        var e = new r({ label: null, value: null });
        this.itemList.add(e),
          this.renderItem(e),
          a.trigger(a.PRICE_OPTIONS_VALID, {
            component: "orderOptions",
            valid: !1,
          });
      }
    },
    onCloseClick: function (e) {
      var t = $(e.currentTarget).attr("cid");
      a.trigger(a.DESTROY_COMPONENT, { id: "additional_option", cid: t }),
        this.itemList.remove(t);
    },
    getPriceDelayed: i.debounce(function () {
      this.data.getPrice(),
        this.$(".door-net-price").empty().addClass("spinner"),
        this.$(".net-price").empty().addClass("spinner"),
        this.$(".gross-price").empty().addClass("spinner");
    }, 750),
    onReferenceLoaded: function () {
      this.itemList.reset(),
        a.trigger(a.DESTROY_COMPONENT, { id: "all_additional_options" }),
        this.populateListFromCDD();
    },
    populateListFromCDD: function () {
      this.data.cdd.additionalOptions &&
        this.data.cdd.additionalOptions.length > 0 &&
        i.each(
          this.data.cdd.additionalOptions,
          function (e) {
            var t = new r({ label: e.label, value: e.value });
            this.itemList.add(t), this.renderItem(t);
          },
          this
        );
    },
    renderItem: function (e) {
      this.$(".section-data").append(new d({ model: e }).el);
    },
    render: function () {
      return this.$el.append(this.template({ label: s })), this;
    },
  });
});
