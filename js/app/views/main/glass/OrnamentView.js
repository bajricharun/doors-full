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
    s = e("underscore"),
    i = e("app/models/Model"),
    a = e("app/util/Util"),
    n = e("app/util/Labels"),
    l = e("app/events/KEvent"),
    d = t.View.extend({
      tagName: "a",
      className: "glass-item",
      initialize: function () {
        s.bindAll(this, "render"),
          this.listenTo(l, l.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (e) {
        "ornament_view" === e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        var e = this.model.get("label")
          ? this.model.get("label")
          : this.model.get("code");
        return (
          this.$el.append(
            '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><img src=\'' +
              this.model.get("thumbnailUrl") +
              "' title='" +
              e +
              "'><span class='name' title='" +
              e +
              "'>" +
              e +
              "</span>"
          ),
          this.$el.attr("cid", this.model.cid),
          this.$el.toggleClass("disabled", this.model.get("disabled")),
          this
        );
      },
    });
  return t.View.extend({
    id: "ornament",
    className: "glass-sub-sub-view scrolling spinner",
    events: {
      "click .glass-item": "onOrnamentClick",
      "click #glass-group > a": "onOrnamentGroupChange",
    },
    initialize: function () {
      s.bindAll(this, "render", "determineSelection", "preventClick"),
        (this.dirty = !1),
        (this.data = i.getInstance()),
        this.listenTo(l, l.ORNAMENT_GLASS_DATA, this.onOrnamentData),
        this.listenTo(l, l.GLASS_PART_CHANGE, this.determineSelection),
        this.listenTo(l, l.DOOR_DATA_RESPONSE, this.determineSelection),
        this.listenTo(l, l.MOTIVE_CHANGE, this.determineSelection),
        this.listenTo(l, l.ORNAMENT_GROUP_DATA, this.onOrnamentGroupData),
        this.listenTo(l, l.MODEL_CHANGE_EVENT, this.onModelChange),
        this.listenTo(l, l.SIDE_MODEL_CHANGE, this.onModelChange),
        this.listenTo(l, l.MENU_CHANGE_EVENT, this.onMenuChange),
        this.render(),
        this.data.getOrnamentGroup();
    },
    onModelChange: function () {
      this.dirty = !0;
    },
    onMenuChange: function (e) {
      "ornament" === e.state &&
        this.dirty &&
        (l.trigger(l.DESTROY_COMPONENT, "ornament_view"),
        this.data.getOrnamentGlass(this.selectedGroup),
        (this.dirty = !1));
    },
    onOrnamentGroupChange: function (e) {
      var t = $(e.currentTarget),
        s = t.attr("cid"),
        i = this.ornamentGroupList.get(s),
        a = i.get("group");
      this.selectedGroup !== a &&
        (l.trigger(l.DESTROY_COMPONENT, "ornament_view"),
        this.$("#glass-group > a.active").removeClass("active"),
        t.addClass("active"),
        (this.selectedGroup = a),
        this.data.getOrnamentGlass(a));
    },
    onOrnamentGroupData: function (e) {
      this.ornamentGroupList && this.ornamentGroupList.reset(),
        (this.ornamentGroupList = new t.Collection(e));
      var s = this.$("#glass-group");
      if (
        (this.ornamentGroupList.length > 1
          ? (this.ornamentGroupList.forEach(function (e) {
              s.append(
                "<a cid='" + e.cid + "'>" + e.get("description") + "</a>"
              );
            }, this),
            this.$el.addClass("group"))
          : s.remove(),
        this.ornamentGroupList.length > 0)
      ) {
        var i = this.ornamentGroupList.at(0),
          a = i.get("group");
        this.data.getOrnamentGlass(a),
          (this.selectedGroup = a),
          this.$("#glass-group > a[cid='" + i.cid + "']").addClass("active");
      } else this.data.getOrnamentGlass("4"), (this.selectedGroup = "4");
    },
    onOrnamentData: function (e) {
      var s = ("grupa" + this.selectedGroup).toUpperCase();
      n.exist("ornamentGroup", s)
        ? (this.$("#ornament-group-desc").html(n.get("ornamentGroup", s)),
          this.$el.addClass("g-desc"))
        : (this.$("#ornament-group-desc").html(""),
          this.$el.removeClass("g-desc"));
      var i = this.$(".glass-sub-sub-sub-view");
      if (((this.list = new t.Collection(e)), i.empty(), !this.list.length))
        return (
          i.append(n.get("equipment", "NOT_AVAILABLE")),
          void this.$el.removeClass("spinner")
        );
      this.renderList(i);
    },
    renderList: function (e) {
      this.list.forEach(function (t) {
        t.set("disabled", this.isDisabled(t));
        var s = new d({ model: t }).render();
        e.append(s.el);
      }, this),
        this.determineSelection(),
        this.$el.removeClass("spinner");
    },
    onOrnamentClick: function (e) {
      if (!this.data.imageLoading) {
        var t = $(e.currentTarget),
          s = t.attr("cid");
        if (this.selectedCid !== s) {
          var i = this.list.get(s);
          this.preventClick(i) ||
            ((this.selectedCid = s),
            this.$(".glass-item.selected").removeClass("selected"),
            this.$(".glass-item[cid='" + s + "']").addClass("selected"),
            this.data.ornamentChange(i));
        }
      }
    },
    preventClick: function (e) {
      return !1;
    },
    isDisabled: function (e) {
      return !1;
    },
    determineSelection: function () {
      if (this.list) {
        var e;
        if (
          ("door-glass" === this.data.cdd.glassPart &&
          "ornament" === this.data.cdd.getDoorGlassType()
            ? (e = this.data.cdd.getDoorGlass())
            : "side-glass" === this.data.cdd.glassPart &&
              "ornament" === this.data.cdd.getSideGlassType()
            ? (e = this.data.cdd.getSideGlass())
            : "top-glass" === this.data.cdd.glassPart &&
              "ornament" === this.data.cdd.getUpperGlassType()
            ? (e = this.data.cdd.getUpperGlass())
            : "middle-glass" === this.data.cdd.glassPart &&
              "ornament" === this.data.cdd.getMiddleGlassType() &&
              (e = this.data.cdd.getMiddleGlass()),
          this.$(".glass-item.selected").removeClass("selected"),
          (this.selectedCid = null),
          e)
        ) {
          var t = this.list.findWhere({ code: e });
          t &&
            ((this.selectedCid = t.cid),
            this.$(".glass-item[cid='" + t.cid + "']").addClass("selected"));
        }
      }
    },
    render: function () {
      return (
        this.$el.append(
          "<div id='glass-group' class='clear'></div><div id='ornament-group-desc'></div><div class='glass-sub-sub-sub-view scrolling'></div>"
        ),
        a.fixScrolling(this.$(".scrolling"), this.data),
        this
      );
    },
  });
});
