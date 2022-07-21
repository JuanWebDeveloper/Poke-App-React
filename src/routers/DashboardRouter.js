import { Navigate, Route, Routes } from 'react-router-dom';

import { Pokemons } from '../components/dashboard/Pokemons';
import { HomePage } from '../components/dashboard/HomePage';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/pokemons' element={<Pokemons />} />
      <Route path='*' element={<Navigate to='/dashboard/' />} />
    </Routes>
  );
};
