/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		3:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"bbc","2":"ng"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _customError = __webpack_require__(3);

	var _customError2 = _interopRequireDefault(_customError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var wrapper = document.querySelector('.articles');

	var Request = function () {
	    function Request(apiKey, method, url) {
	        _classCallCheck(this, Request);

	        this.apiKey = apiKey;
	        this.method = method;
	        this.url = url;

	        for (var _len = arguments.length, headers = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            headers[_key - 3] = arguments[_key];
	        }

	        this.headers = headers;
	    }

	    Request.prototype.getData = function getData() {
	        return fetch(this.stringRequest, this.config).then(handleErrors).then(function (data) {
	            return data.json();
	        }, function (error) {
	            _customError2.default.init(error, wrapper);
	            return {};
	        });
	    };

	    _createClass(Request, [{
	        key: 'allheaders',
	        get: function get() {
	            var allHeaders = {};
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var header = _step.value;

	                    Object.assign(allHeaders, header);
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
	        }
	    }, {
	        key: 'stringRequest',
	        get: function get() {
	            return this.url + '&apiKey=' + this.apiKey;
	        }
	    }, {
	        key: 'config',
	        get: function get() {
	            return {
	                method: this.method,
	                headers: this.allheaders
	            };
	        }
	    }]);

	    return Request;
	}();

	exports.default = Request;


	function handleErrors(response) {
	    if (!response.ok) {
	        throw Error(response.statusText);
	    }
	    return response;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CustomErrorView = __webpack_require__(4);

	var _CustomErrorView2 = _interopRequireDefault(_CustomErrorView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomError = function () {
	    function CustomError(errorMessage) {
	        _classCallCheck(this, CustomError);

	        this.errorElement = new _CustomErrorView2.default(errorMessage).cunstructErrorTemplate();
	    }

	    CustomError.init = function init(errorMessage, element) {
	        var customError = new CustomError(errorMessage);
	        element.appendChild(customError.errorElement);
	    };

	    return CustomError;
	}();

		exports.default = CustomError;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomErrorView = function () {
	    function CustomErrorView(errorMessage) {
	        _classCallCheck(this, CustomErrorView);

	        this.errorMessage = errorMessage;
	    }

	    CustomErrorView.prototype.cunstructErrorTemplate = function cunstructErrorTemplate() {
	        var li = document.createElement('li');

	        li.classList.add('error-message');
	        li.innerHTML = '<p>' + this.errorMessage + '</p>';
	        return li;
	    };

	    return CustomErrorView;
	}();

		exports.default = CustomErrorView;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(6);

	var _article_model = __webpack_require__(7);

	var _article_model2 = _interopRequireDefault(_article_model);

	var _article_ctrl = __webpack_require__(9);

	var _article_ctrl2 = _interopRequireDefault(_article_ctrl);

	var _article_view = __webpack_require__(10);

	var _article_view2 = _interopRequireDefault(_article_view);

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
	        initialEvents('mouseover', _article_ctrl2.default.showDescription);
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
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _model = __webpack_require__(8);

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
/* 8 */
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
/* 9 */
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
/* 10 */
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

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DateService = function () {
	    function DateService() {
	        _classCallCheck(this, DateService);
	    }

	    DateService.getDate = function getDate(date) {
	        var myDate = new Date(date);
	        return myDate.getDate() + "." + (myDate.getMonth() + 1) + "." + myDate.getFullYear();
	    };

	    return DateService;
	}();

		exports.default = DateService;

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map