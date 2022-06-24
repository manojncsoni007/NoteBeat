import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../../context';

const RequiredAuth = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    return isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} replace />
}

export { RequiredAuth }