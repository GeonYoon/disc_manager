import axios from 'axios';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORM_RESET
} from './types';

export const login = (username, password,history) => async dispatch => {
  try{
    const res = await axios.post('http://127.0.0.1:8000/api/auth/',{username, password})
    dispatch({type: LOGIN_SUCCESS, payload: res.data})
    history.push('/form');
  }
  catch (error){
     // console.log(Object.keys(error), error.message)
     dispatch({type: LOGIN_FAILURE})
  }
}
export const logout = () => async dispatch => {
  dispatch({type : FORM_RESET})
  dispatch({type: LOGOUT})
}

export const register = (username,password,password2,email,history) => async dispatch =>{
  try{
    const compact ={username,password,password2,email}
    const res = await axios.post('http://127.0.0.1:8000/api/auth/register/',compact)
    console.log(res.data);
    dispatch({type: REGISTER_SUCCESS, payload: res.data})
    history.push('/form');
  }
  catch(error){
    // console.log(error)
    dispatch({type: REGISTER_FAILURE, payload : error})
  }
}

