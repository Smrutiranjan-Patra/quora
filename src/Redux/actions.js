import axios from 'axios';
import {SAVE_ID, SAVE_TOKEN, SAVE_USER} from './actionTypes';

export const saveToken = payload => {
  return {
    type: SAVE_TOKEN,
    payload,
  };
};

export const saveUser = payload => {
  return {
    type: SAVE_USER,
    payload,
  };
};

export const saveID = payload => {
  return {
    type: SAVE_ID,
    payload,
  };
};

export const createUser = payload => dispatch => {
  return axios
    .post ('http://localhost:2333/users', payload)
    .then (res => {
      dispatch (saveToken (res.token));
    })
    .catch (err => {
      console.log ('err:', err);
    });
};
