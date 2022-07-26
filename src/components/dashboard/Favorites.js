import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components.
import { Card } from './Card';
import { Loading } from '../loading/Loading';

export const Favorites = () => {
  const { favorites } = useSelector(({ pokemons }) => pokemons);
  const { loading } = useSelector(({ ui }) => ui);

  return (
    <div className='favorites'>
      {loading && (
        <div className='main-loading'>
          <Loading />
        </div>
      )}
      {!loading && (
        <div className='favorites-content'>
          {favorites.length > 0 ? (
            <Fragment>
              <h2 className='title capitalize'>Mis pokemons favoritos</h2>
              <div className='favorites-content_pokemons'>
                {favorites.map((pokemon) => (
                  <Card key={pokemon.docId} {...pokemon} />
                ))}
              </div>
            </Fragment>
          ) : (
            <div className='favorites-content_no-favorites'>
              <h2 className='title capitalize'>No tienes pokemons favoritos.</h2>
              <p>Para agregar un pokemon a tus favoritos, haz click en el botón de favorito de cada pokemon.</p>
              <Link to='/dashboard/pokemons'>
                <button className='btn-default'>Ver Pokemons.</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
