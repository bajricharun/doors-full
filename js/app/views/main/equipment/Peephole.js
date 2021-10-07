define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/util/Labels",
  "app/events/KEvent",
], function (e) {
  var i = e("backbone"),
    t = e("underscore"),
    s = e("app/models/Model"),
    a = e("app/util/Util"),
    n = e("app/util/Labels"),
    l = e("app/events/KEvent"),
    o = i.View.extend({
      className: "equipment-item horizontal clear",
      events: { "click .k-button": "onMoreClick" },
      initialize: function () {
        t.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(l, l.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(l, l.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (e) {
        "peephole_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onMoreClick: function (e) {
        if (!$(e.currentTarget).hasClass("disabled")) {
          var i = this.$el.find(".option-item.active").attr("cid"),
            t = this.list.get(i);
          l.trigger(l.OPEN_POPUP, {
            module: "app/views/main/popup/MessageDialog2",
            template: t.get("template"),
            class: "large more-popup",
            title: t.get("label"),
          }),
            l.trigger(l.KEYBOARD_ON, {
              uniqueKey: "ESC_POPUP",
              keyCode: 27,
              triggerEvent: "CLOSE_POPUP",
              destroyable: !0,
            });
        }
      },
      onFindBBModel: function (e, i) {
        if ("peephole" == i) {
          var t = this.list.get(e);
          t && l.trigger(l.BB_MODEL_FOUND, t, i);
        }
      },
      render: function () {
        (this.list = new i.Collection(this.model.get("drzalo"))),
          this.$el.append(
            "<div class='image' cid='" +
              this.list.at(0).cid +
              "'><img src='" +
              this.model.get("groupUrl") +
              "'></div>"
          );
        var e,
          t = $("<div>", { class: "options" }),
          s = !1;
        if (
          (this.list.forEach(function (i) {
            var a = $(
              "<div cid='" +
                i.cid +
                "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
                (i.get("label") ? i.get("label") : i.get("code")) +
                "</span><a class='remove'><div class='cross'><div class='line-1'></div><div class='line-2'></div></div></a></div>"
            );
            this.data.cdd.getPeephole() == i.get("code") &&
              (a.addClass("active"), (s = !0)),
              (e = i.get("description")),
              t.append(a);
          }, this),
          this.$el.append(t),
          this.model.get("drzalo").length > 0 &&
            this.model.get("drzalo")[0].template)
        ) {
          var a = s ? "'more-btn k-button'" : "'more-btn k-button disabled'";
          this.$el.append(
            "<div style='width: auto; display: inline-block;' class=" +
              a +
              " + >" +
              n.get("common", "MORE") +
              "</div>"
          );
        }
        return (
          e && this.$el.append("<div class='description'>" + e + "</div>"), this
        );
      },
    });
  return i.View.extend({
    className: "scrolling equipment-sub-view spinner optional",
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
    },
    initialize: function () {
      t.bindAll(this, "render", "showSpinner", "refreshData"),
        this.listenTo(l, l.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(l, l.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(l, l.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(l, l.PACKAGE_CHANGE, this.updateView),
        this.listenTo(l, l.PROFILE_CHANGE, this.updateView),
        this.listenTo(l, l.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(l, l.EQUIPMENT_CHANGE, this.onEquipmentChange),
        this.listenTo(l, l.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = s.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("peephole"),
        this.data.cdd.getHasPeepholeHandle() && this.$el.addClass("disabled");
    },
    updateView: function (e) {
      (this.isDirty = !0), l.trigger(l.DESTROY_COMPONENT, "peephole_view");
    },
    onMenuChange: function (e) {
      var i =
        "additional-equipment" == this.model.get("menuType")
          ? "additional-equipment"
          : "dodatna";
      e.state == i &&
        this.data.cdd.getEquipmentView() == this.id &&
        this.isDirty &&
        this.refreshData();
    },
    onEquipmentViewChange: function (e) {
      e == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipmentGroup("peephole"),
        this.showSpinner(!0),
        (this.isDirty = !1),
        this.data.cdd.getHasPeepholeHandle()
          ? this.$el.addClass("disabled")
          : this.$el.removeClass("disabled");
    },
    onEquipmentData: function (e, t) {
      if ("peephole" == t) {
        if (0 != e.length) {
          var s = new i.Collection(e);
          this.$el.empty(),
            s.forEach(function (e) {
              var i = new o({ model: e }).render();
              this.$el.append(i.el);
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
    onRadioBtnClick: function (e) {
      if (!this.data.imageLoading && !this.data.cdd.getHasPeepholeHandle()) {
        var i = $(e.currentTarget),
          t = i.attr("cid");
        this.$(".option-item.active").removeClass("active"),
          l.trigger(l.FIND_BB_MODEL, t, this.id);
      }
    },
    onBBModelFound: function (e, i) {
      this.id == i &&
        (this.$(".more-btn").addClass("disabled"),
        e.get("code") == this.data.cdd.getPeephole()
          ? this.data.peepholeChange(null)
          : (this.data.peepholeChange(e),
            this.$(".option-item[cid='" + e.cid + "']").addClass("active"),
            this.$(".option-item[cid='" + e.cid + "']")
              .parent(".options")
              .siblings(".more-btn")
              .removeClass("disabled")));
    },
    onEquipmentChange: function (e) {
      "outsideHandle" == e &&
        (this.data.cdd.getHasPeepholeHandle()
          ? (this.$(".option-item.active").removeClass("active"),
            this.$el.addClass("disabled"))
          : this.$el.removeClass("disabled"));
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        a.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (e) {
      this.$el.toggleClass("spinner", e);
    },
  });
});
