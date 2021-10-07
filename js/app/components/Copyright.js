define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "lib/text!tpl/copyright.html",
  "app/util/Util",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    n = t("app/models/Model"),
    a = (t("app/events/KEvent"), t("lib/text!tpl/copyright.html")),
    l = (t("app/util/Util"), null);
  return e.View.extend({
    initialize: function () {
      (this.data = n.getInstance()),
        this.data.conf("hideCopyright") || ((l = i.template(a)), this.render());
    },
    render: function () {
      this.$el.append(
        l({
          year: this.data.conf("year"),
          title: this.data.conf("copyright"),
          url: this.data.conf("copyrightUrl"),
        })
      );
    },
  });
});
