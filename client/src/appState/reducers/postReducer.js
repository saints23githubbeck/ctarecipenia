import * as actiontypes from "../actionTypes";


export const posts = (posts = [], action) => {
  switch (action.type) {
    case actiontypes.DELETE_POST:
      return posts.filter(post => post._id !== action.payload);
    case actiontypes.FETCH_POST:
      return action.payload;
      break;
      case actiontypes.UPDATE_POST:
      case actiontypes.LIKE_POST:
      return posts.map(post => post._id === action.payload ? action.payload: post)
      break;
      case actiontypes.CREATE_POST:
      return [...posts, action.payload];
      break;
    default:
      return posts;
  }
}



export const postsId = (state = null, action) => {
  switch (action.type) {
    case actiontypes.UPDATE_ID:
      return action.payload;
      break;
    default:
      return state;
  }
}


