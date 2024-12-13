import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


type AuthProps = PropsWithChildren<{}>;
interface ContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}
const AuthContext = createContext<ContextType>({
    isAuthenticated: false,
    login: function (): void {
        throw new Error('Function not implemented.');
    },
    logout: function (): void {
        throw new Error('Function not implemented.');
    }
});

export const AuthProvider = ({ children }: AuthProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();

    const login = () => {
        setIsAuthenticated(true);
        navigate('/dashboard'); // Redirect after login
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate('/signin'); // Redirect after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);