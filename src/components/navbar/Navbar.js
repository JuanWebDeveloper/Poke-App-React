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
    const navigation = document.querySelector('#navigation');

    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navigation.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navigation.classList.remove('scrolled');
    }
  });

  const showAndHideNavbar = () => {
    const bars = document.querySelector('#bars');
    const navigation = document.querySelector('#navigation');

    bars.classList.toggle('active');
    navigation.classList.toggle('active');
  };

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

        <div className='navbar-bars' id='bars' onClick={showAndHideNavbar}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        <div className='navbar-menu' id='navigation'>
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
