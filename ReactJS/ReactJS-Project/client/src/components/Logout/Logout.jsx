import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export default function Logout() {
    const navigate = useNavigate();
    const { onLogout } = useAuthContext();

    useEffect(() => {
        try {
            authService.logout()
            onLogout(null)
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }, []);

    return null;
}


