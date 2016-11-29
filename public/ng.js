var ng =
webpackJsonp_name_([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(5);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (d) {
	    var mainRequest = new _getData_service2.default('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=national-geographic', { Accept: 'xyz' });

	    d.addEventListener('DOMContentLoaded', function () {
	        mainRequest.getData().then(function (data) {

	            if (true) {
	                console.log(data);
	            }

	            _article2.default.init(data, '.articles');
	        });
	    });
	})(document);

/***/ }
]);
//# sourceMappingURL=ng.js.map