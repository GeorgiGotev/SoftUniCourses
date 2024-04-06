import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/useLocalStorage';
import { useAuth } from '../hooks/useAuth';
// import { authenticated } from '../lib/firebase';
// import { getAuth } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const currentUser = useAuth();
    

    const [auth, setAuth] = usePersistedState('auth', null);
    const [error, setError] = useState(null);

    const loginSubmitHandler = async (values) => {
        try {
            const user = await authService.login(values);

            setAuth(user);
            navigate('/recipes');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            await authService.register(values);
            
            loginSubmitHandler(values)
            navigate('/recipes');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const logoutHandler = () => {
        try {
            authService.logout();
            setAuth(null);
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        
        email: auth?.email,
        id: auth?.uid,
        user: auth,
        isAuthenticated: !!auth?.uid,
        error,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
