/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

//Copyright     = require("app/components/Copyright"),

/*this.$el.append("<div class='footer-container'><div class='ui-copyright'></div></div>")
                new Copyright(this.$(".footer-container .ui-copyright"));*/

define("app/profile/prod2", {
  host: "",
  getHost: function () {
    return this.host;
  },
  setHost: function (e) {
    this.host = e;
  },
  isDevMode: function () {
    return !1;
  },
}),
  define(
    "app/events/KEvent",
    ["require", "underscore", "backbone"],
    function (e) {
      var t = e("underscore"),
        i = e("backbone");
      return t.extend(
        {
          CONFIGURATION: "configuration-done",
          MENU_CHANGE_EVENT: "menu-change-event",
          MENU_PRECHANGE_EVENT: "menu-prechange-event",
          DOOR_VIEW_CHANGE: "door_view_change",
          HOUSE_COLOR_CHANGE: "house_color_change",
          DOOR_DATA_RESPONSE: "door_data_response",
          DIN_CHANGE: "din_change",
          OPENING_CHANGE: "opening_change",
          BAUFORM: "bauform",
          BAUFORM_CHANGE: "bauform_change",
          THUMBNAILS: "thumbnails",
          THUMBNAILS_SEARCH: "thumbnails_search",
          THUMBNAILS_VARIATIONS: "thumbnails_variations",
          HOUSE_COLOR_EVENT: "house_color_event",
          SERIES_EVENT: "series_event",
          COLOR_DATA_RESPONSE: "color_data_response",
          COLOR_CHANGE: "color_change",
          WOOD_ROTATION_CHANGE: "wood_rotation_change",
          MODEL_CHANGE_EVENT: "model_change_event",
          MENU_DATA: "menu_data_event",
          ORNAMENT_GROUP_DATA: "ornament_group_event",
          ORNAMENT_GLASS_DATA: "ornament_glass_data_event",
          ORNAMENT_CHANGE: "ornament_change",
          MOTIVE_GLASS_DATA: "motive_glass_data",
          SIDE_GLASS_DATA: "side_glass_data",
          GLASS_PART_CHANGE: "glass_part_change_event",
          GLASS_TYPE_CHANGE: "glass_type_change_event",
          PRODUCT_PART_CHANGE: "product_part_change_event",
          MOTIVE_CHANGE: "motive_change_event",
          EQUIPMENT_DATA: "equipment_data",
          EQUIPMENT_LIST_DATA: "equipment_list_data",
          EQUIPMENT_GROUP_DATA: "equipment_group_data",
          EQUIPMENT_CHANGE: "equipment_change",
          DOOR_IMAGE_LOAD: "door_image_load",
          DOOR_IMAGE_DONE: "door_image_done",
          DOOR_IMAGE_ERROR: "door_image_error",
          DESTROY_COMPONENT: "destroy_component_event",
          UPDATE_COMPONENT: "update_component",
          DIMENSION_CHANGE: "dimension_change",
          PANEL_CLOSE: "panel_close_event",
          PANEL_OPEN: "panel_open_event",
          FULL_DIMENSION_CHANGE: "full_dimension_change",
          FIND_BB_MODEL: "find_bb_model",
          BB_MODEL_FOUND: "bb_model_found",
          INIT_DONE: "init_done",
          SIDE_REPEAT_CHANGE: "side_repeat_change",
          INNER_WING_CHANGE: "inner_wing_change",
          WINDOW_RESIZE_EVENT: "window_resize_event",
          SWIPE_TO_MENU: "swipe_to_menu",
          MATERIAL_CHANGE: "material_change",
          PROFILE_CHANGE: "profile_change",
          LEAFLET_EDIT: "leaflet_edit",
          SKELETON_RESET: "skeleton_reset",
          LEAFLET_REQUEST_DOOR: "leaflet_request_door",
          HOUSE_IMAGES_DATA: "house_images_data",
          HOUSE_IMAGE_CHANGE: "house_image_change",
          OPEN_POPUP: "open_popup_event",
          CLOSE_POPUP: "close_popup_event",
          CONFIRM_ACTION: "confirm_action_event",
          MODULE_LOADING: "module_loading",
          MAIN_VIEW_LOADING: "main_view_loading",
          SLIDER_DRAGGING: "slider_dragging",
          SIDE_MODEL_DATA: "side_model_data",
          SIDE_MODEL_CHANGE: "side_model_change",
          UPLOAD_SUCCESS: "upload_success",
          THUMBNAIL_CREATE_DONE: "thumbnail_create_done",
          SEND_INQUIRY_DONE: "send_inquiry_done",
          THUMBNAILS_INSIDE_DATA: "thumbnails_inside_data",
          INSIDE_MODEL_CHANGE: "inside_model_change",
          KEYBOARD_ON: "keyboard_on",
          KEYBOARD_OFF: "keyboard_off",
          SHORTCUT_BACK: "shortcut_back",
          SHORTCUT_NEXT: "shortcut_next",
          PRINT_DONE: "print_done",
          GARAGE_DOOR_DATA: "garage_door_data",
          GARAGE_DOOR_CHANGE: "garage_door_change",
          GARAGE_DOOR_WIDTH: "garage_door_width",
          FORM_FIELDS_DATA: "form_fields_data",
          EQUIPMENT_VIEW_CHANGE: "equipment_view_change",
          SHOW_SWITCHER_REMARK: "show_switcher_remark",
          SWITCH_OUTSIDE: "switch_outside",
          SWITCH_INSIDE: "switch_inside",
          INSIDE_MODEL_DATA: "inside_model_data",
          ALL_MATERIALS_DATA: "all_materials_data",
          BLIND_PROFILE_CHANGE: "blind_profile_change",
          CUSTOM_RENDER_CHANGE: "custom_render_change",
          GLAZING_CHANGE: "glazing_change",
          GLASS_OPTION_CHANGE: "glass_option_change",
          NEW_REFERENCE: "reference_new",
          REFERENCE_LOADED: "reference_loaded",
          PACKAGES_DATA: "packages_data",
          PACKAGE_CHANGE: "package_change",
          LOGIN: "login",
          ENTER_LOGIN: "enter_login",
          PRICE: "price",
          PRICE_LOADING: "price_loading",
          PRICE_OPTIONS_VALID: "price_options_valid",
          USER_SETTINGS: "user_settings",
          USER_SETTINGS_UPDATE: "user_settings_update",
          USER_DISCOUNT_UPDATE: "user_discount_update",
          SEND_ORDER_DONE: "send_order_done",
          RESET_CONFIGURATION: "reset_configuration",
          GET_MENU_LIST: "get_menu_list",
          MENU_LIST: "menu_list",
          LABEL: "label",
          TEMPLATE: "template",
          ITEM_DATA: "item_data",
          ITEM_CHANGE: "item_change",
          HOUSE_ZOOM_IN: "house_zoom_in",
          HOUSE_ZOOM_OUT: "house_zoom_out",
          HOUSE_DOOR_DONE: "house_door_done",
          HOUSE_DOOR_LOADED: "house_door_loaded",
          HOUSE_COOR_UPDATE: "house_coor_update",
          HOUSE_DOOR_RESET: "house_door_reset",
          GET_HOUSE_DOOR_B64: "get_house_door_b64",
          HOUSE_CANVAS_RESIZE_DONE: "house_canvas_resize_done",
          HOUSE_DOOR_B64_DONE: "house_door_b64_done",
          HOUSE_SAVE_URL: "house_save_url",
          UPDATE_HOUSE_DOOR_IMAGE: "update_house_door_image",
          HOUSE_SAVE_DONE: "house_save_done",
          REGISTER_USER: "register_user",
          REGISTER_USER_DONE: "register_user_done",
          LIST_USERS_DONE: "list_users_done",
          AUTOLOGIN_ERROR: "autologin_error",
          DELETE_DONE: "delete_done",
          CREATE_DISCOUNT_DONE: "create_discount_done",
          DISCOUNT_SYSTEMS: "discount_systems",
          USER_UPDATE_DONE: "user_update_done",
          PANEL_VIEW_LOADED: "panel_view_loaded",
          REGISTER_USER_ERROR: "register_user_error",
          EDIT_USER_VALID: "edit_user_valid",
          OPEN_ACTION_MENU: "open_action_menu",
          CLOSE_ACTION_MENU: "close_action_menu",
          RESIZE_ACTION_MENU: "resize_action_menu",
          CREATE_DOCUMENT_DONE: "create_document_done",
          LIST_BILLS_DONE: "list_bills_done",
          COOKIES_ALLOWED: "cookies_allowed",
        },
        i.Events
      );
    }
  ),
  define(
    "app/util/Util",
    ["require", "underscore", "jquery", "app/profile", "app/events/KEvent"],
    function (require) {
      var _ = require("underscore"),
        $ = require("jquery"),
        Profile = require("app/profile"),
        KEvent = require("app/events/KEvent"),
        appUrl = null,
        getScript = function () {
          var e = null;
          return (
            _.each(
              $("script[src*=require]"),
              function (t) {
                return (e = t.src), !1;
              },
              this
            ),
            e
          );
        },
        getDec = function (h) {
          return "A" == h
            ? 10
            : "B" == h
            ? 11
            : "C" == h
            ? 12
            : "D" == h
            ? 13
            : "E" == h
            ? 14
            : "F" == h
            ? 15
            : eval(h);
        };
      return {
        getParam: function (e) {
          var t = getScript();
          e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var i = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            o = i.exec(t);
          return null == o
            ? null
            : decodeURIComponent(o[1].replace(/\+/g, " "));
        },
        log: function (e, t) {
          Profile.isDevMode() && e && (t ? console.log(e, t) : console.log(e));
        },
        debug: function (e, t) {
          Profile.isDevMode() &&
            e &&
            (t ? console.debug(e, t) : console.debug(e));
        },
        error: function (e, t) {
          Profile.isDevMode() &&
            e &&
            (t ? console.error(e, t) : console.error(e));
        },
        logGroup: function (e, t) {
          Profile.isDevMode() &&
            e &&
            e &&
            (this.group(e),
            _.mapObject(
              t,
              function (e, t) {
                this.log(t, e);
              },
              this
            ),
            this.endGroup());
        },
        group: function (e) {
          try {
            Profile.isDevMode() && e && console.group(e);
          } catch (e) {}
        },
        endGroup: function () {
          try {
            Profile.isDevMode() && console.groupEnd();
          } catch (e) {}
        },
        getImageUrl: function (e) {
          return e ? "images/" + e : null;
        },
        addCss: function (e) {
          e && $("head").append("<link rel=stylesheet href=" + e + " />");
        },
        quote: function (e) {
          return "'" + e + "'";
        },
        hex2Rgb: function (t) {
          return (
            (t = t.toUpperCase()),
            "#" == t.substring(0, 1)
              ? (t = t.substr(1))
              : "0X" == t.substring(0, 2) && (t = t.substring(2)),
            (a = getDec(t.substring(0, 1))),
            (b = getDec(t.substring(1, 2))),
            (c = getDec(t.substring(2, 3))),
            (d = getDec(t.substring(3, 4))),
            (e = getDec(t.substring(4, 5))),
            (f = getDec(t.substring(5, 6))),
            (r = 16 * a + b),
            (g = 16 * c + d),
            (b = 16 * e + f),
            {
              r: r,
              g: g,
              b: b,
              toString: function (e) {
                return e
                  ? "rgba(" + r + "," + g + "," + b + "," + e + ")"
                  : "rgb(" + r + "," + g + "," + b + ")";
              },
            }
          );
        },
        getServerNameWithPort: function (e) {
          var t = e.indexOf("/") + 2,
            i = e.indexOf("/", t);
          return -1 == i ? e.substring(t) : e.substring(t, i);
        },
        getAppUrl: function () {
          if (appUrl) return appUrl;
          var e = this.getServerNameWithPort(window.location.href),
            t = e.split(".");
          return (
            2 === t.length
              ? (appUrl = "//app." + e)
              : 3 === t.length && (appUrl = "//app." + t[1] + "." + t[2]),
            appUrl
          );
        },
        isFramed: function () {
          try {
            return (
              !Profile.isDevMode() &&
              !Profile.demo &&
              window.self !== window.top
            );
          } catch (e) {
            return !0;
          }
        },
        globalFix: function () {
          $("body").on("touchmove", function (e) {
            e.preventDefault();
          }),
            $(window).on("orientationchange", function (e) {
              $(".scrolling").toggleClass("scroll-fix");
            });
        },
        fixScrolling: function (e, t) {
          (t && 0 == t.isIos()) ||
            (e.on("touchmove", function (e) {
              if (
                $(e.currentTarget).outerHeight() + 2 >
                  $(e.currentTarget)[0].scrollHeight &&
                $(e.currentTarget).outerWidth() >
                  $(e.currentTarget)[0].scrollWidth
              );
              else {
                var t = $("#panel");
                if (t.length) {
                  var i = window.getComputedStyle(t.get(0));
                  0 === new WebKitCSSMatrix(i.webkitTransform).m41 &&
                    e.stopPropagation();
                } else e.stopPropagation();
              }
            }),
            e.on("scroll", function (e) {
              $div = $(this);
              var t = $div.scrollTop(),
                i = $div.outerHeight(),
                o = $div[0].scrollHeight;
              i + 2 > o ||
                (0 == t
                  ? $div.scrollTop(1)
                  : t == o - i && $div.scrollTop(o - i - 1));
            }));
        },
        removeListeners: function (e, t) {
          (t && 0 == t.isIos()) || e.off();
        },
        preventRightClick: function () {
          Profile.isDevMode() ||
            $(document).on("contextmenu", function (e) {
              $(e.target).hasClass("is-selectable") || e.preventDefault();
            });
        },
        getUrlVars: function () {
          var e = {};
          return (
            window.location.href.replace(
              /[?&]+([^=&]+)=([^&]*)/gi,
              function (t, i, o) {
                e[i] = decodeURIComponent(o);
              }
            ),
            e
          );
        },
        getInch: function (e) {
          return (e / 25.4).toFixed(2);
        },
        decimalPlaces: function (e) {
          var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        },
        round: function (e, t) {
          var i = Math.pow(10, t || 0);
          return Math.round(e * i) / i;
        },
        getArrayValueSum: function (e) {
          return _.reduce(
            e,
            function (e, t) {
              return e + t;
            },
            0
          );
        },
        validateEmail: function (e) {
          return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e
          );
        },
        validatePassword: function (e) {
          return /^[a-zA-Z0-9!@#$%^&*_]{8,16}$/g.test(e);
        },
        setCookie: function (e, t, i, o) {
          var s = new Date();
          s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3);
          var n = "expires=" + s.toUTCString();
          document.cookie = e + "=" + t + "; " + n + "; path=" + (o || "/");
        },
        getCookie: function (e) {
          for (
            var t = e + "=", i = document.cookie.split(";"), o = 0;
            o < i.length;
            o++
          ) {
            for (var s = i[o]; " " == s.charAt(0); ) s = s.substring(1);
            if (0 == s.indexOf(t)) return s.substring(t.length, s.length);
          }
          return "";
        },
        deleteCookie: function (e) {
          this.getCookie(e) &&
            (document.cookie = e + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        },
        checkCookie: function (e) {
          return "" != this.getCookie(e);
        },
        urlBuilder: function (e, t) {
          var i = e;
          i += "?";
          for (var o in t) {
            var s = t[o];
            null != s &&
              (Array.isArray(s)
                ? _.each(
                    s,
                    function (e) {
                      i = this._addParameterToUrl(i, o, e);
                    },
                    this
                  )
                : (i = this._addParameterToUrl(i, o, s)));
          }
          return i;
        },
        _addParameterToUrl: function (e, t, i) {
          return e.match(/\?$/)
            ? e + t + "=" + encodeURIComponent(i)
            : e + "&" + t + "=" + encodeURIComponent(i);
        },
        getTimestamp: function () {
          return new Date().getTime();
        },
        getProtocol: function () {
          return window.location.href.match(/^https?/i);
        },
        template: function (e, t, i) {
          if (!e) return null;
          var o = { interpolate: /\$\{(.+?)\}/g };
          return i && (o.variable = i), _.template(e, o)(t);
        },
        openPopup: function (e) {
          var t = {
            module: "app/views/main/popup/MessageDialog",
            template: null,
            class: "small200 invalid-hinge fixed",
            title: null,
          };
          KEvent.trigger(KEvent.OPEN_POPUP, _.extend(t, e)),
            KEvent.trigger(KEvent.KEYBOARD_ON, {
              uniqueKey: "ESC_POPUP",
              keyCode: 27,
              triggerEvent: "CLOSE_POPUP",
              destroyable: !0,
            });
        },
        closePopup: function (e) {
          e
            ? KEvent.trigger(KEvent.CLOSE_POPUP, { module: e })
            : KEvent.trigger(KEvent.CLOSE_POPUP),
            KEvent.trigger(KEvent.KEYBOARD_OFF, "ESC_INQUIRY");
        },
      };
    }
  ),
  (function () {
    var e = !1,
      t = /xyz/.test(function () {
        xyz;
      })
        ? /\b_super\b/
        : /.*/;
    (this.Class = function () {}),
      (Class.extend = function (i) {
        function o() {
          !e && this.init && this.init.apply(this, arguments);
        }
        var s = this.prototype;
        e = !0;
        var n = new this();
        e = !1;
        for (var d in i)
          n[d] =
            "function" == typeof i[d] &&
            "function" == typeof s[d] &&
            t.test(i[d])
              ? (function (e, t) {
                  return function () {
                    var i = this._super;
                    this._super = s[e];
                    var o = t.apply(this, arguments);
                    return (this._super = i), o;
                  };
                })(d, i[d])
              : i[d];
        return (
          (o.prototype = n),
          (o.prototype.constructor = o),
          (o.extend = arguments.callee),
          o
        );
      });
  })(),
  define(
    "class",
    (function (e) {
      return function () {
        return e.Class;
      };
    })(this)
  ),
  define(
    "app/models/Configuration",
    [
      "require",
      "exports",
      "module",
      "backbone",
      "underscore",
      "app/util/Util",
      "app/profile",
      "app/events/KEvent",
      "cryptojs.base64",
      "cryptojs.utf",
    ],
    function (e, t, i) {
      var o = e("backbone"),
        s = (e("underscore"), e("app/util/Util"));
      e("app/profile"),
        e("app/events/KEvent"),
        e("cryptojs.base64"),
        e("cryptojs.utf");
      return o.Model.extend({
        defaults: { partnerKey: null, lang: null },
        initialize: function () {
          var e = window.location.href;
          this.serverName = s.getServerNameWithPort(e);
        },
      });
    }
  ),
  define(
    "app/models/PriceData",
    ["require", "backbone", "underscore", "class", "app/util/Util"],
    function (e) {
      var t = (e("backbone"), e("underscore")),
        i = e("class");
      e("app/util/Util");
      return i.extend({
        init: function (e) {
          t.extend(this, e);
        },
        getDoorNetPriceFriendly: function () {
          return this.getPriceUnit().toUpperCase(), this.doorNetPriceFriendly;
        },
        getNetPriceFriendly: function () {
          return this.getPriceUnit().toUpperCase(), this.netPriceFriendly;
        },
        getGrossPriceFriendly: function () {
          return this.getPriceUnit().toUpperCase(), this.grossPriceFriendly;
        },
        getPriceUnit: function () {
          return this.priceUnit;
        },
        getVatFriendly: function () {
          return this.getPriceUnit().toUpperCase(), this.vatFriendly;
        },
        getVatRate: function () {
          return this.vatRate;
        },
      });
    }
  ),
  define(
    "app/models/Remote",
    [
      "require",
      "backbone",
      "underscore",
      "jquery",
      "app/events/KEvent",
      "class",
      "app/profile",
      "json2",
      "xdomainrequest",
      "app/util/Util",
    ],
    function (e) {
      var t = (e("backbone"), e("underscore")),
        i = e("jquery"),
        o = e("app/events/KEvent"),
        s = e("class"),
        n = e("app/profile"),
        d = (e("json2"), e("xdomainrequest"), e("app/util/Util")),
        r = null,
        l = s.extend({
          init: function (e) {
            this.model = e;
          },
          getPartnerKey: function () {
            return this.model.conf("partnerKey");
          },
          _auth: function (e) {
            if (!e) return null;
            var t = this.model.isLoginFirst(),
              i = this.model.isAutoLogin(),
              o =
                (t || i) && this.model.userData && this.model.userData.password
                  ? this.model.userData.password
                  : this.model.h;
            e.t = new Date().getTime();
            var s = JSON.stringify(e),
              n = CryptoJS.HmacSHA256(s, o),
              d = CryptoJS.enc.Utf8.parse(s);
            return n + "." + CryptoJS.enc.Base64.stringify(d);
          },
          getBauform: function (e, t) {
            if (!this.bauformLoading) {
              this.bauformLoading = !0;
              var i = this,
                o = {
                  model: this.model.cdd.doorModel,
                  profile: this.model.cdd.getProfile(),
                  frameType: this.model.cdd.getFrameType(),
                  category: this.model.dd("category"),
                  customRenderType:
                    null != this.model.cdd.getCustomRenderType()
                      ? this.model.cdd.getCustomRenderType()
                      : null,
                };
              this._createPOSTPromise(o, "door/bauform")
                .done(function (o) {
                  (i.bauformLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.bauformLoading = !1;
                });
            }
          },
          getDoor: function (e, t, i) {
            if (!this.doorDataLoading) {
              this.doorDataLoading = !0;
              var o = this,
                s =
                  this.model.conf("retainProfileSelection") &&
                  this.model.cdd.getProfile(),
                n = {
                  model: e,
                  profile: s ? this.model.cdd.getProfile() : null,
                  resetProfile: s ? this.model.cdd.getResetProfile() : null,
                };
              this._createGETPromise(n, "door/data")
                .done(function (e) {
                  (o.doorDataLoading = !1), t.apply(i || null, [e]);
                })
                .error(function () {
                  o.doorDataLoading = !0;
                });
            }
          },
          getAllThumbnails: function (e, t) {
            if (!this.allThumbnailsLoading) {
              this.allThumbnailsLoading = !0;
              var i = this;
              this._createGETPromise(null, "door/thumbnail")
                .done(function (o) {
                  (i.allThumbnailsLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.allThumbnailsLoading = !1;
                });
            }
          },
          getThumbnails: function (e, t, i, o) {
            if (!this.ThumbnailsLoading) {
              var s = this,
                n = { category: t },
                d = "door/thumbnail/" + encodeURIComponent(e);
              t && (d += "/" + encodeURIComponent(t)),
                this._createGETPromise(n, d)
                  .done(function (n) {
                    (s.ThumbnailsLoading = !1), i.apply(o || null, [n, e, t]);
                  })
                  .error(function () {
                    s.ThumbnailsLoading = !1;
                  });
            }
          },
          getThumbnailsInside: function (e, t) {
            if (!this.thumbnailsInsideLoading) {
              this.thumbnailsInsideLoading = !0;
              var i = this;
              this._createGETPromise(
                { model: this.model.cdd.doorModel },
                "door/thumbnailInside"
              )
                .done(function (o) {
                  (i.thumbnailsInsideLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.thumbnailsInsideLoading = !1;
                });
            }
          },
          getThumbnailSearch: function (e, t, i) {
            if (!this.thumbnailSearchLoading) {
              this.thumbnailSearchLoading = !0;
              var o = this;
              this._createGETPromise({ searchTerm: e }, "door/thumbnailSearch")
                .done(function (e) {
                  (o.thumbnailSearchLoading = !1), t.apply(i || null, [e]);
                })
                .error(function () {
                  o.thumbnailSearchLoading = !1;
                });
            }
          },
          getOutsideVariationsThumbnail: function (e, t, i) {
            if (!this.vartiationsThumbnailsLoading) {
              this.vartiationsThumbnailsLoading = !0;
              var o = this;
              this._createGETPromise(
                { m: e },
                "door/outsideVariationsThumbnail"
              )
                .done(function (e) {
                  (o.vartiationsThumbnailsLoading = !1),
                    t.apply(i || null, [e]);
                })
                .error(function () {
                  o.vartiationsThumbnailsLoading = !1;
                });
            }
          },
          getSeries: function (e, t) {
            if (!this.seriesLoading) {
              this.seriesLoading = !0;
              var i = this;
              this._createGETPromise(null, "door/series")
                .done(function (o) {
                  (i.seriesLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.seriesLoading = !1;
                });
            }
          },
          getColorsByElement: function (e, t) {
            if (!this.colorsByElementLoading) {
              this.colorsByElementLoading = !0;
              var i = this,
                o = {
                  model: this.model.cdd.doorModel,
                  side: this.model.wallState.match(/^outside/i)
                    ? "outside"
                    : "inside",
                  profile: this.model.cdd.getProfile(),
                };
              this._createGETPromise(
                o,
                "door/color/v1/" +
                  encodeURIComponent(this.model.cdd.getProductPart()) +
                  "/" +
                  encodeURIComponent(this.model.cdd.getMaterial())
              )
                .done(function (o) {
                  (i.colorsByElementLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.colorsByElementLoading = !1;
                });
            }
          },
          checkColor: function (e, t, i) {
            if (!this.isCheckColorLoading) {
              this.isCheckColorLoading = !0;
              var o = this,
                s = {
                  model: this.model.cdd.doorModel,
                  parts: e,
                  material: this.model.cdd.getMaterial(),
                };
              this._createPOSTPromise(s, "door/checkColor")
                .done(function (e) {
                  (o.isCheckColorLoading = !1), t.apply(i || null, [e]);
                })
                .error(function () {
                  o.isCheckColorLoading = !1;
                });
            }
          },
          isColorAvailable: function (e, t, i, o) {
            if (!this.isColorAvailableLoading) {
              this.isColorAvailableLoading = !0;
              var s = this,
                n = {
                  model: this.model.cdd.doorModel,
                  p: this.model.cdd.getProfile(),
                },
                d =
                  "door/colorAvailable/" +
                  encodeURIComponent(e) +
                  "/" +
                  encodeURIComponent(this.model.cdd.getMaterial()) +
                  "/" +
                  encodeURIComponent(t);
              this._createGETPromise(n, d)
                .done(function (e) {
                  (s.isColorAvailableLoading = !1), i.apply(o || null, [e]);
                })
                .error(function () {
                  s.isColorAvailableLoading = !1;
                });
            }
          },
          getHasLayerColor: function (e, t, i, o) {
            if (!this.hasLayerColorLoading) {
              this.hasLayerColorLoading = !0;
              var s = this;
              this.isColorAvailable(
                e.part,
                t.get("code"),
                function (t) {
                  (s.hasLayerColorLoading = !1),
                    t && i.apply(o || null, [t, e]);
                },
                o
              );
            }
          },
          getHouseColors: function (e, t) {
            if (!this.houseColorLoading) {
              this.houseColorLoading = !0;
              var i = this;
              this._createGETPromise(null, "door/houseColor")
                .done(function (o) {
                  (i.houseColorLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.houseColorLoading = !1;
                });
            }
          },
          getHouseImages: function (e, t) {
            if (!this.houseImageLoading) {
              var i = this;
              (this.houseImageLoading = !0),
                this._createGETPromise(null, "door/houseImages")
                  .done(function (o) {
                    (i.houseImageLoading = !1), e.apply(t || null, [o]);
                  })
                  .error(function () {
                    i.houseImageLoading = !1;
                  });
            }
          },
          getFormFields: function (e) {
            return this._createGETPromise({ ft: e }, "door/formField");
          },
          getMenu: function (e, t, i) {
            if (!this.menuLoading) {
              this.menuLoading = !0;
              var o = this;
              this._createGETPromise({ code: e }, "door/menu")
                .done(function (s) {
                  (o.menuLoading = !1), t.apply(i || null, [s, e]);
                })
                .error(function () {
                  o.menuLoading = !1;
                });
            }
          },
          getOrnamentGroup: function (e, t) {
            if (!this.ornamentGroupLoading) {
              this.ornamentGroupLoading = !0;
              var i = this;
              this._createGETPromise(null, "door/ornamentGroup")
                .done(function (o) {
                  (i.ornamentGroupLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.ornamentGroupLoading = !1;
                });
            }
          },
          getOrnamentGlass: function (e, t, i) {
            if (!this.ornamentGlassLoading) {
              this.ornamentGlassLoading = !0;
              var o = this;
              this._createGETPromise(
                {
                  model: this.model.cdd.doorModel,
                  glassPart: this.model.cdd.glassPart,
                },
                "door/ornamentGlass/" + encodeURIComponent(e)
              )
                .done(function (e) {
                  (o.ornamentGlassLoading = !1), t.apply(i || null, [e]);
                })
                .error(function () {
                  o.ornamentGlassLoading = !1;
                });
            }
          },
          getMotiveGlass: function (e, t) {
            if (!this.motiveGlassLoading) {
              this.motiveGlassLoading = !0;
              var i = this;
              this._createGETPromise(
                { model: this.model.dd("model") },
                "door/motiveGlass"
              )
                .done(function (o) {
                  (i.motiveGlassLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.motiveGlassLoading = !1;
                });
            }
          },
          getSideGlass: function (e, t, i) {
            if (!this.sideGlassLoading) {
              this.sideGlassLoading = !0;
              var o = this,
                s = {
                  model: this.model.dd("model"),
                  sideModel:
                    this.model.cdd.sideModel && "up" !== e
                      ? this.model.cdd.sideModel
                      : null,
                  type: e,
                };
              this._createGETPromise(s, "door/sideMotiveGlass")
                .done(function (s) {
                  (o.sideGlassLoading = !1), t.apply(i || null, [s, e]);
                })
                .error(function () {
                  o.sideGlassLoading = !1;
                });
            }
          },
          getSideModels: function () {
            if (!this.sideModelsLoading) {
              var e = this;
              return (
                (e.sideModelsLoading = !0),
                this._createGETPromise(
                  { model: this.model.dd("model") },
                  "door/sideModels"
                )
                  .done(function () {
                    e.sideModelsLoading = !1;
                  })
                  .error(function () {
                    e.sideModelsLoading = !1;
                  })
              );
            }
          },
          getEquipment: function (e, t, i) {
            if (!this.equipmentLoading) {
              this.equipmentLoading = !0;
              var o = this,
                s = {
                  model: this.model.dd("model"),
                  profil: this.model.cdd.getProfile(),
                  type: e,
                  package: this.model.cdd.getPackage(),
                };
              this._createGETPromise(s, "door/equipment")
                .done(function (s) {
                  (o.equipmentLoading = !1), t.apply(i || null, [s, e]);
                })
                .error(function () {
                  o.equipmentLoading = !1;
                });
            }
          },
          getEquipmentList: function (e, t, i, o) {
            if (!this.equipmentListLoading) {
              this.equipmentListLoading = !0;
              var s = this,
                n = { equipmentTypes: e },
                d = {
                  model: this.model.dd("model"),
                  package: this.model.cdd.getPackage(),
                };
              this._createPOSTPromise(n, "door/equipmentList", d)
                .done(function (e) {
                  (s.equipmentListLoading = !1), i.apply(o || null, [e, t]);
                })
                .error(function () {
                  s.equipmentListLoading = !1;
                });
            }
          },
          getGarageDoors: function (e, t) {
            if (!this.garageDoorLoading) {
              this.garageDoorLoading = !0;
              var i = this;
              this._createGETPromise(
                { model: this.model.dd("model") },
                "door/garageDoors"
              )
                .done(function (o) {
                  (i.garageDoorLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.garageDoorLoading = !1;
                });
            }
          },
          getEquipmentGroup: function (e, t, i) {
            if (!this.equipmentGroupLoading) {
              this.equipmentGroupLoading = !0;
              var o = this,
                s = {
                  model: this.model.dd("model"),
                  type: e,
                  profil: this.model.cdd.getProfile(),
                  package: this.model.cdd.getPackage(),
                };
              this._createGETPromise(s, "door/equipmentGroup")
                .done(function (s) {
                  (o.equipmentGroupLoading = !1), t.apply(i || null, [s, e]);
                })
                .error(function () {
                  o.equipmentGroupLoading = !1;
                });
            }
          },
          getInsideDoorData: function (e, t) {
            if (!this.insideDoorDataLoading) {
              this.insideDoorDataLoading = !0;
              var i = this,
                o = {
                  model: this.model.dd("model"),
                  insideModel: this.model.cdd.getInsideModel(),
                };
              this._createGETPromise(o, "door/insideData")
                .done(function (o) {
                  (i.insideDoorDataLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.insideDoorDataLoading = !1;
                });
            }
          },
          getAllMaterials: function (e, t) {
            if (!this.allMaterialsLoading) {
              this.allMaterialsLoading = !0;
              var i = this;
              this._createGETPromise(null, "door/allMaterials")
                .done(function (o) {
                  (i.allMaterialsLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  i.allMaterialsLoading = !1;
                });
            }
          },
          getPackages: function (e, t) {
            if (!this.packagesLoading) {
              this.packagesLoading = !0;
              var i = this,
                o = {
                  category: this.model.dd("category"),
                  serie: this.model.dd("serie"),
                };
              this._createGETPromise(
                o,
                "door/packageList/" + encodeURIComponent(this.model.dd("model"))
              )
                .done(function (o) {
                  (i.packagesLoading = !1), e.apply(t || null, [o]);
                })
                .error(function () {
                  e.apply(t || null, [null]), (i.packagesLoading = !1);
                });
            }
          },
          createThumbnail: function (e, t, i) {
            this._createGETPromise(
              e ? { category: e } : null,
              "thumbnail"
            ).done(function (e) {
              t.apply(i || null, [e]);
            });
          },
          createThumbnailList: function (e, t, i) {
            this._createPOSTPromise({ itemList: e }, "thumbnail/list").done(
              function (e) {
                t.apply(i || null, [e]);
              }
            );
          },
          getB64Image: function (e, t, o) {
            i.ajax(e, {
              contentType: "application/json",
              dataType: "jsonp",
              context: this,
              success: function (e) {
                t.apply(o || null, [e]);
              },
            });
          },
          sendInquiry: function (e, t, i) {
            if (!this.inquiryLoading && e) {
              this.inquiryLoading = !0;
              var o = this;
              (e.k = this.getPartnerKey()),
                (e = this.setReportName(e)),
                (e.usr = this.model.loggedInUser()),
                this._createPOSTPromise(e, "door/inquiry")
                  .done(function (e) {
                    (o.inquiryLoading = !1), t.apply(i || null, [e]);
                  })
                  .error(function () {
                    o.inquiryLoading = !1;
                  });
            }
          },
          sendOrder: function (e, t, i) {
            if (!this.orderLoading && e) {
              this.orderLoading = !0;
              var o = this;
              (e.k = this.getPartnerKey()),
                (e = this.setReportName(e)),
                (e.usr = this.model.loggedInUser()),
                this._createPOSTPromise(e, "door/order")
                  .done(function (e) {
                    (o.orderLoading = !1), t.apply(i || null, [e]);
                  })
                  .error(function () {
                    o.orderLoading = !1;
                  });
            }
          },
          print: function (e, t, i) {
            if (!this.printLoading && e) {
              this.printLoading = !0;
              var o = this;
              (e.k = this.getPartnerKey()),
                (e = this.setReportName(e)),
                (e.usr = this.model.loggedInUser()),
                this._createPOSTPromise(e, "door/print")
                  .done(function (e) {
                    (o.printLoading = !1), t.apply(i || null, [e]);
                  })
                  .error(function () {
                    o.printLoading = !1;
                  });
            }
          },
          printConfiguration: function (e) {
            return (
              (e.k = this.getPartnerKey()),
              (e.usr = this.model.loggedInUser()),
              (e = this.setReportName(e)),
              this._createPOSTPromise(e, "reference/printConfiguration")
            );
          },
          saveImage: function (e, t, i, o) {
            if (!this.saveImageLoading) {
              this.saveImageLoading = !0;
              var s = this;
              this._createPOSTPromise(
                e.image,
                "image/save/v2/" + this.getPartnerKey(),
                {
                  img: encodeURIComponent(e.houseImage),
                  up: e.isUpload,
                  width: e.params.width,
                  height: e.params.height,
                  top: e.params.top,
                  left: e.params.left,
                },
                "text/plain"
              )
                .done(function (e) {
                  (s.saveImageLoading = !1), t.apply(o || null, [e]);
                })
                .error(function (e) {
                  (s.saveImageLoading = !1), i.apply(o || null, [e]);
                });
            }
          },
          getNewReference: function (e, t, i) {
            if (!this.newReferenceLoading && e) {
              this.newReferenceLoading = !0;
              var o = this;
              this._createPOSTPromise(e, "reference/new")
                .done(function (e) {
                  (o.newReferenceLoading = !1), t.apply(i || null, [e]);
                })
                .error(function () {
                  o.newReferenceLoading = !1;
                });
            }
          },
          listDocuments: function (e, t, i) {
            return this._createGETPromise(
              { type: e, rows: t, page: i },
              "doc/list"
            );
          },
          loadReferenceConf: function (e, t, i) {
            if (!this.loadReferenceLoading) {
              this.loadReferenceLoading = !0;
              var o = this;
              this._createGETPromise(
                null,
                "reference/load/" + encodeURIComponent(e)
              )
                .done(function (e) {
                  (o.loadReferenceLoading = !1), t.apply(i || null, [e]);
                })
                .error(function () {
                  o.loadReferenceLoading = !1;
                });
            }
          },
          getPrice: function (e, t, i) {
            if (!this.priceLoading) {
              var s = this,
                n = "price/v2";
              this.model.conf("spreadSheetAPI") && (n = "price/v3"),
                this._createPOSTPromise(e, n)
                  .done(function (e) {
                    (s.priceLoading = !1), t.apply(i || null, [e]);
                  })
                  .error(function () {
                    (s.priceLoading = !1),
                      (s.model.priceLoading = !1),
                      o.trigger(o.PRICE_LOADING);
                  });
            }
          },
          getConfiguration: function (e, t) {
            if (!this.confLoading) {
              this.confLoading = !0;
              var i = this,
                o = d.getServerNameWithPort(window.location.href),
                s = CryptoJS.enc.Utf8.parse(o),
                n = CryptoJS.enc.Base64.stringify(s);
              this._createGETPromise(null, "configuration/" + n)
                .done(function (o) {
                  (i.confLoading = !1), e.apply(t || null, [o]);
                })
                .error(function (e) {
                  i.confLoading = !1;
                });
            }
          },
          login: function (e, t, i) {
            if (!this.loginLoad) {
              this.loginLoad = !0;
              var o = this;
              this._createGETPromise(null, "user/login")
                .done(function (t) {
                  (o.loginLoad = !1), e.apply(i || null, [t]);
                })
                .error(function (e, s, n) {
                  t.apply(i || null, [e, s, n]), (o.loginLoad = !1);
                });
            }
          },
          listUsers: function () {
            return this._createGETPromise(null, "user/list");
          },
          getTemplate: function (e, t, i, o) {
            if (!this.templateLoading) {
              this.templateLoading = !0;
              var s = this;
              this._createGETPromise({ t: e }, "door/template")
                .done(function (e) {
                  (s.templateLoading = !1), i.apply(o || null, [e, t]);
                })
                .error(function () {
                  (s.templateLoading = !1), i.apply(o || null, null);
                });
            }
          },
          getAutoLoginData: function (e, t, i, o) {
            if (!this.autoLoginLoading) {
              this.autoLoginLoading = !0;
              var s = this;
              this._createGETPromise({ d: e }, "user/autoLoginData")
                .done(function (e) {
                  (s.autoLoginLoading = !1), t.apply(o || null, [e]);
                })
                .error(function () {
                  (s.autoLoginLoading = !1), i.apply(o || null);
                });
            }
          },
          getUserGroupData: function () {
            return this._createGETPromise({}, "system/userGroup");
          },
          searchConfigurations: function (e) {
            return this._createGETPromise({ s: e }, "reference/search");
          },
          fetchDiscounts: function () {
            return this._createGETPromise(null, "system/discount");
          },
          fetchDiscountSystem: function () {
            return this._createGETPromise(null, "system/discountSystem");
          },
          removeUser: function (e) {
            return this._createPromise("user", "DELETE", null, {
              partnerKey: this.getPartnerKey(),
              username: e,
            });
          },
          createExcelLink: function (e) {
            return this._createPOSTPromise(e, "price/excel/createLink");
          },
          exportBillingToExcel: function (e) {
            return this._createPOSTPromise(e, "user/exportBilling");
          },
          getCurrencies: function () {
            return this._createGETPromise(null, "system/currencies");
          },
          getCountries: function () {
            return this._createGETPromise(null, "system/countries");
          },
          getUserPackages: function () {
            return this._createGETPromise(null, "system/userPackage");
          },
          getUser: function (e) {
            return this._createGETPromise({ username: e }, "user");
          },
          updateUser: function (e) {
            return this._createPUTPromise(e, "user");
          },
          createUser: function (e) {
            return this._createPOSTPromise(e, "user");
          },
          setPassword: function (e) {
            return this._createPOSTPromise({ password: e }, "user/setPassword");
          },
          resetPassword: function (e) {
            return this._createGETPromise(
              {
                host: d.getServerNameWithPort(window.location.href),
                username: e,
              },
              "user/resetPassword"
            );
          },
          sendAccessRequest: function (e) {
            return this._createPOSTPromise(e, "user/accessRequest");
          },
          getAllUsersByFilter: function (e) {
            return this._createPOSTPromise(e, "user/listByFilter");
          },
          getAllBillsByFilter: function (e) {
            return this._createPOSTPromise(e, "user/listBillsByFilter");
          },
          createDocument: function (e) {
            return this._createPOSTPromise(e, "doc");
          },
          updateDocument: function (e) {
            return this._createPUTPromise(e, "doc");
          },
          deleteDocument: function (e) {
            return this._createDELETEPromise(null, "doc/" + e);
          },
          loadDocument: function (e) {
            return this._createGETPromise(
              null,
              "doc/load/" + encodeURIComponent(e)
            );
          },
          createOrderFromOffer: function (e, t) {
            return this._createPOSTPromise(
              { message: t },
              "doc/order/" + encodeURIComponent(e)
            );
          },
          exportToPdf: function (e) {
            return this._createGETPromise(
              null,
              "doc/export/" + encodeURIComponent(e)
            );
          },
          _createPOSTPromise: function (e, t, i, o) {
            return this._createPromise(t, "POST", i, e, o);
          },
          _createPromise: function (e, o, s, r, l) {
            if (!e || !o)
              throw "Uri and/or type parameter can not be null/undefined!";
            e = n.getHost() + "/rest/" + e;
            var a = d.urlBuilder(
                e,
                t.extend(
                  {
                    l: this.model.conf("lang"),
                    k: this.getPartnerKey(),
                    u: this.model.loggedInUser(),
                  },
                  s
                )
              ),
              c = i.ajax(a, {
                contentType: l || "application/json",
                dataType: l && "application/json" !== l ? null : "json",
                type: o,
                data: r ? JSON.stringify(r) : null,
                context: this,
                beforeSend: function (e) {
                  e.setRequestHeader("Authorization", this._auth({ url: a }));
                },
              });
            return c.error(this._unauthorizedAccess), c;
          },
          _unauthorizedAccess: function (e, t, i) {
            "accessBlock" === e.responseText && this.model.unauthorizedAccess();
          },
          _createGETPromise: function (e, t) {
            return this._createPromise(t, "GET", e);
          },
          _createDELETEPromise: function (e, t) {
            return this._createPromise(t, "DELETE", e);
          },
          _createPATCHPromise: function (e, t) {
            return this._createPromise(t, "PATCH", null, e);
          },
          _createPUTPromise: function (e, t) {
            return this._createPromise(t, "PUT", null, e);
          },
          setReportName: function (e) {
            return (e.reportName = this.model.conf("reportDataClass")), e;
          },
        });
      return {
        getInstance: function (e) {
          return r || (r = new l(e)), r;
        },
      };
    }
  ),
  define(
    "app/models/CurrentDoorData",
    ["require", "class", "app/util/Util", "underscore"],
    function (e) {
      var t = e("class"),
        i = e("app/util/Util"),
        o = e("underscore");
      return t.extend({
        init: function (e) {
          this.data = e;
        },
        secureLatchOptions: [],
        doorModel: null,
        serie: null,
        category: null,
        doorName: null,
        insideModel: null,
        insideModelName: null,
        firstLoad: !0,
        _productPart: "panel",
        glassPart: "door-glass",
        equipmentView: null,
        equipmentPackage: null,
        hasDoorSideModel: !1,
        resetProfile: !1,
        insideColorChanged: !1,
        customer: null,
        userDiscount: 0,
        additionalDiscount: 0,
        generalMargin: null,
        additionalMargin1: null,
        sideModel: null,
        sideModelDummy: null,
        hasSideModelMotive: !1,
        canSetOrnamentGlassSide: !0,
        garageDoor: null,
        doorDimensionsChanged: !1,
        defaultDoorWidth: null,
        defaultDoorHeight: null,
        defaultSideWidth: null,
        defaultTopHeight: null,
        minDoorWidth: 1e3,
        maxDoorWidth: 1300,
        minDoorWidth2: null,
        maxDoorWidth2: null,
        minDoorHeight: 2e3,
        maxDoorHeight: 2300,
        minSideWidth: 400,
        maxSideWidth: 1400,
        minTopHeight: 400,
        maxTopHeight: 1e3,
        maxWidthTopGlass: null,
        maxHeightTopGlass: null,
        maxWidthSideGlass: null,
        isColorPartChanged: !1,
        isColorFrameAndPanelAllowed: !0,
        partsColorAsPanel: !0,
        inquiryNumber: "/",
        referenceNumber: null,
        commission: null,
        docNumber: null,
        documentChanged: !1,
        docType: null,
        hasOrder: !1,
        customText: null,
        AUConf: !1,
        construction: {
          frameType: "SINGLE",
          width: 1e3,
          height: 2150,
          panel2Width: 2150,
          leftSideWidth: [400],
          rightSideWidth: [400],
          middleWidth: 400,
          topHeight: 400,
          leftRepeat: 1,
          rightRepeat: 1,
          totalWidth: 1e3,
          totalHeight: 2150,
          garageDoorWidth: 3e3,
          materialCode: "alu",
          wingCode: null,
          securitySystem: !1,
          profile: { code: null, label: null },
          overlightType: null,
          dinDirection: null,
          blindProfile: null,
          customRenderType: null,
          woodRotation: null,
          woodRotationInside: null,
          designCode: null,
        },
        doorOption: [],
        demandOptions: [],
        additionalOptions: [],
        items: [],
        color: {
          panelColor: { code: null, desc: null },
          frameColor: { code: null, desc: null },
          applicationColor: { code: null, desc: null },
          application2Color: { code: null, desc: null },
          crteColor: { code: null, desc: null },
          dframeColor: { code: null, desc: null },
          dframe2Color: { code: null, desc: null },
          gframeColor: { code: null, desc: null },
          cassetteColor: { code: null, desc: null },
          wingColor: { code: null, desc: null },
          panel2Color: { code: null, desc: null },
          panel3Color: { code: null, desc: null },
          insidePanelColor: { code: null, desc: null },
          insideFrameColor: { code: null, desc: null },
          insideApplicationColor: { code: null, desc: null },
          insideApplication2Color: { code: null, desc: null },
          insideCrteColor: { code: null, desc: null },
          insideDframeColor: { code: null, desc: null },
          insideDframe2Color: { code: null, desc: null },
          insideGframeColor: { code: null, desc: null },
          insideCassetteColor: { code: null, desc: null },
          insideWingColor: { code: null, desc: null },
          insidePanel2Color: { code: null, desc: null },
          insidePanel3Color: { code: null, desc: null },
          wallColor: "f5f5f5",
          insideWallColor: "f5f5f5",
        },
        glass: {
          doorGlass: null,
          doorGlassIn: null,
          doorGlassOut: null,
          doorGlassType: null,
          doorGlassGlazing: null,
          doorGlassOption: null,
          doorGlassLabel: null,
          sideGlass: null,
          sideGlassIn: null,
          sideGlassOut: null,
          sideGlassType: null,
          sideGlassDisabledRepeat: !1,
          sideGlassGlazing: 0,
          sideGlassOption: null,
          sideGlassLabel: null,
          upperGlass: null,
          upperGlassIn: null,
          upperGlassOut: null,
          upperGlassType: null,
          upperGlassGlazing: 0,
          upperGlassLabel: null,
          upperGlassOption: null,
          middleGlass: null,
          middleGlassIn: null,
          middleGlassOut: null,
          middleGlassType: null,
          middleGlassGlazing: null,
          middleGlassOption: null,
          middleGlassLabel: null,
        },
        houseImage: null,
        equipment: {
          outsideHandle: null,
          outsideHandleType: null,
          hasAccessControlHandle: null,
          hasAccessControlLock: null,
          hasPeepholeHandle: null,
          insideHandle: null,
          insideHandleType: null,
          rosette: null,
          showRosette: !0,
          panelProtection: null,
          doorstep: null,
          knocker: null,
          cylinder: null,
          peephole: null,
          accessControl: null,
          hinge: null,
          stopper: null,
          houseNumber: null,
          houseNumberValue: null,
          mailbox: null,
          secureLatch: null,
          ledLight: null,
          threshold: null,
          opener: null,
          remoteControl: null,
          dayNight: null,
          rigidChain: null,
          wallLamp: null,
          wallMailbox: null,
          wallBell: null,
          insideRosette: null,
          showInsideRosette: !0,
          sideMailbox: null,
          connector: null,
          insideMirror: null,
          scratchProtection: null,
          rotaryKnob: null,
          equipmentPackage: null,
          equipmentPackageValue: null,
          equipmentPackage1: null,
          equipmentPackage1Value: null,
          securityFeature: null,
          additionalRemotes: null,
          additionalRemotesValue: null,
          fingerprint: null,
          deadbolt: null,
          substructure: null,
          substructureValue: null,
          generalEquipment: null,
          generalEquipmentValue: null,
          generalEquipment2: null,
          generalEquipment2Value: null,
          generalEquipment3: null,
          generalEquipment3Value: null,
          cylinderKnob: null,
        },
        houseImageUrl: null,
        coords: {},
        setProductPart: function (e) {
          (this.isColorPartChanged = !0),
            (this.isColorFrameAndPanelAllowed = !1),
            (this._productPart = e);
        },
        getProductPart: function () {
          return this._productPart;
        },
        getProductPartCapitalized: function () {
          return (
            this._productPart.charAt(0).toUpperCase() +
            this._productPart.slice(1)
          );
        },
        setEquipmentView: function (e) {
          this.equipmentView = e;
        },
        getEquipmentView: function () {
          return this.equipmentView;
        },
        reset: function () {
          (this.documentChanged = !1),
            (this.firstLoad = !0),
            this.setPackage(null),
            this.setDinDirection(null),
            this.setBlindProfile(null),
            this.setDoorGlass(null),
            this.setDoorGlassType(null),
            this.setSideGlass(null),
            this.setSideGlassType(null),
            this.setSideGlassDisabledRepeat(!1),
            this.setDoorGlassGlazing(0),
            this.setDoorGlassOption(null),
            this.setSideGlassGlazing(0),
            this.setSideGlassOption(null),
            this.setUpperGlass(null),
            this.setUpperGlassType(null),
            this.setUpperGlassGlazing(0),
            this.setMiddleGlass(null),
            this.setMiddleGlassType(null),
            this.setMiddleGlassGlazing(0),
            this.setMiddleGlassLabel(null),
            (this.sideModel = null),
            (this.sideModelDummy = null),
            (this.hasSideModelMotive = !1),
            (this.canSetOrnamentGlassSide = !0),
            this.setOutsideHandle(null),
            this.setOutsideHandleType(null),
            this.setInsideHandle(null),
            this.setInsideHandleType(null),
            this.setRosette(null),
            this.setShowRosette(!0),
            this.setPanelProtection(null),
            this.setDoorstep(null),
            this.setKnocker(null),
            this.setCylinder(null),
            this.setPeephole(null),
            this.setAccessControl(null),
            this.setHinge(null),
            this.setStopper(null),
            this.setHouseNumber(null),
            this.setMailbox(null),
            this.setSecureLatch(null),
            this.setLedLight(null),
            this.setConnector(null),
            this.setInsideMirror(null),
            this.setThreshold(null),
            this.setOpener(null),
            this.setRemoteControl(null),
            this.setDayNight(null),
            this.setRigidChain(null),
            this.setWallLamp(null),
            this.setWallBell(null),
            this.setWallMailBox(null),
            this.setInsideRosette(null),
            this.setShowInsideRosette(!0),
            this.setOverlightType(null),
            this.setWingCode(null),
            this.setSecuritySystem(!1),
            this.setMaterial("alu"),
            (this.hasDoorSideModel = !1),
            this.setInsideModel(null),
            this.setInsideModelName(null),
            (this.isColorPartChanged = !1),
            (this.isColorFrameAndPanelAllowed = !0),
            (this.insideColorChanged = !1),
            this.setHasAccessControlHandle(!1),
            this.setHasAccessControlLock(!1),
            this.setHasPeepholeHandle(!1),
            this.setGarageDoor(null),
            this.setSideMailbox(null),
            this.setScratchProtection(null),
            this.setRotaryKnob(null),
            this.setEquipmentPackage(null),
            this.setEquipmentPackageValue(null),
            this.setEquipmentPackage1(null),
            this.setEquipmentPackage1Value(null),
            this.setSecurityFeature(null),
            this.resetReferenceNumber(),
            this.setAdditionalRemotes(null),
            this.setAdditionalRemotesValue(null),
            this.setWoodRotation(null),
            this.setWoodRotationInside(null),
            this.setFingerprint(null),
            this.setDeadbolt(null),
            this.setSubstructure(null),
            this.setSubstructureValue(null),
            this.setGeneralEquipment(null),
            this.setGeneralEquipmentValue(null),
            this.setGeneralEquipment2(null),
            this.setGeneralEquipment2Value(null),
            this.setGeneralEquipment3(null),
            this.setGeneralEquipment3Value(null),
            this.setCylinderKnob(null),
            this.resetColors(),
            this.removeDoorOption("groove"),
            this.removeDoorOption("system"),
            this.setDesignCode(null),
            (this.items = []);
        },
        setFrameType: function (e) {
          (this.construction.frameType = e), this.resetReferenceNumber();
        },
        getFrameType: function () {
          return this.construction.frameType;
        },
        setWidth: function (e) {
          (this.doorDimensionsChanged = !0),
            (this.construction.width = e),
            this.resetReferenceNumber();
        },
        getWidth: function () {
          return this.construction.width;
        },
        setHeight: function (e) {
          (this.doorDimensionsChanged = !0),
            (this.construction.height = e),
            this.resetReferenceNumber();
        },
        getHeight: function () {
          return this.construction.height;
        },
        setPanel2Width: function (e) {
          (this.construction.panel2Width = e),
            (this.doorDimensionsChanged = !0),
            this.resetReferenceNumber();
        },
        getPanel2Width: function () {
          return this.construction.panel2Width;
        },
        setLeftWidth: function (e, t) {
          (this.construction.leftSideWidth[t || 0] = e),
            this.resetReferenceNumber();
        },
        getLeftWidth: function (e) {
          return this.construction.leftSideWidth[e || 0];
        },
        setRightWidth: function (e, t) {
          (this.construction.rightSideWidth[t || 0] = e),
            this.resetReferenceNumber();
        },
        setHouseImage: function (e) {
          this.houseImage = e;
        },
        getRightWidth: function (e) {
          return this.construction.rightSideWidth[e || 0];
        },
        setTopHeight: function (e) {
          (this.construction.topHeight = e), this.resetReferenceNumber();
        },
        getTopHeight: function () {
          return this.construction.topHeight;
        },
        setMiddleWidth: function (e) {
          (this.construction.middleWidth = e), this.resetReferenceNumber();
        },
        getMiddleWidth: function () {
          return this.construction.middleWidth;
        },
        setRepeatLeft: function (e) {
          (this.construction.leftRepeat = e), this.resetReferenceNumber();
        },
        getRepeatLeft: function () {
          return this.construction.leftRepeat;
        },
        getCategory: function () {
          return this.category;
        },
        getSerie: function () {
          return this.serie;
        },
        setRepeatRight: function (e) {
          (this.construction.rightRepeat = e), this.resetReferenceNumber();
        },
        getRepeatRight: function () {
          return this.construction.rightRepeat;
        },
        setTotalWidth: function (e) {
          this.construction.totalWidth = e;
        },
        getTotalWidth: function () {
          return this.construction.totalWidth;
        },
        setTotalHeight: function (e) {
          this.construction.totalHeight = e;
        },
        getTotalHeight: function () {
          return this.construction.totalHeight;
        },
        getMaterial: function () {
          return this.construction.materialCode;
        },
        setMaterial: function (e) {
          (this.construction.materialCode = e), this.resetReferenceNumber();
        },
        getDinDirection: function (e) {
          return e &&
            this.construction.dinDirection &&
            this.construction.dinDirection.label
            ? this.construction.dinDirection.label
            : this.construction.dinDirection.code;
        },
        setDinDirection: function (e) {
          (this.construction.dinDirection =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getBlindProfile: function () {
          return this.construction.blindProfile;
        },
        setBlindProfile: function (e) {
          (this.construction.blindProfile = e), this.resetReferenceNumber();
        },
        getWingCode: function () {
          return this.construction.wingCode;
        },
        setWingCode: function (e) {
          (this.construction.wingCode = e), this.resetReferenceNumber();
        },
        getSecuritySystem: function () {
          return this.construction.securitySystem;
        },
        setSecuritySystem: function (e) {
          (this.construction.securitySystem = e), this.resetReferenceNumber();
        },
        getProfile: function (e) {
          return e && this.construction.profile.label
            ? this.construction.profile.label
            : this.construction.profile.code;
        },
        setProfile: function (e) {
          (this.construction.profile =
            "object" == typeof e && null != e
              ? { code: e.code, label: e.label }
              : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getOverlightType: function () {
          return this.construction.overlightType;
        },
        setOverlightType: function (e) {
          (this.construction.overlightType = e), this.resetReferenceNumber();
        },
        getInsideModel: function () {
          return this.insideModel;
        },
        setInsideModel: function (e) {
          (this.insideModel = e), this.resetReferenceNumber();
        },
        setInsideModelName: function (e) {
          (this.insideModelName = e), this.resetReferenceNumber();
        },
        getInsideModelName: function () {
          return this.insideModelName;
        },
        getWallColor: function () {
          return this.color.wallColor;
        },
        setWallColor: function (e) {
          this.color.wallColor = e;
        },
        getInsideWallColor: function () {
          return this.color.insideWallColor;
        },
        setInsideWallColor: function (e) {
          this.color.insideWallColor = e;
        },
        getDoorGlass: function (e) {
          return e && this.glass.doorGlass && this.glass.doorGlass.label
            ? this.glass.doorGlass.label
            : this.glass.doorGlass.code;
        },
        setDoorGlass: function (e) {
          (this.glass.doorGlass =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getDoorGlassIn: function () {
          return this.glass.doorGlassIn;
        },
        setDoorGlassIn: function (e) {
          (this.glass.doorGlassIn = e), this.resetReferenceNumber();
        },
        getDoorGlassOut: function () {
          return this.glass.doorGlassOut;
        },
        setDoorGlassOut: function (e) {
          (this.glass.doorGlassOut = e), this.resetReferenceNumber();
        },
        getDoorGlassType: function () {
          return this.glass.doorGlassType;
        },
        getCustomRenderType: function () {
          return this.construction.customRenderType;
        },
        setCustomRenderType: function (e) {
          (this.construction.customRenderType = e), this.resetReferenceNumber();
        },
        setDoorGlassType: function (e) {
          (this.glass.doorGlassType = e), this.resetReferenceNumber();
        },
        getDoorGlassLabel: function () {
          return this.glass.doorGlassLabel;
        },
        setDoorGlassLabel: function (e) {
          this.glass.doorGlassLabel = e;
        },
        getDoorGlassGlazing: function () {
          return this.glass.doorGlassGlazing;
        },
        setDoorGlassGlazing: function (e) {
          this.glass.doorGlassGlazing = e;
        },
        getDoorGlassOption: function () {
          return this.glass.doorGlassOption;
        },
        setDoorGlassOption: function (e) {
          this.glass.doorGlassOption = e;
        },
        getSideGlass: function (e) {
          return e && this.glass.sideGlass && this.glass.sideGlass.label
            ? this.glass.sideGlass.label
            : this.glass.sideGlass.code;
        },
        setSideGlass: function (e) {
          (this.glass.sideGlass =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getSideGlassType: function () {
          return this.glass.sideGlassType;
        },
        setSideGlassType: function (e) {
          (this.glass.sideGlassType = e), this.resetReferenceNumber();
        },
        setSideGlassDisabledRepeat: function (e) {
          this.glass.sideGlassDisabledRepeat = e;
        },
        getSideGlassDisabledRepeat: function () {
          return this.glass.sideGlassDisabledRepeat;
        },
        setSideGlassGlazing: function (e) {
          this.glass.sideGlassGlazing = e;
        },
        getSideGlassGlazing: function () {
          return this.glass.sideGlassGlazing;
        },
        setSideGlassOption: function (e) {
          this.glass.sideGlassOption = e;
        },
        getSideGlassOption: function () {
          return this.glass.sideGlassOption;
        },
        setUpperGlassOption: function (e) {
          this.glass.upperGlassOption = e;
        },
        getUpperGlassOption: function () {
          return this.glass.upperGlassOption;
        },
        getSideGlassLabel: function () {
          return this.glass.sideGlassLabel;
        },
        setSideGlassLabel: function (e) {
          this.glass.sideGlassLabel = e;
        },
        getUpperGlass: function (e) {
          return e && this.glass.upperGlass && this.glass.upperGlass.label
            ? this.glass.upperGlass.label
            : this.glass.upperGlass.code;
        },
        setUpperGlass: function (e) {
          (this.glass.upperGlass =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getUpperGlassType: function () {
          return this.glass.upperGlassType;
        },
        setUpperGlassType: function (e) {
          (this.glass.upperGlassType = e), this.resetReferenceNumber();
        },
        setUpperGlassGlazing: function (e) {
          this.glass.upperGlassGlazing = e;
        },
        getUpperGlassGlazing: function () {
          return this.glass.upperGlassGlazing;
        },
        getUpperGlassLabel: function () {
          return this.glass.upperGlassLabel;
        },
        setUpperGlassLabel: function (e) {
          this.glass.upperGlassLabel = e;
        },
        getMiddleGlass: function () {
          return this.glass.middleGlass;
        },
        setMiddleGlass: function (e) {
          (this.glass.middleGlass = e), this.resetReferenceNumber();
        },
        getMiddleGlassType: function () {
          return this.glass.middleGlassType;
        },
        setMiddleGlassType: function (e) {
          (this.glass.middleGlassType = e), this.resetReferenceNumber();
        },
        setMiddleGlassGlazing: function (e) {
          this.glass.middleGlassGlazing = e;
        },
        getMiddleGlassGlazing: function () {
          return this.glass.middleGlassGlazing;
        },
        getMiddleGlassLabel: function () {
          return this.glass.middleGlassLabel;
        },
        setMiddleGlassLabel: function (e) {
          this.glass.middleGlassLabel = e;
        },
        setOutsideHandle: function (e) {
          (this.equipment.outsideHandle =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getOutsideHandle: function (e) {
          return e &&
            this.equipment.outsideHandle &&
            this.equipment.outsideHandle.label
            ? this.equipment.outsideHandle.label
            : this.equipment.outsideHandle.code;
        },
        getOutsideHandleObj: function () {
          return this.equipment.outsideHandle;
        },
        setOutsideHandleType: function (e) {
          (this.equipment.outsideHandleType = e), this.resetReferenceNumber();
        },
        getOutsideHandleType: function () {
          return this.equipment.outsideHandleType;
        },
        setPartsColorAsPanel: function (e) {
          this.partsColorAsPanel = e;
        },
        getPartsColorAsPanel: function () {
          return this.partsColorAsPanel;
        },
        setHasAccessControlHandle: function (e) {
          (this.equipment.hasAccessControlHandle = e),
            this.resetReferenceNumber();
        },
        getHasAccessControlHandle: function () {
          return this.equipment.hasAccessControlHandle;
        },
        setHasAccessControlLock: function (e) {
          (this.equipment.hasAccessControlLock = e),
            this.resetReferenceNumber();
        },
        getHasAccessControlLock: function () {
          return this.equipment.hasAccessControlLock;
        },
        setHasPeepholeHandle: function (e) {
          (this.equipment.hasPeepholeHandle = e), this.resetReferenceNumber();
        },
        getHasPeepholeHandle: function () {
          return this.equipment.hasPeepholeHandle;
        },
        setInsideHandle: function (e) {
          (this.equipment.insideHandle =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getInsideHandle: function (e) {
          return e &&
            this.equipment.insideHandle &&
            this.equipment.insideHandle.label
            ? this.equipment.insideHandle.label
            : this.equipment.insideHandle.code;
        },
        setInsideHandleType: function (e) {
          (this.equipment.insideHandleType = e), this.resetReferenceNumber();
        },
        getInsideHandleType: function () {
          return this.equipment.insideHandleType;
        },
        setRosette: function (e) {
          (this.equipment.rosette =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getRosette: function (e) {
          return e && this.equipment.rosette && this.equipment.rosette.label
            ? this.equipment.rosette.label
            : this.equipment.rosette.code;
        },
        setShowRosette: function (e) {
          (this.equipment.showRosette = e), this.resetReferenceNumber();
        },
        getShowRosette: function () {
          return this.equipment.showRosette;
        },
        setDoorstep: function (e) {
          (this.equipment.doorstep =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getDoorstep: function (e) {
          return e && this.equipment.doorstep && this.equipment.doorstep.label
            ? this.equipment.doorstep.label
            : this.equipment.doorstep.code;
        },
        setPanelProtection: function (e) {
          (this.equipment.panelProtection =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getPanelProtection: function (e) {
          return e &&
            this.equipment.panelProtection &&
            this.equipment.panelProtection.label
            ? this.equipment.panelProtection.label
            : this.equipment.panelProtection.code;
        },
        setKnocker: function (e) {
          (this.equipment.knocker =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getKnocker: function (e) {
          return e && this.equipment.knocker && this.equipment.knocker.label
            ? this.equipment.knocker.label
            : this.equipment.knocker.code;
        },
        setCylinder: function (e) {
          (this.equipment.cylinder =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getCylinder: function (e) {
          return e && this.equipment.cylinder && this.equipment.cylinder.label
            ? this.equipment.cylinder.label
            : this.equipment.cylinder.code;
        },
        setPeephole: function (e) {
          (this.equipment.peephole =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getPeephole: function (e) {
          return e && this.equipment.peephole && this.equipment.peephole.label
            ? this.equipment.peephole.label
            : this.equipment.peephole.code;
        },
        setAccessControl: function (e) {
          (this.equipment.accessControl =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getAccessControl: function (e) {
          return e &&
            this.equipment.accessControl &&
            this.equipment.accessControl.label
            ? this.equipment.accessControl.label
            : this.equipment.accessControl.code;
        },
        setHinge: function (e) {
          (this.equipment.hinge =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getHinge: function (e) {
          return e && this.equipment.hinge && this.equipment.hinge.label
            ? this.equipment.hinge.label
            : this.equipment.hinge.code;
        },
        setStopper: function (e) {
          (this.equipment.stopper =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getStopper: function (e) {
          return e && this.equipment.stopper && this.equipment.stopper.label
            ? this.equipment.stopper.label
            : this.equipment.stopper.code;
        },
        setHouseNumber: function (e, t) {
          (this.equipment.houseNumber =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            (this.equipment.houseNumberValue = t),
            this.resetReferenceNumber();
        },
        getHouseNumber: function (e) {
          return e &&
            this.equipment.houseNumber &&
            this.equipment.houseNumber.label
            ? this.equipment.houseNumber.label
            : this.equipment.houseNumber.code;
        },
        getHouseNumberValue: function () {
          return this.equipment.houseNumberValue;
        },
        setMailbox: function (e) {
          (this.equipment.mailbox =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getMailbox: function (e) {
          return e && this.equipment.mailbox && this.equipment.mailbox.label
            ? this.equipment.mailbox.label
            : this.equipment.mailbox.code;
        },
        setSecureLatch: function (e) {
          (this.equipment.secureLatch =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getSecureLatch: function (e) {
          return e &&
            this.equipment.secureLatch &&
            this.equipment.secureLatch.label
            ? this.equipment.secureLatch.label
            : this.equipment.secureLatch.code;
        },
        setLedLight: function (e) {
          (this.equipment.ledLight =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getLedLight: function (e) {
          return e && this.equipment.ledLight && this.equipment.ledLight.label
            ? this.equipment.ledLight.label
            : this.equipment.ledLight.code;
        },
        setThreshold: function (e) {
          (this.equipment.threshold =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getThreshold: function (e) {
          return e && this.equipment.threshold && this.equipment.threshold.label
            ? this.equipment.threshold.label
            : this.equipment.threshold.code;
        },
        setOpener: function (e) {
          (this.equipment.opener =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getOpener: function (e) {
          return e && this.equipment.opener && this.equipment.opener.label
            ? this.equipment.opener.label
            : this.equipment.opener.code;
        },
        setResetProfile: function (e) {
          (this.resetProfile = !!e), this.resetReferenceNumber();
        },
        getResetProfile: function () {
          return this.resetProfile;
        },
        setRemoteControl: function (e) {
          (this.equipment.remoteControl =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getRemoteControl: function (e) {
          return e &&
            this.equipment.remoteControl &&
            this.equipment.remoteControl.label
            ? this.equipment.remoteControl.label
            : this.equipment.remoteControl.code;
        },
        setDayNight: function (e) {
          (this.equipment.dayNight =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getDayNight: function (e) {
          return e && this.equipment.dayNight && this.equipment.dayNight.label
            ? this.equipment.dayNight.label
            : this.equipment.dayNight.code;
        },
        setRigidChain: function (e) {
          (this.equipment.rigidChain =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getRigidChain: function (e) {
          return e &&
            this.equipment.rigidChain &&
            this.equipment.rigidChain.label
            ? this.equipment.rigidChain.label
            : this.equipment.rigidChain.code;
        },
        setWallLamp: function (e) {
          (this.equipment.wallLamp =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getWallLamp: function (e) {
          return e && this.equipment.wallLamp && this.equipment.wallLamp.label
            ? this.equipment.wallLamp.label
            : this.equipment.wallLamp.code;
        },
        getWallMailbox: function (e) {
          return e &&
            this.equipment.wallMailbox &&
            this.equipment.wallMailbox.label
            ? this.equipment.wallMailbox.label
            : this.equipment.wallMailbox.code;
        },
        setWallMailBox: function (e) {
          (this.equipment.wallMailbox =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getWallBell: function (e) {
          return e && this.equipment.wallBell && this.equipment.wallBell.label
            ? this.equipment.wallBell.label
            : this.equipment.wallBell.code;
        },
        setWallBell: function (e) {
          (this.equipment.wallBell =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getInsideRosette: function (e) {
          return e &&
            this.equipment.insideRosette &&
            this.equipment.insideRosette.label
            ? this.equipment.insideRosette.label
            : this.equipment.insideRosette.code;
        },
        setInsideRosette: function (e) {
          (this.equipment.insideRosette =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getShowInsideRosette: function () {
          return this.equipment.showInsideRosette;
        },
        setShowInsideRosette: function (e) {
          (this.equipment.showInsideRosette = e), this.resetReferenceNumber();
        },
        setGarageDoor: function (e) {
          (this.garageDoor = e), this.resetReferenceNumber();
        },
        getGarageDoor: function () {
          return this.garageDoor;
        },
        setGarageDoorWidth: function (e) {
          (this.construction.garageDoorWidth = e), this.resetReferenceNumber();
        },
        getGarageDoorWidth: function () {
          return this.construction.garageDoorWidth;
        },
        getSideMailbox: function (e) {
          return e &&
            this.equipment.sideMailbox &&
            this.equipment.sideMailbox.label
            ? this.equipment.sideMailbox.label
            : this.equipment.sideMailbox.code;
        },
        setSideMailbox: function (e) {
          (this.equipment.sideMailbox =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        setConnector: function (e) {
          (this.equipment.connector =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getConnector: function (e) {
          return e && this.equipment.connector && this.equipment.connector.label
            ? this.equipment.connector.label
            : this.equipment.connector.code;
        },
        setPackage: function (e) {
          (this.equipmentPackage = e), this.resetReferenceNumber();
        },
        getPackage: function () {
          return this.equipmentPackage;
        },
        setDemandOptions: function (e) {
          (this.demandOptions = e), this.resetReferenceNumber();
        },
        getDemandOptions: function () {
          return this.demandOptions;
        },
        setAdditionalOptions: function (e) {
          (this.additionalOptions = e), this.resetReferenceNumber();
        },
        getAdditionalOptions: function () {
          return this.additionalOptions;
        },
        setInsideMirror: function (e) {
          (this.equipment.insideMirror =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getInsideMirror: function (e) {
          return e &&
            this.equipment.insideMirror &&
            this.equipment.insideMirror.label
            ? this.equipment.insideMirror.label
            : this.equipment.insideMirror.code;
        },
        setScratchProtection: function (e) {
          (this.equipment.scratchProtection =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getScratchProtection: function (e) {
          return e &&
            this.equipment.scratchProtection &&
            this.equipment.scratchProtection.label
            ? this.equipment.scratchProtection.label
            : this.equipment.scratchProtection.code;
        },
        setRotaryKnob: function (e) {
          (this.equipment.rotaryKnob =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getRotaryKnob: function (e) {
          return e &&
            this.equipment.rotaryKnob &&
            this.equipment.rotaryKnob.label
            ? this.equipment.rotaryKnob.label
            : this.equipment.rotaryKnob.code;
        },
        setEquipmentPackage: function (e, t) {
          (this.equipment.equipmentPackage =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            (this.equipment.equipmentPackageValue = t),
            this.resetReferenceNumber();
        },
        getEquipmentPackage: function (e) {
          return e &&
            this.equipment.equipmentPackage &&
            this.equipment.equipmentPackage.label
            ? this.equipment.equipmentPackage.label
            : this.equipment.equipmentPackage.code;
        },
        setEquipmentPackageValue: function (e) {
          this.equipment.equipmentPackageValue = e;
        },
        getEquipmentPackageValue: function () {
          return this.equipment.equipmentPackageValue;
        },
        setEquipmentPackage1: function (e, t) {
          (this.equipment.equipmentPackage1 =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            (this.equipment.equipmentPackage1Value = t),
            this.resetReferenceNumber();
        },
        getEquipmentPackage1: function (e) {
          return e &&
            this.equipment.equipmentPackage1 &&
            this.equipment.equipmentPackage1.label
            ? this.equipment.equipmentPackage1.label
            : this.equipment.equipmentPackage1.code;
        },
        setEquipmentPackage1Value: function (e) {
          this.equipment.equipmentPackage1Value = e;
        },
        getEquipmentPackage1Value: function () {
          return this.equipment.equipmentPackage1Value;
        },
        setSecurityFeature: function (e) {
          (this.equipment.securityFeature =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getSecurityFeature: function (e) {
          return e &&
            this.equipment.securityFeature &&
            this.equipment.securityFeature.label
            ? this.equipment.securityFeature.label
            : this.equipment.securityFeature.code;
        },
        setAdditionalRemotes: function (e, t) {
          (this.equipment.additionalRemotes =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            (this.equipment.additionalRemotesValue = t),
            this.resetReferenceNumber();
        },
        getAdditionalRemotes: function (e) {
          return e &&
            this.equipment.additionalRemotes &&
            this.equipment.additionalRemotes.label
            ? this.equipment.additionalRemotes.label
            : this.equipment.additionalRemotes.code;
        },
        setAdditionalRemotesValue: function (e) {
          this.equipment.additionalRemotesValue = e;
        },
        getAdditionalRemotesValue: function () {
          return this.equipment.additionalRemotesValue;
        },
        setWoodRotation: function (e) {
          (this.construction.woodRotation = e), this.resetReferenceNumber();
        },
        getWoodRotation: function () {
          return this.construction.woodRotation;
        },
        setWoodRotationInside: function (e) {
          (this.construction.woodRotationInside = e),
            this.resetReferenceNumber();
        },
        getWoodRotationInside: function () {
          return this.construction.woodRotationInside;
        },
        setColor: function (e, t) {
          if (!e) return void this.resetColor(t);
          (this.color[t] = {
            code: e.code,
            desc: e.desc,
            sameAsPanel: e.sameAsPanel,
            colorType: e.colorType,
            group: e.group,
          }),
            !e.group &&
              e.code &&
              i.error("setColor:no color group!", { code: e.code, part: t });
        },
        copyColor: function (e, t) {
          return (this.color[t] = o.clone(this.color[e])), this.color[t];
        },
        getColorClone: function (e) {
          return o.clone(this.color[e]);
        },
        getColor: function (e) {
          return null == this.color[e].code ? null : this.color[e];
        },
        resetColors: function () {
          o.each(
            this.color,
            function (e, t) {
              "wallColor" != t && "insideWallColor" != t && this.resetColor(t);
            },
            this
          );
        },
        resetColor: function (e) {
          this.color[e] = { code: null, desc: null, group: null };
        },
        setFingerprint: function (e) {
          (this.equipment.fingerprint =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getFingerprint: function (e) {
          return e &&
            this.equipment.fingerprint &&
            this.equipment.fingerprint.label
            ? this.equipment.fingerprint.label
            : this.equipment.fingerprint.code;
        },
        setDeadbolt: function (e) {
          (this.equipment.deadbolt =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getDeadbolt: function (e) {
          return e && this.equipment.deadbolt && this.equipment.deadbolt.label
            ? this.equipment.deadbolt.label
            : this.equipment.deadbolt.code;
        },
        setSubstructure: function (e) {
          (this.equipment.substructure =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getSubstructure: function (e) {
          return e &&
            this.equipment.substructure &&
            this.equipment.substructure.label
            ? this.equipment.substructure.label
            : this.equipment.substructure.code;
        },
        setSubstructureValue: function (e) {
          (this.equipment.substructureValue = e), this.resetReferenceNumber();
        },
        getSubstructureValue: function () {
          return this.equipment.substructureValue;
        },
        setGeneralEquipment: function (e) {
          (this.equipment.generalEquipment =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getGeneralEquipment: function (e) {
          return e &&
            this.equipment.generalEquipment &&
            this.equipment.generalEquipment.label
            ? this.equipment.generalEquipment.label
            : this.equipment.generalEquipment.code;
        },
        setGeneralEquipmentValue: function (e) {
          (this.equipment.generalEquipmentValue = e),
            this.resetReferenceNumber();
        },
        getGeneralEquipmentValue: function () {
          return this.equipment.generalEquipmentValue;
        },
        setGeneralEquipment2: function (e) {
          (this.equipment.generalEquipment2 =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getGeneralEquipment2: function (e) {
          return e &&
            this.equipment.generalEquipment2 &&
            this.equipment.generalEquipment2.label
            ? this.equipment.generalEquipment2.label
            : this.equipment.generalEquipment2.code;
        },
        setGeneralEquipment2Value: function (e) {
          (this.equipment.generalEquipment2Value = e),
            this.resetReferenceNumber();
        },
        getGeneralEquipment2Value: function () {
          return this.equipment.generalEquipment2Value;
        },
        setGeneralEquipment3: function (e) {
          (this.equipment.generalEquipment3 =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getGeneralEquipment3: function (e) {
          return e &&
            this.equipment.generalEquipment3 &&
            this.equipment.generalEquipment3.label
            ? this.equipment.generalEquipment3.label
            : this.equipment.generalEquipment3.code;
        },
        setGeneralEquipment3Value: function (e) {
          (this.equipment.generalEquipment3Value = e),
            this.resetReferenceNumber();
        },
        getGeneralEquipment3Value: function () {
          return this.equipment.generalEquipment3Value;
        },
        setCylinderKnob: function (e) {
          (this.equipment.cylinderKnob =
            "object" == typeof e && null != e ? e : { code: e, label: null }),
            this.resetReferenceNumber();
        },
        getCylinderKnob: function (e) {
          return e &&
            this.equipment.cylinderKnob &&
            this.equipment.cylinderKnob.label
            ? this.equipment.cylinderKnob.label
            : this.equipment.cylinderKnob.code;
        },
        setDesignCode: function (e) {
          (this.construction.designCode = e), this.resetReferenceNumber();
        },
        getDesignCode: function () {
          return this.construction.designCode;
        },
        removeDoorOption: function (e) {
          o.forEach(
            this.doorOption,
            function (t, i) {
              t.type == e && this.doorOption.splice(i, 1);
            },
            this
          );
        },
        setDoorOption: function (e) {
          var t;
          this.resetReferenceNumber(),
            o.forEach(
              this.doorOption,
              function (i) {
                i.type == e.get("type") &&
                  ((i.code = e.get("code")),
                  (i.value = e.get("value")),
                  (t = !0));
              },
              this
            ),
            t ||
              this.doorOption.push({
                type: e.get("type"),
                code: e.get("code"),
                value: e.get("value"),
              });
        },
        getDoorOption: function (e) {
          var t = null;
          return (
            o.forEach(
              this.doorOption,
              function (i) {
                i.type == e && (t = i);
              },
              this
            ),
            t
          );
        },
        getExtensionArray: function (e) {
          var t = [];
          return (
            o.each(
              e,
              function (e) {
                for (var i = 0; i < e.value; i++)
                  e.appCode && t.push(Number(e.appCode));
              },
              this
            ),
            t
          );
        },
        getExtensionProfileLeft: function () {
          return this.getItem("extensionProfileSymmetric")
            ? [
                parseInt(
                  this.getItem("extensionProfileSymmetric", null, "value")
                ) / 2,
              ]
            : this.getItem("extensionProfileRepeatLeft")
            ? this.getExtensionArray(
                this.getItems("extensionProfileRepeatLeft")
              )
            : this.getItem("frameExtansionLeft")
            ? this.getExtensionArray(this.getItems("frameExtansionLeft"))
            : this.getItem("extensionProfileLeft")
            ? [parseInt(this.getItem("extensionProfileLeft", null, "value"))]
            : [];
        },
        getExtensionProfileRight: function () {
          return this.getItem("extensionProfileSymmetric")
            ? [
                parseInt(
                  this.getItem("extensionProfileSymmetric", null, "value")
                ) / 2,
              ]
            : this.getItem("extensionProfileRepeatRight")
            ? this.getExtensionArray(
                this.getItems("extensionProfileRepeatRight")
              )
            : this.getItem("frameExtansionRight")
            ? this.getExtensionArray(this.getItems("frameExtansionRight"))
            : this.getItem("extensionProfileRight")
            ? [parseInt(this.getItem("extensionProfileRight", null, "value"))]
            : [];
        },
        getExtensionProfileTop: function () {
          return this.getItem("extensionProfileRepeatTop")
            ? this.getExtensionArray(this.getItems("extensionProfileRepeatTop"))
            : this.getItem("frameExtansionTop")
            ? this.getExtensionArray(this.getItems("frameExtansionTop"))
            : this.getItem("extensionProfileTop")
            ? [parseInt(this.getItem("extensionProfileTop", null, "value"))]
            : [];
        },
        removeItem: function (e) {
          var t = this._getItemIndex(e);
          t < 0 || (this.items.splice(t, 1), this.resetReferenceNumber());
        },
        removeItems: function (e) {
          (this.items = o.filter(
            this.items,
            function (t) {
              return t.itemType != e;
            },
            this
          )),
            this.resetReferenceNumber();
        },
        removeItemsList: function (e) {
          (this.items = o.filter(
            this.items,
            function (t) {
              return !o.contains(e, t.itemType);
            },
            this
          )),
            this.resetReferenceNumber();
        },
        setItem: function (e) {
          var t = this._createItemObj(e),
            i = this._getItemIndex(t);
          i > -1 ? (this.items[i] = t) : this.items.push(t),
            this.resetReferenceNumber();
        },
        _getItemIndex: function (e) {
          var t = { itemType: e.itemType };
          return (
            e.uiType && "checkbox" == e.uiType && (t.code = e.code),
            o.findIndex(this.items, t)
          );
        },
        _createItemObj: function (e) {
          return o.pick(e, [
            "code",
            "appCode",
            "itemType",
            "label",
            "value",
            "uiType",
            "itemOptions",
          ]);
        },
        getItem: function (e, t, i) {
          var s = t
            ? o.findWhere(this.items, { itemType: e, code: t })
            : o.findWhere(this.items, { itemType: e });
          return i && s ? ("label" != i || s.label ? s[i] : s.code) : s;
        },
        getItems: function (e) {
          return e ? o.where(this.items, { itemType: e }) : this.items;
        },
        fieldsToIgnore: [
          "fieldsToIgnore",
          "data",
          "customer",
          "docType",
          "documentChanged",
          "customText",
          "hasOrder",
          "isAUConf",
          "secureLatchOptions",
        ],
        getData: function () {
          var e = {};
          for (var t in this)
            o.contains(this.fieldsToIgnore, t) ||
              "function" == typeof this[t] ||
              (e[t] = o.clone(this[t]));
          return e;
        },
        setReferenceNumber: function (e) {
          this.referenceNumber = e;
        },
        resetReferenceNumber: function (e) {
          if (e)
            return (
              (this.referenceNumber = null), void (this.inquiryNumber = "/")
            );
          if (((this.documentChanged = !0), this.data.isLoginEnabled())) {
            o.find(this.data.conf("menu"), function (e) {
              return e.module.match(/ConfigurationOverview|DocumentManager/i);
            }) || ((this.referenceNumber = null), (this.inquiryNumber = "/"));
          } else (this.referenceNumber = null), (this.inquiryNumber = "/");
        },
        setDemandNumber: function (e) {
          this.inquiryNumber = e;
        },
        getDemandNumber: function () {
          return this.inquiryNumber;
        },
        getReferenceNumber: function () {
          return this.referenceNumber;
        },
        setDocNumber: function (e) {
          this.docNumber = e;
        },
        getDocNumber: function () {
          return this.docNumber;
        },
        setDocType: function (e) {
          this.docType = e;
        },
        getDocType: function () {
          return this.docType;
        },
        setCommission: function (e) {
          (this.commission = e), this.resetReferenceNumber();
        },
        getCommission: function () {
          return this.commission;
        },
        getCustomer: function () {
          return this.customer;
        },
        getGeneralMargin: function () {
          return this.generalMargin;
        },
        getAdditionalMargin1: function () {
          return this.additionalMargin1;
        },
        setCustomer: function (e) {
          (this.customer = e), this.resetReferenceNumber();
        },
        getUserDiscount: function () {
          return this.userDiscount;
        },
        setUserDiscount: function (e) {
          this.userDiscount !== e &&
            ((this.userDiscount = e), this.resetReferenceNumber());
        },
        getAdditionalDiscount: function () {
          return this.additionalDiscount;
        },
        setAdditionalDiscount: function (e) {
          this.additionalDiscount !== e &&
            ((this.additionalDiscount = e), this.resetReferenceNumber());
        },
        setCustomText: function (e) {
          (this.customText = e), this.resetReferenceNumber();
        },
        getCustomText: function () {
          return this.customText;
        },
        setAUConf: function (e) {
          this.AUConf = e;
        },
        isAUConf: function () {
          return this.AUConf;
        },
      });
    }
  ),
  define("app/enum/Color", ["require"], function (e) {
    return {
      PANEL: "panelColor",
      FRAME: "frameColor",
      APP: "applicationColor",
      APP2: "application2Color",
      CRTE: "crteColor",
      DFRAME: "dframeColor",
      DFRAME2: "dframe2Color",
      GFRAME: "gframeColor",
      CASSETTE: "cassetteColor",
      WING: "wingColor",
      PANEL2: "panel2Color",
      PANEL3: "panel3Color",
      PANEL_INSIDE: "insidePanelColor",
      FRAME_INSIDE: "insideFrameColor",
      APP_INSIDE: "insideApplicationColor",
      APP2_INSIDE: "insideApplication2Color",
      CRTE_INSIDE: "insideCrteColor",
      DFRAME_INSIDE: "insideDframeColor",
      DFRAME2_INSIDE: "insideDframe2Color",
      GFRAME_INSIDE: "insideGframeColor",
      CASSETTE_INSIDE: "insideCassetteColor",
      WING_INSIDE: "insideWingColor",
      PANEL2_INSIDE: "insidePanel2Color",
      PANEL3_INSIDE: "insidePanel3Color",
    };
  }),
  define("app/enum/FrameType", ["require"], function (e) {
    return {
      SINGLE: "SINGLE",
      SINGLE_LEFT: "SINGLE_LEFT",
      SINGLE_RIGHT: "SINGLE_RIGHT",
      SINGLE_LEFT_RIGHT: "SINGLE_LEFT_RIGHT",
      SINGLE_TOP: "SINGLE_TOP",
      SINGLE_TOP_LEFT: "SINGLE_TOP_LEFT",
      SINGLE_TOP_VERTICAL_LEFT: "SINGLE_TOP_VERTICAL_LEFT",
      SINGLE_TOP_RIGHT: "SINGLE_TOP_RIGHT",
      SINGLE_TOP_VERTICAL_RIGHT: "SINGLE_TOP_VERTICAL_RIGHT",
      SINGLE_TOP_LEFT_RIGHT: "SINGLE_TOP_LEFT_RIGHT",
      SINGLE_TOP_VERTICAL_LEFT_RIGHT: "SINGLE_TOP_VERTICAL_LEFT_RIGHT",
      SINGLE_2LEFT: "SINGLE_2LEFT",
      SINGLE_2RIGHT: "SINGLE_2RIGHT",
      SINGLE_TOP_2LEFT: "SINGLE_TOP_2LEFT",
      SINGLE_TOP_2RIGHT: "SINGLE_TOP_2RIGHT",
      DOUBLE: "DOUBLE",
      DOUBLE_LEFT: "DOUBLE_LEFT",
      DOUBLE_RIGHT: "DOUBLE_RIGHT",
      DOUBLE_LEFT_RIGHT: "DOUBLE_LEFT_RIGHT",
      DOUBLE_TOP: "DOUBLE_TOP",
      DOUBLE_TOP_LEFT: "DOUBLE_TOP_LEFT",
      DOUBLE_TOP_RIGHT: "DOUBLE_TOP_RIGHT",
      DOUBLE_TOP_LEFT_RIGHT: "DOUBLE_TOP_LEFT_RIGHT",
      DOUBLE_TOP_VERTICAL_LEFT_RIGHT: "DOUBLE_TOP_VERTICAL_LEFT_RIGHT",
      DOUBLE_MIDDLE: "DOUBLE_MIDDLE",
      DOUBLE_TOP_MIDDLE: "DOUBLE_TOP_MIDDLE",
      DOUBLE_NO_MIDDLE_FRAME: "DOUBLE_NO_MIDDLE_FRAME",
      DOUBLE_LEFT_NO_MIDDLE_FRAME: "DOUBLE_LEFT_NO_MIDDLE_FRAME",
      DOUBLE_RIGHT_NO_MIDDLE_FRAME: "DOUBLE_RIGHT_NO_MIDDLE_FRAME",
      DOUBLE_LEFT_RIGHT_NO_MIDDLE_FRAME: "DOUBLE_LEFT_RIGHT_NO_MIDDLE_FRAME",
      DOUBLE_TOP_NO_MIDDLE_FRAME: "DOUBLE_TOP_NO_MIDDLE_FRAME",
      DOUBLE_TOP_LEFT_NO_MIDDLE_FRAME: "DOUBLE_TOP_LEFT_NO_MIDDLE_FRAME",
      DOUBLE_TOP_RIGHT_NO_MIDDLE_FRAME: "DOUBLE_TOP_RIGHT_NO_MIDDLE_FRAME",
      DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME:
        "DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME",
    };
  }),
  define(
    "app/models/ItemModel",
    ["require", "class", "app/enum/Color", "app/enum/FrameType"],
    function (e) {
      var t = e("class"),
        i = e("app/enum/Color"),
        o = e("app/enum/FrameType"),
        s = null,
        n = t.extend({
          init: function (e) {
            _.bindAll(
              this,
              "setBauformItems",
              "setOnDoorDataItems",
              "setProfileItems",
              "expressionProps",
              "partnerExpressionProps",
              "getItems",
              "resetToDefault"
            ),
              (this.data = e);
          },
          expressionProps: function () {
            return {
              material: this.data.cdd.getMaterial(),
              model: this.data.dd("model"),
              category: this.data.dd("category"),
              serie: this.data.dd("serie"),
              profile: this.data.cdd.getProfile(),
              isSide: this.data.isLeftFrame() || this.data.isRightFrame(),
              isLeft: this.data.isLeftFrame(),
              isRight: this.data.isRightFrame(),
              isTop: this.data.isTopFrame(),
              canSetMotiveGlass: this.data.dd("canSetMotiveGlass"),
              glassPart: this.data.cdd.glassPart,
              width: this.data.cdd.getWidth(),
              height: this.data.cdd.getHeight(),
              sideModel: this.data.cdd.sideModel,
              userGroup: this.data.userData
                ? this.data.userData.userGroup
                : null,
              package: this.data.cdd.getPackage(),
              secureLatch: this.data.cdd.getSecureLatch(),
              accessControl: this.data.cdd.getAccessControl(),
            };
          },
          getItems: function (e, t, i) {
            var o = {},
              s = _.extend(
                this.expressionProps(),
                this.partnerExpressionProps(),
                t
              );
            return (
              _.forEach(
                this.data.conf("items"),
                function (t) {
                  _.contains(e, t.itemType) &&
                    ((t.visibleExpression &&
                      !this.data.evalExpression(t.visibleExpression, s)) ||
                      ((!i ||
                        (t.defaultExpression &&
                          this.data.evalExpression(t.defaultExpression, s))) &&
                        (o[t.itemType]
                          ? o[t.itemType].push(t)
                          : (o[t.itemType] = [t]))));
                },
                this
              ),
              o
            );
          },
          resetToDefault: function (e) {
            if (e && 0 !== e.length) {
              this.data.cdd.removeItemsList(e);
              var t = this.getItems(e, { glassPart: "all" }, !0);
              _.each(
                e,
                function (e) {
                  t[e] && t[e].length > 0 && this.data.cdd.setItem(t[e][0]);
                },
                this
              );
            }
          },
          resetUnavailableItems: function (e) {
            _.each(
              e,
              function (e) {
                var t = this.data.getItem([e], null),
                  i = this.data.cdd.getItems(e);
                _.each(
                  i,
                  function (i) {
                    var o = !1;
                    null != t[e] &&
                      _.each(
                        t[e],
                        function (e) {
                          i.code === e.code && (o = !0);
                        },
                        this
                      ),
                      o || this.data.cdd.removeItem(i);
                  },
                  this
                );
              },
              this
            );
          },
          resetDisabledItems: function (e) {
            _.each(
              e,
              function (e) {
                var t = this.data.getItem([e], null),
                  i = this.data.cdd.getItems(e);
                _.each(
                  i,
                  function (i) {
                    var o = !1;
                    null != t[e] &&
                      _.each(
                        t[e],
                        function (e) {
                          i.code === e.code &&
                            (o = this.data.evalExpression(
                              e.disabledExpression,
                              this.partnerExpressionProps()
                            ));
                        },
                        this
                      ),
                      o || this.data.cdd.removeItem(i);
                  },
                  this
                );
              },
              this
            );
          },
          bauformItems: [],
          onDoorDataItems: [],
          profileItems: [],
          sideModelItems: [],
          packageItems: [],
          dimensionItems: [],
          equipmentItems: [],
          secureLatchItems: [],
          sideGlassItems: [],
          upperGlassItems: [],
          imageRequestItems: [],
          setBauformItems: function () {
            this.resetToDefault(this.bauformItems);
          },
          setOnDoorDataItems: function () {
            this.resetToDefault(this.onDoorDataItems);
          },
          setProfileItems: function () {
            this.resetToDefault(this.profileItems);
          },
          setSideModelItems: function () {
            this.resetToDefault(this.sideModelItems);
          },
          setPackageItems: function () {
            this.resetToDefault(this.packageItems);
          },
          setDimensionItems: function () {
            this.resetToDefault(this.dimensionItems);
          },
          setEquipmentItems: function () {},
          setSecureLatchItems: function () {
            this.resetUnavailableItems(this.secureLatchItems);
          },
          onItemChange: function (e, t) {},
          setSideGlassItems: function () {
            this.resetToDefault(this.sideGlassItems);
          },
          setUpperGlassItems: function () {
            this.resetToDefault(this.upperGlassItems);
          },
          partnerExpressionProps: function () {
            return {};
          },
        });
      return {
        ItemHeinzmann: n.extend({
          equipmentItems: [
            "extensionProfileLeft",
            "extensionProfileRight",
            "extensionProfileTop",
          ],
          setEquipmentItems: function () {
            this.resetToDefault(this.equipmentItems);
          },
        }),
        ItemPerito: n.extend({ onDoorDataItems: ["panelThickness"] }),
        ItemGugelfuss: n.extend({
          bauformItems: [
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
          ],
          onDoorDataItems: [
            "glassSecurityDoor2",
            "glassSecurityDoor",
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "panelOversize",
            "floorProfile",
            "floorProfile2",
            "floorProfileGroup",
            "bauturblatt",
            "installationMounting",
          ],
          profileItems: ["glassSecurityDoor2", "glazingDoor"],
          dimensionItems: ["panelOversize"],
          equipmentItems: ["opener", "opener2"],
          onItemChange: function (e, t) {
            e.itemType.match(/floorProfileGroup/gi) &&
              !t &&
              this.resetToDefault(["floorProfile", "floorProfile2"]);
          },
          partnerExpressionProps: function () {
            var e =
                null != this.data.userData ? this.data.userData.username : null,
              t =
                null != this.data.userData
                  ? this.data.userData.priceVersion
                  : null;
            return {
              gugelfussUser: !!e && !!e.match(/gugelfuss|illerplastic/),
              b2b: null != t && "B2B" === t.toUpperCase(),
            };
          },
        }),
        ItemGermanWindows: n.extend({
          onDoorDataItems: ["glazingDoor", "glazingSide", "glazingTop"],
        }),
        ItemHefro: n.extend({
          onDoorDataItems: ["glazingDoor", "glazingSide", "glazingTop"],
          bauformItems: ["otherEquipment"],
          partnerExpressionProps: function () {
            return { isDoubleFrame: !!this.data.isDoubleFrame() };
          },
          setBauformItems: function () {
            this.resetUnavailableItems(this.bauformItems);
          },
        }),
        ItemAlbohn: n.extend({
          onDoorDataItems: [
            "glassSecurityDoor",
            "glassSecurityDoorMiddle",
            "glassSecuritySide",
          ],
          packageItems: [
            "glassSecurityDoor",
            "glassSecurityDoorMiddle",
            "glassSecuritySide",
          ],
        }),
        ItemAluhaus: n.extend({
          packageItems: [
            "glassSecurityDoor",
            "glassSecurityDoorMiddle",
            "glassSecuritySide",
          ],
        }),
        ItemThiral: n.extend({
          profileItems: [
            "extensionProfileLeft",
            "extensionProfileRight",
            "extensionProfileTop",
          ],
        }),
        ItemPlasma: n.extend({
          profileItems: [
            "extensionProfileLeft",
            "extensionProfileRight",
            "extensionProfileTop",
          ],
          bauformItems: [
            "miscellaneousEquipment2",
            "miscellaneousEquipment",
            "securityBars1",
            "securityBars2",
          ],
          onDoorDataItems: [
            "miscellaneousEquipment2",
            "miscellaneousEquipment",
            "otherEquipment",
          ],
          sideGlassItems: [
            "miscellaneousEquipment2",
            "miscellaneousEquipment",
            "glassSecuritySide",
          ],
          upperGlassItems: ["glassSecurityTop", "miscellaneousEquipment"],
          imageRequestItems: [
            "miscellaneousEquipment2",
            "miscellaneousEquipment",
          ],
          partnerExpressionProps: function () {
            return {
              sideGlass: this.data.cdd.getSideGlass(),
              upperGlass: this.data.cdd.getUpperGlass(),
            };
          },
        }),
        ItemAluks: n.extend({
          onDoorDataItems: ["glazingDoor", "panelOversize", "sideOversize"],
          dimensionItems: ["panelOversize", "sideOversize"],
          profileItems: ["lockStandard"],
          setProfileItems: function () {
            this.data.cdd.getProfile().match(/ETH 75/) &&
              this.resetToDefault(this.profileItems);
          },
        }),
        ItemSaplast: n.extend({
          profileItems: [
            "extensionProfileLeft",
            "extensionProfileRight",
            "extensionProfileSymmetric",
            "extensionProfileTop",
          ],
          setProfileItems: function () {
            this.resetToDefault(this.profileItems);
          },
        }),
        ItemHoening: n.extend({
          onDoorDataItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecurityDoorMiddle2",
            "glassSecurityDoorMiddle",
            "glassSecurityDoor2",
            "glassSecurityDoor3",
            "glassSecurityDoor4",
            "glazingMiddle",
            "glassSecuritySide",
            "glassSecuritySide2",
            "glassSecuritySide3",
            "glassSecurityTop",
            "glassSecurityTop2",
            "glassSecurityTop3",
          ],
          profileItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecurityDoorMiddle2",
            "glassSecurityDoorMiddle",
            "glassSecurityDoor2",
            "glassSecurityDoor3",
            "glassSecurityDoor4",
            "glazingMiddle",
            "glassSecuritySide",
            "glassSecuritySide2",
            "glassSecuritySide3",
            "glassSecurityTop",
            "glassSecurityTop2",
            "glassSecurityTop3",
          ],
        }),
        ItemVRP: n.extend({
          bauformItems: ["glazingSide", "glazingTop"],
          onDoorDataItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "panelOversize",
            "sideOversize",
          ],
          dimensionItems: ["panelOversize", "sideOversize"],
          profileItems: ["lockStandard"],
          setProfileItems: function () {
            _.contains(
              ["AEI67", "AFA87", "AAEI67"],
              this.data.cdd.getProfile()
            ) && this.resetToDefault(this.profileItems);
          },
        }),
        ItemDPI: n.extend({
          bauformItems: ["glazingSide", "glazingTop", "glazingDoor"],
          onDoorDataItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
            "frameFeature",
          ],
          dimensionItems: ["panelOversize", "sideOversize"],
          profileItems: [
            "frameProfileGroup",
            "extensionProfileRepeatLeft",
            "extensionProfileRepeatRight",
            "extensionProfileRepeatTop",
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
            "frameFeature",
          ],
          secureLatchItems: [
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
          ],
        }),
        ItemDoors: n.extend({
          onDoorDataItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecurityDoorInside",
            "glassSecuritySide",
            "glassSecuritySideInside",
            "lockStandard",
            "specialWing",
          ],
          profileItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecurityDoorMiddle",
            "glassSecurityDoorInside",
            "glassSecuritySide",
            "glassSecuritySideMiddle",
            "glassSecuritySideInside",
            "glassSecurityTop",
            "glassSecurityTopMiddle",
            "glassSecurityTopInside",
          ],
          bauformItems: [
            "glazingSide",
            "glazingTop",
            "glassSecuritySide",
            "glassSecuritySideMiddle",
            "glassSecuritySideInside",
            "glassSecurityTop",
            "glassSecurityTopMiddle",
            "glassSecurityTopInside",
          ],
          sideModelItems: [
            "glazingSide",
            "glassSecuritySide",
            "glassSecuritySideMiddle",
            "glassSecuritySideInside",
          ],
          onItemChange: function (e) {
            e.itemType.match(/glazingDoor/gi)
              ? this.resetToDefault([
                  "glassSecurityDoor",
                  "glassSecurityDoorMiddle",
                  "glassSecurityDoorInside",
                ])
              : e.itemType.match(/glazingSide/gi)
              ? this.resetToDefault([
                  "glassSecuritySide",
                  "glassSecuritySideMiddle",
                  "glassSecuritySideInside",
                ])
              : e.itemType.match(/glazingTop/gi) &&
                this.resetToDefault([
                  "glassSecurityTop",
                  "glassSecurityTopMiddle",
                  "glassSecurityTopInside",
                ]);
          },
          setBauformItems: function () {
            this._super(),
              this.data.cdd.getFrameType() != o.SINGLE ||
                this.data.dd("canSetMotiveGlass") ||
                this.data.cdd.removeItems("altitude");
          },
        }),
        ItemNiveau: n.extend({
          onDoorDataItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecurityDoorInside",
            "glassSecuritySide",
            "glassSecuritySideInside",
            "lockStandard",
            "specialWing",
          ],
          profileItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecurityDoorMiddle",
            "glassSecurityDoorInside",
            "glassSecuritySide",
            "glassSecuritySideMiddle",
            "glassSecuritySideInside",
            "glassSecurityTop",
            "glassSecurityTopMiddle",
            "glassSecurityTopInside",
          ],
          bauformItems: [
            "glazingSide",
            "glazingTop",
            "glassSecuritySide",
            "glassSecuritySideMiddle",
            "glassSecuritySideInside",
            "glassSecurityTop",
            "glassSecurityTopMiddle",
            "glassSecurityTopInside",
          ],
          packageItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "lockStandard",
          ],
          sideModelItems: [
            "glazingSide",
            "glassSecuritySide",
            "glassSecuritySideMiddle",
            "glassSecuritySideInside",
          ],
          onItemChange: function (e) {
            e.itemType.match(/glazingDoor/gi)
              ? this.resetToDefault([
                  "glassSecurityDoor",
                  "glassSecurityDoorMiddle",
                  "glassSecurityDoorInside",
                ])
              : e.itemType.match(/glazingSide/gi)
              ? this.resetToDefault([
                  "glassSecuritySide",
                  "glassSecuritySideMiddle",
                  "glassSecuritySideInside",
                ])
              : e.itemType.match(/glazingTop/gi) &&
                this.resetToDefault([
                  "glassSecurityTop",
                  "glassSecurityTopMiddle",
                  "glassSecurityTopInside",
                ]);
          },
          setBauformItems: function () {
            this._super(),
              this.data.cdd.getFrameType() != o.SINGLE ||
                this.data.dd("canSetMotiveGlass") ||
                this.data.cdd.removeItems("altitude");
          },
        }),
        ItemCetih: n.extend({
          bauformItems: ["glassSecuritySide", "glassSecurityTop"],
          onDoorDataItems: [
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
          ],
          packageItems: ["glassSecurityDoor"],
        }),
        ItemKneer: n.extend({
          dimensionItems: ["panelOversize", "sideOversize"],
          onDoorDataItems: ["cylinder"],
          equipmentItems: ["otherEquipment"],
          setEquipmentItems: function () {
            this.resetUnavailableItems(this.equipmentItems);
          },
        }),
        ItemPantelos: n.extend({
          dimensionItems: ["panelOversize"],
          onDoorDataItems: ["hingeSecurity"],
          profileItems: ["hingeSecurity"],
        }),
        ItemRyterna: n.extend({ dimensionItems: ["panelOversize"] }),
        ItemKneerWood: n.extend({
          bauformItems: ["glassSecurityLeft", "glassSecurityRight"],
          onDoorDataItems: [
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
            "glassSecurityDoorMiddle",
            "glassSecuritySideMiddle",
            "glassSecurityTopMiddle",
          ],
          profileItems: ["glassSecurityLeft", "glassSecurityRight"],
          dimensionItems: [
            "glassSecurityLeft",
            "glassSecurityRight",
            "panelOversize",
          ],
        }),
        ItemKoester: n.extend({
          bauformItems: ["altitude"],
          onDoorDataItems: ["altitude", "frameProfileGroup"],
          equipmentItems: ["miscellaneousEquipment"],
          setEquipmentItems: function () {
            this.resetDisabledItems(["miscellaneousEquipment"]);
          },
          onItemChange: function (e) {
            e.itemType.match(/^floorProfileGroup$/gi) &&
              this.resetToDefault(["floorProfileRB"]);
          },
          partnerExpressionProps: function () {
            var e = this.data.cdd.getColor(i.PANEL);
            return {
              cddFloorProfileGroup: this.data.cdd.getItem("floorProfileGroup"),
              fingerprint: this.data.cdd.getFingerprint(),
              color: e ? e.code : null,
              colorGroup: e ? e.group : null,
            };
          },
          packageItems: ["frameProfileGroup"],
        }),
        ItemTopten: n.extend({
          setBauformItems: function () {
            this.data.cdd.getFrameType() !== o.SINGLE ||
              this.data.dd("canSetMotiveGlass") ||
              this.data.cdd.removeItems("altitude");
          },
        }),
        ItemWicona: n.extend({
          onDoorDataItems: ["cableExtension", "securityPackage"],
        }),
        ItemHeimhaus: n.extend({ onDoorDataItems: ["glazingDoor"] }),
        ItemBlecher: n.extend({
          bauformItems: [
            "glazingSide",
            "glazingTop",
            "glazingDoor",
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
          ],
          onDoorDataItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
            "frameFeature",
          ],
          dimensionItems: ["panelOversize", "sideOversize"],
          profileItems: [
            "glazingDoor",
            "glazingSide",
            "glazingTop",
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
            "frameFeature",
          ],
          secureLatchItems: [
            "glassSecurityDoor",
            "glassSecuritySide",
            "glassSecurityTop",
          ],
          partnerExpressionProps: function () {
            return {
              RC2Ausstattung: !!this.data.cdd.getItem(
                "miscellaneousEquipment2",
                "RC2 Ausstattung"
              ),
            };
          },
          onItemChange: function (e, t) {
            "RC2 Ausstattung" === e.code &&
              this.resetToDefault([
                "glassSecurityDoor",
                "glassSecuritySide",
                "glassSecurityTop",
              ]);
          },
        }),
        ItemDelutech: n.extend({
          bauformItems: ["glassSecuritySide", "glassSecurityTop"],
          onDoorDataItems: ["glassSecurityDoor"],
        }),
        getInstance: function (e) {
          return (
            s ||
              (s = e.conf("hasItems")
                ? e.conf("itemModelClass")
                  ? new this[e.conf("itemModelClass")](e)
                  : new n(e)
                : null),
            s
          );
        },
      };
    }
  ),
  define("app/enum/ColorType", ["require"], function (e) {
    return { WOOD: "wood", RAL: "ral" };
  }),
  define("app/enum/Wing", ["require"], function (e) {
    return {
      BOTH_VISIBLE: "both_visible",
      IN_VISIBLE: "in_visible",
      HIDDEN: "hidden",
      NONE: "none",
      NONE2: "none2",
      isOutside: function (e) {
        return e == this.BOTH_VISIBLE || e == this.NONE2;
      },
      isInside: function (e) {
        return (
          e == this.BOTH_VISIBLE || e == this.IN_VISIBLE || e == this.NONE2
        );
      },
    };
  }),
  define("app/enum/DocType", ["require"], function (e) {
    return {
      DEMAND: "DEMAND",
      PRINT: "PRINT",
      REFERENCE_NUMBER: "REFERENCE_NUMBER",
      ORDER: "ORDER",
      OFFER: "OFFER",
    };
  }),
  define(
    "app/util/Labels",
    ["require", "class", "underscore", "app/util/Util"],
    function (e) {
      var t = e("class"),
        i = e("underscore"),
        o = e("app/util/Util"),
        s = null,
        n = t.extend({
          labels: null,
          init: function (e) {
            (this.labels = e), o.log("Labels: %O", this.labels);
          },
          get: function (e, t) {
            if (!e) return null;
            if (t) {
              var s = e + "_" + t.toUpperCase(),
                n = this.labels[s];
              if (n) return n;
              if (
                (o.debug("Label not found! Searching key", s),
                (s = i.findKey(this.labels, function (e, t) {
                  return t.toUpperCase() === s.toUpperCase();
                })))
              )
                return this.labels[s];
            } else if (this.labels[e]) return this.labels[e];
            return t;
          },
          set: function (e, t) {
            if (!e || !t) return null;
            this.labels[e] = t;
          },
          exist: function (e, t) {
            return !!e && !!t && !!s.labels[e + "_" + t.toUpperCase()];
          },
        });
      return {
        create: function (e) {
          null == s && (s = new n(e));
        },
        get: function (e, t) {
          if (s) return s.get(e, t);
        },
        set: function (e, t) {
          s.set(e, t);
        },
        exist: function (e, t) {
          return s.exist(e, t);
        },
        all: function () {
          return s.labels;
        },
        findKey: function (e, t) {
          return s.findKey(e, t);
        },
      };
    }
  ),
  define(
    "app/util/ImageLoader",
    ["require", "underscore", "jquery", "class", "backbone", "imagesloaded"],
    function (e) {
      var t = e("underscore"),
        i = e("jquery"),
        o = e("class"),
        s = e("backbone"),
        n = e("imagesloaded");
      return o.extend({
        init: function (e) {
          t.bindAll(this, "onDone", "onFail"),
            t.extend(this, s.Events),
            (this.dirty = !1),
            e && (this.urls = e);
        },
        add: function (e) {
          (this.urls && !this.dirty) || ((this.urls = []), (this.dirty = !1)),
            this.urls.push(e);
        },
        url: function (e) {
          this.add(e);
        },
        load: function () {
          var e = [];
          t.each(
            this.urls,
            function (t) {
              var i = new Image();
              t.crossOrigin && (i.crossOrigin = t.crossOrigin), e.push(i);
            },
            this
          ),
            n(e).on("done", this.onDone).on("fail", this.onFail),
            t.each(
              e,
              function (e, t) {
                i(e).attr("src", this.urls[t].url);
              },
              this
            );
        },
        onDone: function (e) {
          (e.urls = this.urls),
            (e.getImageByType = function (e) {
              if (0 == this.urls.length) return null;
              for (var t = 0, i = this.urls.length; t < i; t++)
                if (this.urls[t].type == e) return this.images[t];
              return null;
            }),
            (this.dirty = !0),
            this.trigger("done", e);
        },
        onFail: function (e) {
          (this.dirty = !0), this.trigger("error", e);
        },
        clean: function () {
          (this.urls = []), (this.dirty = !1);
        },
      });
    }
  ),
  define(
    "app/tracking/analytics",
    ["require", "underscore", "app/util/Util", "app/profile", "class"],
    function (e) {
      var t = e("underscore"),
        i = e("app/util/Util"),
        o = e("app/profile");
      return e("class").extend({
        init: function (s, n) {
          if (
            ((this.data = n),
            (this.trackerId = this.data.conf("gaTrackerId")),
            !o.isDevMode())
          ) {
            t.bindAll(this, "onDone", "sendEvent"),
              (this.ready = !1),
              (window.GoogleAnalyticsObject = "ga"),
              (window.ga =
                window.ga ||
                function () {
                  (window.ga.q = window.ga.q || []).push(arguments),
                    (window.ga.l = 1 * new Date());
                }),
              window.ga("create", "UA-51347780-3", "auto");
            var d = parseInt(i.getCookie("_conf_cookie")) || 0,
              r = this.data.conf("crossSiteTrackingDomains");
            null != r && r.length > 0
              ? this.trackerId &&
                (window.ga("create", {
                  trackingId: this.trackerId,
                  name: "partner",
                  allowLinker: !0,
                }),
                window.ga("partner.require", "linker"),
                window.ga("partner.linker:autoLink", r),
                window.ga("partner.set", "anonymizeIp", !d),
                window.ga("partner.send", "pageview"))
              : this.trackerId &&
                (window.ga("create", this.trackerId, { name: "partner" }),
                window.ga("partner.set", "anonymizeIp", !d),
                window.ga("partner.send", "pageview")),
              window.ga("set", "anonymizeIp", !d),
              window.ga("send", "pageview"),
              (this.siteUrl = i
                .getServerNameWithPort(window.location.href)
                .replace("www.", "")),
              this.sendEvent(
                "Configurator",
                "Configurator loaded",
                this.siteUrl
              ),
              e(["ga"], this.onDone);
          }
        },
        onDone: function () {
          this.ready = !0;
        },
        sendEvent: function (e, t, i, s) {
          if (!o.isDevMode() && this.ready) {
            var n = this.siteUrl,
              d = this.data.conf("trackingKey");
            d && (n = d + "_" + this.siteUrl),
              window.ga("send", "event", n, t, i, s);
            var r = this.data.conf("crossSiteTrackingDomains");
            this.trackerId && r && r.length > 0
              ? window.ga("partner.send", "event", "Konfigurator", t, i, s)
              : this.trackerId &&
                window.ga("partner.send", "event", n, t, i, s);
          }
        },
        setAnonymizeIP: function (e) {
          !o.isDevMode() &&
            this.ready &&
            (window.ga("set", "anonymizeIp", !e),
            this.trackerId && window.ga("partner.set", "anonymizeIp", !e));
        },
      });
    }
  ),
  define("lib/text", ["module"], function (e) {
    "use strict";
    var t,
      i,
      o,
      s,
      n,
      d = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
      r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
      l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
      a = "undefined" != typeof location && location.href,
      c = a && location.protocol && location.protocol.replace(/\:/, ""),
      h = a && location.hostname,
      u = a && (location.port || void 0),
      g = {},
      p = (e.config && e.config()) || {};
    return (
      (t = {
        version: "2.0.12",
        strip: function (e) {
          if (e) {
            e = e.replace(r, "");
            var t = e.match(l);
            t && (e = t[1]);
          } else e = "";
          return e;
        },
        jsEscape: function (e) {
          return e
            .replace(/(['\\])/g, "\\$1")
            .replace(/[\f]/g, "\\f")
            .replace(/[\b]/g, "\\b")
            .replace(/[\n]/g, "\\n")
            .replace(/[\t]/g, "\\t")
            .replace(/[\r]/g, "\\r")
            .replace(/[\u2028]/g, "\\u2028")
            .replace(/[\u2029]/g, "\\u2029");
        },
        createXhr:
          p.createXhr ||
          function () {
            var e, t, i;
            if ("undefined" != typeof XMLHttpRequest)
              return new XMLHttpRequest();
            if ("undefined" != typeof ActiveXObject)
              for (t = 0; t < 3; t += 1) {
                i = d[t];
                try {
                  e = new ActiveXObject(i);
                } catch (e) {}
                if (e) {
                  d = [i];
                  break;
                }
              }
            return e;
          },
        parseName: function (e) {
          var t,
            i,
            o,
            s = !1,
            n = e.indexOf("."),
            d = 0 === e.indexOf("./") || 0 === e.indexOf("../");
          return (
            -1 !== n && (!d || n > 1)
              ? ((t = e.substring(0, n)), (i = e.substring(n + 1, e.length)))
              : (t = e),
            (o = i || t),
            (n = o.indexOf("!")),
            -1 !== n &&
              ((s = "strip" === o.substring(n + 1)),
              (o = o.substring(0, n)),
              i ? (i = o) : (t = o)),
            { moduleName: t, ext: i, strip: s }
          );
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (e, i, o, s) {
          var n,
            d,
            r,
            l = t.xdRegExp.exec(e);
          return (
            !l ||
            ((n = l[2]),
            (d = l[3]),
            (d = d.split(":")),
            (r = d[1]),
            (d = d[0]),
            !(
              (n && n !== i) ||
              (d && d.toLowerCase() !== o.toLowerCase()) ||
              ((r || d) && r !== s)
            ))
          );
        },
        finishLoad: function (e, i, o, s) {
          (o = i ? t.strip(o) : o), p.isBuild && (g[e] = o), s(o);
        },
        load: function (e, i, o, s) {
          if (s && s.isBuild && !s.inlineText) return void o();
          p.isBuild = s && s.isBuild;
          var n = t.parseName(e),
            d = n.moduleName + (n.ext ? "." + n.ext : ""),
            r = i.toUrl(d),
            l = p.useXhr || t.useXhr;
          if (0 === r.indexOf("empty:")) return void o();
          !a || l(r, c, h, u)
            ? t.get(
                r,
                function (i) {
                  t.finishLoad(e, n.strip, i, o);
                },
                function (e) {
                  o.error && o.error(e);
                }
              )
            : i([d], function (e) {
                t.finishLoad(n.moduleName + "." + n.ext, n.strip, e, o);
              });
        },
        write: function (e, i, o, s) {
          if (g.hasOwnProperty(i)) {
            var n = t.jsEscape(g[i]);
            o.asModule(
              e + "!" + i,
              "define(function () { return '" + n + "';});\n"
            );
          }
        },
        writeFile: function (e, i, o, s, n) {
          var d = t.parseName(i),
            r = d.ext ? "." + d.ext : "",
            l = d.moduleName + r,
            a = o.toUrl(d.moduleName + r) + ".js";
          t.load(
            l,
            o,
            function (i) {
              var o = function (e) {
                return s(a, e);
              };
              (o.asModule = function (e, t) {
                return s.asModule(e, a, t);
              }),
                t.write(e, l, o, n);
            },
            n
          );
        },
      }),
      "node" === p.env ||
      (!p.env &&
        "undefined" != typeof process &&
        process.versions &&
        process.versions.node &&
        !process.versions["node-webkit"])
        ? ((i = require.nodeRequire("fs")),
          (t.get = function (e, t, o) {
            try {
              var s = i.readFileSync(e, "utf8");
              0 === s.indexOf("\ufeff") && (s = s.substring(1)), t(s);
            } catch (e) {
              o && o(e);
            }
          }))
        : "xhr" === p.env || (!p.env && t.createXhr())
        ? (t.get = function (e, i, o, s) {
            var n,
              d = t.createXhr();
            if ((d.open("GET", e, !0), s))
              for (n in s)
                s.hasOwnProperty(n) &&
                  d.setRequestHeader(n.toLowerCase(), s[n]);
            p.onXhr && p.onXhr(d, e),
              (d.onreadystatechange = function (t) {
                var s, n;
                4 === d.readyState &&
                  ((s = d.status || 0),
                  s > 399 && s < 600
                    ? ((n = new Error(e + " HTTP status: " + s)),
                      (n.xhr = d),
                      o && o(n))
                    : i(d.responseText),
                  p.onXhrComplete && p.onXhrComplete(d, e));
              }),
              d.send(null);
          })
        : "rhino" === p.env ||
          (!p.env &&
            "undefined" != typeof Packages &&
            "undefined" != typeof java)
        ? (t.get = function (e, t) {
            var i,
              o,
              s = new java.io.File(e),
              n = java.lang.System.getProperty("line.separator"),
              d = new java.io.BufferedReader(
                new java.io.InputStreamReader(
                  new java.io.FileInputStream(s),
                  "utf-8"
                )
              ),
              r = "";
            try {
              for (
                i = new java.lang.StringBuffer(),
                  o = d.readLine(),
                  o &&
                    o.length() &&
                    65279 === o.charAt(0) &&
                    (o = o.substring(1)),
                  null !== o && i.append(o);
                null !== (o = d.readLine());

              )
                i.append(n), i.append(o);
              r = String(i.toString());
            } finally {
              d.close();
            }
            t(r);
          })
        : ("xpconnect" === p.env ||
            (!p.env &&
              "undefined" != typeof Components &&
              Components.classes &&
              Components.interfaces)) &&
          ((o = Components.classes),
          (s = Components.interfaces),
          Components.utils.import("resource://gre/modules/FileUtils.jsm"),
          (n = "@mozilla.org/windows-registry-key;1" in o),
          (t.get = function (e, t) {
            var i,
              d,
              r,
              l = {};
            n && (e = e.replace(/\//g, "\\")), (r = new FileUtils.File(e));
            try {
              (i = o["@mozilla.org/network/file-input-stream;1"].createInstance(
                s.nsIFileInputStream
              )),
                i.init(r, 1, 0, !1),
                (d = o[
                  "@mozilla.org/intl/converter-input-stream;1"
                ].createInstance(s.nsIConverterInputStream)),
                d.init(
                  i,
                  "utf-8",
                  i.available(),
                  s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER
                ),
                d.readString(i.available(), l),
                d.close(),
                i.close(),
                t(l.value);
            } catch (e) {
              throw new Error(((r && r.path) || "") + ": " + e);
            }
          })),
      t
    );
  }),
  define("lib/text!tpl/h.html", [], function () {
    return "<div><p>pgjwydDHYSdfT566_df$sa466_qwe092dG5T</p></div>";
  }),
  define(
    "app/models/Model",
    [
      "require",
      "backbone",
      "underscore",
      "jquery",
      "app/events/KEvent",
      "class",
      "app/models/Configuration",
      "app/models/PriceData",
      "app/models/Remote",
      "app/models/CurrentDoorData",
      "app/models/ItemModel",
      "json2",
      "app/profile",
      "app/util/Util",
      "app/enum/ColorType",
      "app/enum/Color",
      "app/enum/Wing",
      "app/enum/FrameType",
      "app/enum/DocType",
      "cryptojs.base64",
      "cryptojs.utf",
      "cryptojs.hmacsha",
      "cryptojs.pbkdf2",
      "app/util/Labels",
      "app/util/ImageLoader",
      "app/tracking/analytics",
      "lib/text!tpl/h.html",
    ],
    function (require) {
      var Backbone = require("backbone"),
        _ = require("underscore"),
        $ = require("jquery"),
        KEvent = require("app/events/KEvent"),
        Class = require("class"),
        Configuration = require("app/models/Configuration"),
        PriceData = require("app/models/PriceData"),
        Remote = require("app/models/Remote"),
        CDD = require("app/models/CurrentDoorData"),
        ItemModel = require("app/models/ItemModel"),
        j2 = require("json2"),
        Profile = require("app/profile"),
        Util = require("app/util/Util"),
        ColorType = require("app/enum/ColorType"),
        Color = require("app/enum/Color"),
        Wing = require("app/enum/Wing"),
        FrameType = require("app/enum/FrameType"),
        DocType = require("app/enum/DocType"),
        Cr = require("cryptojs.base64"),
        utf = require("cryptojs.utf"),
        hmac = require("cryptojs.hmacsha"),
        pbkdf2 = require("cryptojs.pbkdf2");
      return (
        (Labels = require("app/util/Labels")),
        (ImageLoader = require("app/util/ImageLoader")),
        (Analytics = require("app/tracking/analytics")),
        (tpl = require("lib/text!tpl/h.html")),
        (instance = null),
        (Model = Class.extend({
          options: {},
          ddr: null,
          panelState: "menu",
          isPanelOpen: !0,
          windowHeight: null,
          windowWidth: null,
          insideDoorElements: [],
          printPDFUrl: null,
          profileList: [],
          defaultEquipmentList: null,
          userData: null,
          priceData: null,
          priceLoading: !1,
          wallPatternImage: null,
          insideWallPatternImage: null,
          itemModel: null,
          init: function (e) {
            _.bindAll(
              this,
              "onConfigurationDone",
              "loadConfiguration",
              "conf",
              "onDoorData",
              "getLabel",
              "onImageDone",
              "onImageError",
              "getInsideDoorData",
              "onInsideDoorData",
              "handleInsideDoorElements",
              "onReferenceLoaded",
              "getAllSidesWidth",
              "checkTopGlassWidth",
              "checkTopGlassHeight"
            ),
              _.extend(this.options, e),
              (this.remote = Remote.getInstance(this)),
              (this.cdd = new CDD(this)),
              (this.loader = new ImageLoader()),
              this.loader.on("done", this.onImageDone),
              this.loader.on("error", this.onImageError),
              (this.h = _.template(tpl)()),
              (this.houseImageLoading = !1),
              (this.houseDoorImageLoading = !1),
              (this.urlVars = Util.getUrlVars());
          },
          getVersion: function () {
            return this.options.version;
          },
          loadConfiguration: function () {
            if (Util.isFramed()) return void alert("Not allowed from frame!");
            this.configuration ||
              ((this.configuration = new Configuration(this.options)),
              this.remote.getConfiguration(this.onConfigurationDone, this));
          },
          onConfigurationDone: function (e) {
            this.configuration.set(e),
              (this.tracker = new Analytics(this.conf(), this));
            var t = "mini-menu ";
            ("ar" != this.conf("lang") && "he" != this.conf("lang")) ||
              (t += "rtl ");
            var i = this.conf("capabilities");
            i &&
              (i.isMobile && (t += "mobile "),
              i.isTablet && (t += "tablet "),
              this.isIE9() && (t += "ie9 "),
              i.isAndroid
                ? (t += "android ")
                : i.isIos
                ? (t += "ios ")
                : i.isWindowsPhone
                ? (t += "windows-phone ")
                : (t += "desktop "),
              i.browser && (t += i.browser)),
              $("html").addClass(t),
              (document.title = "Konfigurator - " + this.getCompanyName()),
              (this.itemModel = ItemModel.getInstance(this)),
              this.cdd.setFrameType(
                this.configuration.get("defaultBauform")
                  ? this.configuration.get("defaultBauform")
                  : "SINGLE"
              ),
              this.urlVars.ref ||
                (this.urlVars.model
                  ? (this.cdd.doorModel = this.urlVars.model)
                  : (this.cdd.doorModel =
                      this.configuration.get("defaultModel"))),
              this.setDefaultDimensions(),
              Labels.create(this.conf("labels")),
              this.configuration.unset("labels"),
              this.prepareMainMenu(),
              this.configuration.get("wallColor") &&
                this.cdd.setWallColor(this.configuration.get("wallColor")),
              this.configuration.get("wallTexture") &&
                (this.wallPatternImage = this.configuration.get("wallTexture")),
              this.configuration.get("insideWallColor") &&
                this.cdd.setInsideWallColor(
                  this.configuration.get("insideWallColor")
                ),
              this.configuration.get("insideWallTexture") &&
                (this.insideWallPatternImage =
                  this.configuration.get("insideWallTexture")),
              (this.cdd.secureLatchOptions = this.conf(
                "secureLatchOptionTypes"
              )),
              this.cdd.setSideGlassGlazing(this.conf("sideGlassGlazing")),
              this.cdd.setUpperGlassGlazing(this.conf("sideGlassGlazing")),
              this.conf("defaultRenderType") &&
                this.cdd.setCustomRenderType(this.conf("defaultRenderType")),
              (this.defaultSideWidthMinChange = !1),
              (this.defaultSideWidthMaxChange = !1),
              null !== this.conf("inactivityTimeout") &&
                this.conf("inactivityTimeout") > 0 &&
                !this.isPriceEnabled() &&
                ((this.inactivity = setTimeout(
                  this.inactivityPopup,
                  1e3 * this.conf("inactivityTimeout")
                )),
                $("body").on(
                  "click",
                  { ctx: this },
                  this.resetInactivityTimeout
                )),
              KEvent.trigger(KEvent.CONFIGURATION, this.configuration);
          },
          getCompanyName: function () {
            var e = this.conf("contactData");
            return e && e.companyName ? e.companyName : "";
          },
          resetInactivityTimeout: function (e) {
            var t = e.data.ctx;
            clearTimeout(t.inactivity),
              (t.inactivity = setTimeout(
                t.inactivityPopup,
                1e3 * t.configuration.get("inactivityTimeout")
              ));
          },
          inactivityPopup: function () {
            KEvent.trigger(KEvent.CLOSE_POPUP),
              KEvent.trigger(KEvent.KEYBOARD_OFF, "ESC_INQUIRY"),
              $("body").off("click"),
              KEvent.trigger(KEvent.OPEN_POPUP, {
                module: "app/views/main/popup/InquiryForm2",
                partnerProps: { order: !1 },
              }),
              KEvent.trigger(KEvent.KEYBOARD_ON, {
                uniqueKey: "ESC_INQUIRY",
                keyCode: 27,
                triggerEvent: "CLOSE_POPUP",
                destroyable: !0,
              });
          },
          prepareMainMenu: function () {
            this.conf("menu") &&
              (_.each(this.conf("menu"), function (e) {
                e.state.match(/secureLatch/gi) && (e.state = "secureLatch");
              }),
              Profile.isDevMode() &&
                this.conf("menu").push({
                  label: "Developer Tools",
                  module: "app/views/main/tools/DeveloperTools",
                  state: "devtools",
                  privzeto: !1,
                  index: this.conf("menu").length,
                }));
          },
          setDefaultDimensions: function () {
            this.configuration.get("defaultDoorWidth") &&
              (this.cdd.setWidth(this.configuration.get("defaultDoorWidth")),
              this.cdd.setPanel2Width(
                this.configuration.get("defaultDoorWidth")
              ),
              (this.cdd.defaultDoorWidth =
                this.configuration.get("defaultDoorWidth"))),
              this.configuration.get("defaultDoorHeight") &&
                (this.cdd.setHeight(
                  this.configuration.get("defaultDoorHeight")
                ),
                (this.cdd.defaultDoorHeight =
                  this.configuration.get("defaultDoorHeight"))),
              this.configuration.get("defaultSideWidth") &&
                (this.cdd.setLeftWidth(
                  this.configuration.get("defaultSideWidth")
                ),
                this.cdd.setRightWidth(
                  this.configuration.get("defaultSideWidth")
                ),
                (this.cdd.defaultSideWidth =
                  this.configuration.get("defaultSideWidth"))),
              this.configuration.get("defaultTopHeight") &&
                (this.cdd.setTopHeight(
                  this.configuration.get("defaultTopHeight")
                ),
                (this.cdd.defaultTopHeight =
                  this.configuration.get("defaultTopHeight"))),
              this.configuration.get("minDoorWidth") &&
                (this.cdd.minDoorWidth =
                  this.configuration.get("minDoorWidth")),
              this.configuration.get("maxDoorWidth") &&
                (this.cdd.maxDoorWidth =
                  this.configuration.get("maxDoorWidth")),
              this.configuration.get("minDoorWidth2") &&
                (this.cdd.minDoorWidth2 =
                  this.configuration.get("minDoorWidth2")),
              this.configuration.get("maxDoorWidth2") &&
                (this.cdd.maxDoorWidth2 =
                  this.configuration.get("maxDoorWidth2")),
              this.configuration.get("minDoorHeight") &&
                (this.cdd.minDoorHeight =
                  this.configuration.get("minDoorHeight")),
              this.configuration.get("maxDoorHeight") &&
                (this.cdd.maxDoorHeight =
                  this.configuration.get("maxDoorHeight")),
              this.configuration.get("minSideWidth") &&
                (this.cdd.minSideWidth =
                  this.configuration.get("minSideWidth")),
              this.configuration.get("maxSideWidth") &&
                (this.cdd.maxSideWidth =
                  this.configuration.get("maxSideWidth")),
              this.configuration.get("minTopHeight") &&
                (this.cdd.minTopHeight =
                  this.configuration.get("minTopHeight")),
              this.configuration.get("maxTopHeight") &&
                (this.cdd.maxTopHeight =
                  this.configuration.get("maxTopHeight")),
              this.configuration.get("maxWidthTopGlass") &&
                (this.cdd.maxWidthTopGlass =
                  this.configuration.get("maxWidthTopGlass")),
              this.configuration.get("maxHeightTopGlass") &&
                (this.cdd.maxHeightTopGlass =
                  this.configuration.get("maxHeightTopGlass")),
              this.configuration.get("maxWidthSideGlass") &&
                (this.cdd.maxWidthSideGlass =
                  this.configuration.get("maxWidthSideGlass")),
              (this.cdd.doorDimensionsChanged = !1);
          },
          conf: function (e) {
            return this.configuration
              ? e
                ? this.configuration.get(e)
                : this.configuration
              : null;
          },
          getLabel: function (e, t) {
            return e && t ? Labels.get(e, t) : null;
          },
          getBauform: function () {
            this.remote.getBauform(function (e) {
              e.frameType && this.cdd.setFrameType(e.frameType),
                KEvent.trigger(KEvent.BAUFORM, e);
            }, this);
          },
          changeBauform: function (e) {
            !this.isTopFrameParam(this.cdd.getFrameType()) &&
              this.isTopFrameParam(e.get("state")) &&
              this.cdd.setOverlightType("OVERLIGHT_FIX"),
              this.cdd.getFrameType() != e.get("state") &&
                (this.cdd.setFrameType(e.get("state")),
                this.isLeftFrame() &&
                  0 === this.cdd.getRepeatLeft() &&
                  this.cdd.setRepeatLeft(1),
                this.isRightFrame() &&
                  0 === this.cdd.getRepeatRight() &&
                  this.cdd.setRepeatRight(1),
                this.setDefaultSideWidth(),
                this.checkTopGlassWidth(),
                this.checkTopGlassHeight(),
                this.isLeftFrame() || this.isRightFrame()
                  ? (this.evaluateSidelightDimensionRules(),
                    this.runProfileRules())
                  : this.isDoubleFrame && this.runProfileRules(),
                this.runSideModelRules(this.dd("sideModel")),
                this.calculateDimensions(),
                this.conf("hasItems") && this.getItemModel().setBauformItems(),
                KEvent.trigger(KEvent.BAUFORM_CHANGE, e),
                this.loadDoorImage(),
                this.isTopFrame() || this.cdd.setOverlightType(null),
                this.tracker.sendEvent(
                  "Frame",
                  "Frame type change",
                  e.get("state")
                ));
          },
          setDefaultSideWidth: function () {
            if (this.isDoubleSide()) {
              var e = this.getDefaultSideWidth();
              this.isLeftFrame() &&
                !this.cdd.getLeftWidth(1) &&
                this.cdd.setLeftWidth(e, 1),
                this.isRightFrame() &&
                  !this.cdd.getRightWidth(1) &&
                  this.cdd.setRightWidth(e, 1);
            }
          },
          checkTopGlassWidth: function () {
            var e = this.isTopFrame()
              ? this.cdd.maxWidthTopGlass
              : this.cdd.maxWidthSideGlass;
            if (
              this.isSidelight() &&
              ((this.isTopFrame() && this.cdd.maxWidthTopGlass) ||
                (!this.isTopFrame() && this.cdd.maxWidthSideGlass)) &&
              this.getAllSidesWidth() + this.cdd.getWidth() > e
            ) {
              var t = this.getDefaultSideWidth();
              this.isLeftFrame() &&
                (this.cdd.setLeftWidth(t),
                this.isDoubleSide() && this.cdd.setLeftWidth(t, 1)),
                this.isRightFrame() &&
                  (this.cdd.setRightWidth(t),
                  this.isDoubleSide() && this.cdd.setRightWidth(t, 1));
              var i = e - this.getAllSidesWidth();
              i < this.cdd.getWidth() && this.setDoorWidth(i);
            }
          },
          setDoorWidth: function (e) {
            e > this.cdd.maxDoorWidth
              ? this.cdd.setWidth(this.cdd.maxDoorWidth)
              : e < this.cdd.minDoorWidth
              ? this.cdd.setWidth(this.cdd.minDoorWidth)
              : this.cdd.setWidth(e);
          },
          checkTopGlassHeight: function () {
            if (
              this.isTopFrame() &&
              this.cdd.maxHeightTopGlass &&
              this.getTopHeight() + this.cdd.getHeight() >
                this.cdd.maxHeightTopGlass
            ) {
              this.cdd.setTopHeight(this.getDefaultTopHeight());
              var e = this.cdd.maxHeightTopGlass - this.getTopHeight();
              e < this.cdd.getHeight() && this.setDoorHeight(e);
            }
          },
          setDoorHeight: function (e) {
            e > this.cdd.maxDoorHeight
              ? this.cdd.setHeight(this.cdd.maxDoorHeight)
              : e < this.cdd.minDoorHeight
              ? this.cdd.setHeight(this.cdd.minDoorHeight)
              : this.cdd.setHeight(e);
          },
          getDefaultSideWidth: function () {
            var e = this.conf("defaultSideWidth");
            return (
              this.dd("doorDimensions").defaultSideWidth > 0 &&
                (e = this.dd("doorDimensions").defaultSideWidth),
              0 != this.cdd.defaultSideWidth && (e = this.cdd.defaultSideWidth),
              e || (e = 500),
              e
            );
          },
          getDefaultTopHeight: function () {
            var e = this.conf("defaultTopHeight");
            return (
              this.dd("doorDimensions").defaultTopHeight > 0 &&
                (e = this.dd("doorDimensions").defaultTopHeight),
              0 != this.cdd.defaultTopHeight && (e = this.cdd.defaultTopHeight),
              e || (e = 500),
              e
            );
          },
          setDefaultMiddleGlass: function () {
            var e = this.dd("ornament");
            this.cdd.setMiddleGlass(e.code),
              this.cdd.setMiddleGlassType("ornament");
          },
          setDefaultUpperGlass: function () {
            var e = this.dd("ornament");
            this.cdd.setUpperGlass({ code: e.code, label: e.label }),
              this.cdd.setUpperGlassType("ornament"),
              this.cdd.setUpperGlassGlazing(this.conf("sideGlassGlazing"));
          },
          setDefaultSideGlass: function () {
            var e = this.dd("ornament");
            if (
              (this.cdd.setSideGlass({ code: e.code, label: e.label }),
              this.cdd.setSideGlassType("ornament"),
              this.cdd.setSideGlassDisabledRepeat(!1),
              this.cdd.setSideGlassGlazing(this.conf("sideGlassGlazing")),
              this.dd("sideModel") && this.dd("sideModel").code)
            ) {
              var t = this.dd("sideModel");
              (this.cdd.sideModel = t.code),
                (this.cdd.sideModelDummy = t.dummy),
                (this.cdd.sideModelName = t.name),
                (this.cdd.hasSideModelMotive = t.hasMotiveGlass),
                (this.cdd.canSetOrnamentGlassSide = t.canSetOrnamentGlass),
                t.defaultSideGlass
                  ? (this.cdd.setSideGlass({
                      code: t.defaultSideGlass.code,
                      label: t.defaultSideGlass.label,
                    }),
                    this.cdd.setSideGlassType("motive"),
                    this.cdd.setSideGlassDisabledRepeat(
                      t.defaultSideGlass.disableOnMultipleSide
                    ))
                  : (this.cdd.setSideGlass({ code: e.code, label: e.label }),
                    this.cdd.setSideGlassType("ornament"),
                    this.cdd.setSideGlassDisabledRepeat(!1)),
                t.defaultWidth > 0 &&
                  (this.cdd.defaultSideWidth = t.defaultWidth),
                t.minWidth > 0 &&
                  ((this.cdd.minSideWidth = t.minWidth),
                  this.cdd.minSideWidth > this.cdd.getLeftWidth() &&
                    this.cdd.setLeftWidth(this.cdd.minSideWidth),
                  this.cdd.minSideWidth > this.cdd.getRightWidth() &&
                    this.cdd.setRightWidth(this.cdd.minSideWidth)),
                t.maxWidth > 0 &&
                  ((this.cdd.maxSideWidth = t.maxWidth),
                  this.cdd.maxSideWidth < this.cdd.getLeftWidth() &&
                    this.cdd.setLeftWidth(this.cdd.maxSideWidth),
                  this.cdd.maxSideWidth < this.cdd.getRightWidth() &&
                    this.cdd.setRightWidth(this.cdd.maxSideWidth));
            }
          },
          isLeftFrame: function () {
            return this.isLeftFrameParam(this.cdd.getFrameType());
          },
          isLeftFrameParam: function (e) {
            return (
              "SINGLE_LEFT" == e ||
              "SINGLE_LEFT_RIGHT" == e ||
              "SINGLE_TOP_LEFT" == e ||
              "SINGLE_TOP_VERTICAL_LEFT" == e ||
              "SINGLE_TOP_LEFT_RIGHT" == e ||
              "SINGLE_TOP_VERTICAL_LEFT_RIGHT" == e ||
              "DOUBLE_LEFT" == e ||
              "DOUBLE_LEFT_RIGHT" == e ||
              "DOUBLE_TOP_LEFT" == e ||
              "DOUBLE_TOP_LEFT_RIGHT" == e ||
              "DOUBLE_TOP_VERTICAL_LEFT_RIGHT" == e ||
              e == FrameType.DOUBLE_LEFT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_LEFT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.SINGLE_2LEFT ||
              e == FrameType.SINGLE_TOP_2LEFT
            );
          },
          isRightFrame: function () {
            return this.isRightFrameParam(this.cdd.getFrameType());
          },
          isRightFrameParam: function (e) {
            return (
              "SINGLE_RIGHT" == e ||
              "SINGLE_LEFT_RIGHT" == e ||
              "SINGLE_TOP_RIGHT" == e ||
              "SINGLE_TOP_VERTICAL_RIGHT" == e ||
              "SINGLE_TOP_LEFT_RIGHT" == e ||
              "SINGLE_TOP_VERTICAL_LEFT_RIGHT" == e ||
              "DOUBLE_RIGHT" == e ||
              "DOUBLE_LEFT_RIGHT" == e ||
              "DOUBLE_TOP_RIGHT" == e ||
              "DOUBLE_TOP_LEFT_RIGHT" == e ||
              "DOUBLE_TOP_VERTICAL_LEFT_RIGHT" == e ||
              e == FrameType.DOUBLE_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.SINGLE_2RIGHT ||
              e == FrameType.SINGLE_TOP_2RIGHT
            );
          },
          isTopFrame: function () {
            return this.isTopFrameParam(this.cdd.getFrameType());
          },
          isTopFrameParam: function (e) {
            return (
              "SINGLE_TOP" == e ||
              "SINGLE_TOP_LEFT" == e ||
              "SINGLE_TOP_VERTICAL_LEFT" == e ||
              "SINGLE_TOP_RIGHT" == e ||
              "SINGLE_TOP_VERTICAL_RIGHT" == e ||
              "SINGLE_TOP_LEFT_RIGHT" == e ||
              "SINGLE_TOP_VERTICAL_LEFT_RIGHT" == e ||
              "DOUBLE_TOP" == e ||
              "DOUBLE_TOP_MIDDLE" == e ||
              "DOUBLE_TOP_LEFT" == e ||
              "DOUBLE_TOP_RIGHT" == e ||
              "DOUBLE_TOP_LEFT_RIGHT" == e ||
              "DOUBLE_TOP_VERTICAL_LEFT_RIGHT" == e ||
              e == FrameType.DOUBLE_TOP_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_LEFT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              e == FrameType.SINGLE_TOP_2LEFT ||
              e == FrameType.SINGLE_TOP_2RIGHT
            );
          },
          isDoubleFrame: function () {
            return (
              "DOUBLE" == this.cdd.getFrameType() ||
              "DOUBLE_LEFT" == this.cdd.getFrameType() ||
              "DOUBLE_RIGHT" == this.cdd.getFrameType() ||
              "DOUBLE_LEFT_RIGHT" == this.cdd.getFrameType() ||
              "DOUBLE_TOP" == this.cdd.getFrameType() ||
              "DOUBLE_TOP_LEFT" == this.cdd.getFrameType() ||
              "DOUBLE_TOP_RIGHT" == this.cdd.getFrameType() ||
              "DOUBLE_TOP_LEFT_RIGHT" == this.cdd.getFrameType() ||
              "DOUBLE_TOP_VERTICAL_LEFT_RIGHT" == this.cdd.getFrameType() ||
              "DOUBLE_TOP_MIDDLE" == this.cdd.getFrameType() ||
              "DOUBLE_MIDDLE" == this.cdd.getFrameType() ||
              this.cdd.getFrameType() == FrameType.DOUBLE_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_LEFT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_RIGHT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() == FrameType.DOUBLE_TOP_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_TOP_LEFT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_TOP_RIGHT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME
            );
          },
          isMiddleGlassFrame: function () {
            return (
              this.cdd.getFrameType() == FrameType.DOUBLE_MIDDLE ||
              this.cdd.getFrameType() == FrameType.DOUBLE_TOP_MIDDLE
            );
          },
          isDoubleNoMiddleFrame: function () {
            return (
              this.cdd.getFrameType() == FrameType.DOUBLE_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_LEFT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_RIGHT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_LEFT_RIGHT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() == FrameType.DOUBLE_TOP_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_TOP_LEFT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_TOP_RIGHT_NO_MIDDLE_FRAME ||
              this.cdd.getFrameType() ==
                FrameType.DOUBLE_TOP_LEFT_RIGHT_NO_MIDDLE_FRAME
            );
          },
          isDoubleSide: function () {
            return (
              this.cdd.getFrameType() == FrameType.SINGLE_2LEFT ||
              this.cdd.getFrameType() == FrameType.SINGLE_2RIGHT ||
              this.cdd.getFrameType() == FrameType.SINGLE_TOP_2LEFT ||
              this.cdd.getFrameType() == FrameType.SINGLE_TOP_2RIGHT
            );
          },
          isDoubleSideLeft: function () {
            return (
              this.cdd.getFrameType() == FrameType.SINGLE_2LEFT ||
              this.cdd.getFrameType() == FrameType.SINGLE_TOP_2LEFT
            );
          },
          isDoubleSideRight: function () {
            return (
              this.cdd.getFrameType() == FrameType.SINGLE_2RIGHT ||
              this.cdd.getFrameType() == FrameType.SINGLE_TOP_2RIGHT
            );
          },
          isSlidingDoor: function () {
            return !!this.cdd.getFrameType().match(/slide/gi);
          },
          isInsideWall: function (e) {
            return !!e || "inside-wall" == this.wallState;
          },
          isSidelight: function () {
            return this.isLeftFrame() || this.isRightFrame();
          },
          isMandatoryType: function (e) {
            var t;
            return (
              _.each(
                this.dd("doorEquipment"),
                function (i) {
                  i.zlist == e && 1 == i.mandatoryType && (t = !0);
                },
                this
              ),
              t
            );
          },
          getDefaultEquipment: function (e) {
            var t;
            return (
              _.each(
                this.dd("doorEquipment"),
                function (i) {
                  i.zlist == e && (t = i);
                },
                this
              ),
              t
            );
          },
          isGlassMenuEnabled: function () {
            return !(
              (!this.dd("canSetMotiveGlass") || !this.dd("canSetDoorGlass")) &&
              this.isForbidenForm()
            );
          },
          isSideModelMenuDisabled: function () {
            return (
              !(this.isLeftFrame() || this.isRightFrame()) ||
              !this.dd("hasDoorSideModel")
            );
          },
          isForbidenForm: function () {
            return (
              this.cdd.getFrameType() == FrameType.SINGLE ||
              this.cdd.getFrameType() == FrameType.DOUBLE ||
              this.cdd.getFrameType() == FrameType.DOUBLE_NO_MIDDLE_FRAME
            );
          },
          getTemplate: function (e, t) {
            this.remote.getTemplate(
              e,
              t,
              function (e, t) {
                KEvent.trigger(KEvent.TEMPLATE, e, t);
              },
              this
            );
          },
          getItem: function (e, t) {
            return this.getItemModel()
              ? this.getItemModel().getItems(e, t)
              : null;
          },
          itemChanged: function (e) {
            var t = e.attributes,
              i = this.cdd.getItem(t.itemType, t.code),
              o = !!i && i.value !== t.value;
            this.cdd.setItem(t),
              this.getItemModel().onItemChange(t, o),
              KEvent.trigger(KEvent.ITEM_CHANGE, t),
              this.tracker.sendEvent("Item", "Item changed", t.code),
              e.get("updateImage") &&
                (this.loadDoorImage(), this.calculateDimensions());
          },
          itemRemoved: function (e) {
            var t = e.attributes;
            this.cdd.removeItem(t),
              this.getItemModel().onItemChange(t),
              KEvent.trigger(KEvent.ITEM_CHANGE, t),
              this.tracker.sendEvent("Item", "Item removed", t.code),
              e.get("updateImage") &&
                (this.loadDoorImage(), this.calculateDimensions());
          },
          loginUser: function (e, t) {
            var i = CryptoJS.PBKDF2(t, this.h, { keySize: 6, iterations: 512 });
            (this.userData = { username: e, password: i.toString() }),
              this.remote.login(this.onLoginSuccess, this.onLoginError, this);
          },
          onLoginError: function (e, t, i) {
            (this.userData = null),
              KEvent.trigger(KEvent.LOGIN, {
                status: e.status,
                errorText: i,
                responseText: e.responseText,
                error: !0,
                success: !1,
              });
          },
          onLoginSuccess: function (e) {
            if (
              ((this.userData = this.userData || {}),
              _.extend(this.userData, e, { isLoginSuccess: !0 }),
              this.userData && this.userData.discounts)
            ) {
              var t = _.findWhere(this.userData.discounts, { type: "USER" });
              t && this.cdd.setUserDiscount(t.min);
              var i = _.findWhere(this.userData.discounts, {
                type: "ADDITIONAL",
              });
              i && this.cdd.setAdditionalDiscount(i.min);
            }
            e.contactData &&
              e.contactData.logoImageUrl &&
              this.configuration.set(
                "logoImageUrl",
                e.contactData.logoImageUrl
              ),
              Util.log("userData", this.userData),
              this.remote.getMenu(
                ["main", "main-login"],
                function (e) {
                  this.configuration.set("menu", e),
                    this.prepareMainMenu(),
                    KEvent.trigger(KEvent.LOGIN, { success: !0, error: !1 }),
                    this.tracker.sendEvent(
                      "Login",
                      "Login success",
                      this.loggedInUser()
                    );
                },
                this
              );
          },
          getAutoLoginData: function () {
            var e = Util.getUrlVars();
            e &&
              e.d &&
              e.h &&
              this.isAutoLogin() &&
              this.remote.getAutoLoginData(
                e.d,
                function (e) {
                  this.onLoginSuccess(e);
                },
                function () {
                  KEvent.trigger(KEvent.AUTOLOGIN_ERROR);
                },
                this
              );
          },
          getCurrency: function (e) {
            return (
              (e ? " " : "") +
              (this.userData && this.userData.currencySign
                ? this.userData.currencySign
                : null != this.conf("currencyCode")
                ? this.conf("currencyCode")
                : "EUR")
            );
          },
          getPrice: function () {
            (this.priceLoading = !0),
              KEvent.trigger(KEvent.PRICE_LOADING),
              this.remote.getPrice(
                this.getPriceRequestObj(),
                function (e) {
                  (this.priceData = e),
                    Util.log("Price data:", this.priceData),
                    (this.priceLoading = !1),
                    KEvent.trigger(KEvent.PRICE);
                },
                this
              );
          },
          getPriceRequestObj: function () {
            var e = {
                model: this.cdd.doorModel,
                insideModel: this.cdd.getInsideModel(),
                partnerKey: this.conf("partnerKey"),
                doorPackage: this.cdd.equipmentPackage,
                width: this.cdd.construction.width,
                panel2Width: this.cdd.construction.panel2Width,
                height: this.cdd.construction.height,
                leftSideWidth: this.cdd.construction.leftSideWidth,
                rightSideWidth: this.cdd.construction.rightSideWidth,
                topHeight: this.cdd.construction.topHeight,
                frameType: this.cdd.construction.frameType,
                overlightType: this.cdd.construction.overlightType,
                category: this.dd("category"),
                series: this.dd("serie"),
                doorGlass: this.cdd.getDoorGlass(),
                doorGlassType: this.cdd.getDoorGlassType(),
                sideGlassType: this.cdd.getSideGlassType(),
                doorGlassGlazing: parseInt(this.cdd.getDoorGlassGlazing()),
                sideGlassGlazing: parseInt(this.cdd.getSideGlassGlazing()),
                topGlassGlazing: parseInt(this.cdd.getUpperGlassGlazing()),
                sideGlassOption: this.cdd.getSideGlassOption(),
                upperGlassOption: this.cdd.getUpperGlassOption(),
                blindProfile: this.cdd.getBlindProfile(),
                topGlassType: this.cdd.getUpperGlassType(),
                totalWidth: this.cdd.getTotalWidth(),
                totalHeight: this.cdd.getTotalHeight(),
                additionalOptions: this.cdd.getAdditionalOptions(),
                optionList: this.cdd.getDemandOptions(),
                din: this.cdd.getDinDirection(),
                equipment: {},
                profile: this.cdd.getProfile(),
                wing: this.cdd.getWingCode(),
                lang: this.conf("lang"),
                material: this.cdd.getMaterial(),
                sideGlass: this.cdd.getSideGlass(),
                upperGlass: this.cdd.getUpperGlass(),
                sideModel: this.cdd.sideModel,
                opener: this.cdd.getOpener(),
                woodRotation: this.cdd.getWoodRotation(),
                woodRotationInside: this.cdd.getWoodRotationInside(),
                items: this.cdd.getItems(),
                userDiscount: this.cdd.getUserDiscount(),
                additionalDiscount: this.cdd.getAdditionalDiscount(),
                discountSystem: this.userData
                  ? this.userData.discountSystem
                  : null,
                doorPanelGlass: this.dd("canSetMotiveGlass"),
                leftRepeat: this.cdd.getRepeatLeft(),
                rightRepeat: this.cdd.getRepeatRight(),
                generalMargin: this.cdd.getGeneralMargin(),
                additionalMargin1: this.cdd.getAdditionalMargin1(),
                hasAccessControlHandle: this.cdd.getHasAccessControlHandle(),
                usr: this.userData ? this.userData.username : null,
              },
              t = this.conf("priceClass");
            t && (e.priceName = t);
            for (var i in this.cdd.equipment) {
              var o = this.cdd.equipment[i];
              "object" != typeof o || null == o
                ? (e.equipment[i] = o)
                : (e.equipment[i] = o.code);
            }
            return (
              _.each(
                this.cdd.color,
                function (t, i) {
                  t.code && (e[i] = { code: t.code, group: t.group });
                },
                this
              ),
              Util.log("Price req. data", e),
              e
            );
          },
          getGarageDoors: function () {
            this.remote.getGarageDoors(function (e) {
              KEvent.trigger(KEvent.GARAGE_DOOR_DATA, e);
            }, this);
          },
          garageDoorChange: function (e) {
            e && e.get("code")
              ? this.cdd.setGarageDoor(e.get("code"))
              : this.cdd.setGarageDoor(e),
              KEvent.trigger(KEvent.GARAGE_DOOR_CHANGE, e),
              this.loadGarageDoor(),
              this.tracker.sendEvent(
                "Garage",
                "Garage door change",
                e.get("code")
              );
          },
          garageDoorWidthChange: function (e) {
            this.cdd.setGarageDoorWidth(e),
              KEvent.trigger(KEvent.GARAGE_DOOR_WIDTH),
              this.loadGarageDoor(),
              this.tracker.sendEvent("Garage", "Garage door width change", e);
          },
          dinDirectionChange: function (e) {
            if (e.code != this.cdd.getDinDirection()) {
              if (
                (this.cdd.setDinDirection(e),
                this.profileList && this.profileList.length > 0)
              ) {
                var t = this.prepareProfileList(this.profileList, {
                    din: e.code,
                    model: this.cdd.doorModel,
                    retainDin: !0,
                  }),
                  i = _.filter(this.profileList, function (e) {
                    return e.visible;
                  });
                _.findWhere(i, { code: this.cdd.getProfile() }) ||
                  ((t = t && t.privzeto ? t : i[0]),
                  this.cdd.setProfile(t),
                  t.wing && this.cdd.setWingCode(t.wing.code),
                  t.equipment && this._setDefaultEquipmentList(t.equipment),
                  this.conf("hasItems") &&
                    this.getItemModel().setProfileItems());
              }
              (this.isLeftFrame() || this.isRightFrame()) &&
                (this.evaluateSidelightDimensionRules(),
                this.runProfileRules()),
                this.calculateDimensions(),
                KEvent.trigger(KEvent.DIN_CHANGE),
                this.loadDoorImage(),
                this.tracker.sendEvent("Construction", "din change", e.code);
            }
          },
          innerWingChange: function (e) {
            e != this.cdd.getWing() &&
              (this.cdd.setWing(e),
              0 == this.conf("panelOnInnerFrame") &&
                this.cdd.getWing() &&
                this.cdd.setPanelProtection(null),
              KEvent.trigger(KEvent.INNER_WING_CHANGE),
              this.loadDoorImage(),
              this.tracker.sendEvent("Construction", "wing change old", e));
          },
          wingChange: function (e) {
            e &&
              e.get("code") != this.cdd.getWingCode &&
              (this.cdd.setWingCode(e.get("code")),
              0 == this.conf("panelOnInnerFrame") &&
                Wing.isOutside(this.cdd.getWingCode()) &&
                this.cdd.setPanelProtection(null),
              "wing" == this.conf("innerFrameColorMode") &&
                (Wing.isOutside(this.cdd.getWingCode())
                  ? this.cdd.getColor(Color.WING) ||
                    this.cdd.copyColor(Color.PANEL, Color.WING)
                  : this.cdd.setColor(null, Color.WING),
                Wing.isInside(this.cdd.getWingCode())
                  ? this.cdd.getColor(Color.WING_INSIDE) ||
                    this.cdd.copyColor(Color.PANEL_INSIDE, Color.WING_INSIDE)
                  : this.cdd.setColor(null, Color.WING_INSIDE)),
              KEvent.trigger(KEvent.INNER_WING_CHANGE),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Construction",
                "wing change",
                e.get("code")
              ));
          },
          securitySystemChange: function (e) {
            e != this.cdd.getSecuritySystem() && this.cdd.setSecuritySystem(e);
          },
          getThumbnails: function (e, t) {
            e &&
              this.remote.getThumbnails(
                e,
                t,
                function (e, t, i) {
                  KEvent.trigger(KEvent.THUMBNAILS, e, t, i);
                },
                this
              );
          },
          getAllThumbnails: function () {
            this.remote.getAllThumbnails(function (e) {
              KEvent.trigger(KEvent.THUMBNAILS, e);
            }, this);
          },
          getThumbnailsInside: function () {
            this.remote.getThumbnailsInside(function (e) {
              KEvent.trigger(KEvent.THUMBNAILS_INSIDE_DATA, e);
            }, this);
          },
          getThumbnailSearch: function (e) {
            this.remote.getThumbnailSearch(
              e,
              function (e) {
                KEvent.trigger(KEvent.THUMBNAILS_SEARCH, e);
              },
              this
            );
          },
          getOutsideVariationsThumbnail: function () {
            this.remote.getOutsideVariationsThumbnail(
              this.dd("parentModel")
                ? this.dd("parentModel")
                : this.dd("model"),
              function (e) {
                KEvent.trigger(KEvent.THUMBNAILS_VARIATIONS, e);
              },
              this
            );
          },
          getSeries: function () {
            (this.series && this.series.length > 0) ||
              this.remote.getSeries(function (e) {
                e &&
                  ((this.series = new Backbone.Collection(e)),
                  (this.series.hasCategories = !1),
                  this.series.forEach(function (e) {
                    var t = e.get("category");
                    t.length > 1 && (this.series.hasCategories = !0),
                      1 === t.length &&
                        t[0].returnAllFromSerie &&
                        e.set("returnAllFromSerie", !0);
                  }, this),
                  this.setSerieAndCateogry(),
                  KEvent.trigger(KEvent.SERIES_EVENT, this.series));
              }, this);
          },
          setSerieAndCateogry: function () {
            this.series &&
              (this.series.length > 1
                ? (this.cdd.serie = this.dd("serie"))
                : (this.cdd.serie = null),
              this.series.hasCategories
                ? (this.cdd.category = this.dd("category"))
                : (this.cdd.category = null));
          },
          getColorsByElement: function () {
            this.remote.getColorsByElement(function (e) {
              KEvent.trigger(KEvent.COLOR_DATA_RESPONSE, e);
            }, this);
          },
          woodRotationChange: function (e) {
            this.isInsideWall()
              ? this.cdd.setWoodRotationInside(e)
              : this.cdd.setWoodRotation(e),
              this.loadDoorImage(),
              KEvent.trigger(KEvent.WOOD_ROTATION_CHANGE, e),
              this.tracker.sendEvent("Color", "Wood rotation change", e);
          },
          colorChange: function (e) {
            Util.log("Color change: %O", e);
            var t = !0,
              i = e.get("code"),
              o = e.get("customDesc"),
              s = e.get("sameAsPanel"),
              n = e.get("sameAsOutside"),
              d = e.get("colorType"),
              r = this.getCurrentPartSelectedColor(),
              l = e.get("group"),
              a = !0,
              c = { code: i, desc: o, sameAsPanel: s, colorType: d, group: l };
            this.cdd.isColorFrameAndPanelAllowed &&
              (a = e.get("colorFrameAndPanel"));
            var h = !1;
            "panel" == this.cdd.getProductPart() &&
              this.cdd.getColor(Color.PANEL) &&
              d != this.cdd.getColor(Color.PANEL).colorType &&
              this.cdd.getColor(Color.APP) &&
              (h = !0),
              r && r.code == i && (t = !1),
              this.cdd.resetReferenceNumber(),
              "intarsia" == this.cdd.getProductPart()
                ? this.isInsideWall()
                  ? (this.cdd.setColor(c, Color.CRTE_INSIDE),
                    (this.cdd.insideColorChanged = !0),
                    n && (this.cdd.insideColorChanged = !1))
                  : (this.cdd.setColor(c, Color.CRTE),
                    !this.cdd.insideColorChanged &&
                      this.hasInsideLayer(this.cdd.getProductPart()) &&
                      this.conf("insideView") &&
                      this.cdd.setColor(c, Color.CRTE_INSIDE))
                : "surface" == this.cdd.getProductPart()
                ? this.isInsideWall()
                  ? (this.cdd.setColor(c, Color.PANEL_INSIDE),
                    (this.cdd.insideColorChanged = !0))
                  : (this.cdd.setColor(c, Color.PANEL),
                    !this.cdd.insideColorChanged &&
                      this.hasInsideLayer("panel") &&
                      this.conf("insideView") &&
                      this.cdd.setColor(c, Color.PANEL_INSIDE))
                : this.isInsideWall()
                ? (this.cdd.setColor(
                    c,
                    "inside" + this.cdd.getProductPartCapitalized() + "Color"
                  ),
                  (this.cdd.insideColorChanged = !0),
                  n && (this.cdd.insideColorChanged = !1))
                : (this.cdd.setColor(c, this.cdd.getProductPart() + "Color"),
                  !this.cdd.insideColorChanged &&
                    this.hasInsideLayer(this.cdd.getProductPart()) &&
                    this.conf("insideView") &&
                    (this.cdd.setColor(
                      c,
                      "inside" + this.cdd.getProductPartCapitalized() + "Color"
                    ),
                    "frame" === this.cdd.getProductPart() &&
                      this.handleSameAsFrameInsideLayer(c))),
              "frame" === this.cdd.getProductPart() &&
                (this.isInsideWall()
                  ? this.handleSameAsFrameInsideLayer(c)
                  : this.handleSameAsFrameLayer(c));
            var u = {
              dframe: !1,
              dframe2: !1,
              cassette: !1,
              panel2: !1,
              panel3: !1,
            };
            if (
              (!this.cdd.getPartsColorAsPanel() ||
                ("surface" != this.cdd.getProductPart() &&
                  ("panel" != this.cdd.getProductPart() ||
                    (this.cdd.isColorPartChanged &&
                      this.conf("frameColorEnabled")) ||
                    this.hasDoorElement("surface"))) ||
                (this.isInsideWall()
                  ? (a &&
                      (this.cdd.copyColor(
                        Color.PANEL_INSIDE,
                        Color.FRAME_INSIDE
                      ),
                      this.handleSameAsFrameInsideLayer(null)),
                    "wing" == this.conf("innerFrameColorMode") &&
                      this.cdd.copyColor(Color.PANEL_INSIDE, Color.WING_INSIDE),
                    this.hasInsideLayer("dframe") &&
                      !this.cdd.getColor(Color.DFRAME_INSIDE).sameAsPanel &&
                      (this.cdd.copyColor(
                        Color.PANEL_INSIDE,
                        Color.DFRAME_INSIDE
                      ),
                      (u.dframe = !0)),
                    this.hasInsideLayer("dframe2") &&
                      !this.cdd.getColor(Color.DFRAME2_INSIDE).sameAsPanel &&
                      (this.cdd.copyColor(
                        Color.PANEL_INSIDE,
                        Color.DFRAME2_INSIDE
                      ),
                      (u.dframe2 = !0)),
                    this.hasInsideLayer("cassette") &&
                      !this.cdd.getColor(Color.CASSETTE_INSIDE).sameAsPanel &&
                      (this.cdd.copyColor(
                        Color.PANEL_INSIDE,
                        Color.CASSETTE_INSIDE
                      ),
                      (u.cassette = !0)),
                    this.hasInsideLayer("panel2") &&
                      !this.cdd.getColor(Color.PANEL2_INSIDE).sameAsPanel &&
                      (this.cdd.copyColor(
                        Color.PANEL_INSIDE,
                        Color.PANEL2_INSIDE
                      ),
                      (u.panel2 = !0)),
                    this.hasInsideLayer("panel3") &&
                      !this.cdd.getColor(Color.PANEL3_INSIDE).sameAsPanel &&
                      (this.cdd.copyColor(
                        Color.PANEL_INSIDE,
                        Color.PANEL3_INSIDE
                      ),
                      (u.panel3 = !0)))
                  : (a &&
                      (this.cdd.copyColor(Color.PANEL, Color.FRAME),
                      this.handleSameAsFrameLayer(null)),
                    "wing" == this.conf("innerFrameColorMode") &&
                      this.cdd.copyColor(Color.PANEL, Color.WING),
                    this.hasLayer("dframe") &&
                      !this.cdd.getColor(Color.DFRAME).sameAsPanel &&
                      (this.cdd.copyColor(Color.PANEL, Color.DFRAME),
                      (u.dframe = !0)),
                    this.hasLayer("dframe2") &&
                      !this.cdd.getColor(Color.DFRAME2).sameAsPanel &&
                      (this.cdd.copyColor(Color.PANEL, Color.DFRAME2),
                      (u.dframe2 = !0)),
                    this.hasLayer("cassette") &&
                      !this.cdd.getColor(Color.CASSETTE).sameAsPanel &&
                      (this.cdd.copyColor(Color.PANEL, Color.CASSETTE),
                      (u.cassette = !0)),
                    this.hasLayer("panel2") &&
                      !this.cdd.getColor(Color.PANEL2).sameAsPanel &&
                      (this.cdd.copyColor(Color.PANEL, Color.PANEL2),
                      (u.panel2 = !0)),
                    this.hasLayer("panel3") &&
                      !this.cdd.getColor(Color.PANEL3).sameAsPanel &&
                      (this.cdd.copyColor(Color.PANEL, Color.PANEL3),
                      (u.panel3 = !0)),
                    !this.cdd.insideColorChanged &&
                      this.conf("insideView") &&
                      (a &&
                        (this.cdd.copyColor(Color.PANEL, Color.FRAME_INSIDE),
                        this.handleSameAsFrameInsideLayer(null)),
                      "wing" == this.conf("innerFrameColorMode") &&
                        this.cdd.copyColor(
                          Color.PANEL_INSIDE,
                          Color.WING_INSIDE
                        ),
                      this.hasInsideLayer("dframe") &&
                        !this.cdd.getColor(Color.DFRAME_INSIDE).sameAsPanel &&
                        (this.cdd.copyColor(Color.PANEL, Color.DFRAME_INSIDE),
                        (u.dframe = !0)),
                      this.hasInsideLayer("dframe2") &&
                        !this.cdd.getColor(Color.DFRAME2_INSIDE).sameAsPanel &&
                        (this.cdd.copyColor(Color.PANEL, Color.DFRAME2_INSIDE),
                        (u.dframe2 = !0)),
                      this.hasInsideLayer("cassette") &&
                        !this.cdd.getColor(Color.CASSETTE_INSIDE).sameAsPanel &&
                        (this.cdd.copyColor(Color.PANEL, Color.CASSETTE_INSIDE),
                        (u.cassette = !0)),
                      this.hasInsideLayer("panel2") &&
                        !this.cdd.getColor(Color.PANEL2_INSIDE).sameAsPanel &&
                        (this.cdd.copyColor(Color.PANEL, Color.PANEL2_INSIDE),
                        (u.panel2 = !0)),
                      this.hasInsideLayer("panel3") &&
                        !this.cdd.getColor(Color.PANEL3_INSIDE).sameAsPanel &&
                        (this.cdd.copyColor(Color.PANEL, Color.PANEL3_INSIDE),
                        (u.panel3 = !0))))),
              (u.dframe || u.dframe2 || u.cassette || u.panel2 || u.panel3) &&
                !n)
            ) {
              var g = "dframe";
              u.dframe2
                ? (g = "dframe2")
                : u.cassette
                ? (g = "cassette")
                : u.panel2
                ? (g = "panel2")
                : u.panel3 && (g = "panel3"),
                this.setAvailableColor(
                  { part: g, changedParts: u, inside: this.isInsideWall() },
                  e
                );
            }
            if (
              (n &&
                (this.cdd.copyColor(Color.PANEL, Color.PANEL_INSIDE),
                this.cdd.copyColor(Color.FRAME, Color.FRAME_INSIDE),
                this.handleSameAsFrameInsideLayer(null),
                this.hasInsideLayer("dframe") &&
                  this.cdd.copyColor(Color.PANEL, Color.DFRAME_INSIDE),
                this.hasInsideLayer("dframe2") &&
                  this.cdd.copyColor(Color.PANEL, Color.DFRAME2_INSIDE)),
              n || h)
            ) {
              var p = this.getFirstColorableApplication();
              p &&
                p.colorCode != this.cdd.getColor(p.name + "Color").code &&
                this.remote.isColorAvailable(
                  p.name,
                  this.cdd.getColor(p.name + "Color").code,
                  function (e) {
                    e &&
                      !e.response &&
                      ((this.cdd.getColor(p.name + "Color").code = e.colorCode),
                      (this.cdd.getColor(p.name + "Color").desc = null));
                  },
                  this
                );
            }
            KEvent.trigger(KEvent.COLOR_CHANGE, e),
              t &&
                (this.cdd.getGarageDoor()
                  ? this.loadDoorImage(!0)
                  : this.loadDoorImage()),
              Util.log("current color data %O", this.cdd.color),
              Util.log("isColorPartChanged", this.cdd.isColorPartChanged),
              Util.log("insideColorChanged", this.cdd.insideColorChanged);
            var m =
              "part:" +
              this.cdd.getProductPart() +
              (l ? "group:" + l : "") +
              "color:" +
              i;
            this.tracker.sendEvent("Color", "Color change", m);
          },
          handleSameAsFrameLayer: function (e) {
            this.dd("layer").forEach(function (t) {
              if (t.sameAsFrame)
                switch (t.name) {
                  case "application":
                    null != e
                      ? this.cdd.setColor(e, Color.APP)
                      : this.cdd.copyColor(Color.FRAME, Color.APP);
                    break;
                  case "application2":
                    null != e
                      ? this.cdd.setColor(e, Color.APP2)
                      : this.cdd.copyColor(Color.FRAME, Color.APP2);
                }
            }, this);
          },
          handleSameAsFrameInsideLayer: function (e) {
            this.insideDoorElements.forEach(function (t) {
              if (t.sameAsFrame)
                switch (t.name) {
                  case "application":
                    null != e
                      ? this.cdd.setColor(e, Color.APP_INSIDE)
                      : this.cdd.copyColor(
                          Color.FRAME_INSIDE,
                          Color.APP_INSIDE
                        );
                    break;
                  case "application2":
                    null != e
                      ? this.cdd.setColor(e, Color.APP2_INSIDE)
                      : this.cdd.copyColor(
                          Color.FRAME_INSIDE,
                          Color.APP2_INSIDE
                        );
                }
            }, this);
          },
          isColorEqual: function (e) {
            if (!e) return !1;
            var t = this.getCurrentPartSelectedColor();
            if (e.get("sameAsOutside")) {
              var i =
                  this.cdd.color[
                    "inside" + this.cdd.getProductPartCapitalized() + "Color"
                  ],
                o = this.cdd.color[this.cdd.getProductPart() + "Color"];
              return i && o && i.code == o.code;
            }
            return !(!t || e.get("code") != t.code);
          },
          getFirstColorableApplication: function () {
            for (var e = 0, t = this.dd("layer").length; e < t; e++) {
              var i = this.dd("layer")[e];
              if (i.name.match(/^application/gi) && i.canChangeColor) return i;
            }
            return null;
          },
          getWoodRotation: function (e) {
            if (!this.conf("woodRotationEnabled")) return null;
            var t;
            return (
              _.each(
                this.cdd.color,
                function (e) {
                  e.colorType == ColorType.WOOD && (t = !0);
                },
                this
              ),
              t
                ? e
                  ? this.cdd.getWoodRotationInside()
                  : this.cdd.getWoodRotation()
                : null
            );
          },
          getCurrentPartSelectedColor: function () {
            return this.isInsideWall()
              ? "intarsia" == this.cdd.getProductPart()
                ? this.cdd.getColor(Color.CRTE_INSIDE)
                : this.cdd.color[
                    "inside" + this.cdd.getProductPartCapitalized() + "Color"
                  ]
              : "intarsia" == this.cdd.getProductPart()
              ? this.cdd.getColor(Color.CRTE)
              : this.cdd.color[this.cdd.getProductPart() + "Color"];
          },
          setAvailableColor: function (e, t) {
            this.remote.getHasLayerColor(e, t, this.setLayerColor, this);
          },
          setLayerColor: function (e, t) {
            if (!e.response) {
              var i = {
                code: e.colorCode,
                sameAsPanel: e.sameAsPanel,
                group: e.group,
              };
              t.changedParts.dframe &&
                (t.inside
                  ? this.cdd.setColor(i, Color.DFRAME_INSIDE)
                  : this.cdd.insideColorChanged || !this.conf("insideView")
                  ? this.cdd.setColor(i, Color.DFRAME)
                  : (this.cdd.setColor(i, Color.DFRAME),
                    this.cdd.setColor(i, Color.DFRAME_INSIDE))),
                t.changedParts.dframe2 &&
                  (t.inside
                    ? this.cdd.setColor(i, Color.DFRAME2_INSIDE)
                    : this.cdd.insideColorChanged || !this.conf("insideView")
                    ? this.cdd.setColor(i, Color.DFRAME2)
                    : (this.cdd.setColor(i, Color.DFRAME2),
                      this.cdd.setColor(i, Color.DFRAME2_INSIDE))),
                t.changedParts.cassette &&
                  (t.inside
                    ? this.cdd.setColor(i, Color.CASSETTE_INSIDE)
                    : this.cdd.insideColorChanged || !this.conf("insideView")
                    ? this.cdd.setColor(i, Color.CASSETTE)
                    : (this.cdd.setColor(i, Color.CASSETTE),
                      this.cdd.setColor(i, Color.CASSETTE_INSIDE))),
                t.changedParts.panel2 &&
                  (t.inside
                    ? this.cdd.setColor(i, Color.PANEL2_INSIDE)
                    : this.cdd.insideColorChanged || !this.conf("insideView")
                    ? this.cdd.setColor(i, Color.PANEL2)
                    : (this.cdd.setColor(i, Color.PANEL2),
                      this.cdd.setColor(i, Color.PANEL2_INSIDE))),
                t.changedParts.panel3 &&
                  (t.inside
                    ? this.cdd.setColor(i, Color.PANEL3_INSIDE)
                    : this.cdd.insideColorChanged || !this.conf("insideView")
                    ? this.cdd.setColor(i, Color.PANEL3)
                    : (this.cdd.setColor(i, Color.PANEL3),
                      this.cdd.setColor(i, Color.PANEL3_INSIDE)));
            }
          },
          getHouseColors: function () {
            this.remote.getHouseColors(function (e) {
              KEvent.trigger(KEvent.HOUSE_COLOR_EVENT, e);
            }, this);
          },
          getHouseImages: function () {
            this.remote.getHouseImages(function (e) {
              KEvent.trigger(KEvent.HOUSE_IMAGES_DATA, e);
            }, this);
          },
          houseColorChange: function (e) {
            if (this.isInsideWall()) {
              if (this.cdd.getInsideWallColor() == e.get("color")) return;
              this.cdd.setInsideWallColor(e.get("color")),
                this.tracker.sendEvent(
                  "Door2House",
                  "Inside wall color change",
                  e.get("color")
                );
            } else {
              if (this.cdd.getWallColor() == e.get("color")) return;
              this.cdd.setWallColor(e.get("color")),
                this.tracker.sendEvent(
                  "Door2House",
                  "House color change",
                  e.get("color")
                );
            }
            KEvent.trigger(KEvent.HOUSE_COLOR_CHANGE, e);
          },
          houseImageChange: function (e) {
            (this.houseData = {
              largeImageUrl: e.get("largeImageUrl"),
              bottom: e.get("bottom"),
              center: e.get("center"),
              scale: e.get("scale"),
            }),
              KEvent.trigger(KEvent.HOUSE_IMAGE_CHANGE, e),
              this.tracker.sendEvent("Door2House", "House image change");
          },
          getB64Image: function (e) {
            this.remote.getB64Image(
              this.getB64DoorImageUrl(e),
              function (e) {
                KEvent.trigger(KEvent.HOUSE_DOOR_LOADED, e);
              },
              this
            );
          },
          getMenu: function (e) {
            null != e &&
              this.remote.getMenu(
                e,
                function (e, t) {
                  KEvent.trigger(KEvent.MENU_DATA, e, t);
                },
                this
              );
          },
          getFormFields: function (e) {
            return this.remote.getFormFields(e).done(function (e) {
              KEvent.trigger(KEvent.FORM_FIELDS_DATA, e);
            });
          },
          glassPartChange: function (e) {
            (this.cdd.glassPart = e),
              KEvent.trigger(KEvent.GLASS_PART_CHANGE, e);
          },
          getOrnamentGroup: function () {
            this.remote.getOrnamentGroup(function (e) {
              KEvent.trigger(KEvent.ORNAMENT_GROUP_DATA, e);
            }, this);
          },
          getOrnamentGlass: function (e) {
            this.remote.getOrnamentGlass(
              e,
              function (e) {
                KEvent.trigger(KEvent.ORNAMENT_GLASS_DATA, e);
              },
              this
            );
          },
          ornamentChange: function (e) {
            "door-glass" == this.cdd.glassPart
              ? (this.cdd.setDoorGlassType("ornament"),
                this.cdd.setDoorGlass({
                  code: e.get("code"),
                  label: e.get("label"),
                }),
                this.conf("changeAllGlasses") &&
                  (this.cdd.setSideGlassType("ornament"),
                  this.cdd.setSideGlass({
                    code: e.get("code"),
                    label: e.get("label"),
                  }),
                  this.cdd.setSideGlassDisabledRepeat(!1),
                  this.cdd.setUpperGlassType("ornament"),
                  this.cdd.setUpperGlass({
                    code: e.get("code"),
                    label: e.get("label"),
                  }),
                  this.cdd.setMiddleGlassType("ornament"),
                  this.cdd.setMiddleGlass(e.get("code"))),
                this.tracker.sendEvent(
                  "Glass",
                  "Ornament change door",
                  e.get("code")
                ))
              : "side-glass" == this.cdd.glassPart
              ? (this.cdd.setSideGlassType("ornament"),
                this.cdd.setSideGlass({
                  code: e.get("code"),
                  label: e.get("label"),
                }),
                this.conf("hasItems") &&
                  this.getItemModel().setSideGlassItems(),
                this.cdd.setSideGlassDisabledRepeat(!1),
                this.tracker.sendEvent(
                  "Glass",
                  "Ornament change side",
                  e.get("code")
                ))
              : "top-glass" == this.cdd.glassPart
              ? (this.cdd.setUpperGlassType("ornament"),
                this.cdd.setUpperGlass({
                  code: e.get("code"),
                  label: e.get("label"),
                }),
                this.conf("hasItems") &&
                  this.getItemModel().setUpperGlassItems(),
                this.tracker.sendEvent(
                  "Glass",
                  "Ornament change up",
                  e.get("code")
                ))
              : "middle-glass" == this.cdd.glassPart &&
                (this.cdd.setMiddleGlassType("ornament"),
                this.cdd.setMiddleGlass(e.get("code")),
                this.tracker.sendEvent(
                  "Glass",
                  "Ornament change middle",
                  e.get("code")
                )),
              KEvent.trigger(KEvent.ORNAMENT_CHANGE, e),
              this.loadDoorImage();
          },
          doorGlassGlazingChange: function (e) {
            this.cdd.setDoorGlassGlazing(e),
              KEvent.trigger(KEvent.GLAZING_CHANGE),
              this.tracker.sendEvent("Glass", "Door glass glazing", e);
          },
          sideGlassGlazingChange: function (e) {
            this.cdd.setSideGlassGlazing(e),
              KEvent.trigger(KEvent.GLAZING_CHANGE),
              this.tracker.sendEvent("Glass", "Side glass glazing", e);
          },
          upperGlassGlazingChange: function (e) {
            this.cdd.setUpperGlassGlazing(e),
              KEvent.trigger(KEvent.GLAZING_CHANGE),
              this.tracker.sendEvent("Glass", "Upper glass glazing", e);
          },
          sideGlassOptionChange: function (e) {
            this.cdd.setSideGlassOption(e),
              KEvent.trigger(KEvent.GLASS_OPTION_CHANGE),
              this.tracker.sendEvent("Glass", "Side glass option", e);
          },
          upperGlassOptionChange: function (e) {
            this.cdd.setUpperGlassOption(e),
              KEvent.trigger(KEvent.GLASS_OPTION_CHANGE),
              this.tracker.sendEvent("Glass", "Upper glass option", e);
          },
          getMotiveGlass: function () {
            this.remote.getMotiveGlass(function (e) {
              KEvent.trigger(KEvent.MOTIVE_GLASS_DATA, e);
            }, this);
          },
          motiveChange: function (e) {
            "door-glass" === this.cdd.glassPart
              ? (this.cdd.setDoorGlassType("motive"),
                this.cdd.setDoorGlass({
                  code: e.get("code"),
                  label: e.get("label"),
                }))
              : "side-glass" === this.cdd.glassPart
              ? (this.cdd.setSideGlassType("motive"),
                this.cdd.setSideGlass({
                  code: e.get("code"),
                  label: e.get("label"),
                }),
                this.conf("hasItems") &&
                  this.getItemModel().setSideGlassItems(),
                this.cdd.setSideGlassDisabledRepeat(
                  e.get("disableOnMultipleSide")
                ),
                e.get("upperImage") &&
                  (this.cdd.setUpperGlassType("motive"),
                  this.cdd.setUpperGlass({
                    code: e.get("code"),
                    label: e.get("label"),
                  })))
              : "top-glass" === this.cdd.glassPart
              ? (this.cdd.setUpperGlassType("motive"),
                this.cdd.setUpperGlass({
                  code: e.get("code"),
                  label: e.get("label"),
                }),
                this.conf("hasItems") &&
                  this.getItemModel().setUpperGlassItems())
              : "middle-glass" === this.cdd.glassPart &&
                (this.cdd.setMiddleGlass(e.get("code")),
                this.cdd.setUpperGlassType("motive")),
              KEvent.trigger(KEvent.MOTIVE_CHANGE, e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Glass",
                "Motive change door",
                e.get("code")
              );
          },
          getSideModels: function () {
            return this.remote.getSideModels().done(function (e) {
              KEvent.trigger(KEvent.SIDE_MODEL_DATA, e);
            });
          },
          getSideGlass: function (e) {
            this.remote.getSideGlass(
              e,
              function (e, t) {
                e && e.length > 0
                  ? KEvent.trigger(KEvent.SIDE_GLASS_DATA, e, t)
                  : KEvent.trigger(KEvent.SIDE_GLASS_DATA, null, t);
              },
              this
            );
          },
          sideModelChange: function (e) {
            if (e) {
              if (
                ((this.cdd.sideModel = e.get("code")),
                (this.cdd.sideModelName = e.get("name")),
                (this.cdd.sideModelDummy = e.get("dummy")),
                (this.cdd.hasSideModelMotive = e.get("hasMotiveGlass")),
                (this.cdd.canSetOrnamentGlassSide = e.get(
                  "canSetOrnamentGlass"
                )),
                e.get("defaultSideGlass"))
              ) {
                var t = e.get("defaultSideGlass");
                this.cdd.setSideGlass({ code: t.code, label: t.label }),
                  this.cdd.setSideGlassType("motive"),
                  this.cdd.setSideGlassDisabledRepeat(t.disableOnMultipleSide);
              } else {
                var i = this.dd("ornament");
                this.cdd.setSideGlass({ code: i.code, label: i.label }),
                  this.cdd.setSideGlassType("ornament"),
                  this.cdd.setSideGlassDisabledRepeat(!1);
              }
              e.get("defaultWidth") > 0 &&
                (this.cdd.defaultSideWidth = e.get("defaultWidth"));
              var o =
                e.get("minWidth") > 0
                  ? e.get("minWidth")
                  : this.configuration.get("minSideWidth");
              o &&
                ((this.cdd.minSideWidth = o),
                this.cdd.minSideWidth > this.cdd.getLeftWidth() &&
                  this.cdd.setLeftWidth(this.cdd.minSideWidth),
                this.cdd.getLeftWidth(1) &&
                  this.cdd.minSideWidth > this.cdd.getLeftWidth(1) &&
                  this.cdd.setLeftWidth(this.cdd.minSideWidth, 1),
                this.cdd.minSideWidth > this.cdd.getRightWidth() &&
                  this.cdd.setRightWidth(this.cdd.minSideWidth),
                this.cdd.getRightWidth(1) &&
                  this.cdd.minSideWidth > this.cdd.getRightWidth(1) &&
                  this.cdd.setRightWidth(this.cdd.minSideWidth, 1));
              var s =
                e.get("maxWidth") > 0
                  ? e.get("maxWidth")
                  : this.configuration.get("maxSideWidth");
              s &&
                ((this.cdd.maxSideWidth = s),
                this.cdd.maxSideWidth < this.cdd.getLeftWidth() &&
                  this.cdd.setLeftWidth(this.cdd.maxSideWidth),
                this.cdd.getLeftWidth(1) &&
                  this.cdd.maxSideWidth < this.cdd.getLeftWidth(1) &&
                  this.cdd.setLeftWidth(this.cdd.maxSideWidth, 1),
                this.cdd.maxSideWidth < this.cdd.getRightWidth() &&
                  this.cdd.setRightWidth(this.cdd.maxSideWidth),
                this.cdd.getRightWidth(1) &&
                  this.cdd.maxSideWidth < this.cdd.getRightWidth(1) &&
                  this.cdd.setRightWidth(this.cdd.maxSideWidth, 1)),
                e
                  .get("code")
                  .toLowerCase()
                  .indexOf("sameAsPanel".toLowerCase()) >= 0 &&
                  (this.cdd.setLeftWidth(this.cdd.defaultSideWidth),
                  this.cdd.setRightWidth(this.cdd.defaultSideWidth)),
                this.tracker.sendEvent(
                  "Door model",
                  "side model change",
                  e.get("code")
                );
            } else {
              (this.cdd.sideModel = null),
                (this.cdd.sideModelName = null),
                (this.cdd.hasSideModelMotive = !1),
                (this.cdd.canSetOrnamentGlassSide = !0);
              var i = this.dd("ornament");
              this.cdd.setSideGlass({ code: i.code, label: i.label }),
                this.cdd.setSideGlassType("ornament"),
                this.cdd.setSideGlassDisabledRepeat(!1),
                (this.cdd.sideModelDummy = this.dd("hasDoorSideGlass"));
              var n = new Backbone.Model(this.dd("doorDimensions"));
              n.get("defaultSideWidth")
                ? (this.cdd.defaultSideWidth = n.get("defaultSideWidth"))
                : this.configuration.get("defaultSideWidth") &&
                  (this.cdd.defaultSideWidth =
                    this.configuration.get("defaultSideWidth")),
                n.get("minSideWidth")
                  ? (this.cdd.minSideWidth = n.get("minSideWidth"))
                  : this.configuration.get("minSideWidth") &&
                    (this.cdd.minSideWidth =
                      this.configuration.get("minSideWidth")),
                n.get("maxSideWidth")
                  ? (this.cdd.maxSideWidth = n.get("maxSideWidth"))
                  : this.configuration.get("maxSideWidth") &&
                    (this.cdd.maxSideWidth =
                      this.configuration.get("maxSideWidth")),
                this.cdd.getLeftWidth() < this.cdd.minSideWidth &&
                  this.cdd.setLeftWidth(this.cdd.minSideWidth),
                this.cdd.getRightWidth() < this.cdd.minSideWidth &&
                  this.cdd.setRightWidth(this.cdd.minSideWidth),
                this.cdd.getLeftWidth() > this.cdd.maxSideWidth &&
                  this.cdd.setLeftWidth(this.cdd.minSideWidth),
                this.cdd.getRightWidth() > this.cdd.maxSideWidth &&
                  this.cdd.setRightWidth(this.cdd.minSideWidth),
                this.tracker.sendEvent(
                  "Door model",
                  "side model change",
                  i.code
                );
            }
            this.conf("hasItems") && this.getItemModel().setSideModelItems(),
              KEvent.trigger(KEvent.SIDE_MODEL_CHANGE, e),
              this.calculateDimensions(),
              this.loadDoorImage();
          },
          getEquipment: function (e) {
            this.remote.getEquipment(
              e,
              function (e, t) {
                KEvent.trigger(KEvent.EQUIPMENT_DATA, e, t);
              },
              this
            );
          },
          getEquipmentList: function (e, t) {
            this.remote.getEquipmentList(
              e,
              t,
              function (e, t) {
                KEvent.trigger(KEvent.EQUIPMENT_LIST_DATA, e, t);
              },
              this
            );
          },
          getEquipmentGroup: function (e) {
            this.remote.getEquipmentGroup(
              e,
              function (e, t) {
                KEvent.trigger(KEvent.EQUIPMENT_GROUP_DATA, e, t);
              },
              this
            );
          },
          equipmentViewChange: function (e) {
            this.cdd.setEquipmentView(e),
              KEvent.trigger(KEvent.EQUIPMENT_VIEW_CHANGE, e),
              this.tracker.sendEvent("Equipment", "view change", e);
          },
          getAllMaterials: function () {
            this.remote.getAllMaterials(function (e) {
              KEvent.trigger(KEvent.ALL_MATERIALS_DATA, e);
            }, this);
          },
          materialChange: function (e) {
            if (
              e &&
              e.get("code") &&
              e.get("code").toLowerCase() != this.cdd.getMaterial()
            ) {
              this.cdd.setMaterial(e.get("code").toLowerCase()),
                this.conf("hasItems") &&
                  this.getItemModel().setEquipmentItems();
              var t = e.get("color");
              if (t) {
                var i = t.colorCode ? t.colorCode : t,
                  o = { code: i, group: t.group };
                i &&
                  "string" == typeof i &&
                  (this.cdd.setColor(o, Color.PANEL),
                  this.cdd.setColor(o, Color.FRAME),
                  this.hasDoorElement("wing") &&
                    this.cdd.setColor(o, Color.WING),
                  this.hasLayer("dframe") &&
                    !this.cdd.getColor(Color.DFRAME).sameAsPanel &&
                    this.cdd.copyColor(Color.PANEL, Color.DFRAME),
                  this.hasLayer("dframe2") &&
                    !this.cdd.getColor(Color.DFRAME2).sameAsPanel &&
                    this.cdd.copyColor(Color.PANEL, Color.DFRAME2),
                  this.hasLayer("cassette") &&
                    !this.cdd.getColor(Color.CASSETTE).sameAsPanel &&
                    this.cdd.copyColor(Color.PANEL, Color.CASSETTE),
                  this.conf("insideView") &&
                    (this.cdd.setColor(o, Color.PANEL_INSIDE),
                    this.cdd.setColor(o, Color.FRAME_INSIDE),
                    this.hasInsideLayer("wing") &&
                      this.cdd.setColor(o, Color.WING_INSIDE),
                    this.hasInsideLayer("dframe") &&
                      !this.cdd.getColor(Color.DFRAME_INSIDE).sameAsPanel &&
                      this.cdd.copyColor(Color.PANEL, Color.DFRAME_INSIDE),
                    this.hasInsideLayer("dframe2") &&
                      !this.cdd.getColor(Color.DFRAME2_INSIDE).sameAsPanel &&
                      this.cdd.copyColor(Color.PANEL, Color.DFRAME2_INSIDE),
                    this.hasInsideLayer("cassette") &&
                      !this.cdd.getColor(Color.CASSETTE_INSIDE).sameAsPanel &&
                      this.cdd.copyColor(Color.PANEL, Color.CASSETTE_INSIDE)));
              } else {
                var s = [];
                this.cdd.getColor(Color.PANEL) &&
                  s.push({
                    part: "PANEL",
                    colorCode: this.cdd.getColor(Color.PANEL).code,
                  }),
                  this.cdd.getColor(Color.FRAME) &&
                    s.push({
                      part: "FRAME",
                      colorCode: this.cdd.getColor(Color.FRAME).code,
                    }),
                  this.hasDoorElement("wing") &&
                    s.push({
                      part: "WING",
                      colorCode: this.cdd.getColor(Color.WING).code,
                    }),
                  this.hasDoorElement("application") &&
                    s.push({
                      part: "APPLICATION",
                      colorCode: this.cdd.getColor(Color.APP).code,
                    }),
                  this.hasDoorElement("application2") &&
                    s.push({
                      part: "APPLICATION2",
                      colorCode: this.cdd.getColor(Color.APP2).code,
                    }),
                  this.cdd.getColor(Color.DFRAME) &&
                    s.push({
                      part: "DFRAME",
                      colorCode: this.cdd.getColor(Color.DFRAME).code,
                    }),
                  this.cdd.getColor(Color.PANEL2) &&
                    s.push({
                      part: "PANEL2",
                      colorCode: this.cdd.getColor(Color.PANEL2).code,
                    }),
                  this.cdd.getColor(Color.PANEL3) &&
                    s.push({
                      part: "PANEL3",
                      colorCode: this.cdd.getColor(Color.PANEL3).code,
                    }),
                  this.conf("insideView") &&
                    (this.cdd.getColor(Color.PANEL_INSIDE) &&
                      s.push({
                        part: "PANEL",
                        colorCode: this.cdd.getColor(Color.PANEL_INSIDE).code,
                        inside: !0,
                      }),
                    this.cdd.getColor(Color.FRAME_INSIDE) &&
                      s.push({
                        part: "FRAME",
                        colorCode: this.cdd.getColor(Color.FRAME_INSIDE).code,
                        inside: !0,
                      }),
                    this.hasInsideLayer("application") &&
                      s.push({
                        part: "APPLICATION",
                        colorCode: this.cdd.getColor(Color.APP_INSIDE).code,
                        inside: !0,
                      }),
                    this.hasInsideLayer("application2") &&
                      s.push({
                        part: "APPLICATION2",
                        colorCode: this.cdd.getColor(Color.APP2_INSIDE).code,
                        inside: !0,
                      }),
                    this.hasInsideLayer("dframe") &&
                      s.push({
                        part: "DFRAME",
                        colorCode: this.cdd.getColor(Color.DFRAME_INSIDE).code,
                        inside: !0,
                      }),
                    this.hasInsideLayer("PANEL2_INSIDE") &&
                      s.push({
                        part: "PANEL2",
                        colorCode: this.cdd.getColor(Color.PANEL2_INSIDE).code,
                        inside: !0,
                      }),
                    this.hasInsideLayer("PANEL3_INSIDE") &&
                      s.push({
                        part: "PANEL3",
                        colorCode: this.cdd.getColor(Color.PANEL3_INSIDE).code,
                        inside: !0,
                      })),
                  this.remote.checkColor(
                    s,
                    function (t) {
                      _.each(
                        t,
                        function (e) {
                          var t = {
                            code: e.colorCode,
                            colorType: e.colorType,
                            group: e.group,
                          };
                          switch (e.part) {
                            case "PANEL":
                              e.inside
                                ? this.cdd.setColor(t, Color.PANEL_INSIDE)
                                : this.cdd.setColor(t, Color.PANEL);
                              break;
                            case "FRAME":
                              e.inside
                                ? this.cdd.setColor(t, Color.FRAME_INSIDE)
                                : this.cdd.setColor(t, Color.FRAME);
                              break;
                            case "APPLICATION":
                              e.inside
                                ? this.cdd.setColor(t, Color.APP_INSIDE)
                                : this.cdd.setColor(t, Color.APP);
                              break;
                            case "APPLICATION2":
                              e.inside
                                ? this.cdd.setColor(t, Color.APP2_INSIDE)
                                : this.cdd.setColor(t, Color.APP2);
                              break;
                            case "DFRAME":
                              e.inside
                                ? this.cdd.setColor(t, Color.DFRAME_INSIDE)
                                : this.cdd.setColor(t, Color.DFRAME);
                              break;
                            case "DFRAME2":
                              e.inside
                                ? this.cdd.setColor(t, Color.DFRAME2_INSIDE)
                                : this.cdd.setColor(t, Color.DFRAME2);
                              break;
                            case "PANEL2":
                              e.inside
                                ? this.cdd.setColor(t, Color.PANEL2_INSIDE)
                                : this.cdd.setColor(t, Color.PANEL2);
                              break;
                            case "PANEL3":
                              e.inside
                                ? this.cdd.setColor(t, Color.PANEL3_INSIDE)
                                : this.cdd.setColor(t, Color.PANEL3);
                          }
                        },
                        this
                      ),
                        this.loadDoorImage(),
                        KEvent.trigger(KEvent.MATERIAL_CHANGE, e),
                        this.tracker.sendEvent(
                          "Material",
                          "material change",
                          e.get("code")
                        );
                    },
                    this
                  );
              }
              t &&
                (this.loadDoorImage(),
                KEvent.trigger(KEvent.MATERIAL_CHANGE, e),
                this.tracker.sendEvent(
                  "Material",
                  "material change",
                  e.get("code")
                ));
            }
          },
          setMaterialColor: function (e) {
            var t = e.color
                ? { code: e.color.colorCode, group: e.color.group }
                : null,
              i = e.insideColor
                ? { code: e.insideColor.colorCode, group: e.insideColor.group }
                : t || null;
            t &&
              (this.cdd.setColor(t, Color.PANEL),
              this.cdd.setColor(t, Color.FRAME),
              this.hasDoorElement("wing") && this.cdd.setColor(t, Color.WING),
              this.cdd.getPartsColorAsPanel() &&
                (this.hasLayer("dframe") &&
                  !this.cdd.getColor(Color.DFRAME).sameAsPanel &&
                  this.cdd.copyColor(Color.PANEL, Color.DFRAME),
                this.hasLayer("dframe2") &&
                  !this.cdd.getColor(Color.DFRAME2).sameAsPanel &&
                  this.cdd.copyColor(Color.PANEL, Color.DFRAME2),
                this.hasLayer("cassette") &&
                  !this.cdd.getColor(Color.CASSETTE).sameAsPanel &&
                  this.cdd.copyColor(Color.PANEL, Color.CASSETTE),
                this.hasLayer("panel2") &&
                  !this.cdd.getColor(Color.PANEL2).sameAsPanel &&
                  this.cdd.copyColor(Color.PANEL, Color.PANEL2))),
              this.conf("insideView") &&
                i &&
                (this.cdd.setColor(i, Color.PANEL_INSIDE),
                this.cdd.setColor(i, Color.FRAME_INSIDE),
                this.hasInsideLayer("wing") &&
                  this.cdd.setColor(i, Color.WING_INSIDE),
                this.cdd.getPartsColorAsPanel() &&
                  (this.hasInsideLayer("dframe") &&
                    !this.cdd.getColor(Color.DFRAME_INSIDE).sameAsPanel &&
                    this.cdd.copyColor(Color.PANEL_INSIDE, Color.DFRAME_INSIDE),
                  this.hasInsideLayer("dframe2") &&
                    !this.cdd.getColor(Color.DFRAME2_INSIDE).sameAsPanel &&
                    this.cdd.copyColor(
                      Color.PANEL_INSIDE,
                      Color.DFRAME2_INSIDE
                    ),
                  this.hasInsideLayer("cassette") &&
                    !this.cdd.getColor(Color.CASSETTE_INSIDE).sameAsPanel &&
                    this.cdd.copyColor(
                      Color.PANEL_INSIDE,
                      Color.CASSETTE_INSIDE
                    ),
                  this.hasInsideLayer("panel2") &&
                    !this.cdd.getColor(Color.PANEL2_INSIDE).sameAsPanel &&
                    this.cdd.copyColor(
                      Color.PANEL_INSIDE,
                      Color.PANEL2_INSIDE
                    )));
          },
          profileChange: function (e) {
            this.cdd.setProfile(e.attributes),
              e.get("equipment") &&
                this._setDefaultEquipmentList(e.get("equipment")),
              e.get("wing") && this.cdd.setWingCode(e.get("wing").code),
              0 == this.conf("panelOnInnerFrame") &&
                Wing.isOutside(this.cdd.getWingCode()) &&
                this.cdd.setPanelProtection(null);
            var t = e.get("material");
            t &&
              t.code &&
              t.code.toLowerCase() != this.cdd.getMaterial() &&
              (this.cdd.setMaterial(t.code.toLowerCase()),
              (t.color || t.insideColor) && this.setMaterialColor(t)),
              "wing" == this.conf("innerFrameColorMode") &&
                (Wing.isOutside(this.cdd.getWingCode())
                  ? this.cdd.getColor(Color.WING) ||
                    this.cdd.copyColor(Color.PANEL, Color.WING)
                  : this.cdd.setColor(null, Color.WING),
                Wing.isInside(this.cdd.getWingCode())
                  ? this.cdd.getColor(Color.WING_INSIDE) ||
                    this.cdd.copyColor(Color.PANEL_INSIDE, Color.WING_INSIDE)
                  : this.cdd.setColor(null, Color.WING_INSIDE)),
              this.conf("hasItems") && this.getItemModel().setProfileItems(),
              this.runProfileRules(e.attributes),
              this.runSideModelRules(this.dd("sideModel")),
              this.loadDoorImage(),
              KEvent.trigger(KEvent.PROFILE_CHANGE, e),
              this.tracker.sendEvent(
                "Profile",
                "profile change",
                e.get("code")
              );
          },
          createThumbnailCategory: function () {
            this.remote.createThumbnail(
              this.dd("category"),
              function (e) {
                KEvent.trigger(KEvent.THUMBNAIL_CREATE_DONE);
              },
              this
            );
          },
          createThumbnailAll: function () {
            this.remote.createThumbnail(
              null,
              function (e) {
                KEvent.trigger(KEvent.THUMBNAIL_CREATE_DONE);
              },
              this
            );
          },
          createThumbnailList: function (e) {
            this.remote.createThumbnailList(
              e,
              function (e) {
                KEvent.trigger(KEvent.THUMBNAIL_CREATE_DONE);
              },
              this
            );
          },
          getPackages: function () {
            this.remote.getPackages(function (e) {
              KEvent.trigger(KEvent.PACKAGES_DATA, e);
            });
          },
          setSecureLatchOptions: function (e) {
            _.each(
              this.cdd.secureLatchOptions,
              function (t) {
                var i = null;
                null != e &&
                  e.length > 0 &&
                  _.each(
                    e,
                    function (e) {
                      e.type === t && (i = { code: e.code, label: e.label });
                    },
                    this
                  ),
                  "inside-mirror" === t
                    ? this.cdd.setInsideMirror(i)
                    : "dayNight" === t
                    ? this.cdd.setDayNight(i)
                    : "opener" === t
                    ? this.cdd.setOpener(i)
                    : "rigidChain" === t
                    ? this.cdd.setRigidChain(i)
                    : "accessControls" === t
                    ? this.cdd.setAccessControl(i)
                    : "fingerprint" === t && this.cdd.setFingerprint(i);
              },
              this
            );
          },
          _setDefaultEquipmentList: function (e) {
            (this.defaultEquipmentList = e),
              null !=
                _.find(this.defaultEquipmentList, function (e) {
                  return "secureLatch" === e.type;
                }) && this.setSecureLatchOptions(null),
              _.each(
                this.defaultEquipmentList,
                function (e) {
                  "drzala" == e.type &&
                    (this.cdd.setOutsideHandle({
                      code: e.code,
                      label: e.label,
                    }),
                    this.cdd.setShowRosette(e.showRozeta),
                    this.cdd.setOutsideHandleType("HANDLE"),
                    this.cdd.removeItems("handleOption"),
                    this.cdd.removeItems("handleOptionRdCh"),
                    this.cdd.setAdditionalRemotes(null),
                    this.cdd.setHasAccessControlHandle(!1)),
                    "kljuke-notranje" == e.type &&
                      (this.cdd.setOutsideHandle({
                        code: e.code,
                        label: e.label,
                      }),
                      this.cdd.setShowRosette(e.showRozeta),
                      this.cdd.setOutsideHandleType("DOOR-LOCK")),
                    "kljuke" == e.type &&
                      (this.cdd.setInsideHandle({
                        code: e.code,
                        label: e.label,
                      }),
                      this.cdd.setInsideHandleType("door-inner-lock"),
                      this.cdd.setShowInsideRosette(e.showRozeta)),
                    "handleSet" == e.type &&
                      (this.cdd.setOutsideHandle({
                        code: e.code,
                        label: e.label,
                      }),
                      this.cdd.setInsideHandle({
                        code: e.code,
                        label: e.label,
                      }),
                      this.cdd.setShowRosette(e.showRozeta),
                      this.cdd.setShowInsideRosette(e.showRozeta),
                      this.cdd.setOutsideHandleType("handle-set"),
                      this.cdd.setInsideHandleType("handle-set")),
                    "praske" == e.type &&
                      this.cdd.setRosette({ code: e.code, label: e.label }),
                    "inside-rosette" === e.type &&
                      this.cdd.setInsideRosette({
                        code: e.code,
                        label: e.label,
                      }),
                    "panelProtect" === e.type &&
                      (e.removeEquipment
                        ? this.cdd.setPanelProtection(null)
                        : this.cdd.setPanelProtection({
                            code: e.code,
                            label: e.label,
                          })),
                    "doorstep" === e.type &&
                      (e.removeEquipment
                        ? this.cdd.setDoorstep(null)
                        : this.cdd.setDoorstep({
                            code: e.code,
                            label: e.label,
                          })),
                    "tolkala" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setKnocker(null)
                        : this.cdd.setKnocker({
                            code: e.code,
                            label: e.label,
                          })),
                    "cilinder" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setCylinder(null)
                        : this.cdd.setCylinder({
                            code: e.code,
                            label: e.label,
                          })),
                    "inside-mirror" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setInsideMirror(null)
                        : this.cdd.setInsideMirror({
                            code: e.code,
                            label: e.label,
                          })),
                    "peephole" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setPeephole(null)
                        : this.cdd.setPeephole({
                            code: e.code,
                            label: e.label,
                          })),
                    "hinge" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setHinge(null)
                        : this.cdd.setHinge({ code: e.code, label: e.label })),
                    "stopper" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setStopper(null)
                        : this.cdd.setStopper({
                            code: e.code,
                            label: e.label,
                          })),
                    "mailbox" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setMailbox(null)
                        : this.cdd.setMailbox({
                            code: e.code,
                            label: e.label,
                          })),
                    "accessControls" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setAccessControl(null)
                        : this.cdd.setAccessControl({
                            code: e.code,
                            label: e.label,
                          })),
                    "secureLatch" == e.type &&
                      this.cdd.setSecureLatch({ code: e.code, label: e.label }),
                    "ledLight" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setLedLight(null)
                        : this.cdd.setLedLight({
                            code: e.code,
                            label: e.label,
                          })),
                    "remoteControl" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setRemoteControl(null)
                        : this.cdd.setRemoteControl({
                            code: e.code,
                            label: e.label,
                          })),
                    "rigidChain" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setRigidChain(null)
                        : this.cdd.setRigidChain({
                            code: e.code,
                            label: e.label,
                          })),
                    "substructure" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setSubstructure(null)
                        : this.cdd.setSubstructure({
                            code: e.code,
                            label: e.label,
                          })),
                    "opener" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setOpener(null)
                        : this.cdd.setOpener({ code: e.code, label: e.label })),
                    "securityFeature" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setSecurityFeature(null)
                        : this.cdd.setSecurityFeature({
                            code: e.code,
                            label: e.label,
                          })),
                    "threshold" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setThreshold(null)
                        : this.cdd.setThreshold({
                            code: e.code,
                            label: e.label,
                          })),
                    "connector" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setConnector(null)
                        : this.cdd.setConnector({
                            code: e.code,
                            label: e.label,
                          })),
                    "general-equipment" == e.type &&
                      (e.removeEquipment
                        ? (this.cdd.setGeneralEquipment(null),
                          this.cdd.setGeneralEquipmentValue(null))
                        : (this.cdd.setGeneralEquipment({
                            code: e.code,
                            label: e.label,
                          }),
                          this.cdd.setGeneralEquipmentValue(null))),
                    "general-equipment2" == e.type &&
                      (e.removeEquipment
                        ? (this.cdd.setGeneralEquipment2(null),
                          this.cdd.setGeneralEquipment2Value(null))
                        : (this.cdd.setGeneralEquipment2({
                            code: e.code,
                            label: e.label,
                          }),
                          this.cdd.setGeneralEquipment2Value(null))),
                    "general-equipment3" == e.type &&
                      (e.removeEquipment
                        ? (this.cdd.setGeneralEquipment3(null),
                          this.cdd.setGeneralEquipment3Value(null))
                        : (this.cdd.setGeneralEquipment3({
                            code: e.code,
                            label: e.label,
                          }),
                          this.cdd.setGeneralEquipment3Value(null))),
                    "scratch-protection" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setScratchProtection(null)
                        : this.cdd.setScratchProtection({
                            code: e.code,
                            label: e.label,
                          })),
                    "hisnaSt" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setHouseNumber(null)
                        : this.cdd.setHouseNumber(
                            { code: e.code, label: e.label },
                            "/"
                          )),
                    "side-mailbox" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setSideMailbox(null)
                        : this.cdd.setSideMailbox(
                            { code: e.code, label: e.label },
                            "/"
                          )),
                    "equipment-package" == e.type &&
                      (e.removeEquipment
                        ? this.cdd.setEquipmentPackage(null)
                        : this.cdd.setEquipmentPackage({
                            code: e.code,
                            label: e.label,
                          }));
                },
                this
              );
          },
          packageChange: function (e, t) {
            if (
              (this.cdd.setPackage(e.get("code")),
              Util.log("Package set:", e.attributes),
              e.get("equipment"))
            ) {
              var i = [];
              e.get("equipment").forEach(function (e) {
                e.optional || i.push(e);
              }, this),
                this._setDefaultEquipmentList(i);
            }
            if (e.get("profile")) {
              this.profileList = e.get("profile");
              var o = this.prepareProfileList(this.profileList, {
                din: this.cdd.getDinDirection(),
                model: this.cdd.doorModel,
              });
              o &&
                o.privzeto &&
                (this.cdd.setProfile(o),
                o.wing && this.cdd.setWingCode(o.wing.code),
                o.material &&
                  o.material.code &&
                  ((o.material.code.toLowerCase() != this.cdd.getMaterial() ||
                    t) &&
                    o.material.color &&
                    (o.material.color || o.material.insideColor) &&
                    (e.set("updateColor", !0),
                    this.setMaterialColor(o.material)),
                  this.cdd.setMaterial(o.material.code.toLowerCase())),
                0 == this.conf("panelOnInnerFrame") &&
                  Wing.isOutside(this.cdd.getWingCode()) &&
                  this.cdd.setPanelProtection(null),
                this.runProfileRules(o),
                this.runSideModelRules(this.dd("sideModel")));
              var s = _.filter(this.profileList, function (e) {
                return e.visible;
              });
              if (1 == s.length) {
                var o = s[0];
                this.cdd.setProfile(o),
                  o.wing && this.cdd.setWingCode(o.wing.code),
                  o.material &&
                    o.material.code &&
                    this.cdd.setMaterial(o.material.code.toLowerCase()),
                  0 == this.conf("panelOnInnerFrame") &&
                    Wing.isOutside(this.cdd.getWingCode()) &&
                    this.cdd.setPanelProtection(null);
              }
            }
            this.conf("hasItems") && this.getItemModel().setPackageItems(),
              this.tracker.sendEvent(
                "Package",
                "Package change",
                e.get("code")
              ),
              KEvent.trigger(KEvent.PACKAGE_CHANGE, e),
              this.loadDoorImage();
          },
          insideHandleChange: function (e) {
            if (
              (this.cdd.setInsideHandle({
                code: e.get("code"),
                label: e.get("label"),
              }),
              this.cdd.setInsideHandleType("door-inner-lock"),
              this.cdd.setShowInsideRosette(e.get("showRozeta")),
              "handle-set" == this.cdd.getOutsideHandleType())
            ) {
              var t;
              "handleSet" != this.dd("drzalo").zlist
                ? (t = this.dd("drzalo"))
                : this.dd("doorEquipment") &&
                  _.each(
                    this.dd("doorEquipment"),
                    function (e) {
                      ("drzala" != e.zlist && "kljuke-notranje" != e.zlist) ||
                        (t = e);
                    },
                    this
                  );
            }
            t &&
              (this.cdd.setOutsideHandle({ code: t.code, label: t.label }),
              "kljuke-notranje" == t.zlist
                ? this.cdd.setOutsideHandleType("DOOR-LOCK")
                : this.cdd.setOutsideHandleType("HANDLE"),
              this.cdd.setShowRosette(t.showRozeta),
              this.cdd.setHasAccessControlHandle(t.hasAccessControl),
              this.cdd.setHasPeepholeHandle(t.hasPeephole)),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "insideHandle"),
              this.isInsideWall() && this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Handle inside change",
                e.get("code")
              );
          },
          outsideHandleChange: function (e) {
            if (e.get("code") != this.cdd.getOutsideHandle()) {
              if (
                (this.cdd.setOutsideHandle({
                  code: e.get("code"),
                  label: e.get("label"),
                }),
                "drzala" == e.get("zlist")
                  ? (this.cdd.setOutsideHandleType("HANDLE"),
                    this.tracker.sendEvent(
                      "Equipment",
                      "Handle change",
                      e.get("code")
                    ))
                  : (this.cdd.setOutsideHandleType("DOOR-LOCK"),
                    this.tracker.sendEvent(
                      "Equipment",
                      "Hook change",
                      e.get("code")
                    )),
                e.get("hasAccessControl") && this.cdd.setAccessControl(null),
                this.cdd.setHasAccessControlHandle(e.get("hasAccessControl")),
                e.get("hasPeephole") && this.cdd.setPeephole(null),
                this.cdd.setHasPeepholeHandle(e.get("hasPeephole")),
                this.cdd.setShowRosette(e.get("showRozeta")),
                "handle-set" == this.cdd.getInsideHandleType() &&
                  this.dd("doorInsideEquipment"))
              ) {
                new Backbone.Collection(this.dd("doorInsideEquipment")).each(
                  function (e) {
                    "kljuke" == e.get("zlist") &&
                      (this.cdd.setInsideHandle({
                        code: e.get("code"),
                        label: e.get("label"),
                      }),
                      this.cdd.setInsideHandleType("door-inner-lock"),
                      this.cdd.setShowInsideRosette(e.get("showRozeta")));
                  },
                  this
                );
              }
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "outsideHandle"),
                this.loadDoorImage();
            }
          },
          handleSetChange: function (e) {
            var t = e.get("code");
            this.cdd.setOutsideHandle({ code: t, label: e.get("label") }),
              this.cdd.setOutsideHandleType("handle-set"),
              this.cdd.setInsideHandle({ code: t, label: e.get("label") }),
              this.cdd.setInsideHandleType("handle-set"),
              e.get("hasAccessControl") && this.cdd.setAccessControl(null),
              this.cdd.setHasAccessControlHandle(e.get("hasAccessControl")),
              e.get("hasPeephole") && this.cdd.setPeephole(null),
              this.cdd.setHasPeepholeHandle(e.get("hasPeephole")),
              this.cdd.setShowRosette(e.get("showRozeta")),
              this.cdd.setShowInsideRosette(e.get("showRozeta")),
              this.tracker.sendEvent(
                "Equipment",
                "Handle set change",
                e.get("code")
              ),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "handleSet"),
              this.loadDoorImage();
          },
          rosetteChange: function (e) {
            e.get("code") != this.cdd.getRosette() &&
              (this.cdd.setRosette({
                code: e.get("code"),
                label: e.get("label"),
              }),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "rosette"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Rossete change",
                e.get("code")
              ));
          },
          insideRosetteChange: function (e) {
            e.get("code") != this.cdd.getInsideRosette() &&
              (this.cdd.setInsideRosette({
                code: e.get("code"),
                label: e.get("label"),
              }),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "inside-rosette"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Inside Rossete change",
                e.get("code")
              ));
          },
          doorstepChange: function (e) {
            null != e
              ? this.cdd.setDoorstep({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setDoorstep(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "doorstep"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Doorstep change",
                e ? e.get("code") : null
              );
          },
          panelProtectionChange: function (e) {
            null != e
              ? this.cdd.setPanelProtection({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setPanelProtection(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "panelProtection"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Panel protection change",
                e ? e.get("code") : null
              );
          },
          knockerChange: function (e) {
            null != e
              ? this.cdd.setKnocker({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setKnocker(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "knocker"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Knocker change",
                e ? e.get("code") : null
              );
          },
          cylinderChange: function (e) {
            null != e
              ? this.cdd.setCylinder({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setCylinder(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "cylinder"),
              this.tracker.sendEvent(
                "Equipment",
                "Cylinder change",
                e ? e.get("code") : null
              );
          },
          peepholeChange: function (e) {
            null != e
              ? this.cdd.setPeephole({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setPeephole(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "peephole"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Peephole change",
                e ? e.get("code") : null
              );
          },
          accessControlChange: function (e) {
            null != e
              ? this.cdd.setAccessControl({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setAccessControl(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "accessControl"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Access control change",
                e ? e.get("code") : null
              );
          },
          hingeChange: function (e) {
            null != e
              ? this.cdd.setHinge({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setHinge(null),
              this.conf("drawHinges") && this.loadDoorImage(),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "hinge"),
              this.tracker.sendEvent(
                "Equipment",
                "Hinge change",
                e ? e.get("code") : null
              );
          },
          stopperChange: function (e) {
            null != e
              ? this.cdd.setStopper({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setStopper(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "stopper"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Stopper change",
                e ? e.get("code") : null
              );
          },
          openerChange: function (e) {
            null != e
              ? this.cdd.setOpener({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setOpener(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "opener"),
              this.tracker.sendEvent(
                "Equipment",
                "Opener change",
                e ? e.get("code") : null
              );
          },
          thresholdChange: function (e) {
            null != e
              ? this.cdd.setThreshold({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setThreshold(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "threshold"),
              this.tracker.sendEvent(
                "Equipment",
                "Threshold change",
                e ? e.get("code") : null
              );
          },
          houseNumberChange: function (e, t) {
            var i = e != this.cdd.getHouseNumber();
            null != e
              ? this.cdd.setHouseNumber(e, t)
              : this.cdd.setHouseNumber(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "houseNumber"),
              this.dd("houseNumberVisible") && i && this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Housenumber change",
                e || null
              );
          },
          mailboxChange: function (e) {
            null != e
              ? this.cdd.setMailbox({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setMailbox(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "mailbox"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Mailbox change",
                e ? e.get("code") : null
              );
          },
          sideMailboxChange: function (e) {
            null != e
              ? this.cdd.setSideMailbox({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setSideMailbox(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "sideMailbox"),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Side mailbox change",
                e ? e.get("code") : null
              );
          },
          secureLatchChange: function (e) {
            null != e
              ? this.cdd.setSecureLatch({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setSecureLatch(null),
              this.conf("hasItems") &&
                this.getItemModel().setSecureLatchItems(),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "secureLatch"),
              this.tracker.sendEvent(
                "Equipment",
                "SecureLatch change",
                e ? e.get("code") : null
              );
          },
          ledLightChange: function (e) {
            null != e
              ? this.cdd.setLedLight({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setLedLight(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "ledLight"),
              this.tracker.sendEvent(
                "Equipment",
                "Ledlight change",
                e ? e.get("code") : null
              );
          },
          connectorChange: function (e) {
            null != e
              ? this.cdd.setConnector({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setConnector(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "connector"),
              this.tracker.sendEvent(
                "Equipment",
                "Connector change",
                e ? e.get("code") : null
              );
          },
          remoteControlChange: function (e) {
            null != e
              ? this.cdd.setRemoteControl({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setRemoteControl(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "remoteControl"),
              this.tracker.sendEvent(
                "Equipment",
                "Remote control change",
                e ? e.get("code") : null
              );
          },
          dayNightChange: function (e) {
            null != e
              ? this.cdd.setDayNight({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setDayNight(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "dayNight"),
              this.tracker.sendEvent(
                "Equipment",
                "DayNight change",
                e ? e.get("code") : null
              );
          },
          rigidChainChange: function (e) {
            null != e
              ? this.cdd.setRigidChain({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setRigidChain(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "rigidChain"),
              this.tracker.sendEvent(
                "Equipment",
                "RigidChain change",
                e ? e.get("code") : null
              );
          },
          wallLampChange: function (e) {
            null != e
              ? this.cdd.setWallLamp({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setWallLamp(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "wallLamp", e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "WallLamp change",
                e ? e.get("code") : null
              );
          },
          wallMailboxChange: function (e) {
            e
              ? this.cdd.setWallMailBox({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setWallMailBox(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "wallMailbox", e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Wall mail box change",
                e ? e.get("code") : null
              );
          },
          wallBellChange: function (e) {
            e
              ? this.cdd.setWallBell({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setWallBell(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "wallBell", e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Wall bell change",
                e ? e.get("code") : null
              );
          },
          insideMirrorChange: function (e) {
            e
              ? this.cdd.setInsideMirror({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setInsideMirror(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "insideMirror", e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Inside mirror change",
                e ? e.get("code") : null
              );
          },
          scratchProtectionChange: function (e) {
            e
              ? this.cdd.setScratchProtection({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setScratchProtection(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "scratchProtection", e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Scratch protection change",
                e ? e.get("code") : null
              );
          },
          rotaryKnobChange: function (e, t) {
            e
              ? this.cdd.setRotaryKnob({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setRotaryKnob(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "rotaryKnob", e),
              t || this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Rotary knob change",
                e ? e.get("code") : null
              );
          },
          equipmentPackageChange: function (e) {
            e
              ? this.cdd.setEquipmentPackage({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setEquipmentPackage(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "equipmentPackage", e),
              this.tracker.sendEvent(
                "Equipment",
                "Equipment package change",
                e ? e.get("code") : null
              );
          },
          equipmentPackageValueChange: function (e) {
            this.cdd.setEquipmentPackageValue(e),
              KEvent.trigger(
                KEvent.EQUIPMENT_CHANGE,
                "equipmentPackageValue",
                e
              ),
              this.tracker.sendEvent(
                "Equipment",
                "Equipment package value change",
                e
              );
          },
          equipmentPackage1Change: function (e, t) {
            e
              ? this.cdd.setEquipmentPackage1({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setEquipmentPackage1(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "equipmentPackage1", e),
              t && this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Equipment package 1 change",
                e ? e.get("code") : null
              );
          },
          equipmentPackage1ValueChange: function (e) {
            this.cdd.setEquipmentPackage1Value(e),
              KEvent.trigger(
                KEvent.EQUIPMENT_CHANGE,
                "equipmentPackage1Value",
                e
              ),
              this.tracker.sendEvent(
                "Equipment",
                "Equipment package 1 value change",
                e
              );
          },
          securityFeatureChange: function (e) {
            e
              ? this.cdd.setSecurityFeature({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setSecurityFeature(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "securityFeature", e),
              this.tracker.sendEvent(
                "Equipment",
                "Security feature change",
                e ? e.get("code") : null
              );
          },
          additionalRemotesChange: function (e, t) {
            e
              ? this.cdd.setAdditionalRemotes(
                  {
                    code: e.code || e.get("code"),
                    label: e.label || (e.get && e.get("label")),
                  },
                  t
                )
              : this.cdd.setAdditionalRemotes(null, t),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "additionalRemotes", e),
              this.tracker.sendEvent(
                "Equipment",
                "Additional remotes change",
                e
              );
          },
          additionalRemotesValueChange: function (t) {
            t
              ? this.cdd.setAdditionalRemotesValue(t)
              : this.cdd.setAdditionalRemotesValue(null),
              KEvent.trigger(
                KEvent.EQUIPMENT_CHANGE,
                "additionalRemotes value",
                e
              ),
              this.tracker.sendEvent(
                "Equipment",
                "Additional Remotes value change",
                e
              );
          },
          substructureChange: function (e) {
            e
              ? this.cdd.setSubstructure({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setSubstructure(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "substructure", e),
              this.tracker.sendEvent("Equipment", "Substructure change", e);
          },
          substructureValueChange: function (e) {
            e
              ? this.cdd.setSubstructureValue(e)
              : this.cdd.setSubstructureValue(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "substructure value", e),
              this.tracker.sendEvent("Equipment", "Substructure change", e);
          },
          generalEquipmentChange: function (e, t) {
            e
              ? (this.cdd.setGeneralEquipment({
                  code: e.get ? e.get("code") : e,
                  label: e.get ? e.get("label") : null,
                }),
                this.cdd.setGeneralEquipmentValue(t))
              : (this.cdd.setGeneralEquipment(e),
                this.cdd.setGeneralEquipmentValue(t)),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "generalEquipment", e),
              this.tracker.sendEvent(
                "Equipment",
                "General Equipment change",
                e
              );
          },
          cylinderKnobChange: function (e) {
            e
              ? this.cdd.setCylinderKnob({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setCylinderKnob(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "cylinderKnob", e),
              this.tracker.sendEvent("Equipment", "Cylinder knob change", e),
              this.loadDoorImage();
          },
          generalEquipmentValueChange: function (t) {
            t
              ? this.cdd.setGeneralEquipmentValue(t)
              : this.cdd.setGeneralEquipmentValue(null),
              KEvent.trigger(
                KEvent.EQUIPMENT_CHANGE,
                "generalEquipment value",
                e
              ),
              this.tracker.sendEvent(
                "Equipment",
                "General Equipment value change",
                e
              );
          },
          generalEquipment2Change: function (e, t) {
            e
              ? (this.cdd.setGeneralEquipment2({
                  code: e.get ? e.get("code") : e,
                  label: e.get ? e.get("label") : null,
                }),
                this.cdd.setGeneralEquipment2Value(t))
              : (this.cdd.setGeneralEquipment2(e),
                this.cdd.setGeneralEquipment2Value(t)),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "generalEquipment2", e),
              this.tracker.sendEvent(
                "Equipment",
                "General Equipment 2 change",
                e
              );
          },
          generalEquipmentValue2Change: function (t) {
            t
              ? this.cdd.setGeneralEquipment2Value(t)
              : this.cdd.setGeneralEquipment2Value(null),
              KEvent.trigger(
                KEvent.EQUIPMENT_CHANGE,
                "generalEquipment 2 value",
                e
              ),
              this.tracker.sendEvent(
                "Equipment",
                "General Equipment 2 value change",
                e
              );
          },
          generalEquipment3Change: function (e, t) {
            e
              ? (this.cdd.setGeneralEquipment3({
                  code: e.get ? e.get("code") : e,
                  label: e.get ? e.get("label") : null,
                }),
                this.cdd.setGeneralEquipment3Value(t))
              : (this.cdd.setGeneralEquipment3(e),
                this.cdd.setGeneralEquipment3Value(t)),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "generalEquipment3", e),
              this.tracker.sendEvent(
                "Equipment",
                "General Equipment 3 change",
                e
              );
          },
          generalEquipmentValue3Change: function (e) {
            e
              ? this.cdd.setGeneralEquipment3Value(e)
              : this.cdd.setGeneralEquipment3Value(null),
              KEvent.trigger(
                KEvent.EQUIPMENT_CHANGE,
                "generalEquipment 3 value",
                e
              ),
              this.tracker.sendEvent(
                "Equipment",
                "General Equipment 3 value change",
                e
              );
          },
          fingerprintChange: function (e) {
            e
              ? this.cdd.setFingerprint({
                  code: e.get("code"),
                  label: e.get("label"),
                })
              : this.cdd.setFingerprint(null),
              KEvent.trigger(KEvent.EQUIPMENT_CHANGE, "fingerprint", e),
              this.loadDoorImage(),
              this.tracker.sendEvent(
                "Equipment",
                "Fingerprint change",
                e ? e.get("code") : null
              );
          },
          setDefaultOutsideHandle: function () {
            if (this.defaultEquipmentList) {
              var e = _.findWhere(this.defaultEquipmentList, {
                type: "drzala",
              });
              e ||
                (e = _.findWhere(this.defaultEquipmentList, {
                  type: "kljuke-notranje",
                })),
                e &&
                  (this.cdd.setOutsideHandle({ code: e.code, label: e.label }),
                  "kljuke-notranje" == e.type
                    ? this.cdd.setOutsideHandleType("DOOR-LOCK")
                    : this.cdd.setOutsideHandleType("HANDLE"),
                  this.cdd.setHasAccessControlHandle(!1),
                  this.cdd.setHasPeepholeHandle(!1));
            } else
              this.dd("drzalo") &&
                (this.cdd.setOutsideHandle({
                  code: this.dd("drzalo").code,
                  label: this.dd("drzalo").label,
                }),
                "kljuke-notranje" == this.dd("drzalo").zlist
                  ? this.cdd.setOutsideHandleType("DOOR-LOCK")
                  : this.cdd.setOutsideHandleType("HANDLE"),
                this.cdd.setHasAccessControlHandle(
                  this.dd("drzalo").hasAccessControl
                ),
                this.cdd.setHasPeepholeHandle(this.dd("drzalo").hasPeephole));
          },
          setDimensionsPart: function (e, t) {
            "dWidth" == t
              ? (this.cdd.setWidth(e),
                this.conf("adjustablePanel2") || this.cdd.setPanel2Width(e),
                this.tracker.sendEvent("Construction", "door width change", e))
              : "dHeight" == t
              ? (this.cdd.setHeight(e),
                this.tracker.sendEvent("Construction", "door height change", e))
              : "lsWidth" == t
              ? (this.cdd.setLeftWidth(e),
                this.tracker.sendEvent("Construction", "left width change", e))
              : "ls2Width" == t
              ? (this.cdd.setLeftWidth(e, 1),
                this.tracker.sendEvent(
                  "Construction",
                  "2 left width change",
                  e
                ))
              : "rsWidth" == t
              ? (this.cdd.setRightWidth(e),
                this.tracker.sendEvent("Construction", "right width change", e))
              : "rs2Width" == t
              ? (this.cdd.setRightWidth(e, 1),
                this.tracker.sendEvent(
                  "Construction",
                  "2 right width change",
                  e
                ))
              : "upHeight" == t
              ? (this.cdd.setTopHeight(e),
                this.tracker.sendEvent("Construction", "up height change", e))
              : "d2Width" == t
              ? this.cdd.setPanel2Width(e)
              : "mWidth" == t && this.cdd.setMiddleWidth(e);
          },
          dimensionsChange: function (e, t) {
            this.setDimensionsPart(e, t),
              this.calculateDimensions(),
              this.conf("hasItems") && this.getItemModel().setDimensionItems(),
              KEvent.trigger(KEvent.DIMENSION_CHANGE, t),
              ((this.conf("doorScaleEnabled") &&
                ("dWidth" == t || "dHeight" == t || "d2Width" == t)) ||
                (this.conf("scaleModeEnabled") &&
                  ("lsWidth" == t ||
                    "ls2Width" == t ||
                    "rsWidth" == t ||
                    "rs2Width" == t ||
                    "upHeight" == t ||
                    "mWidth" == t))) &&
                this.loadDoorImage();
          },
          sideRepeatLeftChange: function (e) {
            this.cdd.setRepeatLeft(e),
              this.calculateDimensions(),
              KEvent.trigger(KEvent.SIDE_REPEAT_CHANGE),
              this.conf("sideRepeatEnabled") && this.loadDoorImage(),
              this.runSideModelRules(this.dd("sideModel")),
              this.tracker.sendEvent("Construction", "left repeat change"),
              this.isPriceEnabled() && this.getPrice();
          },
          sideRepeatRightChange: function (e) {
            this.cdd.setRepeatRight(e),
              this.calculateDimensions(),
              KEvent.trigger(KEvent.SIDE_REPEAT_CHANGE),
              this.conf("sideRepeatEnabled") && this.loadDoorImage(),
              this.runSideModelRules(this.dd("sideModel")),
              this.tracker.sendEvent("Construction", "right repeat change"),
              this.isPriceEnabled() && this.getPrice();
          },
          overlightTypeChange: function (e) {
            this.cdd.setOverlightType(e),
              this.tracker.sendEvent("Construction", "overlight type change"),
              this.isPriceEnabled() && this.getPrice();
          },
          doorOptionChange: function (e) {
            this.cdd.setDoorOption(e),
              this.tracker.sendEvent("Construction", "door option change");
          },
          securityChange: function (e) {
            this.cdd.setSecuritySystem(e),
              this.tracker.sendEvent("Construction", "security system change");
          },
          blindProfileChange: function (e) {
            this.cdd.setBlindProfile(e),
              KEvent.trigger(KEvent.BLIND_PROFILE_CHANGE),
              this.loadDoorImage();
          },
          customRenderTypeChange: function (e) {
            this.cdd.setCustomRenderType(e),
              KEvent.trigger(KEvent.CUSTOM_RENDER_CHANGE),
              this.loadDoorImage();
          },
          designChange: function (e) {
            this.cdd.setDesignCode(e),
              this.loadDoorImage(),
              this.tracker.sendEvent("Construction", "Design change");
          },
          getDoorOption: function (e, t) {
            return new Backbone.Collection(this.dd("doorOptions")).findWhere({
              type: e,
              code: t,
            });
          },
          getDoorOptionByType: function (e) {
            return new Backbone.Collection(this.dd("doorOptions")).findWhere({
              type: e,
            });
          },
          getTopHeight: function () {
            return this.isTopFrame() ? this.cdd.getTopHeight() : 0;
          },
          getAllSidesWidth: function () {
            var e = 0;
            return (
              this.isLeftFrame() && (e += this.getTotalLeftWidth()),
              this.isRightFrame() && (e += this.getTotalRightWidth()),
              e
            );
          },
          getTotalLeftWidth: function () {
            return this.isDoubleSide()
              ? this.cdd.getLeftWidth() + this.cdd.getLeftWidth(1)
              : this.cdd.getLeftWidth() * this.cdd.getRepeatLeft();
          },
          getTotalRightWidth: function () {
            return this.isDoubleSide()
              ? this.cdd.getRightWidth() + this.cdd.getRightWidth(1)
              : this.cdd.getRightWidth() * this.cdd.getRepeatRight();
          },
          getPanelWidthLimit: function () {
            if (this.isTopFrame() && this.cdd.maxWidthTopGlass) {
              var e = this.cdd.maxWidthTopGlass - this.getAllSidesWidth();
              if (e < this.cdd.maxDoorWidth) return e;
            } else if (
              this.isSidelight() &&
              !this.isTopFrame() &&
              this.cdd.maxWidthSideGlass
            ) {
              var e = this.cdd.maxWidthSideGlass - this.getAllSidesWidth();
              if (e < this.cdd.maxDoorWidth) return e;
            }
            return this.cdd.maxDoorWidth;
          },
          getLeftWidthLimit: function (e) {
            var t = this.isTopFrame()
              ? this.cdd.maxWidthTopGlass
              : this.cdd.maxWidthSideGlass;
            if (t) {
              var i = 0;
              this.isRightFrame() && (i = this.getTotalRightWidth());
              var o = 0;
              this.isDoubleSide() &&
                (o = e ? this.cdd.getLeftWidth(0) : this.cdd.getLeftWidth(1));
              var s = t - (this.cdd.getWidth() + i + o);
              if (s < this.cdd.maxSideWidth) return s;
            }
            return this.cdd.maxSideWidth;
          },
          getRightWidthLimit: function (e) {
            var t = this.isTopFrame()
              ? this.cdd.maxWidthTopGlass
              : this.cdd.maxWidthSideGlass;
            if (t) {
              var i = 0;
              this.isLeftFrame() &&
                (i = this.cdd.getLeftWidth() * this.cdd.getRepeatLeft());
              var o = 0;
              this.isDoubleSide() &&
                (o = e ? this.cdd.getRightWidth(0) : this.cdd.getRightWidth(1));
              var s = t - (this.cdd.getWidth() + i + o);
              if (s < this.cdd.maxSideWidth) return s;
            }
            return this.cdd.maxSideWidth;
          },
          getPanelHeightLimit: function () {
            if (this.isTopFrame() && this.cdd.maxHeightTopGlass) {
              var e = this.cdd.maxHeightTopGlass - this.getTopHeight();
              if (e < this.cdd.maxDoorHeight) return e;
            }
            return this.cdd.maxDoorHeight;
          },
          getTopHeightLimit: function () {
            if (this.cdd.maxHeightTopGlass) {
              var e = this.cdd.maxHeightTopGlass - this.cdd.getHeight();
              if (e < this.cdd.maxTopHeight) return e;
            }
            return this.cdd.maxTopHeight;
          },
          dd: function (e) {
            return this.ddr ? (e ? this.ddr.get(e) : this.ddr) : null;
          },
          resetConfiguration: function () {
            this.cdd.setFrameType("SINGLE"),
              (this.cdd.doorDimensionsChanged = !1),
              this.setDefaultDimensions(),
              this.cdd.setDemandOptions([]),
              (this.cdd.commission = null),
              this.modelChange(this.dd("model")),
              KEvent.trigger(KEvent.RESET_CONFIGURATION);
          },
          modelChange: function (e, t) {
            e && (this.cdd.doorModel = e),
              this.cdd.reset(),
              0 == this.conf("retainProfileSelection") &&
                this.cdd.setProfile(null),
              (this.insideDoorElements = []),
              (this.defaultEquipmentList = null),
              this.getDoorData(),
              KEvent.trigger(KEvent.MODEL_CHANGE_EVENT, e, t),
              this.loadDoorImage(),
              this.tracker.sendEvent("Door model", "door model change", e, t);
          },
          insideModelChange: function (e) {
            e.get("model") != this.cdd.getInsideModel() &&
              (this.cdd.setInsideModel(e.get("model")),
              this.cdd.setInsideModelName(e.get("name")),
              (this.insideDoorElements = []),
              this.getInsideDoorData(),
              this.tracker.sendEvent(
                "Door model",
                "door inside model change",
                e
              ));
          },
          hasInsideLayer: function (e) {
            var t = !1;
            return (
              _.forEach(
                this.insideDoorElements,
                function (i) {
                  i.name == e && (t = !0);
                },
                this
              ),
              ("polnilo" != e &&
                "okvir" != e &&
                "panel" != e &&
                "frame" != e) ||
                (t = !0),
              t
            );
          },
          hasLayer: function (e) {
            var t = !1;
            return (
              _.forEach(
                this.dd("layer"),
                function (i) {
                  i.name == e && (t = !0);
                },
                this
              ),
              ("polnilo" != e && "okvir" != e) || (t = !0),
              t
            );
          },
          hasDoorElement: function (e) {
            var t = !1;
            return (
              _.forEach(
                this.dd("doorElements"),
                function (i) {
                  i.state == e && (t = !0);
                },
                this
              ),
              t
            );
          },
          getOutsideLayer: function (e) {
            var t;
            return (
              _.forEach(
                this.dd("layer"),
                function (i) {
                  i.name == e && (t = i);
                },
                this
              ),
              t
            );
          },
          calculateAndSetDimensions: function () {
            var e = this.cdd.getWidth(),
              t = this.cdd.getHeight();
            if (
              (this.conf("doorFrameWidth") &&
                (e += this.conf("doorFrameWidth")),
              this.conf("doorFrameHeight") &&
                (t += this.conf("doorFrameHeight")),
              this.isLeftFrame() && (e += this.getTotalLeftWidth()),
              this.isRightFrame() && (e += this.getTotalRightWidth()),
              this.isTopFrame() && (t += this.cdd.getTopHeight()),
              this.isDoubleFrame() && (e += this.cdd.getPanel2Width()),
              this.isMiddleGlassFrame() &&
                0 != this.cdd.getMiddleWidth() &&
                (e += this.cdd.getMiddleWidth()),
              (e += parseInt(
                Util.getArrayValueSum(this.cdd.getExtensionProfileLeft())
              )),
              (e += parseInt(
                Util.getArrayValueSum(this.cdd.getExtensionProfileRight())
              )),
              (t += parseInt(
                Util.getArrayValueSum(this.cdd.getExtensionProfileTop())
              )),
              this.isSlidingDoor())
            ) {
              e *= (this.cdd.getFrameType().match(/_/g) || []).length + 1;
            }
            this.cdd.setTotalWidth(e.toString()),
              this.cdd.setTotalHeight(t.toString());
          },
          calculateDimensions: function () {
            this.calculateAndSetDimensions(),
              KEvent.trigger(KEvent.FULL_DIMENSION_CHANGE);
          },
          getFullDimensions: function () {
            var e = "";
            return (
              this.conf("imperialUnits") &&
                (e =
                  " (" +
                  Util.getInch(this.cdd.getTotalWidth()) +
                  " x " +
                  Util.getInch(this.cdd.getTotalHeight()) +
                  " inch)"),
              this.cdd.getTotalWidth() + " x " + this.cdd.getTotalHeight() + e
            );
          },
          getTopWidthRestrictionText: function () {
            if (this.isTopFrame()) {
              var e = this.conf("maxWidthTopGlass");
              if (
                (this.dd("doorDimensions") &&
                  this.dd("doorDimensions").maxWidthTopGlass &&
                  (e = this.dd("doorDimensions").maxWidthTopGlass),
                e && e < this.cdd.getTotalWidth())
              )
                return (
                  this.getLabel("construction", "MAX_TOP_WIDTH") +
                  " " +
                  e +
                  " mm."
                );
            }
            return null;
          },
          dimensionRestrictionText: function (e) {
            return "dWidth" == e
              ? this.cdd.minDoorWidth && this.cdd.maxDoorWidth
                ? this.cdd.minDoorWidth + "-" + this.cdd.maxDoorWidth + " mm"
                : this.getLabel("konstruktion", "REMARK1")
                ? this.getLabel("konstruktion", "REMARK1")
                : null
              : "dWidth2" == e
              ? this.cdd.minDoorWidth2 && this.cdd.maxDoorWidth2
                ? this.cdd.minDoorWidth2 + "-" + this.cdd.maxDoorWidth2 + " mm"
                : this.getLabel("konstruktion", "REMARK1")
                ? this.getLabel("konstruktion", "REMARK1")
                : null
              : "dHeight" == e
              ? this.cdd.minDoorHeight && this.cdd.maxDoorHeight
                ? this.cdd.minDoorHeight + "-" + this.cdd.maxDoorHeight + " mm"
                : this.getLabel("konstruktion", "REMARK1")
                ? this.getLabel("konstruktion", "REMARK1")
                : null
              : "lsWidth" == e || "rsWidth" == e
              ? this.cdd.minSideWidth && this.cdd.maxSideWidth
                ? this.cdd.minSideWidth + "-" + this.cdd.maxSideWidth + " mm"
                : this.getLabel("konstruktion", "REMARK2")
                ? this.getLabel("konstruktion", "REMARK2")
                : null
              : "upHeight" == e
              ? this.cdd.minTopHeight && this.cdd.maxTopHeight
                ? this.cdd.minTopHeight + "-" + this.cdd.maxTopHeight + " mm"
                : this.getLabel("konstruktion", "REMARK3")
                ? this.getLabel("konstruktion", "REMARK3")
                : null
              : void 0;
          },
          getInsideDoorData: function () {
            this.remote.getInsideDoorData(function (e) {
              this.onInsideDoorData(e);
            }, this);
          },
          onInsideDoorData: function (e) {
            var t = e.defaultInsideDoorElements;
            this.handleInsideDoorElements(t),
              KEvent.trigger(KEvent.INSIDE_MODEL_DATA);
          },
          handleInsideDoorElements: function (e, t) {
            var i = {
                dframe: !1,
                dframe2: !1,
                cassette: !1,
                panel2: !1,
                panel3: !1,
              },
              o = new Backbone.Model();
            if (
              (_.forEach(
                e,
                function (e) {
                  (e.canChangeColor || "surface" == e.name) &&
                    this.insideDoorElements.push(e),
                    "polnilo" != e.name || this.cdd.getColor(Color.PANEL_INSIDE)
                      ? "okvir" != e.name ||
                        this.cdd.getColor(Color.FRAME_INSIDE)
                        ? "application" != e.name ||
                          this.cdd.getColor(Color.APP_INSIDE)
                          ? "application2" != e.name ||
                            this.cdd.getColor(Color.APP2_INSIDE)
                            ? "dframe" == e.name
                              ? e.colorCode
                                ? this.cdd.setColor(
                                    {
                                      code: e.colorCode,
                                      sameAsPanel: e.sameAsPanel,
                                      group: e.group,
                                    },
                                    Color.DFRAME_INSIDE
                                  )
                                : this.cdd.copyColor(
                                    Color.PANEL_INSIDE,
                                    Color.DFRAME_INSIDE
                                  )
                              : "dframe2" == e.name
                              ? e.colorCode &&
                                this.cdd.setColor(
                                  {
                                    code: e.colorCode,
                                    sameAsPanel: e.sameAsPanel,
                                    group: e.group,
                                  },
                                  Color.DFRAME2_INSIDE
                                )
                              : "panel2" != e.name ||
                                this.cdd.getColor(Color.PANEL2_INSIDE)
                              ? "panel3" != e.name ||
                                this.cdd.getColor(Color.PANEL3_INSIDE)
                                ? "crte" != e.name ||
                                  this.cdd.getColor(Color.CRTE_INSIDE)
                                  ? "cassette" != e.name ||
                                    this.cdd.getColor(Color.CASSETTE_INSIDE)
                                    ? "gframe" != e.name ||
                                      this.cdd.getColor(Color.GFRAME_INSIDE) ||
                                      (e.canChangeColor
                                        ? this.cdd.insideColorChanged
                                          ? this.cdd.copyColor(
                                              Color.PANEL_INSIDE,
                                              Color.GFRAME_INSIDE
                                            )
                                          : this.cdd.getColor(Color.GFRAME)
                                          ? this.cdd.copyColor(
                                              Color.GFRAME,
                                              Color.GFRAME_INSIDE
                                            )
                                          : this.cdd.copyColor(
                                              Color.PANEL,
                                              Color.GFRAME_INSIDE
                                            )
                                        : e.colorCode &&
                                          this.cdd.setColor(
                                            {
                                              code: e.colorCode,
                                              sameAsPanel: e.sameAsPanel,
                                              group: e.group,
                                            },
                                            Color.GFRAME_INSIDE
                                          ))
                                    : e.canChangeColor
                                    ? e.sameAsPanel
                                      ? this.cdd.setColor(
                                          {
                                            code: e.colorCode,
                                            sameAsPanel: e.sameAsPanel,
                                            group: e.group,
                                          },
                                          Color.CASSETTE_INSIDE
                                        )
                                      : e.colorCode
                                      ? this.cdd.setColor(
                                          {
                                            code: e.colorCode,
                                            sameAsPanel: !1,
                                            group: e.group,
                                          },
                                          Color.CASSETTE_INSIDE
                                        )
                                      : this.cdd.insideColorChanged
                                      ? (this.cdd.copyColor(
                                          Color.PANEL_INSIDE,
                                          Color.CASSETTE_INSIDE
                                        ),
                                        (i.cassette = !0),
                                        o.set(
                                          "code",
                                          this.cdd.getColor(Color.PANEL_INSIDE)
                                            .code
                                        ))
                                      : this.cdd.getColor(Color.CASSETTE)
                                      ? this.cdd.copyColor(
                                          Color.CASSETTE,
                                          Color.CASSETTE_INSIDE
                                        )
                                      : (this.cdd.copyColor(
                                          Color.PANEL,
                                          Color.CASSETTE_INSIDE
                                        ),
                                        (i.cassette = !0),
                                        o.set(
                                          "code",
                                          this.cdd.getColor(Color.PANEL).code
                                        ))
                                    : e.colorCode &&
                                      this.cdd.setColor(
                                        {
                                          code: e.colorCode,
                                          sameAsPanel: e.sameAsPanel,
                                          group: e.group,
                                        },
                                        Color.CASSETTE_INSIDE
                                      )
                                  : e.canChangeColor &&
                                    this.cdd.getColor(Color.CRTE)
                                  ? this.cdd.copyColor(
                                      Color.CRTE_INSIDE,
                                      Color.CRTE
                                    )
                                  : e.colorCode &&
                                    this.cdd.setColor(
                                      { code: e.colorCode, group: e.group },
                                      Color.CRTE_INSIDE
                                    )
                                : e.canChangeColor
                                ? e.sameAsPanel
                                  ? this.cdd.setColor(
                                      {
                                        code: e.colorCode,
                                        sameAsPanel: e.sameAsPanel,
                                        group: e.group,
                                      },
                                      Color.PANEL3_INSIDE
                                    )
                                  : this.cdd.insideColorChanged
                                  ? (this.cdd.copyColor(
                                      Color.PANEL_INSIDE,
                                      Color.PANEL3_INSIDE
                                    ),
                                    (i.panel3 = !0),
                                    o.set(
                                      "code",
                                      this.cdd.getColor(Color.PANEL_INSIDE).code
                                    ))
                                  : this.cdd.getColor(Color.PANEL3)
                                  ? this.cdd.copyColor(
                                      Color.PANEL3,
                                      Color.PANEL3_INSIDE
                                    )
                                  : (this.cdd.copyColor(
                                      Color.PANEL,
                                      Color.PANEL3_INSIDE
                                    ),
                                    (i.panel3 = !0),
                                    o.set(
                                      "code",
                                      this.cdd.getColor(Color.PANEL).code
                                    ))
                                : e.colorCode &&
                                  this.cdd.setColor(
                                    {
                                      code: e.colorCode,
                                      sameAsPanel: e.sameAsPanel,
                                      group: e.group,
                                    },
                                    Color.PANEL3_INSIDE
                                  )
                              : e.canChangeColor
                              ? e.sameAsPanel
                                ? this.cdd.setColor(
                                    {
                                      code: e.colorCode,
                                      sameAsPanel: e.sameAsPanel,
                                      group: e.group,
                                    },
                                    Color.PANEL2_INSIDE
                                  )
                                : this.cdd.insideColorChanged
                                ? (this.cdd.copyColor(
                                    Color.PANEL_INSIDE,
                                    Color.PANEL2_INSIDE
                                  ),
                                  (i.panel2 = !0),
                                  o.set(
                                    "code",
                                    this.cdd.getColor(Color.PANEL_INSIDE).code
                                  ))
                                : this.cdd.getColor(Color.PANEL2)
                                ? this.cdd.copyColor(
                                    Color.PANEL2,
                                    Color.PANEL2_INSIDE
                                  )
                                : (this.cdd.copyColor(
                                    Color.PANEL,
                                    Color.PANEL2_INSIDE
                                  ),
                                  (i.panel2 = !0),
                                  o.set(
                                    "code",
                                    this.cdd.getColor(Color.PANEL).code
                                  ))
                              : e.colorCode &&
                                this.cdd.setColor(
                                  {
                                    code: e.colorCode,
                                    sameAsPanel: e.sameAsPanel,
                                    group: e.group,
                                  },
                                  Color.PANEL2_INSIDE
                                )
                            : e.canChangeColor && this.cdd.getColor(Color.APP2)
                            ? this.cdd.copyColor(Color.APP2, Color.APP2_INSIDE)
                            : e.colorCode &&
                              this.cdd.setColor(
                                {
                                  code: e.colorCode,
                                  sameAsPanel: e.sameAsPanel,
                                  group: e.group,
                                },
                                Color.APP2_INSIDE
                              )
                          : e.canChangeColor && this.cdd.getColor(Color.APP)
                          ? this.cdd.copyColor(Color.APP, Color.APP_INSIDE)
                          : e.colorCode &&
                            this.cdd.setColor(
                              {
                                code: e.colorCode,
                                sameAsPanel: e.sameAsPanel,
                                group: e.group,
                              },
                              Color.APP_INSIDE
                            )
                        : e.canChangeColor && this.cdd.getColor(Color.FRAME)
                        ? this.cdd.copyColor(Color.FRAME, Color.FRAME_INSIDE)
                        : e.colorCode &&
                          this.cdd.setColor(
                            {
                              code: e.colorCode,
                              sameAsPanel: e.sameAsPanel,
                              group: e.group,
                            },
                            Color.FRAME_INSIDE
                          )
                      : e.canChangeColor && this.cdd.getColor(Color.PANEL)
                      ? this.cdd.copyColor(Color.PANEL, Color.PANEL_INSIDE)
                      : e.colorCode &&
                        this.cdd.setColor(
                          {
                            code: e.colorCode,
                            sameAsPanel: e.sameAsPanel,
                            group: e.group,
                          },
                          Color.PANEL_INSIDE
                        );
                },
                this
              ),
              this.cdd.getColor(Color.PANEL_INSIDE) &&
                !this.isInsideLayer(e, "polnilo") &&
                this.cdd.setColor(null, Color.PANEL_INSIDE),
              this.cdd.getColor(Color.FRAME_INSIDE) &&
                !this.isInsideLayer(e, "okvir") &&
                this.cdd.setColor(null, Color.FRAME_INSIDE),
              this.cdd.getColor(Color.APP_INSIDE) &&
                !this.isInsideLayer(e, "application") &&
                this.cdd.setColor(null, Color.APP_INSIDE),
              this.cdd.getColor(Color.APP2_INSIDE) &&
                !this.isInsideLayer(e, "application2") &&
                this.cdd.setColor(null, Color.APP2_INSIDE),
              this.cdd.getColor(Color.PANEL2_INSIDE) &&
                !this.isInsideLayer(e, "panel2") &&
                (this.cdd.setColor(null, Color.PANEL2_INSIDE), (i.panel2 = !1)),
              this.cdd.getColor(Color.PANEL3_INSIDE) &&
                !this.isInsideLayer(e, "panel3") &&
                (this.cdd.setColor(null, Color.PANEL3_INSIDE), (i.panel3 = !1)),
              this.cdd.getColor(Color.DFRAME_INSIDE) &&
                !this.isInsideLayer(e, "dframe") &&
                (this.cdd.setColor(null, Color.DFRAME_INSIDE), (i.dframe = !1)),
              this.cdd.getColor(Color.DFRAME2_INSIDE) &&
                !this.isInsideLayer(e, "dframe2") &&
                (this.cdd.setColor(null, Color.DFRAME2_INSIDE),
                (i.dframe2 = !1)),
              this.cdd.getColor(Color.CRTE_INSIDE) &&
                !this.isInsideLayer(e, "crte") &&
                this.cdd.setColor(null, Color.CRTE_INSIDE),
              this.cdd.getColor(Color.CASSETTE_INSIDE) &&
                !this.isInsideLayer(e, "cassette") &&
                (this.cdd.setColor(null, Color.CASSETTE_INSIDE),
                (i.cassette = !1)),
              this.cdd.getColor(Color.GFRAME_INSIDE) &&
                !this.isInsideLayer(e, "gframe") &&
                this.cdd.setColor(null, Color.GFRAME_INSIDE),
              this.handleSameAsFrameInsideLayer(),
              this.loadDoorImage(),
              i.dframe || i.dframe2 || i.cassette || i.panel2 || i.panel3)
            ) {
              var s = "dframe";
              i.dframe2
                ? (s = "dframe2")
                : i.cassette
                ? (s = "cassette")
                : i.panel2
                ? (s = "panel2")
                : i.panel3 && (s = "panel3"),
                this.setAvailableColor(
                  { part: s, changedParts: i, inside: this.isInsideWall() },
                  o
                );
            }
          },
          isInsideLayer: function (e, t) {
            var i = !1;
            return (
              _.forEach(
                e,
                function (e) {
                  e.name == t && (i = !0);
                },
                this
              ),
              i
            );
          },
          getDoorData: function () {
            this.cdd.doorModel &&
              this.remote.getDoor(this.cdd.doorModel, this.onDoorData, this);
          },
          onDoorData: function (e) {
            (e.doorModel = e.model),
              Util.log("On door data: %O", e),
              (this.ddr = new Backbone.Model(e)),
              this.dd("doorElements").length > 0 &&
                (this.cdd._productPart = this.dd("doorElements")[0].state),
              this.cdd.setColor(
                {
                  code: this.dd("polniloColorCode"),
                  colorType: this.dd("polniloColorType"),
                  group: this.dd("polniloColorGroup"),
                },
                Color.PANEL
              ),
              (this.cdd.doorModel = this.dd("doorModel")),
              (this.cdd.doorName = this.dd("name")
                ? this.dd("name")
                : this.dd("doorModel")),
              this.cdd.setInsideModel(this.dd("defaultInsideModel")),
              this.cdd.setInsideModelName(
                this.dd("defaultInsideName")
                  ? this.dd("defaultInsideName")
                  : this.dd("defaultInsideModel")
              ),
              this.cdd.setPartsColorAsPanel(this.dd("partsColorAsPanel")),
              (this.cdd.firstLoad = !1),
              this.dd("frameColorCode")
                ? this.cdd.setColor(
                    {
                      code: this.dd("frameColorCode"),
                      group: this.dd("frameColorGroup"),
                    },
                    Color.FRAME
                  )
                : this.cdd.copyColor(Color.PANEL, Color.FRAME),
              this.conf("woodRotationEnabled") &&
                (this.cdd.setWoodRotation(90),
                this.cdd.setWoodRotationInside(90)),
              this.dd("layer") &&
                _.each(
                  this.dd("layer"),
                  function (e) {
                    "application" == e.name && e.colorCode
                      ? this.cdd.setColor(
                          {
                            code: e.colorCode,
                            sameAsPanel: e.sameAsPanel,
                            colorType: e.colorType,
                            group: e.colorGroup,
                          },
                          Color.APP
                        )
                      : "application2" == e.name && e.colorCode
                      ? this.cdd.setColor(
                          {
                            code: e.colorCode,
                            sameAsPanel: e.sameAsPanel,
                            colorType: e.colorType,
                            group: e.colorGroup,
                          },
                          Color.APP2
                        )
                      : "dframe" == e.name
                      ? e.colorCode
                        ? this.cdd.setColor(
                            {
                              code: e.colorCode,
                              sameAsPanel: e.sameAsPanel,
                              colorType: e.colorType,
                              group: e.colorGroup,
                            },
                            Color.DFRAME
                          )
                        : this.cdd.copyColor(Color.PANEL, Color.DFRAME)
                      : "dframe2" == e.name
                      ? e.colorCode
                        ? this.cdd.setColor(
                            {
                              code: e.colorCode,
                              sameAsPanel: e.sameAsPanel,
                              colorType: e.colorType,
                              group: e.colorGroup,
                            },
                            Color.DFRAME2
                          )
                        : this.cdd.copyColor(Color.PANEL, Color.DFRAME2)
                      : "panel2" == e.name
                      ? e.colorCode
                        ? this.cdd.setColor(
                            {
                              code: e.colorCode,
                              sameAsPanel: e.sameAsPanel,
                              colorType: e.colorType,
                              group: e.colorGroup,
                            },
                            Color.PANEL2
                          )
                        : this.cdd.copyColor(Color.PANEL, Color.PANEL2)
                      : "panel3" == e.name
                      ? e.colorCode
                        ? this.cdd.setColor(
                            {
                              code: e.colorCode,
                              sameAsPanel: e.sameAsPanel,
                              colorType: e.colorType,
                              group: e.colorGroup,
                            },
                            Color.PANEL3
                          )
                        : this.cdd.copyColor(Color.PANEL, Color.PANEL3)
                      : "rozeta" == e.name && e.code
                      ? this.cdd.setRosette(
                          { code: e.code, label: e.label },
                          null,
                          e.sameAsPanel
                        )
                      : ("crte" != e.name && "intarsia" != e.name) ||
                        !e.colorCode
                      ? "cassette" == e.name
                        ? e.colorCode
                          ? this.cdd.setColor(
                              {
                                code: e.colorCode,
                                sameAsPanel: e.sameAsPanel,
                                colorType: e.colorType,
                                group: e.colorGroup,
                              },
                              Color.CASSETTE
                            )
                          : this.cdd.copyColor(Color.PANEL, Color.CASSETTE)
                        : "gframe" == e.name &&
                          e.colorCode &&
                          this.cdd.setColor(
                            {
                              code: e.colorCode,
                              sameAsPanel: e.sameAsPanel,
                              colorType: e.colorType,
                              group: e.colorGroup,
                            },
                            Color.GFRAME
                          )
                      : this.cdd.setColor(
                          {
                            code: e.colorCode,
                            sameAsPanel: e.sameAsPanel,
                            colorType: e.colorType,
                            group: e.colorGroup,
                          },
                          Color.CRTE
                        );
                  },
                  this
                ),
              "left" == this.dd("handlePos")
                ? this.cdd.setDinDirection({
                    code: "left_inside",
                    label: this.getLabel("din", "left_inside"),
                  })
                : this.cdd.setDinDirection({
                    code: "right_inside",
                    label: this.getLabel("din", "right_inside"),
                  });
            var t = this.dd("wings");
            t &&
              _.forEach(
                t,
                function (e) {
                  e.privzeto && this.cdd.setWingCode(e.code);
                },
                this
              );
            var i = this.dd("ornament");
            this.dd("motiveCode")
              ? (this.cdd.setDoorGlass({
                  code: this.dd("motiveCode"),
                  label: this.dd("motiveDescription"),
                }),
                this.cdd.setDoorGlassType("motive"))
              : (this.cdd.setDoorGlass({ code: i.code, label: i.label }),
                this.cdd.setDoorGlassType("ornament")),
              this.cdd.setSideGlass({ code: i.code, label: i.label }),
              this.cdd.setSideGlassType("ornament"),
              this.cdd.setSideGlassDisabledRepeat(!1),
              this.cdd.setUpperGlass({ code: i.code, label: i.label }),
              this.cdd.setUpperGlassType("ornament"),
              this.cdd.setMiddleGlass(i.code),
              this.cdd.setMiddleGlassType("ornament");
            var o = new Backbone.Model(this.dd("doorDimensions"));
            if (
              (this.setDoorDataDimensions(o),
              this.dd("sideModel") && this.dd("sideModel").code)
            ) {
              var s = this.dd("sideModel");
              (this.cdd.sideModel = s.code),
                (this.cdd.sideModelName = s.name),
                (this.cdd.sideModelDummy = s.dummy),
                (this.cdd.hasSideModelMotive = s.hasMotiveGlass),
                (this.cdd.canSetOrnamentGlassSide = s.canSetOrnamentGlass),
                s.defaultSideGlass
                  ? (this.cdd.setSideGlass({
                      code: s.defaultSideGlass.code,
                      label: s.defaultSideGlass.label,
                    }),
                    this.cdd.setSideGlassType("motive"),
                    this.cdd.setSideGlassDisabledRepeat(
                      s.defaultSideGlass.disableOnMultipleSide
                    ))
                  : (this.cdd.setSideGlass({ code: i.code, label: i.label }),
                    this.cdd.setSideGlassType("ornament"),
                    this.cdd.setSideGlassDisabledRepeat(!1)),
                s.defaultWidth > 0 &&
                  (this.cdd.defaultSideWidth = s.defaultWidth),
                s.minWidth > 0 &&
                  ((this.cdd.minSideWidth = s.minWidth),
                  this.cdd.minSideWidth > this.cdd.getLeftWidth() &&
                    this.cdd.setLeftWidth(this.cdd.minSideWidth),
                  this.cdd.minSideWidth > this.cdd.getRightWidth() &&
                    this.cdd.setRightWidth(this.cdd.minSideWidth)),
                s.maxWidth > 0 &&
                  ((this.cdd.maxSideWidth = s.maxWidth),
                  this.cdd.maxSideWidth < this.cdd.getLeftWidth() &&
                    this.cdd.setLeftWidth(this.cdd.maxSideWidth),
                  this.cdd.maxSideWidth < this.cdd.getRightWidth() &&
                    this.cdd.setRightWidth(this.cdd.maxSideWidth));
            }
            if (
              (this.dd("drzalo") &&
                (this.cdd.setOutsideHandle({
                  code: this.dd("drzalo").code,
                  label: this.dd("drzalo").label,
                }),
                "kljuke-notranje" == this.dd("drzalo").zlist
                  ? this.cdd.setOutsideHandleType("DOOR-LOCK")
                  : "handleSet" == this.dd("drzalo").zlist
                  ? (this.cdd.setOutsideHandleType("handle-set"),
                    this.cdd.setInsideHandle({
                      code: this.dd("drzalo").code,
                      label: this.dd("drzalo").label,
                    }),
                    this.cdd.setInsideHandleType("handle-set"),
                    this.cdd.setShowInsideRosette(this.dd("drzalo").showRozeta))
                  : this.cdd.setOutsideHandleType("HANDLE"),
                this.cdd.setHasAccessControlHandle(
                  this.dd("drzalo").hasAccessControl
                ),
                this.cdd.setHasPeepholeHandle(this.dd("drzalo").hasPeephole),
                this.cdd.setShowRosette(this.dd("drzalo").showRozeta)),
              this.dd("doorEquipment"))
            ) {
              new Backbone.Collection(this.dd("doorEquipment")).each(function (
                e
              ) {
                "panelProtect" == e.get("zlist") &&
                  this.cdd.setPanelProtection({
                    code: e.get("code"),
                    label: e.get("label"),
                  }),
                  "tolkala" == e.get("zlist") &&
                    this.cdd.setKnocker({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "doorstep" == e.get("zlist") &&
                    this.cdd.setDoorstep({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "cilinder" == e.get("zlist") &&
                    this.cdd.setCylinder({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "peephole" == e.get("zlist") &&
                    this.cdd.setPeephole({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "praske" == e.get("zlist") &&
                    this.cdd.setRosette({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "hinge" == e.get("zlist") &&
                    this.cdd.setHinge({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "stopper" == e.get("zlist") &&
                    this.cdd.setStopper({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "mailbox" == e.get("zlist") &&
                    this.cdd.setMailbox({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "accessControls" == e.get("zlist") &&
                    this.cdd.setAccessControl({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "secureLatch" == e.get("zlist") &&
                    this.cdd.setSecureLatch({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "ledLight" == e.get("zlist") &&
                    this.cdd.setLedLight({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "remoteControl" == e.get("zlist") &&
                    this.cdd.setRemoteControl({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "hisnaSt" == e.get("zlist") &&
                    this.cdd.setHouseNumber(
                      { code: e.get("code"), label: e.get("label") },
                      "/"
                    ),
                  "side-mailbox" == e.get("zlist") &&
                    this.cdd.setSideMailbox(
                      { code: e.get("code"), label: e.get("label") },
                      "/"
                    ),
                  "rotary-knob" == e.get("zlist") &&
                    this.cdd.setRotaryKnob(
                      { code: e.get("code"), label: e.get("label") },
                      "/"
                    ),
                  "rigidChain" == e.get("zlist") &&
                    this.cdd.setRigidChain(
                      { code: e.get("code"), label: e.get("label") },
                      "/"
                    ),
                  "equipment-package" == e.get("zlist") &&
                    this.cdd.setEquipmentPackage({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "general-equipment" == e.get("zlist") &&
                    this.cdd.setGeneralEquipment({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "general-equipment2" == e.get("zlist") &&
                    this.cdd.setGeneralEquipment2({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "general-equipment3" == e.get("zlist") &&
                    this.cdd.setGeneralEquipment3({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "dayNight" == e.get("zlist") &&
                    this.cdd.setDayNight({
                      code: e.get("code"),
                      label: e.get("label"),
                    }),
                  "securityFeature" === e.get("zlist") &&
                    this.cdd.setSecurityFeature({
                      code: e.get("code"),
                      label: e.get("label"),
                    });
              },
              this);
            }
            if (this.dd("doorOptions")) {
              new Backbone.Collection(this.dd("doorOptions")).each(function (
                e
              ) {
                e.get("privzeto") && this.cdd.setDoorOption(e);
              },
              this);
            }
            if (this.dd("doorMaterial")) {
              var n = this.dd("doorMaterial");
              n.code && this.cdd.setMaterial(n.code.toLowerCase());
            }
            if (this.dd("material")) {
              var n = this.dd("material");
              _.forEach(
                n,
                function (e) {
                  e.privzeto && this.cdd.setMaterial(e.code.toLowerCase());
                },
                this
              );
            }
            if (
              ((this.isLeftFrame() || this.isRightFrame()) &&
                this.evaluateSidelightDimensionRules(),
              this.dd("profile"))
            ) {
              this.profileList = this.dd("profile");
              var d = this.prepareProfileList(this.profileList, {
                din: this.cdd.getDinDirection(),
                model: this.cdd.doorModel,
              });
              if (d && d.privzeto) {
                if (
                  (this.cdd.setProfile(d),
                  !t && d.wing && this.cdd.setWingCode(d.wing.code),
                  d.material && d.material.code)
                ) {
                  var r = d.material;
                  this.cdd.setMaterial(r.code.toLowerCase());
                }
                this.runProfileRules(d);
              }
            }
            if (
              (this.cdd.setResetProfile(this.dd("resetProfile")),
              this.dd("doorInsideEquipment"))
            ) {
              new Backbone.Collection(this.dd("doorInsideEquipment")).each(
                function (e) {
                  (!this.dd("drzalo") ||
                    (this.dd("drzalo") &&
                      "handleSet" != this.dd("drzalo").zlist)) &&
                    ("kljuke" == e.get("zlist") &&
                      (this.cdd.setInsideHandle({
                        code: e.get("code"),
                        label: e.get("label"),
                      }),
                      this.cdd.setInsideHandleType("door-inner-lock"),
                      this.cdd.setShowInsideRosette(e.get("showRozeta"))),
                    "inside-rosette" == e.get("zlist") &&
                      this.cdd.setInsideRosette({
                        code: e.get("code"),
                        label: e.get("label"),
                      })),
                    "inside-mirror" == e.get("zlist") &&
                      this.cdd.setInsideMirror({
                        code: e.get("code"),
                        label: e.get("label"),
                      });
                },
                this
              );
            }
            (this.cdd.hasDoorSideModel = this.dd("hasDoorSideModel")),
              this.setDefaultInsideDoorElements(
                this.dd("defaultInsideDoorElements")
              ),
              "wing" == this.conf("innerFrameColorMode") &&
                (Wing.isOutside(this.cdd.getWingCode()) &&
                  this.cdd.copyColor(Color.PANEL, Color.WING),
                Wing.isInside(this.cdd.getWingCode()) &&
                  this.cdd.copyColor(Color.PANEL_INSIDE, Color.WING_INSIDE)),
              this.cdd.setPackage(this.dd("doorPackage")),
              this.cdd.setBlindProfile(this.dd("blindProfile")),
              this.cdd.setSideGlassGlazing(this.conf("sideGlassGlazing")),
              this.cdd.setUpperGlassGlazing(this.conf("sideGlassGlazing")),
              this.cdd.setDesignCode(this.dd("defaultDesignCode")),
              this.setSerieAndCateogry(),
              this.conf("hasItems") && this.getItemModel().setOnDoorDataItems(),
              this.runSideModelRules(e.sideModel),
              this.calculateDimensions(),
              KEvent.trigger(KEvent.DOOR_DATA_RESPONSE, this.ddr);
          },
          setDefaultInsideDoorElements: function (e) {
            _.forEach(
              e,
              function (e) {
                (e.canChangeColor || "surface" == e.name) &&
                  this.insideDoorElements.push(e),
                  "polnilo" != e.name || this.cdd.getColor(Color.PANEL_INSIDE)
                    ? "okvir" != e.name || this.cdd.getColor(Color.FRAME_INSIDE)
                      ? "application" != e.name ||
                        this.cdd.getColor(Color.APP_INSIDE)
                        ? "application2" != e.name ||
                          this.cdd.getColor(Color.APP2_INSIDE)
                          ? "panel2" != e.name ||
                            this.cdd.getColor(Color.PANEL2_INSIDE)
                            ? "panel3" != e.name ||
                              this.cdd.getColor(Color.PANEL3_INSIDE)
                              ? "dframe" != e.name ||
                                this.cdd.getColor(Color.DFRAME_INSIDE)
                                ? "dframe2" != e.name ||
                                  this.cdd.getColor(Color.DFRAME2_INSIDE)
                                  ? "crte" != e.name ||
                                    this.cdd.getColor(Color.CRTE_INSIDE)
                                    ? "cassette" != e.name ||
                                      this.cdd.getColor(Color.CASSETTE_INSIDE)
                                      ? "gframe" != e.name ||
                                        this.cdd.getColor(
                                          Color.GFRAME_INSIDE
                                        ) ||
                                        (e.colorCode
                                          ? this.cdd.setColor(
                                              {
                                                code: e.colorCode,
                                                colorType: e.colorType,
                                                sameAsPanel: e.sameAsPanel,
                                                group: e.group,
                                              },
                                              Color.GFRAME_INSIDE
                                            )
                                          : this.cdd.copyColor(
                                              Color.GFRAME,
                                              Color.GFRAME_INSIDE
                                            ))
                                      : e.colorCode
                                      ? this.cdd.setColor(
                                          {
                                            code: e.colorCode,
                                            colorType: e.colorType,
                                            sameAsPanel: e.sameAsPanel,
                                            group: e.group,
                                          },
                                          Color.CASSETTE_INSIDE
                                        )
                                      : this.cdd.copyColor(
                                          Color.CASSETTE,
                                          Color.CASSETTE_INSIDE
                                        )
                                    : e.colorCode
                                    ? this.cdd.setColor(
                                        {
                                          code: e.colorCode,
                                          colorType: e.colorType,
                                          sameAsPanel: e.sameAsPanel,
                                          group: e.group,
                                        },
                                        Color.CRTE_INSIDE
                                      )
                                    : this.cdd.copyColor(
                                        Color.CRTE,
                                        Color.CRTE_INSIDE
                                      )
                                  : e.colorCode
                                  ? this.cdd.setColor(
                                      {
                                        code: e.colorCode,
                                        colorType: e.colorType,
                                        sameAsPanel: e.sameAsPanel,
                                        group: e.group,
                                      },
                                      Color.DFRAME2_INSIDE
                                    )
                                  : this.cdd.copyColor(
                                      Color.DFRAME2,
                                      Color.DFRAME2_INSIDE
                                    )
                                : e.colorCode
                                ? this.cdd.setColor(
                                    {
                                      code: e.colorCode,
                                      colorType: e.colorType,
                                      sameAsPanel: e.sameAsPanel,
                                      group: e.group,
                                    },
                                    Color.DFRAME_INSIDE
                                  )
                                : this.cdd.copyColor(
                                    Color.DFRAME,
                                    Color.DFRAME_INSIDE
                                  )
                              : e.colorCode
                              ? this.cdd.setColor(
                                  {
                                    code: e.colorCode,
                                    colorType: e.colorType,
                                    sameAsPanel: e.sameAsPanel,
                                    group: e.group,
                                  },
                                  Color.PANEL3_INSIDE
                                )
                              : this.cdd.copyColor(
                                  Color.PANEL3,
                                  Color.PANEL3_INSIDE
                                )
                            : e.colorCode
                            ? this.cdd.setColor(
                                {
                                  code: e.colorCode,
                                  colorType: e.colorType,
                                  sameAsPanel: e.sameAsPanel,
                                  group: e.group,
                                },
                                Color.PANEL2_INSIDE
                              )
                            : this.cdd.copyColor(
                                Color.PANEL2,
                                Color.PANEL2_INSIDE
                              )
                          : e.colorCode
                          ? this.cdd.setColor(
                              {
                                code: e.colorCode,
                                colorType: e.colorType,
                                sameAsPanel: e.sameAsPanel,
                                group: e.group,
                              },
                              Color.APP2_INSIDE
                            )
                          : this.cdd.copyColor(Color.APP2, Color.APP2_INSIDE)
                        : e.colorCode
                        ? this.cdd.setColor(
                            {
                              code: e.colorCode,
                              colorType: e.colorType,
                              sameAsPanel: e.sameAsPanel,
                              group: e.group,
                            },
                            Color.APP_INSIDE
                          )
                        : this.cdd.copyColor(Color.APP, Color.APP_INSIDE)
                      : e.colorCode
                      ? this.cdd.setColor(
                          {
                            code: e.colorCode,
                            colorType: e.colorType,
                            sameAsPanel: e.sameAsPanel,
                            group: e.group,
                          },
                          Color.FRAME_INSIDE
                        )
                      : this.cdd.copyColor(Color.FRAME, Color.FRAME_INSIDE)
                    : e.colorCode
                    ? this.cdd.setColor(
                        {
                          code: e.colorCode,
                          colorType: e.colorType,
                          group: e.group,
                        },
                        Color.PANEL_INSIDE
                      )
                    : this.cdd.copyColor(Color.PANEL, Color.PANEL_INSIDE);
              },
              this
            ),
              this.handleSameAsFrameInsideLayer();
          },
          getDefaultDoorData: function (e) {
            return this.dd(e);
          },
          setDoorDataDimensions: function (e) {
            var t = this.cdd.doorDimensionsChanged;
            (this.cdd.defaultDoorWidth = e.get("defaultDoorWidth")
              ? e.get("defaultDoorWidth")
              : this.configuration.get("defaultDoorWidth")),
              this.cdd.doorDimensionsChanged ||
                (this.cdd.setWidth(this.cdd.defaultDoorWidth),
                this.conf("adjustablePanel2") ||
                  this.cdd.setPanel2Width(this.cdd.defaultDoorWidth)),
              (this.cdd.defaultDoorHeight = e.get("defaultDoorHeight")
                ? e.get("defaultDoorHeight")
                : this.configuration.get("defaultDoorHeight")),
              this.cdd.doorDimensionsChanged ||
                this.cdd.setHeight(this.cdd.defaultDoorHeight),
              (this.cdd.defaultSideWidth = e.get("defaultSideWidth")
                ? e.get("defaultSideWidth")
                : this.configuration.get("defaultSideWidth")),
              (this.cdd.defaultTopHeight = e.get("defaultTopHeight")
                ? e.get("defaultTopHeight")
                : this.configuration.get("defaultTopHeight"));
            var i = e.get("minDoorWidth")
              ? e.get("minDoorWidth")
              : this.configuration.get("minDoorWidth");
            i || (i = 1e3),
              (this.cdd.minDoorWidth = i),
              this.cdd.getWidth() < i && this.cdd.setWidth(i),
              (this.cdd.minDoorWidth2 = e.get("minDoorWidth2")
                ? e.get("minDoorWidth2")
                : this.configuration.get("minDoorWidth2")),
              this.cdd.minDoorWidth2 &&
                this.cdd.getPanel2Width() < this.cdd.minDoorWidth2 &&
                this.cdd.setPanel2Width(this.cdd.minDoorWidth2);
            var o = e.get("maxDoorWidth")
              ? e.get("maxDoorWidth")
              : this.configuration.get("maxDoorWidth");
            o || (o = 1300),
              (this.cdd.maxDoorWidth = o),
              this.cdd.getWidth() > o && this.cdd.setWidth(o),
              (this.cdd.maxDoorWidth2 = e.get("maxDoorWidth2")
                ? e.get("maxDoorWidth2")
                : this.configuration.get("maxDoorWidth2")),
              this.cdd.maxDoorWidth2 &&
                this.cdd.getPanel2Width() > this.cdd.maxDoorWidth2 &&
                this.cdd.setPanel2Width(this.cdd.maxDoorWidth2);
            var s = e.get("minDoorHeight")
              ? e.get("minDoorHeight")
              : this.configuration.get("minDoorHeight");
            s || (s = 2e3),
              (this.cdd.minDoorHeight = s),
              this.cdd.getHeight() < s && this.cdd.setHeight(s);
            var n = e.get("maxDoorHeight")
              ? e.get("maxDoorHeight")
              : this.configuration.get("maxDoorHeight");
            n || (n = 2300),
              (this.cdd.maxDoorHeight = n),
              this.cdd.getHeight() > n && this.cdd.setHeight(n);
            var d = e.get("minSideWidth")
              ? e.get("minSideWidth")
              : this.configuration.get("minSideWidth");
            d || (d = 400),
              (this.cdd.minSideWidth = d),
              _.each(
                this.cdd.construction.leftSideWidth,
                function (e, t, i) {
                  i[t] = e < this.cdd.minSideWidth ? this.cdd.minSideWidth : e;
                },
                this
              ),
              _.each(
                this.cdd.construction.rightSideWidth,
                function (e, t, i) {
                  i[t] = e < this.cdd.minSideWidth ? this.cdd.minSideWidth : e;
                },
                this
              );
            var r = e.get("maxSideWidth")
              ? e.get("maxSideWidth")
              : this.configuration.get("maxSideWidth");
            r || (r = 1400),
              (this.cdd.maxSideWidth = r),
              _.each(
                this.cdd.construction.leftSideWidth,
                function (e, t, i) {
                  i[t] = e > this.cdd.maxSideWidth ? this.cdd.maxSideWidth : e;
                },
                this
              ),
              _.each(
                this.cdd.construction.rightSideWidth,
                function (e, t, i) {
                  i[t] = e > this.cdd.maxSideWidth ? this.cdd.maxSideWidth : e;
                },
                this
              );
            var l = e.get("minTopHeight")
              ? e.get("minTopHeight")
              : this.configuration.get("minTopHeight");
            l || (l = 400), (this.cdd.minTopHeight = l);
            var a = e.get("maxTopHeight")
              ? e.get("maxTopHeight")
              : this.configuration.get("maxTopHeight");
            a || (a = 1e3),
              (this.cdd.maxTopHeight = a),
              (this.cdd.maxWidthTopGlass = e.get("maxWidthTopGlass")
                ? e.get("maxWidthTopGlass")
                : this.configuration.get("maxWidthTopGlass")),
              (this.cdd.maxWidthSideGlass = e.get("maxWidthSideGlass")
                ? e.get("maxWidthSideGlass")
                : this.configuration.get("maxWidthSideGlass")),
              (this.cdd.maxHeightTopGlass = e.get("maxHeightTopGlass")
                ? e.get("maxHeightTopGlass")
                : this.configuration.get("maxHeightTopGlass")),
              this.checkTopGlassWidth(),
              this.checkTopGlassHeight(),
              t || (this.cdd.doorDimensionsChanged = !1);
          },
          evaluateSidelightDimensionRules: function () {
            var e = this.evaluateSidelightMinWidthRule();
            e &&
              ((this.cdd.minSideWidth = e),
              _.each(
                this.cdd.construction.leftSideWidth,
                function (e, t, i) {
                  i[t] = e < this.cdd.minSideWidth ? this.cdd.minSideWidth : e;
                },
                this
              ),
              _.each(
                this.cdd.construction.rightSideWidth,
                function (e, t, i) {
                  i[t] = e < this.cdd.minSideWidth ? this.cdd.minSideWidth : e;
                },
                this
              ));
            var t = this.evaluateSidelightMaxWidthRule();
            t &&
              ((this.cdd.maxSideWidth = t),
              _.each(
                this.cdd.construction.leftSideWidth,
                function (e, t, i) {
                  i[t] = e > this.cdd.maxSideWidth ? this.cdd.maxSideWidth : e;
                },
                this
              ),
              _.each(
                this.cdd.construction.rightSideWidth,
                function (e, t, i) {
                  i[t] = e > this.cdd.maxSideWidth ? this.cdd.maxSideWidth : e;
                },
                this
              ));
          },
          evaluateSidelightMinWidthRule: function () {
            var e = this.dd("minSidelightWidthRule");
            return e
              ? this.evalExpression2(e, this.getPartDimensionRuleParams())
              : null;
          },
          evaluateSidelightMaxWidthRule: function () {
            var e = this.dd("maxSidelightWidthRule");
            return e
              ? this.evalExpression2(e, this.getPartDimensionRuleParams())
              : null;
          },
          getPartDimensionRuleParams: function () {
            return {
              din: this.cdd.getDinDirection(),
              isLeft: this.isLeftFrame(),
              isRight: this.isRightFrame(),
            };
          },
          encodeJson: function (e) {
            var t = JSON.stringify(e),
              i = CryptoJS.HmacSHA256(t, this.h),
              o = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(t)),
              s = this.conf("imageServiceVersion"),
              n = Util.template(
                Profile.getHost() + "/rest/image/${version}/" + o + "/" + i,
                { version: s || "v2" }
              );
            return (
              this.conf("developmentMode") &&
                (n += "?cache=" + new Date().getTime()),
              n
            );
          },
          encodeJsonHouseImage: function (e) {
            var t = CryptoJS.enc.Base64.stringify(
                CryptoJS.enc.Utf8.parse(JSON.stringify(e))
              ),
              i = this.conf("imageServiceVersion"),
              o = Util.template(
                Profile.getHost() + "/rest/image/${version}/b64/" + t,
                { version: i || "v1" }
              );
            return (
              this.conf("developmentMode") &&
                (o += "?cache=" + new Date().getTime()),
              o
            );
          },
          getImageUrl: function () {
            return this.encodeJson(this.getImageJson());
          },
          getDoorImageUrl: function (e, t) {
            var i = this.getImageJson(!0);
            return (
              e && (i.transformCoords = e),
              (i.wall = {
                visible: this.conf("outsideWallVisible"),
                color: "#f5f5f5",
              }),
              (i.client.height = 0),
              (i.client.width = 0),
              this.encodeJson(i)
            );
          },
          getB64DoorImageUrl: function (e) {
            var t = this.conf("houseImageIgnoreWallState"),
              i = this.getImageJson(t || null == t),
              o = this.conf("outsideWallVisible");
            return (
              (o = null == o || o),
              (i.wall = { visible: o && e, color: "#f5f5f5" }),
              (i.client.height = 0),
              (i.client.width = 0),
              (i.isHouseView = !0),
              this.encodeJsonHouseImage(i)
            );
          },
          getImageJson: function (e, t) {
            var i = {
                key: this.conf("partnerKey"),
                lang: this.conf("lang"),
                referenceNumber: this.cdd.getReferenceNumber(),
                model: this.cdd.doorModel,
                frame: { type: this.cdd.getFrameType() },
                panel: {},
                layer: [],
                equipment: [],
                client: {},
                uploadImage: {},
                currentProfile: this.cdd.getProfile()
                  ? this.cdd.getProfile()
                  : null,
                wing: this.cdd.getWingCode(),
                resetProfile: this.cdd.getResetProfile(),
                isColorPartChanged: this.cdd.isColorPartChanged,
                material: this.cdd.getMaterial(),
                blindProfile: this.cdd.getBlindProfile(),
                firstLoad: this.cdd.firstLoad,
                hideGrooves: !(
                  !this.cdd.getDoorOption("groove") ||
                  "hide" != this.cdd.getDoorOption("groove").code
                ),
                designCode: this.cdd.getDesignCode(),
                doorPackage: this.cdd.getPackage(),
                doorDimensionsChanged: this.cdd.doorDimensionsChanged,
                customRenderType: this.cdd.getCustomRenderType(),
              },
              o = this.getWoodRotation();
            null != o && (i.woodRotation = o);
            var s = this.getWoodRotation(!0);
            if (
              (null != s && (i.woodRotationInside = s),
              this.cdd.getDinDirection() &&
                (i.din = this.cdd.getDinDirection()),
              !e && this.isInsideWall(t)
                ? (this.setInsideColorData(i),
                  (i.wall = {
                    visible: !0,
                    color: this.cdd.getInsideWallColor(),
                  }),
                  (i.insideView = { insideView: !0 }),
                  this.conf("enableSwitchToLeft")
                    ? (i.insideView.model = this.cdd.getInsideModel())
                    : this.cdd.getInsideModel()
                    ? (i.insideView.model = this.cdd.getInsideModel())
                    : (i.insideView.model = this.cdd.doorModel))
                : (this.setOutsideColorData(i),
                  (i.wall = {
                    visible: this.conf("outsideWallVisible"),
                    color: this.cdd.getWallColor(),
                  })),
              this.cdd.getDoorGlass() &&
                (i.panel.glass = {
                  type: this.cdd.getDoorGlassType(),
                  code: this.cdd.getDoorGlass(),
                }),
              this.cdd.getWidth() &&
                this.conf("doorScaleEnabled") &&
                (i.panel.width = this.cdd.getWidth()),
              this.cdd.getHeight() &&
                this.conf("doorScaleEnabled") &&
                (i.panel.height = this.cdd.getHeight()),
              this.cdd.getPanel2Width() &&
                this.conf("doorScaleEnabled") &&
                (i.panel.panel2Width = this.cdd.getPanel2Width()),
              "SINGLE" != this.cdd.getFrameType() &&
                ((i.sidePanel = {}),
                this.isLeftFrame() &&
                  ((i.sidePanel.leftPanel = {}),
                  this.cdd.sideModel && !this.cdd.sideModelDummy
                    ? ((i.sidePanel.leftPanel.drawSideModel = !0),
                      (i.sidePanel.leftPanel.sideModel = {}),
                      (i.sidePanel.leftPanel.sideModel.model =
                        this.cdd.sideModel),
                      this.cdd.getSideGlass() &&
                        ("motive" == this.cdd.getSideGlassType()
                          ? (i.sidePanel.leftPanel.sideModel.glassCode =
                              this.cdd.getSideGlass())
                          : (i.sidePanel.leftPanel.glass = {
                              type: this.cdd.getSideGlassType(),
                              code: this.cdd.getSideGlass(),
                            })))
                    : (this.cdd.hasDoorSideModel &&
                        (i.sidePanel.leftPanel.drawSideModel = !1),
                      this.cdd.getSideGlass() &&
                        (i.sidePanel.leftPanel.glass = {
                          type: this.cdd.getSideGlassType(),
                          code: this.cdd.getSideGlass(),
                        })),
                  this.cdd.getLeftWidth() &&
                    this.conf("scaleModeEnabled") &&
                    (i.sidePanel.leftPanel.width =
                      this.cdd.construction.leftSideWidth),
                  this.cdd.getRepeatLeft() &&
                    this.conf("sideRepeatEnabled") &&
                    (i.sidePanel.leftPanel.repeat = this.cdd.getRepeatLeft())),
                this.isRightFrame() &&
                  ((i.sidePanel.rightPanel = {}),
                  this.cdd.sideModel && !this.cdd.sideModelDummy
                    ? ((i.sidePanel.rightPanel.drawSideModel = !0),
                      (i.sidePanel.rightPanel.sideModel = {}),
                      (i.sidePanel.rightPanel.sideModel.model =
                        this.cdd.sideModel),
                      this.cdd.getSideGlass() &&
                        ("motive" == this.cdd.getSideGlassType()
                          ? (i.sidePanel.rightPanel.sideModel.glassCode =
                              this.cdd.getSideGlass())
                          : (i.sidePanel.rightPanel.glass = {
                              type: this.cdd.getSideGlassType(),
                              code: this.cdd.getSideGlass(),
                            })))
                    : (this.cdd.hasDoorSideModel &&
                        (i.sidePanel.rightPanel.drawSideModel = !1),
                      this.cdd.getSideGlass() &&
                        (i.sidePanel.rightPanel.glass = {
                          type: this.cdd.getSideGlassType(),
                          code: this.cdd.getSideGlass(),
                        })),
                  this.cdd.getRightWidth() &&
                    this.conf("scaleModeEnabled") &&
                    (i.sidePanel.rightPanel.width =
                      this.cdd.construction.rightSideWidth),
                  this.cdd.getRepeatRight() &&
                    this.conf("sideRepeatEnabled") &&
                    (i.sidePanel.rightPanel.repeat =
                      this.cdd.getRepeatRight())),
                this.isTopFrame() &&
                  ((i.sidePanel.topPanel = {}),
                  this.cdd.getUpperGlass() &&
                    (i.sidePanel.topPanel.glass = {
                      type: this.cdd.getUpperGlassType(),
                      code: this.cdd.getUpperGlass(),
                    }),
                  this.cdd.getTopHeight() &&
                    this.conf("scaleModeEnabled") &&
                    (i.sidePanel.topPanel.height = this.cdd.getTopHeight())),
                this.isMiddleGlassFrame() &&
                  ((i.sidePanel.middlePanel = {}),
                  (i.sidePanel.middlePanel.width = this.cdd.getMiddleWidth()),
                  this.cdd.getMiddleGlass() &&
                    (i.sidePanel.middlePanel.glass = {
                      type: this.cdd.getMiddleGlassType(),
                      code: this.cdd.getMiddleGlass(),
                    }))),
              !e && this.isInsideWall(t)
                ? (this.cdd.getInsideRosette() &&
                    i.equipment.push({
                      type: "inside-rosette",
                      code: this.cdd.getInsideRosette(),
                      order: 90,
                    }),
                  this.cdd.getInsideHandle() &&
                    i.equipment.push({
                      type: this.cdd.getInsideHandleType(),
                      code: this.cdd.getInsideHandle(),
                      order: 100,
                    }),
                  this.cdd.getPeephole() &&
                    i.equipment.push({
                      type: "peephole",
                      code: this.cdd.getPeephole(),
                      order: 50,
                    }),
                  this.cdd.getMailbox() &&
                    i.equipment.push({
                      type: "mailbox",
                      code: this.cdd.getMailbox(),
                      order: 15,
                    }),
                  this.cdd.getSideMailbox() &&
                    i.equipment.push({
                      type: "side-mailbox",
                      code: this.cdd.getSideMailbox(),
                      order: 15,
                    }),
                  this.cdd.getInsideMirror() &&
                    i.equipment.push({
                      type: "inside-mirror",
                      code: this.cdd.getInsideMirror(),
                      order: 10,
                    }),
                  this.cdd.getOutsideHandle() &&
                    this.cdd.getHasPeepholeHandle() &&
                    i.equipment.push({
                      type: this.cdd.getOutsideHandleType(),
                      code: this.cdd.getOutsideHandle(),
                      order: 10,
                    }),
                  this.cdd.getHinge() &&
                    this.conf("drawHinges") &&
                    i.equipment.push({
                      type: "hinge",
                      code: this.cdd.getHinge(),
                      order: 140,
                    }),
                  this.cdd.getStopper() &&
                    i.equipment.push({
                      type: "stopper",
                      code: this.cdd.getStopper(),
                      order: 140,
                    }),
                  this.cdd.getRotaryKnob() &&
                    i.equipment.push({
                      type: "rotary-knob",
                      code: this.cdd.getRotaryKnob(),
                      order: 120,
                    }),
                  this.cdd.getCylinderKnob() &&
                    i.equipment.push({
                      type: "cylinder-knob",
                      code: this.cdd.getCylinderKnob(),
                      order: 110,
                    }),
                  this.cdd.getDeadbolt() &&
                    i.equipment.push({
                      type: "deadbolt",
                      code: this.cdd.getDeadbolt(),
                      order: 5,
                    }))
                : (this.cdd.getOutsideHandle() &&
                    i.equipment.push({
                      type: this.cdd.getOutsideHandleType(),
                      code: this.cdd.getOutsideHandle(),
                      order: 100,
                    }),
                  this.cdd.getRosette() &&
                    this.cdd.getShowRosette() &&
                    i.equipment.push({
                      type: "rosette",
                      code: this.cdd.getRosette(),
                      order: 90,
                    }),
                  this.cdd.getPanelProtection() &&
                    i.equipment.push({
                      type: "panel-protection",
                      code: this.cdd.getPanelProtection(),
                      order: 10,
                    }),
                  this.cdd.getPeephole() &&
                    i.equipment.push({
                      type: "peephole",
                      code: this.cdd.getPeephole(),
                      order: 50,
                    }),
                  this.cdd.getCylinderKnob() &&
                    i.equipment.push({
                      type: "cylinder-knob",
                      code: this.cdd.getCylinderKnob(),
                      order: 110,
                    }),
                  this.cdd.getDoorstep() &&
                    i.equipment.push({
                      type: "doorstep",
                      code: this.cdd.getDoorstep(),
                      order: 200,
                    }),
                  !this.cdd.getAccessControl() ||
                    ("Fingerprint" === this.cdd.getAccessControl() &&
                      this.cdd.getHasAccessControlHandle()) ||
                    i.equipment.push({
                      type: "access-control",
                      code: this.cdd.getAccessControl(),
                      order: 15,
                    }),
                  this.cdd.getFingerprint() &&
                    !this.cdd.getHasAccessControlHandle() &&
                    i.equipment.push({
                      type: "fingerprint",
                      code: this.cdd.getFingerprint(),
                      order: 15,
                    }),
                  this.cdd.getHouseNumber() &&
                    i.equipment.push({
                      type: "house-number",
                      code: this.cdd.getHouseNumber(),
                      order: 60,
                    }),
                  this.cdd.getMailbox() &&
                    i.equipment.push({
                      type: "mailbox",
                      code: this.cdd.getMailbox(),
                      order: 15,
                    }),
                  this.cdd.getSideMailbox() &&
                    i.equipment.push({
                      type: "side-mailbox",
                      code: this.cdd.getSideMailbox(),
                      order: 15,
                    }),
                  this.cdd.getKnocker() &&
                    i.equipment.push({
                      type: "tolkala",
                      code: this.cdd.getKnocker(),
                      order: 80,
                    }),
                  this.cdd.getWallLamp() &&
                    i.equipment.push({
                      type: "wallLamp",
                      code: this.cdd.getWallLamp(),
                      order: 110,
                    }),
                  this.cdd.getWallBell() &&
                    i.equipment.push({
                      type: "wall-bell",
                      code: this.cdd.getWallBell(),
                      order: 120,
                    }),
                  this.cdd.getWallMailbox() &&
                    i.equipment.push({
                      type: "wall-mailbox",
                      code: this.cdd.getWallMailbox(),
                      order: 130,
                    }),
                  this.cdd.getHinge() &&
                    this.conf("drawHinges") &&
                    i.equipment.push({
                      type: "hinge",
                      code: this.cdd.getHinge(),
                      order: 140,
                    }),
                  this.cdd.getStopper() &&
                    i.equipment.push({
                      type: "stopper",
                      code: this.cdd.getStopper(),
                      order: 140,
                    }),
                  this.cdd.getScratchProtection() &&
                    this.cdd.getShowRosette() &&
                    i.equipment.push({
                      type: "scratch-protection",
                      code: this.cdd.getScratchProtection(),
                      order: 10,
                    }),
                  this.cdd.getDeadbolt() &&
                    i.equipment.push({
                      type: "deadbolt",
                      code: this.cdd.getDeadbolt(),
                      order: 5,
                    })),
              this.conf("items"))
            ) {
              (i.frame.extensionProfileLeft =
                this.cdd.getExtensionProfileLeft()),
                (i.frame.extensionProfileRight =
                  this.cdd.getExtensionProfileRight()),
                (i.frame.extensionProfileTop =
                  this.cdd.getExtensionProfileTop());
              var n = [];
              this.getItemModel().imageRequestItems.forEach(function (e) {
                n.push.apply(n, this.cdd.getItems(e));
              }, this),
                (i.items = n.length > 0 ? n : null);
            }
            if (!this.isFacade()) {
              var d = this.getClientDimension();
              (i.client.height = d.height), (i.client.width = d.windowWidth);
            }
            i.encodingType = "PNG8";
            var r = this.getLeftPanelWidth(i);
            r && !_.isArray(r) && (i.sidePanel.leftPanel.width = [r]);
            var l = this.getRightPanelWidth(i);
            return (
              l && !_.isArray(l) && (i.sidePanel.rightPanel.width = [l]),
              Util.log("Image JSON: %O", i),
              i
            );
          },
          getLeftPanelWidth: function (e) {
            return e &&
              e.sidePanel &&
              e.sidePanel.leftPanel &&
              e.sidePanel.leftPanel.width
              ? e.sidePanel.leftPanel.width
              : null;
          },
          getRightPanelWidth: function (e) {
            return e &&
              e.sidePanel &&
              e.sidePanel.rightPanel &&
              e.sidePanel.rightPanel.width
              ? e.sidePanel.rightPanel.width
              : null;
          },
          setOutsideColorData: function (e) {
            this.cdd.getColor(Color.PANEL) &&
              (e.panel.colorCode = this.cdd.getColor(Color.PANEL).code),
              this.cdd.getColor(Color.WING) &&
                (e.panel.wingColorCode = this.cdd.getColor(Color.WING).code),
              this.cdd.getColor(Color.FRAME) &&
                (e.frame.colorCode = this.cdd.getColor(Color.FRAME).code),
              this.cdd.getColor(Color.APP) &&
                e.layer.push({
                  name: "application",
                  colorCode: this.cdd.getColor(Color.APP).code,
                  sameAsPanel: this.cdd.getColor(Color.APP).sameAsPanel,
                }),
              this.cdd.getColor(Color.APP2) &&
                e.layer.push({
                  name: "application2",
                  colorCode: this.cdd.getColor(Color.APP2).code,
                  sameAsPanel: this.cdd.getColor(Color.APP2).sameAsPanel,
                }),
              this.cdd.getColor(Color.DFRAME) &&
                e.layer.push({
                  name: "dframe",
                  colorCode: this.cdd.getColor(Color.DFRAME).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL).code
                    : this.cdd.getColor(Color.DFRAME).code,
                  sameAsPanel: this.cdd.getColor(Color.DFRAME).sameAsPanel,
                }),
              this.cdd.getColor(Color.DFRAME2) &&
                e.layer.push({
                  name: "dframe2",
                  colorCode: this.cdd.getColor(Color.DFRAME2).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL).code
                    : this.cdd.getColor(Color.DFRAME2).code,
                  sameAsPanel: this.cdd.getColor(Color.DFRAME2).sameAsPanel,
                }),
              this.cdd.getColor(Color.PANEL2) &&
                e.layer.push({
                  name: "panel2",
                  colorCode: this.cdd.getColor(Color.PANEL2).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL).code
                    : this.cdd.getColor(Color.PANEL2).code,
                  sameAsPanel: this.cdd.getColor(Color.PANEL2).sameAsPanel,
                }),
              this.cdd.getColor(Color.PANEL3) &&
                e.layer.push({
                  name: "panel3",
                  colorCode: this.cdd.getColor(Color.PANEL3).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL).code
                    : this.cdd.getColor(Color.PANEL3).code,
                  sameAsPanel: this.cdd.getColor(Color.PANEL3).sameAsPanel,
                }),
              this.cdd.getColor(Color.CRTE) &&
                e.layer.push({
                  name: "crte",
                  colorCode: this.cdd.getColor(Color.CRTE).code,
                  sameAsPanel: this.cdd.getColor(Color.CRTE).sameAsPanel,
                }),
              this.cdd.getColor(Color.CASSETTE) &&
                e.layer.push({
                  name: "cassette",
                  colorCode: this.cdd.getColor(Color.CASSETTE).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL).code
                    : this.cdd.getColor(Color.CASSETTE).code,
                  sameAsPanel: this.cdd.getColor(Color.CASSETTE).sameAsPanel,
                });
          },
          setInsideColorData: function (e) {
            this.cdd.getColor(Color.PANEL_INSIDE) &&
              (e.panel.colorCode = this.cdd.getColor(Color.PANEL_INSIDE).code),
              this.cdd.getColor(Color.WING_INSIDE) &&
                (e.panel.wingColorCode = this.cdd.getColor(
                  Color.WING_INSIDE
                ).code),
              this.cdd.getColor(Color.FRAME_INSIDE) &&
                (e.frame.colorCode = this.cdd.getColor(
                  Color.FRAME_INSIDE
                ).code),
              this.cdd.getColor(Color.APP_INSIDE) &&
                e.layer.push({
                  name: "application",
                  colorCode: this.cdd.getColor(Color.APP_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.APP_INSIDE).sameAsPanel,
                }),
              this.cdd.getColor(Color.APP2_INSIDE) &&
                e.layer.push({
                  name: "application2",
                  colorCode: this.cdd.getColor(Color.APP2_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.APP2_INSIDE).sameAsPanel,
                }),
              this.cdd.getColor(Color.DFRAME_INSIDE) &&
                e.layer.push({
                  name: "dframe",
                  colorCode: this.cdd.getColor(Color.DFRAME_INSIDE).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL_INSIDE).code
                    : this.cdd.getColor(Color.DFRAME_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.DFRAME_INSIDE)
                    .sameAsPanel,
                }),
              this.cdd.getColor(Color.DFRAME2_INSIDE) &&
                e.layer.push({
                  name: "dframe2",
                  colorCode: this.cdd.getColor(Color.DFRAME2_INSIDE).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL_INSIDE).code
                    : this.cdd.getColor(Color.DFRAME2_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.DFRAME2_INSIDE)
                    .sameAsPanel,
                }),
              this.cdd.getColor(Color.PANEL2_INSIDE) &&
                e.layer.push({
                  name: "panel2",
                  colorCode: this.cdd.getColor(Color.PANEL2_INSIDE).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL_INSIDE).code
                    : this.cdd.getColor(Color.PANEL2_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.PANEL2_INSIDE)
                    .sameAsPanel,
                }),
              this.cdd.getColor(Color.PANEL3_INSIDE) &&
                e.layer.push({
                  name: "panel3",
                  colorCode: this.cdd.getColor(Color.PANEL3_INSIDE).sameAsPanel
                    ? this.cdd.getColor(Color.PANEL_INSIDE).code
                    : this.cdd.getColor(Color.PANEL3_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.PANEL3_INSIDE)
                    .sameAsPanel,
                }),
              this.cdd.getColor(Color.CRTE_INSIDE) &&
                e.layer.push({
                  name: "crte",
                  colorCode: this.cdd.getColor(Color.CRTE_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.CRTE_INSIDE).sameAsPanel,
                }),
              this.cdd.getColor(Color.CASSETTE_INSIDE) &&
                e.layer.push({
                  name: "cassette",
                  colorCode: this.cdd.getColor(Color.CASSETTE_INSIDE)
                    .sameAsPanel
                    ? this.cdd.getColor(Color.PANEL_INSIDE).code
                    : this.cdd.getColor(Color.CASSETTE_INSIDE).code,
                  sameAsPanel: this.cdd.getColor(Color.CASSETTE_INSIDE)
                    .sameAsPanel,
                });
          },
          getGarageDoorUrl: function () {
            var e = {
                key: this.conf("partnerKey"),
                model: this.cdd.getGarageDoor(),
                colorCode: this.cdd.getColor(Color.PANEL).code,
                wallColor: this.cdd.getWallColor(),
                width: this.cdd.getGarageDoorWidth(),
              },
              t = CryptoJS.enc.Base64.stringify(
                CryptoJS.enc.Utf8.parse(JSON.stringify(e))
              );
            return Profile.getHost() + "/rest/image/garage/" + t;
          },
          getClientDimension: function () {
            var e = $("#application-bar").height(),
              t = $("#floor").height();
            return (
              (t = t || 65),
              {
                windowWidth: this.windowWidth,
                windowHeight: this.windowHeight,
                applicationBarHeight: e,
                height: this.windowHeight - e - (this.isFacade() ? 0 : t),
                width: this.windowWidth,
              }
            );
          },
          doorElementChange: function (e) {
            this.cdd.setProductPart(e),
              KEvent.trigger(KEvent.PRODUCT_PART_CHANGE, e),
              this.tracker.sendEvent("Color", "part change", e);
          },
          loadDoorImage: function (e) {
            this.imageLoading ||
              ((this.imageLoading = !0),
              KEvent.trigger(KEvent.DOOR_IMAGE_LOAD),
              this.loader.url({ url: this.getImageUrl(), type: "doorImage" }),
              e &&
                this.loader.add({
                  url: this.getGarageDoorUrl(),
                  type: "garageDoorImage",
                }),
              this.loader.load());
          },
          loadWallImage: function (e, t) {
            this.imageLoading ||
              ((this.imageLoading = !0),
              KEvent.trigger(KEvent.DOOR_IMAGE_LOAD),
              this.loader.url({ url: this.getImageUrl(), type: "doorImage" }),
              this.isInsideWall()
                ? this.loader.add({
                    url:
                      t ||
                      Profile.getHost() +
                        "/rest/image/v1/wall/" +
                        e +
                        "?inside=true&k=" +
                        encodeURIComponent(this.conf("partnerKey")),
                    type: "wall",
                  })
                : this.loader.add({
                    url:
                      t ||
                      Profile.getHost() +
                        "/rest/image/v1/wall/" +
                        e +
                        "?k=" +
                        encodeURIComponent(this.conf("partnerKey")),
                    type: "wall",
                  }),
              this.cdd.getGarageDoor() &&
                this.loader.add({
                  url: this.getGarageDoorUrl(),
                  type: "garageDoorImage",
                }),
              this.loader.load());
          },
          loadGarageDoor: function () {
            !this.imageLoading &&
              this.cdd.getGarageDoor() &&
              ((this.imageLoading = !0),
              this.loader.url({
                url: this.getGarageDoorUrl(),
                type: "garageDoorImage",
              }),
              this.loader.load());
          },
          isFacade: function () {
            return !!this.conf("facade");
          },
          onImageDone: function (e) {
            if (((this.imageLoading = !1), this.isFacade())) {
              var t = e.getImageByType("doorImage"),
                i = this.calcFactor(t.img.width, t.img.height),
                o = parseInt(100 * (1 - i));
              o || (o = 0),
                Util.logGroup("factor", { factor: i, percent: o + "%" }),
                KEvent.trigger(KEvent.DOOR_IMAGE_DONE, e, i);
            } else KEvent.trigger(KEvent.DOOR_IMAGE_DONE, e);
          },
          calcFactor: function (e, t) {
            var i,
              o,
              s = this.getClientDimension();
            (o = e >= 730 ? s.width / 1.1 / e : s.width / 1.3 / e),
              (i = t >= 1e3 ? s.height / 1.1 / t : s.height / 1.16 / t);
            var n = o < i ? o : i;
            return n > 1 ? 1 : n;
          },
          onImageError: function (e) {
            (this.imageLoading = !1),
              KEvent.trigger(KEvent.DOOR_IMAGE_ERROR, e);
          },
          menuChange: function (e) {
            ((this.moduleLoading ||
              this.mainViewLoading ||
              this.remote.menuLoading ||
              this.remote.equipmentLoading) &&
              !e.privzeto) ||
              ((this.panelState = e.state),
              KEvent.trigger(KEvent.MENU_CHANGE_EVENT, e),
              this.tracker.sendEvent("Menu", "menu change", e.state));
          },
          wallStateChange: function (e) {
            if (
              ((this.wallState = e.state),
              KEvent.trigger(KEvent.DOOR_VIEW_CHANGE, e),
              e.default)
            )
              return void (this.urlVars.ref
                ? this.loadReference(this.urlVars.ref)
                : this.modelChange());
            this.loadDoorImage();
          },
          isMobile: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").isMobile
            );
          },
          isTablet: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").isTablet
            );
          },
          isIos: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").isIos
            );
          },
          isWindowsPhone: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").isWindowsPhone
            );
          },
          isFireFoxMobile: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").browser.match(/firefox\-mobile/gi)
            );
          },
          isFirefox: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").browser.indexOf("firefox") >= 0
            );
          },
          isTouch: function () {
            return (
              !!(
                this.conf &&
                this.conf("capabilities") &&
                this.conf("capabilities").isTouch
              ) || this._isTouch2()
            );
          },
          _isTouch2: function () {
            return "ontouchstart" in window || navigator.maxTouchPoints;
          },
          isIE9: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").browser.match(/ie9/gi)
            );
          },
          isIE: function () {
            return -1 != navigator.appVersion.indexOf("MSIE");
          },
          isWindowsDesktop: function () {
            return (
              (this.conf &&
                this.conf("capabilities") &&
                this.conf("capabilities").isWindowsDesktop) ||
              (-1 != navigator.appVersion.indexOf("Windows") &&
                -1 != navigator.appVersion.indexOf("rv:11"))
            );
          },
          isOSX: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").isOSX
            );
          },
          isSafari: function () {
            return (
              this.conf &&
              this.conf("capabilities") &&
              this.conf("capabilities").browser.indexOf("safari") >= 0
            );
          },
          moduleLoad: function (e) {
            (this.moduleLoading = e), KEvent.trigger(KEvent.MODULE_LOADING, e);
          },
          mainViewLoad: function (e) {
            (this.mainViewLoading = e),
              KEvent.trigger(KEvent.MAIN_VIEW_LOADING, e);
          },
          getWallImageUrl: function (e) {
            return e
              ? this.insideWallPatternImage
                ? this.insideWallPatternImage
                : Profile.getHost() +
                  "/rest/image/v1/wall/" +
                  this.cdd.getInsideWallColor() +
                  "?inside=true&k=" +
                  encodeURIComponent(this.conf("partnerKey"))
              : this.wallPatternImage
              ? this.wallPatternImage
              : Profile.getHost() +
                "/rest/image/v1/wall/" +
                this.cdd.getWallColor() +
                "?k=" +
                encodeURIComponent(this.conf("partnerKey"));
          },
          send: function (e, t) {
            t && t.order ? this.sendOrder(e, t) : this.sendInquiry(e, t);
          },
          sendOrder: function (e, t) {
            var i = this.cdd.getData();
            (i.lang = this.conf("lang")),
              (i.construction.woodRotation = this.getWoodRotation()),
              (i.construction.woodRotationInside = this.getWoodRotation(!0)),
              Util.group("## Send order ##"),
              Util.log("Door data: %O", i),
              Util.log("Customer: %O", e),
              Util.endGroup();
            var o = {
              doorData: i,
              customer: e,
              doorImage: this.getImageJson(!0),
              doorImageInside: this.getImageJson(null, !0),
              priceRequest: this.isPriceEnabled()
                ? this.getPriceRequestObj()
                : null,
            };
            t && _.extend(o, t),
              this.remote.sendOrder(
                o,
                function (e) {
                  e.number && (this.cdd.inquiryNumber = e.number),
                    e.referenceNumber &&
                      this.cdd.setReferenceNumber(e.referenceNumber),
                    KEvent.trigger(KEvent.SEND_ORDER_DONE, e),
                    this.tracker.sendEvent("Order", "Order sent");
                },
                this
              );
          },
          sendInquiry: function (e, t) {
            var i = this.cdd.getData();
            (i.lang = this.conf("lang")),
              (i.construction.woodRotation = this.getWoodRotation()),
              (i.construction.woodRotationInside = this.getWoodRotation(!0)),
              Util.group("## Send demand ##"),
              Util.log("Door data: %O", i),
              Util.log("Customer: %O", e),
              Util.endGroup();
            var o = {
              doorData: i,
              customer: e,
              doorImage: this.getImageJson(!0),
              doorImageInside: this.getImageJson(null, !0),
              priceRequest: this.isPriceEnabled()
                ? this.getPriceRequestObj()
                : null,
            };
            t && _.extend(o, t),
              this.remote.sendInquiry(
                o,
                function (e) {
                  e.number && (this.cdd.inquiryNumber = e.number),
                    e.referenceNumber &&
                      this.cdd.setReferenceNumber(e.referenceNumber),
                    KEvent.trigger(KEvent.SEND_INQUIRY_DONE, e),
                    this.tracker.sendEvent("Demand", "Inquiry sent");
                },
                this
              );
          },
          saveAsPdf: function (e) {
            return this.exportToPdf(e);
          },
          exportToPdf: function (e) {
            return this.remote
              .exportToPdf(e || this.cdd.getReferenceNumber())
              .done(
                _.bind(function () {
                  this.tracker.sendEvent(
                    "document",
                    "Document_Print",
                    this.loggedInUser()
                  );
                }, this)
              );
          },
          print: function (e) {
            var t = this.cdd.getData();
            (t.lang = this.conf("lang")),
              (t.construction.woodRotation = this.getWoodRotation()),
              (t.construction.woodRotationInside = this.getWoodRotation(!0)),
              Util.group("## Print configuration ##"),
              Util.log("Door data: %O", t),
              Util.endGroup();
            var i = {
              doorData: t,
              doorImage: this.getImageJson(!0),
              doorImageInside: this.getImageJson(null, !0),
              priceRequest: this.isPriceEnabled()
                ? this.getPriceRequestObj()
                : null,
            };
            e && _.extend(i, e),
              this.remote.print(
                i,
                function (e) {
                  e.referenceNumber &&
                    this.cdd.setReferenceNumber(e.referenceNumber),
                    KEvent.trigger(KEvent.PRINT_DONE, e),
                    this.tracker.sendEvent("Demand", "Print");
                },
                this
              );
          },
          printConfiguration: function () {
            var e = this.cdd.getData();
            (e.lang = this.conf("lang")),
              (e.construction.woodRotation = this.getWoodRotation()),
              (e.construction.woodRotationInside = this.getWoodRotation(!0)),
              Util.group("## Print configuration ##"),
              Util.log("Door data: %O", e),
              Util.endGroup();
            var t = {
              doorData: e,
              customer: this.cdd.getCustomer(),
              doorImage: this.getImageJson(!0),
              doorImageInside: this.getImageJson(null, !0),
              priceRequest: this.isPriceEnabled()
                ? this.getPriceRequestObj()
                : null,
            };
            return this.remote.printConfiguration(t);
          },
          saveImage: function (e) {
            this.remote.saveImage(
              e,
              function (e) {
                KEvent.trigger(KEvent.HOUSE_SAVE_DONE, e);
              },
              function (e) {
                KEvent.trigger(KEvent.CLOSE_POPUP);
              },
              this
            );
          },
          commissionChange: function (e) {
            this.cdd.setCommission(e);
          },
          newReference: function () {
            var e = this.cdd.getData();
            e.lang = this.conf("lang");
            var t = { doorData: e };
            Util.log("saving data", t),
              this.remote.getNewReference(
                t,
                function (e) {
                  Util.log("getNewReference:reference saved", e),
                    this.cdd.setReferenceNumber(e.referenceNumber),
                    KEvent.trigger(KEvent.NEW_REFERENCE, e);
                },
                this
              ),
              this.tracker.sendEvent("Reference", "Save");
          },
          createDocument: function (e) {
            this.cdd.setDemandNumber(null),
              this.cdd.setReferenceNumber(null),
              this.cdd.setCustomText(null),
              this.cdd.setDocType(null);
            var t = {
              doorData: this.cdd.getData(),
              customer: this.cdd.getCustomer(),
              docType: e,
              k: this.conf("partnerKey"),
              usr: this.loggedInUser(),
              priceRequest: this.isPriceEnabled()
                ? this.getPriceRequestObj()
                : null,
              doorImage: this.getImageJson(!0),
              doorImageInside: this.getImageJson(null, !0),
            };
            (t.doorData.lang = this.conf("lang")),
              t.doorData.generalMargin || (t.doorData.generalMargin = 0),
              t.doorData.additionalMargin1 ||
                (t.doorData.additionalMargin1 = 0);
            var i = this.remote.createDocument(t);
            return (
              i.done(
                _.bind(function (e) {
                  e &&
                    (this.cdd.setReferenceNumber(e.referenceNumber),
                    this.cdd.setDemandNumber(e.number),
                    this.cdd.setDocNumber(e.docNumber),
                    this.cdd.setDocType(e.type),
                    (this.userData.docCount = e.docCount),
                    (this.cdd.hasOrder = !1),
                    (this.cdd.documentChanged = !1),
                    KEvent.trigger(KEvent.CREATE_DOCUMENT_DONE, e),
                    this.tracker.sendEvent(
                      "document",
                      "Document_Create",
                      this.loggedInUser()
                    ));
                }, this)
              ),
              i
            );
          },
          getLimitStats: function () {
            var e = this.userData.offerLimit;
            return (
              "UNLIMITED" === this.getUserPackage() && (e = "∞"),
              this.userData.docCount + "/" + e
            );
          },
          isLimitReached: function () {
            return this.userData.docCount >= this.userData.offerLimit;
          },
          updateDocument: function (e) {
            var t = {
              customText: this.cdd.getCustomText(),
              doorData: this.cdd.getData(),
              customer: this.cdd.getCustomer(),
              docType: e,
              k: this.conf("partnerKey"),
              usr: this.loggedInUser(),
              priceRequest: this.isPriceEnabled()
                ? this.getPriceRequestObj()
                : null,
              doorImage: this.getImageJson(!0),
              doorImageInside: this.getImageJson(null, !0),
            };
            return (
              (t.doorData.lang = this.conf("lang")),
              this.remote.updateDocument(t).done(
                _.bind(function () {
                  this.cdd.documentChanged = !1;
                }, this)
              )
            );
          },
          createOrderFromOffer: function (e, t) {
            return this.remote.createOrderFromOffer(e, t).done(
              _.bind(function (e) {
                this.tracker.sendEvent(
                  "document",
                  "Document_Order",
                  this.loggedInUser()
                ),
                  (this.cdd.hasOrder = !0);
              }, this)
            );
          },
          loadReference: function (e) {
            this.remote.loadReferenceConf(e, this.onReferenceLoaded, this),
              this.tracker.sendEvent("Reference", "Load");
          },
          onReferenceLoaded: function (e) {
            var t = e.doorData;
            if (t && !t.referenceValid)
              return void KEvent.trigger(KEvent.REFERENCE_LOADED, {
                success: !1,
                referenceValid: !1,
                url: e.doorData.url,
              });
            Util.log("reference loaded", e);
            var i = new Backbone.Model(e.doorDataResponse);
            if (t && e.doorDataResponse) {
              this.cdd.reset(),
                (this.insideDoorElements = []),
                (this.cdd.doorModel = t.doorModel),
                (this.cdd.commission = t.commission),
                (this.cdd.userDiscount = t.userDiscount),
                (this.cdd.additionalDiscount = t.additionalDiscount),
                (this.cdd.doorDimensionsChanged = t.doorDimensionsChanged),
                (this.cdd.generalMargin = t.generalMargin),
                (this.cdd.additionalMargin1 = t.additionalMargin1),
                this.cdd.setCustomText(e.customText),
                this.cdd.setAUConf(e.isAUConf),
                KEvent.trigger(
                  KEvent.MODEL_CHANGE_EVENT,
                  this.cdd.doorModel,
                  null
                ),
                (this.ddr = new Backbone.Model(i.attributes)),
                (this.cdd.doorName = this.dd("name")
                  ? this.dd("name")
                  : this.dd("doorModel")),
                (this.cdd.hasDoorSideModel = this.dd("hasDoorSideModel")),
                this.cdd.setResetProfile(this.dd("resetProfile")),
                this.dd("doorElements").length > 0 &&
                  (this.cdd._productPart = this.dd("doorElements")[0].state);
              var o = new Backbone.Model(this.dd("doorDimensions"));
              this.setDoorDataDimensions(o),
                this.copyValues(this.cdd.construction, t.construction),
                (this.cdd.construction.customRenderType =
                  t.construction.customRenderType),
                (this.cdd.doorOption = t.doorOption),
                this.copyValues(this.cdd.color, t.color, {
                  wallColor: !0,
                  insideWallColor: !0,
                }),
                this.copyValues(this.cdd.glass, t.glass),
                this.copyValues(this.cdd.equipment, t.equipment),
                (this.cdd.items = t.items ? t.items : []),
                (this.cdd.insideModel = t.insideModel),
                (this.cdd.sideModel = t.sideModel),
                (this.cdd.sideModelName = t.sideModelName),
                (this.cdd.sideModelDummy = t.sideModelDummy),
                (this.cdd.hasSideModelMotive = t.hasSideModelMotive),
                (this.cdd.canSetOrnamentGlassSide = t.canSetOrnamentGlassSide),
                (this.cdd.garageDoor = t.garageDoor),
                this.cdd.setPackage(t.equipmentPackage),
                (this.cdd.firstLoad = !1),
                (this.cdd.canSetOrnamentGlassSide = t.canSetOrnamentGlassSide);
              var s = e.packageProfileList
                ? e.packageProfileList
                : this.dd("profile");
              s &&
                (_.forEach(
                  s,
                  function (e) {
                    e.code == this.cdd.getProfile() &&
                      e.wing &&
                      this.cdd.setWingCode(e.wing.code);
                  },
                  this
                ),
                (this.profileList = s),
                this.prepareProfileList(this.profileList, {
                  din: this.cdd.getDinDirection(),
                  model: this.cdd.doorModel,
                })),
                t.demandOptions && t.demandOptions.length > 0
                  ? (this.cdd.demandOptions = t.demandOptions)
                  : (this.cdd.demandOptions = []),
                t.additionalOptions && t.additionalOptions.length > 0
                  ? (this.cdd.additionalOptions = t.additionalOptions)
                  : (this.cdd.additionalOptions = []),
                null == t.construction.leftSideWidth &&
                  null == t.construction.rightSideWidth &&
                  this.setDefaultSideGlass(),
                null == t.construction.leftSideWidth &&
                  (this.cdd.construction.leftSideWidth = [
                    this.getDefaultSideWidth(),
                  ]),
                null == t.construction.rightSideWidth &&
                  (this.cdd.construction.rightSideWidth = [
                    this.getDefaultSideWidth(),
                  ]),
                (null != t.construction.topHeight &&
                  0 !== t.construction.topHeight) ||
                  ((this.cdd.construction.topHeight =
                    this.getDefaultTopHeight()),
                  this.setDefaultUpperGlass()),
                (null != t.construction.middleWidth &&
                  0 !== t.construction.middleWidth) ||
                  ((this.cdd.construction.middleWidth =
                    this.getDefaultSideWidth()),
                  this.setDefaultMiddleGlass()),
                this.setDefaultInsideDoorElements(
                  this.dd("defaultInsideDoorElements")
                ),
                this.loadDoorImage(),
                this.calculateDimensions(),
                this.cdd.setReferenceNumber(t.referenceNumber),
                this.cdd.setDemandNumber(t.number),
                this.cdd.setCustomer(e.customer),
                this.cdd.setDocNumber(t.docNumber),
                this.cdd.setDocType(t.docType),
                (this.cdd.documentChanged = !1),
                (this.cdd.hasOrder = t.hasOrder),
                this.setSerieAndCateogry(),
                KEvent.trigger(KEvent.DOOR_DATA_RESPONSE, i),
                KEvent.trigger(KEvent.REFERENCE_LOADED, {
                  success: !0,
                  referenceValid: !0,
                  referenceData: e.doorData,
                });
            } else
              KEvent.trigger(KEvent.REFERENCE_LOADED, {
                success: !1,
                referenceValid: !0,
              });
          },
          copyValues: function (e, t, i) {
            i = i || {};
            for (var o in t)
              t.hasOwnProperty(o) &&
                e.hasOwnProperty(o) &&
                (null == t[o] || i.hasOwnProperty(o) || (e[o] = t[o]));
          },
          isLoginFirst: function () {
            return "loginFirst" === this.conf("loginType");
          },
          isAutoLogin: function () {
            return (
              "autoLogin" === this.conf("loginType") && this.isLoginEnabled()
            );
          },
          isLoginEnabled: function () {
            return this.conf("loginEnabled");
          },
          isPriceEnabled: function () {
            return this.conf("priceEnabled");
          },
          isPriceAndLogin: function () {
            return this.isLoginEnabled() && this.isPriceEnabled();
          },
          isPublicPrice: function () {
            return this.isPriceEnabled() && !this.isLoginEnabled();
          },
          evalExpression: function (exp, context) {
            return exp && context
              ? function (str) {
                  return eval(str);
                }.call(context, exp)
              : null;
          },
          evalExpression2: function (e, t) {
            return e && t
              ? Function('"use strict"; return (function(){' + e + "})")().call(
                  t
                )
              : null;
          },
          prepareProfileList: function (e, t) {
            if (!e || !t) return null;
            var i = null,
              o = !1;
            return (
              _.each(
                e,
                function (e) {
                  if (e.expression) {
                    o = !0;
                    this.evalExpression(e.expression, t)
                      ? ((e.visible = !0), e.privzeto && (i = e))
                      : (e.visible = !1);
                  } else (e.visible = !0), e.privzeto && (i = e);
                },
                this
              ),
              o || !t.retainDin ? i : null
            );
          },
          registerUser: function (e) {
            this.remote.registerUser(
              e,
              function (e) {
                KEvent.trigger(KEvent.REGISTER_USER_DONE, e);
              },
              function (e) {
                KEvent.trigger(KEvent.REGISTER_USER_ERROR, e);
              },
              this
            );
          },
          listUsers: function () {
            this.remote.listUsers().done(function (e) {
              KEvent.trigger(KEvent.LIST_USERS_DONE, e);
            });
          },
          getUsersByFilter: function (e) {
            this.remote.getAllUsersByFilter(e).done(function (e) {
              KEvent.trigger(KEvent.LIST_USERS_DONE, e);
            });
          },
          getAllBillsByFilter: function (e) {
            this.remote.getAllBillsByFilter(e).done(function (e) {
              KEvent.trigger(KEvent.LIST_BILLS_DONE, e);
            });
          },
          getUser: function (e) {
            return this.remote.getUser(e);
          },
          getUserGroupData: function () {
            return this.remote.getUserGroupData();
          },
          updateUser: function (e) {
            return this.remote.updateUser(e).done(function (e) {
              KEvent.trigger(KEvent.USER_UPDATE_DONE, e);
            });
          },
          createUser: function (e) {
            return this.remote.createUser(e);
          },
          sendAccessRequest: function (e) {
            return this.remote.sendAccessRequest(e);
          },
          setPassword: function (e) {
            return this.remote.setPassword(e);
          },
          resetPassword: function (e) {
            return this.remote.resetPassword(e);
          },
          deleteDocument: function (e) {
            e &&
              this.remote
                .deleteDocument(e)
                .done(
                  _.bind(function (t) {
                    (this.userData.docCount = t.docCount),
                      t.referenceNumber === this.cdd.getReferenceNumber() &&
                        (this.cdd.setDemandNumber(null),
                        this.cdd.setDocType(null),
                        this.cdd.setDocNumber(null),
                        (this.cdd.documentChanged = !0)),
                      KEvent.trigger(KEvent.DELETE_DONE, {
                        referenceNumber: e,
                        delete: !0,
                      });
                  }, this)
                )
                .fail(function () {
                  KEvent.trigger(KEvent.DELETE_DONE, {
                    referenceNumber: e,
                    delete: !1,
                  });
                });
          },
          showChangedDocumentAlert: function () {
            return (
              !!this.cdd.documentChanged &&
              this.cdd.getDocType() === DocType.OFFER &&
              !this.cdd.hasOrder
            );
          },
          fetchDiscounts: function () {
            return this.remote.fetchDiscounts();
          },
          fetchDiscountSystem: function () {
            return this.remote
              .fetchDiscountSystem()
              .done(function (e) {
                KEvent.trigger(KEvent.DISCOUNT_SYSTEMS, e);
              })
              .fail(function (e) {});
          },
          createExcelLink: function () {
            return this.remote.createExcelLink(this.getPriceRequestObj());
          },
          exportBillingToExcel: function (e) {
            return this.remote.exportBillingToExcel(e);
          },
          canDownloadExcel: function () {
            return this.userData && this.userData.downloadExcel;
          },
          removeUser: function (e) {
            return this.remote.removeUser(e);
          },
          getCountries: function () {
            return this.remote.getCountries();
          },
          getCurrencies: function () {
            return this.remote.getCurrencies();
          },
          getRemoteUserPackages: function () {
            return this.remote.getUserPackages();
          },
          getUserPackage: function () {
            return this.userData.userPackage;
          },
          loggedInUser: function () {
            return (this.isLoginFirst() || this.isAutoLogin()) &&
              this.userData &&
              this.userData.username
              ? this.userData.username
              : null;
          },
          unauthorizedAccess: function () {
            KEvent.trigger(KEvent.CLOSE_ACTION_MENU),
              KEvent.trigger(KEvent.CLOSE_POPUP),
              KEvent.trigger(KEvent.OPEN_POPUP, {
                module: "app/views/main/popup/ReloadPageDialog",
                template: "UNAUTHORIZED_ACCESS",
                containerClass: "unauthorized_access",
                title: this.getLabel("popup", "ATTENTION"),
                destroyable: !0,
              });
          },
          cookieSupport: function () {
            var e = "configurator_cookie_test";
            return (
              Util.setCookie(e, 1),
              !!Util.getCookie(e) && (Util.deleteCookie(e), !0)
            );
          },
          setBannerCookie: function (e) {
            this.tracker.setAnonymizeIP(e),
              Util.setCookie("_conf_cookie", e, 365);
          },
          isBillingPeriod: function () {
            return this.conf("isBillingPeriod");
          },
          isShowDiscountAmount: function () {
            return this.conf("showDiscountAmount");
          },
          getCurrentUser: function () {
            if (!this.userData) return null;
            var e = this.userData.contactData;
            return e && e.firstName && e.lastName
              ? e.firstName + " " + e.lastName
              : e && e.firstName
              ? e.firstName
              : this.userData.username
              ? this.userData.username
              : null;
          },
          isCurrentUserSuperAdmin: function () {
            return (
              null != this.userData && "SUPER_ADMIN" === this.userData.userGroup
            );
          },
          getProfileRuleParams: function (e) {
            return {
              profile: null != e ? e.code : this.cdd.getProfile(!1),
              model: this.cdd.doorModel,
              category: this.dd("category"),
              series: this.dd("serie"),
              material: this.cdd.getMaterial(),
              isSide: this.isLeftFrame() || this.isRightFrame(),
              isDouble: this.isDoubleFrame(),
              din: this.cdd.getDinDirection(),
            };
          },
          getLanguage: function () {
            return this.conf("lang");
          },
          setMinDoorWidth: function (e) {
            (this.cdd.minDoorWidth = e),
              this.cdd.getWidth() < e && this.cdd.setWidth(e),
              !this.cdd.minDoorWidth2 &&
                this.cdd.getPanel2Width() < e &&
                this.cdd.setPanel2Width(e);
          },
          setMaxDoorWidth: function (e) {
            (this.cdd.maxDoorWidth = e),
              this.cdd.getWidth() > e && this.cdd.setWidth(e),
              !this.cdd.maxDoorWidth2 &&
                this.cdd.getPanel2Width() > e &&
                this.cdd.setPanel2Width(e);
          },
          setMinDoorHeight: function (e) {
            (this.cdd.minDoorHeight = e),
              this.cdd.getHeight() < e && this.cdd.setHeight(e);
          },
          setMaxDoorHeight: function (e) {
            (this.cdd.maxDoorHeight = e),
              this.cdd.getHeight() > e && this.cdd.setHeight(e);
          },
          runProfileRules: function (e) {
            var t, i, o, s, n, d;
            if (
              (this.dd("minDoorWidthRule")
                ? ((t = this.evalExpression2(
                    this.dd("minDoorWidthRule"),
                    this.getProfileRuleParams(e)
                  )),
                  this.setMinDoorWidth(t))
                : null != e &&
                  e.minDoorWidthRule &&
                  ((t = this.evalExpression2(
                    e.minDoorWidthRule,
                    this.getProfileRuleParams(e)
                  )),
                  this.setMinDoorWidth(t)),
              this.dd("maxDoorWidthRule")
                ? ((i = this.evalExpression2(
                    this.dd("maxDoorWidthRule"),
                    this.getProfileRuleParams(e)
                  )),
                  this.setMaxDoorWidth(i))
                : null != e &&
                  e.maxDoorWidthRule &&
                  ((i = this.evalExpression2(
                    e.maxDoorWidthRule,
                    this.getProfileRuleParams(e)
                  )),
                  this.setMaxDoorWidth(i)),
              this.dd("minDoorHeightRule")
                ? ((o = this.evalExpression2(
                    this.dd("minDoorHeightRule"),
                    this.getProfileRuleParams(e)
                  )),
                  this.setMinDoorHeight(o))
                : null != e &&
                  e.minDoorHeightRule &&
                  ((o = this.evalExpression2(
                    e.minDoorHeightRule,
                    this.getProfileRuleParams(e)
                  )),
                  this.setMinDoorHeight(o)),
              this.dd("maxDoorHeightRule")
                ? ((s = this.evalExpression2(
                    this.dd("maxDoorHeightRule"),
                    this.getProfileRuleParams(e)
                  )),
                  this.setMaxDoorHeight(s))
                : null != e &&
                  e.maxDoorHeightRule &&
                  ((s = this.evalExpression2(
                    e.maxDoorHeightRule,
                    this.getProfileRuleParams(e)
                  )),
                  this.setMaxDoorHeight(s)),
              !this.cdd.doorDimensionsChanged)
            ) {
              if (
                (n = this.dd("defaultDoorWidthRule")
                  ? this.evalExpression2(
                      this.dd("defaultDoorWidthRule"),
                      this.getProfileRuleParams(e)
                    )
                  : this.configuration.get("defaultDoorWidth"))
              ) {
                var r = n;
                this.cdd.maxDoorWidth2 &&
                  r > this.cdd.maxDoorWidth2 &&
                  (r = this.cdd.maxDoorWidth2),
                  this.cdd.minDoorWidth2 &&
                    r < this.cdd.minDoorWidth2 &&
                    (r = this.cdd.minDoorWidth2),
                  n > this.cdd.maxDoorWidth
                    ? (n = this.cdd.maxDoorWidth)
                    : n < this.cdd.minDoorWidth && (n = this.cdd.minDoorWidth),
                  (this.cdd.construction.width = n),
                  (this.cdd.construction.panel2Width = r),
                  (this.cdd.defaultDoorWidth = n);
              }
              (d = this.dd("defaultDoorHeightRule")
                ? this.evalExpression2(
                    this.dd("defaultDoorHeightRule"),
                    this.getProfileRuleParams(e)
                  )
                : this.configuration.get("defaultDoorHeight")),
                d &&
                  (d > this.cdd.maxDoorHeight
                    ? (d = this.cdd.maxDoorHeight)
                    : d < this.cdd.minDoorHeight &&
                      (d = this.cdd.minDoorHeight),
                  (this.cdd.construction.height = d),
                  (this.cdd.defaultDoorHeight = d));
            }
          },
          runSideModelRules: function (e) {
            if (
              null != e ||
              this.defaultSideWidthMinChange ||
              this.defaultSideWidthMaxChange
            ) {
              var t = this.isLeftFrame()
                  ? this.isDoubleSide()
                    ? 2
                    : this.cdd.getRepeatLeft()
                  : 0,
                i = this.isRightFrame()
                  ? this.isDoubleSide()
                    ? 2
                    : this.cdd.getRepeatRight()
                  : 0;
              if (t + i > 0) {
                var o = this.conf("maxWidthTopGlass"),
                  s = this.isTopFrame(),
                  n = this.conf("maxWidthSideGlass");
                if (
                  (null != e && e.minWidthRule) ||
                  this.defaultSideWidthMinChange
                ) {
                  var d =
                      null != e && null != e.minWidthRule
                        ? this.evalExpression2(
                            e.minWidthRule,
                            this.getProfileRuleParams()
                          )
                        : this.configuration.get("minSideWidth"),
                    r = s && null != o && this.cdd.getWidth() + d * (t + i) > o;
                  (this.cdd.minSideWidth = r
                    ? (o - this.cdd.getWidth()) / (t + i)
                    : d),
                    r ||
                      s ||
                      ((r = null != n && this.cdd.getWidth() + d * (t + i) > n),
                      (this.cdd.minSideWidth = r
                        ? (n - this.cdd.getWidth()) / (t + i)
                        : d)),
                    (this.defaultSideWidthMinChange =
                      null != e && null != e.minWidthRule);
                  for (var l = 0; l < t; l++)
                    if (this.cdd.getLeftWidth(l) < this.cdd.minSideWidth) {
                      if (
                        (this.cdd.setLeftWidth(this.cdd.minSideWidth, l),
                        this.calculateDimensions(),
                        (s && null != o) || (!s && n))
                      )
                        return void this.runSideModelRules(e);
                    } else
                      (r ||
                        this.cdd.getTotalWidth() > o ||
                        this.cdd.getTotalWidth() > n) &&
                        (this.cdd.setLeftWidth(this.cdd.minSideWidth, l),
                        this.calculateDimensions());
                  for (var l = 0; l < i; l++)
                    if (this.cdd.getRightWidth(l) < this.cdd.minSideWidth) {
                      if (
                        (this.cdd.setRightWidth(this.cdd.minSideWidth, l),
                        this.calculateDimensions(),
                        (s && null != o) || (!s && n))
                      )
                        return void this.runSideModelRules(e);
                    } else
                      (r ||
                        this.cdd.getTotalWidth() > o ||
                        this.cdd.getTotalWidth() > n) &&
                        (this.cdd.setRightWidth(this.cdd.minSideWidth, l),
                        this.calculateDimensions());
                }
                if (
                  (null != e && e.maxWidthRule) ||
                  this.defaultSideWidthMaxChange
                ) {
                  (this.cdd.maxSideWidth =
                    null != e && null != e.maxWidthRule
                      ? this.evalExpression2(
                          e.maxWidthRule,
                          this.getProfileRuleParams()
                        )
                      : this.configuration.get("maxSideWidth")),
                    (this.defaultSideWidthMaxChange =
                      null != e && null != e.maxWidthRule);
                  for (var l = 0; l < t; l++)
                    this.cdd.getLeftWidth(l) > this.cdd.maxSideWidth &&
                      this.cdd.setLeftWidth(this.cdd.maxSideWidth, l);
                  for (var l = 0; l < i; l++)
                    this.cdd.getRightWidth(l) > this.cdd.maxSideWidth &&
                      this.cdd.setRightWidth(this.cdd.maxSideWidth, l);
                }
              }
            }
          },
          getItemModel: function () {
            return this.itemModel;
          },
        })),
        {
          getInstance: function (e) {
            return instance || (instance = new Model(e)), instance;
          },
        }
      );
    }
  ),
  define("lib/text!tpl/shortcut.html", [], function () {
    return '\n    <a class="btn back">\n        <div class="icon">\n            <div class="arrow">\n                <div class="line-1"></div>\n                <div class="line-2"></div>\n                <div class="line-3"></div>\n            </div>\n        </div>\n    </a>\n\n    <div class="menu-index">\n        <a></a>\n    </div>\n    <a class="btn next">\n        <div class="icon">\n            <div class="arrow">\n                <div class="line-1"></div>\n                <div class="line-2"></div>\n                <div class="line-3"></div>\n            </div>\n        </div>\n    </a>\n';
  }),
  define(
    "app/components/Shortcut",
    [
      "require",
      "backbone",
      "underscore",
      "app/models/Model",
      "app/events/KEvent",
      "lib/text!tpl/shortcut.html",
      "app/util/Util",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/models/Model"),
        s = e("app/events/KEvent"),
        n = e("lib/text!tpl/shortcut.html"),
        d = (e("app/util/Util"), null);
      return t.View.extend({
        className: "ui-shortcut",
        id: "shortcut",
        events: { "click .back": "onBackClick", "click .next": "onNextClick" },
        initialize: function () {
          this.listenTo(s, s.MENU_CHANGE_EVENT, this.onMenuChange),
            this.listenTo(s, s.SHORTCUT_BACK, this.onShortcutBack),
            this.listenTo(s, s.SHORTCUT_NEXT, this.onShortcutNext),
            this.listenTo(s, s.OPEN_POPUP, this.onOpenPopup),
            this.listenTo(s, s.CLOSE_POPUP, this.onClosePopup),
            (d = i.template(n)),
            (this.data = o.getInstance()),
            (this.list = new t.Collection(this.data.conf("menu"))),
            i.bindAll(
              this,
              "render",
              "onMenuChange",
              "setMenuIndexLabel",
              "onBackClick",
              "onShortcutBack",
              "onNextClick",
              "onShortcutNext",
              "getCurrentModel",
              "clickEffect"
            ),
            this.enableKeyboard();
        },
        onMenuChange: function (e) {
          "menu" === e.state || e.module.match(/ConfigurationOverview/i)
            ? this.$el.addClass("menu")
            : this.$el.removeClass("menu"),
            this.setMenuIndexLabel();
        },
        setMenuIndexLabel: function () {
          var e = this.getCurrentModel();
          if (e) {
            var t = e.get("index") + 1;
            this.$(".menu-index > a").html(t + "/" + this.list.length),
              1 == t
                ? this.$(".btn.back").addClass("disabled")
                : this.$(".btn.back").removeClass("disabled"),
              t == this.list.length
                ? this.$(".btn.next").addClass("disabled")
                : this.$(".btn.next").removeClass("disabled");
          }
        },
        onBackClick: function () {
          s.trigger(s.SHORTCUT_BACK);
        },
        onNextClick: function () {
          s.trigger(s.SHORTCUT_NEXT);
        },
        onShortcutBack: function (e) {
          var t = this.getCurrentModel();
          if (t) {
            var i = t.get("index") - 1;
            if (!(i < 0)) {
              var o = this.getPreviousModel(i);
              this.clickEffect(".btn.back"),
                this.data.menuChange({
                  module: o.get("module"),
                  state: o.get("state"),
                  label: o.get("label"),
                  privzeto: !1,
                });
            }
          }
        },
        onShortcutNext: function (e) {
          var t = this.getCurrentModel();
          if (t) {
            var i = t.get("index") + 1;
            if (!(i > this.list.length - 1)) {
              var o = this.getNextModel(i);
              this.clickEffect(".btn.next"),
                this.data.menuChange({
                  module: o.get("module"),
                  state: o.get("state"),
                  label: o.get("label"),
                  privzeto: !1,
                });
            }
          }
        },
        getNextModel: function (e) {
          for (var t, i = e; i < this.list.length; i++) {
            if (((t = this.list.at(i)), "ornament" === t.get("state"))) {
              if (!this.data.isGlassMenuEnabled()) continue;
            } else if (
              "side-model" === t.get("state") &&
              this.data.isSideModelMenuDisabled()
            )
              continue;
            break;
          }
          return t;
        },
        getPreviousModel: function (e) {
          for (var t, i = e; i >= 0; i--) {
            if (((t = this.list.at(i)), "ornament" === t.get("state"))) {
              if (!this.data.isGlassMenuEnabled()) continue;
            } else if (
              "side-model" === t.get("state") &&
              this.data.isSideModelMenuDisabled()
            )
              continue;
            break;
          }
          return t;
        },
        getCurrentModel: function () {
          return this.list.findWhere({ state: this.data.panelState });
        },
        clickEffect: function (e) {
          var t = this.$el.find(e),
            i = this.$el.find(e).find("div.icon");
          i.removeClass("transition"),
            t.addClass("click"),
            setTimeout(function () {
              i.addClass("transition"), t.removeClass("click");
            }, 50);
        },
        enableKeyboard: function () {
          s.trigger(s.KEYBOARD_ON, {
            uniqueKey: "LEFT_SHORTCUT",
            keyCode: 37,
            triggerEvent: "SHORTCUT_BACK",
          }),
            s.trigger(s.KEYBOARD_ON, {
              uniqueKey: "RIGHT_SHORTCUT",
              keyCode: 39,
              triggerEvent: "SHORTCUT_NEXT",
            });
        },
        disableKeyboard: function () {
          s.trigger(s.KEYBOARD_OFF, "LEFT_SHORTCUT"),
            s.trigger(s.KEYBOARD_OFF, "RIGHT_SHORTCUT");
        },
        onOpenPopup: function () {
          this.disableKeyboard();
        },
        onClosePopup: function () {
          this.enableKeyboard();
        },
        render: function () {
          return this.$el.append(d()), this;
        },
      });
    }
  ),
  define(
    "app/components/PriceUI",
    [
      "require",
      "backbone",
      "app/events/KEvent",
      "underscore",
      "app/models/Model",
      "app/util/Util",
      "app/util/Labels",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("app/events/KEvent"),
        o = e("underscore"),
        s = e("app/models/Model"),
        n = (e("app/util/Util"), e("app/util/Labels"));
      return t.View.extend({
        id: "price-ui",
        className: "hidden",
        initialize: function () {
          (this.data = s.getInstance()),
            this.data.conf("priceEnabled") &&
              (this.listenTo(i, i.BAUFORM_CHANGE, this.getPrice),
              this.listenTo(i, i.DIMENSION_CHANGE, this.getPrice),
              this.listenTo(i, i.BLIND_PROFILE_CHANGE, this.getPrice),
              this.listenTo(i, i.DIN_CHANGE, this.getPrice),
              this.listenTo(i, i.DOOR_DATA_RESPONSE, this.getPrice),
              this.listenTo(i, i.PACKAGE_CHANGE, this.getPrice),
              this.listenTo(i, i.COLOR_CHANGE, this.getPrice),
              this.listenTo(i, i.ORNAMENT_CHANGE, this.getPrice),
              this.listenTo(i, i.MOTIVE_CHANGE, this.getPrice),
              this.listenTo(i, i.GLAZING_CHANGE, this.getPrice),
              this.listenTo(i, i.GLASS_OPTION_CHANGE, this.getPrice),
              this.listenTo(i, i.EQUIPMENT_CHANGE, this.getPrice),
              this.listenTo(i, i.USER_SETTINGS_UPDATE, this.getPrice),
              this.listenTo(i, i.USER_DISCOUNT_UPDATE, this.getPrice),
              this.listenTo(i, i.PROFILE_CHANGE, this.getPrice),
              this.listenTo(i, i.MATERIAL_CHANGE, this.getPrice),
              this.listenTo(i, i.INNER_WING_CHANGE, this.getPrice),
              this.listenTo(i, i.ITEM_CHANGE, this.getPrice),
              this.listenTo(i, i.SIDE_MODEL_CHANGE, this.getPrice),
              this.listenTo(i, i.WOOD_ROTATION_CHANGE, this.getPrice),
              this.listenTo(i, i.INSIDE_MODEL_DATA, this.getPrice),
              this.listenTo(i, i.PRICE, this.onPrice),
              this.listenTo(i, i.PRICE_LOADING, this.onPriceLoading),
              this.$el.removeClass("hidden"),
              this.$el.toggleClass("no-inside", !this.data.conf("insideView")));
        },
        getPrice: o.debounce(function () {
          this.data.getPrice();
        }, 20),
        onPriceLoading: function () {
          this.$el.toggleClass("spinner", this.data.priceLoading);
        },
        onPrice: function () {
          this.$el.removeClass("spinner"),
            this.data.priceData.netPriceFriendly
              ? this.$(".price").html(
                  this.data.userData.showPriceWithVat
                    ? this.data.priceData.grossPriceFriendly
                    : this.data.priceData.netPriceFriendly
                )
              : null === this.data.conf("loginType") &&
                this.data.priceData.doorPriceWithVAT
              ? this.$(".price").html(this.data.priceData.doorPriceWithVAT)
              : this.data.userData.showPriceWithVat
              ? this.$(".price").html(this.data.priceData.doorPriceWithVAT)
              : this.$(".price").html(
                  this.data.priceData.doorPriceDiscountOptions
                );
        },
        render: function () {
          return (
            this.$el.append(
              "<div class='price-label'>" +
                n.get("print", "PRICE_LABEL") +
                this.data.getCurrency(!0) +
                "</div><div class='price'></div>"
            ),
            this
          );
        },
      });
    }
  ),
  define("lib/text!tpl/sandwich.html", [], function () {
    return '<i class="sandwich">\n    <div class="line transition l-1st"></div>\n    <div class="line transition l-2nd"></div>\n    <div class="line transition l-3rd"></div>\n</i>\n<span class="label"><%=menuLabel%></span>';
  }),
  define(
    "app/components/Sandwich",
    [
      "require",
      "backbone",
      "app/events/KEvent",
      "underscore",
      "app/models/Model",
      "app/util/Util",
      "lib/text!tpl/sandwich.html",
      "app/util/Labels",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("app/events/KEvent"),
        o = e("underscore"),
        s =
          (e("app/models/Model"),
          e("app/util/Util"),
          e("lib/text!tpl/sandwich.html")),
        n = e("app/util/Labels"),
        d = null;
      return t.View.extend({
        id: "sandwich-btn",
        events: { click: "onSandwichClick" },
        initialize: function () {
          o.bindAll(this, "onSandwichClick"), (d = o.template(s));
        },
        onSandwichClick: function () {
          i.trigger(i.PANEL_OPEN);
        },
        render: function () {
          return (
            this.$el.append(d({ menuLabel: n.get("sandwich", "MENU") })), this
          );
        },
      });
    }
  ),
  define(
    "app/views/main/MainView",
    [
      "require",
      "backbone",
      "underscore",
      "jquery",
      "app/profile",
      "app/events/KEvent",
      "app/util/Util",
      "app/models/Model",
      "app/components/Shortcut",
      "app/components/PriceUI",
      "app/components/Sandwich",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = (e("jquery"), e("app/profile"), e("app/events/KEvent")),
        s = (e("app/util/Util"), e("app/models/Model")),
        n = e("app/components/Shortcut"),
        d = e("app/components/PriceUI"),
        r = e("app/components/Sandwich");
      return t.View.extend({
        className: "main-view hidden",
        id: "main-view",
        states: {},
        initialize: function () {
          i.bindAll(this, "onStateChange", "onModuleLoad"),
            (this.data = s.getInstance()),
            (this.model = new t.Model()),
            this.listenTo(this.model, "change:state", this.onStateChange),
            this.listenTo(o, o.MENU_CHANGE_EVENT, this.onMenuChange);
        },
        getMainModule: function () {
          return {
            module: this.data.isFacade()
              ? "app/views/main/ExIn"
              : "app/views/main/InOutView",
            state: "wall",
          };
        },
        onStateChange: function (t) {
          var i = this.states[t.get("state")];
          i
            ? this.toggleModule(i.id)
            : (this.data.mainViewLoad(!0),
              e([t.get("module")], this.onModuleLoad));
        },
        onModuleLoad: function (e) {
          var t = this.model.get("state"),
            i = new e();
          "door-house" === t
            ? (this.toggleModule(t),
              this.$el.append(i.render().el),
              i.setup(),
              (this.states[t] = i))
            : (this.$el.append(i.el),
              (this.states[t] = i),
              this.toggleModule(i.id)),
            this.data.mainViewLoad(!1);
        },
        toggleModule: function (e) {
          this.$el.removeClass().addClass(e);
        },
        onMenuChange: function (e) {
          "myHouse" === e.state
            ? this.model.set({
                module: "app/components/House2",
                state: "door-house",
              })
            : "wall" !== this.model.get("state") &&
              this.model.set(this.getMainModule());
        },
        render: function () {
          return (
            this.$el.append(new n().render().el),
            this.$el.append(new r().render().el),
            this.$el.append(new d().render().el),
            this.model.set(this.getMainModule()),
            this
          );
        },
      });
    }
  ),
  define("lib/text!tpl/panel.html", [], function () {
    return '<div id="header">\r\n    <a id="home-btn">\r\n        <i class="sandwich">\r\n            <div class="line transition l-1st"></div>\r\n            <div class="line transition l-2nd"></div>\r\n            <div class="line transition l-3rd"></div>\r\n        </i>\r\n        <span class="title">&nbsp;</span>\r\n    </a>\r\n    <a id="close-btn">\r\n        <i class="cross">\r\n            <div class="line l-1st"></div>\r\n            <div class="line l-2nd"></div>\r\n        </i>\r\n    </a>\r\n</div>\r\n<div id="views" class="viewContainer"></div>';
  }),
  define(
    "app/views/main/Menu",
    [
      "require",
      "backbone",
      "app/events/KEvent",
      "underscore",
      "app/models/Model",
      "app/util/Util",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("app/events/KEvent"),
        o = e("underscore"),
        s = e("app/models/Model"),
        n = e("app/util/Util");
      return (
        (MenuItemRenderer = t.View.extend({
          tagName: "a",
          className: "menu-item",
          initialize: function () {
            (this.data = s.getInstance()),
              o.bindAll(this, "render"),
              this.listenTo(i, i.MENU_CHANGE_EVENT, this.onMenuChange);
          },
          onMenuChange: function (e) {
            this.model.get("state") == e.state
              ? (this.$el.addClass("active visited"),
                this.scrollToVisible(),
                this.model.set("visited", !0))
              : this.$el.removeClass("active");
          },
          scrollToVisible: function () {
            var e = $("#menu-view"),
              t = this.$el.offset().top,
              i = this.$el.innerHeight(),
              o = e.offset().top,
              s = e.innerHeight(),
              n = e.scrollTop();
            t + i > o + s && e.scrollTop(n + (t + i - (o + s))),
              t < o && e.scrollTop(n + (t - o));
          },
          render: function () {
            return (
              "ornament" != this.model.get("state") ||
                this.data.isGlassMenuEnabled() ||
                (this.$el.addClass("disabled"), this.model.set("disabled", !0)),
              "side-model" == this.model.get("state") &&
                this.data.isSideModelMenuDisabled() &&
                (this.$el.addClass("disabled"), this.model.set("disabled", !0)),
              $("<i></i>", { class: "icon" }).appendTo(this.el),
              $("<i></i>", {
                class: "tooltip-el",
                title: this.model.get("label"),
              }).appendTo(this.el),
              $("<span></span>", {
                class: "icon-title",
                html: this.model.get("shortLabel")
                  ? this.model.get("shortLabel")
                  : this.model.get("label"),
              }).appendTo(this.el),
              $("<span></span>", {
                class: "name",
                html: this.model.get("label"),
              }).appendTo(this.el),
              $("<span></span>", { class: "visited" }).appendTo(this.el),
              this.$el.addClass(this.model.get("state")),
              this.$el.attr({ cid: this.model.cid }),
              this
            );
          },
        })),
        t.View.extend({
          id: "menu-view",
          className: "scrolling",
          events: { "click .menu-item": "onMenuItemClick" },
          initialize: function () {
            o.bindAll(
              this,
              "render",
              "onMenuItemClick",
              "initScrollBar",
              "onScrollBarLoad",
              "setDisabled"
            ),
              (this.data = s.getInstance()),
              this.listenTo(i, i.DOOR_DATA_RESPONSE, this.onDoorData),
              this.listenTo(i, i.BAUFORM_CHANGE, this.onBauformChange),
              this.listenTo(i, i.MODULE_LOADING, this.onModuleLoad),
              this.listenTo(i, i.GET_MENU_LIST, this.getMenuList),
              this.listenTo(i, i.PROFILE_CHANGE, this.onProfileChange),
              (this.list = new t.Collection(this.data.conf("menu"))),
              this.data.isWindowsDesktop() ||
                n.fixScrolling(this.$el, this.data),
              this.render(),
              this.data.isWindowsDesktop() &&
                e(["scrollBar"], this.onScrollBarLoad);
          },
          onScrollBarLoad: function () {
            o.debounce(this.initScrollBar, 50)();
          },
          initScrollBar: function () {
            this.$el.mCustomScrollbar({
              axis: "y",
              theme: "minimal-dark",
              setWidth: !1,
              setHeight: !1,
              scrollInertia: 0,
            });
          },
          onProfileChange: function () {
            this.isFrameViewEnabled()
              ? (this.$("a.extansion").removeClass("disabled"),
                this.setDisabled("extansion", !1))
              : (this.$("a.extansion").addClass("disabled"),
                this.setDisabled("extansion", !0)),
              this.handleSideModelMenu();
          },
          isFrameViewEnabled: function () {
            var e = this.data.cdd.getProfile(),
              t = !1,
              i = this.data;
            return (
              this.list.forEach(function (o) {
                null != o.attributes.disabledExpression &&
                  (t = !i.evalExpression2(o.attributes.disabledExpression, {
                    profile: e,
                  }));
              }),
              t
            );
          },
          onDoorData: function () {
            this.onProfileChange();
            var e = [
                "ornament",
                "dodatna",
                "color",
                "konstruktion",
                "insideModel",
                "bauform",
              ],
              t = this.data.dd("configurable"),
              i = !0;
            null != t &&
              e.forEach(function (e) {
                t
                  ? (this.$("a." + e).removeClass("disabled"),
                    this.setDisabled(e, !1))
                  : ((i = !1),
                    this.$("a." + e).addClass("disabled"),
                    this.setDisabled(e, !0));
              }, this),
              i &&
                (this.data.isGlassMenuEnabled()
                  ? (this.$("a.ornament").removeClass("disabled"),
                    this.setDisabled("ornament", !1))
                  : (this.$("a.ornament").addClass("disabled"),
                    this.setDisabled("ornament", !0))),
              this.handleSideModelMenu();
          },
          onBauformChange: function (e) {
            this.data.isGlassMenuEnabled()
              ? (this.$("a.ornament").removeClass("disabled"),
                this.setDisabled("ornament", !1))
              : (this.$("a.ornament").addClass("disabled"),
                this.setDisabled("ornament", !0)),
              this.handleSideModelMenu();
          },
          handleSideModelMenu: function () {
            this.list.findWhere({ state: "side-model" }) &&
              (!this.data.dd("hasDoorSideModel") ||
              (this.data.dd("hasDoorSideModel") &&
                !this.data.isLeftFrame() &&
                !this.data.isRightFrame())
                ? (this.$("a.side-model").addClass("disabled"),
                  this.setDisabled("side-model", !0))
                : (this.$("a.side-model").removeClass("disabled"),
                  this.setDisabled("side-model", !1)));
          },
          setDisabled: function (e, t) {
            var i = this.list.findWhere({ state: e });
            i && i.set("disabled", t);
          },
          onMenuItemClick: function (e) {
            if (this.data.ddr && !this.data.priceLoading) {
              var t = $(e.currentTarget),
                o = t.attr("cid"),
                s = this.list.get(o);
              s.get("disabled") ||
                (i.trigger(i.MENU_PRECHANGE_EVENT, s.get("state")),
                this.data.menuChange({
                  module: s.get("module"),
                  state: s.get("state"),
                  label: s.get("label"),
                  privzeto: !1,
                }));
            }
          },
          onModuleLoad: function (e) {
            e ? this.undelegateEvents() : this.delegateEvents();
          },
          getMenuList: function () {
            i.trigger(i.MENU_LIST, this.list);
          },
          render: function () {
            return (
              this.list.forEach(function (e) {
                var t = new MenuItemRenderer({ model: e });
                this.$el.append(t.render().el);
              }, this),
              this
            );
          },
        })
      );
    }
  ),
  define(
    "app/views/main/PanelView",
    [
      "require",
      "backbone",
      "app/events/KEvent",
      "underscore",
      "app/models/Model",
      "lib/text!tpl/panel.html",
      "app/util/Util",
      "app/util/Labels",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("app/events/KEvent"),
        o = e("underscore"),
        s = e("app/models/Model"),
        n = e("lib/text!tpl/panel.html"),
        d = (e("app/util/Util"), e("app/util/Labels")),
        r = null,
        l = t.Model.extend({
          defaults: { state: null, module: null },
          initialize: function () {
            this.listenTo(i, i.MENU_CHANGE_EVENT, this.onMenuChange);
          },
          onMenuChange: function (e) {
            this.set({
              module: e.module,
              state: e.state,
              label: e.label,
              privzeto: e.privzeto,
            });
          },
        });
      return t.View.extend({
        className: "panelView hidden",
        id: "panel",
        events: {
          "click #home-btn": "onHomeClick",
          "click #close-btn": "onPanelClose",
        },
        states: {},
        initialize: function () {
          o.bindAll(
            this,
            "onStateChange",
            "onModuleLoad",
            "update",
            "render",
            "onHomeClick",
            "setDefaultState",
            "onSwipeToMenu",
            "onMenuLoad",
            "renderDefault"
          ),
            (this.data = s.getInstance()),
            (r = o.template(n)),
            (this.model = new l()),
            this.listenTo(this.model, "change:state", this.onStateChange),
            this.listenTo(
              i,
              i.SWIPE_TO_MENU,
              o.debounce(this.onSwipeToMenu, 50)
            ),
            e(["app/views/main/Menu"], this.onMenuLoad);
        },
        onMenuLoad: function (e) {
          var t = new e();
          this.$("#views").append(t.el),
            (this.states.menu = t),
            this.renderDefault();
        },
        onStateChange: function (t) {
          var i = t.get("state"),
            o = this.states[i];
          o || "menu" == i
            ? this.toggleModule(o)
            : (this.data.moduleLoad(!0),
              e([t.get("module")], this.onModuleLoad));
        },
        onModuleLoad: function (e) {
          var t = null;
          (t =
            "extansion" === this.model.get("state")
              ? new e({ model: this.model })
              : new e()),
            this.$("#views").append(t.el),
            (this.states[this.model.get("state")] = t),
            this.toggleModule(t),
            this.data.moduleLoad(!1);
        },
        toggleModule: function (e) {
          this.$("#home-btn > .title").html(this.model.get("label")),
            this.$("#views").removeClass().addClass(e.id),
            this.$("i.sandwich").toggleClass(
              "toothpicks",
              "menu" !== this.data.panelState
            ),
            this.model.get("privzeto") &&
              (i.trigger(i.INIT_DONE), this.$el.removeClass("hidden")),
            this.$el
              .toggleClass("wide", !!e.isWide)
              .toggleClass("full", !!e.isFull),
            i.trigger(i.PANEL_VIEW_LOADED, { wide: e.isWide });
        },
        update: function () {},
        onSwipeToMenu: function () {
          this.data.menuChange({
            module: "app/views/main/Menu",
            state: "menu",
            label: d.get("sandwich", "MENU"),
            privzeto: !1,
          });
        },
        onHomeClick: function () {
          "menu" === this.model.get("state") ||
            this.data.menuChange({
              module: "app/views/main/Menu",
              state: "menu",
              label: d.get("sandwich", "MENU"),
              privzeto: !1,
            });
        },
        onPanelClose: function () {
          i.trigger(i.PANEL_CLOSE);
        },
        setDefaultState: function (e) {
          e ||
            this.data.menuChange({
              module: "app/views/main/Menu",
              state: "menu",
              label: d.get("sandwich", "MENU"),
              privzeto: !0,
            });
        },
        renderDefault: function () {
          var e = !1;
          if (this.data.isMobile() && 0 == this.data.isTablet())
            return this.setDefaultState(!1), this;
          o.forEach(
            this.data.conf("menu"),
            function (t) {
              if (t.privzeto)
                return (
                  (e = !0),
                  this.data.menuChange({
                    module: t.module,
                    state: t.state,
                    label: t.label,
                    privzeto: !0,
                  }),
                  !1
                );
            },
            this
          ),
            this.setDefaultState(e);
        },
        render: function () {
          return this.$el.append(r()), this;
        },
      });
    }
  ),
  define("lib/text!tpl/applicationBar.html", [], function () {
    return '<div class="partner-logo <%=rightPositionLogo%>">\n\n\t<% if(homePage) { %>\n\t\t<a target="_blank" href="<%=homePage%>">\n\t\t\t<img class="logo-image" src="<%=logoImage%>" />\n\t\t</a>\n\t<% } else { %>\n\t\t<img class="logo-image" src="<%=logoImage%>" />\n\t<% } %>\n\n\t<span class="logo-text"><%=logoText%></span>\n</div>\n\n<% if(headerLabel){ %>\n<div class="header-label"><%=headerLabel%></div>\n<% } %>\n\n<div class="right-container <%=rightPositionLogo%>">\n\t<% if (userSettings) {%>\n\n\n\t<div class="user-settings <% if (trial) print(\'trial-user\')%>">\n\n\t\t<div class="middle-wrapper clear">\n\t\t\t<svg class="user-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n\t\t\t\t<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>\n\t\t\t\t<path d="M0 0h24v24H0z" fill="none"/>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div class="middle-wrapper clear">\n\t\t\t<% if (trial) { %>\n\t\t\t\t<div class="trial"><%=label.get("trial", "TRIAL")%></div>\n\t\t\t\t<div class="due-date"><%=dueDate%></div>\n\t\t\t<% } else { %>\n\t\t\t\t<div class="user"><%=user%></div>\n\t\t\t<% } %>\n\t\t</div>\n\t</div>\n\t<% } %>\n\t<span class="model-name"></span>\n</div>\n';
  }),
  define(
    "app/components/ModelName",
    [
      "require",
      "backbone",
      "underscore",
      "app/events/KEvent",
      "app/models/Model",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/events/KEvent"),
        s = e("app/models/Model");
      return t.View.extend({
        initialize: function () {
          i.bindAll(this, "render"),
            (this.data = s.getInstance()),
            this.listenTo(o, o.DOOR_DATA_RESPONSE, this.render);
        },
        render: function (e) {
          var t = e.get("name") ? e.get("name") : e.get("model");
          return (
            this.data.conf("showSeriesInHead")
              ? this.$el.html(e.get("serie") + " " + t)
              : this.$el.html(t),
            this
          );
        },
      });
    }
  ),
  define(
    "app/components/SecondScreenIcon",
    [
      "require",
      "backbone",
      "underscore",
      "app/models/Model",
      "app/events/KEvent",
      "app/util/Util",
      "app/util/Labels",
      "app/profile",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/models/Model"),
        s = e("app/events/KEvent"),
        n = (e("app/util/Util"), e("app/util/Labels")),
        d = e("app/profile");
      return t.View.extend({
        events: { click: "onClick" },
        initialize: function () {
          i.bindAll(
            this,
            "masterClose",
            "popupClose",
            "onPopupMessage",
            "getCss"
          ),
            (this.data = o.getInstance()),
            window.addEventListener("beforeunload", this.masterClose, !1),
            window.addEventListener("message", this.onPopupMessage, !1),
            this.listenTo(s, s.DOOR_IMAGE_DONE, this.onDoorImageDone),
            this.listenTo(s, s.PRICE, this.onPrice);
        },
        onClick: function () {
          if (!this.popup) {
            var e = (d.isDevMode() ? "dev/" : "") + "displayIndex.html";
            (this.popup = window.open(
              e,
              "_blank",
              "height=500,width=720,scrollbars=no,status=no,toolbar=no,location=no"
            )),
              this.popup.addEventListener("beforeunload", this.popupClose, !1),
              this.$el.addClass("disabled");
          }
        },
        getCss: function () {
          return d.mac2
            ? this.data.conf("styleCss") + "?v=" + this.data.getVersion()
            : d.isDevMode()
            ? this.data.conf("styleCss") + "?v=" + this.data.getVersion()
            : 0 == this.data.isIE()
            ? this.data.conf("styleCss") + "?v=" + this.data.getVersion()
            : "html-client/" +
              this.data.conf("styleCss") +
              "?v=" +
              this.data.getVersion();
        },
        masterClose: function () {
          this.popup.close();
        },
        popupClose: function () {
          this.popup.removeEventListener("beforeunload", this.popupClose),
            (this.popup = null),
            this.$el.removeClass("disabled"),
            s.trigger(s.CLOSE_POPUP);
        },
        onPopupMessage: function (e) {
          e &&
            e.data &&
            "all" === e.data.type &&
            this.popup.postMessage(
              {
                url: this.data.getImageUrl(),
                css: this.getCss(),
                price: this.data.priceData.doorPriceDiscountOptions,
                priceLabel:
                  n.get("print", "PRICE_LABEL") + this.data.getCurrency(!0),
              },
              "*"
            );
        },
        onDoorImageDone: function (e) {
          if (this.popup) {
            var t = e.getImageByType("doorImage");
            t && this.popup.postMessage({ url: $(t.img).attr("src") });
          }
        },
        onPrice: function () {
          this.popup &&
            this.data.priceData.doorPriceDiscountOptions &&
            this.popup.postMessage({
              price: this.data.priceData.doorPriceDiscountOptions,
            });
        },
        render: function () {
          return this.$el.css({ display: "inline-block" }), this;
        },
      });
    }
  ),
  define(
    "app/components/ApplicationBar",
    [
      "require",
      "backbone",
      "underscore",
      "app/models/Model",
      "app/events/KEvent",
      "lib/text!tpl/applicationBar.html",
      "app/util/Util",
      "app/components/ModelName",
      "app/util/Labels",
      "app/components/SecondScreenIcon",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/models/Model"),
        s = e("app/events/KEvent"),
        n = e("lib/text!tpl/applicationBar.html"),
        d = (e("app/util/Util"), e("app/components/ModelName")),
        r = e("app/util/Labels"),
        l = (e("app/components/SecondScreenIcon"), null);
      return t.View.extend({
        id: "application-bar",
        events: { "click .user-settings": "onUserSettingsClick" },
        initialize: function () {
          (this.data = o.getInstance()),
            (l = i.template(n)),
            this.data.conf("showLogoInHead")
              ? this.$el.addClass("image")
              : this.$el.addClass("text"),
            this.listenTo(s, s.USER_SETTINGS_UPDATE, this.onUserSettingsUpdate);
        },
        onUserSettingsUpdate: function (e) {
          e.url && this.$(".logo-image").attr("src", e.url);
        },
        onUserSettingsClick: function (e) {
          s.trigger(s.OPEN_ACTION_MENU, {
            module: "app/views/main/action/user/UserSettings",
            targetEl: e.currentTarget,
          });
        },
        render: function () {
          var e = i.template(r.get("trial", "DAYS_LEFT"));
          return (
            this.$el.append(
              l({
                rightPositionLogo: this.data.conf("rightPositionLogo")
                  ? "right-position"
                  : "",
                logoImage: this.data.conf("logoImageUrl"),
                logoText: this.data.getCompanyName(),
                headerLabel: r.exist("header", "LABEL")
                  ? r.get("header", "LABEL")
                  : "",
                homePage: this.data.conf("homePage"),
                userSettings: this.data.isLoginFirst() && !!this.data.userData,
                dueDate: e({
                  days: this.data.userData
                    ? this.data.userData.daysUntilDueDate
                    : null,
                }),
                trial: !!this.data.userData && this.data.userData.trial,
                user: this.data.getCurrentUser(),
                label: r,
              })
            ),
            new d({ el: this.$(".model-name") }),
            this
          );
        },
      });
    }
  ),
  define(
    "app/components/Keyboard",
    [
      "require",
      "backbone",
      "underscore",
      "app/events/KEvent",
      "app/models/Model",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/events/KEvent"),
        s = e("app/models/Model");
      return t.View.extend({
        keyboardEvents: {},
        initialize: function () {
          i.bindAll(
            this,
            "onAttachKeyboardEvent",
            "onDestroyKeyboardEvent",
            "onKeyDown"
          ),
            this.listenTo(o, o.KEYBOARD_ON, this.onAttachKeyboardEvent),
            this.listenTo(o, o.KEYBOARD_OFF, this.onDestroyKeyboardEvent),
            (this.data = s.getInstance()),
            $(document).on("keydown", this.onKeyDown);
        },
        onAttachKeyboardEvent: function (e) {
          this.keyboardEvents[e.uniqueKey] = {
            keyCode: e.keyCode,
            triggerEvent: e.triggerEvent,
            destroyable:
              !(!i.has(e, "destroyable") || !e.destroyable) && e.destroyable,
            ignoreInputFilter:
              !!i.has(e, "ignoreInputFilter") && e.ignoreInputFilter,
          };
        },
        onDestroyKeyboardEvent: function (e) {
          delete this.keyboardEvents[e];
        },
        onKeyDown: function (e) {
          var t = !1;
          i.each(
            this.keyboardEvents,
            function (i, s) {
              if (
                ("INPUT" == e.target.tagName ||
                  "TEXTAREA" == e.target.tagName) &&
                i &&
                !i.ignoreInputFilter
              )
                return !1;
              i &&
                e.keyCode == i.keyCode &&
                ((t = !0),
                i && i.destroyable && delete this.keyboardEvents[s],
                o.trigger(o[i.triggerEvent]));
            },
            this
          ),
            t && (e.preventDefault(), e.stopPropagation());
        },
      });
    }
  ),
  define(
    "app/views/main/popup/PopupContainerView",
    [
      "require",
      "backbone",
      "underscore",
      "jquery",
      "app/profile",
      "app/events/KEvent",
      "app/util/Util",
      "app/models/Model",
    ],
    function (e) {
      var t = e("backbone"),
        i =
          (e("underscore"),
          e("jquery"),
          e("app/profile"),
          e("app/events/KEvent")),
        o = (e("app/util/Util"), e("app/models/Model"));
      return t.View.extend({
        id: "popup-container",
        className: "hidden background",
        initialize: function () {
          this.listenTo(i, i.OPEN_POPUP, this.onOpenPopup),
            this.listenTo(i, i.CLOSE_POPUP, this.onClosePopup),
            (this.data = o.getInstance()),
            (this.popups = {});
        },
        onOpenPopup: function (t) {
          if (this.popups[t.module])
            this.popups[t.module].open(t),
              (this.popups[t.module].isOpen = !0),
              this.$el.removeClass("hidden");
          else {
            var i = this;
            e([t.module], function (e) {
              var o = new e(t);
              i.$el.append(o.render().el),
                o.open(t),
                (o.isOpen = !0),
                (i.popups[o.module] = o),
                i.$el.removeClass("hidden"),
                (i = null);
            });
          }
          void 0 === t.background
            ? this.$el.addClass("background")
            : this.$el.removeClass("background"),
            t.containerClass && this.$el.addClass(t.containerClass);
        },
        onClosePopup: function (e) {
          var t,
            i = !1,
            o = e && e.module;
          for (var s in this.popups)
            if (this.popups.hasOwnProperty(s)) {
              if (o && s !== o) {
                this.popups[s].isOpen && (i = !0);
                continue;
              }
              this.popups[s].destroyable
                ? ((this.popups[s].isOpen = !1),
                  this.popups[s].destroy(),
                  (t = s))
                : (this.popups[s].$el.addClass("hidden"),
                  (this.popups[s].isOpen = !1)),
                this.popups[s].isOpen && (i = !0);
            }
          t && delete this.popups[t], this.$el.toggleClass("hidden", !i);
        },
        render: function () {
          return this;
        },
      });
    }
  ),
  define(
    "app/views/main/action/ActionContainerView",
    [
      "require",
      "backbone",
      "underscore",
      "jquery",
      "app/profile",
      "app/events/KEvent",
      "app/util/Util",
      "app/models/Model",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("jquery"),
        s = (e("app/profile"), e("app/events/KEvent")),
        n = (e("app/util/Util"), e("app/models/Model"));
      return t.View.extend({
        id: "action-container",
        className: "hidden",
        currentMenu: null,
        targetEl: null,
        events: { "click .event-plane": "onClick" },
        initialize: function () {
          (this.data = n.getInstance()),
            this.listenTo(s, s.OPEN_ACTION_MENU, this.onOpen),
            this.listenTo(s, s.CLOSE_ACTION_MENU, this.onClose),
            this.listenTo(s, s.RESIZE_ACTION_MENU, this.setPosition),
            this.listenTo(s, s.WINDOW_RESIZE_EVENT, this.onWindowResize),
            i.bindAll(this, "visible", "destroyCurrentMenu", "setPosition");
        },
        onOpen: function (t) {
          this.currentMenu ||
            (this.visible(!0),
            (this.targetEl = o(t.targetEl)),
            e(
              [t.module],
              i.bind(function (e) {
                (this.currentMenu = new e(t)),
                  this.$el.append(this.currentMenu.render().el),
                  this.setPosition();
              }, this)
            ));
        },
        onClose: function () {
          this.destroyCurrentMenu(), this.visible(!1);
        },
        onClick: function (e) {
          e.stopPropagation(), this.destroyCurrentMenu(), this.visible(!1);
        },
        destroyCurrentMenu: function () {
          this.currentMenu &&
            (this.currentMenu.destroy(), (this.currentMenu = null));
        },
        onWindowResize: function () {
          this.setPosition();
        },
        setPosition: function () {
          if (this.currentMenu) {
            var e = { left: 0, top: 0, height: "auto", bottom: "auto" },
              t = this.currentMenu.$el.outerWidth(),
              i = this.currentMenu.$el.outerHeight(),
              o = this.currentMenu.$el[0].scrollHeight,
              s = parseInt(this.currentMenu.$el.css("max-height")),
              n = o > s;
            (e.left = this.targetEl.offset().left),
              (e.top =
                this.targetEl.offset().top + this.targetEl.outerHeight() + 5),
              e.left + t + 10 > this.data.windowWidth &&
                (e.left = this.data.windowWidth - t - 10),
              o + 20 > this.data.windowHeight && !n
                ? ((e.bottom = 10), (e.top = 10))
                : n && s + 20 > this.data.windowHeight
                ? ((e.bottom = 10), (e.top = 10))
                : e.top + i + 10 > this.data.windowHeight &&
                  (e.top = this.data.windowHeight - i - 10),
              this.currentMenu.$el.css(e);
          }
        },
        visible: function (e) {
          this.$el.toggleClass("hidden", !e);
        },
        render: function () {
          return this.$el.append("<div class='event-plane'></div>"), this;
        },
      });
    }
  ),
  define(
    "app/components/CookieSupport",
    ["require", "backbone", "underscore", "app/util/Labels", "jquery"],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/util/Labels"),
        s = e("jquery");
      return t.View.extend({
        tpl: i.template(
          "<div class='k-card kPopup cookie-support'>                <div class='cookie-support-content'>                    <div class='cookie-support-title'><%=data.title%></div>                    <%=data.content%>                </div>                <div class='footer'>                    <div class='k-button'>OK</div>                </div>            </div>",
          { variable: "data" }
        ),
        events: { "click .cookie-support .k-button": "onButtonClick" },
        onButtonClick: function () {
          location.reload();
        },
        render: function () {
          return (
            s("html").removeClass("login").addClass("cookie-support"),
            this.$el.append(
              this.tpl({
                title: o.get("cookie", "TITLE"),
                content: o.get("cookie", "CONTENT"),
              })
            ),
            this
          );
        },
      });
    }
  ),
  define("lib/text!tpl/loginForm.html", [], function () {
    return '<% if (titleBeforeLogo) %>\n    <div class="login-title"><%=titleBeforeLogo%></div>\n<%  %>\n\n<img src="<%=logo%>">\n\n<% if(languages && languages.length > 1) { %>\n<div class="lang-wrap">\n    <span><%=label.get(\'login\', \'LANG\') != \'LANG\' ? label.get(\'login\', \'LANG\'): \'Change language:\'%></span>\n    <select>\n        <% _.each(languages, function(item){\n        if(item.code == lang){ %>\n        <option value="<%=item.code%>" selected><%=item.description%></option>\n        <% } else { %>\n        <option value="<%=item.code%>"><%=item.description%></option>\n        <% } %>\n        <%}, this) %>\n    </select>\n</div>\n<%}%>\n\n\n\n<form action="javascript:void(0);" >\n    <div class="username">\n        <input type="text" name="user" placeholder="<%=label.get(\'login\', \'USERNAME\')%>">\n    </div>\n\n    <div class="password">\n        <input type="password" name="pass" placeholder="<%=label.get(\'login\', \'PASSWORD\')%>">\n    </div>\n    <div class="ui-button">\n        <div class="k-button"><%=label.get(\'login\', \'LOGIN\')%></div>\n    </div>\n</form>\n\n<% if(registerUser) { %>\n<div class="register-user-link">\n    <a href="javascript:void(0)"><%=label.get(\'login\', \'REGISTER\')%></a>\n</div>\n<% } %>\n\n<% if(resetPassword) { %>\n<div class="reset-password-link">\n    <a href="javascript:void(0)"><%=label.get(\'login\', \'RESET_PASSWORD\')%></a>\n</div>\n<% } %>\n\n<% if(contactForm) { %>\n<div class="contact-form-link">\n    <a href="javascript:void(0)"><%=label.get(\'login\', \'CONTACT_FORM\')%></a>\n</div>\n<% } %>\n\n\n<div class="error hidden"></div>\n\n<% if(loginMessage) { %>\n<div class="login-message">\n    <%= loginMessage %>\n</div>\n<% } %>\n\n<% if(popUpLink) { %>\n<div class="pop-up link-wrap">\n    <a><%= popUpLink %></a>\n</div>\n<% } %>\n\n<div class="login-gdpr link-wrap">\n    <a href="javascript:void(0)"><%=label.get("gdpr", "LINK")%></a>\n</div>\n';
  }),
  define(
    "app/components/Login",
    [
      "require",
      "backbone",
      "underscore",
      "app/events/KEvent",
      "app/models/Model",
      "app/util/Util",
      "lib/text!tpl/loginForm.html",
      "app/util/Labels",
      "app/profile",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/events/KEvent"),
        s = e("app/models/Model"),
        n = e("app/util/Util"),
        d = e("lib/text!tpl/loginForm.html"),
        r = e("app/util/Labels"),
        l = e("app/profile"),
        a = null;
      return t.View.extend({
        id: "login-form",
        events: {
          "click .k-button": "onButtonClick",
          "submit form": "onSubmit",
          "click .register-user-link a": "onRegisterUser",
          "click .reset-password-link a": "onResetPassword",
          "click .contact-form-link a": "onContactForm",
          "click .login-gdpr a": "onGDPR",
          "change .lang-wrap select": "onLanguageChange",
          "keypress form input": "onInputKeyPress",
        },
        loginMessage: null,
        popUpLink: null,
        resetPassword: !0,
        contactForm: !0,
        titleBeforeLogo: null,
        initialize: function () {
          i.bindAll(
            this,
            "render",
            "onSubmit",
            "getFormFields",
            "onRegisterUser"
          ),
            (a = i.template(d)),
            (this.data = s.getInstance()),
            this.listenTo(o, o.LOGIN, this.onLogin);
        },
        onLanguageChange: function (e) {
          var t = $(e.currentTarget),
            i = t.val();
          if (i) {
            var o = n.getServerNameWithPort(window.location.href),
              s = n.getUrlVars();
            if (l.isDevMode() || l.demo) {
              s.lang = i;
              var d = "//" + o,
                r = 0;
              for (var a in s)
                (d +=
                  (0 == r ? "?" : "&") + a + "=" + encodeURIComponent(s[a])),
                  r++;
              window.location.href = d;
            } else window.location.href = "//" + o + "/" + i;
          }
        },
        onSubmit: function (e) {
          if (!this.data.cookieSupport()) return location.reload(), !1;
          var t = this.getFormFields();
          return this.data.loginUser(t.user, t.pass), !0;
        },
        onInputKeyPress: function (e) {
          13 === e.keyCode && this.onButtonClick();
        },
        onButtonClick: function () {
          var e = this.getFormFields();
          e.user && e.pass && this.$("form").submit();
        },
        getFormFields: function () {
          return this.$("form")
            .serializeArray()
            .reduce(function (e, t) {
              return (e[t.name] = t.value), e;
            }, {});
        },
        onLogin: function (e) {
          return e.error && e.responseText.match(/login_not_allowed/i)
            ? void this.$(".error")
                .removeClass("hidden")
                .html(r.get("login", "NOT_ALLOWED"))
            : e.error
            ? void this.$(".error")
                .removeClass("hidden")
                .html(r.get("login", "INCORRECT"))
            : (this.remove(),
              this.$el.remove(),
              delete this.el,
              void delete this.$el);
        },
        onRegisterUser: function () {
          o.trigger(o.REGISTER_USER);
        },
        hide: function () {
          this.$el.hide();
        },
        show: function () {
          this.$el.show();
        },
        onResetPassword: function () {
          o.trigger(o.OPEN_POPUP, {
            module: "app/views/main/popup/ResetPassword",
            title: r.get("login", "RESET_PASSWORD"),
            destroyable: !0,
          }),
            o.trigger(o.KEYBOARD_ON, {
              uniqueKey: "ESC_POPUP",
              keyCode: 27,
              triggerEvent: "CLOSE_POPUP",
              destroyable: !0,
            }),
            this.$(".error").addClass("hidden");
        },
        onContactForm: function () {
          o.trigger(o.OPEN_POPUP, {
            module: "app/views/main/popup/ContactForm",
            title: r.get("login", "CONTACT_FORM"),
            destroyable: !0,
          }),
            o.trigger(o.KEYBOARD_ON, {
              uniqueKey: "ESC_POPUP",
              keyCode: 27,
              triggerEvent: "CLOSE_POPUP",
              destroyable: !0,
            }),
            this.$(".error").addClass("hidden");
        },
        onGDPR: function () {
          var e = this.data.conf("contactData"),
            t = {
              module: "app/views/main/popup/MessageDialog",
              title: r.get("gdpr", "LINK"),
              template: "DATA_PROTECTION_POPUP",
              templateData: {
                company: e.companyName,
                address: e.address,
                postOffice: e.postOffice,
                url: e.appUrl,
              },
              class: "large",
            };
          n.openPopup(t);
        },
        render: function () {
          return (
            this.$el.append(
              a({
                logo: this.data.conf("logoImageUrl"),
                registerUser: !1,
                label: r,
                languages: this.data.conf("languages"),
                lang: this.data.conf("lang"),
                loginMessage: this.loginMessage,
                popUpLink: this.popUpLink,
                resetPassword: this.resetPassword,
                contactForm: this.contactForm,
                titleBeforeLogo: this.titleBeforeLogo,
              })
            ),
            this.data.isMobile() ||
              this.data.isTablet() ||
              this.data.isTouch() ||
              this.$(".username input[name='user']").focus(),
            this
          );
        },
      });
    }
  ),
  define("lib/text!tpl/registerUser.html", [], function () {
    return '\n<div class="header">\n\n    \x3c!--<span class="title"><%=labels["inquiry_FORM_TITLE"]%></span>--\x3e\n    <span class="title"><%=labels[\'register_FORM_TITLE\']%></span>\n\n\n    <i class="cross">\n        <div class="line l-1st"></div>\n        <div class="line l-2nd"></div>\n    </i>\n</div>\n\n<div class="input-wrap scrolling">\n<form>\n    <% for (var i = 0, l = fields.length; i < l; i++) { var field = fields[i], zipTown = field.code.match(/zip|town/i); %>\n        <% if(zipTown){ %>\n        <div class="<%=field.code%>">\n        <% } %>\n\n        <input type="<%=field.type%>" maxlength="<%=field.maxLength%>" name="<%=field.code%>" placeholder="<%=field.label + (field.required ? \' *\': \'\')%>">\n\n        <% if(zipTown){ %>\n        </div>\n        <% } %>\n    <% } %>\n</form>\n    <div class="req-label"><%=labels[\'inquiry_REQUIRED_FIELD\']%></div>\n\n</div>\n\n<div class="button-wrap">\n    <div class="button send"><%=labels[\'register_CONFIRM\']%></div>\n    <div class="button cancel"><%=labels[\'inquiry_CANCEL\']%></div>\n</div>\n\n<div class="sub-popup sending-message">\n    <div class="section"><%=labels[\'inquiryReceived_POSILJANJE\']%></div>\n    <div class="section spinner"></div>\n</div>\n\n<div class="sub-popup send-complete-message">\n    <div class="section"><%=labels[\'register_REGISTER_DONE\']%></div>\n    <div class="button close"><%=labels[\'inquiryForm_CLOSE\']%></div>\n</div>\n\n<div class="sub-popup error-message">\n    \x3c!--<div class="section">User exists!</div>--\x3e\n    <div class="section"><%=labels[\'register_USER_EXIST\']%></div>\n    <div class="button close"><%=labels[\'inquiryForm_CLOSE\']%></div>\n</div>';
  }),
  define(
    "app/components/RegisterUser",
    [
      "require",
      "backbone",
      "underscore",
      "app/events/KEvent",
      "app/models/Model",
      "lib/text!tpl/registerUser.html",
      "app/util/Labels",
      "app/util/Util",
      "cryptojs.pbkdf2",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("app/events/KEvent"),
        s = e("app/models/Model"),
        n = e("lib/text!tpl/registerUser.html"),
        d = e("app/util/Labels"),
        r = e("app/util/Util");
      e("cryptojs.pbkdf2");
      return (
        (tpl = null),
        t.View.extend({
          id: "register-user",
          events: {
            "click .send": "onSendClick",
            "click .cancel": "onCancelClick",
            "click .cross": "onCancelClick",
            "click .send-complete-message .close": "onClose",
            "click .error-message .close": "onErrorClose",
          },
          setFields: function () {
            this.fields = [
              {
                code: "email",
                type: "text",
                maxLength: 45,
                label: d.get("login", "EMAIL_USERNAME"),
                required: !0,
              },
              {
                code: "password",
                type: "password",
                maxLength: 45,
                label: d.get("login", "PASSWORD"),
                required: !0,
              },
              {
                code: "password2",
                type: "password",
                maxLength: 45,
                label: d.get("register", "REPEAT_PASSWORD"),
                required: !0,
              },
              {
                code: "name",
                type: "text",
                maxLength: 80,
                label: d.get("register", "COMPANY_NAME"),
                required: !0,
              },
              {
                code: "street",
                type: "text",
                maxLength: 60,
                label: d.get("inquiryForm", "STREET"),
                required: !0,
              },
              {
                code: "zip",
                type: "text",
                maxLength: 10,
                label: d.get("inquiryForm", "ZIP"),
                required: !0,
              },
              {
                code: "town",
                type: "text",
                maxLength: 60,
                label: d.get("inquiryForm", "TOWN"),
                required: !0,
              },
              {
                code: "phone",
                type: "text",
                maxLength: 30,
                label: d.get("inquiryForm", "PHONE"),
                required: !1,
              },
            ];
          },
          initialize: function (e) {
            this.setFields(),
              this.listenTo(o, o.REGISTER_USER_DONE, this.onUserRegisterDone),
              this.listenTo(o, o.REGISTER_USER_ERROR, this.onUserRegisterError),
              i.bindAll(
                this,
                "render",
                "onSendClick",
                "onCancelClick",
                "onClose",
                "setFields"
              ),
              (this.data = s.getInstance()),
              (tpl = i.template(n));
          },
          onSendClick: function () {
            var e = !1,
              t = {};
            i.forEach(
              this.fields,
              function (i) {
                var o = "select" === i.type ? "select" : "input",
                  s = this.$(o + "[name=" + r.quote(i.code) + "]"),
                  n = s.val(),
                  d = s.attr("placeholder");
                if (i.required && (!n || !n.length > 0 || n === d))
                  s.addClass("invalid"), (e = !0);
                else if (
                  "email" == i.code &&
                  n.length > 0 &&
                  n !== d &&
                  !r.validateEmail(n)
                )
                  s.addClass("invalid"), (e = !0);
                else if (
                  "password2" == i.code &&
                  n !== this.$("input[name='password']").val()
                )
                  (e = !0), s.addClass("invalid");
                else {
                  if ("password" == i.code) {
                    var l = CryptoJS.PBKDF2(n, this.data.h, {
                      keySize: 6,
                      iterations: 512,
                    });
                    t[i.code] = l.toString();
                  } else "password2" == i.code || (t[i.code] = n);
                  s.removeClass("invalid");
                }
              },
              this
            ),
              e ||
                (this.$el.attr("class", "sending"),
                this.$("input").prop("disabled", !0),
                this.data.registerUser(t));
          },
          onUserRegisterDone: function (e) {
            this.$el.attr("class", "complete");
          },
          onUserRegisterError: function (e) {
            e.match(/exist/i)
              ? this.$el.attr("class", "error")
              : (this.$(".error-message .section").html(e),
                this.$el.attr("class", "error"));
          },
          onCancelClick: function () {
            this.remove(), this.$el.remove(), delete this.el, delete this.$el;
          },
          onClose: function () {
            this.onCancelClick();
          },
          onErrorClose: function () {
            this.$el.removeClass("error");
          },
          render: function () {
            return (
              this.$el.append(tpl({ labels: d.all(), fields: this.fields })),
              this
            );
          },
        })
      );
    }
  ),
  define(
    "app/Konfigurator",
    [
      "require",
      "backbone",
      "underscore",
      "jquery",
      "app/util/Util",
      "app/events/KEvent",
      "app/views/main/MainView",
      "app/views/main/PanelView",
      "app/components/ApplicationBar",
      "app/components/Keyboard",
      "app/views/main/popup/PopupContainerView",
      "app/views/main/action/ActionContainerView",
      "app/models/Model",
      "hammer",
      "fastclick",
      "app/profile",
      "placeholder",
      "app/util/Labels",
    ],
    function (e) {
      var t = e("backbone"),
        i = e("underscore"),
        o = e("jquery"),
        s = e("app/util/Util"),
        n = e("app/events/KEvent"),
        d = e("app/views/main/MainView"),
        r = e("app/views/main/PanelView"),
        l = e("app/components/ApplicationBar"),
        a = e("app/components/Keyboard"),
        c = e("app/views/main/popup/PopupContainerView"),
        h = e("app/views/main/action/ActionContainerView"),
        u = e("app/models/Model"),
        g = e("hammer"),
        p = e("fastclick"),
        m = e("app/profile"),
        f = (e("placeholder"), e("app/util/Labels")),
        E = null;
      return t.View.extend({
        el: "div#konfigurator",
        conf: null,
        labels: null,
        initialize: function (e) {
          i.bindAll(
            this,
            "render",
            "onSwipeLeft",
            "onSwipeRight",
            "onWindowResize",
            "disableSwipe",
            "enableSwipe",
            "onSliderDragging",
            "_enableSwipe",
            "onOrientationChange",
            "onLogin",
            "onLoginModule",
            "onRegisterUserRequest",
            "onRegisterUserModuleLoad",
            "_disableSwipePermanent",
            "onAutoLoginError"
          ),
            this.setup(),
            this.render(),
            this.listenTo(n, n.CONFIGURATION, this.onConfiguration),
            this.listenTo(n, n.PANEL_CLOSE, this.onPanelClose),
            this.listenTo(n, n.PANEL_OPEN, this.onPanelOpen),
            this.listenTo(n, n.INIT_DONE, this.onInitiDone),
            this.listenTo(n, n.OPEN_POPUP, this.onOpenPupup),
            this.listenTo(n, n.CLOSE_POPUP, this.onClosePopup),
            this.listenTo(n, n.SLIDER_DRAGGING, this.onSliderDragging),
            this.listenTo(n, n.MODULE_LOADING, this.onModuleLoading),
            this.listenTo(n, n.LOGIN, this.onLogin),
            this.listenTo(n, n.AUTOLOGIN_ERROR, this.onAutoLoginError),
            this.listenTo(n, n.REGISTER_USER, this.onRegisterUserRequest),
            this.listenTo(n, n.PANEL_VIEW_LOADED, this.onPanelViewLoaded),
            (E = u.getInstance(e)),
            E.loadConfiguration(),
            (E.windowWidth = o(window).width()),
            (E.windowHeight = o(window).height()),
            (this.swipe = !0),
            (this.resizeInprogress = !1);
        },
        onPanelViewLoaded: function (e) {
          this.$el.toggleClass("wide", !!e.wide);
        },
        onOpenPupup: function () {
          this.disableSwipe(), this.$el.addClass("popup-open");
        },
        onClosePopup: function () {
          this.enableSwipe(), this.$el.removeClass("popup-open");
        },
        onModuleLoading: function (e) {
          e ? this.disableSwipe() : this.enableSwipe();
        },
        onWindowResize: function (e) {
          if (!this.resizeInprogress)
            try {
              this.resizeInprogress = !0;
              var t = E.isMobile() || E.isTablet(),
                i = o(e.currentTarget).width(),
                s = o(e.currentTarget).height();
              (E.windowWidth = i),
                (E.windowHeight = s),
                n.trigger(n.WINDOW_RESIZE_EVENT, {
                  width: i,
                  height: s,
                  orientationChange: !1,
                }),
                t && E.ddr && E.loadDoorImage();
            } finally {
              this.endProgress();
            }
        },
        onOrientationChange: function () {
          if (!this.resizeInprogress)
            try {
              s.log("orientation change"),
                (this.resizeInprogress = !0),
                o("input").is(":focus") && o("input:focus").blur(),
                (E.windowWidth = o(window).width()),
                (E.windowHeight = o(window).height()),
                n.trigger(n.WINDOW_RESIZE_EVENT, {
                  width: E.windowWidth,
                  height: E.windowHeight,
                  orientationChange: !0,
                }),
                E.loadDoorImage();
            } finally {
              this.endProgress();
            }
        },
        endProgress: function () {
          i.delay(
            i.bind(function () {
              this.resizeInprogress = !1;
            }, this),
            100
          );
        },
        onSliderDragging: function (e) {
          e ? this.disableSwipe() : this.enableSwipe();
        },
        setup: function () {
          var e = o("body");
          (this.hammer = new g(e.get(0))), this._enableSwipe();
        },
        onSwipeLeft: function (e) {
          this.swipe && ((E.isPanelOpen = !1), this.$el.removeClass("opened"));
        },
        onSwipeRight: function (e) {
          this.swipe &&
            ("myHouse" === E.panelState ||
              ((E.isPanelOpen = !0), this.$el.addClass("opened")));
        },
        onPanelOpen: function (e) {
          (E.isPanelOpen = !0), this.$el.addClass("opened");
        },
        onPanelClose: function (e) {
          (E.isPanelOpen = !1), this.$el.removeClass("opened");
        },
        disableSwipe: function () {
          this.swipe = !1;
        },
        enableSwipe: function () {
          this.swipe = !0;
        },
        _enableSwipe: function () {
          this.hammer
            .on("swipeleft", this.onSwipeLeft)
            .on("swiperight", this.onSwipeRight);
        },
        _disableSwipePermanent: function () {
          (this.swipe = !1),
            this.hammer
              .off("swipeleft", this.onSwipeLeft)
              .off("swiperight", this.onSwipeRight);
        },
        onConfiguration: function (t) {
          f.all() || s.log("Label response is empty. Import partner !"),
            o(window).on(
              "orientationchange",
              i.debounce(this.onOrientationChange, 200)
            ),
            new a();
          var n = new c();
          if (
            (this.$el.append(n.render().el),
            this.$el.append(new h().render().el),
            E.isFireFoxMobile() || p.attach(document.body),
            E.isFirefox() && !E.isMobile() && this._disableSwipePermanent(),
            E.isIos() && s.globalFix(),
            E.isMobile() &&
              0 == E.isTablet() &&
              ((E.isPanelOpen = !1), this.$el.removeClass("opened")),
            s.preventRightClick(),
            s.log("Configuration: %O", t.attributes),
            m.ec2
              ? s.addCss(t.get("styleCss") + "?v=" + E.getVersion())
              : m.isDevMode()
              ? s.addCss("dev/" + t.get("styleCss") + "?v=" + E.getVersion())
              : 0 == E.isIE()
              ? s.addCss(t.get("styleCss") + "?v=" + E.getVersion())
              : s.addCss(
                  "html-client/" + t.get("styleCss") + "?v=" + E.getVersion()
                ),
            o(window).on("resize", i.debounce(this.onWindowResize, 150)),
            E.isLoginFirst() && E.isLoginEnabled())
          ) {
            if (!E.cookieSupport())
              return (
                e(
                  ["app/components/CookieSupport"],
                  i.bind(function (e) {
                    new e({ el: this.$el }).render();
                  }, this)
                ),
                void this.onInitiDone()
              );
            this.disableSwipe(),
              E.conf("loginComponent")
                ? e([E.conf("loginComponent")], this.onLoginModule)
                : e(["app/components/Login"], this.onLoginModule);
          } else
            E.isAutoLogin()
              ? (this.disableSwipe(), E.getAutoLoginData())
              : this.onLogin(!0);
          s.checkCookie("_conf_cookie") ||
            e(
              [t.get("cookieModule") || "app/components/CookieBanner"],
              i.bind(function (e) {
                this.$el.append(new e().render().el);
              }, this)
            );
        },
        onLoginModule: function (e) {
          this.$el.removeClass("spinner"),
            (this.loginModule = new e()),
            this.$el.append(this.loginModule.el),
            this.loginModule.render();
        },
        onAutoLoginError: function () {
          this.$el.removeClass("spinner"),
            this.$el.append(
              "<div style='text-align: center;padding:20px 0 0 0'>You do not have access rights!</div>"
            );
        },
        onLogin: function (e) {
          if (!e.error) {
            this.$el.closest("html").removeClass("login");
            var t = new l();
            this.$el.append(t.render().el);
            var i = new d();
            this.$el.append(i.render().el);
            var o = new r();
            this.$el.append(o.render().el),
              E.conf("welcomeMessage") &&
                (n.trigger(n.OPEN_POPUP, {
                  module: "app/views/main/popup/KPopup",
                  template: "WELCOME_MESSAGE",
                  class: "welcome-message",
                  title: f.get("welcome", "TITLE"),
                }),
                n.trigger(n.KEYBOARD_ON, {
                  uniqueKey: "ESC_POPUP",
                  keyCode: 27,
                  triggerEvent: "CLOSE_POPUP",
                  destroyable: !0,
                })),
              this.enableSwipe();
          }
        },
        render: function () {},
        onInitiDone: function () {
          this.$el.removeClass("spinner");
        },
        onRegisterUserRequest: function () {
          E.conf("registerUser") &&
            e(["app/components/RegisterUser"], this.onRegisterUserModuleLoad);
        },
        onRegisterUserModuleLoad: function (e) {
          var t = new e();
          this.$el.append(t.render().el);
        },
      });
    }
  );
var version = 890;
require.config({
  baseUrl: "js",
  paths: {
    json2: "lib/json2",
    "cryptojs.core": "lib/core-min",
    "cryptojs.base64": "lib/enc-base64",
    "cryptojs.utf": "lib/enc-utf16-min",
    "cryptojs.hmacsha": "lib/hmac-sha256",
    "cryptojs.pbkdf2": "lib/pbkdf2",
    jquery: "lib/jquery.min",
    class: "lib/Class",
    backbone: "lib/backbone",
    underscore: "lib/underscore",
    imagesloaded: "lib/imagesloaded.pkgd",
    hammer: "lib/hammer",
    fastclick: "lib/hitriKlik",
    autosize: "lib/jquery.autosize",
    placeholder: "lib/jquery.placeholder",
    xdomainrequest: "lib/jquery.xdomainrequest",
    ga: "lib/analytics",
    scrollBar: "lib/jquery.mCustomScrollbar",
    mousewheel: "lib/jquery.mousewheel",
    numeric: "lib/numeric",
    perspective: "lib/perspective",
    ckeditor: "plugins/ckeditor/ckeditor",
    ckeditorJquery: "plugins/ckeditor/adapters/jquery",
    moment: "lib/moment.min",
    picker: "lib/daterangepicker.min",
  },
  urlArgs: "v=" + version,
  shim: {
    class: { exports: "Class" },
    json2: { exports: "json2", deps: ["jquery"] },
    "cryptojs.core": { exports: "CryptoJS" },
    "cryptojs.base64": { deps: ["cryptojs.core"], exports: "CryptoJS" },
    "cryptojs.utf": { deps: ["cryptojs.core"], exports: "CryptoJS" },
    "cryptojs.hmacsha": { deps: ["cryptojs.core"], exports: "CryptoJS" },
    "cryptojs.pbkdf2": { deps: ["cryptojs.core"], exports: "CryptoJS" },
    hammer: { exports: "Hammer" },
    kslider: { deps: ["jquery"], exports: "kslider" },
    autosize: { deps: ["jquery"], exports: "autosize" },
    placeholder: { deps: ["jquery"], exports: "placeholder" },
    xdomainrequest: { deps: ["jquery"], exports: "xdomainrequest" },
    ga: { exports: "ga" },
    scrollBar: { deps: ["mousewheel"] },
    ckeditorJquery: { exports: "ckeditorJquery", deps: ["ckeditor", "jquery"] },
    picker: { exports: "DatePicker", deps: ["moment"] },
  },
  map: { "*": { "app/profile": "app/profile/prod2" } },
}),
  require([
    "jquery",
    "underscore",
    "app/Konfigurator",
    "app/util/Util",
  ], function (e, t, i, o) {
    new i({
      partnerKey: o.getParam("key"),
      lang: o.getParam("lang"),
      version: version,
    });
  }),
  define("main", function () {});
