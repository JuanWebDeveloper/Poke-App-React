export const Card = ({ name, image }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-content_header'>
          <img src={image} alt={name} />
        </div>
        <div className='card-content_body'>
          <h2 className='sub-title'>{name}</h2>
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
