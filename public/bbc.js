var bbc =
webpackJsonp_name_([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _getData_service = __webpack_require__(6);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(9);

	var _article2 = _interopRequireDefault(_article);

	var _moreNews_ctrl = __webpack_require__(17);

	var _moreNews_ctrl2 = _interopRequireDefault(_moreNews_ctrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (d) {
	    var mainRequest = new _getData_service2.default('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-news', { Accept: 'xyz' });

	    d.addEventListener('DOMContentLoaded', function () {
	        mainRequest.getData().then(function (data) {

	            if (true) {
	                console.log(data);
	            }

	            _article2.default.init(data, '.articles');
	        });
	        var button = document.querySelector('.add-more');
	        new _moreNews_ctrl2.default().addMoreNews(button);
	    });
	})(document);

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _moreNews = __webpack_require__(18);

	var _moreNews2 = _interopRequireDefault(_moreNews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MoreNewsCtrl = function () {
	    function MoreNewsCtrl() {
	        _classCallCheck(this, MoreNewsCtrl);
	    }

	    MoreNewsCtrl.prototype.addMoreNews = function addMoreNews(element) {
	        element.addEventListener('click', function () {
	            !/* require.ensure */(function (require) {
	                var newNews = __webpack_require__(18);
	                new _moreNews2.default().getNews();
	            }(__webpack_require__));
	        });
	    };

	    return MoreNewsCtrl;
	}();

		exports.default = MoreNewsCtrl;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(19);

	var _getData_service = __webpack_require__(6);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(9);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MoreNews = function () {
	    function MoreNews() {
	        _classCallCheck(this, MoreNews);
	    }

	    MoreNews.prototype.getNews = function getNews() {
	        var mainRequest = new _getData_service2.default('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-sport', { Accept: 'xyz' });

	        mainRequest.getData().then(function (data) {

	            if (true) {
	                console.log(data);
	            }

	            _article2.default.init(data, '.articles');
	        });
	    };

	    return MoreNews;
	}();

		exports.default = MoreNews;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(20, function() {
				var newContent = __webpack_require__(20);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* html {\n  font-size: 87.5%; }\n\nhtml {\n  font-size: 14px;\n  line-height: 1.71429em; }\n\na {\n  text-decoration: none; }\n\n.add-more-container {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.add-more {\n  padding-left: 48px;\n  padding-right: 48px;\n  margin-top: 1.71429em;\n  padding-top: 1.71429em;\n  padding-bottom: 1.71429em;\n  margin-bottom: 1.71429em;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 24px !important;\n  color: #0B1D23;\n  letter-spacing: normal;\n  border: 2px solid #003333;\n  background: #fff;\n  cursor: pointer; }\n  .add-more:hover, .add-more:active, .add-more:focus {\n    outline: none;\n    border: 2px solid #003333;\n    background: #003333;\n    color: #fff; }\n", ""]);

	// exports


/***/ }
]);
//# sourceMappingURL=bbc.js.map