import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/localstorage-manager';


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
    const { storedValue, removeValueAsync } = useLocalStorage('userData', {});
    const [isAuthenticated, setIsAuthenticated] = useState(Object.keys(storedValue).length > 0 ? true : false);
    const navigate = useNavigate();

    const login = () => {
        setIsAuthenticated(true);
        navigate('/dashboard'); // Redirect after login
    };

    const logout = () => {
        removeValueAsync()
            .then(() => setIsAuthenticated(false))
            .then(() => navigate('/sign-in'))
            .catch(err => console.log(err))
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);