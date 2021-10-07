
    $("#home-btn").click(function () {
        $("#views").removeClass();
        $("#views").addClass("menu-view");
      });
      $(".reset-view").click(function () {
        $("#views").removeClass();
        $("#views").addClass("reset-view");
        $("#reset-view").load(
          "https://raw.githubusercontent.com/bajricharun/docs-for-doors/main/reset.view.html"
        );
      });
      $(".search-model").click(function () {
        $("#views").removeClass();
        $("#views").addClass("search-model-view");
        $('#search-model-view').load(
          "https://raw.githubusercontent.com/bajricharun/docs-for-doors/main/search-model.view.html"
        )
      });
      $(".bauform").click(function () {
        $("#views").removeClass();
        $("#views").addClass("bauform-view");
        $('#bauform-view').load(
          "https://raw.githubusercontent.com/bajricharun/docs-for-doors/main/bauform.view.html"
        )
      });
      
      function switchViewInside() {
        if ($("#switcher-btn").hasClass("inside-wall")) {
          $("#switcher-btn").removeClass("inside-wall");
          $("#switcher-btn").addClass("outside-wall");
          $(".grid").empty();
          $(".grid").load(
            "https://raw.githubusercontent.com/bajricharun/task/main/test1.txt"
          );
        }
      }
      function switchViewOutside() {
        if ($("#switcher-btn").hasClass("outside-wall")) {
          $("#switcher-btn").removeClass("outside-wall");
          $("#switcher-btn").addClass("inside-wall");
          $(".grid").empty();
          $(".grid").load(
            "https://raw.githubusercontent.com/bajricharun/task/main/test.txt"
          );
        }
      }
      function functionClick() {
        if ($("#konfigurator").hasClass("opened")) {
          $("#konfigurator").removeClass("opened");
        } else {
          $("#konfigurator").addClass("opened");
        }
      }