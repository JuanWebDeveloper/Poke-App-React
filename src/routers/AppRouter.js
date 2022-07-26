import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from '../firebase/firebaseConfig';

// Actions.
import { initiateAuth } from '../actions/auth';
import { getFavoritePokemons, getPokemons } from '../actions/pokemons';

// Routers Of The Application.
import { PrivateRouter } from './PrivateRouter';
import { DashboardRouter } from './DashboardRouter';
import { PublicRouter } from './PublicRouter';
import { AuthRouter } from './AuthRouter';

// Components.
import { Navbar } from '../components/navbar/Navbar';
import { Loading } from '../components/loading/Loading';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [sessionIsActive, setSessionIsActive] = useState(false);
  const [sessionVerification, setSessionVerification] = useState(true);

  useEffect(() => {
    return () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(initiateAuth(user.uid, user.displayName));
          dispatch(getPokemons());
          dispatch(getFavoritePokemons());
          setSessionIsActive(true);
        } else {
          setSessionIsActive(false);
        }

        setSessionVerification(false);
      });
  }, [dispatch]);

  if (sessionVerification) {
    return (
      <div className='main-loading'>
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <Navbar>
        <Routes>
          <Route
            path='/dashboard/*'
            element={
              <PrivateRouter sessionIsActive={sessionIsActive}>
                <DashboardRouter />
              </PrivateRouter>
            }
          />
          <Route
            path='/auth/*'
            element={
              <PublicRouter sessionIsActive={sessionIsActive}>
                <AuthRouter />
              </PublicRouter>
            }
          />
          <Route path='*' element={<Navigate to='/auth/sign-in' />} />
        </Routes>
      </Navbar>
    </Router>
  );
};
