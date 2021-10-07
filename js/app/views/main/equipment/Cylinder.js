define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/events/KEvent",
], function (i) {
  var e = i("backbone"),
    t = i("underscore"),
    s = i("app/models/Model"),
    n = i("app/util/Util"),
    a = i("app/events/KEvent"),
    d = e.View.extend({
      className: "equipment-item horizontal clear",
      initialize: function () {
        t.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(a, a.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (i) {
        "cylinder_view" == i &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        this.model.get("url") &&
          this.$el.append(
            "<div class='image' cid='" +
              this.model.cid +
              "'><img src='" +
              this.model.get("url") +
              "'></div>"
          );
        var i = $("<div>", { class: "options" }),
          e = $(
            "<div cid='" +
              this.model.cid +
              "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
              (this.model.get("label")
                ? this.model.get("label")
                : this.model.get("code")) +
              "</span><a class='remove'><div class='cross'><div class='line-1'></div><div class='line-2'></div></div></a></div>"
          );
        return (
          this.data.cdd.getCylinder() == this.model.get("code") &&
            e.addClass("active"),
          i.append(e),
          this.$el.append(i),
          this.model.get("description") &&
            this.$el.append(
              "<div class='description'>" +
                this.model.get("description") +
                "</div>"
            ),
          this
        );
      },
    });
  return e.View.extend({
    className: "scrolling equipment-sub-view spinner",
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
    },
    initialize: function () {
      t.bindAll(this, "render", "showSpinner", "refreshData", "appendRenderer"),
        this.listenTo(a, a.EQUIPMENT_DATA, this.onEquipmentData),
        this.listenTo(a, a.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(a, a.PACKAGE_CHANGE, this.updateView),
        this.listenTo(a, a.PROFILE_CHANGE, this.updateView),
        this.listenTo(a, a.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(a, a.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = s.getInstance()),
        this.render(),
        this.data.getEquipment("cilinder");
    },
    updateView: function (i) {
      (this.isDirty = !0), a.trigger(a.DESTROY_COMPONENT, "cylinder_view");
    },
    onMenuChange: function (i) {
      var e =
        "additional-equipment" == this.model.get("menuType")
          ? "additional-equipment"
          : "dodatna";
      i.state == e &&
        this.data.cdd.getEquipmentView() == this.id &&
        this.isDirty &&
        this.refreshData();
    },
    onEquipmentViewChange: function (i) {
      i == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipment("cilinder"),
        this.showSpinner(!0),
        (this.isDirty = !1);
    },
    onEquipmentData: function (i, t) {
      "cilinder" == t &&
        (0 != i.length
          ? ((this.list = new e.Collection(i)),
            this.$(".label").remove(),
            this.list.forEach(function (i) {
              var e = new d({ model: i }).render();
              this.appendRenderer(e);
            }, this))
          : this.$el.prepend(
              "<div class='label'>" +
                this.data.getLabel("equipment", "NOT_AVAILABLE") +
                "</div>"
            ),
        this.showSpinner(!1));
    },
    appendRenderer: function (i) {
      this.$el.append(i.el);
    },
    onRadioBtnClick: function (i) {
      if (!this.data.imageLoading) {
        var e = $(i.currentTarget),
          t = e.attr("cid"),
          s = this.list.get(t);
        s &&
          s.get("code") != this.data.cdd.getCylinder() &&
          (this.$(".option-item.active").removeClass("active"),
          this.data.cylinderChange(this.list.get(t)),
          e.hasClass("option-item")
            ? e.addClass("active")
            : this.$(".option-item[cid='" + t + "']").addClass("active"));
      }
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        n.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (i) {
      this.$el.toggleClass("spinner", i);
    },
  });
});
