/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/core.js":
/*!******************************!*\
  !*** ./resources/js/core.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_tools_webpack_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/tools/webpack/core */ "./resources/theme/tools/webpack/core.js");
/* harmony import */ var _theme_tools_webpack_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_tools_webpack_core__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/theme/src/assets/js/global/layout/chat.js":
/*!*************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/layout/chat.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

var KTChat = function () {
  var initChat = function initChat(parentEl) {
    var messageListEl = KTUtil.find(parentEl, '.kt-scroll');

    if (!messageListEl) {
      return;
    } // initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)


    KTUtil.scrollInit(messageListEl, {
      windowScroll: false,
      // allow browser scroll when the scroll reaches the end of the side
      mobileNativeScroll: true,
      // enable native scroll for mobile
      desktopNativeScroll: false,
      // disable native scroll and use custom scroll for desktop
      resetHeightOnDestroy: true,
      // reset css height on scroll feature destroyed
      handleWindowResize: true,
      // recalculate hight on window resize
      rememberPosition: true,
      // remember scroll position in cookie
      height: function height() {
        // calculate height
        var height; // Mobile mode

        if (KTUtil.isInResponsiveRange('tablet-and-mobile')) {
          return KTUtil.hasAttr(messageListEl, 'data-mobile-height') ? parseInt(KTUtil.attr(messageListEl, 'data-mobile-height')) : 300;
        } // Desktop mode


        if (KTUtil.isInResponsiveRange('desktop') && KTUtil.hasAttr(messageListEl, 'data-height')) {
          return parseInt(KTUtil.attr(messageListEl, 'data-height'));
        }

        var chatEl = KTUtil.find(parentEl, '.kt-chat');
        var portletHeadEl = KTUtil.find(parentEl, '.kt-portlet > .kt-portlet__head');
        var portletBodyEl = KTUtil.find(parentEl, '.kt-portlet > .kt-portlet__body');
        var portletFootEl = KTUtil.find(parentEl, '.kt-portlet > .kt-portlet__foot');

        if (KTUtil.isInResponsiveRange('desktop')) {
          height = KTLayout.getContentHeight();
        } else {
          height = KTUtil.getViewPort().height;
        }

        if (chatEl) {
          height = height - parseInt(KTUtil.css(chatEl, 'margin-top')) - parseInt(KTUtil.css(chatEl, 'margin-bottom'));
          height = height - parseInt(KTUtil.css(chatEl, 'padding-top')) - parseInt(KTUtil.css(chatEl, 'padding-bottom'));
        }

        if (portletHeadEl) {
          height = height - parseInt(KTUtil.css(portletHeadEl, 'height'));
          height = height - parseInt(KTUtil.css(portletHeadEl, 'margin-top')) - parseInt(KTUtil.css(portletHeadEl, 'margin-bottom'));
        }

        if (portletBodyEl) {
          height = height - parseInt(KTUtil.css(portletBodyEl, 'margin-top')) - parseInt(KTUtil.css(portletBodyEl, 'margin-bottom'));
          height = height - parseInt(KTUtil.css(portletBodyEl, 'padding-top')) - parseInt(KTUtil.css(portletBodyEl, 'padding-bottom'));
        }

        if (portletFootEl) {
          height = height - parseInt(KTUtil.css(portletFootEl, 'height'));
          height = height - parseInt(KTUtil.css(portletFootEl, 'margin-top')) - parseInt(KTUtil.css(portletFootEl, 'margin-bottom'));
        } // remove additional space


        height = height - 5;
        return height;
      }
    }); // messaging

    var handleMessaging = function handleMessaging() {
      var scrollEl = KTUtil.find(parentEl, '.kt-scroll');
      var messagesEl = KTUtil.find(parentEl, '.kt-chat__messages');
      var textarea = KTUtil.find(parentEl, '.kt-chat__input textarea');

      if (textarea.value.length === 0) {
        return;
      }

      var node = document.createElement("DIV");
      KTUtil.addClass(node, 'kt-chat__message kt-chat__message--brand kt-chat__message--right');
      var html = '<div class="kt-chat__user">' + '<span class="kt-chat__datetime">Just now</span>' + '<a href="#" class="kt-chat__username">Jason Muller</span></a>' + '<span class="kt-media kt-media--circle kt-media--sm">' + '<img src="./assets/media/users/100_12.jpg" alt="image">' + '</span>' + '</div>' + '<div class="kt-chat__text kt-bg-light-brand">' + textarea.value;
      '</div>';
      KTUtil.setHTML(node, html);
      messagesEl.appendChild(node);
      textarea.value = '';
      scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
      var ps;

      if (ps = KTUtil.data(scrollEl).get('ps')) {
        ps.update();
      }

      setTimeout(function () {
        var node = document.createElement("DIV");
        KTUtil.addClass(node, 'kt-chat__message kt-chat__message--success');
        var html = '<div class="kt-chat__user">' + '<span class="kt-media kt-media--circle kt-media--sm">' + '<img src="./assets/media/users/100_13.jpg" alt="image">' + '</span>' + '<a href="#" class="kt-chat__username">Max Born</span></a>' + '<span class="kt-chat__datetime">Just now</span>' + '</div>' + '<div class="kt-chat__text kt-bg-light-success">' + 'Right before vacation season we have the next Big Deal for you. <br>Book the car of your dreams and save up to <b>25%*</b> worldwide.' + '</div>';
        KTUtil.setHTML(node, html);
        messagesEl.appendChild(node);
        textarea.value = '';
        scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
        var ps;

        if (ps = KTUtil.data(scrollEl).get('ps')) {
          ps.update();
        }
      }, 2000);
    }; // attach events


    KTUtil.on(parentEl, '.kt-chat__input textarea', 'keydown', function (e) {
      if (e.keyCode == 13) {
        handleMessaging();
        e.preventDefault();
        return false;
      }
    });
    KTUtil.on(parentEl, '.kt-chat__input .kt-chat__reply', 'click', function (e) {
      handleMessaging();
    });
  };

  return {
    // public functions
    init: function init() {
      // init modal chat example
      initChat(KTUtil.getByID('kt_chat_modal')); // trigger click to show popup modal chat on page load

      if (encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com') {
        setTimeout(function () {
          if (!Cookies.get('kt_app_chat_shown')) {
            var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

            Cookies.set('kt_app_chat_shown', 1, {
              expires: expires
            });
            KTUtil.getByID('kt_app_chat_launch_btn').click();
          }
        }, 2000);
      }
    },
    setup: function setup(element) {
      initChat(element);
    }
  };
}(); // webpack support


if (true) {
  module.exports = KTChat;
}

KTUtil.ready(function () {
  KTChat.init();
});

/***/ }),

