import { Card } from './Card';

export const Favorites = () => {
  return (
    <div className='favorites'>
      <div className='favorites-content'>
        <h2 className='title capitalize'>Mis pokemons favoritos</h2>
        <div className='favorites-content_pokemons'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
