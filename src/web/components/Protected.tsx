import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated, login } = useAuth();

    console.log(isAuthenticated)

    return isAuthenticated ? <>{children}</> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;