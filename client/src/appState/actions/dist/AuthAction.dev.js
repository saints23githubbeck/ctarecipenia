// "use strict";

// function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.logOutAction = exports.fetchProfile = exports.updateUser = exports.logIn = exports.signUp = exports.setIsLoggedIn = exports.setIsLoading = void 0;

// var actiontypes = _interopRequireWildcard(require("../actionTypes"));

// var _api = require("../../api");

// function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

// function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

// function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// var setIsLoading = function setIsLoading(value) {
//   return {
//     type: actiontypes.LOADING,
//     payload: value
//   };
// };

// exports.setIsLoading = setIsLoading;

// var setIsLoggedIn = function setIsLoggedIn(value) {
//   return {
//     type: actiontypes.SET_IS_LOGIN,
//     payload: value
//   };
// };

// exports.setIsLoggedIn = setIsLoggedIn;

// var signUp = function signUp(FormData, navigate) {
//   return function _callee(dispatch) {
//     var result;
//     return regeneratorRuntime.async(function _callee$(_context) {
//       while (1) {
//         switch (_context.prev = _context.next) {
//           case 0:
//             _context.prev = 0;
//             dispatch(setIsLoading(true));
//             _context.next = 4;
//             return regeneratorRuntime.awrap((0, _api.httpRequest)({
//               url: "/register",
//               method: "POST",
//               body: JSON.stringify(_objectSpread({}, FormData))
//             }));

//           case 4:
//             result = _context.sent;
//             console.log(result);

//             if (result.success === true) {
//               dispatch(setIsLoading(false));
//               localStorage.setItem("auth", result.userToken);
//               dispatch({
//                 type: actiontypes.SIGN_UP,
//                 payload: {
//                   isLoggedIn: true,
//                   message: result.message,
//                   user: result.user
//                 }
//               });
//               navigate("/user-dashboard");
//             } else {
//               dispatch(setIsLoading(false));
//               dispatch({
//                 type: actiontypes.SIGN_UP_FAILED,
//                 payload: result.message || "check details"
//               });
//             }

//             _context.next = 12;
//             break;

//           case 9:
//             _context.prev = 9;
//             _context.t0 = _context["catch"](0);
//             console.log(_context.t0);

//           case 12:
//           case "end":
//             return _context.stop();
//         }
//       }
//     }, null, null, [[0, 9]]);
//   };
// };

// exports.signUp = signUp;

// var logIn = function logIn(formData, navigate, history) {
//   return function _callee2(dispatch) {
//     var result;
//     return regeneratorRuntime.async(function _callee2$(_context2) {
//       while (1) {
//         switch (_context2.prev = _context2.next) {
//           case 0:
//             _context2.prev = 0;
//             dispatch(setIsLoading(true));
//             _context2.next = 4;
//             return regeneratorRuntime.awrap((0, _api.httpRequest)({
//               url: "/login",
//               method: "POST",
//               body: JSON.stringify(_objectSpread({}, formData))
//             }));

//           case 4:
//             result = _context2.sent;
//             console.log(history.pathname);

//             if (result.token) {
//               dispatch(setIsLoading(false));
//               localStorage.setItem("auth", result.token);
//               dispatch({
//                 type: actiontypes.SIGN_IN,
//                 payload: {
//                   isLoggedIn: true,
//                   message: result.message,
//                   user: result.user
//                 }
//               });
//               console.log("show me", result);

//               if (history.pathname === "/admin") {
//                 navigate("/admin/dashboard");
//               } else {
//                 navigate("/user-dashboard");
//               }

//               ;
//               console.log(result);
//             } else {
//               dispatch(setIsLoading(false));
//               dispatch({
//                 type: actiontypes.SIGN_IN_FAILED,
//                 payload: result.message || "check details"
//               });
//             }

//             _context2.next = 12;
//             break;

//           case 9:
//             _context2.prev = 9;
//             _context2.t0 = _context2["catch"](0);
//             console.log(_context2.t0);

//           case 12:
//           case "end":
//             return _context2.stop();
//         }
//       }
//     }, null, null, [[0, 9]]);
//   };
// };

// exports.logIn = logIn;

// var updateUser = function updateUser(userData) {
//   return function _callee3(dispatch) {
//     var token, result;
//     return regeneratorRuntime.async(function _callee3$(_context3) {
//       while (1) {
//         switch (_context3.prev = _context3.next) {
//           case 0:
//             token = localStorage.getItem("auth");

//             if (!token) {
//               _context3.next = 6;
//               break;
//             }

//             _context3.next = 4;
//             return regeneratorRuntime.awrap((0, _api.httpRequest)({
//               url: "/profile-update",
//               method: "PUT",
//               headers: {
//                 Authorization: "Bearer ".concat(token)
//               },
//               body: JSON.stringify(_objectSpread({}, userData))
//             }));

//           case 4:
//             result = _context3.sent;
//             console.log(result);

//           case 6:
//           case "end":
//             return _context3.stop();
//         }
//       }
//     });
//   };
// };

// exports.updateUser = updateUser;

// var fetchProfile = function fetchProfile(history) {
//   return function _callee4(dispatch) {
//     var token, result;
//     return regeneratorRuntime.async(function _callee4$(_context4) {
//       while (1) {
//         switch (_context4.prev = _context4.next) {
//           case 0:
//             token = localStorage.getItem("auth");

//             if (!token) {
//               _context4.next = 7;
//               break;
//             }

//             _context4.next = 4;
//             return regeneratorRuntime.awrap((0, _api.httpRequest)({
//               url: history.pathname === "/admin" ? "/admin/user" : "/me",
//               method: "GET",
//               headers: {
//                 "Authorization": "Bearer ".concat(token)
//               }
//             }));

//           case 4:
//             result = _context4.sent;
//             console.log("fetchuser", result);

//             if (result.user) {
//               dispatch({
//                 type: actiontypes.GET_CURRENT_USER,
//                 payload: {
//                   isLoggedIn: true,
//                   user: result.user
//                 }
//               });
//             }

//           case 7:
//           case "end":
//             return _context4.stop();
//         }
//       }
//     });
//   };
// };

// exports.fetchProfile = fetchProfile;

// var logOutAction = function logOutAction(navigate) {
//   return function _callee5(dispatch) {
//     return regeneratorRuntime.async(function _callee5$(_context5) {
//       while (1) {
//         switch (_context5.prev = _context5.next) {
//           case 0:
//             dispatch({
//               type: actiontypes.LOG_OUT
//             });
//             navigate("/");

//           case 2:
//           case "end":
//             return _context5.stop();
//         }
//       }
//     });
//   };
// }; // export const updateUser = (userData, navigate) => async (dispatch) => {
// //   try {
// //     const { data } = await updateUserApi(userData);
// //     console.log(data, "data log action redux");
// //     dispatch({
// //       type: actiontypes.UPDATE_USER,
// //       payload: data,
// //     });
// //     navigate("/user-dashboard");
// //     console.log("successful", data);
// //   } catch (error) {
// //     console.log("errorno update action redux");
// //   }
// // };


// exports.logOutAction = logOutAction;