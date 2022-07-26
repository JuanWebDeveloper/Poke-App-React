import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../components/dashboard/HomePage';
import { Pokemons } from '../components/dashboard/Pokemons';
import { PokemonDetails } from '../components/dashboard/PokemonDetails';
import { Search } from '../components/dashboard/Search';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/pokemons' element={<Pokemons />} />
      <Route exact path='/pokemon/:id' element={<PokemonDetails />} />
      <Route exact path='/search' element={<Search />} />
      <Route path='*' element={<Navigate to='/dashboard/' />} />
    </Routes>
  );
};
