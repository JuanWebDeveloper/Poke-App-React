import { types } from '../types/types';

const initialState = {
  uid: '',
  username: '',
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.initiateAuth:
      return {
        uid: action.payload.uid,
        username: action.payload.username,
        isAuthenticated: true,
      };

    case types.finishAuth:
      return {
        uid: '',
        username: '',
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
