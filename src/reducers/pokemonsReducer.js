import { types } from '../types/types';

const initialState = {
  pokemons: [
    {
      id: '',
      name: '',
      image: '',
    },
  ],
  favorites: [
    {
      docId: '',
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
    case types.getFavoritePokemons:
      return {
        ...state,
        favorites: action.payload,
      };
    case types.addPokemonToFavorites:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case types.removePokemonFromFavorites:
      return {
        ...state,
        favorites: state.favorites.filter((pokemon) => pokemon.docId !== action.payload),
      };
    case types.cleanUpPokemons:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
