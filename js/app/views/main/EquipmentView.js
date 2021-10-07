define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/profile",
  "lib/text!tpl/select.html",
  "app/enum/Wing",
  "app/util/Labels",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    s = t("app/models/Model"),
    o = t("app/events/KEvent"),
    n = t("app/util/Util"),
    a = (t("app/profile"), t("lib/text!tpl/select.html")),
    l = t("app/enum/Wing"),
    d = t("app/util/Labels"),
    r = e.View.extend({
      initialize: function () {
        this.listenTo(o, o.DESTROY_COMPONENT, this.onDestroy),
          (this.data = s.getInstance());
      },
      onDestroy: function (t) {
        "color_view" == t &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        return (
          this.$el.addClass(
            "element-" + this.data.cdd.getProductPart() + " color-group"
          ),
          this.collection.forEach(function (t) {
            var e = new c({ model: t });
            this.$el.append(e.render().el);
          }, this),
          this
        );
      },
    }),
    c = e.View.extend({
      className: "section",
      initialize: function () {
        this.listenTo(o, o.FIND_BB_MODEL, this.onFindBBModel),
          this.listenTo(o, o.DESTROY_COMPONENT, this.onDestroy),
          this.listenTo(o, o.PRODUCT_PART_CHANGE, this.onProductPartChange),
          this.listenTo(o, o.COLOR_CHANGE, this.onColorChange),
          (this.data = s.getInstance()),
          (this.isSelectionDirty = !1);
      },
      onDestroy: function (t) {
        "color_view" == t &&
          ((this.list = null),
          this.remove(),
          this.$el.remove(),
          delete this.el,
          delete this.$el);
      },
      onFindBBModel: function (t, e) {
        if (this.list && "colors-view" == e) {
          var i = this.list.get(t);
          i && o.trigger(o.BB_MODEL_FOUND, i, e);
        }
      },
      onColorChange: function () {
        "surface" == this.data.cdd.getProductPart() &&
          (this.isSelectionDirty = !0);
      },
      onProductPartChange: function () {
        this.data.cdd.getProductPart() ==
          this.model.get("productPart").toLowerCase() &&
          this.isSelectionDirty &&
          (this.$(" .color-item.selected").removeClass("selected"),
          this.$(" .color-item.custom .submit-button").addClass("hidden"),
          this.list.forEach(function (t) {
            this.data.isColorEqual(t) &&
              this.$(".color-item[cid=" + t.cid + "]").addClass("selected");
          }, this),
          (this.isSelectionDirty = !1));
      },
      render: function () {
        this.$el.append(
          "<span class=title>" + this.model.get("description") + "</span>"
        ),
          this.$el.append("<div class='colors clear'></div>");
        var t = this.$(".colors");
        return (
          (this.list = new e.Collection(this.model.get("color"))),
          this.list.forEach(function (e) {
            var i = new h({ model: e });
            if (
              (e.get("sameAsOutside")
                ? (t.append(i.render2().el), i.$el.addClass("sameasoutside"))
                : t.append(i.render().el),
              this.data.isColorEqual(e))
            ) {
              i.$el.addClass("selected");
              var s = this.data.getCurrentPartSelectedColor();
              s && s.desc && i.$el.find(".color-input > input").val(s.desc);
            }
          }, this),
          this
        );
      },
    }),
    h = e.View.extend({
      tagName: "div",
      className: "color-item",
      initialize: function () {
        (this.data = s.getInstance()),
          this.$el.attr({ cid: this.model.cid }),
          this.listenTo(o, o.DESTROY_COMPONENT, this.onDestroy);
      },
      onDestroy: function (t) {
        "color_view" == t &&
          (this.remove(), this.$el.remove(), delete this.el, delete this.$el);
      },
      render: function () {
        try {
          this.$el.append('<a class="color"></a>'),
            this.$el
              .find("a")
              .append(
                '<div class="icon"><div class="checkmark"><div class="line-1"></div><div class="line-2"></div></div></div>'
              );
          var t = this.model.get("url"),
            e = this.model.get("rgb");
          e || (e = "0xFFFFFF");
          var i = n.hex2Rgb(e.toString());
          if (
            ($("<img />", {
              src: n.getImageUrl("empty.png"),
              style: t
                ? "background-image: url('" + t + "')"
                : "background-color:" + i.toString(),
              title: this.model.get("desc"),
            }).appendTo(this.$el.find("a")),
            $("<span></span>", {
              class: "name",
              text: this.model.get("desc"),
              title: this.model.get("desc"),
            }).appendTo(this.$el.find("a")),
            this.model.get("customInput") &&
              (this.$el.addClass("custom"),
              this.$el.append(
                "<div class='color-input'><input cid=" +
                  n.quote(this.model.cid) +
                  " maxlength='50' placeholder=" +
                  n.quote(d.get("color", "COLOR_PLACEHOLDER")) +
                  "><div class='submit-button hidden' cid=" +
                  n.quote(this.model.cid) +
                  "><span>OK</span></div></div>"
              ),
              d.exist("color", "CUSTOM_NOTICE")))
          ) {
            var s = $("<div>", { class: "custom-notice" }).text(
              d.get("color", "CUSTOM_NOTICE")
            );
            this.$(".color-input").prepend(s);
          }
          this.model.get("label2") &&
            this.$el.append(
              "<div class='label2'><span>" +
                this.model.get("label2") +
                "</span></div>"
            ),
            this.model.get("sameAsPanel") && this.$el.addClass("same-as-panel");
        } catch (t) {
          n.log(this.model);
        }
        return this;
      },
      render2: function () {
        var t =
          '<div class="option-item box sameasoutside">                     <i class="radio">                         <i class="check-1"></i>                        <i class="check-2"></i>                    </i>                     <span class="type">' +
          this.model.get("desc") +
          "</span>                    </div>";
        return this.$el.append(t), this;
      },
    });
  return e.View.extend({
    id: "colors-view",
    states: {},
    events: {
      "change select": "doorElementChange",
      "click .color-item": "onColorItemClick",
      "keyup .color-input > input": "onColorInputChange",
      "change .color-input > input": "onColorInputChange",
      "click .color-input > .submit-button": "onSubmitClick",
    },
    initialize: function () {
      i.bindAll(this, "render", "update"),
        (this.data = s.getInstance()),
        this.listenTo(o, o.DOOR_DATA_RESPONSE, this.onDoorData),
        this.listenTo(o, o.COLOR_DATA_RESPONSE, this.onColorData),
        this.listenTo(o, o.BB_MODEL_FOUND, this.onBBModelFound),
        this.listenTo(o, o.MATERIAL_CHANGE, this.onMaterialChange),
        this.listenTo(o, o.PROFILE_CHANGE, this.onProfileChange),
        this.listenTo(o, o.PACKAGE_CHANGE, this.onPackageChange),
        this.listenTo(o, o.DOOR_VIEW_CHANGE, this.onDoorViewChange),
        this.listenTo(o, o.INSIDE_MODEL_DATA, this.onDoorViewChange),
        this.listenTo(o, o.INNER_WING_CHANGE, this.onWingChange),
        (this.selectTpl = i.template(a)),
        (this.customColorData = {}),
        this.data.dd() && this.render();
    },
    onDoorData: function () {
      this.rendered ? this.update() : this.render();
    },
    onMaterialChange: function (t) {
      this.update();
    },
    onDoorViewChange: function (t) {
      this.rendered && this.update();
    },
    onWingChange: function (t) {
      "wing" == this.data.conf("innerFrameColorMode") && this.update();
    },
    onProfileChange: function (t) {
      var e = t.get("material");
      e && e.code && this.update();
    },
    onPackageChange: function (t) {
      t && t.get("updateColor") && this.update();
    },
    doorElementChange: function (t) {
      $(t.currentTarget).blur();
      var e = t.target.value;
      this.data.doorElementChange(e),
        this.states[e]
          ? this.$("#colors-sub-view")
              .removeClass()
              .addClass("scrolling element-" + this.data.cdd.getProductPart())
              .scrollTop(0)
          : (this.addSpinner(), this.data.getColorsByElement());
    },
    onColorData: function (t) {
      this.removeSpinner();
      var i = new e.Collection(t),
        s = new r({ collection: i });
      this.$("#colors-sub-view")
        .removeClass()
        .addClass("scrolling element-" + this.data.cdd.getProductPart())
        .append(s.render().el),
        (this.states[this.data.cdd.getProductPart()] = s);
    },
    onColorItemClick: function (t) {
      if (!this.data.imageLoading) {
        var e = $(t.currentTarget),
          i = e.attr("cid");
        o.trigger(o.FIND_BB_MODEL, i, this.id),
          this.$(
            ".color-group.element-" +
              this.data.cdd.getProductPart() +
              " .color-item"
          ).removeClass("selected"),
          this.$(
            ".color-group.element-" +
              this.data.cdd.getProductPart() +
              " .color-item.custom .submit-button"
          ).addClass("hidden"),
          e.addClass("selected");
      }
    },
    onBBModelFound: function (t, e) {
      if (this.id == e) {
        (this.customColorData[t.cid] || "" == this.customColorData[t.cid]) &&
          t.set("customDesc", this.customColorData[t.cid]);
        var i = this.data.getCurrentPartSelectedColor();
        (i && i.code == t.get("code") && i.desc == t.get("customDesc")) ||
          this.data.colorChange(t);
      }
    },
    onColorInputChange: function (t) {
      var e = $(t.currentTarget),
        i = e.attr("cid");
      (this.customColorData[i] = e.val()),
        this.$(".submit-button[cid=" + n.quote(i) + "]").removeClass("hidden");
    },
    onSubmitClick: function (t) {
      var e = $(t.currentTarget),
        i = e.attr("cid");
      this.$(".submit-button[cid=" + n.quote(i) + "]").addClass("hidden"),
        o.trigger(o.FIND_BB_MODEL, i, this.id);
    },
    clean: function () {
      (this.customColorData = {}),
        i.each(this.$("select option"), function (t) {
          $(t).remove();
        });
    },
    render: function () {
      return (
        this.$el.append(this.selectTpl()),
        this.$el.append("<div id='colors-sub-view' class='scrolling'></div>"),
        n.fixScrolling(this.$(".scrolling"), this.data),
        this.renderElements(),
        this.addSpinner(),
        this.data.getColorsByElement(),
        (this.rendered = !0),
        this
      );
    },
    renderElements: function () {
      if (this.data.ddr) {
        var t = this.$("select");
        this.data.dd("doorElements").forEach(function (e) {
          this.canRenderElement(e.name) &&
            $("<option/>", { value: e.state, text: e.label }).appendTo(t);
        }, this);
        var e = t.val();
        e &&
          this.data.cdd.getProductPart() != e &&
          this.data.doorElementChange(e);
      }
    },
    canRenderElement: function (t) {
      return (
        "surface" == t ||
        (this.data.isInsideWall()
          ? !!this.data.hasInsideLayer(t) &&
            !("wing" == t && !l.isInside(this.data.cdd.getWingCode()))
          : !("wing" == t && !l.isOutside(this.data.cdd.getWingCode())))
      );
    },
    update: function () {
      this.clean(),
        this.destroy(),
        this.renderElements(),
        this.addSpinner(),
        this.data.getColorsByElement();
    },
    destroy: function () {
      (this.states = {}), o.trigger(o.DESTROY_COMPONENT, "color_view");
    },
    addSpinner: function () {
      this.$("#colors-sub-view").attr("class", "scrolling"),
        this.$(".scrolling").addClass("spinner");
    },
    removeSpinner: function () {
      this.$(".scrolling").removeClass("spinner");
    },
  });
});
