var bbc =
webpackJsonp_name_([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _actions = __webpack_require__(1);

	var _highlight_service = __webpack_require__(27);

	var _highlight_service2 = _interopRequireDefault(_highlight_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var a = __webpack_require__(14);

	console.log(a);

	(function (d) {
	    _actions.actions.init();
	    document.querySelector('.all-visited').addEventListener('click', function () {
	        new _highlight_service2.default().highlight();
	    });
	})(document);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = undefined;

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _app_dispatcher = __webpack_require__(6);

	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);

	var _stores = __webpack_require__(9);

	var _article_component = __webpack_require__(10);

	var _article_component2 = _interopRequireDefault(_article_component);

	var _more_news_component = __webpack_require__(13);

	var _more_news_component2 = _interopRequireDefault(_more_news_component);

	var _constants = __webpack_require__(8);

	var _getRequest_service = __webpack_require__(26);

	var _getRequest_service2 = _interopRequireDefault(_getRequest_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var requestString = new _getRequest_service2.default();

	var Actions = function () {
	  function Actions() {
	    _classCallCheck(this, Actions);
	  }

	  Actions.prototype.init = function init() {
	    _stores.store.dispatcherIndex();
	    var articles = new _article_component2.default();
	    var moreNews = new _more_news_component2.default();
	    articles.onInit();
	    moreNews.onInit();
	    var mainRequest = new _getData_service2.default(_constants.passwordAccess, 'GET', requestString.next(), { Accept: 'xyz' });
	    mainRequest.getData().then(function (data) {
	      if (true) {
	        console.log(data);
	      }
	      _app_dispatcher2.default.handleInitAction(data);
	    });
	  };

	  Actions.prototype.add = function add() {
	    var mainRequest = new _getData_service2.default(_constants.passwordAccess, 'GET', requestString.next(), { Accept: 'xyz' });
	    mainRequest.getData().then(function (data) {
	      if (true) {
	        console.log(data);
	      }
	      _app_dispatcher2.default.handleAddAction(data);
	    });
	  };

	  Actions.prototype.destroy = function destroy() {};

	  return Actions;
	}();

		var actions = exports.actions = new Actions();

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dispatcher = __webpack_require__(7);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _constants = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var AppDispatcher = function (_Dispatcher) {
	    _inherits(AppDispatcher, _Dispatcher);

	    function AppDispatcher() {
	        _classCallCheck(this, AppDispatcher);

	        return _possibleConstructorReturn(this, _Dispatcher.apply(this, arguments));
	    }

	    AppDispatcher.prototype.handleViewAction = function handleViewAction(action) {
	        this.dispatch({
	            actionType: _constants.constants.VIEW_ACTION,
	            action: action
	        });
	    };

	    AppDispatcher.prototype.handleInitAction = function handleInitAction(data) {
	        console.log(data);
	        this.dispatch({
	            actionType: _constants.constants.INIT_ACTION,
	            data: data
	        });
	    };

	    AppDispatcher.prototype.handleAddAction = function handleAddAction(data) {
	        console.log(data);
	        this.dispatch({
	            actionType: _constants.constants.ADD_ACTION,
	            data: data
	        });
	    };

	    return AppDispatcher;
	}(_dispatcher2.default);

		exports.default = new AppDispatcher();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _callbacks = [];
	var _promises = [];

	var Dispatcher = function () {
	    function Dispatcher() {
	        _classCallCheck(this, Dispatcher);
	    }

	    Dispatcher.prototype.register = function register(callback) {
	        _callbacks.push(callback);
	        return _callbacks.length - 1;
	    };

	    Dispatcher.prototype.dispatch = function dispatch(payload) {
	        var resolves = [];
	        var rejects = [];

	        _promises = _callbacks.map(function (item, index) {
	            return new Promise(function (resolve, reject) {
	                resolves[index] = resolve;
	                rejects[index] = reject;
	            });
	        });

	        _callbacks.forEach(function (callback, index) {
	            Promise.resolve(callback(payload)).then(function () {

	                resolves[index](payload);
	            }, function () {
	                rejects[index](new Error('Unsuccessful callback'));
	            });
	        });
	        _promises = [];
	    };

	    return Dispatcher;
	}();

		exports.default = Dispatcher;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = exports.constants = {
	  INIT_ACTION: 1,
	  VIEW_ACTION: 2,
	  ADD_ACTION: 3
	};

	var passwordAccess = exports.passwordAccess = 'f1fdf072013c4b1e8b92b027a92a8977';

	var sources = exports.sources = ['bbc-news', 'bbc-sport', 'ars-technica', 'bloomberg', 'business-insider', 'daily-mail', 'entertainment-weekly', 'entertainment-weekly'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.store = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _app_dispatcher = __webpack_require__(6);

	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);

	var _getData_service = __webpack_require__(2);

	var _getData_service2 = _interopRequireDefault(_getData_service);

	var _constants = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var dataStore = {};
	var elementListener = [];

	var Store = function () {
	  function Store() {
	    _classCallCheck(this, Store);
	  }

	  Store.prototype.addElementListener = function addElementListener(element) {
	    elementListener.push(element);
	  };

	  Store.prototype.dispatcherIndex = function dispatcherIndex() {
	    _app_dispatcher2.default.register(function (payload) {
	      var actionType = payload.actionType;

	      switch (actionType) {
	        case _constants.constants.INIT_ACTION:
	          dataStore = payload.data;
	          var initEvent = new CustomEvent('init', {
	            bubbles: true
	          });

	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = elementListener[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var element = _step.value;


	              element.dispatchEvent(initEvent);
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

	          ;
	          break;

	        case _constants.constants.ADD_ACTION:
	          dataStore = payload.data;
	          var addEvent = new CustomEvent('add', {
	            bubbles: true
	          });

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = elementListener[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var _element = _step2.value;


	              _element.dispatchEvent(addEvent);
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          ;
	          break;

	        default:
	          return true;
	      }
	    });
	  };

	  _createClass(Store, [{
	    key: 'allData',
	    get: function get() {
	      return dataStore;
	    }
	  }]);

	  return Store;
	}();

		var store = exports.store = new Store();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stores = __webpack_require__(9);

	var _getDate_service = __webpack_require__(11);

	var _getDate_service2 = _interopRequireDefault(_getDate_service);

	var _toggleDescriptionService = __webpack_require__(12);

	var _toggleDescriptionService2 = _interopRequireDefault(_toggleDescriptionService);

	var _highlight_service = __webpack_require__(27);

	var _highlight_service2 = _interopRequireDefault(_highlight_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Article = function () {
	  function Article() {
	    _classCallCheck(this, Article);
	  }

	  Article.prototype.onInit = function onInit() {
	    var element = document.querySelector('.articles');
	    _stores.store.addElementListener(element);
	    element.addEventListener('init', function () {
	      repaint(element);
	    });
	    element.addEventListener('add', function () {
	      add(element);
	    });
	    initialEvents('mouseover', _toggleDescriptionService2.default.showDescription);
	  };

	  return Article;
	}();

	exports.default = Article;


	function constructArticles() {
	  var data = _stores.store.allData;

	  var _data$articles = data.articles,
	      allArticles = _data$articles === undefined ? [] : _data$articles;


	  var fragment = document.createDocumentFragment();

	  allArticles = allArticles.map(function (article) {
	    var li = document.createElement('li');

	    li.innerHTML = '<a href="' + article.url + '" target="blank">\n                        <h2>' + article.title + '</h2>\n                        <p class="published-at">' + new _getDate_service2.default().getDate(article.publishedAt) + '</p>\n                        <img src="' + article.urlToImage + '" alt="image"/>\n                        <p class="descriptor"><span>' + article.description + '</span><p>\n                    </a>';
	    li.addEventListener('click', function () {
	      new _highlight_service2.default().add(li);
	    });

	    li.highlight = function () {
	      li.classList.add('highlight');
	    };

	    return li;
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

	  return fragment;
	}

	function repaint(element) {
	  element.innerHTML = '';
	  element.appendChild(constructArticles());
	}

	function add(element) {
	  element.appendChild(constructArticles());
	}

	function initialEvents(evenName, callback) {
	  var articles = document.querySelector('.articles');
	  articles.addEventListener(evenName, callback);
	}

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stores = __webpack_require__(9);

	var _actions = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MoreNews = function () {
	  function MoreNews() {
	    _classCallCheck(this, MoreNews);
	  }

	  MoreNews.prototype.onInit = function onInit() {
	    var element = document.querySelector('.add-more-container');
	    _stores.store.addElementListener(element);
	    element.addEventListener('init', function () {
	      repaint(element);
	    });
	  };

	  return MoreNews;
	}();

	exports.default = MoreNews;


	function construcAddMoreButton() {
	  var button = document.createElement('button');
	  button.classList.add('add-more');
	  button.innerText = 'Add More';
	  button.addEventListener('click', function () {
	    _actions.actions.add();
	  });
	  return button;
	}

	function repaint(element) {
	  element.appendChild(construcAddMoreButton());
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"description": "home works for frontcamp2",
		"main": "index.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1",
			"build": "babel ./js --watch --out-dir ./js-compiled",
			"run": "webpack --display-error-details",
			"undefined": 2
		},
		"repository": {
			"type": "git",
			"url": "git+https://krystsia@github.com/Krystsia/home-tasks.git",
			"undefined": 2
		},
		"author": "Kiryl Krystsia",
		"license": "ISC",
		"bugs": {
			"url": "https://github.com/Krystsia/home-tasks/issues",
			"undefined": 2
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
			"undefined": 5
		},
		"dependencies": {
			"whatwg-fetch": "^2.0.1",
			"undefined": 5
		},
		"undefined": 5
		};

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(8);

	var _marked = [generateSource].map(regeneratorRuntime.mark);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RequestString = function () {
	  function RequestString() {
	    _classCallCheck(this, RequestString);
	  }

	  RequestString.prototype.getNextSource = function getNextSource() {
	    return generatorSource.next().value;
	  };

	  RequestString.prototype.next = function next() {
	    return this.mainPart + this.getNextSource();
	  };

	  _createClass(RequestString, [{
	    key: 'mainPart',
	    get: function get() {
	      return 'https://newsapi.org/v1/articles?source=';
	    }
	  }]);

	  return RequestString;
	}();

	exports.default = RequestString;


	var generatorSource = generateSource(_constants.sources);
	function generateSource(sources) {
	  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, source;

	  return regeneratorRuntime.wrap(function generateSource$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _iteratorNormalCompletion = true;
	          _didIteratorError = false;
	          _iteratorError = undefined;
	          _context.prev = 3;
	          _iterator = sources[Symbol.iterator]();

	        case 5:
	          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	            _context.next = 12;
	            break;
	          }

	          source = _step.value;
	          _context.next = 9;
	          return source;

	        case 9:
	          _iteratorNormalCompletion = true;
	          _context.next = 5;
	          break;

	        case 12:
	          _context.next = 18;
	          break;

	        case 14:
	          _context.prev = 14;
	          _context.t0 = _context['catch'](3);
	          _didIteratorError = true;
	          _iteratorError = _context.t0;

	        case 18:
	          _context.prev = 18;
	          _context.prev = 19;

	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }

	        case 21:
	          _context.prev = 21;

	          if (!_didIteratorError) {
	            _context.next = 24;
	            break;
	          }

	          throw _iteratorError;

	        case 24:
	          return _context.finish(21);

	        case 25:
	          return _context.finish(18);

	        case 26:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
		}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var instance = null;

	var Highlight = function () {
	  function Highlight() {
	    _classCallCheck(this, Highlight);

	    if (!instance) {
	      this.elements = [];
	      instance = this;
	    }
	    return instance;
	  }

	  Highlight.prototype.highlight = function highlight() {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var element = _step.value;

	        element.highlight();
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
	  };

	  Highlight.prototype.add = function add(element) {
	    this.elements.push(element);
	  };

	  Highlight.prototype.remove = function remove(element) {
	    var i = this.elements.indexOf(element);
	    this.elements.splice(i, 1);
	  };

	  return Highlight;
	}();

		exports.default = Highlight;

/***/ }
]);
//# sourceMappingURL=bbc.js.map