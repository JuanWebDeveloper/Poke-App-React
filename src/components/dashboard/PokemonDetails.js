import { Link } from 'react-router-dom';

export const PokemonDetails = () => {
  return (
    <div className='pokemon-details'>
      <div className='pokemon-details_content'>
        <Link to='/dashboard/pokemons'>
          <button className='btn-default'>
            <i className='fas fa-arrow-left'></i>
            Regresar a la lista
          </button>
        </Link>
        <div className='pokemon-details_content-image'>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt='pokemon' />
        </div>
        <div className='pokemon-details_content-info'>
          <h2 className='title'>Bulbasaur</h2>

          <div className='pokemon-details_content-info_section'>
            <h2 className='sub-title'>Moves</h2>
            <ul>
              <li>
                <i className='fa-solid fa-share'></i> Tackle
              </li>
              <li>
                <i className='fa-solid fa-share'></i> Growl
              </li>
              <li>
                <i className='fa-solid fa-share'></i> Vine Whip
              </li>
            </ul>
          </div>

          <div className='pokemon-details_content-info_section'>
            <h2 className='sub-title'>Stats</h2>
            <ul>
              <li>
                <i className='fa-solid fa-share'></i>
                HP: <span>45</span>
              </li>
              <li>
                <i className='fa-solid fa-share'></i>
                Attack: <span>45</span>
              </li>
              <li>
                <i className='fa-solid fa-share'></i>
                Defense: <span>45</span>
              </li>
              <li>
                <i className='fa-solid fa-share'></i>
                Speed: <span>45</span>
              </li>
            </ul>
          </div>

          <h2 className='sub-title'>
            Specie: <span>Bulbasaur</span>
          </h2>

          <div className='pokemon-details_content-info_section'>
            <h2 className='sub-title'>Types</h2>
            <ul>
              <li>
                <i className='fa-solid fa-share'></i>Grass
              </li>
              <li>
                <i className='fa-solid fa-share'></i>Poison
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
