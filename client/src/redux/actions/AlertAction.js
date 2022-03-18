import * as actiontypes from "../actionTypes";

export const updateError = (error)  => {

  try {
    dispatch({
      type: actiontypes.UPDATE_ERROR,
      payload: error
    })
  } catch (error) {
    console.log(error);
  }
}