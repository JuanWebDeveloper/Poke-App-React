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

// Action To Get Pokemon Details.
export const getPokemonDetails = (id) => () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(stopLoading());
        return {
          id: data.id,
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          description: data.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text,
          evolutionChain: data.evolution_chain.url,
          evolutionChainId: data.evolution_chain.url.split('/')[6],
          moves: data.moves.map((move) => move.move.name),
          stats: data.stats.map((stat) => {
            return {
              name: stat.stat.name,
              value: stat.base_stat,
            };
          }),
          species: data.species.name,
          types: data.types.map((type) => type.type.name),
          evolution: data.species.evolves_from_species ? data.species.evolves_from_species.name : 'No Evolution',
        };
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
      });
  };
};
