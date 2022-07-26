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
    moves: [''],
    stats: [{ name: '', value: '' }],
    specie: '',
    types: [''],
  },
  pokemonByName: {
    id: '',
    name: '',
    image: '',
    thereResult: false,
  },
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getPokemons:
      return {
        ...state,
        pokemons: action.payload,
      };
    case types.getPokemonDetails:
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    case types.getPokemonByName:
      return {
        ...state,
        pokemonByName: action.payload,
      };
    default:
      return state;
  }
};
