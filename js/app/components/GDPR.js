define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Labels",
  "app/util/Util",
], function (e) {
  var t = e("backbone"),
    a = e("underscore"),
    n = e("app/models/Model"),
    i = (e("app/events/KEvent"), e("app/util/Labels")),
    p = e("app/util/Util");
  return t.View.extend({
    events: { "click a": "onClick" },
    initialize: function () {
      a.bindAll(this, "onClick", "render"),
        this.$el.removeClass("hidden"),
        this.render();
    },
    onClick: function () {
      this.data = n.getInstance();
      var e = this.data.conf("contactData"),
        t = {
          module: "app/views/main/popup/GDPR",
          title: i.get("gdpr", "LINK"),
          template: "DATA_PROTECTION_POPUP",
          templateData: {
            company: e.companyName,
            address: e.address,
            postOffice: e.postOffice,
            url: e.appUrl,
          },
          destroyable: !0,
          class: "large",
        };
      p.openPopup(t);
    },
    render: function () {
      return this.$("a").html(i.get("gdpr", "LINK")), this;
    },
  });
});
