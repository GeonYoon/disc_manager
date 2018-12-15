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
  accident : null,
  pain : null,
  file : null,
  gender : null,
  score : null
}

export default handleActions({
  [FORM_SUCCESS] : (state, action) => {
    console.log(action.payload.score);
    return {
      ...action.meta,
      percentage : action.payload.percentage,
      score : action.payload.score,
    }
  }
}, formInitialState)
