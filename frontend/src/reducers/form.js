import {
  FORM_SUCCESS
} from '../actions/types';
import { handleActions } from 'redux-actions';

const formInitialState = {
  percentage : null,
  age : null,
  weight : null,
  muscle_mass : null,
  body_fat : null,
  smoking : null,
  file : null
}

export default handleActions({
  [FORM_SUCCESS] : (state, action) => {
    console.log(action.meta);
    return {
      percentage : action.payload.percentage,
      ...action.meta,
    }
  }
}, formInitialState)
