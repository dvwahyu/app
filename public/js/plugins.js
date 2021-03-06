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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_tools_webpack_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/tools/webpack/scripts */ "./resources/theme/tools/webpack/scripts.js");
/* harmony import */ var _theme_tools_webpack_scripts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_tools_webpack_scripts__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/app.js":
/*!*********************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/app.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @class KApp
 */

var KTApp = function () {
  /** @type {object} colors State colors **/
  var colors = {};

  var _initTooltip = function initTooltip(el) {
    var skin = el.data('skin') ? 'tooltip-' + el.data('skin') : '';
    var width = el.data('width') == 'auto' ? 'tooltop-auto-width' : '';
    var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
    var placement = el.data('placement') ? el.data('placement') : 'left';
    el.tooltip({
      trigger: triggerValue,
      template: '<div class="tooltip ' + skin + ' ' + width + '" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
    });
  };

  var _initTooltips = function initTooltips() {
    // init bootstrap tooltips
    $('[data-toggle="kt-tooltip"]').each(function () {
      _initTooltip($(this));
    });
  };

  var _initPopover = function initPopover(el) {
    var skin = el.data('skin') ? 'popover-' + el.data('skin') : '';
    var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
    el.popover({
      trigger: triggerValue,
      template: '\
            <div class="popover ' + skin + '" role="tooltip">\
                <div class="arrow"></div>\
                <h3 class="popover-header"></h3>\
                <div class="popover-body"></div>\
            </div>'
    });
  };

  var _initPopovers = function initPopovers() {
    // init bootstrap popover
    $('[data-toggle="kt-popover"]').each(function () {
      _initPopover($(this));
    });
  };

  var initFileInput = function initFileInput() {
    // init bootstrap popover
    $('.custom-file-input').on('change', function () {
      var fileName = $(this).val();
      $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });
  };

  var _initPortlet = function initPortlet(el, options) {
    // init portlet tools
    var el = $(el);
    var portlet = new KTPortlet(el[0], options);
  };

  var _initPortlets = function initPortlets() {
    // init portlet tools
    $('[data-ktportlet="true"]').each(function () {
      var el = $(this);

      if (el.data('data-ktportlet-initialized') !== true) {
        _initPortlet(el, {});

        el.data('data-ktportlet-initialized', true);
      }
    });
  };

  var initScroll = function initScroll() {
    $('[data-scroll="true"]').each(function () {
      var el = $(this);
      KTUtil.scrollInit(this, {
        mobileNativeScroll: true,
        handleWindowResize: true,
        rememberPosition: el.data('remember-position') == 'true' ? true : false,
        height: function height() {
          if (KTUtil.isInResponsiveRange('tablet-and-mobile') && el.data('mobile-height')) {
            return el.data('mobile-height');
          } else {
            return el.data('height');
          }
        }
      });
    });
  };

  var initAlerts = function initAlerts() {
    // init bootstrap popover
    $('body').on('click', '[data-close=alert]', function () {
      $(this).closest('.alert').hide();
    });
  };

  var _initSticky = function initSticky() {
    var sticky = new Sticky('[data-sticky="true"]');
  };

  var _initAbsoluteDropdown = function initAbsoluteDropdown(context) {
    var dropdownMenu;

    if (!context) {
      return;
    }

    $('body').on('show.bs.dropdown', context, function (e) {
      dropdownMenu = $(e.target).find('.dropdown-menu');
      $('body').append(dropdownMenu.detach());
      dropdownMenu.css('display', 'block');
      dropdownMenu.position({
        'my': 'right top',
        'at': 'right bottom',
        'of': $(e.relatedTarget)
      });
    }).on('hide.bs.dropdown', context, function (e) {
      $(e.target).append(dropdownMenu.detach());
      dropdownMenu.hide();
    });
  };

  var initAbsoluteDropdowns = function initAbsoluteDropdowns() {
    $('body').on('show.bs.dropdown', function (e) {
      // e.target is always parent (contains toggler and menu)
      var $toggler = $(e.target).find("[data-attach='body']");

      if ($toggler.length === 0) {
        return;
      }

      var $dropdownMenu = $(e.target).find('.dropdown-menu'); // save detached menu

      var $detachedDropdownMenu = $dropdownMenu.detach(); // save reference to detached menu inside data of toggler

      $toggler.data('dropdown-menu', $detachedDropdownMenu);
      $('body').append($detachedDropdownMenu);
      $detachedDropdownMenu.css('display', 'block');
      $detachedDropdownMenu.position({
        my: 'right top',
        at: 'right bottom',
        of: $(e.relatedTarget)
      });
    });
    $('body').on('hide.bs.dropdown', function (e) {
      var $toggler = $(e.target).find("[data-attach='body']");

      if ($toggler.length === 0) {
        return;
      } // access to reference of detached menu from data of toggler


      var $detachedDropdownMenu = $toggler.data('dropdown-menu'); // re-append detached menu inside parent

      $(e.target).append($detachedDropdownMenu.detach()); // hide dropdown

      $detachedDropdownMenu.hide();
    });
  };

  return {
    init: function init(options) {
      if (options && options.colors) {
        colors = options.colors;
      }

      KTApp.initComponents();
    },
    initComponents: function initComponents() {
      initScroll();

      _initTooltips();

      _initPopovers();

      initAlerts();

      _initPortlets();

      initFileInput();

      _initSticky();

      initAbsoluteDropdowns();
    },
    initTooltips: function initTooltips() {
      _initTooltips();
    },
    initTooltip: function initTooltip(el) {
      _initTooltip(el);
    },
    initPopovers: function initPopovers() {
      _initPopovers();
    },
    initPopover: function initPopover(el) {
      _initPopover(el);
    },
    initPortlet: function initPortlet(el, options) {
      _initPortlet(el, options);
    },
    initPortlets: function initPortlets() {
      _initPortlets();
    },
    initSticky: function initSticky() {
      _initSticky();
    },
    initAbsoluteDropdown: function initAbsoluteDropdown(context) {
      _initAbsoluteDropdown(context);
    },
    block: function block(target, options) {
      var el = $(target);
      options = $.extend(true, {
        opacity: 0.05,
        overlayColor: '#000000',
        type: '',
        size: '',
        state: 'brand',
        centerX: true,
        centerY: true,
        message: '',
        shadow: true,
        width: 'auto'
      }, options);
      var html;
      var version = options.type ? 'kt-spinner--' + options.type : '';
      var state = options.state ? 'kt-spinner--' + options.state : '';
      var size = options.size ? 'kt-spinner--' + options.size : '';
      var spinner = '<div class="kt-spinner ' + version + ' ' + state + ' ' + size + '"></div';

      if (options.message && options.message.length > 0) {
        var classes = 'blockui ' + (options.shadow === false ? 'blockui' : '');
        html = '<div class="' + classes + '"><span>' + options.message + '</span><span>' + spinner + '</span></div>';
        var el = document.createElement('div');
        KTUtil.get('body').prepend(el);
        KTUtil.addClass(el, classes);
        el.innerHTML = '<span>' + options.message + '</span><span>' + spinner + '</span>';
        options.width = KTUtil.actualWidth(el) + 10;
        KTUtil.remove(el);

        if (target == 'body') {
          html = '<div class="' + classes + '" style="margin-left:-' + options.width / 2 + 'px;"><span>' + options.message + '</span><span>' + spinner + '</span></div>';
        }
      } else {
        html = spinner;
      }

      var params = {
        message: html,
        centerY: options.centerY,
        centerX: options.centerX,
        css: {
          top: '30%',
          left: '50%',
          border: '0',
          padding: '0',
          backgroundColor: 'none',
          width: options.width
        },
        overlayCSS: {
          backgroundColor: options.overlayColor,
          opacity: options.opacity,
          cursor: 'wait',
          zIndex: target == 'body' ? 1100 : 10
        },
        onUnblock: function onUnblock() {
          if (el && el[0]) {
            KTUtil.css(el[0], 'position', '');
            KTUtil.css(el[0], 'zoom', '');
          }
        }
      };

      if (target == 'body') {
        params.css.top = '50%';
        $.blockUI(params);
      } else {
        var el = $(target);
        el.block(params);
      }
    },
    unblock: function unblock(target) {
      if (target && target != 'body') {
        $(target).unblock();
      } else {
        $.unblockUI();
      }
    },
    blockPage: function blockPage(options) {
      return KTApp.block('body', options);
    },
    unblockPage: function unblockPage() {
      return KTApp.unblock('body');
    },
    progress: function progress(target, options) {
      var skin = options && options.skin ? options.skin : 'light';
      var alignment = options && options.alignment ? options.alignment : 'right';
      var size = options && options.size ? ' kt-spinner--' + options.size : '';
      var classes = 'kt-spinner ' + 'kt-spinner--' + skin + ' kt-spinner--' + alignment + size;
      KTApp.unprogress(target);
      KTUtil.attr(target, 'disabled', true);
      $(target).addClass(classes);
      $(target).data('progress-classes', classes);
    },
    unprogress: function unprogress(target) {
      $(target).removeClass($(target).data('progress-classes'));
      KTUtil.removeAttr(target, 'disabled');
    },
    getStateColor: function getStateColor(name) {
      return colors["state"][name];
    },
    getBaseColor: function getBaseColor(type, level) {
      return colors["base"][type][level - 1];
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTApp;
} // Initialize KTApp class on document ready


$(document).ready(function () {
  KTApp.init(KTAppOptions);
});

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/avatar.js":
/*!************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/avatar.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// plugin setup
var KTAvatar = function KTAvatar(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {}; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('avatar')) {
        the = KTUtil.data(element).get('avatar');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('avatar', the);
      }

      return the;
    },

    /**
     * Init avatar
     */
    init: function init(options) {
      the.element = element;
      the.events = [];
      the.input = KTUtil.find(element, 'input[type="file"]');
      the.holder = KTUtil.find(element, '.kt-avatar__holder');
      the.cancel = KTUtil.find(element, '.kt-avatar__cancel');
      the.src = KTUtil.css(the.holder, 'backgroundImage'); // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Handle avatar change
      KTUtil.addEvent(the.input, 'change', function (e) {
        e.preventDefault();

        if (the.input && the.input.files && the.input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            KTUtil.css(the.holder, 'background-image', 'url(' + e.target.result + ')');
          };

          reader.readAsDataURL(the.input.files[0]);
          KTUtil.addClass(the.element, 'kt-avatar--changed');
        }
      }); // Handle avatar cancel

      KTUtil.addEvent(the.cancel, 'click', function (e) {
        e.preventDefault();
        KTUtil.removeClass(the.element, 'kt-avatar--changed');
        KTUtil.css(the.holder, 'background-image', the.src);
        the.input.value = "";
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTAvatar;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/dialog.js":
/*!************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/dialog.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // plugin setup

var KTDialog = function KTDialog(options) {
  // Main object
  var the = this; // Get element object

  var element;
  var body = KTUtil.get('body'); // Default options

  var defaultOptions = {
    'placement': 'top center',
    'type': 'loader',
    'width': 100,
    'state': 'default',
    'message': 'Loading...'
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      Plugin.init(options);
      return the;
    },

    /**
     * Handles subtoggle click toggle
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.state = false;
    },

    /**
     * Show dialog
     */
    show: function show() {
      Plugin.eventTrigger('show');
      element = document.createElement("DIV");
      KTUtil.setHTML(element, the.options.message);
      KTUtil.addClass(element, 'kt-dialog kt-dialog--shown');
      KTUtil.addClass(element, 'kt-dialog--' + the.options.state);
      KTUtil.addClass(element, 'kt-dialog--' + the.options.type);

      if (the.options.placement == 'top center') {
        KTUtil.addClass(element, 'kt-dialog--top-center');
      }

      body.appendChild(element);
      the.state = 'shown';
      Plugin.eventTrigger('shown');
      return the;
    },

    /**
     * Hide dialog
     */
    hide: function hide() {
      if (element) {
        Plugin.eventTrigger('hide');
        element.remove();
        the.state = 'hidden';
        Plugin.eventTrigger('hidden');
      }

      return the;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options 
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Check shown state 
   */


  the.shown = function () {
    return the.state == 'shown';
  };
  /**
   * Check hidden state 
   */


  the.hidden = function () {
    return the.state == 'hidden';
  };
  /**
   * Show dialog 
   */


  the.show = function () {
    return Plugin.show();
  };
  /**
   * Hide dialog
   */


  the.hide = function () {
    return Plugin.hide();
  };
  /**
   * Attach event
   * @returns {KTToggle}
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @returns {KTToggle}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTDialog;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/header.js":
/*!************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/header.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTHeader = function KTHeader(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (element === undefined) {
    return;
  } // Default options


  var defaultOptions = {
    classic: false,
    offset: {
      mobile: 150,
      desktop: 200
    },
    minimize: {
      mobile: false,
      desktop: false
    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTHeader}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('header')) {
        the = KTUtil.data(element).get('header');
      } else {
        // reset header
        Plugin.init(options); // build header

        Plugin.build();
        KTUtil.data(element).set('header', the);
      }

      return the;
    },

    /**
     * Handles subheader click toggle
     * @returns {KTHeader}
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },

    /**
     * Reset header
     * @returns {KTHeader}
     */
    build: function build() {
      var lastScrollTop = 0;
      var eventTriggerState = true;
      var viewportHeight = KTUtil.getViewPort().height;
      var documentHeight = KTUtil.getDocumentHeight();

      if (the.options.minimize.mobile === false && the.options.minimize.desktop === false) {
        return;
      }

      window.addEventListener('scroll', function () {
        var offset = 0,
            on,
            off,
            st;

        if (KTUtil.isInResponsiveRange('desktop')) {
          offset = the.options.offset.desktop;
          on = the.options.minimize.desktop.on;
          off = the.options.minimize.desktop.off;
        } else if (KTUtil.isInResponsiveRange('tablet-and-mobile')) {
          offset = the.options.offset.mobile;
          on = the.options.minimize.mobile.on;
          off = the.options.minimize.mobile.off;
        }

        st = KTUtil.getScrollTop();

        if (KTUtil.isInResponsiveRange('tablet-and-mobile') && the.options.classic && the.options.classic.mobile || KTUtil.isInResponsiveRange('desktop') && the.options.classic && the.options.classic.desktop) {
          if (st > offset) {
            // down scroll mode
            KTUtil.addClass(body, on);
            KTUtil.removeClass(body, off);

            if (eventTriggerState) {
              Plugin.eventTrigger('minimizeOn', the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            KTUtil.addClass(body, off);
            KTUtil.removeClass(body, on);

            if (eventTriggerState == false) {
              Plugin.eventTrigger('minimizeOff', the);
              eventTriggerState = true;
            }
          }
        } else {
          if (st > offset && lastScrollTop < st) {
            // down scroll mode
            KTUtil.addClass(body, on);
            KTUtil.removeClass(body, off);

            if (eventTriggerState) {
              Plugin.eventTrigger('minimizeOn', the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            KTUtil.addClass(body, off);
            KTUtil.removeClass(body, on);

            if (eventTriggerState == false) {
              Plugin.eventTrigger('minimizeOff', the);
              eventTriggerState = true;
            }
          }

          lastScrollTop = st;
        }
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTHeader;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/menu.js":
/*!**********************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/menu.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTMenu = function KTMenu(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    // scrollable area with Perfect Scroll
    scroll: {
      rememberPosition: false
    },
    // accordion submenu mode
    accordion: {
      slideSpeed: 200,
      // accordion toggle slide speed in milliseconds
      autoScroll: false,
      // enable auto scrolling(focus) to the clicked menu item
      autoScrollSpeed: 1200,
      expandAll: true // allow having multiple expanded accordions in the menu

    },
    // dropdown submenu mode
    dropdown: {
      timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown

    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTMenu}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('menu')) {
        the = KTUtil.data(element).get('menu');
      } else {
        // reset menu
        Plugin.init(options); // reset menu

        Plugin.reset(); // build menu

        Plugin.build();
        KTUtil.data(element).set('menu', the);
      }

      return the;
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    init: function init(options) {
      the.events = [];
      the.eventHandlers = {}; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0;
      the.uid = KTUtil.getUniqueID();
    },
    update: function update(options) {
      // merge default and user defined options
      the.options = KTUtil.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0; // reset menu

      Plugin.reset();
      the.eventHandlers = {}; // build menu

      Plugin.build();
      KTUtil.data(element).set('menu', the);
    },
    reload: function reload() {
      // reset menu
      Plugin.reset(); // build menu

      Plugin.build(); // reset submenu props

      Plugin.resetSubmenuProps();
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    build: function build() {
      // General accordion submenu toggle
      the.eventHandlers['event_1'] = KTUtil.on(element, '.kt-menu__toggle', 'click', Plugin.handleSubmenuAccordion); // Dropdown mode(hoverable)

      if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
        // dropdown submenu - hover toggle
        the.eventHandlers['event_2'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
        the.eventHandlers['event_3'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit); // dropdown submenu - click toggle

        the.eventHandlers['event_4'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="click"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="click"] > .kt-menu__link .kt-menu__toggle', 'click', Plugin.handleSubmenuDropdownClick);
        the.eventHandlers['event_5'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="tab"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="tab"] > .kt-menu__link .kt-menu__toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
      } // handle link click


      the.eventHandlers['event_6'] = KTUtil.on(element, '.kt-menu__item > .kt-menu__link:not(.kt-menu__toggle):not(.kt-menu__link--toggle-skip)', 'click', Plugin.handleLinkClick); // Init scrollable menu

      if (the.options.scroll && the.options.scroll.height) {
        Plugin.scrollInit();
      }
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    reset: function reset() {
      KTUtil.off(element, 'click', the.eventHandlers['event_1']); // dropdown submenu - hover toggle

      KTUtil.off(element, 'mouseover', the.eventHandlers['event_2']);
      KTUtil.off(element, 'mouseout', the.eventHandlers['event_3']); // dropdown submenu - click toggle

      KTUtil.off(element, 'click', the.eventHandlers['event_4']);
      KTUtil.off(element, 'click', the.eventHandlers['event_5']); // handle link click

      KTUtil.off(element, 'click', the.eventHandlers['event_6']);
    },

    /**
     * Init scroll menu
     *
    */
    scrollInit: function scrollInit() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollDestroy(element);
        KTUtil.scrollInit(element, {
          mobileNativeScroll: true,
          windowScroll: false,
          resetHeightOnDestroy: true,
          handleWindowResize: true,
          height: the.options.scroll.height,
          rememberPosition: the.options.scroll.rememberPosition
        });
      } else {
        KTUtil.scrollDestroy(element);
      }
    },

    /**
     * Update scroll menu
    */
    scrollUpdate: function scrollUpdate() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollUpdate(element);
      }
    },

    /**
     * Scroll top
    */
    scrollTop: function scrollTop() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollTop(element);
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    getSubmenuMode: function getSubmenuMode(el) {
      if (KTUtil.isInResponsiveRange('desktop')) {
        if (el && KTUtil.hasAttr(el, 'data-ktmenu-submenu-toggle') && KTUtil.attr(el, 'data-ktmenu-submenu-toggle') == 'hover') {
          return 'dropdown';
        }

        if (KTUtil.isset(the.options.submenu, 'desktop.state.body')) {
          if (KTUtil.hasClasses(body, the.options.submenu.desktop.state.body)) {
            return the.options.submenu.desktop.state.mode;
          } else {
            return the.options.submenu.desktop["default"];
          }
        } else if (KTUtil.isset(the.options.submenu, 'desktop')) {
          return the.options.submenu.desktop;
        }
      } else if (KTUtil.isInResponsiveRange('tablet') && KTUtil.isset(the.options.submenu, 'tablet')) {
        return the.options.submenu.tablet;
      } else if (KTUtil.isInResponsiveRange('mobile') && KTUtil.isset(the.options.submenu, 'mobile')) {
        return the.options.submenu.mobile;
      } else {
        return false;
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    isConditionalSubmenuDropdown: function isConditionalSubmenuDropdown() {
      if (KTUtil.isInResponsiveRange('desktop') && KTUtil.isset(the.options.submenu, 'desktop.state.body')) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Reset submenu attributes
     * @returns {KTMenu}
     */
    resetSubmenuProps: function resetSubmenuProps(e) {
      var submenus = KTUtil.findAll(element, '.kt-menu__submenu');

      if (submenus) {
        for (var i = 0, len = submenus.length; i < len; i++) {
          KTUtil.css(submenus[0], 'display', '');
          KTUtil.css(submenus[0], 'overflow', '');
        }
      }
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverEnter: function handleSubmenuDrodownHoverEnter(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      if (the.resumeDropdownHover() === false) {
        return;
      }

      var item = this;

      if (item.getAttribute('data-hover') == '1') {
        item.removeAttribute('data-hover');
        clearTimeout(item.getAttribute('data-timeout'));
        item.removeAttribute('data-timeout');
      }

      Plugin.showSubmenuDropdown(item);
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverExit: function handleSubmenuDrodownHoverExit(e) {
      if (the.resumeDropdownHover() === false) {
        return;
      }

      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this;
      var time = the.options.dropdown.timeout;
      var timeout = setTimeout(function () {
        if (item.getAttribute('data-hover') == '1') {
          Plugin.hideSubmenuDropdown(item, true);
        }
      }, time);
      item.setAttribute('data-hover', '1');
      item.setAttribute('data-timeout', timeout);
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClick: function handleSubmenuDropdownClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.kt-menu__item');

      if (item.getAttribute('data-ktmenu-submenu-mode') == 'accordion') {
        return;
      }

      if (KTUtil.hasClass(item, 'kt-menu__item--hover') === false) {
        KTUtil.addClass(item, 'kt-menu__item--open-dropdown');
        Plugin.showSubmenuDropdown(item);
      } else {
        KTUtil.removeClass(item, 'kt-menu__item--open-dropdown');
        Plugin.hideSubmenuDropdown(item, true);
      }

      e.preventDefault();
    },

    /**
     * Handles tab click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownTabClick: function handleSubmenuDropdownTabClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.kt-menu__item');

      if (item.getAttribute('data-ktmenu-submenu-mode') == 'accordion') {
        return;
      }

      if (KTUtil.hasClass(item, 'kt-menu__item--hover') == false) {
        KTUtil.addClass(item, 'kt-menu__item--open-dropdown');
        Plugin.showSubmenuDropdown(item);
      }

      e.preventDefault();
    },

    /**
     * Handles link click
     * @returns {KTMenu}
     */
    handleLinkClick: function handleLinkClick(e) {
      var submenu = this.closest('.kt-menu__item.kt-menu__item--submenu'); //

      var result = Plugin.eventTrigger('linkClick', this, e);

      if (result === false) {
        return;
      }

      if (submenu && Plugin.getSubmenuMode(submenu) === 'dropdown') {
        Plugin.hideSubmenuDropdowns();
      }
    },

    /**
     * Handles submenu dropdown close on link click
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClose: function handleSubmenuDropdownClose(e, el) {
      // exit if its not submenu dropdown mode
      if (Plugin.getSubmenuMode(el) === 'accordion') {
        return;
      }

      var shown = element.querySelectorAll('.kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)'); // check if currently clicked link's parent item ha

      if (shown.length > 0 && KTUtil.hasClass(el, 'kt-menu__toggle') === false && el.querySelectorAll('.kt-menu__toggle').length === 0) {
        // close opened dropdown menus
        for (var i = 0, len = shown.length; i < len; i++) {
          Plugin.hideSubmenuDropdown(shown[0], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    handleSubmenuAccordion: function handleSubmenuAccordion(e, el) {
      var query;
      var item = el ? el : this;

      if (Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.kt-menu__item'))) {
        if (query.getAttribute('data-ktmenu-submenu-mode') != 'accordion') {
          e.preventDefault();
          return;
        }
      }

      var li = item.closest('.kt-menu__item');
      var submenu = KTUtil.child(li, '.kt-menu__submenu, .kt-menu__inner');

      if (KTUtil.hasClass(item.closest('.kt-menu__item'), 'kt-menu__item--open-always')) {
        return;
      }

      if (li && submenu) {
        e.preventDefault();
        var speed = the.options.accordion.slideSpeed;
        var hasClosables = false;

        if (KTUtil.hasClass(li, 'kt-menu__item--open') === false) {
          // hide other accordions
          if (the.options.accordion.expandAll === false) {
            var subnav = item.closest('.kt-menu__nav, .kt-menu__subnav');
            var closables = KTUtil.children(subnav, '.kt-menu__item.kt-menu__item--open.kt-menu__item--submenu:not(.kt-menu__item--here):not(.kt-menu__item--open-always)');

            if (subnav && closables) {
              for (var i = 0, len = closables.length; i < len; i++) {
                var el_ = closables[0];
                var submenu_ = KTUtil.child(el_, '.kt-menu__submenu');

                if (submenu_) {
                  KTUtil.slideUp(submenu_, speed, function () {
                    Plugin.scrollUpdate();
                    KTUtil.removeClass(el_, 'kt-menu__item--open');
                  });
                }
              }
            }
          }

          KTUtil.slideDown(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.scrollUpdate();
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          KTUtil.addClass(li, 'kt-menu__item--open');
        } else {
          KTUtil.slideUp(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          KTUtil.removeClass(li, 'kt-menu__item--open');
        }
      }
    },

    /**
     * scroll to item function
     * @returns {KTMenu}
     */
    scrollToItem: function scrollToItem(item) {
      // handle auto scroll for accordion submenus
      if (KTUtil.isInResponsiveRange('desktop') && the.options.accordion.autoScroll && element.getAttribute('data-ktmenu-scroll') !== '1') {
        KTUtil.scrollTo(item, the.options.accordion.autoScrollSpeed);
      }
    },

    /**
     * Hide submenu dropdown
     * @returns {KTMenu}
     */
    hideSubmenuDropdown: function hideSubmenuDropdown(item, classAlso) {
      // remove submenu activation class
      if (classAlso) {
        KTUtil.removeClass(item, 'kt-menu__item--hover');
        KTUtil.removeClass(item, 'kt-menu__item--active-tab');
      } // clear timeout


      item.removeAttribute('data-hover');

      if (item.getAttribute('data-ktmenu-dropdown-toggle-class')) {
        KTUtil.removeClass(body, item.getAttribute('data-ktmenu-dropdown-toggle-class'));
      }

      var timeout = item.getAttribute('data-timeout');
      item.removeAttribute('data-timeout');
      clearTimeout(timeout);
    },

    /**
     * Hide submenu dropdowns
     * @returns {KTMenu}
     */
    hideSubmenuDropdowns: function hideSubmenuDropdowns() {
      var items;

      if (items = element.querySelectorAll('.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs):not([data-ktmenu-submenu-toggle="tab"])')) {
        for (var j = 0, cnt = items.length; j < cnt; j++) {
          Plugin.hideSubmenuDropdown(items[j], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    showSubmenuDropdown: function showSubmenuDropdown(item) {
      // close active submenus
      var list = element.querySelectorAll('.kt-menu__item--submenu.kt-menu__item--hover, .kt-menu__item--submenu.kt-menu__item--active-tab');

      if (list) {
        for (var i = 0, len = list.length; i < len; i++) {
          var el = list[i];

          if (item !== el && el.contains(item) === false && item.contains(el) === false) {
            Plugin.hideSubmenuDropdown(el, true);
          }
        }
      } // add submenu activation class


      KTUtil.addClass(item, 'kt-menu__item--hover');

      if (item.getAttribute('data-ktmenu-dropdown-toggle-class')) {
        KTUtil.addClass(body, item.getAttribute('data-ktmenu-dropdown-toggle-class'));
      }
    },

    /**
     * Handles submenu slide toggle
     * @returns {KTMenu}
     */
    createSubmenuDropdownClickDropoff: function createSubmenuDropdownClickDropoff(el) {
      var query;
      var zIndex = (query = KTUtil.child(el, '.kt-menu__submenu') ? KTUtil.css(query, 'z-index') : 0) - 1;
      var dropoff = document.createElement('<div class="kt-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');
      body.appendChild(dropoff);
      KTUtil.addEvent(dropoff, 'click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        KTUtil.remove(this);
        Plugin.hideSubmenuDropdown(el, true);
      });
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    pauseDropdownHover: function pauseDropdownHover(time) {
      var date = new Date();
      the.pauseDropdownHoverTime = date.getTime() + time;
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    resumeDropdownHover: function resumeDropdownHover() {
      var date = new Date();
      return date.getTime() > the.pauseDropdownHoverTime ? true : false;
    },

    /**
     * Reset menu's current active item
     * @returns {KTMenu}
     */
    resetActiveItem: function resetActiveItem(item) {
      var list;
      var parents;
      list = element.querySelectorAll('.kt-menu__item--active');

      for (var i = 0, len = list.length; i < len; i++) {
        var el = list[0];
        KTUtil.removeClass(el, 'kt-menu__item--active');
        KTUtil.hide(KTUtil.child(el, '.kt-menu__submenu'));
        parents = KTUtil.parents(el, '.kt-menu__item--submenu') || [];

        for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
          var el_ = parents[i];
          KTUtil.removeClass(el_, 'kt-menu__item--open');
          KTUtil.hide(KTUtil.child(el_, '.kt-menu__submenu'));
        }
      } // close open submenus


      if (the.options.accordion.expandAll === false) {
        if (list = element.querySelectorAll('.kt-menu__item--open')) {
          for (var i = 0, len = list.length; i < len; i++) {
            KTUtil.removeClass(parents[0], 'kt-menu__item--open');
          }
        }
      }
    },

    /**
     * Sets menu's active item
     * @returns {KTMenu}
     */
    setActiveItem: function setActiveItem(item) {
      // reset current active item
      Plugin.resetActiveItem();
      var parents = KTUtil.parents(item, '.kt-menu__item--submenu') || [];

      for (var i = 0, len = parents.length; i < len; i++) {
        KTUtil.addClass(KTUtil.get(parents[i]), 'kt-menu__item--open');
      }

      KTUtil.addClass(KTUtil.get(item), 'kt-menu__item--active');
    },

    /**
     * Returns page breadcrumbs for the menu's active item
     * @returns {KTMenu}
     */
    getBreadcrumbs: function getBreadcrumbs(item) {
      var query;
      var breadcrumbs = [];
      var link = KTUtil.child(item, '.kt-menu__link');
      breadcrumbs.push({
        text: query = KTUtil.child(link, '.kt-menu__link-text') ? query.innerHTML : '',
        title: link.getAttribute('title'),
        href: link.getAttribute('href')
      });
      var parents = KTUtil.parents(item, '.kt-menu__item--submenu');

      for (var i = 0, len = parents.length; i < len; i++) {
        var submenuLink = KTUtil.child(parents[i], '.kt-menu__link');
        breadcrumbs.push({
          text: query = KTUtil.child(submenuLink, '.kt-menu__link-text') ? query.innerHTML : '',
          title: submenuLink.getAttribute('title'),
          href: submenuLink.getAttribute('href')
        });
      }

      return breadcrumbs.reverse();
    },

    /**
     * Returns page title for the menu's active item
     * @returns {KTMenu}
     */
    getPageTitle: function getPageTitle(item) {
      var query;
      return query = KTUtil.child(item, '.kt-menu__link-text') ? query.innerHTML : '';
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, target, e) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, target, e);
            }
          } else {
            return event.handler.call(this, target, e);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    },
    removeEvent: function removeEvent(name) {
      if (the.events[name]) {
        delete the.events[name];
      }
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Update scroll
   */


  the.scrollUpdate = function () {
    return Plugin.scrollUpdate();
  };
  /**
   * Re-init scroll
   */


  the.scrollReInit = function () {
    return Plugin.scrollInit();
  };
  /**
   * Scroll top
   */


  the.scrollTop = function () {
    return Plugin.scrollTop();
  };
  /**
   * Set active menu item
   */


  the.setActiveItem = function (item) {
    return Plugin.setActiveItem(item);
  };

  the.reload = function () {
    return Plugin.reload();
  };

  the.update = function (options) {
    return Plugin.update(options);
  };
  /**
   * Set breadcrumb for menu item
   */


  the.getBreadcrumbs = function (item) {
    return Plugin.getBreadcrumbs(item);
  };
  /**
   * Set page title for menu item
   */


  the.getPageTitle = function (item) {
    return Plugin.getPageTitle(item);
  };
  /**
   * Get submenu mode
   */


  the.getSubmenuMode = function (el) {
    return Plugin.getSubmenuMode(el);
  };
  /**
   * Hide dropdown
   * @returns {Object}
   */


  the.hideDropdown = function (item) {
    Plugin.hideSubmenuDropdown(item, true);
  };
  /**
   * Hide dropdowns
   * @returns {Object}
   */


  the.hideDropdowns = function () {
    Plugin.hideSubmenuDropdowns();
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.pauseDropdownHover = function (time) {
    Plugin.pauseDropdownHover(time);
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.resumeDropdownHover = function () {
    return Plugin.resumeDropdownHover();
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  the.off = function (name) {
    return Plugin.removeEvent(name);
  };

  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Handle plugin on window resize

  KTUtil.addResizeHandler(function () {
    if (init) {
      the.reload();
    }
  }); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTMenu;
} // Plugin global lazy initialization


document.addEventListener("click", function (e) {
  var body = KTUtil.get('body');
  var query;

  if (query = body.querySelectorAll('.kt-menu__nav .kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)[data-ktmenu-submenu-toggle="click"]')) {
    for (var i = 0, len = query.length; i < len; i++) {
      var element = query[i].closest('.kt-menu__nav').parentNode;

      if (element) {
        var the = KTUtil.data(element).get('menu');

        if (!the) {
          break;
        }

        if (!the || the.getSubmenuMode() !== 'dropdown') {
          break;
        }

        if (e.target !== element && element.contains(e.target) === false) {
          the.hideDropdowns();
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/offcanvas.js":
/*!***************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/offcanvas.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTOffcanvas = function KTOffcanvas(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {}; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    construct: function construct(options) {
      if (KTUtil.data(element).has('offcanvas')) {
        the = KTUtil.data(element).get('offcanvas');
      } else {
        // reset offcanvas
        Plugin.init(options); // build offcanvas

        Plugin.build();
        KTUtil.data(element).set('offcanvas', the);
      }

      return the;
    },
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.overlay;
      the.classBase = the.options.baseClass;
      the.classShown = the.classBase + '--on';
      the.classOverlay = the.classBase + '-overlay';
      the.state = KTUtil.hasClass(element, the.classShown) ? 'shown' : 'hidden';
    },
    build: function build() {
      // offcanvas toggle
      if (the.options.toggleBy) {
        if (typeof the.options.toggleBy === 'string') {
          KTUtil.addEvent(the.options.toggleBy, 'click', function (e) {
            e.preventDefault();
            Plugin.toggle();
          });
        } else if (the.options.toggleBy && the.options.toggleBy[0]) {
          if (the.options.toggleBy[0].target) {
            for (var i in the.options.toggleBy) {
              KTUtil.addEvent(the.options.toggleBy[i].target, 'click', function (e) {
                e.preventDefault();
                Plugin.toggle();
              });
            }
          } else {
            for (var i in the.options.toggleBy) {
              KTUtil.addEvent(the.options.toggleBy[i], 'click', function (e) {
                e.preventDefault();
                Plugin.toggle();
              });
            }
          }
        } else if (the.options.toggleBy && the.options.toggleBy.target) {
          KTUtil.addEvent(the.options.toggleBy.target, 'click', function (e) {
            e.preventDefault();
            Plugin.toggle();
          });
        }
      } // offcanvas close


      var closeBy = KTUtil.get(the.options.closeBy);

      if (closeBy) {
        KTUtil.addEvent(closeBy, 'click', function (e) {
          e.preventDefault();
          Plugin.hide();
        });
      } // Window resize

      /*
      KTUtil.addResizeHandler(function() {
          if (parseInt(KTUtil.css(element, 'left')) >= 0 || parseInt(KTUtil.css(element, 'right') >= 0) || KTUtil.css(element, 'position') != 'fixed') {
              KTUtil.css(element, 'opacity', '1');
          }
      });
      */

    },
    isShown: function isShown(target) {
      return the.state == 'shown' ? true : false;
    },
    toggle: function toggle() {
      ;
      Plugin.eventTrigger('toggle');

      if (the.state == 'shown') {
        Plugin.hide(this);
      } else {
        Plugin.show(this);
      }
    },
    show: function show(target) {
      if (the.state == 'shown') {
        return;
      }

      Plugin.eventTrigger('beforeShow');
      Plugin.togglerClass(target, 'show'); // Offcanvas panel

      KTUtil.addClass(body, the.classShown);
      KTUtil.addClass(element, the.classShown); //KTUtil.css(element, 'opacity', '1');

      the.state = 'shown';

      if (the.options.overlay) {
        the.overlay = KTUtil.insertAfter(document.createElement('DIV'), element);
        KTUtil.addClass(the.overlay, the.classOverlay);
        KTUtil.addEvent(the.overlay, 'click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          Plugin.hide(target);
        });
      }

      Plugin.eventTrigger('afterShow');
    },
    hide: function hide(target) {
      if (the.state == 'hidden') {
        return;
      }

      Plugin.eventTrigger('beforeHide');
      Plugin.togglerClass(target, 'hide');
      KTUtil.removeClass(body, the.classShown);
      KTUtil.removeClass(element, the.classShown);
      the.state = 'hidden';

      if (the.options.overlay && the.overlay) {
        KTUtil.remove(the.overlay);
      }
      /*
      KTUtil.transitionEnd(element, function() {
          KTUtil.css(element, 'opacity', '0');
      });
      */


      Plugin.eventTrigger('afterHide');
    },
    togglerClass: function togglerClass(target, mode) {
      // Toggler
      var id = KTUtil.attr(target, 'id');
      var toggleBy;

      if (the.options.toggleBy && the.options.toggleBy[0] && the.options.toggleBy[0].target) {
        for (var i in the.options.toggleBy) {
          if (the.options.toggleBy[i].target === id) {
            toggleBy = the.options.toggleBy[i];
          }
        }
      } else if (the.options.toggleBy && the.options.toggleBy.target) {
        toggleBy = the.options.toggleBy;
      }

      if (toggleBy) {
        var el = KTUtil.get(toggleBy.target);

        if (mode === 'show') {
          KTUtil.addClass(el, toggleBy.state);
        }

        if (mode === 'hide') {
          KTUtil.removeClass(el, toggleBy.state);
        }
      }
    },
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  the.setDefaults = function (options) {
    defaultOptions = options;
  };

  the.isShown = function () {
    return Plugin.isShown();
  };

  the.hide = function () {
    return Plugin.hide();
  };

  the.show = function () {
    return Plugin.show();
  };

  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTOffcanvas;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/portlet.js":
/*!*************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/portlet.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // plugin setup

var KTPortlet = function KTPortlet(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    bodyToggleSpeed: 400,
    tooltips: true,
    tools: {
      toggle: {
        collapse: 'Collapse',
        expand: 'Expand'
      },
      reload: 'Reload',
      remove: 'Remove',
      fullscreen: {
        on: 'Fullscreen',
        off: 'Exit Fullscreen'
      }
    },
    sticky: {
      offset: 300,
      zIndex: 101
    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('portlet')) {
        the = KTUtil.data(element).get('portlet');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('portlet', the);
      }

      return the;
    },

    /**
     * Init portlet
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.head = KTUtil.child(element, '.kt-portlet__head');
      the.foot = KTUtil.child(element, '.kt-portlet__foot');

      if (KTUtil.child(element, '.kt-portlet__body')) {
        the.body = KTUtil.child(element, '.kt-portlet__body');
      } else if (KTUtil.child(element, '.kt-form')) {
        the.body = KTUtil.child(element, '.kt-form');
      }
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Remove
      var remove = KTUtil.find(the.head, '[data-ktportlet-tool=remove]');

      if (remove) {
        KTUtil.addEvent(remove, 'click', function (e) {
          e.preventDefault();
          Plugin.remove();
        });
      } // Reload


      var reload = KTUtil.find(the.head, '[data-ktportlet-tool=reload]');

      if (reload) {
        KTUtil.addEvent(reload, 'click', function (e) {
          e.preventDefault();
          Plugin.reload();
        });
      } // Toggle


      var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

      if (toggle) {
        KTUtil.addEvent(toggle, 'click', function (e) {
          e.preventDefault();
          Plugin.toggle();
        });
      } //== Fullscreen


      var fullscreen = KTUtil.find(the.head, '[data-ktportlet-tool=fullscreen]');

      if (fullscreen) {
        KTUtil.addEvent(fullscreen, 'click', function (e) {
          e.preventDefault();
          Plugin.fullscreen();
        });
      }

      Plugin.setupTooltips();
    },

    /**
     * Enable stickt mode
     */
    initSticky: function initSticky() {
      var lastScrollTop = 0;
      var offset = the.options.sticky.offset;

      if (!the.head) {
        return;
      }

      window.addEventListener('scroll', Plugin.onScrollSticky);
    },

    /**
     * Window scroll handle event for sticky portlet
     */
    onScrollSticky: function onScrollSticky(e) {
      var offset = the.options.sticky.offset;
      if (isNaN(offset)) return;
      var st = KTUtil.getScrollTop();

      if (st >= offset && KTUtil.hasClass(body, 'kt-portlet--sticky') === false) {
        Plugin.eventTrigger('stickyOn');
        KTUtil.addClass(body, 'kt-portlet--sticky');
        KTUtil.addClass(element, 'kt-portlet--sticky');
        Plugin.updateSticky();
      } else if (st * 1.5 <= offset && KTUtil.hasClass(body, 'kt-portlet--sticky')) {
        // back scroll mode
        Plugin.eventTrigger('stickyOff');
        KTUtil.removeClass(body, 'kt-portlet--sticky');
        KTUtil.removeClass(element, 'kt-portlet--sticky');
        Plugin.resetSticky();
      }
    },
    updateSticky: function updateSticky() {
      if (!the.head) {
        return;
      }

      var top;

      if (KTUtil.hasClass(body, 'kt-portlet--sticky')) {
        if (the.options.sticky.position.top instanceof Function) {
          top = parseInt(the.options.sticky.position.top.call(this, the));
        } else {
          top = parseInt(the.options.sticky.position.top);
        }

        var left;

        if (the.options.sticky.position.left instanceof Function) {
          left = parseInt(the.options.sticky.position.left.call(this, the));
        } else {
          left = parseInt(the.options.sticky.position.left);
        }

        var right;

        if (the.options.sticky.position.right instanceof Function) {
          right = parseInt(the.options.sticky.position.right.call(this, the));
        } else {
          right = parseInt(the.options.sticky.position.right);
        }

        KTUtil.css(the.head, 'z-index', the.options.sticky.zIndex);
        KTUtil.css(the.head, 'top', top + 'px');
        KTUtil.css(the.head, 'left', left + 'px');
        KTUtil.css(the.head, 'right', right + 'px');
      }
    },
    resetSticky: function resetSticky() {
      if (!the.head) {
        return;
      }

      if (KTUtil.hasClass(body, 'kt-portlet--sticky') === false) {
        KTUtil.css(the.head, 'z-index', '');
        KTUtil.css(the.head, 'top', '');
        KTUtil.css(the.head, 'left', '');
        KTUtil.css(the.head, 'right', '');
      }
    },

    /**
     * Remove portlet
     */
    remove: function remove() {
      if (Plugin.eventTrigger('beforeRemove') === false) {
        return;
      }

      if (KTUtil.hasClass(body, 'kt-portlet--fullscreen') && KTUtil.hasClass(element, 'kt-portlet--fullscreen')) {
        Plugin.fullscreen('off');
      }

      Plugin.removeTooltips();
      KTUtil.remove(element);
      Plugin.eventTrigger('afterRemove');
    },

    /**
     * Set content
     */
    setContent: function setContent(html) {
      if (html) {
        the.body.innerHTML = html;
      }
    },

    /**
     * Get body
     */
    getBody: function getBody() {
      return the.body;
    },

    /**
     * Get self
     */
    getSelf: function getSelf() {
      return element;
    },

    /**
     * Setup tooltips
     */
    setupTooltips: function setupTooltips() {
      if (the.options.tooltips) {
        var collapsed = KTUtil.hasClass(element, 'kt-portlet--collapse') || KTUtil.hasClass(element, 'kt-portlet--collapsed');
        var fullscreenOn = KTUtil.hasClass(body, 'kt-portlet--fullscreen') && KTUtil.hasClass(element, 'kt-portlet--fullscreen'); //== Remove

        var remove = KTUtil.find(the.head, '[data-ktportlet-tool=remove]');

        if (remove) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(remove, {
            title: the.options.tools.remove,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(remove).set('tooltip', tip);
        } //== Reload


        var reload = KTUtil.find(the.head, '[data-ktportlet-tool=reload]');

        if (reload) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(reload, {
            title: the.options.tools.reload,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(reload).set('tooltip', tip);
        } //== Toggle


        var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

        if (toggle) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(toggle, {
            title: collapsed ? the.options.tools.toggle.expand : the.options.tools.toggle.collapse,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(toggle).set('tooltip', tip);
        } //== Fullscreen


        var fullscreen = KTUtil.find(the.head, '[data-ktportlet-tool=fullscreen]');

        if (fullscreen) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(fullscreen, {
            title: fullscreenOn ? the.options.tools.fullscreen.off : the.options.tools.fullscreen.on,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(fullscreen).set('tooltip', tip);
        }
      }
    },

    /**
     * Setup tooltips
     */
    removeTooltips: function removeTooltips() {
      if (the.options.tooltips) {
        //== Remove
        var remove = KTUtil.find(the.head, '[data-ktportlet-tool=remove]');

        if (remove && KTUtil.data(remove).has('tooltip')) {
          KTUtil.data(remove).get('tooltip').dispose();
        } //== Reload


        var reload = KTUtil.find(the.head, '[data-ktportlet-tool=reload]');

        if (reload && KTUtil.data(reload).has('tooltip')) {
          KTUtil.data(reload).get('tooltip').dispose();
        } //== Toggle


        var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

        if (toggle && KTUtil.data(toggle).has('tooltip')) {
          KTUtil.data(toggle).get('tooltip').dispose();
        } //== Fullscreen


        var fullscreen = KTUtil.find(the.head, '[data-ktportlet-tool=fullscreen]');

        if (fullscreen && KTUtil.data(fullscreen).has('tooltip')) {
          KTUtil.data(fullscreen).get('tooltip').dispose();
        }
      }
    },

    /**
     * Reload
     */
    reload: function reload() {
      Plugin.eventTrigger('reload');
    },

    /**
     * Toggle
     */
    toggle: function toggle() {
      if (KTUtil.hasClass(element, 'kt-portlet--collapse') || KTUtil.hasClass(element, 'kt-portlet--collapsed')) {
        Plugin.expand();
      } else {
        Plugin.collapse();
      }
    },

    /**
     * Collapse
     */
    collapse: function collapse() {
      if (Plugin.eventTrigger('beforeCollapse') === false) {
        return;
      }

      KTUtil.slideUp(the.body, the.options.bodyToggleSpeed, function () {
        Plugin.eventTrigger('afterCollapse');
      });
      KTUtil.addClass(element, 'kt-portlet--collapse');
      var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

      if (toggle && KTUtil.data(toggle).has('tooltip')) {
        KTUtil.data(toggle).get('tooltip').updateTitleContent(the.options.tools.toggle.expand);
      }
    },

    /**
     * Expand
     */
    expand: function expand() {
      if (Plugin.eventTrigger('beforeExpand') === false) {
        return;
      }

      KTUtil.slideDown(the.body, the.options.bodyToggleSpeed, function () {
        Plugin.eventTrigger('afterExpand');
      });
      KTUtil.removeClass(element, 'kt-portlet--collapse');
      KTUtil.removeClass(element, 'kt-portlet--collapsed');
      var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

      if (toggle && KTUtil.data(toggle).has('tooltip')) {
        KTUtil.data(toggle).get('tooltip').updateTitleContent(the.options.tools.toggle.collapse);
      }
    },

    /**
     * fullscreen
     */
    fullscreen: function fullscreen(mode) {
      var d = {};
      var speed = 300;

      if (mode === 'off' || KTUtil.hasClass(body, 'kt-portlet--fullscreen') && KTUtil.hasClass(element, 'kt-portlet--fullscreen')) {
        Plugin.eventTrigger('beforeFullscreenOff');
        KTUtil.removeClass(body, 'kt-portlet--fullscreen');
        KTUtil.removeClass(element, 'kt-portlet--fullscreen');
        Plugin.removeTooltips();
        Plugin.setupTooltips();

        if (the.foot) {
          KTUtil.css(the.body, 'margin-bottom', '');
          KTUtil.css(the.foot, 'margin-top', '');
        }

        Plugin.eventTrigger('afterFullscreenOff');
      } else {
        Plugin.eventTrigger('beforeFullscreenOn');
        KTUtil.addClass(element, 'kt-portlet--fullscreen');
        KTUtil.addClass(body, 'kt-portlet--fullscreen');
        Plugin.removeTooltips();
        Plugin.setupTooltips();

        if (the.foot) {
          var height1 = parseInt(KTUtil.css(the.foot, 'height'));
          var height2 = parseInt(KTUtil.css(the.foot, 'height')) + parseInt(KTUtil.css(the.head, 'height'));
          KTUtil.css(the.body, 'margin-bottom', height1 + 'px');
          KTUtil.css(the.foot, 'margin-top', '-' + height2 + 'px');
        }

        Plugin.eventTrigger('afterFullscreenOn');
      }
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.remove = function () {
    return Plugin.remove(html);
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.initSticky = function () {
    return Plugin.initSticky();
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.updateSticky = function () {
    return Plugin.updateSticky();
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.resetSticky = function () {
    return Plugin.resetSticky();
  };
  /**
   * Destroy sticky portlet
   */


  the.destroySticky = function () {
    Plugin.resetSticky();
    window.removeEventListener('scroll', Plugin.onScrollSticky);
  };
  /**
   * Reload portlet
   * @returns {KTPortlet}
   */


  the.reload = function () {
    return Plugin.reload();
  };
  /**
   * Set portlet content
   * @returns {KTPortlet}
   */


  the.setContent = function (html) {
    return Plugin.setContent(html);
  };
  /**
   * Toggle portlet
   * @returns {KTPortlet}
   */


  the.toggle = function () {
    return Plugin.toggle();
  };
  /**
   * Collapse portlet
   * @returns {KTPortlet}
   */


  the.collapse = function () {
    return Plugin.collapse();
  };
  /**
   * Expand portlet
   * @returns {KTPortlet}
   */


  the.expand = function () {
    return Plugin.expand();
  };
  /**
   * Fullscreen portlet
   * @returns {MPortlet}
   */


  the.fullscreen = function () {
    return Plugin.fullscreen('on');
  };
  /**
   * Fullscreen portlet
   * @returns {MPortlet}
   */


  the.unFullscreen = function () {
    return Plugin.fullscreen('off');
  };
  /**
   * Get portletbody
   * @returns {jQuery}
   */


  the.getBody = function () {
    return Plugin.getBody();
  };
  /**
   * Get portletbody
   * @returns {jQuery}
   */


  the.getSelf = function () {
    return Plugin.getSelf();
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTPortlet;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/scrolltop.js":
/*!***************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/scrolltop.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTScrolltop = function KTScrolltop(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    offset: 300,
    speed: 600,
    toggleClass: 'kt-scrolltop--on'
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {mscrolltop}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('scrolltop')) {
        the = KTUtil.data(element).get('scrolltop');
      } else {
        // reset scrolltop
        Plugin.init(options); // build scrolltop

        Plugin.build();
        KTUtil.data(element).set('scrolltop', the);
      }

      return the;
    },

    /**
     * Handles subscrolltop click toggle
     * @returns {mscrolltop}
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },
    build: function build() {
      // handle window scroll
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.addEventListener('touchend', function () {
          Plugin.handle();
        });
        window.addEventListener('touchcancel', function () {
          Plugin.handle();
        });
        window.addEventListener('touchleave', function () {
          Plugin.handle();
        });
      } else {
        window.addEventListener('scroll', function () {
          Plugin.handle();
        });
      } // handle button click 


      KTUtil.addEvent(element, 'click', Plugin.scroll);
    },

    /**
     * Handles scrolltop click scrollTop
     */
    handle: function handle() {
      var pos = window.pageYOffset; // current vertical position

      if (pos > the.options.offset) {
        KTUtil.addClass(body, the.options.toggleClass);
      } else {
        KTUtil.removeClass(body, the.options.toggleClass);
      }
    },

    /**
     * Handles scrolltop click scrollTop
     */
    scroll: function scroll(e) {
      e.preventDefault();
      KTUtil.scrollTop(0, the.options.speed);
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options 
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Get subscrolltop mode
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Set scrolltop content
   * @returns {mscrolltop}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTScrolltop;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/toggle.js":
/*!************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/toggle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // plugin setup

var KTToggle = function KTToggle(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    togglerState: '',
    targetState: ''
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('toggle')) {
        the = KTUtil.data(element).get('toggle');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('toggle', the);
      }

      return the;
    },

    /**
     * Handles subtoggle click toggle
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.target = KTUtil.get(the.options.target);
      the.targetState = the.options.targetState;
      the.togglerState = the.options.togglerState;
      the.state = KTUtil.hasClasses(the.target, the.targetState) ? 'on' : 'off';
    },

    /**
     * Setup toggle
     */
    build: function build() {
      KTUtil.addEvent(element, 'mouseup', Plugin.toggle);
    },

    /**
     * Handles offcanvas click toggle
     */
    toggle: function toggle(e) {
      Plugin.eventTrigger('beforeToggle');

      if (the.state == 'off') {
        Plugin.toggleOn();
      } else {
        Plugin.toggleOff();
      }

      Plugin.eventTrigger('afterToggle');
      e.preventDefault();
      return the;
    },

    /**
     * Handles toggle click toggle
     */
    toggleOn: function toggleOn() {
      Plugin.eventTrigger('beforeOn');
      KTUtil.addClass(the.target, the.targetState);

      if (the.togglerState) {
        KTUtil.addClass(element, the.togglerState);
      }

      the.state = 'on';
      Plugin.eventTrigger('afterOn');
      Plugin.eventTrigger('toggle');
      return the;
    },

    /**
     * Handles toggle click toggle
     */
    toggleOff: function toggleOff() {
      Plugin.eventTrigger('beforeOff');
      KTUtil.removeClass(the.target, the.targetState);

      if (the.togglerState) {
        KTUtil.removeClass(element, the.togglerState);
      }

      the.state = 'off';
      Plugin.eventTrigger('afterOff');
      Plugin.eventTrigger('toggle');
      return the;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options 
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Get toggle state 
   */


  the.getState = function () {
    return the.state;
  };
  /**
   * Toggle 
   */


  the.toggle = function () {
    return Plugin.toggle();
  };
  /**
   * Toggle on 
   */


  the.toggleOn = function () {
    return Plugin.toggleOn();
  };
  /**
   * Toggle off 
   */


  the.toggleOff = function () {
    return Plugin.toggleOff();
  };
  /**
   * Attach event
   * @returns {KTToggle}
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @returns {KTToggle}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTToggle;
}

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/util.js":
/*!**********************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/util.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @class KTUtil  base utilize class that privides helper functions
 */
// Polyfills

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */


if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);

    return null;
  };
}
/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */


(function (elem) {
  for (var i = 0; i < elem.length; i++) {
    if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;

    window[elem[i]].prototype.remove = function () {
      this.parentNode.removeChild(this);
    };
  }
})(['Element', 'CharacterData', 'DocumentType']); //
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//


(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})(); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); // Global variables


window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function () {
  var resizeHandlers = [];
  /** @type {object} breakpoints The device width breakpoints **/

  var breakpoints = {
    sm: 544,
    // Small screen / phone
    md: 768,
    // Medium screen / tablet
    lg: 1024,
    // Large screen / desktop
    xl: 1200 // Extra large screen / wide desktop

  };
  /**
   * Handle window resize event with some
   * delay to attach event handlers upon resize complete
   */

  var _windowResizeHandler = function _windowResizeHandler() {
    var _runResizeHandlers = function _runResizeHandlers() {
      // reinitialize other subscribed elements
      for (var i = 0; i < resizeHandlers.length; i++) {
        var each = resizeHandlers[i];
        each.call();
      }
    };

    var timeout = false; // holder for timeout id

    var delay = 250; // delay after event is "complete" to run callback

    window.addEventListener('resize', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        _runResizeHandlers();
      }, delay); // wait 50ms until window resize finishes.
    });
  };

  return {
    /**
     * Class main initializer.
     * @param {object} options.
     * @returns null
     */
    //main function to initiate the theme
    init: function init(options) {
      if (options && options.breakpoints) {
        breakpoints = options.breakpoints;
      }

      _windowResizeHandler();
    },

    /**
     * Adds window resize event handler.
     * @param {function} callback function.
     */
    addResizeHandler: function addResizeHandler(callback) {
      resizeHandlers.push(callback);
    },

    /**
     * Removes window resize event handler.
     * @param {function} callback function.
     */
    removeResizeHandler: function removeResizeHandler(callback) {
      for (var i = 0; i < resizeHandlers.length; i++) {
        if (callback === resizeHandlers[i]) {
          delete resizeHandlers[i];
        }
      }
    },

    /**
     * Trigger window resize handlers.
     */
    runResizeHandlers: function runResizeHandlers() {
      _runResizeHandlers();
    },
    resize: function resize() {
      if (typeof Event === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
      } else {
        // for IE and other old browsers
        // causes deprecation warning on modern browsers
        var evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
      }
    },

    /**
     * Get GET parameter value from URL.
     * @param {string} paramName Parameter name.
     * @returns {string}
     */
    getURLParam: function getURLParam(paramName) {
      var searchString = window.location.search.substring(1),
          i,
          val,
          params = searchString.split("&");

      for (i = 0; i < params.length; i++) {
        val = params[i].split("=");

        if (val[0] == paramName) {
          return unescape(val[1]);
        }
      }

      return null;
    },

    /**
     * Checks whether current device is mobile touch.
     * @returns {boolean}
     */
    isMobileDevice: function isMobileDevice() {
      return this.getViewPort().width < this.getBreakpoint('lg') ? true : false;
    },

    /**
     * Checks whether current device is desktop.
     * @returns {boolean}
     */
    isDesktopDevice: function isDesktopDevice() {
      return KTUtil.isMobileDevice() ? false : true;
    },

    /**
     * Gets browser window viewport size. Ref:
     * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
     * @returns {object}
     */
    getViewPort: function getViewPort() {
      var e = window,
          a = 'inner';

      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    },

    /**
     * Checks whether given device mode is currently activated.
     * @param {string} mode Responsive mode name(e.g: desktop,
     *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
     * @returns {boolean}
     */
    isInResponsiveRange: function isInResponsiveRange(mode) {
      var breakpoint = this.getViewPort().width;

      if (mode == 'general') {
        return true;
      } else if (mode == 'desktop' && breakpoint >= this.getBreakpoint('lg') + 1) {
        return true;
      } else if (mode == 'tablet' && breakpoint >= this.getBreakpoint('md') + 1 && breakpoint < this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
        return true;
      } else if (mode == 'desktop-and-tablet' && breakpoint >= this.getBreakpoint('md') + 1) {
        return true;
      } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
        return true;
      }

      return false;
    },

    /**
     * Generates unique ID for give prefix.
     * @param {string} prefix Prefix for generated ID
     * @returns {boolean}
     */
    getUniqueID: function getUniqueID(prefix) {
      return prefix + Math.floor(Math.random() * new Date().getTime());
    },

    /**
     * Gets window width for give breakpoint mode.
     * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
     * @returns {number}
     */
    getBreakpoint: function getBreakpoint(mode) {
      return breakpoints[mode];
    },

    /**
     * Checks whether object has property matchs given key path.
     * @param {object} obj Object contains values paired with given key path
     * @param {string} keys Keys path seperated with dots
     * @returns {object}
     */
    isset: function isset(obj, keys) {
      var stone;
      keys = keys || '';

      if (keys.indexOf('[') !== -1) {
        throw new Error('Unsupported object path notation.');
      }

      keys = keys.split('.');

      do {
        if (obj === undefined) {
          return false;
        }

        stone = keys.shift();

        if (!obj.hasOwnProperty(stone)) {
          return false;
        }

        obj = obj[stone];
      } while (keys.length);

      return true;
    },

    /**
     * Gets highest z-index of the given element parents
     * @param {object} el jQuery element object
     * @returns {number}
     */
    getHighestZindex: function getHighestZindex(el) {
      var elem = KTUtil.get(el),
          position,
          value;

      while (elem && elem !== document) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        position = KTUtil.css(elem, 'position');

        if (position === "absolute" || position === "relative" || position === "fixed") {
          // IE returns 0 when zIndex is not specified
          // other browsers return a string
          // we ignore the case of nested elements with an explicit value of 0
          // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
          value = parseInt(KTUtil.css(elem, 'z-index'));

          if (!isNaN(value) && value !== 0) {
            return value;
          }
        }

        elem = elem.parentNode;
      }

      return null;
    },

    /**
     * Checks whether the element has any parent with fixed positionfreg
     * @param {object} el jQuery element object
     * @returns {boolean}
     */
    hasFixedPositionedParent: function hasFixedPositionedParent(el) {
      var position;

      while (el && el !== document) {
        position = KTUtil.css(el, 'position');

        if (position === "fixed") {
          return true;
        }

        el = el.parentNode;
      }

      return false;
    },

    /**
     * Simulates delay
     */
    sleep: function sleep(milliseconds) {
      var start = new Date().getTime();

      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },

    /**
     * Gets randomly generated integer value within given min and max range
     * @param {number} min Range start value
     * @param {number} max Range end value
     * @returns {number}
     */
    getRandomInt: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Checks whether Angular library is included
     * @returns {boolean}
     */
    isAngularVersion: function isAngularVersion() {
      return window.Zone !== undefined ? true : false;
    },
    // jQuery Workarounds
    // Deep extend:  $.extend(true, {}, objA, objB);
    deepExtend: function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (_typeof(obj[key]) === 'object') out[key] = KTUtil.deepExtend(out[key], obj[key]);else out[key] = obj[key];
          }
        }
      }

      return out;
    },
    // extend:  $.extend({}, objA, objB);
    extend: function extend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) continue;

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
        }
      }

      return out;
    },
    get: function get(query) {
      var el;

      if (query === document) {
        return document;
      }

      if (!!(query && query.nodeType === 1)) {
        return query;
      }

      if (el = document.getElementById(query)) {
        return el;
      } else if (el = document.getElementsByTagName(query), el.length > 0) {
        return el[0];
      } else if (el = document.getElementsByClassName(query), el.length > 0) {
        return el[0];
      } else {
        return null;
      }
    },
    getByID: function getByID(query) {
      if (!!(query && query.nodeType === 1)) {
        return query;
      }

      return document.getElementById(query);
    },
    getByTag: function getByTag(query) {
      var el;

      if (el = document.getElementsByTagName(query)) {
        return el[0];
      } else {
        return null;
      }
    },
    getByClass: function getByClass(query) {
      var el;

      if (el = document.getElementsByClassName(query)) {
        return el[0];
      } else {
        return null;
      }
    },

    /**
     * Checks whether the element has given classes
     * @param {object} el jQuery element object
     * @param {string} Classes string
     * @returns {boolean}
     */
    hasClasses: function hasClasses(el, classes) {
      if (!el) {
        return;
      }

      var classesArr = classes.split(" ");

      for (var i = 0; i < classesArr.length; i++) {
        if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
          return false;
        }
      }

      return true;
    },
    hasClass: function hasClass(el, className) {
      if (!el) {
        return;
      }

      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    },
    addClass: function addClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          if (classNames[i] && classNames[i].length > 0) {
            el.classList.add(KTUtil.trim(classNames[i]));
          }
        }
      } else if (!KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className += ' ' + KTUtil.trim(classNames[x]);
        }
      }
    },
    removeClass: function removeClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          el.classList.remove(KTUtil.trim(classNames[i]));
        }
      } else if (KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
        }
      }
    },
    triggerCustomEvent: function triggerCustomEvent(el, eventName, data) {
      var event;

      if (window.CustomEvent) {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    },
    triggerEvent: function triggerEvent(node, eventName) {
      // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
      var doc;

      if (node.ownerDocument) {
        doc = node.ownerDocument;
      } else if (node.nodeType == 9) {
        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
        doc = node;
      } else {
        throw new Error("Invalid node passed to fireEvent: " + node.id);
      }

      if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = ""; // Different events have different event classes.
        // If this switch statement can't map an eventName to an eventClass,
        // the event firing is going to fail.

        switch (eventName) {
          case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.

          case "mouseenter":
          case "mouseleave":
          case "mousedown":
          case "mouseup":
            eventClass = "MouseEvents";
            break;

          case "focus":
          case "change":
          case "blur":
          case "select":
            eventClass = "HTMLEvents";
            break;

          default:
            throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
            break;
        }

        var event = doc.createEvent(eventClass);
        var bubbles = eventName == "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action

        node.dispatchEvent(event, true);
      } else if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events

        node.fireEvent("on" + eventName, event);
      }
    },
    index: function index(elm) {
      elm = KTUtil.get(elm);
      var c = elm.parentNode.children,
          i = 0;

      for (; i < c.length; i++) {
        if (c[i] == elm) return i;
      }
    },
    trim: function trim(string) {
      return string.trim();
    },
    eventTriggered: function eventTriggered(e) {
      if (e.currentTarget.dataset.triggered) {
        return true;
      } else {
        e.currentTarget.dataset.triggered = true;
        return false;
      }
    },
    remove: function remove(el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    },
    find: function find(parent, query) {
      parent = KTUtil.get(parent);

      if (parent) {
        return parent.querySelector(query);
      }
    },
    findAll: function findAll(parent, query) {
      parent = KTUtil.get(parent);

      if (parent) {
        return parent.querySelectorAll(query);
      }
    },
    insertAfter: function insertAfter(el, referenceNode) {
      return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    },
    parents: function parents(elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;

          while (--i >= 0 && matches.item(i) !== this) {}

          return i > -1;
        };
      } // Set up a parent array


      var parents = []; // Push each parent element to the array

      for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {
          if (elem.matches(selector)) {
            parents.push(elem);
          }

          continue;
        }

        parents.push(elem);
      } // Return our parent array


      return parents;
    },
    children: function children(el, selector, log) {
      if (!el || !el.childNodes) {
        return;
      }

      var result = [],
          i = 0,
          l = el.childNodes.length;

      for (var i; i < l; ++i) {
        if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
          result.push(el.childNodes[i]);
        }
      }

      return result;
    },
    child: function child(el, selector, log) {
      var children = KTUtil.children(el, selector, log);
      return children ? children[0] : null;
    },
    matches: function matches(el, selector, log) {
      var p = Element.prototype;

      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };

      if (el && el.tagName) {
        return f.call(el, selector);
      } else {
        return false;
      }
    },
    data: function data(element) {
      element = KTUtil.get(element);
      return {
        set: function set(name, data) {
          if (element == null || element === undefined) {
            return;
          }

          if (element.customDataTag === undefined) {
            window.KTUtilElementDataStoreID++;
            element.customDataTag = window.KTUtilElementDataStoreID;
          }

          if (window.KTUtilElementDataStore[element.customDataTag] === undefined) {
            window.KTUtilElementDataStore[element.customDataTag] = {};
          }

          window.KTUtilElementDataStore[element.customDataTag][name] = data;
        },
        get: function get(name) {
          if (element === undefined) {
            return;
          }

          if (element == null || element.customDataTag === undefined) {
            return null;
          }

          return this.has(name) ? window.KTUtilElementDataStore[element.customDataTag][name] : null;
        },
        has: function has(name) {
          if (element === undefined) {
            return false;
          }

          if (element == null || element.customDataTag === undefined) {
            return false;
          }

          return window.KTUtilElementDataStore[element.customDataTag] && window.KTUtilElementDataStore[element.customDataTag][name] ? true : false;
        },
        remove: function remove(name) {
          if (element && this.has(name)) {
            delete window.KTUtilElementDataStore[element.customDataTag][name];
          }
        }
      };
    },
    outerWidth: function outerWidth(el, margin) {
      var width;

      if (margin === true) {
        width = parseFloat(el.offsetWidth);
        width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));
        return parseFloat(width);
      } else {
        width = parseFloat(el.offsetWidth);
        return width;
      }
    },
    offset: function offset(elem) {
      var rect, win;
      elem = KTUtil.get(elem);

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    height: function height(el) {
      return KTUtil.css(el, 'height');
    },
    visible: function visible(el) {
      return !(el.offsetWidth === 0 && el.offsetHeight === 0);
    },
    attr: function attr(el, name, value) {
      el = KTUtil.get(el);

      if (el == undefined) {
        return;
      }

      if (value !== undefined) {
        el.setAttribute(name, value);
      } else {
        return el.getAttribute(name);
      }
    },
    hasAttr: function hasAttr(el, name) {
      el = KTUtil.get(el);

      if (el == undefined) {
        return;
      }

      return el.getAttribute(name) ? true : false;
    },
    removeAttr: function removeAttr(el, name) {
      el = KTUtil.get(el);

      if (el == undefined) {
        return;
      }

      el.removeAttribute(name);
    },
    animate: function animate(from, to, duration, update, easing, done) {
      /**
       * TinyAnimate.easings
       *  Adapted from jQuery Easing
       */
      var easings = {};
      var easing;

      easings.linear = function (t, b, c, d) {
        return c * t / d + b;
      };

      easing = easings.linear; // Early bail out if called incorrectly

      if (typeof from !== 'number' || typeof to !== 'number' || typeof duration !== 'number' || typeof update !== 'function') {
        return;
      } // Create mock done() function if necessary


      if (typeof done !== 'function') {
        done = function done() {};
      } // Pick implementation (requestAnimationFrame | setTimeout)


      var rAF = window.requestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 50);
      }; // Animation loop


      var canceled = false;
      var change = to - from;

      function loop(timestamp) {
        var time = (timestamp || +new Date()) - start;

        if (time >= 0) {
          update(easing(time, from, change, duration));
        }

        if (time >= 0 && time >= duration) {
          update(to);
          done();
        } else {
          rAF(loop);
        }
      }

      update(from); // Start animation loop

      var start = window.performance && window.performance.now ? window.performance.now() : +new Date();
      rAF(loop);
    },
    actualCss: function actualCss(el, prop, cache) {
      el = KTUtil.get(el);
      var css = '';

      if (el instanceof HTMLElement === false) {
        return;
      }

      if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
        var value; // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden

        css = el.style.cssText;
        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

        if (prop == 'width') {
          value = el.offsetWidth;
        } else if (prop == 'height') {
          value = el.offsetHeight;
        }

        el.style.cssText = css; // store it in cache

        el.setAttribute('kt-hidden-' + prop, value);
        return parseFloat(value);
      } else {
        // store it in cache
        return parseFloat(el.getAttribute('kt-hidden-' + prop));
      }
    },
    actualHeight: function actualHeight(el, cache) {
      return KTUtil.actualCss(el, 'height', cache);
    },
    actualWidth: function actualWidth(el, cache) {
      return KTUtil.actualCss(el, 'width', cache);
    },
    getScroll: function getScroll(element, method) {
      // The passed in `method` value should be 'Top' or 'Left'
      method = 'scroll' + method;
      return element == window || element == document ? self[method == 'scrollTop' ? 'pageYOffset' : 'pageXOffset'] || browserSupportsBoxModel && document.documentElement[method] || document.body[method] : element[method];
    },
    css: function css(el, styleProp, value) {
      el = KTUtil.get(el);

      if (!el) {
        return;
      }

      if (value !== undefined) {
        el.style[styleProp] = value;
      } else {
        var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:

        if (defaultView && defaultView.getComputedStyle) {
          // sanitize property name to css notation
          // (hyphen separated words eg. font-Size)
          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) {
          // IE
          // sanitize property name to camelCase
          styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
          });
          value = el.currentStyle[styleProp]; // convert other units to pixels on IE

          if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return function (value) {
              var oldLeft = el.style.left,
                  oldRsLeft = el.runtimeStyle.left;
              el.runtimeStyle.left = el.currentStyle.left;
              el.style.left = value || 0;
              value = el.style.pixelLeft + "px";
              el.style.left = oldLeft;
              el.runtimeStyle.left = oldRsLeft;
              return value;
            }(value);
          }

          return value;
        }
      }
    },
    slide: function slide(el, dir, speed, callback, recalcMaxHeight) {
      if (!el || dir == 'up' && KTUtil.visible(el) === false || dir == 'down' && KTUtil.visible(el) === true) {
        return;
      }

      speed = speed ? speed : 600;
      var calcHeight = KTUtil.actualHeight(el);
      var calcPaddingTop = false;
      var calcPaddingBottom = false;

      if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
        KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
      }

      if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
        KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
      }

      if (KTUtil.data(el).has('slide-padding-top')) {
        calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
      }

      if (KTUtil.data(el).has('slide-padding-bottom')) {
        calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
      }

      if (dir == 'up') {
        // up
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = calcPaddingTop - value + 'px';
          }, 'linear');
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = calcPaddingBottom - value + 'px';
          }, 'linear');
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = calcHeight - value + 'px';
        }, 'linear', function () {
          callback();
          el.style.height = '';
          el.style.display = 'none';
        });
      } else if (dir == 'down') {
        // down
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = value + 'px';
          }, 'linear', function () {
            el.style.paddingTop = '';
          });
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = value + 'px';
          }, 'linear', function () {
            el.style.paddingBottom = '';
          });
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = value + 'px';
        }, 'linear', function () {
          callback();
          el.style.height = '';
          el.style.display = '';
          el.style.overflow = '';
        });
      }
    },
    slideUp: function slideUp(el, speed, callback) {
      KTUtil.slide(el, 'up', speed, callback);
    },
    slideDown: function slideDown(el, speed, callback) {
      KTUtil.slide(el, 'down', speed, callback);
    },
    show: function show(el, display) {
      if (typeof el !== 'undefined') {
        el.style.display = display ? display : 'block';
      }
    },
    hide: function hide(el) {
      if (typeof el !== 'undefined') {
        el.style.display = 'none';
      }
    },
    addEvent: function addEvent(el, type, handler, one) {
      el = KTUtil.get(el);

      if (typeof el !== 'undefined' && el !== null) {
        el.addEventListener(type, handler);
      }
    },
    removeEvent: function removeEvent(el, type, handler) {
      el = KTUtil.get(el);

      if (el !== null) {
        el.removeEventListener(type, handler);
      }
    },
    on: function on(element, selector, event, handler) {
      if (!selector) {
        return;
      }

      var eventId = KTUtil.getUniqueID('event');

      window.KTUtilDelegatedEventHandlers[eventId] = function (e) {
        var targets = element.querySelectorAll(selector);
        var target = e.target;

        while (target && target !== element) {
          for (var i = 0, j = targets.length; i < j; i++) {
            if (target === targets[i]) {
              handler.call(target, e);
            }
          }

          target = target.parentNode;
        }
      };

      KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      return eventId;
    },
    off: function off(element, event, eventId) {
      if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
        return;
      }

      KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      delete window.KTUtilDelegatedEventHandlers[eventId];
    },
    one: function onetime(el, type, callback) {
      el = KTUtil.get(el);
      el.addEventListener(type, function callee(e) {
        // remove event
        if (e.target && e.target.removeEventListener) {
          e.target.removeEventListener(e.type, callee);
        } // call handler


        return callback(e);
      });
    },
    hash: function hash(str) {
      var hash = 0,
          i,
          chr;
      if (str.length === 0) return hash;

      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }

      return hash;
    },
    animateClass: function animateClass(el, animationName, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.addClass(el, 'animated ' + animationName);
      KTUtil.one(el, animation, function () {
        KTUtil.removeClass(el, 'animated ' + animationName);
      });

      if (callback) {
        KTUtil.one(el, animation, callback);
      }
    },
    transitionEnd: function transitionEnd(el, callback) {
      var transition;
      var transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        WebkitTransition: 'webkitTransitionEnd',
        msTransition: 'msTransitionEnd'
      };

      for (var t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
        }
      }

      KTUtil.one(el, transition, callback);
    },
    animationEnd: function animationEnd(el, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.one(el, animation, callback);
    },
    animateDelay: function animateDelay(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-delay', value);
      }
    },
    animateDuration: function animateDuration(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-duration', value);
      }
    },
    scrollTo: function scrollTo(target, offset, duration) {
      var duration = duration ? duration : 500;
      var target = KTUtil.get(target);
      var targetPos = target ? KTUtil.offset(target).top : 0;
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var from, to;

      if (targetPos > scrollPos) {
        from = targetPos;
        to = scrollPos;
      } else {
        from = scrollPos;
        to = targetPos;
      }

      if (offset) {
        to += offset;
      }

      KTUtil.animate(from, to, duration, function (value) {
        document.documentElement.scrollTop = value;
        document.body.parentNode.scrollTop = value;
        document.body.scrollTop = value;
      }); //, easing, done
    },
    scrollTop: function scrollTop(offset, duration) {
      KTUtil.scrollTo(null, offset, duration);
    },
    isArray: function isArray(obj) {
      return obj && Array.isArray(obj);
    },
    ready: function ready(callback) {
      if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },
    isEmpty: function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    },
    numberString: function numberString(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;

      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }

      return x1 + x2;
    },
    detectIE: function detectIE() {
      var ua = window.navigator.userAgent; // Test values; Uncomment to check result …
      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
      // Edge 12 (Spartan)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
      // Edge 13
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      } // other browser


      return false;
    },
    isRTL: function isRTL() {
      return KTUtil.attr(KTUtil.get('html'), 'direction') == 'rtl';
    },
    //
    // Scroller
    scrollInit: function scrollInit(element, options) {
      if (!element) return; // Define init function

      function init() {
        var ps;
        var height;

        if (options.height instanceof Function) {
          height = parseInt(options.height.call());
        } else {
          height = parseInt(options.height);
        } // Destroy scroll on table and mobile modes


        if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isInResponsiveRange('tablet-and-mobile')) {
          ps = KTUtil.data(element).get('ps');

          if (ps) {
            if (options.resetHeightOnDestroy) {
              KTUtil.css(element, 'height', 'auto');
            } else {
              KTUtil.css(element, 'overflow', 'auto');

              if (height > 0) {
                KTUtil.css(element, 'height', height + 'px');
              }
            }

            ps.destroy();
            ps = KTUtil.data(element).remove('ps');
          } else if (height > 0) {
            KTUtil.css(element, 'overflow', 'auto');
            KTUtil.css(element, 'height', height + 'px');
          }

          return;
        }

        if (height > 0) {
          KTUtil.css(element, 'height', height + 'px');
        }

        if (options.desktopNativeScroll) {
          KTUtil.css(element, 'overflow', 'auto');
          return;
        } // Init scroll


        KTUtil.css(element, 'overflow', 'hidden');
        ps = KTUtil.data(element).get('ps');

        if (ps) {
          ps.update();
        } else {
          KTUtil.addClass(element, 'kt-scroll');
          ps = new PerfectScrollbar(element, {
            wheelSpeed: 0.5,
            swipeEasing: true,
            wheelPropagation: options.windowScroll === false ? false : true,
            minScrollbarLength: 40,
            maxScrollbarLength: 300,
            suppressScrollX: KTUtil.attr(element, 'data-scroll-x') != 'true' ? true : false
          });
          KTUtil.data(element).set('ps', ps);
        } // Remember scroll position in cookie


        var uid = KTUtil.attr(element, 'id');

        if (options.rememberPosition === true && Cookies && uid) {
          if (Cookies.get(uid)) {
            var pos = parseInt(Cookies.get(uid));

            if (pos > 0) {
              element.scrollTop = pos;
            }
          }

          element.addEventListener('ps-scroll-y', function () {
            Cookies.set(uid, element.scrollTop);
          });
        }
      } // Init


      init(); // Handle window resize

      if (options.handleWindowResize) {
        KTUtil.addResizeHandler(function () {
          init();
        });
      }
    },
    scrollUpdate: function scrollUpdate(element) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.update();
      }
    },
    scrollUpdateAll: function scrollUpdateAll(parent) {
      var scrollers = KTUtil.findAll(parent, '.ps');

      for (var i = 0, len = scrollers.length; i < len; i++) {
        KTUtil.scrollUpdate(scrollers[i]);
      }
    },
    scrollDestroy: function scrollDestroy(element) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.destroy();
        ps = KTUtil.data(element).remove('ps');
      }
    },
    setHTML: function setHTML(el, html) {
      if (KTUtil.get(el)) {
        KTUtil.get(el).innerHTML = html;
      }
    },
    getHTML: function getHTML(el) {
      if (KTUtil.get(el)) {
        return KTUtil.get(el).innerHTML;
      }
    },
    getDocumentHeight: function getDocumentHeight() {
      var body = document.body;
      var html = document.documentElement;
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    },
    getScrollTop: function getScrollTop() {
      return (document.scrollingElement || document.documentElement).scrollTop;
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTUtil;
} // Initialize KTUtil class on document ready