/***/ "./resources/theme/src/assets/js/global/layout/layout.js":
/*!***************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/layout/layout.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayout = function () {
  var body;
  var header;
  var headerMenu;
  var headerMenuOffcanvas;
  var mobileHeaderTopbarToggle;
  var asideMenu;
  var asideMenuOffcanvas;
  var scrollTop;
  var pageStickyPortlet; // Header

  var _initHeader = function initHeader() {
    var tmp;
    var headerEl = KTUtil.get('kt_header');
    var options = {
      classic: {
        desktop: true,
        mobile: false
      },
      offset: {},
      minimize: {}
    };
    options.minimize.mobile = false;

    if (KTUtil.attr(headerEl, 'data-ktheader-minimize') == 'on') {
      options.minimize.desktop = {};
      options.minimize.desktop.on = 'kt-header--minimize';
      options.offset.desktop = parseInt(KTUtil.css(headerEl, 'height')) - 10;
    } else {
      options.minimize.desktop = false;
    }

    header = new KTHeader('kt_header', options);

    if (asideMenu) {
      header.on('minimizeOn', function () {
        asideMenu.scrollReInit();
      });
      header.on('minimizeOff', function () {
        asideMenu.scrollReInit();
      });
    }
  }; // Header Menu


  var initHeaderMenu = function initHeaderMenu() {
    // init aside left offcanvas
    headerMenuOffcanvas = new KTOffcanvas('kt_header_menu_wrapper', {
      overlay: true,
      baseClass: 'kt-header-menu-wrapper',
      closeBy: 'kt_header_menu_mobile_close_btn',
      toggleBy: {
        target: 'kt_header_mobile_toggler',
        state: 'kt-header-mobile__toolbar-toggler--active'
      }
    });
    headerMenu = new KTMenu('kt_header_menu', {
      submenu: {
        desktop: 'dropdown',
        tablet: 'accordion',
        mobile: 'accordion'
      },
      accordion: {
        slideSpeed: 200,
        // accordion toggle slide speed in milliseconds
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    });
  }; // Header Topbar


  var initHeaderTopbar = function initHeaderTopbar() {
    mobileHeaderTopbarToggle = new KTToggle('kt_header_mobile_topbar_toggler', {
      target: 'body',
      targetState: 'kt-header__topbar--mobile-on',
      togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
    });
  }; // Aside


  var _initAside = function initAside() {
    // init aside left offcanvas
    var asidBrandHover = false;
    var aside = KTUtil.get('kt_aside');
    var asideBrand = KTUtil.get('kt_aside_brand');
    var asideOffcanvasClass = KTUtil.hasClass(aside, 'kt-aside--offcanvas-default') ? 'kt-aside--offcanvas-default' : 'kt-aside';
    var asideMenuOffcanvas = new KTOffcanvas('kt_aside', {
      baseClass: asideOffcanvasClass,
      overlay: true,
      closeBy: 'kt_aside_close_btn',
      toggleBy: [{
        target: 'kt_aside_mobile_toggler',
        state: 'kt-aside-toggler--active'
      }, {
        target: 'kt_aside_toggler',
        state: 'kt-aside-toggler--active'
      }]
    });
  }; // Aside menu


  var initAsideMenu = function initAsideMenu() {
    // Init aside menu
    var menu = KTUtil.get('kt_aside_menu');
    var menuDesktopMode = KTUtil.attr(menu, 'data-ktmenu-dropdown') === '1' ? 'dropdown' : 'accordion'; // Init scrollable menu container

    var scroll;

    if (KTUtil.attr(menu, 'data-ktmenu-scroll') === '1') {
      scroll = {
        rememberPosition: true,
        // remember position on page reload
        height: function height() {
          // calculate available scrollable area height
          var height;

          if (KTUtil.isInResponsiveRange('desktop')) {
            height = parseInt(KTUtil.getViewPort().height);
            height = height - parseInt(KTUtil.css(menu, 'marginTop')) - parseInt(KTUtil.css(menu, 'marginBottom'));
          } else {
            height = parseInt(KTUtil.getViewPort().height);
          }

          return height;
        }
      };
    } // Init aside menu


    asideMenu = new KTMenu('kt_aside_menu', {
      // vertical scroll
      scroll: scroll,
      // submenu setup
      submenu: {
        desktop: menuDesktopMode,
        tablet: 'accordion',
        // menu set to accordion in tablet mode
        mobile: 'accordion' // menu set to accordion in mobile mode

      },
      //accordion setup
      accordion: {
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    });
  }; // Scrolltop


  var initScrolltop = function initScrolltop() {
    var scrolltop = new KTScrolltop('kt_scrolltop', {
      offset: 200,
      speed: 400
    });
  }; // Init page sticky portlet


  var _initPageStickyPortlet = function initPageStickyPortlet() {
    return new KTPortlet('kt_page_portlet', {
      sticky: {
        offset: parseInt(KTUtil.css(KTUtil.get('kt_header'), 'height')) + 200,
        zIndex: 90,
        position: {
          top: function top() {
            if (KTUtil.isInResponsiveRange('desktop')) {
              return 60; //parseInt(KTUtil.actualHeight( KTUtil.get('kt_header'), 'height') );
            } else {
              return parseInt(KTUtil.css(KTUtil.get('kt_header_mobile'), 'height'));
            }
          },
          left: function left(portlet) {
            var porletEl = portlet.getSelf();
            return KTUtil.offset(porletEl).left;
          },
          right: function right(portlet) {
            var porletEl = portlet.getSelf();
            var portletWidth = parseInt(KTUtil.css(porletEl, 'width'));
            var bodyWidth = parseInt(KTUtil.css(KTUtil.get('body'), 'width'));
            var portletOffsetLeft = KTUtil.offset(porletEl).left;
            return bodyWidth - portletWidth - portletOffsetLeft;
          }
        }
      }
    });
  }; // Calculate content available full height


  var _getContentHeight = function getContentHeight() {
    var height;
    height = KTUtil.getViewPort().height;

    if (KTUtil.getByID('kt_header')) {
      height = height - KTUtil.actualHeight('kt_header');
    }

    if (KTUtil.getByID('kt_subheader')) {
      height = height - KTUtil.actualHeight('kt_subheader');
    }

    if (KTUtil.getByID('kt_footer')) {
      height = height - parseInt(KTUtil.css('kt_footer', 'height'));
    }

    if (KTUtil.getByID('kt_content')) {
      height = height - parseInt(KTUtil.css('kt_content', 'padding-top')) - parseInt(KTUtil.css('kt_content', 'padding-bottom'));
    }

    return height;
  };

  return {
    init: function init() {
      body = KTUtil.get('body');
      this.initHeader();
      this.initAside();
      this.initPageStickyPortlet(); // Non functional links notice(can be removed in production)

      $('#kt_aside_menu, #kt_header_menu').on('click', '.kt-menu__link[href="#"]', function (e) {
        swal.fire("", "You have clicked on a non-functional dummy link!");
        e.preventDefault();
      });
    },
    initHeader: function initHeader() {
      _initHeader();

      initHeaderMenu();
      initHeaderTopbar();
      initScrolltop();
    },
    initAside: function initAside() {
      _initAside();

      initAsideMenu();
    },
    getAsideMenu: function getAsideMenu() {
      return asideMenu;
    },
    initPageStickyPortlet: function initPageStickyPortlet() {
      if (!KTUtil.get('kt_page_portlet')) {
        return;
      }

      pageStickyPortlet = _initPageStickyPortlet();
      pageStickyPortlet.initSticky();
      KTUtil.addResizeHandler(function () {
        pageStickyPortlet.updateSticky();
      });

      _initPageStickyPortlet();
    },
    closeMobileAsideMenuOffcanvas: function closeMobileAsideMenuOffcanvas() {
      if (KTUtil.isMobileDevice()) {
        asideMenuOffcanvas.hide();
      }
    },
    closeMobileHeaderMenuOffcanvas: function closeMobileHeaderMenuOffcanvas() {
      if (KTUtil.isMobileDevice()) {
        headerMenuOffcanvas.hide();
      }
    },
    getContentHeight: function getContentHeight() {
      return _getContentHeight();
    }
  };
}(); // webpack support


if (true) {
  module.exports = KTLayout;
}

$(document).ready(function () {
  KTLayout.init();
});

/***/ }),

