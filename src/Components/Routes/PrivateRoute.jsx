import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // const from = location.state?.from?.pathname || '/'

    if (loading) {
        return <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>

};

export default PrivateRoute;