import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/useLocalStorage';
// import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    // const currentUser = useAuth();

    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {

        const user = await authService.login(values);

        setAuth(user);        
        navigate('/gallery');
    };

    const registerSubmitHandler = async (values) => {

        const user = await authService.register(values);

        setAuth(user);
        navigate('/gallery');
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
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
