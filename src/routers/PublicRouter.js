import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children, sessionIsActive }) => (sessionIsActive ? <Navigate to='/' /> : children);
