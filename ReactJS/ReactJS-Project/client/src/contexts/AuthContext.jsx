import { createContext, useContext, useState } from 'react';

import usePersistedState from '../hooks/useLocalStorage';
// import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = usePersistedState('auth', null);

    // const currUser = useAuth();

    const onLogin = (user) => setAuth(user);

    // const onRegister = (user, userName) => setAuth({ ...user, displayName: userName });
    // const onRegister = (user) => setAuth(user)

    const onLogout = () => setAuth(null);

    const values = {
        onLogin,
        onLogout,
        email: auth?.email,
        id: auth?.uid,
        user: auth || {},
        isAuthenticated: !!auth?.uid,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