/***/ "./resources/theme/src/assets/js/global/layout/offcanvas-panel.js":
/*!************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/layout/offcanvas-panel.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTOffcanvasPanel = function () {
  var notificationPanel;
  var quickActionsPanel;
  var profilePanel;
  var searchPanel;

  var initNotifications = function initNotifications() {
    var head = KTUtil.find(notificationPanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(notificationPanel, '.kt-offcanvas-panel__body');
    var offcanvas = new KTOffcanvas(notificationPanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_notifications_close',
      toggleBy: 'kt_offcanvas_toolbar_notifications_toggler_btn'
    });
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(notificationPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(notificationPanel, 'paddingBottom'));
        return height;
      }
    });
  };

  var initQucikActions = function initQucikActions() {
    var head = KTUtil.find(quickActionsPanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(quickActionsPanel, '.kt-offcanvas-panel__body');
    var offcanvas = new KTOffcanvas(quickActionsPanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_quick_actions_close',
      toggleBy: 'kt_offcanvas_toolbar_quick_actions_toggler_btn'
    });
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(quickActionsPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(quickActionsPanel, 'paddingBottom'));
        return height;
      }
    });
  };

  var initProfile = function initProfile() {
    var head = KTUtil.find(profilePanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(profilePanel, '.kt-offcanvas-panel__body');
    var offcanvas = new KTOffcanvas(profilePanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_profile_close',
      toggleBy: 'kt_offcanvas_toolbar_profile_toggler_btn'
    });
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(profilePanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(profilePanel, 'paddingBottom'));
        return height;
      }
    });
  };

  var initSearch = function initSearch() {
    var head = KTUtil.find(searchPanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(searchPanel, '.kt-offcanvas-panel__body');
    var search = KTUtil.get('kt_quick_search_offcanvas');
    var form = KTUtil.find(search, '.kt-quick-search__form');
    var wrapper = KTUtil.find(search, '.kt-quick-search__wrapper');
    var offcanvas = new KTOffcanvas(searchPanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_search_close',
      toggleBy: 'kt_offcanvas_toolbar_search_toggler_btn'
    });
    KTUtil.scrollInit(wrapper, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);
        height = height - parseInt(KTUtil.actualHeight(form));
        height = height - parseInt(KTUtil.css(form, 'marginBottom'));

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(searchPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(searchPanel, 'paddingBottom'));
        return height;
      }
    });
  };

  return {
    init: function init() {
      notificationPanel = KTUtil.get('kt_offcanvas_toolbar_notifications');
      quickActionsPanel = KTUtil.get('kt_offcanvas_toolbar_quick_actions');
      profilePanel = KTUtil.get('kt_offcanvas_toolbar_profile');
      searchPanel = KTUtil.get('kt_offcanvas_toolbar_search');
      initNotifications();
      initQucikActions();
      initProfile();
      initSearch();
    }
  };
}(); // Init on page load completed


KTUtil.ready(function () {
  KTOffcanvasPanel.init();
});

/***/ }),

