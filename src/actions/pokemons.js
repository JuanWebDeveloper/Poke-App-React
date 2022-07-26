import { addDoc, collection, deleteDoc, doc, firestore, getDocs } from '../firebase/firebaseConfig';

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
          id: String(data.id),
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          moves: data.moves.map((move) => move.move.name),
          stats: data.stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat })),
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
        const mapPokemon = {
          id: String(data.id),
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          thereResult: true,
        };

        dispatch(pokemonByName(mapPokemon));
        dispatch(stopLoading());
      })
      .catch(() => {
        dispatch(pokemonByName({ id: '', name: '', image: '', thereResult: false }));
        dispatch(stopLoading());
      });
  };
};

// Action To Get The Favorite Pokemons.
const favoritePokemons = (pokemons) => ({
  type: types.getFavoritePokemons,
  payload: pokemons,
});

export const getFavoritePokemons = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const { uid } = getState().auth;
    const docRef = collection(firestore, `${uid}/pokemons/favorites`);
    const snapshot = await getDocs(docRef);
    const pokemons = [];

    snapshot.forEach((doc) => {
      pokemons.push({ docId: doc.id, ...doc.data() });
    });

    dispatch(favoritePokemons(pokemons));
    dispatch(stopLoading());
  };
};

// Action To Add Pokemon To Favorites.
const addPokemonToFavorites = (pokemon) => ({
  type: types.addPokemonToFavorites,
  payload: pokemon,
});

export const addPokemonToFavoritesAction = (pokemon) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const { uid } = getState().auth;

    const docRef = await addDoc(collection(firestore, `${uid}/pokemons/favorites`), pokemon);

    dispatch(addPokemonToFavorites({ docId: docRef.id, ...pokemon }));
    dispatch(stopLoading());
  };
};

// Action To Remove Pokemon From Favorites.
const removePokemonFromFavorites = (docId) => ({
  type: types.removePokemonFromFavorites,
  payload: docId,
});

export const removePokemonFromFavoritesAction = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const { uid } = getState().auth;
    const { favorites } = getState().pokemons;
    const docId = favorites.find((pokemon) => pokemon.id === id).docId;

    await deleteDoc(doc(firestore, `${uid}/pokemons/favorites`, docId));

    dispatch(removePokemonFromFavorites(docId));
    dispatch(stopLoading());
  };
};

// Action To Clean Up The State Of The Pokemons.
export const cleanUpPokemons = () => ({
  type: types.cleanUpPokemons,
});
