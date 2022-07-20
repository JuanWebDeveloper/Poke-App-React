import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

export const Navbar = ({ children }) => {
  // window.addEventListener('scroll', () => {
  //   const navbar = document.querySelector('.navbar');
  //   window.scrollY > 0 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
  // });

  return (
    <Fragment>
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-menu'>
          <NavLink className='navbar-menu_item' to='/auth/sign-in'>
            Iniciar Sesión
          </NavLink>
          <NavLink className='navbar-menu_item' to='/auth/sign-up'>
            Registrarse
          </NavLink>
        </div>
      </div>
      {children}
    </Fragment>
  );
};
