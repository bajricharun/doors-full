define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/enum/Wing",
  "app/events/KEvent",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    n = t("app/models/Model"),
    s = t("app/util/Util"),
    a = t("app/enum/Wing"),
    o = t("app/events/KEvent"),
    d = e.View.extend({
      className: "equipment-item horizontal clear",
      initialize: function () {
        i.bindAll(this, "render"),
          (this.data = n.getInstance()),
          this.listenTo(o, o.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(o, o.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (t) {
        "panelProtect" == t &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onFindBBModel: function (t, e) {
        if ("panelProtect" == e) {
          var i = this.list.get(t);
          i && o.trigger(o.BB_MODEL_FOUND, i, e);
        }
      },
      render: function () {
        (this.list = new e.Collection(this.model.get("drzalo"))),
          this.model.get("groupUrl") &&
            this.$el.append(
              "<div class='image' cid='" +
                this.list.at(0).cid +
                "'><img src='" +
                this.model.get("groupUrl") +
                "'></div>"
            );
        var t,
          i = $("<div>", { class: "options" });
        return (
          this.list.forEach(function (e) {
            var n = $(
              "<div cid='" +
                e.cid +
                "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
                (e.get("label") ? e.get("label") : e.get("code")) +
                "</span></div>"
            );
            this.data.isMandatoryType("panelProtect") ||
              n.append(
                "<a class='remove'><div class='cross'><div class='line-1'></div><div class='line-2'></div></div></a>"
              ),
              this.data.cdd.getPanelProtection() == e.get("code") &&
                n.addClass("active"),
              (t = e.get("description")),
              i.append(n);
          }, this),
          t && i.append("<div class='description'>" + t + "</div>"),
          this.$el.append(i),
          this
        );
      },
    });
  return e.View.extend({
    className: "scrolling equipment-sub-view spinner optional",
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
    },
    initialize: function () {
      i.bindAll(
        this,
        "render",
        "showSpinner",
        "determineViewState",
        "refreshData"
      ),
        this.listenTo(o, o.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(o, o.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(o, o.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(o, o.PACKAGE_CHANGE, this.updateView),
        this.listenTo(o, o.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(o, o.INNER_WING_CHANGE, this.determineViewState),
        this.listenTo(o, o.PROFILE_CHANGE, this.updateView),
        this.listenTo(o, o.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = n.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("panelProtect");
    },
    updateView: function (t) {
      (this.isDirty = !0), o.trigger(o.DESTROY_COMPONENT, "panelProtect");
    },
    onMenuChange: function (t) {
      var e =
        "additional-equipment" == this.model.get("menuType")
          ? "additional-equipment"
          : "dodatna";
      t.state == e &&
        this.data.cdd.getEquipmentView() == this.id &&
        this.isDirty &&
        this.refreshData();
    },
    onEquipmentViewChange: function (t) {
      t == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipmentGroup("panelProtect"),
        this.showSpinner(!0),
        (this.isDirty = !1);
    },
    onEquipmentData: function (t, i) {
      if ("panelProtect" == i) {
        if (0 != t.length) {
          var n = new e.Collection(t);
          this.$el.empty(),
            n.forEach(function (t) {
              var e = new d({ model: t }).render();
              this.$el.append(e.el);
            }, this);
        } else
          this.$el.html(
            "<div class='label'>" +
              this.data.getLabel("equipment", "NOT_AVAILABLE") +
              "</div>"
          );
        this.showSpinner(!1), this.determineViewState();
      }
    },
    onRadioBtnClick: function (t) {
      if (
        !(
          this.data.imageLoading ||
          (0 == this.data.conf("panelOnInnerFrame") &&
            a.isOutside(this.data.cdd.getWingCode()))
        )
      ) {
        var e = $(t.currentTarget),
          i = e.attr("cid");
        o.trigger(o.FIND_BB_MODEL, i, this.id);
      }
    },
    onBBModelFound: function (t, e) {
      if (this.id == e)
        if (t.get("code") == this.data.cdd.getPanelProtection()) {
          if (this.data.isMandatoryType("panelProtect")) return;
          this.$(".option-item.active").removeClass("active"),
            this.data.panelProtectionChange(null);
        } else
          this.$(".option-item.active").removeClass("active"),
            this.data.panelProtectionChange(t),
            this.$(".option-item[cid='" + t.cid + "']").addClass("active");
    },
    determineViewState: function () {
      0 == this.data.conf("panelOnInnerFrame") &&
      a.isOutside(this.data.cdd.getWingCode())
        ? (this.$el.addClass("disabled"),
          this.$(".option-item.active").removeClass("active"))
        : this.$el.removeClass("disabled");
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        s.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (t) {
      this.$el.toggleClass("spinner", t);
    },
  });
});
