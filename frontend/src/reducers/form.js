import {
  FORM_SUCCESS
} from '../actions/types';
import { handleActions } from 'redux-actions';

const formInitialState = {
  percentage : null,
}

export default handleActions({
  [FORM_SUCCESS] : (state, action) => {
    return {
      percentage : action.payload.percentage
    }
  }
}, formInitialState)
