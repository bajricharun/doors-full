define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/models/Model",
  "app/util/Util",
  "lib/text!tpl/select.html",
  "app/util/Labels",
  "app/events/KEvent",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    s = e("jquery"),
    n = e("app/models/Model"),
    l = e("app/util/Util"),
    a = e("lib/text!tpl/select.html"),
    o = e("app/util/Labels"),
    c = e("app/events/KEvent");
  return t.View.extend({
    id: "additional-equipment-view",
    classId: "generic-equipment-view",
    className: "generic-equipment-view",
    events: { "change .select > select": "onEquipmentTypeChange" },
    initialize: function () {
      i.bindAll(this, "render", "onViewLoad", "filterSelect"),
        (this.data = n.getInstance()),
        this.listenTo(c, c.MENU_DATA, this.onMenuData),
        this.listenTo(c, c.DOOR_VIEW_CHANGE, this.onDoorViewChange),
        this.listenTo(c, c.MENU_CHANGE_EVENT, this.onMenuChange),
        (this.states = {}),
        (this.selectTpl = i.template(a)),
        this.render(),
        this.data.ddr
          ? this.data.getMenu("additional-equipment")
          : this.listenTo(c, c.DOOR_DATA_RESPONSE, this.onDoorData);
    },
    onDoorData: function (e) {
      this.stopListening(c, c.DOOR_DATA_RESPONSE, this.onDoorData),
        this.data.getMenu("additional-equipment");
    },
    onMenuData: function (e, i) {
      if ("additional-equipment" == i) {
        this.selectList = new t.Collection(e);
        var s = this.$(".select > select");
        this.selectList.forEach(function (e) {
          s.append(
            "<option value='" + e.cid + "'>" + e.get("label") + "</option>"
          );
        }, this),
          this.data.conf("insideView")
            ? this.filterSelect()
            : this.showSelectedView();
      }
    },
    onMenuChange: function (e) {
      "additional-equipment" == e.state &&
        (this.data.conf("insideView")
          ? this.filterSelect()
          : this.showSelectedView());
    },
    onDoorViewChange: function () {
      this.filterSelect();
    },
    filterSelect: function () {
      if (this.data.conf("insideView")) {
        var e;
        if (
          (this.selectList.forEach(function (t) {
            this.data.isInsideWall()
              ? t.get("inside") > 0
                ? (this.$(
                    ".select > select > option[value='" + t.cid + "']"
                  ).prop("disabled", !1),
                  e || (e = t.cid))
                : this.$(
                    ".select > select > option[value='" + t.cid + "']"
                  ).prop("disabled", !0)
              : 1 == t.get("inside")
              ? this.$(".select > select > option[value='" + t.cid + "']").prop(
                  "disabled",
                  !0
                )
              : (this.$(
                  ".select > select > option[value='" + t.cid + "']"
                ).prop("disabled", !1),
                e || (e = t.cid));
          }, this),
          (this.selectedModel && 2 == this.selectedModel.get("inside")) || !e)
        )
          return void this.showSelectedView();
        this.$(".select > select").val(e), this.showSelectedView(e);
      }
    },
    onEquipmentTypeChange: function (e) {
      s(e.currentTarget).blur(), this.showSelectedView();
    },
    showSelectedView: function (t) {
      t || (t = this.$(".select > select").val());
      var i = this.selectList.get(t),
        s = i.get("state");
      this.data.equipmentViewChange(s),
        this.$el.attr("class", s + " " + this.classId),
        (this.selectedModel = i),
        this.states[s] || e([i.get("module")], this.onViewLoad);
    },
    onViewLoad: function (e) {
      var t = new e({ model: this.selectedModel });
      (this.states[this.selectedModel.get("state")] = t), this.$el.append(t.el);
    },
    render: function () {
      var e = s(this.selectTpl());
      return (
        o.exist("select", "REMARK") &&
          e.attr("title", o.get("select", "REMARK")),
        this.$el.html(e),
        l.fixScrolling(this.$(".scrolling"), this.data),
        this
      );
    },
  });
});
