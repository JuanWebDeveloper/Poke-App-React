import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../components/auth/SignIn';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route exact path='/sign-in' element={<SignIn />} />
      <Route path='*' element={<Navigate to='/auth/sign-in' />} />
    </Routes>
  );
};
