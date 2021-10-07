define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "lib/text!tpl/checkbox.html",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    s = e("app/models/Model"),
    n = e("app/events/KEvent"),
    a = e("app/util/Util"),
    d = e("lib/text!tpl/checkbox.html"),
    l = t.View.extend({
      className: "secure-latch-item scrolling",
      initialize: function () {
        i.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(n, n.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(n, n.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (e) {
        "secure_latch_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        this.$el.append(
          "<div class='image' cid='" +
            this.model.cid +
            "'><img src='" +
            this.model.get("url") +
            "'></div>"
        );
        var e = $("<div>", { class: "options" }),
          t = $(
            "<div cid='" +
              this.model.cid +
              "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
              (this.model.get("label")
                ? this.model.get("label")
                : this.model.get("code")) +
              "</span></div>"
          );
        this.data.cdd.getSecureLatch() == this.model.get("code") &&
          t.addClass("active"),
          e.append(t),
          this.$el.append(e);
        var i = this.model.get("description");
        return (
          i && this.$el.append("<div class='desc'>" + i + "</div>"),
          this.model.get("option") &&
            (this.$el.append("<div class='opt'></div>"),
            this.model.get("option").forEach(function (e) {
              var t = new c({
                parent: this.model.get("code"),
                model: e,
              }).render();
              this.$(".opt").append(t.el);
            }, this)),
          this
        );
      },
    }),
    c = t.View.extend({
      className: "equipment-item no-image clear",
      events: { "click .option": "onOptionClick" },
      vTpl: i.template(d, { variable: "data" }),
      initialize: function (e) {
        (this.parentCode = e.parent),
          (this.selected = !1),
          (this.disabled = !0),
          i.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(n, n.DESTROY_COMPONENT, this.onDestroy),
          this.listenTo(n, n.EQUIPMENT_CHANGE, this.onEquipmentChange),
          this.data.cdd.getSecureLatch() === this.parentCode &&
            (this.disabled = !1),
          this.model.code !== this.data.cdd.getOpener() ||
            this.disabled ||
            (this.selected = !0);
      },
      onEquipmentChange: function (e) {
        "secureLatch" === e &&
          (this.data.cdd.getSecureLatch() !== this.parentCode
            ? ((this.disabled = !0), this.$(".option").addClass("disabled"))
            : ((this.disabled = !1),
              this.$(".option").removeClass("disabled")));
      },
      onDestroy: function (e) {
        "secure_latch_view" == e &&
          (this.stopListening(),
          this.remove(),
          this.$el.remove(),
          delete this.el,
          delete this.$el);
      },
      onOptionClick: function (e) {
        if (!this.disabled) {
          var t = this.$(".option").toggleClass("selected");
          (this.selected = t.attr("class").match(/selected/gi)),
            this.selected
              ? this.data.cdd.setOpener({
                  code: this.model.code,
                  label: this.model.label,
                })
              : this.data.cdd.setOpener(null);
        }
      },
      render: function () {
        var e = $(this.vTpl({ text: this.model.label, customClass: "option" }));
        return (
          this.disabled && e.addClass("disabled"),
          this.selected && e.addClass("selected"),
          this.$el.append(e),
          this.model.description &&
            this.$el.append(
              "<div class='desc'>" + this.model.description + "</div>"
            ),
          this
        );
      },
    });
  return t.View.extend({
    id: "secureLatch-view",
    className: "secureLatch-view",
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
    },
    initialize: function () {
      (this.data = s.getInstance()),
        this.listenTo(n, n.EQUIPMENT_DATA, this.onEquipmentData),
        this.listenTo(n, n.DOOR_DATA_RESPONSE, this.onChange),
        this.listenTo(n, n.MENU_CHANGE_EVENT, this.onMenuChange),
        this.render(),
        this.data.getEquipment("secureLatch"),
        (this.isDirty = !1);
    },
    onMenuChange: function (e) {
      this.isDirty &&
        "secureLatch" === e.state &&
        (this.renderSecureLatch(), (this.isDirty = !1));
    },
    onEquipmentData: function (e, i) {
      "secureLatch" === i &&
        ((this.list = new t.Collection(e)), this.renderSecureLatch());
    },
    renderSecureLatch: function () {
      this.list.forEach(function (e) {
        var t = new l({ model: e }).render(),
          i = $("<div class='secure-latch-row'>");
        i.append(t.el), this.$el.append(i);
      }, this);
    },
    onChange: function () {
      n.trigger(n.DESTROY_COMPONENT, "secure_latch_view"),
        (this.isDirty = !0),
        this.showSpinner(!0);
    },
    onRadioBtnClick: function (e) {
      if (!this.data.imageLoading) {
        var t = $(e.currentTarget),
          i = t.attr("cid"),
          s = this.list.get(i);
        s.get("code") != this.data.cdd.getSecureLatch() &&
          this.resetSelected(s);
      }
    },
    resetSelected: function (e) {
      this.$(".option-item.active").removeClass("active"),
        this.$(".opt .option").removeClass("selected"),
        this.data.cdd.setOpener(null),
        this.data.secureLatchChange(e),
        e && this.$(".option-item[cid='" + e.cid + "']").addClass("active");
    },
    render: function () {
      return a.fixScrolling(this.$el, this.data), this;
    },
  });
});
