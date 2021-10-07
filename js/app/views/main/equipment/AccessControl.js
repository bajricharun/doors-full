define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/events/KEvent",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    s = t("app/models/Model"),
    n = t("app/util/Util"),
    a = t("app/events/KEvent"),
    o = e.View.extend({
      className: "equipment-item vertical clear",
      initialize: function () {
        i.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(a, a.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(a, a.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (t) {
        "access_control_view" == t &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onFindBBModel: function (t, e) {
        if ("accessControl" == e) {
          var i = this.list.get(t);
          i && a.trigger(a.BB_MODEL_FOUND, i, e);
        }
      },
      render: function () {
        (this.list = new e.Collection(this.model.get("drzalo"))),
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
            var s = $(
              "<div cid='" +
                e.cid +
                "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
                (e.get("label") ? e.get("label") : e.get("code")) +
                "</span><a class='remove'><div class='cross'><div class='line-1'></div><div class='line-2'></div></div></a></div>"
            );
            this.data.cdd.getAccessControl() == e.get("code") &&
              s.addClass("active"),
              e.get("description") && (t = e.get("description")),
              i.append(s);
          }, this),
          this.model.get("groupDescription") &&
            (t = this.model.get("groupDescription")),
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
      i.bindAll(this, "render", "showSpinner", "refreshData"),
        this.listenTo(a, a.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(a, a.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(a, a.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(a, a.PACKAGE_CHANGE, this.updateView),
        this.listenTo(a, a.PROFILE_CHANGE, this.updateView),
        this.listenTo(a, a.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(a, a.EQUIPMENT_CHANGE, this.onEquipmentChange),
        this.listenTo(a, a.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = s.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("accessControls"),
        this.data.cdd.getHasAccessControlHandle() &&
          this.$el.addClass("disabled");
    },
    updateView: function (t) {
      (this.isDirty = !0),
        a.trigger(a.DESTROY_COMPONENT, "access_control_view");
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
      this.data.getEquipmentGroup("accessControls"),
        this.showSpinner(!0),
        (this.isDirty = !1),
        this.data.cdd.getHasAccessControlHandle()
          ? this.$el.addClass("disabled")
          : this.$el.removeClass("disabled");
    },
    onEquipmentData: function (t, i) {
      "accessControls" == i &&
        (0 != t.length
          ? ((this.list = new e.Collection(t)),
            this.$el.empty(),
            this.list.forEach(function (t) {
              var e = new o({ model: t }).render();
              this.$el.append(e.el);
            }, this))
          : this.$el.html(
              "<div class='label'>" + this._getNotAvailableLabel() + "</div>"
            ),
        this.showSpinner(!1));
    },
    _getNotAvailableLabel: function () {
      return this.data.getLabel("equipment", "NOT_AVAILABLE");
    },
    onRadioBtnClick: function (t) {
      if (
        !this.data.imageLoading &&
        !this.data.cdd.getHasAccessControlHandle()
      ) {
        var e = $(t.currentTarget),
          i = e.attr("cid");
        this.$(".option-item.active").removeClass("active"),
          a.trigger(a.FIND_BB_MODEL, i, this.id);
      }
    },
    onBBModelFound: function (t, e) {
      this.id == e &&
        (t.get("code") == this.data.cdd.getAccessControl()
          ? this.data.accessControlChange(null)
          : (this.data.accessControlChange(t),
            this.$(".option-item[cid='" + t.cid + "']").addClass("active")));
    },
    onEquipmentChange: function (t) {
      ("outsideHandle" !== t && "handleSet" !== t) ||
        (this.data.cdd.getHasAccessControlHandle()
          ? (this.$(".option-item.active").removeClass("active"),
            this.$el.addClass("disabled"))
          : this.$el.removeClass("disabled"));
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        n.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (t) {
      this.$el.toggleClass("spinner", t);
    },
  });
});
