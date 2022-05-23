"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configurestore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _combineReducers = require("./reducers/combineReducers");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
function configurestore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middleware = [_reduxThunk["default"]];
  var middlewareEnhancer = (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware));
  var enhancer = [middlewareEnhancer];

  var composeEnhancer = _redux.compose.apply(void 0, enhancer);

  var store = (0, _redux.createStore)(_combineReducers.rootReducers, preloadedState, composeEnhancer);
  return store;
}