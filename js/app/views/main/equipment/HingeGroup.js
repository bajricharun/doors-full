define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/util/Labels",
  "app/events/KEvent",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    n = e("app/models/Model"),
    s = e("app/util/Util"),
    a = e("app/util/Labels"),
    o = e("app/events/KEvent"),
    d = t.View.extend({
      className: "equipment-item horizontal clear",
      events: { "click .k-button": "onMoreClick" },
      initialize: function () {
        i.bindAll(this, "render"),
          (this.data = n.getInstance()),
          this.listenTo(o, o.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(o, o.DESTROY_COMPONENT, this.onDestroy),
          this.listenTo(o, o.EQUIPMENT_CHANGE, this.onEquipmentChange);
      },
      onDestroy: function (e) {
        "hinge_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onMoreClick: function (e) {
        if (!$(e.currentTarget).hasClass("disabled")) {
          var t = this.$el.find(".option-item.active").attr("cid"),
            i = this.list.get(t);
          o.trigger(o.OPEN_POPUP, {
            module: "app/views/main/popup/MessageDialog2",
            template: i.get("template"),
            class: "large more-popup",
            title: i.get("label"),
          }),
            o.trigger(o.KEYBOARD_ON, {
              uniqueKey: "ESC_POPUP",
              keyCode: 27,
              triggerEvent: "CLOSE_POPUP",
              destroyable: !0,
            });
        }
      },
      onFindBBModel: function (e, t, i) {
        if ("hinge" == t) {
          var n = this.$el.find(".option-item.active");
          if (i) {
            var s = this.optionList.get(e);
            s &&
              ("radio-checkbox" === s.get("uiType")
                ? this.optionList.forEach(function (e) {
                    if (s.get("itemType") === e.get("itemType")) {
                      this.$el
                        .find("div .item-option[cid='" + e.cid + "']")
                        .removeClass("selected");
                    }
                  }, this)
                : null == s.get("uiType") &&
                  this.optionList.forEach(function (e) {
                    if (
                      s.get("itemType") === e.get("itemType") &&
                      s.get("code") !== e.get("code")
                    ) {
                      this.$el
                        .find("div .item-option[cid='" + e.cid + "']")
                        .removeClass("selected");
                    }
                  }, this),
              o.trigger(o.BB_MODEL_FOUND, s, t, !0, 0 === n.length));
          }
          var s = this.list.get(e);
          s &&
            (this.$el.find(".item-option").removeClass("disabled"),
            o.trigger(o.BB_MODEL_FOUND, s, t, !1, 0 === n.length));
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
        if ("hinge" == e) {
          this.$(".option-item.active").removeClass("active");
          var t = this.list.findWhere({ code: this.data.cdd.getHinge() });
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
        if (
          (this.list.forEach(function (t) {
            var n = $(
              "<div cid='" +
                t.cid +
                "' class='option-item'><i class='radio'><i class='check'></i></i><span>" +
                (t.get("label") ? t.get("label") : t.get("code")) +
                "</span></div>"
            );
            this.data.cdd.getHinge() === t.get("code") &&
              (n.addClass("active"), (i = !0)),
              e.append(n);
          }, this),
          this.model.get("groupDescription") &&
            e.append(
              "<div class='description'>" +
                this.model.get("groupDescription") +
                "</div>"
            ),
          this.model.get("drzalo").length > 0 &&
            this.model.get("drzalo")[0].template)
        ) {
          var n = i ? "'more-btn k-button'" : "'more-btn k-button disabled'";
          this.$el.append(
            "<div style='width: auto; display: inline-block;' class=" +
              n +
              " + >" +
              a.get("common", "MORE") +
              "</div>"
          );
        }
        this.$el.append(e);
        var s = $("<div>", { class: "options item-options" });
        this.optionList = new t.Collection(
          this.model.get("equipmentItemOptions")
        );
        var o = null;
        return (
          this.optionList.forEach(function (e) {
            null == o
              ? (o = e.get("itemType"))
              : e.get("itemType") !== o &&
                (s.append("<hr>"), (o = e.get("itemType")));
            var t =
                this.data.cdd.getItem(e.get("itemType"), e.get("code")) && i,
              n = t
                ? "item-option k-checkbox selected"
                : i
                ? "item-option k-checkbox"
                : "item-option k-checkbox disabled",
              a = $(
                "<div cid='" +
                  e.cid +
                  "' class='" +
                  n +
                  "'><i class='k-radio'><i class='check-1'></i><i class='check-2'></i></i><span style='font-weight:bold;'>" +
                  (e.get("label") ? e.get("label") : e.get("code")) +
                  "</span><br /><span>" +
                  (e.get("description") ? e.get("description") : "") +
                  "</span></div>"
              );
            s.append(a);
          }, this),
          this.model.get("equipmentItemOptions") &&
            (this.$el.append(s),
            this.$el.removeClass("equipment-item"),
            this.$el.addClass("equipment-item-handle")),
          this
        );
      },
    });
  return t.View.extend({
    className: "scrolling equipment-sub-view spinner",
    IR: d,
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
      "click .item-option": "onItemOptionClick",
    },
    initialize: function () {
      i.bindAll(this, "render", "showSpinner", "refreshData"),
        this.listenTo(o, o.EQUIPMENT_GROUP_DATA, this.onEquipmentData),
        this.listenTo(o, o.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(o, o.DOOR_DATA_RESPONSE, this.updateView),
        this.listenTo(o, o.PACKAGE_CHANGE, this.updateView),
        this.listenTo(o, o.PROFILE_CHANGE, this.updateView),
        this.listenTo(o, o.MENU_CHANGE_EVENT, this.onMenuChange),
        this.listenTo(o, o.EQUIPMENT_VIEW_CHANGE, this.onEquipmentViewChange),
        (this.data = n.getInstance()),
        this.render(),
        this.data.getEquipmentGroup("hinge");
    },
    updateView: function (e) {
      (this.isDirty = !0), o.trigger(o.DESTROY_COMPONENT, "hinge_view");
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
    onEquipmentViewChange: function (e) {
      e == this.id && this.isDirty && this.refreshData();
    },
    refreshData: function () {
      this.data.getEquipmentGroup("hinge"),
        this.showSpinner(!0),
        (this.isDirty = !1);
    },
    onItemOptionClick: function (e) {
      var t = $(e.currentTarget),
        i = t.attr("cid"),
        t = this.$el.find("div .item-option[cid='" + i + "']");
      t.hasClass("disabled") || o.trigger(o.FIND_BB_MODEL, i, this.id, !0);
    },
    onEquipmentData: function (e, i) {
      "hinge" == i &&
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
          i = t.attr("cid");
        o.trigger(o.FIND_BB_MODEL, i, this.id);
      }
    },
    preventHingeChange: function (e, t) {
      return this.id != t;
    },
    onBBModelFound: function (e, i, n, s) {
      if (!this.preventHingeChange(e, i))
        if (n) {
          var a = this.data.cdd.getItem(e.get("itemType"));
          if (a)
            if ("radio-checkbox" === e.get("uiType"))
              a.code === e.get("code")
                ? (this.data.itemRemoved(e), this.handleItemChange(e.cid, !0))
                : (this.data.itemChanged(e), this.handleItemChange(e.cid, !1));
            else if ("checkbox" === e.get("uiType")) {
              var o = this.data.cdd.getItem(e.get("itemType"), e.get("code"));
              o
                ? (this.data.itemRemoved(e), this.handleItemChange(e.cid, !0))
                : (this.data.itemChanged(e), this.handleItemChange(e.cid, !1));
            } else
              a.code !== e.get("code") &&
                (this.data.itemChanged(e), this.handleItemChange(e.cid, !1));
          else this.data.itemChanged(e), this.handleItemChange(e.cid, !1);
        } else if (e.get("code") !== this.data.cdd.getHinge()) {
          if (s) {
            var d = this.data.cdd.getHinge(),
              l = null;
            this.handleList.forEach(function (e) {
              if (
                !l &&
                (e.get("drzalo").forEach(function (e) {
                  e.code === d && (l = e);
                }, this),
                l)
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
          this.$(".more-btn").addClass("disabled"),
            this.data.hingeChange(e),
            this.$(".option-item.active").removeClass("active"),
            this.$(".option-item[cid='" + e.cid + "']").addClass("active"),
            this.$(".option-item[cid='" + e.cid + "']")
              .parent(".options")
              .siblings(".more-btn")
              .removeClass("disabled");
        }
    },
    render: function () {
      return (
        this.$el.attr("id", this.model.get("state")),
        (this.id = this.model.get("state")),
        s.fixScrolling(this.$el, this.data),
        this
      );
    },
    showSpinner: function (e) {
      this.$el.toggleClass("spinner", e);
    },
    handleItemChange: function (e, t) {
      this.$el
        .find("div .item-option[cid='" + e + "']")
        .toggleClass("selected", !t);
    },
  });
});
