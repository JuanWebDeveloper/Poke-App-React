import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addPokemonToFavoritesAction } from '../../actions/pokemons';

export const Card = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(({ pokemons }) => pokemons);
  const isFavorite = favorites.find((pokemon) => pokemon.id === id);

  const addPokemonToFavorites = () => {
    const pokemon = { id, name, image };

    dispatch(addPokemonToFavoritesAction(pokemon));
  };

  return (
    <div className='card'>
      <div className='card-content'>
        {isFavorite ? (
          <button className='btn-rf'>
            <i className='fa-solid fa-star'></i>
          </button>
        ) : (
          <button className='btn-af' onClick={addPokemonToFavorites}>
            <i className='fa-solid fa-star'></i>
          </button>
        )}
        <div className='card-content_header'>
          <img src={image} alt={name} />
        </div>
        <div className='card-content_body'>
          <h2 className='sub-title capitalize'>{name}</h2>

          <Link to={`/dashboard/pokemon/${id}`}>
            <button className='btn-default'>
              Ver Más <i className='fa-solid fa-chevron-right'></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
