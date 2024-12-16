import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/localstorage-manager';
import { SignFormValues } from '../features/SignIn';


type AuthProps = PropsWithChildren<{}>;
interface ContextType {
    isAuthenticated: boolean;
    login: (data: SignFormValues) => void;
    logout: () => void;
}
const AuthContext = createContext<ContextType>({
    isAuthenticated: false,
    login: function (data: SignFormValues): void {
        throw new Error('Function not implemented.');
    },
    logout: function (): void {
        throw new Error('Function not implemented.');
    }
});

export const AuthProvider = ({ children }: AuthProps) => {
    const { storedValue, removeValue, storeValue } = useLocalStorage('userData', {});
    const [isAuthenticated, setIsAuthenticated] = useState(Object.keys(storedValue).length > 0 ? true : false);
    const navigate = useNavigate();

    const login = (data: SignFormValues) => {
        storeValue(data);
        setIsAuthenticated(true);
        navigate('/dashboard');
    };

    const logout = () => {
        removeValue();
        setIsAuthenticated(false);
        navigate('/sign-in');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);