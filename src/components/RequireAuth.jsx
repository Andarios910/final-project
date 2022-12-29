import React from 'react'
import { Navigate, Outlet, useLocation, useSearchParams } from 'react-router-dom'

export default function RequireAuth({ allowedRoles }) {
    const user = JSON.parse(localStorage.getItem('user'))
    const roles = user.role[0];

    const location = useLocation();
    const [searchParams] = useSearchParams();
    const params = [];

    searchParams.forEach((key, value) => {
        params.push([key, value]);
    });

    return allowedRoles.includes(roles) ? (
        <Outlet />
    ) : roles ? (
        <Navigate to='/unauthorized' state={{ from: location }} replace />
    ) : (
        <Navigate 
            to={'/login'}
            state={{ from: location, params: params}}
            replace
        />
    )
}
