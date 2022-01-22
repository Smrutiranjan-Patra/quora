import axios from 'axios';
import {
  POST_QUE,
  SAVE_ID,
  SAVE_POSTS,
  SAVE_TOKEN,
  SAVE_USER,
} from './actionTypes';

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

export const savePosts = payload => {
  return {
    type: SAVE_POSTS,
    payload,
  };
};

export const setPostData = data => {
  return {
    type: POST_QUE,
    payload: data,
  };
};

export const getPostData = () => dispatch => {
  return axios
    .get ('https://peaceful-beach-55920.herokuapp.com/post')
    .then (res => {
      // console.log ('res', res);
      // savePosts (res.data);
      dispatch (savePosts (res.data));
    })
    .catch (err => {
      console.log (err);
    });
};

export const postQue = payload => dispatch => {
  return axios
    .post ('https://peaceful-beach-55920.herokuapp.com/post', payload)
    .then (res => {
      // console.log (res);
      setPostData (res);
      dispatch (res);
    })
    .catch (err => {
      console.log ('err', err);
    });
};

export const createUser = payload => dispatch => {
  return axios
    .post ('https://peaceful-beach-55920.herokuapp.com/users', payload)
    .then (res => {
      dispatch (saveToken (res.token));
    })
    .catch (err => {
      console.log ('err:', err);
    });
};
