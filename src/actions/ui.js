import { types } from '../types/types';

// Actions To Handle Errors.
export const formsError = (errorMessage, field) => ({
  type: types.formsError,
  payload: errorMessage,
  field: field,
});

export const cleanUpErrors = () => ({
  type: types.cleanUpErrors,
});

// Actions To Handle Loading.
export const startLoading = () => ({
  type: types.startLoading,
});

export const stopLoading = () => ({
  type: types.stopLoading,
});
