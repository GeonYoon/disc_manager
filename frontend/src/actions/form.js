import axios from 'axios';

import {
  FORM_SUCCESS
} from './types';

export const form = (formData, history) => async dispatch => {
  const res = await axios.post('http://127.0.0.1:8000/api/form/',formData )
  dispatch({type: FORM_SUCCESS, payload: res.data, meta : formData })
  history.push('/home')
}