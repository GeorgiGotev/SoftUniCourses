import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/useState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const user = await authService.login(values);

        //display name

        setAuth(user);

        localStorage.setItem('auth', user);

        navigate("/");
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values);

        setAuth(result);

        localStorage.setItem('auth', result);

        navigate("/");
    };

    const logoutHandler = () => {
        authService.logout()
        setAuth({});
        localStorage.removeItem('auth');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;

    