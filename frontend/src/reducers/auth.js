import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/types';
import { handleActions } from 'redux-actions';

const loginInitialState = {
  token: null,
  expires: null,
  isAuthenticated: false,
  user: null,
  error: false,
  errorDetail: {}
}

export default handleActions({
    [LOGIN_SUCCESS] : (state, action) => {
       console.log(action.payload)
      return { ...state,
               token: action.payload.token,
               user: action.payload.user,
               expires: action.payload.expires,
               isAuthenticated : true,
               error : false,
               errorDetail : {}
             };
    },
    [LOGOUT] : (state, action) => {
      return { ...state,
               token: null,
               user: null,
               expires: null,
               isAuthenticated : false,
               error : false,
               errorDetail : {}
             };
    },
    [LOGIN_FAILURE] : (state, action) => {
      // console.log(action.payload)
      return { ...state,
               error : true
             };
    },
    [REGISTER_SUCCESS] : (state, action) => {
      return {
          ...state,
          token : action.payload.token,
          user : action.payload.user,
          expires : action.payload.expires,
          isAuthenticated : true,
          error : false,
          errorDetail : {}
      }
    },
    [REGISTER_FAILURE] : (state, action) => {
      console.log(action)
      return {
          ...state,
          error : true,
          // tempError : {}
          // action.payload.response ||||{'non_field_errors': action.payload.statusText}
          errorDetail :  action.payload.response||{'non_field_errors': action.payload.statusText}
        }
    }
}, loginInitialState);
