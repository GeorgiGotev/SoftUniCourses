import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
// import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";





export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutHandler() 
        navigate('/') 
    },);

    return null;
}


