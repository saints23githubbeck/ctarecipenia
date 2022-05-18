"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecipe = exports.submitRecipe = exports.setRecipesError = exports.setRecipesLoading = exports.handleRecipeState = exports.getRecipesByID = exports.getALLRecipes = void 0;

var _api = require("../../api");

var actiontypes = _interopRequireWildcard(require("../actionTypes"));

var _AuthAction = require("./AuthAction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getALLRecipes = function getALLRecipes() {
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
              url: "/recipes",
              method: "GET"
            }));

          case 4:
            result = _context.sent;

            if (result.success === true) {
              dispatch({
                type: actiontypes.GET_ALL_RECIPES,
                payload: result.recipes
              });
            }

            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.getALLRecipes = getALLRecipes;

var getRecipesByID = function getRecipesByID() {
  return function _callee2(dispatch) {
    var result;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch((0, _AuthAction.setIsLoading)(true));
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/recipe/:slug",
              method: "GET"
            }));

          case 4:
            result = _context2.sent;

            if (result.success === true) {
              dispatch({
                type: actiontypes.UPDATE_RECIPE,
                payload: result.recipes
              });
            }

            _context2.next = 10;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.getRecipesByID = getRecipesByID;

var handleRecipeState = function handleRecipeState(name, value) {
  return {
    type: actiontypes.ADD_RECIPE,
    payload: {
      name: name,
      value: value
    }
  };
};

exports.handleRecipeState = handleRecipeState;

var setRecipesLoading = function setRecipesLoading(name, value) {
  return {
    type: actiontypes.LOADING_RECIPE,
    payload: {
      name: name,
      value: value
    }
  };
};

exports.setRecipesLoading = setRecipesLoading;

var setRecipesError = function setRecipesError(value) {
  return {
    type: actiontypes.RECIPE_ERROR,
    payload: value
  };
};

exports.setRecipesError = setRecipesError;

var submitRecipe = function submitRecipe(payload, onClose) {
  return function _callee3(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context3.next = 13;
              break;
            }

            _context3.prev = 2;
            dispatch(setRecipesLoading("loading", true));
            _context3.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/add-recipe",
              method: "POST",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context3.sent;
            console.log(result, "wait you");

            if (result.message === "Recipe added") {
              dispatch(setRecipesLoading("loading", false));
              dispatch(getALLRecipes());
              onClose();
              dispatch({
                type: actiontypes.RESET_RECIPE_STATE
              });
            } else {
              dispatch(setRecipesLoading("loading", false));
              dispatch(setRecipesError(result.error));
            }

            _context3.next = 13;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
};

exports.submitRecipe = submitRecipe;

var updateRecipe = function updateRecipe(payload, onClose) {
  return function _callee4(dispatch) {
    var token, result;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = localStorage.getItem("auth");

            if (!token) {
              _context4.next = 14;
              break;
            }

            _context4.prev = 2;
            dispatch(setRecipesLoading("loading", true));
            _context4.next = 6;
            return regeneratorRuntime.awrap((0, _api.httpRequest)({
              url: "/recipe/".concat(payload._id),
              // url: `/recipe/:slug`,
              method: "PUT",
              body: JSON.stringify(_objectSpread({}, payload)),
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            }));

          case 6:
            result = _context4.sent;
            console.log("updated", payload);
            console.log(result, "updated");

            if (result.status === 200) {
              dispatch(setRecipesLoading("loading", false));
              dispatch(getALLRecipes());
              onClose();
              dispatch({
                type: actiontypes.RESET_RECIPE_STATE
              });
            } else {
              dispatch(setRecipesLoading("loading", false));
              dispatch(setRecipesError(result.error));
            }

            _context4.next = 14;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[2, 12]]);
  };
};

exports.updateRecipe = updateRecipe;