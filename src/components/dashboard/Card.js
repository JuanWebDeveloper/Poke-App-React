export const Card = () => {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-content_header'>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png' alt='ivysaur' />
        </div>
        <div className='card-content_body'>
          <h2 className='sub-title'>ivysaur</h2>
          <div className='card-content_body-actions'>
            <button className='btn-default'>
              Ver más <i className='fa-solid fa-chevron-right'></i>
            </button>
            <button className='btn-default'>
              Agregar a favoritos <i className='fa-solid fa-star'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
