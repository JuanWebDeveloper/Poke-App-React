import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonByName } from '../../actions/pokemons';
import { Loading } from '../loading/Loading';
import { Card } from './Card';

export const Search = () => {
  const dispatch = useDispatch();
  const { pokemonByName } = useSelector(({ pokemons }) => pokemons);
  const { loading } = useSelector(({ ui }) => ui);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    !pokemonByName.thereResult && setSearching(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(search.toLowerCase()));
    setSearching(true);
  };

  return (
    <div className='search'>
      {loading && (
        <div className='main-loading'>
          <Loading />
        </div>
      )}
      <div className='search-content'>
        <div className='search-content_search'>
          <form onSubmit={handleSubmit}>
            <input type='text' name='search' placeholder='Nombre del pokemon' value={search} onChange={handleSearch} />
            <button className={`btn-default ${search.length < 1 && 'disabled'}`}>Buscar</button>
          </form>
        </div>

        {searching && (
          <Fragment>
            {pokemonByName.thereResult ? (
              <div className='search-content_result'>
                <Card {...pokemonByName} />
              </div>
            ) : (
              <Fragment>
                {!loading && (
                  <div className='search-content_without-result'>
                    No se encontro ningun pokemon con el nombre: <span>{search}</span>
                  </div>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};
