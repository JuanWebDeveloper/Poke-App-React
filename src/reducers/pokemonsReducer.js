import { types } from '../types/types';

const initialState = [
  {
    id: '',
    name: '',
    image: '',
    description: '',
  },
];

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
