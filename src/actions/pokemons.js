import { types } from '../types/types';
import { startLoading, stopLoading } from './ui';

// Action To Get Pokemons.
export const getPokemons = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.json())
      .then((data) => {
        const pokemons = data.results
          .map((pokemon) => {
            return {
              id: pokemon.url.split('/')[6],
              name: pokemon.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`,
            };
          })
          .sort((a, b) => a.id - b.id);

        dispatch({
          type: types.getPokemons,
          payload: pokemons,
        });
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
      });
  };
};
