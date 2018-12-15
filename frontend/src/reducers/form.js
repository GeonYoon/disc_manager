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
      age : action.meta.age,
      weight : action.meta.weight,
      muscle_mass : action.meta.muscle_mass,
      body_fat : action.meta.body_fat,
      smoking : action.meta.smoking,
      file : null
    }
  }
}, formInitialState)
