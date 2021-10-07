define([
  "require",
  "backbone",
  "underscore",
  "jquery",
  "app/models/Model",
  "app/util/Util",
  "lib/text!tpl/searchModel.html",
  "app/util/Labels",
  "app/events/KEvent",
], function (t) {
  var i = t("backbone"),
    s = t("underscore"),
    n = t("jquery"),
    h = t("app/models/Model"),
    l = t("app/util/Util"),
    a = t("lib/text!tpl/searchModel.html"),
    d = t("app/util/Labels"),
    o = t("app/events/KEvent"),
    r = i.View.extend({
      tagName: "a",
      className: "model-item",
      initialize: function () {
        s.bindAll(this, "render"),
          this.listenTo(o, o.DESTROY_COMPONENT, this.onDestroyComp);
      },
      onDestroyComp: function (e) {
        "search-model-view" == e &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        var e = this.model.get("name"),
          t = d.get("description", this.model.get("model")),
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
  return i.View.extend({
    id: "search-model-view",
    events: {
      "click .model-search-list > .model-item": "onModelClick",
      "input .model-search-cont input": "onInputChange",
      "click .model-search-cont .submit-search": "startSearch",
      "keydown .model-search-cont input": "onInputKeydown",
      "keypress .model-search-cont input": "onInputKeypress",
    },
    initialize: function () {
      s.bindAll(
        this,
        "render",
        "refreshSelected",
        "showSpinner",
        "hideStartSearch",
        "hideNoResults",
        "startSearch",
        "focusOnInput"
      ),
        this.listenTo(o, o.THUMBNAILS_SEARCH, this.onThumbnailData),
        this.listenTo(o, o.MODEL_CHANGE_EVENT, this.onModelChange),
        this.listenTo(o, o.MENU_CHANGE_EVENT, this.onMenuChange),
        (this.data = h.getInstance()),
        (this.template = s.template(a)),
        (this.isLoading = !1),
        this.render(),
        s.delay(this.focusOnInput, 50);
    },
    focusOnInput: function () {
      this.$(".model-search-cont input").focus();
    },
    onInputKeydown: function (e) {
      this.isLoading && e.preventDefault();
    },
    onInputChange: function () {
      this.isLoading ? e.preventDefault() : this.searchDelay();
    },
    onInputKeypress: function (e) {
      this.isLoading ? e.preventDefault() : 13 == e.which && this.startSearch();
    },
    searchDelay: s.debounce(function () {
      this.isLoading || this.startSearch();
    }, 500),
    startSearch: function () {
      var e = this.$(".model-search-cont input").val();
      this.isLoading ||
        this.searchedVal == e ||
        ((this.searchedVal = e),
        o.trigger(o.DESTROY_COMPONENT, this.id),
        e && e.length > 1
          ? (this.showSpinner(!0),
            (this.isLoading = !0),
            this.hideStartSearch(!0),
            this.data.getThumbnailSearch(e))
          : (o.trigger(o.DESTROY_COMPONENT, this.id),
            this.hideStartSearch(!1),
            this.hideNoResults(!0)));
    },
    onThumbnailData: function (e) {
      if (((this.thumbnailList = new i.Collection(e)), e.length > 0)) {
        this.hideNoResults(!0);
        var t = this.$(".model-search-list");
        this.thumbnailList.forEach(function (e) {
          var i = new r({ model: e }).render();
          t.append(i.el),
            e.get("model") ==
              (this.data.dd("parentModel")
                ? this.data.dd("parentModel")
                : this.data.dd("model")) && (this.selectedCid = e.cid);
        }, this),
          this.refreshSelected();
      } else this.hideNoResults(!1);
      this.showSpinner(!1), (this.isLoading = !1);
    },
    onModelClick: function (e) {
      if (!this.data.imageLoading) {
        var t = n(e.currentTarget),
          i = t.attr("cid");
        if (this.selectedCid != i) {
          this.selectedCid = i;
          var s = this.thumbnailList.get(i);
          this.data.modelChange(
            s.get("defaultChildModel")
              ? s.get("defaultChildModel")
              : s.get("model"),
            this.id
          ),
            this.refreshSelected();
        }
      }
    },
    onModelChange: function (e, t) {
      t != this.id && (this.isDirty = !0);
    },
    onMenuChange: function (e) {
      if ("search-model" == e.state && (this.focusOnInput(), this.isDirty)) {
        var t;
        this.thumbnailList &&
          (t = this.thumbnailList.findWhere({ model: this.data.dd("model") })),
          t
            ? ((this.selectedCid = t.cid), this.refreshSelected())
            : ((this.selectedCid = -1),
              this.$("a.model-item.selected").removeClass("selected")),
          (this.isDirty = !1);
      }
    },
    refreshSelected: function () {
      this.$("a.model-item.selected").removeClass("selected"),
        this.$("a.model-item[cid='" + this.selectedCid + "']").addClass(
          "selected"
        );
    },
    render: function () {
      return (
        this.$el.append(this.template(d.all())),
        l.fixScrolling(this.$(".model-search-list"), this.data),
        this
      );
    },
    showSpinner: function (e) {
      this.$(".model-search-list").toggleClass("spinner", e);
    },
    hideStartSearch: function (e) {
      this.$(".start-search").toggleClass("hidden", e);
    },
    hideNoResults: function (e) {
      this.$(".no-results").toggleClass("hidden", e);
    },
  });
});
