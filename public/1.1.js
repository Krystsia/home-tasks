webpackJsonp_name_([1],{

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _moreNews = __webpack_require__(94);

	var _moreNews2 = _interopRequireDefault(_moreNews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    addMoreNews: function addMoreNews(element) {
	        element.addEventListener('click', function () {
	            new _moreNews2.default().getNews();
	        });
	    }
		};

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(95);

	var _getData_service = __webpack_require__(82);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(85);

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

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(81)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(96, function() {
				var newContent = __webpack_require__(96);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(80)();
	// imports


	// module
	exports.push([module.id, "* html{font-size:87.5%}html{font-size:14px;line-height:1.71429em}a{text-decoration:none}.add-more-container{display:flex;align-items:center;justify-content:center}.add-more{padding:1.71429em 48px;margin-top:1.71429em;margin-bottom:1.71429em;font-family:Helvetica,Arial,sans-serif;font-size:24px!important;color:#0b1d23;letter-spacing:normal;transition:opacity 1s ease-in-out;border:2px solid #033;background:#fff;cursor:pointer}.add-more:active,.add-more:focus,.add-more:hover{outline:none;border:2px solid #033;background:#033;color:#fff}", ""]);

	// exports


/***/ }

});
//# sourceMappingURL=1.1.js.map