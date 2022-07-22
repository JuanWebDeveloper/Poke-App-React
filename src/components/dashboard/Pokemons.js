import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions.
import { getPokemons } from '../../actions/pokemons';

// Card Component.
import { Card } from './Card';

export const Pokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className='pokemons'>
      <div className='pokemons-content'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
