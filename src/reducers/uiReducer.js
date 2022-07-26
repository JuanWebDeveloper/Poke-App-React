import { types } from '../types/types';

const initialState = {
  errorMessage: '',
  loading: false,
  withMistakes: false,
  validateField: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.formsError:
      return {
        ...state,
        errorMessage: action.payload,
        withMistakes: true,
        validateField: action.field,
      };
    case types.cleanUpErrors:
      return {
        ...state,
        errorMessage: '',
        withMistakes: false,
        validateField: '',
      };
    case types.startLoading:
      return {
        ...state,
        loading: true,
      };
    case types.stopLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
