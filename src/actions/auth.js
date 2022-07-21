import { types } from '../types/types';
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from '../firebase/firebaseConfig';

import { validateSignIn, validateSignUp } from '../helpers/validator';
import { startLoading, stopLoading } from './ui';

// Action To Initiate Authentication.
const initiateAuth = (uid, username) => ({
  type: types.initiateAuth,
  payload: {
    uid,
    username,
  },
});

// Action To Finish Authentication.
const finishAuth = () => ({
  type: types.finishAuth,
});

// Action To Sign Up The User With Email And Password In Firebase.
export const signUp = (username, email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: username }).then(() => {
          dispatch(initiateAuth(user.uid, user.displayName));
          dispatch(stopLoading());
        });
      })
      .catch((error) => {
        validateSignUp({}, dispatch, true, error.message);
        dispatch(stopLoading());
      });
  };
};

// Action To Sign In The User With Email And Password In Firebase.
export const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(initiateAuth(user.uid, user.displayName));
        dispatch(stopLoading());
      })
      .catch((error) => {
        validateSignIn({}, dispatch, true, error.message);
        dispatch(stopLoading());
      });
  };
};
