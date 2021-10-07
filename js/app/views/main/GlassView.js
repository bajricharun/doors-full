define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/models/Model",
  "app/util/Util",
  "lib/text!tpl/glassView.html",
  "app/events/KEvent",
  "app/util/Labels",
], function (s) {
  var a = s("backbone"),
    t = s("underscore"),
    e = s("jquery"),
    i = s("app/models/Model"),
    l = s("app/util/Util"),
    d = s("lib/text!tpl/glassView.html"),
    n = s("app/events/KEvent"),
    o = s("app/util/Labels"),
    r = null;
  return a.View.extend({
    id: "glass-view",
    events: {
      "change label.select > select": "glassPartChange",
      "click #glass-type > a:not(.disabled)": "glassTypeChange",
    },
    initialize: function () {
      t.bindAll(
        this,
        "render",
        "renderGlassPartSelect",
        "renderGlassTypeSelect",
        "onViewLoad",
        "determineGlassPart",
        "determineGlassType"
      ),
        (this.data = i.getInstance()),
        this.listenTo(n, n.MENU_DATA, this.onMenuData),
        this.listenTo(n, n.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(n, n.BAUFORM_CHANGE, this.bauformChange),
        this.listenTo(n, n.SIDE_MODEL_CHANGE, this.onSideModelChange),
        (r = t.template(d)),
        this.render(),
        (this.firstMenuInit = !1),
        (this.isInitialized = !1),
        this.data.ddr &&
          ((this.isInitialized = !0), this.data.getMenu("glass-part"));
    },
    render: function () {
      return (
        this.$el.html(r()),
        o.exist("select", "REMARK") &&
          this.$("label.select").attr("title", o.get("select", "REMARK")),
        l.fixScrolling(this.$(".scrolling"), this.data),
        this
      );
    },
    onMenuData: function (s, a) {
      "glass-part" === a
        ? (this.renderGlassPartSelect(s), this.data.getMenu("glass-type"))
        : "glass-type" === a && this.renderGlassTypeSelect(s);
    },
    renderGlassPartSelect: function (s) {
      var a = this.$("label.select > select");
      t.each(
        s,
        function (s) {
          a.append("<option value='" + s.state + "'>" + s.label + "</option>");
        },
        this
      ),
        this.firstMenuInit
          ? this.determineGlassPart()
          : (this.firstMenuInit = !0);
    },
    renderGlassTypeSelect: function (a) {
      var e = this.$("#glass-type");
      t.each(
        a,
        function (a) {
          e.append("<a class='" + a.state + "'>" + a.label + "</a>"),
            s([a.module], this.onViewLoad);
        },
        this
      ),
        this.firstMenuInit
          ? this.determineGlassPart()
          : (this.firstMenuInit = !0);
    },
    onViewLoad: function (s) {
      var a = new s();
      this.$("#glass-sub-view").append(a.el);
    },
    glassPartChange: function (s) {
      e(s.currentTarget).blur(),
        this.data.glassPartChange(s.target.value),
        this.determineGlassType(),
        this.$el.attr("class", this.data.cdd.glassPart);
    },
    glassTypeChange: function (s) {
      this.$("#glass-sub-view").attr(
        "class",
        "scrolling " + s.currentTarget.className
      );
    },
    onDoorData: function () {
      this.isInitialized
        ? this.determineGlassPart()
        : ((this.isInitialized = !0),
          this.data.getMenu("glass-part"),
          this.data.getMenu("glass-type"));
    },
    bauformChange: function () {
      this.determineGlassPart();
    },
    onSideModelChange: function (s) {
      this.determineGlassType(),
        this.$el.attr("class", this.data.cdd.glassPart);
    },
    determineGlassPart: function () {
      this.data.dd("canSetMotiveGlass") && this.data.dd("canSetDoorGlass")
        ? this.$("select > option[value='door-glass']").prop("disabled", !1)
        : this.$("select > option[value='door-glass']").prop("disabled", !0),
        this.data.isLeftFrame() || this.data.isRightFrame()
          ? this.$("select > option[value='side-glass']").prop("disabled", !1)
          : this.$("select > option[value='side-glass']").prop("disabled", !0),
        this.data.isTopFrame()
          ? this.$("select > option[value='top-glass']").prop("disabled", !1)
          : this.$("select > option[value='top-glass']").prop("disabled", !0),
        this.data.isMiddleGlassFrame()
          ? this.$("select > option[value='middle-glass']").prop("disabled", !1)
          : this.$("select > option[value='middle-glass']").prop(
              "disabled",
              !0
            ),
        ("door-glass" == this.data.cdd.glassPart &&
          this.$("select > option[value='door-glass']").prop("disabled")) ||
        ("side-glass" == this.data.cdd.glassPart &&
          this.$("select > option[value='side-glass']").prop("disabled")) ||
        ("top-glass" == this.data.cdd.glassPart &&
          this.$("select > option[value='top-glass']").prop("disabled")) ||
        ("middle-glass" == this.data.cdd.glassPart &&
          this.$("select > option[value='middle-glass']").prop("disabled")) ||
        !this.data.cdd.glassPart
          ? this.$("select > option[value='door-glass']").prop("disabled")
            ? this.$("select > option[value='side-glass']").prop("disabled") ||
              (!this.data.isLeftFrame() && !this.data.isRightFrame())
              ? !this.$("select > option[value='top-glass']").prop(
                  "disabled"
                ) && this.data.isTopFrame()
                ? (this.$("label.select > select").val("top-glass"),
                  this.data.glassPartChange("top-glass"))
                : this.data.isMiddleGlassFrame()
                ? (this.$("label.select > select").val("middle-glass"),
                  this.data.glassPartChange("middle-glass"))
                : (this.data.cdd.glassPart = null)
              : (this.$("label.select > select").val("side-glass"),
                this.data.glassPartChange("side-glass"))
            : (this.$("label.select > select").val("door-glass"),
              this.data.glassPartChange("door-glass"))
          : this.data.glassPartChange(this.$("label.select > select").val()),
        this.$el.attr("class", this.data.cdd.glassPart),
        this.determineGlassType();
    },
    determineGlassType: function () {
      "door-glass" == this.data.cdd.glassPart
        ? (this.data.dd("hasGlassMotive")
            ? this.$("#glass-type > a.motiv").removeClass("disabled")
            : this.$("#glass-type > a.motiv").addClass("disabled"),
          this.data.dd("canSetPanelOrnamentGlass")
            ? this.$("#glass-type > a.ornament").removeClass("disabled")
            : this.$("#glass-type > a.ornament").addClass("disabled"))
        : "side-glass" == this.data.cdd.glassPart
        ? (this.data.cdd.sideModel
            ? this.data.cdd.hasSideModelMotive ||
              (this.data.cdd.sideModelDummy && this.data.dd("hasDoorSideGlass"))
              ? this.$("#glass-type > a.motiv").removeClass("disabled")
              : this.$("#glass-type > a.motiv").addClass("disabled")
            : this.data.dd("hasDoorSideGlass")
            ? this.$("#glass-type > a.motiv").removeClass("disabled")
            : this.$("#glass-type > a.motiv").addClass("disabled"),
          this.data.cdd.canSetOrnamentGlassSide
            ? this.$("#glass-type > a.ornament").removeClass("disabled")
            : this.$("#glass-type > a.ornament").addClass("disabled"))
        : "top-glass" == this.data.cdd.glassPart
        ? (this.data.dd("hasDoorUpperMotive")
            ? this.$("#glass-type > a.motiv").removeClass("disabled")
            : this.$("#glass-type > a.motiv").addClass("disabled"),
          this.$("#glass-type > a.ornament").removeClass("disabled"))
        : this.$("#glass-type > a.motiv").addClass("disabled"),
        this.$("#glass-type > a.ornament").hasClass("disabled")
          ? this.$("#glass-sub-view").attr("class", "scrolling motiv")
          : this.$("#glass-type > a.motiv").hasClass("disabled")
          ? this.$("#glass-sub-view").attr("class", "scrolling ornament")
          : this.$("#glass-sub-view").hasClass("motiv") ||
            this.$("#glass-sub-view").attr("class", "scrolling ornament");
    },
  });
});
