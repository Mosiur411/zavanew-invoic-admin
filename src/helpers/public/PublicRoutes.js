import React, { useContext } from 'react'
import { AuthContext } from '../../utils/Context';
import { Outlet } from 'react-router-dom';

function PublicRoutes() {
    const { user } = useContext(AuthContext)
    return (
        <>
            {!user && <Outlet />}
        </>
    )
}

export default PublicRoutes