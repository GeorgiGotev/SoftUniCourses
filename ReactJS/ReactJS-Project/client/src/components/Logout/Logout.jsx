import { useContext, useEffect, useState } from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
// import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";





export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useAuthContext();

    useEffect(() => {
        logoutHandler() 
        navigate('/') 
    },[logoutHandler]);

    return null;
}


