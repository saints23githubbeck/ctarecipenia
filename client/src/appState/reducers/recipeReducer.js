import * as actiontypes from "../actionTypes";

const emptyState = {
  title: "",
  category: "",
  image: "",
  description: "",
  videoLink: "",
  direction: "",
  metaDescription: "",
  featuredImage: "",
  permlink: "",
  difficulty: "",
  prepareTime: "",
  serves: "",
  calories: "",
  tags: [],
  facts: "",
  additionalInfo: "",
  ingredients: [],
};
const initialState = {
  recipes: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const recipe = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_RECIPES:
      console.log("who you", action.type)
      return {
        ...state,
        recipes: action.payload,
      };
    case actiontypes.ADD_RECIPE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.LOADING_RECIPE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.RECIPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actiontypes.RESET_RECIPE_STATE:
      return {
        ...state,
        ...emptyState,
      };
      case actiontypes.UPDATE_RECIPE:
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      case actiontypes.USER_RECIPE:
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
        
    default:
      return state;
  }
};
