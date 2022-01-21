import {Satellite} from '@material-ui/icons';
import {
  POST_QUE,
  SAVE_ID,
  SAVE_POSTS,
  SAVE_TOKEN,
  SAVE_USER,
} from './actionTypes';

const getToken = localStorage.getItem ('token');

const initState = {
  email: null,
  token: getToken || null,
  user: {},
  posts: [],
  ID: null,
  userPresent: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case SAVE_USER:
      return {
        ...state,
        userPresent: true,
        user: payload,
      };
    case SAVE_ID:
      return {
        ...state,
        ID: payload,
      };
    case SAVE_POSTS:
      console.log ('payload', payload);
      return {
        ...state,
        posts: payload,
      };
    case POST_QUE:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    default:
      return state;
  }
};