/***/ "./resources/theme/src/assets/js/global/layout/quick-panel.js":
/*!********************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/layout/quick-panel.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTQuickPanel = function () {
  var panel;
  var notificationPanel;
  var logsPanel;
  var settingsPanel;

  var getContentHeight = function getContentHeight() {
    var height;
    var nav = KTUtil.find(panel, '.kt-quick-panel__nav');
    var content = KTUtil.find(panel, '.kt-quick-panel__content');
    height = parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.actualHeight(nav)) - 2 * parseInt(KTUtil.css(nav, 'padding-top')) - 10;
    return height;
  };

  var initOffcanvas = function initOffcanvas() {
    new KTOffcanvas(panel, {
      overlay: true,
      baseClass: 'kt-quick-panel',
      closeBy: 'kt_quick_panel_close_btn',
      toggleBy: 'kt_quick_panel_toggler_btn'
    });
  };

  var initNotifications = function initNotifications() {
    KTUtil.scrollInit(notificationPanel, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return getContentHeight();
      }
    });
  };

  var initLogs = function initLogs() {
    KTUtil.scrollInit(logsPanel, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return getContentHeight();
      }
    });
  };

  var initSettings = function initSettings() {
    KTUtil.scrollInit(settingsPanel, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return getContentHeight();
      }
    });
  };

  var updatePerfectScrollbars = function updatePerfectScrollbars() {
    $(panel).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      KTUtil.scrollUpdate(notificationPanel);
      KTUtil.scrollUpdate(logsPanel);
      KTUtil.scrollUpdate(settingsPanel);
    });
  };

  return {
    init: function init() {
      panel = KTUtil.get('kt_quick_panel');
      notificationPanel = KTUtil.get('kt_quick_panel_tab_notifications');
      logsPanel = KTUtil.get('kt_quick_panel_tab_logs');
      settingsPanel = KTUtil.get('kt_quick_panel_tab_settings');
      initOffcanvas();
      initNotifications();
      initLogs();
      initSettings();
      updatePerfectScrollbars();
    }
  };
}();

$(document).ready(function () {
  KTQuickPanel.init();
});

/***/ }),

