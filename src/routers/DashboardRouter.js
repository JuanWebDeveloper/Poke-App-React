import { Navigate, Route, Routes } from 'react-router-dom';

import { Pokemons } from '../components/dashboard/Pokemons';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route exact path='/pokemons' element={<Pokemons />} />
      <Route path='*' element={<Navigate to='/dashboard/pokemons' />} />
    </Routes>
  );
};
