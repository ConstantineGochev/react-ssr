/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetch_single = exports.fetch_charters = exports.FETCH_CHARTER = exports.FETCH_CHARTERS = undefined;

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_CHARTERS = exports.FETCH_CHARTERS = 'fetch_charters';
var FETCH_CHARTER = exports.FETCH_CHARTER = 'fetch_charter';

var fetch_charters = exports.fetch_charters = function fetch_charters() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get('https://shielded-springs-23426.herokuapp.com/charters');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_CHARTERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetch_single = exports.fetch_single = function fetch_single(id) {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _axios2.default.get('https://shielded-springs-23426.herokuapp.com/charters/' + id);

                        case 2:
                            res = _context2.sent;


                            dispatch({
                                type: FETCH_CHARTER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _ChartersList = __webpack_require__(10);

var _ChartersList2 = _interopRequireDefault(_ChartersList);

var _Details = __webpack_require__(13);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _Home2.default, {
    path: '/',
    exact: true
}), _extends({}, _ChartersList2.default, {
    path: '/charters',
    exact: true

}), _extends({}, _Details2.default, {
    path: '/charters/details/:id',
    exact: true
})];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(14);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(18);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { debug } from 'util';

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {

    var store = (0, _createStore2.default)();
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        // route.dispatch_id(store)
        return route.load_data ? route.load_data(store) : null;
    });
    Promise.all(promises).then(function () {
        res.send((0, _renderer2.default)(req, store));
        //console.log(store);
    }).catch(function (e) {
        console.log(e);
    });
    //console.log(promises)
});

app.listen(3000, function () {
    console.log('server stated on port 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "button",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "/charters" },
                        "CHARTERS"
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = {
    component: Home
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _index = __webpack_require__(1);

var _Charter = __webpack_require__(12);

var _Charter2 = _interopRequireDefault(_Charter);

var _Details = __webpack_require__(13);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartersList = function (_React$Component) {
    _inherits(ChartersList, _React$Component);

    function ChartersList(props) {
        _classCallCheck(this, ChartersList);

        var _this = _possibleConstructorReturn(this, (ChartersList.__proto__ || Object.getPrototypeOf(ChartersList)).call(this));

        _this.state = {
            not_seen: true,
            charters: [],
            curr_charter: {}
        };
        _this.handle_click = _this.handle_click.bind(_this);
        _this.set_charters = _this.set_charters.bind(_this);
        _this.curr_charter = _this.curr_charter.bind(_this);
        return _this;
    }

    _createClass(ChartersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.props.fetch_charters();
            this.set_charters();
        }
    }, {
        key: 'handle_click',
        value: function handle_click() {
            this.setState(function (prev_state) {
                return {
                    not_seen: !prev_state.not_seen
                };
            });
        }
    }, {
        key: 'curr_charter',
        value: function curr_charter(charter) {
            var copy = Object.assign({}, charter);
            var model = charter.model;
            this.setState({
                curr_charter: copy
            });
        }
    }, {
        key: 'componentsWillMount',
        value: function componentsWillMount() {}
    }, {
        key: 'set_charters',
        value: function set_charters() {
            if (this.props.charters === undefined) return;
            if (this.props.charters.charters === undefined) return;
            var arr = this.props.charters.charters;
            this.setState({
                charters: arr
            });
        }
    }, {
        key: 'render_charters',
        value: function render_charters() {
            var _this2 = this;

            console.log('this is curr_char ==== %s', this.state.curr_charter);
            console.log('thesse are charters ==== %s', this.state.charters);
            console.log('thisse is not_seen ==== %s', this.state.not_seen);

            console.log(this.state.curr_charter);
            if (this.state.not_seen === true) {
                return this.state.charters.map(function (charter) {
                    var curr_charter = charter;
                    //const curr_url = charter._id
                    return _react2.default.createElement(
                        'div',
                        { key: charter._id, onClick: function onClick() {
                                return _this2.curr_charter(curr_charter);
                            } },
                        _react2.default.createElement(_Charter2.default, { key: charter._id, model: charter.model, fn: _this2.handle_click })
                    );
                });
            } else {
                var model = this.state.curr_charter.model;
                var url = this.state.curr_charter._id;

                console.log(url);

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: this.handle_click },
                        'BACK TO charters'
                    ),
                    _react2.default.createElement(_Details2.default, { model: model })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.render_charters()
                )
            );
        }
    }]);

    return ChartersList;
}(_react2.default.Component);

function map_state_to_props(state) {
    return { charters: state.charters
    };
}

function load_data(store) {
    //console.log(store)
    return store.dispatch((0, _index.fetch_charters)());
}

exports.default = {
    load_data: load_data,
    component: (0, _reactRedux.connect)(map_state_to_props, { fetch_charters: _index.fetch_charters })(ChartersList)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {connect} from 'react-redux';
// import {fetch_charter} from '../actions'


exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'a',
            { onClick: props.fn },
            _react2.default.createElement(
                'div',
                null,
                props.model
            )
        )
    )
    // <div>Charter</div>
    ;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {connect} from 'react-redux';
// import {fetch_single} from '../actions/index';


// class Details extends React.Component{
//     constructor(props){
//          super();
//         // this.state = {
//         //     id: ''
//         // }
//         // console.log(props.location.pathname.split("/").slice(-1)[0])
//        // this.url = props.location.pathname.split("/").slice(-1)[0];

//     }
//     componentDidMount(){
//         ///console.log(props.location.pathname.split("/").slice(-1)[0])

//        // console.log(this.props.location)
//        // this.get_id(this.url)
//          //this.props.fetch_single(props.location.pathname.split("/").slice(-1)[0])
//     }
//     // get_id(id){
//     //     this.setState({
//     //         id:id
//     //     })
//     // }
//     // load_data(store){
//     //         return store.dispatch(fetch_single(this.state.id)) 
//     //     }
//         render_details(){
//             // if(this.props.charter === undefined) return
//             // if(this.props.charter.charter === undefined) return
//          //  console.log(this.props)
//         }

//         render(){

//            // console.log(this.state.id)
//         return (
//                 <div>
//                    {this.props.model}

//                 </div>
//                )

//       }
// }

// function map_state_to_props(state){
//     return {charter: state.charter}
// }


// function load_data(store){
//     return store.dispatch(fetch_single(props.location.pathname.split("/").slice(-1)[0])) 
// }
// export default {
//     //load_data:load_data,
//     component:Details//connect(map_state_to_props,{fetch_single})(Details)
// }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            props.model
        )
    );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouter = __webpack_require__(16);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(17);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  //console.log(store)
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return '\n    <html>\n       <head>\n       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">       \n       </head>\n       <body>\n         <div id="root">' + content + '</div>\n         <script>\n            window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n         </script>\n         <script src="bundle.js"></script>\n       </body>\n      </html>\n    ';
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(20);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _chartersReducer = __webpack_require__(21);

var _chartersReducer2 = _interopRequireDefault(_chartersReducer);

var _charterReducer = __webpack_require__(22);

var _charterReducer2 = _interopRequireDefault(_charterReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    charters: _chartersReducer2.default,
    charter: _charterReducer2.default
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var actions = arguments[1];

    switch (actions.type) {
        case _actions.FETCH_CHARTERS:
            return actions.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var actions = arguments[1];

    switch (actions.type) {
        case _actions.FETCH_CHARTER:
            return actions.payload.data;
        default:
            return state;
    }
};

/***/ })
/******/ ]);