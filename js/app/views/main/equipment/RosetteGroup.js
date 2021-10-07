define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/events/KEvent",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    s = e("app/models/Model"),
    n = e("app/util/Util"),
    a = e("app/events/KEvent"),
    o = t.View.extend({
      className: "equipment-item vertical clear",
      initialize: function () {
        i.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(a, a.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(a, a.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (e) {
        "rosette_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onFindBBModel: function (e, t) {
        if ("praske" == t) {
          var i = this.list.get(e);
          i && a.trigger(a.BB_MODEL_FOUND, i, t);
        }
      },
      render: function () {
        (this.list = new t.Collection(this.model.get("drzalo"))),
          this.$el.append(
            "<div class='image' cid='" +
              this.list.at(0).cid +
              "'><img src='" +
              this.model.get("groupUrl") +
              "'></div>"
          );
        var e,
          i = $("<div>", { class: "options" });
        return (
          this.list.forEach(function (t) {
            var s = $(
              "<div cid='" +
                t.cid +
                "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
                (t.get("label") ? t.get("label") : t.get("code")) +
                "</span></div>"
            );
            this.data.cdd.getRosette() == t.get("code") && s.addClass("active"),
              t.get("description") && (e = t.get("description")),
              i.append(s);
          }, this),
          this.model.get("groupDescription") &&
            (e = this.model.get("groupDescription")),
          e && i.append("<div class='description'>" + e + "</div>"),
          this.$el.append(i),
          this
        );
      },
    });
  return t.View.extend({
    className: "scrolling equipment-sub-view spinner",
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
        this.listenTo(a, a.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(a, a.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(a, a.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(a, a.PACKAGE_CHANGE, this.updateView),
        this.listenTo(a, a.PROFILE_CHANGE, this.updateView),
        this.listenTo(a, a.EQUIPMENT_CHANGE, this.onEquipmentChange),
        this.listenTo(a, a.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = s.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("praske");
    },
    updateView: function (e) {
      (this.isDirty = !0), a.trigger(a.DESTROY_COMPONENT, "rosette_view");
    },
    onEquipmentViewChange: function (e) {
      e == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipmentGroup("praske"),
        this.showSpinner(!0),
        (this.isDirty = !1);
    },
    onEquipmentData: function (e, i) {
      if ("praske" == i) {
        var s = new t.Collection(e);
        0 != e.length
          ? (this.$el.empty(),
            s.forEach(function (e) {
              this.appendItem(e);
            }, this))
          : this.$el.html(
              "<div class='label'>" +
                this.data.getLabel("equipment", "NOT_AVAILABLE") +
                "</div>"
            ),
          this.showSpinner(!1),
          this.determineViewState();
      }
    },
    appendItem: function (e) {
      var t = new o({ model: e }).render();
      this.$el.append(t.el);
    },
    onRadioBtnClick: function (e) {
      if (this.data.cdd.getShowRosette() && !this.data.imageLoading) {
        var t = $(e.currentTarget),
          i = t.attr("cid");
        this.$(".option-item.active").removeClass("active"),
          t.hasClass("option-item")
            ? t.addClass("active")
            : this.$(".option-item[cid='" + i + "']").addClass("active"),
          a.trigger(a.FIND_BB_MODEL, i, this.id);
      }
    },
    onBBModelFound: function (e, t) {
      this.id == t && this.data.rosetteChange(e);
    },
    onEquipmentChange: function (e) {
      ("outsideHandle" != e && "handleSet" != e && "insideHandle" != e) ||
        this.determineViewState();
    },
    determineViewState: function () {
      this.data.cdd.getShowRosette()
        ? this.$el.removeClass("disabled")
        : this.$el.addClass("disabled");
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        n.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (e) {
      this.$el.toggleClass("spinner", e);
    },
  });
});
