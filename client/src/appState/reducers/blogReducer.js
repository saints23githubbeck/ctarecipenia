import * as actiontypes from "../actionTypes";
// CONNECTIONSTRING=mongodb+srv://kamrajng:kamraj%404321@cluster0.hhs76.mongodb.net/Recipemenia?retryWrites=true&w=majority
const emptyState = {
    title: "",
    permLink: "",
    prepareTime: "",
    cookTime: "",
    shortDesc: "", 
    description:"",
    postedBy: "",
    metaDescription: "",
    image:  "",
};
const initialState = {
  blogs: [],
  ...emptyState,
  loading: false,
  error: "",
};

export const blog = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_ALL_BLOG:
        console.log("who you blog", action.type)
        console.log("All blog from reducer", action.payload)
      return {
        ...state,
        blogs: action.payload,
      };
    case actiontypes.ADD_BLOG:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.LOADING_BLOG:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actiontypes.BLOG_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actiontypes.RESET_BLOG_STATE:
      return {
        ...state,
        ...emptyState,
      };
      case actiontypes.UPDATE_BLOG:
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
        
    default:
      return state;
  }
};
