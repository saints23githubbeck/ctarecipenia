import * as actiontypes from "../actionTypes";
const emptyState = {
  location: "",
  title: "",
  image: "",
  code: "",
};
const initialState = {
  ads: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const advert = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_ADVERT:
      return {
        ...state,
        ads: action.payload,
      };
    case actiontypes.ADD_ADVERT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.LOADING_ADVERT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.ADVERT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actiontypes.RESET_ADVERT_STATE:
      return {
        ...state,
        ...emptyState,
      };
    case actiontypes.UPDATE_ADVERT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
