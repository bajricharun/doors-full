define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/util/Labels",
  "app/util/Util",
], function (e) {
  var t = e("backbone"),
    a = e("underscore"),
    i = e("app/models/Model"),
    n = e("app/util/Labels"),
    o = e("app/util/Util");
  return t.View.extend({
    events: { "click a": "onClick" },
    initialize: function () {
      a.bindAll(this, "onClick", "render"),
        (this.data = i.getInstance()),
        this.$el.removeClass("hidden"),
        this.render();
    },
    onClick: function () {
      var e = this.data.conf("contactData"),
        t = {
          module: "app/views/main/popup/CookiePolicyPopup",
          title: n.get("cookie-banner", "COOKIE_POLICY"),
          template: "COOKIE_POLICY_POPUP",
          templateData: {
            company: e.companyName,
            address: e.address,
            postOffice: e.postOffice,
            url: e.appUrl,
            analyticalClass: this.data.conf("cookieSettingsSelected")
              ? "selected"
              : "",
          },
          class: "large",
        };
      o.openPopup(t);
    },
    render: function () {
      return this.$("a").html(n.get("cookie-banner", "COOKIES")), this;
    },
  });
});
