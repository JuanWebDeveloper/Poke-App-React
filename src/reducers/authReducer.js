import { types } from '../types/types';

const initialState = {
  uid: '',
  username: '',
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.signIn:
      return {
        uid: action.payload.uid,
        username: action.payload.displayName,
        isAuthenticated: true,
      };

    case types.signOut:
      return {
        uid: '',
        username: '',
        isAuthenticated: false,
      };

    default:
      return state;
  }
};