KTUtil.ready(function () {
  KTUtil.init();
}); // CSS3 Transitions only after page load(.kt-page-loading class added to body tag and remove with JS on page load)

window.onload = function () {
  KTUtil.removeClass(KTUtil.get('body'), 'kt-page--loading');
};

/***/ }),

/***/ "./resources/theme/src/assets/js/global/components/base/wizard.js":
/*!************************************************************************!*\
  !*** ./resources/theme/src/assets/js/global/components/base/wizard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// plugin setup
var KTWizard = function KTWizard(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    startStep: 1,
    clickableSteps: true
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('wizard')) {
        the = KTUtil.data(element).get('wizard');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('wizard', the);
      }

      return the;
    },

    /**
     * Init wizard
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); // Elements

      the.steps = KTUtil.findAll(element, '[data-ktwizard-type="step"]');
      the.btnSubmit = KTUtil.find(element, '[data-ktwizard-type="action-submit"]');
      the.btnNext = KTUtil.find(element, '[data-ktwizard-type="action-next"]');
      the.btnPrev = KTUtil.find(element, '[data-ktwizard-type="action-prev"]');
      the.btnLast = KTUtil.find(element, '[data-ktwizard-type="action-last"]');
      the.btnFirst = KTUtil.find(element, '[data-ktwizard-type="action-first"]'); // Variables

      the.events = [];
      the.currentStep = 1;
      the.stopped = false;
      the.totalSteps = the.steps.length; // Init current step

      if (the.options.startStep > 1) {
        Plugin.goTo(the.options.startStep);
      } // Init UI


      Plugin.updateUI();
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Next button event handler
      KTUtil.addEvent(the.btnNext, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(Plugin.getNextStep(), true);
      }); // Prev button event handler

      KTUtil.addEvent(the.btnPrev, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(Plugin.getPrevStep(), true);
      }); // First button event handler

      KTUtil.addEvent(the.btnFirst, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(1, true);
      }); // Last button event handler

      KTUtil.addEvent(the.btnLast, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(the.totalSteps, true);
      });

      if (the.options.clickableSteps === true) {
        KTUtil.on(element, '[data-ktwizard-type="step"]', 'click', function () {
          var index = Array.prototype.indexOf.call(the.steps, this) + 1;

          if (index !== the.currentStep) {
            Plugin.goTo(index, true);
          }
        });
      }
    },

    /**
     * Handles wizard click wizard
     */
    goTo: function goTo(number, eventHandle) {
      // Skip if this step is already shown
      if (number === the.currentStep || number > the.totalSteps || number < 0) {
        return;
      } // Validate step number


      if (number) {
        number = parseInt(number);
      } else {
        number = Plugin.getNextStep();
      } // Before next and prev events


      var callback;

      if (eventHandle === true) {
        if (number > the.currentStep) {
          callback = Plugin.eventTrigger('beforeNext');
        } else {
          callback = Plugin.eventTrigger('beforePrev');
        }
      } // Skip if stopped


      if (the.stopped === true) {
        the.stopped = false;
        return;
      } // Continue if no exit


      if (callback !== false) {
        // Before change
        if (eventHandle === true) {
          Plugin.eventTrigger('beforeChange');
        } // Set current step


        the.currentStep = number;
        Plugin.updateUI(); // Trigger change event

        if (eventHandle === true) {
          Plugin.eventTrigger('change');
        }
      } // After next and prev events


      if (eventHandle === true) {
        if (number > the.startStep) {
          Plugin.eventTrigger('afterNext');
        } else {
          Plugin.eventTrigger('afterPrev');
        }
      } else {
        // this function called by method, stop for the next call
        the.stopped = true;
      }

      return the;
    },

    /**
     * Cancel
     */
    stop: function stop() {
      the.stopped = true;
    },

    /**
     * Resume
     */
    start: function start() {
      the.stopped = false;
    },

    /**
     * Check last step
     */
    isLastStep: function isLastStep() {
      return the.currentStep === the.totalSteps;
    },

    /**
     * Check first step
     */
    isFirstStep: function isFirstStep() {
      return the.currentStep === 1;
    },

    /**
     * Check between step
     */
    isBetweenStep: function isBetweenStep() {
      return Plugin.isLastStep() === false && Plugin.isFirstStep() === false;
    },

    /**
     * Go to the first step
     */
    updateUI: function updateUI() {
      var stepType = '';
      var index = the.currentStep - 1;

      if (Plugin.isLastStep()) {
        stepType = 'last';
      } else if (Plugin.isFirstStep()) {
        stepType = 'first';
      } else {
        stepType = 'between';
      }

      KTUtil.attr(the.element, 'data-ktwizard-state', stepType); // Steps

      var steps = KTUtil.findAll(the.element, '[data-ktwizard-type="step"]');

      if (steps && steps.length > 0) {
        for (var i = 0, len = steps.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(steps[i], 'data-ktwizard-state', 'current');
          } else {
            if (i < index) {
              KTUtil.attr(steps[i], 'data-ktwizard-state', 'done');
            } else {
              KTUtil.attr(steps[i], 'data-ktwizard-state', 'pending');
            }
          }
        }
      } // Steps Info


      var stepsInfo = KTUtil.findAll(the.element, '[data-ktwizard-type="step-info"]');

      if (stepsInfo && stepsInfo.length > 0) {
        for (var i = 0, len = stepsInfo.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(stepsInfo[i], 'data-ktwizard-state', 'current');
          } else {
            KTUtil.removeAttr(stepsInfo[i], 'data-ktwizard-state');
          }
        }
      } // Steps Content


      var stepsContent = KTUtil.findAll(the.element, '[data-ktwizard-type="step-content"]');

      if (stepsContent && stepsContent.length > 0) {
        for (var i = 0, len = stepsContent.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(stepsContent[i], 'data-ktwizard-state', 'current');
          } else {
            KTUtil.removeAttr(stepsContent[i], 'data-ktwizard-state');
          }
        }
      }
    },

    /**
     * Get next step
     */
    getNextStep: function getNextStep() {
      if (the.totalSteps >= the.currentStep + 1) {
        return the.currentStep + 1;
      } else {
        return the.totalSteps;
      }
    },

    /**
     * Get prev step
     */
    getPrevStep: function getPrevStep() {
      if (the.currentStep - 1 >= 1) {
        return the.currentStep - 1;
      } else {
        return 1;
      }
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, nested) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Go to the next step
   */


  the.goNext = function (eventHandle) {
    return Plugin.goTo(Plugin.getNextStep(), eventHandle);
  };
  /**
   * Go to the prev step
   */


  the.goPrev = function (eventHandle) {
    return Plugin.goTo(Plugin.getPrevStep(), eventHandle);
  };
  /**
   * Go to the last step
   */


  the.goLast = function (eventHandle) {
    return Plugin.goTo(the.totalSteps, eventHandle);
  };
  /**
   * Go to the first step
   */


  the.goFirst = function (eventHandle) {
    return Plugin.goTo(1, eventHandle);
  };
  /**
   * Go to a step
   */


  the.goTo = function (number, eventHandle) {
    return Plugin.goTo(number, eventHandle);
  };
  /**
   * Cancel step
   */


  the.stop = function () {
    return Plugin.stop();
  };
  /**
   * Resume step
   */


  the.start = function () {
    return Plugin.start();
  };
  /**
   * Get current step number
   */


  the.getStep = function () {
    return the.currentStep;
  };
  /**
   * Check last step
   */


  the.isLastStep = function () {
    return Plugin.isLastStep();
  };
  /**
   * Check first step
   */


  the.isFirstStep = function () {
    return Plugin.isFirstStep();
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTWizard;
}

