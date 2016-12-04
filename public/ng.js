var ng =
webpackJsonp_name_([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(14);

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _article = __webpack_require__(18);

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

/***/ },
/* 1 */,
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
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(19);

	var _article_model = __webpack_require__(21);

	var _article_model2 = _interopRequireDefault(_article_model);

	var _article_ctrl = __webpack_require__(23);

	var _article_ctrl2 = _interopRequireDefault(_article_ctrl);

	var _article_view = __webpack_require__(24);

	var _article_view2 = _interopRequireDefault(_article_view);

	var _toggleDescriptionService = __webpack_require__(25);

	var _toggleDescriptionService2 = _interopRequireDefault(_toggleDescriptionService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Article = function () {
	    function Article() {
	        _classCallCheck(this, Article);
	    }

	    Article.init = function init(data, element) {
	        var _data$articles = data.articles,
	            allArticles = _data$articles === undefined ? [] : _data$articles;

	        var fragment = document.createDocumentFragment();
	        allArticles = allArticles.map(function (article) {
	            var itemModel = new _article_model2.default(article);
	            var itemCtrl = new _article_ctrl2.default(itemModel);
	            return new _article_view2.default(itemModel, itemCtrl).constructTemplate();
	        });

	        var tempArticleStore = [];

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            var _loop = function _loop() {
	                var li = _step.value;

	                if (!tempArticleStore.some(function (item) {
	                    return item === li.innerHTML;
	                })) {
	                    tempArticleStore.push(li.innerHTML);
	                    fragment.appendChild(li);
	                }
	            };

	            for (var _iterator = allArticles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                _loop();
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        document.querySelector(element).appendChild(fragment);
	        hideLoader();
	        initialEvents('mouseover', _toggleDescriptionService2.default.showDescription);
	    };

	    return Article;
	}();

	exports.default = Article;


	function hideLoader() {
	    var backdrop = document.querySelector('.backdrop'),
	        loader = document.querySelector('.loader');

	    loader.style.opacity = 'none';
	    loader.style.display = 'none';
	    backdrop.style.opacity = 'none';
	    backdrop.style.display = 'none';
	}

	function initialEvents(evenName, callback) {
	    var articles = document.querySelector('.articles');
	    articles.addEventListener(evenName, callback);
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _model = __webpack_require__(22);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ArticleModel = function (_Model) {
	    _inherits(ArticleModel, _Model);

	    function ArticleModel(article) {
	        _classCallCheck(this, ArticleModel);

	        var _this = _possibleConstructorReturn(this, _Model.call(this, article));

	        _this.addField('title');
	        _this.addField('publishedAt');
	        _this.addField('description');
	        _this.addField('url');
	        _this.addField('source');
	        _this.addField('urlToImage');
	        _this.addField('abstract');
	        _this.addField('author');
	        return _this;
	    }

	    return ArticleModel;
	}(_model2.default);

		exports.default = ArticleModel;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(data) {
	        _classCallCheck(this, Model);

	        this.data = data;
	    }

	    Model.prototype.addField = function addField(name) {
	        this[name] = this.data[name] || null;
	    };

	    return Model;
	}();

		exports.default = Model;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleCtrl = function () {
	    function ArticleCtrl(model) {
	        _classCallCheck(this, ArticleCtrl);

	        this.model = model;
	    }

	    ArticleCtrl.prototype.getDate = function getDate(date) {
	        var myDate = new Date(date);
	        return myDate.getDate() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getFullYear();
	    };

	    ArticleCtrl.showDescription = function showDescription(e) {
	        var element = e.target;

	        var _element$getElementsB = element.getElementsByClassName('descriptor'),
	            _element$getElementsB2 = _slicedToArray(_element$getElementsB, 1),
	            descriptor = _element$getElementsB2[0];

	        if (descriptor) {
	            descriptor.style.cssText = 'top: 0;';
	            element.addEventListener('mouseleave', ArticleCtrl.hideDescription);
	            e.preventDefault();
	        }

	        return;
	    };

	    ArticleCtrl.hideDescription = function hideDescription(e) {
	        var _e$target$getElements = e.target.getElementsByClassName('descriptor'),
	            _e$target$getElements2 = _slicedToArray(_e$target$getElements, 1),
	            descriptor = _e$target$getElements2[0];

	        descriptor.style.cssText = 'top: 100%;';
	        e.preventDefault();
	    };

	    return ArticleCtrl;
	}();

		exports.default = ArticleCtrl;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getDate_service = __webpack_require__(11);

	var _getDate_service2 = _interopRequireDefault(_getDate_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleView = function () {
	    function ArticleView(model, ctrl) {
	        _classCallCheck(this, ArticleView);

	        this.model = model;
	        this.ctrl = ctrl;
	    }

	    ArticleView.prototype.constructTemplate = function constructTemplate() {
	        var li = document.createElement('li');
	        li.innerHTML = '<a href="' + this.model.url + '">\n                            <h2>' + this.model.title + '</h2>\n                            <p class="published-at">' + _getDate_service2.default.getDate(this.model.publishedAt) + '</p>\n                            <img src="' + this.model.urlToImage + '" alt="image"/>\n                            <p class="descriptor"><span>' + this.model.description + '</span><p>\n                        </a>';

	        return li;
	    };

	    return ArticleView;
	}();

		exports.default = ArticleView;

/***/ }
]);
//# sourceMappingURL=ng.js.map