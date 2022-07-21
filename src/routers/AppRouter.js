import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from '../firebase/firebaseConfig';

// Actions.
import { initiateAuth } from '../actions/auth';

// Routers Of The Application.
import { PrivateRouter } from './PrivateRouter';
import { DashboardRouter } from './DashboardRouter';
import { PublicRouter } from './PublicRouter';
import { AuthRouter } from './AuthRouter';

// Components.
import { Navbar } from '../components/navbar/Navbar';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [sessionIsActive, setSessionIsActive] = useState(false);
  const [sessionVerification, setSessionVerification] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(initiateAuth(user.uid, user.displayName));
        setSessionIsActive(true);
      } else {
        setSessionIsActive(false);
      }

      setSessionVerification(false);
    });
  }, [dispatch]);

  if (sessionVerification) {
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/dashboard/*'
          element={
            <PrivateRouter sessionIsActive={sessionIsActive}>
              <Navbar>
                <DashboardRouter />
              </Navbar>
            </PrivateRouter>
          }
        />
        <Route
          path='/auth/*'
          element={
            <PublicRouter sessionIsActive={sessionIsActive}>
              <Navbar>
                <AuthRouter />
              </Navbar>
            </PublicRouter>
          }
        />
      </Routes>
    </Router>
  );
};
