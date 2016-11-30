var bbc =
webpackJsonp_name_([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _getData_service = __webpack_require__(5);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(9);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var a = __webpack_require__(17);

	console.log(a);

	(function (d) {
	    var mainRequest = new _getData_service2.default('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-news', { Accept: 'xyz' }),
	        button = document.querySelector('.add-more');
	    d.addEventListener('DOMContentLoaded', function () {
	        mainRequest.getData().then(function (data) {
	            if (true) {
	                console.log(data);
	            }

	            _article2.default.init(data, '.articles');
	        }).then(function () {
	            button.style.opacity = "1";

	            __webpack_require__.e/* nsure */(1, function (require) {
	                var moreNews = __webpack_require__(18);
	                moreNews.addMoreNews(button);
	            });
	        });
	    });
	})(document);

/***/ },

/***/ 17:
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"description": "home works for frontcamp2",
		"main": "index.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1",
			"build": "babel ./js --watch --out-dir ./js-compiled",
			"run": "webpack --display-error-details",
			"\"removedItem\"": 2
		},
		"repository": {
			"type": "git",
			"url": "git+https://krystsia@github.com/Krystsia/home-tasks.git",
			"\"removedItem\"": 2
		},
		"author": "Kiryl Krystsia",
		"license": "ISC",
		"bugs": {
			"url": "https://github.com/Krystsia/home-tasks/issues",
			"\"removedItem\"": 2
		},
		"homepage": "https://github.com/Krystsia/home-tasks#readme",
		"devDependencies": {
			"babel-plugin-transform-es2015-modules-commonjs": "^6.18.0",
			"babel-polyfill": "^6.16.0",
			"babel-preset-es2015": "^6.18.0",
			"babel-preset-es2015-ie": "6.6.2",
			"babel-preset-stage-1": "^6.16.0",
			"babel-preset-stage-2": "^6.18.0",
			"compass-mixins": "^0.12.10",
			"css-loader": "^0.26.0",
			"extract-text-webpack-plugin": "^1.0.1",
			"json-loader": "^0.5.4",
			"node-sass": "^3.13.0",
			"postcss-loader": "^1.1.1",
			"sass-loader": "^4.0.2",
			"style-loader": "^0.13.1",
			"susy": "^2.2.12",
			"webpack": "^1.13.3",
			"webpack-dev-server": "^1.16.2",
			"whatwg-fetch": "^2.0.1",
			"\"removedItem\"": 5
		},
		"dependencies": {
			"whatwg-fetch": "^2.0.1",
			"\"removedItem\"": 5
		},
		"\"removedItem\"": 5
		};

/***/ }

});
//# sourceMappingURL=bbc.js.map