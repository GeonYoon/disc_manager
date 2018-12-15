import axios from 'axios';

import {
  FORM_SUCCESS
} from './types';

export const form = (age, height,weight,muscle_mass,body_fat,smoking,file,history) => async dispatch => {
  const compact = {age, height,weight,muscle_mass,body_fat,smoking,file}
  const res = await axios.post('http://127.0.0.1:8000/api/form/',compact)
  dispatch({type: FORM_SUCCESS, payload: res.data})
  history.push('/home')
}