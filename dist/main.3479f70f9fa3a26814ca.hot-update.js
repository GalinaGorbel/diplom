/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelendos"]("main",{

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar calculator = function calculator() {\n  var timeSelected = null,\n      clubSelected = null,\n      total = 0;\n  var data = {\n    'mozaika': {\n      '1': 1999,\n      '6': 9900,\n      '9': 13900,\n      '12': 19900\n    },\n    'schelkovo': {\n      '1': 2999,\n      '6': 14999,\n      '9': 21990,\n      '12': 24999\n    }\n  };\n\n  function selectedValue(data, name) {\n    data.forEach(function (elem) {\n      if (elem.checked && name === 'time') {\n        timeSelected = elem.value;\n      } else if (elem.checked && name === 'clubs') {\n        clubSelected = elem.value;\n      }\n    });\n  }\n\n  var dataForCalculator = function dataForCalculator(id, month, promo) {\n    if (promo === 'ТЕЛО2020') {\n      return Math.floor(data[id][month] * 0.7);\n    } else {\n      return data[id][month];\n    }\n  };\n\n  try {\n    var calcBlock = document.querySelector('#card_order'),\n        priceTotal = calcBlock.querySelector('#price-total'),\n        clubs = calcBlock.querySelectorAll('.club > input'),\n        time = calcBlock.querySelectorAll('.time > input'),\n        promo = calcBlock.querySelector('.price-message input');\n    priceTotal.textContent = total;\n    selectedValue(time, 'time');\n    selectedValue(clubs, 'clubs');\n    calcBlock.addEventListener('change', function (e) {\n      if (e.target.matches('[name=card-type]')) {\n        selectedValue(time, 'time');\n      } else if (e.target.matches('[name=club-name]')) {\n        selectedValue(clubs, 'clubs');\n      }\n\n      priceTotal.textContent = dataForCalculator(\"\".concat(clubSelected), \"\".concat(timeSelected), \"\".concat(promo.value));\n    });\n    priceTotal.textContent = dataForCalculator(\"\".concat(clubSelected), \"\".concat(timeSelected), \"\".concat(promo.value));\n  } catch (e) {}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://lendos/./src/modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "21507ef4359d403c0384"
/******/ 	})();
/******/ 	
/******/ }
);