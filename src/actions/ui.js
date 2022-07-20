import { types } from '../types/types';

// Actions to handle errors.
export const formsError = (errorMessage, field) => ({
  type: types.formsError,
  payload: errorMessage,
  field: field,
});

export const cleanUpErrors = () => ({
  type: types.cleanUpErrors,
});
