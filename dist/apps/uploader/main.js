(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/App.module.css":
/*!****************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gain-how-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/App.module.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App_app__JAuqU {\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.App_app__JAuqU .gutter-left {\n  margin-left: 9px;\n}\n\n.App_app__JAuqU .col-span-2 {\n  grid-column: span 2;\n}\n\n.App_app__JAuqU .flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.App_app__JAuqU header {\n  background-color: #143055;\n  color: white;\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.App_app__JAuqU main {\n  padding: 0 36px;\n}\n\n.App_app__JAuqU p {\n  text-align: center;\n}\n\n.App_app__JAuqU h1 {\n  text-align: center;\n  margin-left: 18px;\n  font-size: 24px;\n}\n\n.App_app__JAuqU h2 {\n  text-align: center;\n  font-size: 20px;\n  margin: 40px 0 10px 0;\n}\n\n.App_app__JAuqU .resources {\n  text-align: center;\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-gap: 9px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.App_app__JAuqU .resource {\n  color: #0094ba;\n  height: 36px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 3px 9px;\n  text-decoration: none;\n}\n\n.App_app__JAuqU .resource:hover {\n  background-color: rgba(68, 138, 255, 0.04);\n}\n\n.App_app__JAuqU pre {\n  padding: 9px;\n  border-radius: 4px;\n  background-color: black;\n  color: #eee;\n}\n\n.App_app__JAuqU details {\n  border-radius: 4px;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  padding: 3px 9px;\n  margin-bottom: 9px;\n}\n\n.App_app__JAuqU summary {\n  outline: none;\n  height: 36px;\n  line-height: 36px;\n}\n\n.App_app__JAuqU .github-star-container {\n  margin-top: 12px;\n  line-height: 20px;\n}\n\n.App_app__JAuqU .github-star-container a {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #333;\n}\n\n.App_app__JAuqU .github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n\n.App_app__JAuqU .github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.App_app__JAuqU .github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n", ""]);
// Exports
exports.locals = {
	"app": "App_app__JAuqU"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gain-how-review/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/App.module.css":
/*!****************************!*\
  !*** ./app/App.module.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./App.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/App.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.css */ "./app/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./app/logo.svg");
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.svg */ "./app/star.svg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _App_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], {
    width: "75",
    height: "75"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to uploader!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Resources & Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thank you for using and showing some \u2665 for Nx."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex github-star-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/nrwl/nx",
    target: "_blank",
    rel: "noopener noreferrer"
  }, ' ', "If you like Nx, please give it a star:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "github-star-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _star_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "material-icons",
    alt: ""
  }), "Star"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some links to help you get started."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "resources"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://egghead.io/playlists/scale-react-development-with-nx-4038"
  }, "Scale React Development with Nx (Course)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.dev/latest/react/tutorial/01-create-application"
  }, "Interactive tutorial")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.app/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z",
    fill: "#0E2039"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z",
    fill: "white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gutter-left"
  }, "Nx Cloud")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Next Steps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some things you can do with Nx."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Add UI library"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "View dependency graph"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `nx dep-graph`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Run affected commands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
  `))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    role: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/page-2"
  }, "Page 2")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is the generated root route.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/page-2"
    }, "Click here for page 2."))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/page-2",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/"
    }, "Click here to go back to root page."))
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/logo.svg":
/*!**********************!*\
  !*** ./app/logo.svg ***!
  \**********************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Styles-&-Quick-Wins",
  stroke: "none",
  strokeWidth: 1,
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Nx---Quick-Wins",
  transform: "translate(-476.000000, -1284.000000)",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Logos",
  transform: "translate(-11.000000, 782.000000)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Nx_Flat_White",
  transform: "translate(487.000000, 502.000000)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", {
  id: "Path",
  fill: "#FFFFFF",
  points: "130.68 104.59 97.49 52.71 97.44 96.3 40.24 0 0 0 0 162.57 39.79 162.57 39.92 66.39 96.53 158.26"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", {
  id: "Path",
  fill: "#FFFFFF",
  points: "97.5 41.79 137.24 41.79 137.33 41.33 137.33 0 97.54 0 97.49 41.33"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M198.66,86.86 C189.139872,86.6795216 180.538723,92.516445 177.19,101.43 C182.764789,93.0931021 193.379673,89.7432211 202.73,93.37 C207.05,95.13 212.73,97.97 217.23,96.45 C212.950306,90.4438814 206.034895,86.8725952 198.66,86.86 L198.66,86.86 Z",
  id: "Path",
  fill: "#96D8E9"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M243.75,106.42 C243.75,101.55 241.1,100.42 235.6,98.42 C231.52,97 226.89,95.4 223.52,91 C222.86,90.13 222.25,89.15 221.6,88.11 C220.14382,85.4164099 218.169266,83.037429 215.79,81.11 C212.58,78.75 208.37,77.6 202.91,77.6 C191.954261,77.6076705 182.084192,84.2206169 177.91,94.35 C183.186964,87.0278244 191.956716,83.0605026 200.940147,83.9314609 C209.923578,84.8024193 217.767888,90.3805017 221.54,98.58 C223.424615,101.689762 227.141337,103.174819 230.65,102.22 C236.02,101.07 235.65,106.15 243.76,107.87 L243.75,106.42 Z",
  id: "Path",
  fill: "#48C4E5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M261.46,105.38 L261.46,105.27 C261.34,73.03 235.17,45.45 202.91,45.45 C183.207085,45.4363165 164.821777,55.3450614 154,71.81 L153.79,71.45 L137.23,45.45 L97.5,45.4499858 L135.25,104.57 L98.41,162.57 L137,162.57 L153.79,136.78 L170.88,162.57 L209.48,162.57 L174.48,107.49 C173.899005,106.416838 173.583536,105.220114 173.56,104 C173.557346,96.2203871 176.64661,88.7586448 182.147627,83.2576275 C187.648645,77.7566101 195.110387,74.6673462 202.89,74.67 C219.11,74.67 221.82,84.37 225.32,88.93 C232.23,97.93 246.03,93.99 246.03,105.73 L246.03,105.73 C246.071086,108.480945 247.576662,111.001004 249.979593,112.340896 C252.382524,113.680787 255.317747,113.636949 257.679593,112.225896 C260.041438,110.814842 261.471086,108.250945 261.43,105.5 L261.43,105.5 L261.43,105.38 L261.46,105.38 Z",
  id: "Path",
  fill: "#FFFFFF"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M261.5,113.68 C261.892278,116.421801 261.504116,119.218653 260.38,121.75 C258.18,126.84 254.51,125.14 254.51,125.14 C254.51,125.14 251.35,123.6 253.27,120.65 C255.4,117.36 259.61,117.74 261.5,113.68 Z",
  id: "Path",
  fill: "#FFFFFF"
})))));

function SvgLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "262px",
    height: "163px",
    viewBox: "0 0 262 163",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLogo);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjYycHgiIGhlaWdodD0iMTYzcHgiIHZpZXdCb3g9IjAgMCAyNjIgMTYzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9IlN0eWxlcy0mYW1wOy1RdWljay1XaW5zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTngtLS1RdWljay1XaW5zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDc2LjAwMDAwMCwgLTEyODQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IkxvZ29zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEuMDAwMDAwLCA3ODIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iTnhfRmxhdF9XaGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg3LjAwMDAwMCwgNTAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEzMC42OCAxMDQuNTkgOTcuNDkgNTIuNzEgOTcuNDQgOTYuMyA0MC4yNCAwIDAgMCAwIDE2Mi41NyAzOS43OSAxNjIuNTcgMzkuOTIgNjYuMzkgOTYuNTMgMTU4LjI2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iOTcuNSA0MS43OSAxMzcuMjQgNDEuNzkgMTM3LjMzIDQxLjMzIDEzNy4zMyAwIDk3LjU0IDAgOTcuNDkgNDEuMzMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTk4LjY2LDg2Ljg2IEMxODkuMTM5ODcyLDg2LjY3OTUyMTYgMTgwLjUzODcyMyw5Mi41MTY0NDUgMTc3LjE5LDEwMS40MyBDMTgyLjc2NDc4OSw5My4wOTMxMDIxIDE5My4zNzk2NzMsODkuNzQzMjIxMSAyMDIuNzMsOTMuMzcgQzIwNy4wNSw5NS4xMyAyMTIuNzMsOTcuOTcgMjE3LjIzLDk2LjQ1IEMyMTIuOTUwMzA2LDkwLjQ0Mzg4MTQgMjA2LjAzNDg5NSw4Ni44NzI1OTUyIDE5OC42Niw4Ni44NiBMMTk4LjY2LDg2Ljg2IFoiIGlkPSJQYXRoIiBmaWxsPSIjOTZEOEU5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0My43NSwxMDYuNDIgQzI0My43NSwxMDEuNTUgMjQxLjEsMTAwLjQyIDIzNS42LDk4LjQyIEMyMzEuNTIsOTcgMjI2Ljg5LDk1LjQgMjIzLjUyLDkxIEMyMjIuODYsOTAuMTMgMjIyLjI1LDg5LjE1IDIyMS42LDg4LjExIEMyMjAuMTQzODIsODUuNDE2NDA5OSAyMTguMTY5MjY2LDgzLjAzNzQyOSAyMTUuNzksODEuMTEgQzIxMi41OCw3OC43NSAyMDguMzcsNzcuNiAyMDIuOTEsNzcuNiBDMTkxLjk1NDI2MSw3Ny42MDc2NzA1IDE4Mi4wODQxOTIsODQuMjIwNjE2OSAxNzcuOTEsOTQuMzUgQzE4My4xODY5NjQsODcuMDI3ODI0NCAxOTEuOTU2NzE2LDgzLjA2MDUwMjYgMjAwLjk0MDE0Nyw4My45MzE0NjA5IEMyMDkuOTIzNTc4LDg0LjgwMjQxOTMgMjE3Ljc2Nzg4OCw5MC4zODA1MDE3IDIyMS41NCw5OC41OCBDMjIzLjQyNDYxNSwxMDEuNjg5NzYyIDIyNy4xNDEzMzcsMTAzLjE3NDgxOSAyMzAuNjUsMTAyLjIyIEMyMzYuMDIsMTAxLjA3IDIzNS42NSwxMDYuMTUgMjQzLjc2LDEwNy44NyBMMjQzLjc1LDEwNi40MiBaIiBpZD0iUGF0aCIgZmlsbD0iIzQ4QzRFNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNjEuNDYsMTA1LjM4IEwyNjEuNDYsMTA1LjI3IEMyNjEuMzQsNzMuMDMgMjM1LjE3LDQ1LjQ1IDIwMi45MSw0NS40NSBDMTgzLjIwNzA4NSw0NS40MzYzMTY1IDE2NC44MjE3NzcsNTUuMzQ1MDYxNCAxNTQsNzEuODEgTDE1My43OSw3MS40NSBMMTM3LjIzLDQ1LjQ1IEw5Ny41LDQ1LjQ0OTk4NTggTDEzNS4yNSwxMDQuNTcgTDk4LjQxLDE2Mi41NyBMMTM3LDE2Mi41NyBMMTUzLjc5LDEzNi43OCBMMTcwLjg4LDE2Mi41NyBMMjA5LjQ4LDE2Mi41NyBMMTc0LjQ4LDEwNy40OSBDMTczLjg5OTAwNSwxMDYuNDE2ODM4IDE3My41ODM1MzYsMTA1LjIyMDExNCAxNzMuNTYsMTA0IEMxNzMuNTU3MzQ2LDk2LjIyMDM4NzEgMTc2LjY0NjYxLDg4Ljc1ODY0NDggMTgyLjE0NzYyNyw4My4yNTc2Mjc1IEMxODcuNjQ4NjQ1LDc3Ljc1NjYxMDEgMTk1LjExMDM4Nyw3NC42NjczNDYyIDIwMi44OSw3NC42NyBDMjE5LjExLDc0LjY3IDIyMS44Miw4NC4zNyAyMjUuMzIsODguOTMgQzIzMi4yMyw5Ny45MyAyNDYuMDMsOTMuOTkgMjQ2LjAzLDEwNS43MyBMMjQ2LjAzLDEwNS43MyBDMjQ2LjA3MTA4NiwxMDguNDgwOTQ1IDI0Ny41NzY2NjIsMTExLjAwMTAwNCAyNDkuOTc5NTkzLDExMi4zNDA4OTYgQzI1Mi4zODI1MjQsMTEzLjY4MDc4NyAyNTUuMzE3NzQ3LDExMy42MzY5NDkgMjU3LjY3OTU5MywxMTIuMjI1ODk2IEMyNjAuMDQxNDM4LDExMC44MTQ4NDIgMjYxLjQ3MTA4NiwxMDguMjUwOTQ1IDI2MS40MywxMDUuNSBMMjYxLjQzLDEwNS41IEwyNjEuNDMsMTA1LjM4IEwyNjEuNDYsMTA1LjM4IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2MS41LDExMy42OCBDMjYxLjg5MjI3OCwxMTYuNDIxODAxIDI2MS41MDQxMTYsMTE5LjIxODY1MyAyNjAuMzgsMTIxLjc1IEMyNTguMTgsMTI2Ljg0IDI1NC41MSwxMjUuMTQgMjU0LjUxLDEyNS4xNCBDMjU0LjUxLDEyNS4xNCAyNTEuMzUsMTIzLjYgMjUzLjI3LDEyMC42NSBDMjU1LjQsMTE3LjM2IDI1OS42MSwxMTcuNzQgMjYxLjUsMTEzLjY4IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./app/star.svg":
/*!**********************!*\
  !*** ./app/star.svg ***!
  \**********************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
});

function SvgStar(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "material-icons",
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgStar);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZwogICAgICAgIGNsYXNzTmFtZT0ibWF0ZXJpYWwtaWNvbnMiCiAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgIHdpZHRoPSIyNCIKICAgICAgICBoZWlnaHQ9IjI0IgogICAgICAgIHZpZXdCb3g9IjAgMCAyNCAyNCIKPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KICAgIDxwYXRoIGQ9Ik0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXoiIC8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lalame888/projects/gain-how-review/apps/uploader/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map