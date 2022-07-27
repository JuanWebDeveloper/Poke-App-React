import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonDetails } from '../../actions/pokemons';
import { Loading } from '../loading/Loading';

export const PokemonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector(({ ui }) => ui);
  const { pokemonDetails } = useSelector(({ pokemons }) => pokemons);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPokemonDetails(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      {loading ? (
        <div className='main-loading'>
          <Loading />
        </div>
      ) : (
        <div className='pokemon-details'>
          <div className='pokemon-details_content'>
            <Link to='/dashboard/pokemons'>
              <button className='btn-default'>
                <i className='fas fa-arrow-left'></i>
                Regresar a la lista
              </button>
            </Link>
            <div className='pokemon-details_content-image'>
              <img src={pokemonDetails.image} alt={pokemonDetails.name} />
            </div>
            <div className='pokemon-details_content-info'>
              <h2 className='title capitalize'>{pokemonDetails.name}</h2>

              <div className='pokemon-details_content-info_section'>
                <h2 className='sub-title'>Moves</h2>
                <ul>
                  {pokemonDetails.moves.map((move) => (
                    <li key={move}>
                      <i className='fa-solid fa-share'></i> {move}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='pokemon-details_content-info_section'>
                <h2 className='sub-title'>Stats</h2>
                <ul>
                  {pokemonDetails.stats.map((stat) => (
                    <li key={stat.name}>
                      <i className='fa-solid fa-share'></i>
                      {stat.name}: <span>{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className='sub-title'>
                Specie: <span className='capitalize'>{pokemonDetails.specie}</span>
              </h2>

              <div className='pokemon-details_content-info_section'>
                <h2 className='sub-title'>Types</h2>
                <ul>
                  {pokemonDetails.types.map((type) => (
                    <li key={type}>
                      <i className='fa-solid fa-share'></i> {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
