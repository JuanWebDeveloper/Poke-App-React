import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { AuthRouter } from './AuthRouter';

import { Navbar } from '../components/navbar/Navbar';

export const AppRouter = () => {
  const [sessionIsActive, setSessionIsActive] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<PrivateRouter sessionIsActive={sessionIsActive}></PrivateRouter>} />
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
