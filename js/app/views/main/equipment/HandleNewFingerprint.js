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
    d = t.View.extend({
      className: "equipment-item vertical clear",
      initialize: function () {
        i.bindAll(this, "render"),
          (this.data = s.getInstance()),
          this.listenTo(a, a.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(a, a.DESTROY_COMPONENT, this.onDestroy),
          this.listenTo(a, a.EQUIPMENT_CHANGE, this.onEquipmentChange);
      },
      onDestroy: function (e) {
        "handle_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onFindBBModel: function (e, t, i) {
        if ("drzala" == t) {
          var s = this.$el.find(".option-item.active");
          if (i) {
            var n = this.optionList.get(e);
            n &&
              ("radio-checkbox" === n.get("uiType")
                ? this.optionList.forEach(function (e) {
                    if (n.get("itemType") === e.get("itemType")) {
                      this.$el
                        .find("div .item-option[cid='" + e.cid + "']")
                        .removeClass("selected");
                    }
                  }, this)
                : null == n.get("uiType") &&
                  this.optionList.forEach(function (e) {
                    if (
                      n.get("itemType") === e.get("itemType") &&
                      n.get("code") !== e.get("code")
                    ) {
                      this.$el
                        .find("div .item-option[cid='" + e.cid + "']")
                        .removeClass("selected");
                    }
                  }, this),
              a.trigger(a.BB_MODEL_FOUND, n, t, !0, 0 === s.length));
          }
          var n = this.list.get(e);
          n &&
            (this.$el.find(".item-option").removeClass("disabled"),
            a.trigger(a.BB_MODEL_FOUND, n, t, !1, 0 === s.length));
        }
      },
      selectDefaultOption: function () {
        this.optionList.forEach(function (e) {
          if (null == e.get("uiType") && e.get("default")) {
            this.data.itemChanged(e);
            this.$el
              .find("div .item-option[cid='" + e.cid + "']")
              .addClass("selected");
          }
        }, this);
      },
      onEquipmentChange: function (e) {
        if ("outsideHandle" == e || "handleSet" == e || "insideHandle" == e) {
          if (
            (this.$(".option-item.active").removeClass("active"),
            "HANDLE" != this.data.cdd.getOutsideHandleType())
          )
            return;
          var t = this.list.findWhere({
            code: this.data.cdd.getOutsideHandle(),
          });
          t && this.$(".option-item[cid='" + t.cid + "']").addClass("active");
          0 === this.$el.find(".option-item.active").length
            ? this.$el
                .find(".item-option")
                .removeClass("selected")
                .addClass("disabled")
            : 0 === this.$el.find(".item-option.selected").length &&
              this.selectDefaultOption();
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
        var e = $("<div>", { class: "options" }),
          i = !1;
        this.list.forEach(function (t) {
          var s = $(
            "<div cid='" +
              t.cid +
              "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
              (t.get("label") ? t.get("label") : t.get("code")) +
              "</span></div>"
          );
          "HANDLE" == this.data.cdd.getOutsideHandleType() &&
            this.data.cdd.getOutsideHandle() == t.get("code") &&
            (s.addClass("active"), (i = !0)),
            e.append(s),
            (this.hasAccessControl = t.get("hasAccessControl"));
        }, this),
          this.model.get("groupDescription") &&
            e.append(
              "<div class='description'>" +
                this.model.get("groupDescription") +
                "</div>"
            ),
          this.disableForAccessControl(),
          this.$el.append(e);
        var s = $("<div>", { class: "options item-options" });
        this.optionList = new t.Collection(
          this.model.get("equipmentItemOptions")
        );
        var n = null;
        return (
          this.optionList.forEach(function (e) {
            null == n
              ? (n = e.get("itemType"))
              : e.get("itemType") !== n &&
                (s.append("<hr>"), (n = e.get("itemType")));
            var t =
                this.data.cdd.getItem(e.get("itemType"), e.get("code")) && i,
              a = t
                ? "item-option k-checkbox selected"
                : i
                ? "item-option k-checkbox"
                : "item-option k-checkbox disabled",
              d = $(
                "<div cid='" +
                  e.cid +
                  "' class='" +
                  a +
                  "'><i class='k-radio'><i class='check-1'></i><i class='check-2'></i></i><span style='font-weight:bold;'>" +
                  (e.get("label") ? e.get("label") : e.get("code")) +
                  "</span><br /><span>" +
                  (e.get("description") ? e.get("description") : "") +
                  "</span></div>"
              );
            s.append(d);
          }, this),
          this.model.get("equipmentItemOptions") &&
            (this.$el.append(s),
            this.$el.removeClass("equipment-item"),
            this.$el.addClass("equipment-item-handle")),
          this
        );
      },
      disableForAccessControl: function () {
        this.hasAccessControl &&
          !this.data.cdd.getHasAccessControlLock() &&
          this.$el.addClass("disabled");
      },
    });
  return t.View.extend({
    className: "scrolling equipment-sub-view spinner",
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
      "click .item-option": "onItemOptionClick",
    },
    IR: d,
    initialize: function () {
      i.bindAll(this, "render", "showSpinner", "refreshData"),
        this.listenTo(a, a.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(a, a.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(a, a.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(a, a.PROFILE_CHANGE, this.updateView),
        this.listenTo(a, a.PACKAGE_CHANGE, this.updateView),
        this.listenTo(a, a.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(a, a.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        this.listenTo(a, a.EQUIPMENT_CHANGE, this.onEquipmentChange),
        (this.data = s.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("drzala");
    },
    updateView: function (e) {
      (this.isDirty = !0), a.trigger(a.DESTROY_COMPONENT, "handle_view");
    },
    onMenuChange: function (e) {
      var t =
        "additional-equipment" == this.model.get("menuType")
          ? "additional-equipment"
          : "dodatna";
      e.state == t &&
        this.data.cdd.getEquipmentView() == this.id &&
        this.isDirty &&
        this.refreshData();
    },
    onEquipmentChange: function (e) {
      ("accessControl" != e && "secureLatch" != e && "fingerprint" !== e) ||
        this.updateView();
    },
    onEquipmentViewChange: function (e) {
      e == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipmentGroup("drzala"),
        this.showSpinner(!0),
        (this.isDirty = !1);
    },
    onEquipmentData: function (e, i) {
      "drzala" == i &&
        (0 != e.length
          ? ((this.handleList = new t.Collection(e)),
            this.$el.empty(),
            this.handleList.forEach(function (e) {
              var t = new this.IR({ model: e }).render();
              this.$el.append(t.el);
            }, this))
          : this.$el.html(
              "<div class='label'>" +
                this.data.getLabel("equipment", "NOT_AVAILABLE") +
                "</div>"
            ),
        this.showSpinner(!1));
    },
    onRadioBtnClick: function (e) {
      if (!this.data.imageLoading) {
        var t = $(e.currentTarget),
          i = t.parent();
        if (
          (i.hasClass("options") && (i = i.parent()), !i.hasClass("disabled"))
        ) {
          var s = t.attr("cid");
          a.trigger(a.FIND_BB_MODEL, s, this.id);
        }
      }
    },
    onItemOptionClick: function (e) {
      var t = $(e.currentTarget),
        i = t.attr("cid");
      (t = this.$el.find("div .item-option[cid='" + i + "']")),
        t.hasClass("disabled") || a.trigger(a.FIND_BB_MODEL, i, this.id, !0);
    },
    onBBModelFound: function (e, i, s, n) {
      if (this.id == i)
        if (s) {
          var a = this.data.cdd.getItem(e.get("itemType"));
          if (a)
            if ("radio-checkbox" === e.get("uiType"))
              a.code === e.get("code")
                ? (this.data.itemRemoved(e), this.handleItemChange(e.cid, !0))
                : (this.data.itemChanged(e), this.handleItemChange(e.cid, !1));
            else if ("checkbox" === e.get("uiType")) {
              var d = this.data.cdd.getItem(e.get("itemType"), e.get("code"));
              d
                ? (this.data.itemRemoved(e), this.handleItemChange(e.cid, !0))
                : (this.data.itemChanged(e), this.handleItemChange(e.cid, !1));
            } else
              a.code !== e.get("code") &&
                (this.data.itemChanged(e), this.handleItemChange(e.cid, !1));
          else this.data.itemChanged(e), this.handleItemChange(e.cid, !1);
        } else {
          if (this.preventChange(e)) return;
          if (n) {
            var o = this.data.cdd.getOutsideHandle(),
              h = null;
            this.handleList.forEach(function (e) {
              if (
                !h &&
                (e.get("drzalo").forEach(function (e) {
                  e.code === o && (h = e);
                }, this),
                h)
              ) {
                new t.Collection(e.get("equipmentItemOptions")).forEach(
                  function (e) {
                    this.data.cdd.getItem(e.get("itemType"), e.get("code")) &&
                      this.data.itemRemoved(e);
                  },
                  this
                );
              }
            }, this);
          }
          this.outsideHandleChange(e);
        }
    },
    outsideHandleChange: function (e) {
      this.data.outsideHandleChange(e);
    },
    preventChange: function (e) {
      return (
        !(
          !e.get("hasAccessControl") || this.data.cdd.getHasAccessControlLock()
        ) ||
        (e.get("hasAccessControl") &&
          this.data.cdd.getAccessControl() &&
          this.data.cdd.setAccessControl(null),
        !1)
      );
    },
    handleItemChange: function (e, t) {
      this.$el
        .find("div .item-option[cid='" + e + "']")
        .toggleClass("selected", !t);
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
