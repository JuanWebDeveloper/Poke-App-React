import { types } from '../types/types';

const initialState = {
  pokemons: [
    {
      id: '',
      name: '',
      image: '',
    },
  ],
  pokemonDetails: {
    id: '',
    name: '',
    image: '',
    description: '',
    moves: [''],
    stats: [{ name: '', value: '' }],
    species: '',
    types: [''],
    evolution: '',
  },
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getPokemons:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
