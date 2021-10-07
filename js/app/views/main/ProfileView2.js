define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Labels",
  "app/util/Util",
], function (i) {
  var e = i("backbone"),
    t = i("underscore"),
    s = i("app/models/Model"),
    n = i("app/events/KEvent"),
    o = i("app/util/Labels"),
    l = i("app/util/Util"),
    a = e.View.extend({
      className: "equipment-item",
      events: { "click .more-btn": "onMoreClick" },
      initialize: function (i) {
        t.bindAll(this, "render", "_openPopup"),
          (this.data = s.getInstance()),
          this.listenTo(n, n.DESTROY_COMPONENT, this.onDestroy),
          this.$el.addClass(i.horizontal ? "horizontal" : "vertical");
      },
      onDestroy: function (i) {
        "profile_view" == i &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      onMoreClick: function () {
        this._openPopup(this.model.get("template"));
      },
      _getLabelTitle: function () {
        var i = o.get("popup", this.model.get("code") + "_POPUP_TITLE");
        return i.match(/POPUP_TITLE$/gi) ? null : i;
      },
      _openPopup: function (i) {
        n.trigger(n.OPEN_POPUP, {
          module: "app/views/main/popup/GenericPopup2",
          template: i,
          class: "",
          title:
            this._getLabelTitle() ||
            this.model.get("label") ||
            this.model.get("code"),
        }),
          n.trigger(n.KEYBOARD_ON, {
            uniqueKey: "ESC_POPUP",
            keyCode: 27,
            triggerEvent: "CLOSE_POPUP",
            destroyable: !0,
          });
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
              "</span></div>"
          );
        return (
          this.data.cdd.getProfile() == this.model.get("code") &&
            e.addClass("active"),
          i.append(e),
          this.model.get("description") &&
            i.append(
              "<div class='description'>" +
                this.model.get("description") +
                "</div>"
            ),
          this.model.get("template") &&
            i.append(
              "<div style='display: inline-block; width: auto; margin-top: 10px;' class='k-button more-btn'>" +
                o.get("common", "MORE") +
                "</div>"
            ),
          this.$el.append(i),
          this
        );
      },
    });
  return e.View.extend({
    id: "profile-view",
    className: "spinner",
    events: {
      "click .option-item": "onRadioBtnClick",
      "click .image": "onRadioBtnClick",
    },
    horizontal: !1,
    initialize: function () {
      (this.data = s.getInstance()),
        this.listenTo(n, n.DOOR_DATA_RESPONSE, this.onNewData),
        this.listenTo(n, n.PACKAGE_CHANGE, this.onNewData),
        this.listenTo(n, n.DIN_CHANGE, this.onNewData),
        this.listenTo(n, n.MENU_CHANGE_EVENT, this.onMenuChange),
        this.render(),
        this.data.ddr && (this.renderProfiles(), (this.isInitialized = !0));
    },
    onMenuChange: function (i) {
      "profil" == i.state &&
        this.isDirty &&
        this.data.profileList &&
        (this.renderProfiles(), (this.isDirty = !1));
    },
    onNewData: function (i) {
      this.isInitialized
        ? ((this.isDirty = !0),
          n.trigger(n.DESTROY_COMPONENT, "profile_view"),
          this.showSpinner(!0))
        : ((this.isInitialized = !0), this.renderProfiles());
    },
    renderProfiles: function () {
      (this.list = new e.Collection(this.data.profileList)),
        this.list.forEach(function (i) {
          if (i.get("visible")) {
            var e = new a({ model: i, horizontal: this.horizontal }).render();
            this.$el.append(e.el);
          }
        }, this),
        this.showSpinner(!1);
    },
    onRadioBtnClick: function (i) {
      if (!this.data.imageLoading) {
        var e = $(i.currentTarget),
          t = e.attr("cid"),
          s = this.list.get(t);
        s.get("code") != this.data.cdd.getProfile() &&
          (this.checkRules(s) ||
            (this.$(".option-item.active").removeClass("active"),
            this.data.profileChange(s),
            e.hasClass("option-item")
              ? e.addClass("active")
              : this.$(".option-item[cid='" + t + "']").addClass("active")));
      }
    },
    checkRules: function (i) {
      return !1;
    },
    render: function () {
      return l.fixScrolling(this.$el, this.data), this;
    },
    showSpinner: function (i) {
      this.$el.toggleClass("spinner", i);
    },
  });
});
