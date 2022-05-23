"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleState = exports.setUserError = exports.setUserLoading = exports.adminLogoutAction = exports.getUserBySlugByAdmin = exports.updateUserByAdmin = exports.getAdminProfile = exports.adminLogin = exports.registerUserByAdmin = exports.getAllSubscribers = exports.registerAdmin = exports.getAllAdmin = void 0;

var _api = require("../../api");

var actiontypes = _interopRequireWildcard(require("../actionTypes"));

var _AuthAction = require("./AuthAction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAllAdmin = function getAllAdmin() {
  return function _callee(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context.next = 13;
              break;
            }

            _context.prev = 2;
            dispatch((0, _AuthAction.setIsLoading)(true));
            _context.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/all-admins",
              method: "GET",
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context.sent;
            console.log("getAllAdmin", result);

            if (result.success === true) {
              dispatch({
                type: actiontypes.GET_ALL_ADMIN,
                payload: result.admin
              });
            }

            _context.next = 13;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
};

exports.getAllAdmin = getAllAdmin;

var registerAdmin = function registerAdmin(payload, onClose) {
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
            dispatch(setUserLoading("loading", true));
            _context2.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/admin/add-admin",
              method: "POST",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context2.sent;
            console.log("registerAdmin", result);

            if (result.message) {
              dispatch(setUserLoading("loading", false));
              dispatch(getAllAdmin());
              onClose();
              dispatch({
                type: actiontypes.RESET_USER_STATE
              });
            } else {
              dispatch(setUserLoading("loading", false));
              dispatch(setUserError(result.error));
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

exports.registerAdmin = registerAdmin;

var getAllSubscribers = function getAllSubscribers() {
  return function _callee3(dispatch) {
    var result;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch((0, _AuthAction.setIsLoading)(true));
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/subscribers",
              method: "GET"
            }));

          case 4:
            result = _context3.sent;
            console.log("getAlluser", result);

            if (result.success === true) {
              dispatch({
                type: actiontypes.GET_ALL_USER,
                payload: result.users
              });
            }

            _context3.next = 11;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.getAllSubscribers = getAllSubscribers;

var registerUserByAdmin = function registerUserByAdmin(payload, onClose) {
  return function _callee4(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context4.next = 13;
              break;
            }

            _context4.prev = 2;
            dispatch(setUserLoading("loading", true));
            _context4.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/admin/add-user",
              method: "POST",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context4.sent;
            console.log("registerUserByAdmin", result);

            if (result.message) {
              dispatch(setUserLoading("loading", false));
              dispatch(getAllAdmin());
              onClose();
              dispatch({
                type: actiontypes.RESET_USER_STATE
              });
            } else {
              dispatch(setUserLoading("loading", false));
              dispatch(setUserError(result.error));
            }

            _context4.next = 13;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](2);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
};

exports.registerUserByAdmin = registerUserByAdmin;

var adminLogin = function adminLogin(formData, navigate) {
  return function _callee5(dispatch) {
    var result;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            dispatch((0, _AuthAction.setIsLoading)(true));
            _context5.next = 4;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/login",
              method: "POST",
              body: JSON.stringify(_objectSpread({}, formData))
            }));

          case 4:
            result = _context5.sent;

            if (result.token) {
              dispatch((0, _AuthAction.setIsLoading)(false));
              localStorage.setItem("auth", result.token);
              dispatch({
                type: actiontypes.ADMIN_LOGIN,
                payload: {
                  isLoggedIn: true,
                  message: result.message,
                  user: result.user
                }
              });
              navigate("/admin/dashboard");
            } else {
              dispatch((0, _AuthAction.setIsLoading)(false));
              dispatch({
                type: actiontypes.SIGN_IN_FAILED,
                payload: result.message || "check details"
              });
            }

            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.adminLogin = adminLogin;

var getAdminProfile = function getAdminProfile() {
  return function _callee6(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context6.next = 7;
              break;
            }

            _context6.next = 4;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/admin/user",
              method: "GET",
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            }));

          case 4:
            result = _context6.sent;
            console.log("getAdminProfile", result);

            if (result.user) {
              dispatch({
                type: actiontypes.GET_CURRENT_ADMIN,
                payload: {
                  isLoggedIn: true,
                  user: result.user
                }
              });
            }

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    });
  };
};

exports.getAdminProfile = getAdminProfile;

var updateUserByAdmin = function updateUserByAdmin(payload, onClose) {
  return function _callee7(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context7.next = 13;
              break;
            }

            _context7.prev = 2;
            dispatch(setUserLoading("loading", true));
            _context7.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/admin/update-user",
              method: "PUT",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context7.sent;
            console.log("updateUserByAdmin", result);

            if (result.status === 200) {
              dispatch(setUserLoading("loading", false));
              dispatch(getAllSubscribers());
              dispatch(getAllAdmin());
              onClose();
              dispatch({
                type: actiontypes.RESET_USER_STATE
              });
            } else {
              dispatch(setUserLoading("loading", false));
              dispatch(setUserError(result.error));
            }

            _context7.next = 13;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](2);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
};

exports.updateUserByAdmin = updateUserByAdmin;

var getUserBySlugByAdmin = function getUserBySlugByAdmin() {
  return function _callee8(dispatch) {
    var result;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            dispatch((0, _AuthAction.setIsLoading)(true));
            _context8.next = 4;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/admin/user/:slug",
              method: "GET"
            }));

          case 4:
            result = _context8.sent;

            if (result.success === true) {
              dispatch({
                type: actiontypes.ADMIN_UPDATE_USERS,
                payload: result.users
              });
            }

            _context8.next = 10;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.getUserBySlugByAdmin = getUserBySlugByAdmin;

var adminLogoutAction = function adminLogoutAction(navigate) {
  return function _callee9(dispatch) {
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            dispatch({
              type: actiontypes.ADMIN_LOGOUT
            });
            navigate("/admin");

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    });
  };
};

exports.adminLogoutAction = adminLogoutAction;

var setUserLoading = function setUserLoading(name, value) {
  return {
    type: actiontypes.LOADING_USER,
    payload: {
      name: name,
      value: value
    }
  };
};

exports.setUserLoading = setUserLoading;

var setUserError = function setUserError(value) {
  return {
    type: actiontypes.USER_ERROR,
    payload: value
  };
};

exports.setUserError = setUserError;

var handleState = function handleState(name, value) {
  return {
    type: actiontypes.ADD_INPUT,
    payload: {
      name: name,
      value: value
    }
  };
};

exports.handleState = handleState;