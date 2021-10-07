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
    n = i("app/models/Model"),
    s = i("app/util/Util"),
    a = i("app/events/KEvent"),
    d = e.View.extend({
      className: "equipment-item vertical clear",
      initialize: function () {
        t.bindAll(this, "render"),
          (this.data = n.getInstance()),
          this.listenTo(a, a.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(a, a.DESTROY_COMPONENT, this.onDestroy),
          this.listenTo(a, a.EQUIPMENT_CHANGE, this.onEquipmentChange);
      },
      onDestroy: function (i) {
        "outside_hook_view" == i &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onFindBBModel: function (i, e) {
        if ("innendrucker" == e) {
          var t = this.list.get(i);
          t && a.trigger(a.BB_MODEL_FOUND, t, e);
        }
      },
      onEquipmentChange: function (i) {
        if ("outsideHandle" == i || "handleSet" == i || "insideHandle" == i) {
          if (
            (this.$(".option-item.active").removeClass("active"),
            "DOOR-LOCK" != this.data.cdd.getOutsideHandleType())
          )
            return;
          var e = this.list.findWhere({
            code: this.data.cdd.getOutsideHandle(),
          });
          e && this.$(".option-item[cid='" + e.cid + "']").addClass("active");
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
        var i = $("<div>", { class: "options" });
        return (
          this.list.forEach(function (e) {
            var t = $(
              "<div cid='" +
                e.cid +
                "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
                (e.get("label") ? e.get("label") : e.get("code")) +
                "</span></div>"
            );
            "DOOR-LOCK" == this.data.cdd.getOutsideHandleType() &&
              this.data.cdd.getOutsideHandle() == e.get("code") &&
              t.addClass("active"),
              i.append(t);
          }, this),
          this.model.get("groupDescription") &&
            i.append(
              "<div class='description'>" +
                this.model.get("groupDescription") +
                "</div>"
            ),
          this.$el.append(i),
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
      t.bindAll(this, "render", "showSpinner", "refreshData"),
        this.listenTo(a, a.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(a, a.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(a, a.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(a, a.PACKAGE_CHANGE, this.updateView),
        this.listenTo(a, a.PROFILE_CHANGE, this.updateView),
        this.listenTo(a, a.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = n.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("kljuke-notranje");
    },
    updateView: function (i) {
      (this.isDirty = !0), a.trigger(a.DESTROY_COMPONENT, "outside_hook_view");
    },
    onEquipmentViewChange: function (i) {
      i == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipmentGroup("kljuke-notranje"),
        this.showSpinner(!0),
        (this.isDirty = !1);
    },
    onEquipmentData: function (i, t) {
      if ("kljuke-notranje" == t) {
        if (0 != i.length) {
          var n = new e.Collection(i);
          this.$el.empty(),
            n.forEach(function (i) {
              this.appendItem(i);
            }, this);
        } else
          this.$el.html(
            "<div class='label'>" +
              this.data.getLabel("equipment", "NOT_AVAILABLE") +
              "</div>"
          );
        this.showSpinner(!1);
      }
    },
    appendItem: function (i) {
      var e = new d({ model: i }).render();
      this.$el.append(e.el);
    },
    onRadioBtnClick: function (i) {
      if (!this.data.imageLoading) {
        var e = $(i.currentTarget),
          t = e.attr("cid");
        a.trigger(a.FIND_BB_MODEL, t, this.id);
      }
    },
    onBBModelFound: function (i, e) {
      this.id == e && this.data.outsideHandleChange(i);
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        s.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (i) {
      this.$el.toggleClass("spinner", i);
    },
  });
});
