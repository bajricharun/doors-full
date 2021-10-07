define([
  "require",
  "backbone",
  "underscore",
  "app/events/KEvent",
  "app/util/Util",
  "lib/text!tpl/referenceNumber.html",
  "app/util/Labels",
  "app/models/Model",
], function (e) {
  var n = e("backbone"),
    t = e("underscore"),
    i = e("app/events/KEvent"),
    r = e("app/util/Util"),
    s = e("lib/text!tpl/referenceNumber.html"),
    o = e("app/util/Labels"),
    c = e("app/models/Model");
  return n.View.extend({
    className: "scrolling",
    id: "reference-view",
    initialize: function () {
      t.bindAll(this, "render"),
        this.listenTo(i, i.NEW_REFERENCE, this.onNewReference),
        this.listenTo(i, i.REFERENCE_LOADED, this.onReferenceLoaded),
        this.listenTo(i, i.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(i, i.DOOR_IMAGE_DONE, this.onDoorImageDone),
        (this.data = c.getInstance()),
        (this.template = t.template(s)),
        this.render();
    },
    events: {
      "click .load": "onLoadClick",
      "click .new": "onNewClick",
      "click #reference-number": "onReferenceClick",
    },
    onNewClick: function () {
      i.trigger(i.OPEN_POPUP, { module: "app/views/main/popup/SpinnerPopup" }),
        this.data.newReference(),
        this.resetReferenceInput();
    },
    onReferenceClick: function () {
      this.fnSelect("reference-number");
    },
    onLoadClick: function () {
      var e = this.$("#reference-inp").val();
      e &&
        ((this.isPopupActive = !0),
        i.trigger(i.OPEN_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
        }),
        (e = e.replace(/\s+/g, "")),
        this.data.loadReference(e));
    },
    onNewReference: function (e) {
      this.setNewReferenceNumber(),
        i.trigger(i.CLOSE_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
        });
    },
    onReferenceLoaded: function (e) {
      !e.success && e.referenceValid
        ? (this.$(".number-loader .error").removeClass("hidden"),
          this.closePopup())
        : e.success || e.referenceValid || !e.url
        ? e.success || e.referenceValid || e.url
          ? (this.resetReferenceInput(),
            this.data.cdd.getReferenceNumber()
              ? this.setNewReferenceNumber()
              : this.resetReferenceNumber())
          : (this.closePopup(),
            this.$(".number-loader .error").removeClass("hidden"))
        : (this.closePopup(),
          i.trigger(i.OPEN_POPUP, {
            module: "app/views/main/popup/OpenPdfPopup2",
            message: { code: "order", labelCode: "REFERENCE_LOAD_ERROR" },
            url: e.url,
          }),
          i.trigger(i.KEYBOARD_ON, {
            uniqueKey: "ESC_PRINT",
            keyCode: 27,
            triggerEvent: "CLOSE_POPUP",
            destroyable: !0,
          }));
    },
    onDoorImageDone: function () {
      this.isPopupActive &&
        (i.trigger(i.CLOSE_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
        }),
        (this.isPopupActive = !1));
    },
    onMenuChange: function (e) {
      "referenceNumber" == e.state &&
        (this.data.cdd.getReferenceNumber()
          ? this.setNewReferenceNumber()
          : this.resetReferenceNumber(),
        this.$(".number-loader .error").addClass("hidden"),
        this.resetReferenceInput());
    },
    resetReferenceNumber: function () {
      this.$("#reference-number").html(""),
        this.$(".new").removeClass("hidden"),
        this.$("#reference-number").removeClass("active");
    },
    resetReferenceInput: function () {
      this.$("#reference-inp").val(""),
        this.$(".number-loader .error").addClass("hidden");
    },
    setNewReferenceNumber: function () {
      this.$("#reference-number").html(this.data.cdd.getReferenceNumber()),
        this.$("#reference-number").addClass("active"),
        this.$(".new").addClass("hidden");
    },
    render: function () {
      return (
        this.$el.append(this.template(o.all())),
        r.fixScrolling(this.$el, this.data),
        this.data.cdd.getReferenceNumber() && this.setNewReferenceNumber(),
        this
      );
    },
    closePopup: function () {
      this.isPopupActive &&
        (i.trigger(i.CLOSE_POPUP, {
          module: "app/views/main/popup/SpinnerPopup",
        }),
        (this.isPopupActive = !1));
    },
    fnSelect: function (e) {
      this.fnDeSelect();
      var n = document.getElementById(e);
      if (document.selection) {
        var t = document.body.createTextRange();
        t.moveToElementText(n), t.select();
      } else if (window.getSelection) {
        var t = document.createRange();
        t.selectNode(n), window.getSelection().addRange(t);
      }
    },
    fnDeSelect: function () {
      document.selection
        ? document.selection.empty()
        : window.getSelection && window.getSelection().removeAllRanges();
    },
  });
});
