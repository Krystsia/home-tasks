var bbc =
webpackJsonp_name_([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(75);
	module.exports = __webpack_require__(77);


/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(78);

	var _getData_service = __webpack_require__(82);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(85);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	                var moreNews = __webpack_require__(93);
	                moreNews.addMoreNews(button);
	            });
	        });
	    });
	})(document);

/***/ }

});
//# sourceMappingURL=bbc.js.map