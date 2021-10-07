define(["require", "backbone", "underscore", "jquery"], function (e) {
  var n = e("backbone"),
    i = e("underscore");
  e("jquery");
  return n.View.extend({
    className: "spinner-popup spinner",
    module: "app/views/main/popup/SpinnerPopup",
    initialize: function () {
      i.bindAll(this, "render");
    },
    open: function () {
      this.$el.removeClass("hidden");
    },
    render: function () {
      return this;
    },
  });
});
