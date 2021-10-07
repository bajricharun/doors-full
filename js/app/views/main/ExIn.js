define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Util",
  "app/components/HouseGrid",
  "app/components/Copyright",
  "app/components/Impressum",
  "app/components/Cookie",
  "app/components/GDPR",
  "app/util/Labels",
  "app/components/Terms",
  "app/components/Switcher",
], function (e) {
  var i = e("backbone"),
    p = (e("underscore"), e("app/models/Model")),
    t = e("app/util/Util"),
    a = e("app/components/HouseGrid"),
    s = e("app/components/Copyright"),
    n = e("app/components/Impressum"),
    o = e("app/components/Cookie"),
    r = e("app/components/GDPR"),
    d = (e("app/util/Labels"), e("app/components/Terms"));
  return i.View.extend({
    id: "wall-grid",
    tpl: '<div class="footer-container">                <div class="ui-copyright"></div>                <div class="ui-impressum hidden">                    <a href="javascript:void(0)"></a>                </div>                <div class="ui-terms hidden">                    <a href="javascript:void(0)"></a>                </div>                <div class="ui-gdpr">                   <a href="javascript:void(0)"></a>                </div>                <div class="ui-cookie">                   <a href="javascript:void(0)"></a>                </div>            </div>',
    states: {},
    initialize: function () {
      (this.data = p.getInstance()), this.render();
    },
    render: function () {
      if (
        (this.$el.append(new a().render().el),
        this.$el.append(t.template(this.tpl)),
        this.data.conf("impressumTemplate") &&
          new n({ el: this.$(".ui-impressum") }),
        this.data.conf("termsTemplate") && new d({ el: this.$(".ui-terms") }),
        new s({ el: this.$(".ui-copyright") }),
        new r({ el: this.$(".ui-gdpr") }),
        new o({ el: this.$(".ui-cookie") }),
        this.data.conf("insideView"))
      ) {
        var i = e("app/components/Switcher");
        this.$el.append(new i().render().el);
      }
      this.data.wallStateChange({ state: "outside-wall", default: !0 }),
        t.fixScrolling(this.$(".scrolling"), this.data);
    },
  });
});
