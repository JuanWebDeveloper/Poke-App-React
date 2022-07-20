import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../components/auth/SignIn';
import { SignUp } from '../components/auth/SignUp';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route exact path='/sign-in' element={<SignIn />} />
      <Route exact path='/sign-up' element={<SignUp />} />
      <Route path='*' element={<Navigate to='/auth/sign-in' />} />
    </Routes>
  );
};