/***/ }),

/***/ "./resources/theme/tools/webpack/scripts.js":
/*!**************************************************!*\
  !*** ./resources/theme/tools/webpack/scripts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Define the output of this file. The output of CSS and JS file will be auto detected.
 *
 * @output js/scripts.bundle
 */
// Core Plugins

window.KTUtil = __webpack_require__(/*! ../../src/assets/js/global/components/base/util */ "./resources/theme/src/assets/js/global/components/base/util.js");
window.KTApp = __webpack_require__(/*! ../../src/assets/js/global/components/base/app */ "./resources/theme/src/assets/js/global/components/base/app.js");
window.KTAvatar = __webpack_require__(/*! ../../src/assets/js/global/components/base/avatar */ "./resources/theme/src/assets/js/global/components/base/avatar.js");
window.KTDialog = __webpack_require__(/*! ../../src/assets/js/global/components/base/dialog */ "./resources/theme/src/assets/js/global/components/base/dialog.js");
window.KTHeader = __webpack_require__(/*! ../../src/assets/js/global/components/base/header */ "./resources/theme/src/assets/js/global/components/base/header.js");
window.KTMenu = __webpack_require__(/*! ../../src/assets/js/global/components/base/menu */ "./resources/theme/src/assets/js/global/components/base/menu.js");
window.KTOffcanvas = __webpack_require__(/*! ../../src/assets/js/global/components/base/offcanvas */ "./resources/theme/src/assets/js/global/components/base/offcanvas.js");
window.KTPortlet = __webpack_require__(/*! ../../src/assets/js/global/components/base/portlet */ "./resources/theme/src/assets/js/global/components/base/portlet.js");
window.KTScrolltop = __webpack_require__(/*! ../../src/assets/js/global/components/base/scrolltop */ "./resources/theme/src/assets/js/global/components/base/scrolltop.js");
window.KTToggle = __webpack_require__(/*! ../../src/assets/js/global/components/base/toggle */ "./resources/theme/src/assets/js/global/components/base/toggle.js");
window.KTWizard = __webpack_require__(/*! ../../src/assets/js/global/components/base/wizard */ "./resources/theme/src/assets/js/global/components/base/wizard.js");

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/plugins.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deviwahyudin/Sites/app/resources/js/plugins.js */"./resources/js/plugins.js");


/***/ })

/******/ });