import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions.
import { getPokemons } from '../../actions/pokemons';

// Card Component.
import { Card } from './Card';

export const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector(({ pokemons }) => pokemons);

  useEffect(() => {
    return () => dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className='pokemons'>
      <div className='pokemons-content'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};