/***/ "./resources/theme/src/assets/js/global/layout/quick-search.js":
/*!*********************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/layout/quick-search.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTQuickSearch = function KTQuickSearch() {
  var target;
  var form;
  var input;
  var closeIcon;
  var resultWrapper;
  var resultDropdown;
  var resultDropdownToggle;
  var inputGroup;
  var query = '';
  var hasResult = false;
  var timeout = false;
  var isProcessing = false;
  var requestTimeout = 200; // ajax request fire timeout in milliseconds

  var spinnerClass = 'kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right';
  var resultClass = 'kt-quick-search--has-result';
  var minLength = 2;

  var showProgress = function showProgress() {
    isProcessing = true;
    KTUtil.addClass(inputGroup, spinnerClass);

    if (closeIcon) {
      KTUtil.hide(closeIcon);
    }
  };

  var hideProgress = function hideProgress() {
    isProcessing = false;
    KTUtil.removeClass(inputGroup, spinnerClass);

    if (closeIcon) {
      if (input.value.length < minLength) {
        KTUtil.hide(closeIcon);
      } else {
        KTUtil.show(closeIcon, 'flex');
      }
    }
  };

  var showDropdown = function showDropdown() {
    if (resultDropdownToggle && !KTUtil.hasClass(resultDropdown, 'show')) {
      $(resultDropdownToggle).dropdown('toggle');
      $(resultDropdownToggle).dropdown('update');
    }
  };

  var hideDropdown = function hideDropdown() {
    if (resultDropdownToggle && KTUtil.hasClass(resultDropdown, 'show')) {
      $(resultDropdownToggle).dropdown('toggle');
    }
  };

  var processSearch = function processSearch() {
    if (hasResult && query === input.value) {
      hideProgress();
      KTUtil.addClass(target, resultClass);
      showDropdown();
      KTUtil.scrollUpdate(resultWrapper);
      return;
    }

    query = input.value;
    KTUtil.removeClass(target, resultClass);
    showProgress();
    hideDropdown();
    setTimeout(function () {
      $.ajax({
        url: 'https://keenthemes.com/metronic/tools/preview/api/quick_search.php',
        data: {
          query: query
        },
        dataType: 'html',
        success: function success(res) {
          hasResult = true;
          hideProgress();
          KTUtil.addClass(target, resultClass);
          KTUtil.setHTML(resultWrapper, res);
          showDropdown();
          KTUtil.scrollUpdate(resultWrapper);
        },
        error: function error(res) {
          hasResult = false;
          hideProgress();
          KTUtil.addClass(target, resultClass);
          KTUtil.setHTML(resultWrapper, '<span class="kt-quick-search__message">Connection error. Pleae try again later.</div>');
          showDropdown();
          KTUtil.scrollUpdate(resultWrapper);
        }
      });
    }, 1000);
  };

  var handleCancel = function handleCancel(e) {
    input.value = '';
    query = '';
    hasResult = false;
    KTUtil.hide(closeIcon);
    KTUtil.removeClass(target, resultClass);
    hideDropdown();
  };

  var handleSearch = function handleSearch() {
    if (input.value.length < minLength) {
      hideProgress();
      hideDropdown();
      return;
    }

    if (isProcessing == true) {
      return;
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      processSearch();
    }, requestTimeout);
  };

  return {
    init: function init(element) {
      // Init
      target = element;
      form = KTUtil.find(target, '.kt-quick-search__form');
      input = KTUtil.find(target, '.kt-quick-search__input');
      closeIcon = KTUtil.find(target, '.kt-quick-search__close');
      resultWrapper = KTUtil.find(target, '.kt-quick-search__wrapper');
      resultDropdown = KTUtil.find(target, '.dropdown-menu');
      resultDropdownToggle = KTUtil.find(target, '[data-toggle="dropdown"]');
      inputGroup = KTUtil.find(target, '.input-group'); // Attach input keyup handler

      KTUtil.addEvent(input, 'keyup', handleSearch);
      KTUtil.addEvent(input, 'focus', handleSearch); // Prevent enter click

      form.onkeypress = function (e) {
        var key = e.charCode || e.keyCode || 0;

        if (key == 13) {
          e.preventDefault();
        }
      };

      KTUtil.addEvent(closeIcon, 'click', handleCancel);
    }
  };
};

var KTQuickSearchInline = KTQuickSearch;
var KTQuickSearchOffcanvas = KTQuickSearch; // Init on page load completed

KTUtil.ready(function () {
  if (KTUtil.get('kt_quick_search_dropdown')) {
    KTQuickSearch().init(KTUtil.get('kt_quick_search_dropdown'));
  }

  if (KTUtil.get('kt_quick_search_inline')) {
    KTQuickSearchInline().init(KTUtil.get('kt_quick_search_inline'));
  }

  if (KTUtil.get('kt_quick_search_offcanvas')) {
    KTQuickSearchOffcanvas().init(KTUtil.get('kt_quick_search_offcanvas'));
  }
});

/***/ }),

/***/ "./resources/theme/tools/webpack/core.js":
/*!***********************************************!*\
  !*** ./resources/theme/tools/webpack/core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Layout Scripts

window.KTLayout = __webpack_require__(/*! ../../src/assets/js/global/layout/layout */ "./resources/theme/src/assets/js/global/layout/layout.js");
window.KTChat = __webpack_require__(/*! ../../src/assets/js/global/layout/chat */ "./resources/theme/src/assets/js/global/layout/chat.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/offcanvas-panel */ "./resources/theme/src/assets/js/global/layout/offcanvas-panel.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/quick-panel */ "./resources/theme/src/assets/js/global/layout/quick-panel.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/quick-search */ "./resources/theme/src/assets/js/global/layout/quick-search.js");

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./resources/js/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deviwahyudin/Sites/app/resources/js/core.js */"./resources/js/core.js");


/***/ })

/******/ });