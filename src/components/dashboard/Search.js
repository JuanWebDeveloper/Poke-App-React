import { Card } from './Card';

export const Search = () => {
  return (
    <div className='search'>
      <div className='search-content'>
        <div className='search-content_search'>
          <form>
            <input type='text' placeholder='Nombre del pokemon' />
            <button className='btn-default'>Buscar</button>
          </form>
        </div>
        <div className='search-content_results'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
