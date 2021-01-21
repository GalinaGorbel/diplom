/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelendos"]("main",{

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalWindow */ \"./src/modules/modalWindow.js\");\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar validator = function validator() {\n  var inputsValid = document.querySelectorAll('input'),\n      buttons = document.querySelectorAll('button[type = submit]');\n  var clone = document.getElementById('thanks').cloneNode(true);\n\n  var addModalAfter = function addModalAfter(text) {\n    //добавляем модальное окно для сообщения\n    clone.id = 'messageAfter';\n    document.body.appendChild(clone);\n    (0,_modalWindow__WEBPACK_IMPORTED_MODULE_1__.default)([{\n      data: '#messageAfter',\n      id: 'messageAfter'\n    }]); //меняем текст в модальном окне\n\n    clone.querySelector('.form-content h4').innerHTML = 'Данные не отправлены';\n    clone.querySelector('.form-content p').innerHTML = text;\n    clone.querySelector('.form-content p').style.color = 'white';\n  };\n\n  var checkRadio = function checkRadio(data) {\n    // проверка радиокнопок\n    var check = _toConsumableArray(data).some(function (radio) {\n      return radio.checked ? true : false;\n    });\n\n    return check;\n  };\n\n  buttons.forEach(function (button) {\n    button.addEventListener('click', function (e) {\n      button.disabled = false;\n      var target = e.target,\n          form = target.closest('form');\n\n      function noChecked() {\n        var messageAfter = document.getElementById('messageAfter');\n        messageAfter.style.display = 'block';\n        setTimeout(function () {\n          messageAfter.style.display = 'none';\n          button.disabled = false;\n        }, 3000);\n      }\n\n      if (form.matches('#footer_form')) {\n        var radios = form.querySelectorAll('[type=radio]');\n\n        if (!checkRadio(radios)) {\n          //проверка радио кнопок\n          button.disabled = true;\n          addModalAfter('Необходимо выбрать клуб!');\n          noChecked();\n        }\n      } else {\n        var checkbox = form.querySelector('[type=checkbox]');\n\n        if (!checkbox.checked) {\n          button.disabled = true;\n          addModalAfter('Необходимо подтвердить согласие');\n          noChecked();\n        }\n      }\n    });\n  });\n  inputsValid.forEach(function (input) {\n    input.addEventListener('input', function (e) {\n      var target = e.target;\n\n      if (target.parentElement.matches('.price-message') && target.matches('[name=promo]')) {\n        target.value = target.value.replace(/[a-z]+/ig, '');\n      }\n\n      if (target.matches('[name=name]')) {\n        console.log('name');\n        target.value = target.value.replace(/[^\\W\\s]+|[!-@]/ig, '');\n\n        if (target.value.length < 3) {\n          console.log(e.target.closest('button'));\n        }\n      }\n    });\n  });\n  (0,_maskPhone__WEBPACK_IMPORTED_MODULE_0__.default)('[type=tel]'); //валидация телефона\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack://lendos/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "eb3af43663250df138bd"
/******/ 	})();
/******/ 	
/******/ }
);