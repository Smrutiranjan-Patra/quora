import {Satellite} from '@material-ui/icons';
import {SAVE_ID, SAVE_TOKEN, SAVE_USER} from './actionTypes';

const getToken = localStorage.getItem ('token');

const initState = {
  email: null,
  token: getToken || null,
  user: {},
  ID: null,
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
        user: payload,
      };
    case SAVE_ID:
      return {
        ...state,
        ID: payload,
      };
    default:
      return state;
  }
};
