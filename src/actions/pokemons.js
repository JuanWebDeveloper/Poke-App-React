import { types } from '../types/types';
import { startLoading, stopLoading } from './ui';

// Action To Get Pokemons.
const pokemons = (pokemons) => ({
  type: types.getPokemons,
  payload: pokemons,
});

export const getPokemons = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.json())
      .then((data) => {
        const mapPokemons = data.results
          .map((pokemon) => {
            return {
              id: pokemon.url.split('/')[6],
              name: pokemon.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`,
            };
          })
          .sort((a, b) => a.id - b.id);

        dispatch(pokemons(mapPokemons));
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
      });
  };
};

// Action To Get Pokemon Details.
const pokemonDetails = (pokemon) => ({
  type: types.getPokemonDetails,
  payload: pokemon,
});

export const getPokemonDetails = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const mapPokemon = {
          id: data.id,
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          moves: data.moves.map((move) => move.move.name),
          stats: data.stats.map((stat) => {
            return {
              name: stat.stat.name,
              value: stat.base_stat,
            };
          }),
          specie: data.species.name,
          types: data.types.map((type) => type.type.name),
        };

        dispatch(pokemonDetails(mapPokemon));
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
      });
  };
};

// Action To Get Pokemon By Name.
const pokemonByName = (results) => ({
  type: types.getPokemonByName,
  payload: results,
});

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          dispatch(
            pokemonByName({
              id: '',
              name: '',
              image: '',
              thereResult: false,
            })
          );
        } else {
          const mapPokemon = {
            id: data.id,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            thereResult: true,
          };

          dispatch(pokemonByName(mapPokemon));
        }

        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
      });
  };
};
