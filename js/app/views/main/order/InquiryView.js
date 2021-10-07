define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/Labels",
  "app/enum/Color",
  "lib/text!tpl/main/inquiryView.html",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    a = t("app/models/Model"),
    n = t("app/events/KEvent"),
    r = t("app/util/Util"),
    s = t("app/util/Labels"),
    l = t("app/enum/Color"),
    o = t("lib/text!tpl/main/inquiryView.html");
  return e.View.extend({
    id: "inquiry-view",
    isOrder: !1,
    viewTemplate: i.template(o, { variable: "data" }),
    dataTpl: "lib/text!tpl/main/orderViewData.html",
    dataTemplate: null,
    dataTemplateData: function () {
      var t =
        this.data.priceData && this.data.priceData.rules
          ? this.data.priceData.rules
          : {};
      return {
        model: this.data,
        label: s,
        Color: l,
        Util: r,
        rules: t,
        currency: this.data.getCurrency(!0),
        testRuleKey: i.bind(function (t) {
          if (!this.data.priceData || !this.data.priceData.rules) return !1;
          for (var e in this.data.priceData.rules) if (t.test(e)) return !0;
          return !1;
        }, this),
        panelOversize: this.data.cdd.getItem("panelOversize"),
        getPrice: i.bind(function (e) {
          var a = i.findKey(t, function (t, i) {
            return i.toLowerCase() === e.toLowerCase();
          });
          return a ? t[a].price : "";
        }, this),
        getCode: i.bind(function (e) {
          var a = i.findKey(t, function (t, i) {
            return i.toLowerCase() === e.toLowerCase();
          });
          return a ? t[a].code : "";
        }, this),
      };
    },
    buttonTemplate: i.template(
      "<div class='section-btns'>                                        <a class='send'><%=data.isPublicPrice ? data.label.get('print', 'ORDER_BUTTON'): data.label.get('print', 'ANFRAGEPRINT')%></a>                                        <a class='print' target='_blank'><%=data.label.get('print', 'DRUCKEN')%></a>                                    </div>",
      { variable: "data" }
    ),
    buttonTemplateData: function () {
      return { label: s, isPublicPrice: this.data.isPublicPrice() };
    },
    invalidComponents: [],
    initialize: function () {
      i.bindAll(this, "onDataTemplate"),
        (this.data = a.getInstance()),
        this.listenTo(n, n.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(n, n.SEND_INQUIRY_DONE, this.onDemandSendComplete),
        this.listenTo(n, n.SEND_ORDER_DONE, this.onDemandSendComplete),
        this.listenTo(n, n.PRINT_DONE, this.onPrintDone),
        this.listenTo(n, n.PRICE_OPTIONS_VALID, this.onPriceOptionsValid),
        this.listenTo(n, n.PRICE, this.onUpdatePrice),
        (this.priceOptionsValid = !0),
        this.render();
    },
    events: { "click a.print": "onPrint", "click a.send": "onSend" },
    onUpdatePrice: function (t) {
      this.redraw();
    },
    onPrint: function () {
      this.priceOptionsValid &&
        (n.trigger(n.OPEN_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
        }),
        this.data.print());
    },
    onPriceOptionsValid: function (t) {
      t.valid
        ? (this.invalidComponents = i.filter(
            this.invalidComponents,
            function (e) {
              return e !== t.component;
            },
            this
          ))
        : (this.invalidComponents = i.union(this.invalidComponents, [
            t.component,
          ])),
        (this.priceOptionsValid = this.invalidComponents.length <= 0),
        this.$(".section-btns a:not(.excel)").toggleClass(
          "disabled",
          !this.priceOptionsValid
        );
    },
    onPrintDone: function (t) {
      n.trigger(n.CLOSE_POPUP),
        t &&
          t.pdfUrl &&
          (n.trigger(n.OPEN_POPUP, {
            module: "app/views/main/popup/OpenPdfPopup",
            newReference: null != t.referenceNumber,
            url: t.pdfUrl,
          }),
          n.trigger(n.KEYBOARD_ON, {
            uniqueKey: "ESC_PRINT",
            keyCode: 27,
            triggerEvent: "CLOSE_POPUP",
            destroyable: !0,
          }),
          this.data.conf("referenceNumber") && this.redraw());
    },
    onSend: function (t) {
      this.priceOptionsValid &&
        (n.trigger(n.OPEN_POPUP, {
          module: "app/views/main/popup/InquiryForm2",
        }),
        n.trigger(n.KEYBOARD_ON, {
          uniqueKey: "ESC_INQUIRY",
          keyCode: 27,
          triggerEvent: "CLOSE_POPUP",
          destroyable: !0,
        }));
    },
    onMenuChange: function (t) {
      "anfrage" == t.state && this.redraw();
    },
    render: function () {
      this.$el.append(this.viewTemplate({ label: s, remark: null })),
        this.$el.append(this.buttonTemplate(this.buttonTemplateData())),
        this.renderData(),
        r.fixScrolling(this.$(".scrolling"), this.data);
    },
    onDemandSendComplete: function (t) {
      this.redraw();
    },
    redraw: function () {
      return (
        r.removeListeners(this.$(".scrolling"), this.data),
        this.$(".inquiry-data").empty(),
        this.renderData(),
        r.fixScrolling(this.$(".scrolling"), this.data),
        this
      );
    },
    renderData: function () {
      if (!this.dataTemplate)
        return void t([this.dataTpl], this.onDataTemplate);
      this.$(".inquiry-data").append(
        this.dataTemplate(this.dataTemplateData())
      );
    },
    onDataTemplate: function (t) {
      (this.dataTemplate = i.template(t, { variable: "data" })),
        this.renderData();
    },
  });
});
