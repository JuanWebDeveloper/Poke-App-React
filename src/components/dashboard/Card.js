import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addPokemonToFavoritesAction } from '../../actions/pokemons';

export const Card = ({ id, name, image }) => {
  const dispatch = useDispatch();

  const addPokemonToFavorites = () => {
    const pokemon = { id, name, image };

    dispatch(addPokemonToFavoritesAction(pokemon));
  };

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-content_header'>
          <img src={image} alt={name} />
        </div>
        <div className='card-content_body'>
          <h2 className='sub-title capitalize'>{name}</h2>
          <div className='card-content_body-actions'>
            <Link to={`/dashboard/pokemon/${id}`}>
              <button className='btn-default btn-vm'>
                Ver más <i className='fa-solid fa-chevron-right'></i>
              </button>
            </Link>
            <button className='btn-default' onClick={addPokemonToFavorites}>
              Agregar a favoritos <i className='fa-solid fa-star'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
