import axios from 'axios';

import {
  FORM_SUCCESS
} from './types';

export const form = (age, blood_pressure, history) => async dispatch => {
  const compact = {age, blood_pressure}
  const res = await axios.post('http://127.0.0.1:8000/api/form/',compact)
  dispatch({type: FORM_SUCCESS, payload: res.data})
  history.push('/output')
}