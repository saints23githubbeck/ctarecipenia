import * as actiontypes from "../actionTypes";
const emptyState = {
  recipe: "",
  title: "",
  image: "",
};
const initialState = {
  sliders: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const slider = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_SLIDER:
      console.log("who you Slider", action.type)
          console.log("All slider from reducer", action.payload)
      return {
        ...state,
        sliders: action.payload,
    };

    case actiontypes.ADD_SLIDER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
    };

    case actiontypes.LOADING_SLIDER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
    };

    case actiontypes.SLIDER_ERROR:
      return {
        ...state,
        error: action.payload,
    };

    case actiontypes.RESET_SLIDER_STATE:
      return {
        ...state,
        ...emptyState,
      };
    case actiontypes.UPDATE_SLIDER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
