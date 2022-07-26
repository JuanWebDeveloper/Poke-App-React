import { useSelector } from 'react-redux';

// Card Component.
import { Card } from './Card';

export const Pokemons = () => {
  const { pokemons } = useSelector(({ pokemons }) => pokemons);

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
