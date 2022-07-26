import { Fragment } from 'react';
import { useSelector } from 'react-redux';

// Components.
import { Card } from './Card';
import { Loading } from '../loading/Loading';

export const Pokemons = () => {
  const { pokemons } = useSelector(({ pokemons }) => pokemons);
  const { loading } = useSelector(({ ui }) => ui);

  return (
    <div className='pokemons'>
      {loading && (
        <div className='main-loading'>
          <Loading />
        </div>
      )}
      <div className='pokemons-content'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};
