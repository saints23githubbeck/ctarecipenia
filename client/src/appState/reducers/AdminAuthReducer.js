import * as actiontypes from "../actionTypes";

const emptyState = {
  username: "",
  firstName: "",
  lastName: "",
  country: "",
  userGroup: "",
  image: "",
  description: "",
  password: "",
  email: "",
  secret: "",
};

const initialState = {
  subscribers: [],
  admins: [],
  ...emptyState,
    isLoggedIn: false,
    isLoading: false,
    user: null,
    message: "",
  };

  export const adminProfile = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.SIGN_IN:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                message: action?.payload.message,
                user: action?.payload.user,
        };

        case actiontypes.GET_ALL_ADMIN:
      console.log("who you admin", action.type)
          console.log("All Admin from reducer", action.payload)
            return {
              ...state,
              isLoggedIn: action.payload.isLoggedIn,
              admins: action.payload,
        };
        case actiontypes.GET_ALL_USER:
      console.log("who you user", action.type)
          console.log("from reducer", action.payload)
            return {
              ...state,
              isLoggedIn: action.payload.isLoggedIn,
              subscribers: action.payload,
        };
        case actiontypes.ADD_INPUT:
            return {
              ...state,
              [action.payload.name]: action.payload.value,
        };
        case actiontypes.LOADING_USER:
            return {
              ...state,
              [action.payload.name]: action.payload.value,
        };

        case actiontypes.USER_ERROR:
                return {
                ...state,
                error: action.payload,
        };

        case actiontypes.RESET_USER_STATE:
            return {
                ...state,
                ...emptyState,
        };

        case actiontypes.GET_CURRENT_ADMIN:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: action.payload.isLoggedIn,
        };
        
        case actiontypes.ADMIN_LOGOUT:
        localStorage.clear();
        return {
            ...state,
            isLoggedIn: false,
            message: "signed out",
            user: null,
        };

        case actiontypes.ADMIN_UPDATE_USERS:
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }

        default:
        return state;  
    }
}