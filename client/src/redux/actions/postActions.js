import * as actiontypes from "../actionTypes";

import { fetchPostapi, createPostapi, updatePostapi, deletePostapi, likePostapi } from "../../Api/index";


export const fetchPost = () => async (dispatch) => {
  try {

    const { data } = await fetchPostapi() ;
    dispatch({
      type: actiontypes.FETCH_POST,
      payload: data
    });

  } catch (error) {
    console.log(error)
  }
}

export const createForm = (formData) => async (dispatch) => { 
  const { data } = await createPostapi(formData);
  
  try {
    dispatch({
      type: actiontypes.CREATE_POST,
      payload: data
    });

  } catch (error) {
    console.log(error)

  }
}

export const updatePost = (currentid, post) => async(dispatch) => {

  try {
    const { data } = await updatePostapi(currentid, post);
    dispatch({
      type: actiontypes.UPDATE_POST,
      payload: data
    });
  } catch (error) {
    console.log(error)
  }

}


export const updateCurrentId = (updateId) => {
  console.log("updated id");

  return{
    type: actiontypes.UPDATE_ID,
    payload: updateId
  }
  
}

export const deletePost = ( id ) => async(dispatch) => {

  try {
     await deletePostapi( id );
    dispatch({
      type: actiontypes.DELETE_POST
    });
    console.log("deleted")
  } catch (error) {
    console.log(error)
  }

}

export const likePost = (id) => async(dispatch) => {
  
  try {
    const { data } = await likePostapi(id);
    dispatch({
      type: actiontypes.LIKE_POST,
      payload: data
    });
  } catch (error) {
    console.log(error);
    console.log("front wned")
  }
}

