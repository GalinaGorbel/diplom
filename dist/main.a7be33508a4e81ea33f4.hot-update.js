/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelendos"]("main",{

/***/ "./src/modules/sendForms.js":
/*!**********************************!*\
  !*** ./src/modules/sendForms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar sendForms = function sendForms() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'В процессе загрузки...',\n      statusMessage = document.createElement('div'),\n      inputs = document.querySelectorAll('[name=\"card-type\"]');\n  inputs.forEach(function (input) {\n    input.value = input.nextElementSibling.querySelectorAll('.cost')[0].firstChild.textContent;\n  });\n  var forms = document.querySelectorAll('form');\n\n  var addStyle = function addStyle(textColor) {\n    var style = document.createElement('style');\n    style.id = 'styleMessage';\n    style.textContent = \"\\n                .glo-style__textmessage {\\n                margin: 15px 0px 0px;\\n                color: \".concat(textColor, \";\\n                }\\n            \");\n    document.head.appendChild(style);\n  };\n\n  var postData = function postData(url, body) {\n    return fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    }).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      document.getElementById('callback_form').style.display = 'none';\n      document.getElementById('thanks').style.display = 'block';\n      document.getElementById('price-total').textContent = '1999';\n      setTimeout(function () {\n        return document.getElementById('thanks').style.display = 'none';\n      }, 5000);\n    })[\"catch\"](function () {\n      statusMessage.textContent = errorMessage;\n    });\n  };\n\n  forms.forEach(function (form) {\n    form.addEventListener('submit', function (e) {\n      console.log(form);\n      e.preventDefault();\n      form.appendChild(statusMessage);\n      statusMessage.innerHTML = loadMessage;\n\n      if (form.matches('#card_order')) {\n        addStyle('black');\n      } else {\n        addStyle('white');\n      }\n\n      statusMessage.classList.add('glo-style__textmessage');\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        console.log(val);\n        body[key] = val;\n      });\n      postData('./server.php', body);\n      form.reset();\n      setTimeout(function () {\n        return statusMessage.remove();\n      }, 5000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForms);\n\n//# sourceURL=webpack://lendos/./src/modules/sendForms.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "bdc7103032a9d1889aff"
/******/ 	})();
/******/ 	
/******/ }
);