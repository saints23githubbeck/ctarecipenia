"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBlogError = exports.setBlogLoading = exports.handleBlogState = exports.updateBlog = exports.createBlog = exports.getAllBlogs = void 0;

var _api = require("../../api");

var actiontypes = _interopRequireWildcard(require("../actionTypes"));

var _AuthAction = require("./AuthAction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAllBlogs = function getAllBlogs() {
  return function _callee(dispatch) {
    var result;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch((0, _AuthAction.setIsLoading)(true));
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/blogs",
              method: "GET"
            }));

          case 4:
            result = _context.sent;
            console.log("getAllBlog", result);

            if (result.success === true) {
              dispatch({
                type: actiontypes.GET_ALL_BLOG,
                payload: result.blogs
              });
            }

            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getAllBlogs = getAllBlogs;

var createBlog = function createBlog(payload, onClose) {
  return function _callee2(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context2.next = 13;
              break;
            }

            _context2.prev = 2;
            dispatch(setBlogLoading("loading", true));
            _context2.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "blog",
              method: "POST",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context2.sent;
            console.log(result, "wait you");

            if (result.message === "Blog created") {
              dispatch(setBlogLoading("loading", false));
              dispatch(getAllBlogs());
              onClose();
              dispatch({
                type: actiontypes.RESET_BLOG_STATE
              });
            } else {
              dispatch(setBlogLoading("loading", false));
              dispatch(setBlogError(result.error));
            }

            _context2.next = 13;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
};

exports.createBlog = createBlog;

var updateBlog = function updateBlog(payload, onClose) {
  return function _callee3(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context3.next = 14;
              break;
            }

            _context3.prev = 2;
            dispatch(setBlogLoading("loading", true));
            _context3.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/blog/".concat(payload._id),
              method: "PUT",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context3.sent;
            console.log("updated", payload);
            console.log(result, "updated");

            if (result.status === 200) {
              dispatch(setBlogLoading("loading", false));
              dispatch(getAllBlogs());
              onClose();
              dispatch({
                type: actiontypes.RESET_BLOG_STATE
              });
            } else {
              dispatch(setBlogLoading("loading", false));
              dispatch(setBlogError(result.error));
            }

            _context3.next = 14;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 12]]);
  };
};

exports.updateBlog = updateBlog;

var handleBlogState = function handleBlogState(name, value) {
  return {
    type: actiontypes.ADD_BLOG,
    payload: {
      name: name,
      value: value
    }
  };
};

exports.handleBlogState = handleBlogState;

var setBlogLoading = function setBlogLoading(name, value) {
  return {
    type: actiontypes.LOADING_BLOG,
    payload: {
      name: name,
      value: value
    }
  };
};

exports.setBlogLoading = setBlogLoading;

var setBlogError = function setBlogError(value) {
  return {
    type: actiontypes.BLOG_ERROR,
    payload: value
  };
};

exports.setBlogError = setBlogError;