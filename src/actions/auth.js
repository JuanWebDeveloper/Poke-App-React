import { types } from '../types/types';

// Action To Initiate Authentication.
export const initiateAuth = (uid, username) => ({
  type: types.initiateAuth,
  payload: {
    uid,
    username,
  },
});

// Action To Finish Authentication.
export const finishAuth = () => ({
  type: types.finishAuth,
});
