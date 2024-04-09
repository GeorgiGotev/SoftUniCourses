import { createContext, useContext, useState } from 'react';

import usePersistedState from '../hooks/useLocalStorage';
// import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = usePersistedState('auth', null);

    // const currUser = useAuth();

    const onLogin = (user) => setAuth(user);
    const onRegister = (user,name) => setAuth({...user, displayName:name})
    const onLogout = () =>  setAuth(null);
    
    const values = {
        onLogin,
        onLogout,
        onRegister,
        email: auth?.email,
        id: auth?.uid,
        user: auth,
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
