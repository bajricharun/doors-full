define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/models/Model",
  "app/util/Util",
  "app/views/main/SideModelView",
  "lib/text!tpl/select.html",
  "app/util/Labels",
  "app/events/KEvent",
], function (e) {
  var t = e("backbone"),
    i = e("underscore"),
    s = e("jquery"),
    l = e("app/models/Model"),
    n = e("app/util/Util"),
    a = e("app/views/main/SideModelView"),
    d = e("lib/text!tpl/select.html"),
    r = e("app/util/Labels"),
    h = e("app/events/KEvent"),
    o = t.View.extend({
      tagName: "a",
      className: "model-item",
      initialize: function () {
        i.bindAll(this, "render"),
          this.listenTo(h, h.DESTROY_COMPONENT, this.onDestroyComp);
      },
      onDestroyComp: function (e) {
        "model_view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        var e = this.model.get("name"),
          t = r.get("description", this.model.get("model")),
          i = e || this.model.get("model");
        return (
          this.$el.append(
            '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div><img src=\'' +
              this.model.get("url") +
              "' title='" +
              (null != t ? t : i) +
              "'><span title='" +
              (null != t ? t : i) +
              "'>" +
              i +
              "</span>"
          ),
          this.$el.attr("cid", this.model.cid),
          this
        );
      },
    });
  return t.View.extend({
    id: "model-view",
    events: {
      "change .select > select": "onSeriesChange",
      "click #model-sub-view > .model-item": "onModelClick",
    },
    initialize: function () {
      i.bindAll(
        this,
        "render",
        "renderSeries",
        "refreshSelected",
        "showSpinner"
      ),
        (this.ModelRenderer = o),
        (this.isDirty = !1),
        (this.data = l.getInstance()),
        (this.selectTpl = i.template(d)),
        this.listenToOnce(h, h.SERIES_EVENT, this.onSeriesData),
        this.listenTo(h, h.THUMBNAILS, this.onThumbnailData),
        this.listenTo(h, h.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(h, h.BAUFORM_CHANGE, this.onBauformChange),
        this.listenTo(h, h.MODEL_CHANGE_EVENT, this.onModelChange),
        this.listenTo(h, h.MENU_CHANGE_EVENT, this.onMenuChange),
        this.render(),
        this.data.ddr &&
          ((this.isInitialized = !0),
          this.data.getSeries(),
          this.toggleSideModel());
    },
    onDoorData: function (e) {
      this.isInitialized || ((this.isInitialized = !0), this.data.getSeries()),
        this.toggleSideModel();
    },
    onSeriesData: function (e) {
      if (
        ((this.hasCategories = e.hasCategories),
        (this.seriesList = e),
        e.length > 1)
      ) {
        this.$el.addClass("series");
        var t = s(this.selectTpl());
        r.exist("select", "REMARK") &&
          t.attr("title", r.get("select", "REMARK")),
          this.$el.prepend(t),
          this.renderSeries();
      }
      this.getThumbnails();
    },
    getThumbnails: function () {
      this.isAllFromSeriePresent(this.seriesList)
        ? this.data.getAllThumbnails()
        : this.data.getThumbnails(this.data.dd("serie"));
    },
    onSeriesChange: function (e) {
      s(e.currentTarget).blur(), h.trigger(h.DESTROY_COMPONENT, "model_view");
      var t = this.seriesList.get(e.target.value);
      this.showSpinner(!0);
      var i = t.get("category"),
        l = i && 1 === i.length ? i[0] : null;
      l && l.returnAllFromSerie
        ? this.data.getAllThumbnails()
        : this.data.getThumbnails(t.get("data"));
    },
    isAllFromSeriePresent: function (e) {
      return !!e.findWhere({ returnAllFromSerie: !0 });
    },
    renderSeries: function (e) {
      var t = this.$(".select > select"),
        i = this.isAllFromSeriePresent(this.seriesList);
      this.seriesList.forEach(function (e) {
        var s =
          (i && e.get("returnAllFromSerie")) ||
          (!i && e.get("data") === this.data.dd("category"));
        t.append(
          "<option value='" +
            e.cid +
            "'" +
            (s ? "selected" : "") +
            ">" +
            e.get("label") +
            "</option>"
        );
      }, this);
    },
    onThumbnailData: function (e) {
      this.thumbnailList = new t.Collection(e);
      var i = this.$("#model-sub-view");
      this.thumbnailList.forEach(function (e) {
        var t = new this.ModelRenderer({ model: e }).render();
        i.append(t.el),
          e.get("model") ===
            (this.data.dd("parentModel")
              ? this.data.dd("parentModel")
              : this.data.dd("model")) && (this.selectedCid = e.cid);
      }, this),
        this.refreshSelected(),
        this.showSpinner(!1);
    },
    onModelClick: function (e) {
      if (!this.data.imageLoading) {
        var t = s(e.currentTarget),
          i = t.attr("cid");
        if (this.selectedCid != i) {
          var l = this.thumbnailList.get(i);
          this.checkRules(l) ||
            ((this.selectedCid = i),
            this.data.modelChange(
              l.get("defaultChildModel")
                ? l.get("defaultChildModel")
                : l.get("model"),
              this.id
            ),
            this.refreshSelected());
        }
      }
    },
    checkRules: function () {
      return !1;
    },
    onModelChange: function (e, t) {
      t != this.id && (this.isDirty = !0);
    },
    onMenuChange: function (e) {
      if (this.isDirty && "model" == e.state) {
        if ((h.trigger(h.DESTROY_COMPONENT, "model_view"), this.seriesList)) {
          var t = this.seriesList.findWhere({ data: this.data.dd("serie") });
          t && this.$(".select > select").val(t.cid);
        }
        this.data.getThumbnails(this.data.dd("serie")), (this.isDirty = !1);
      }
    },
    refreshSelected: function () {
      this.$("a.model-item.selected").removeClass("selected"),
        this.$("a.model-item[cid='" + this.selectedCid + "']").addClass(
          "selected"
        );
    },
    render: function () {
      this.$el.append(
        "<div id='model-sub-view' class='scrolling clear spinner'>"
      );
      var e = new a();
      return (
        this.$el.append(e.el),
        n.fixScrolling(this.$("#model-sub-view"), this.data),
        this
      );
    },
    toggleSideModel: function () {
      this.data.dd("hasDoorSideModel") &&
      (this.data.isLeftFrame() || this.data.isRightFrame())
        ? this.$el.addClass("model-options")
        : this.$el.removeClass("model-options");
    },
    showSpinner: function (e) {
      this.$("#model-sub-view").toggleClass("spinner", e);
    },
    onBauformChange: function (e) {
      this.toggleSideModel();
    },
  });
});
