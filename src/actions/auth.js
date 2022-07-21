import { types } from '../types/types';
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from '../firebase/firebaseConfig';

import { validateSignUp } from '../helpers/validator';

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

// Action To Sign Up The User With Email And Password In Firebase.
export const signUp = (username, email, password) => {
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: username }).then(() => dispatch(initiateAuth(user.uid, user.displayName)));
      })
      .catch((error) => {
        validateSignUp({}, dispatch, true, error.message);
      });
  };
};
