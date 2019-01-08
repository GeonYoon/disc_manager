import axios from 'axios';
import {getConfig} from '../utils/config';


import {
  FORM_SUCCESS
} from './types';

export const form = (formData,token,history) => async dispatch => {
  const res = await axios.post('http://127.0.0.1:8000/api/form/',formData,{headers: {Authorization: `JWT ${token}`}})
                         
  console.log(res.data)
  dispatch({type: FORM_SUCCESS, payload: res.data, meta : formData })
  history.push('/home')
}