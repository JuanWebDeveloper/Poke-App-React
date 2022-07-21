import { types } from '../types/types';

const initialState = {
  uid: '',
  username: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.initiateAuth:
      return {
        uid: action.payload.uid,
        username: action.payload.username,
      };

    case types.finishAuth:
      return {
        uid: '',
        username: '',
      };

    default:
      return state;
  }
};
