import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children, sessionIsActive }) => (sessionIsActive ? children : <Navigate to='/auth/sign-in' />);
