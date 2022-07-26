import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOUT } from '../../actions/auth';
import { cleanUpPokemons } from '../../actions/pokemons';

import logo from '../../assets/images/logo.svg';

export const Navbar = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(({ auth }) => auth);

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 0 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
  });

  const handleSignOut = () => {
    dispatch(signOUT());
    dispatch(cleanUpPokemons());
  };

  return (
    <Fragment>
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-menu'>
          {!isAuthenticated && (
            <NavLink className='navbar-menu_item' to='/auth/sign-in'>
              Iniciar Sesión
            </NavLink>
          )}
          {!isAuthenticated && (
            <NavLink className='navbar-menu_item' to='/auth/sign-up'>
              Registrarse
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink className='navbar-menu_item' to='/dashboard/'>
              Inicio
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink className='navbar-menu_item' to='/dashboard/pokemons'>
              Pokemons
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink className='navbar-menu_item' to='/dashboard/search'>
              Buscar
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink className='navbar-menu_item' to='/dashboard/favorites'>
              Favoritos
            </NavLink>
          )}
          {isAuthenticated && (
            <button className='navbar-menu_item' onClick={handleSignOut}>
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
      {children}
    </Fragment>
  );
};
