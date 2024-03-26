import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/useLocalStorage';
// import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    // const currentUser = useAuth();

    const [auth, setAuth] = usePersistedState('auth', {});
    const [error, setError] = useState(null);

    const loginSubmitHandler = async (values) => {
        try {
            const user = await authService.login(values);

            setAuth(user);
            navigate('/gallery');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const user = await authService.register(values);

            setAuth(user);
            navigate('/gallery');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const logoutHandler = () => {
        authService.logout();
        setAuth({});
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        id: auth.uid,
        user: auth,
        isAuthenticated: !!auth.email,
        error,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
