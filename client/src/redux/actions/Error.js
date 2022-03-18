
import * as actiontypes from "../actionTypes";

export const setError = (errorMessage) => (dispatch) => {
  dispatch({
    type: actiontypes.SET_ERROR,
    payload: errorMessage
  })
}

export const clearError = () => (dispatch) =>{
  dispatch({
    type: actiontypes.CLEAR_ERROR
  })
}