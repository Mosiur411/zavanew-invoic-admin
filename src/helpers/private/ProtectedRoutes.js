import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../utils/Context'

function ProtectedRoutes() {
  const location = useLocation();
  const { user } = useContext(AuthContext)
  const { emailVerified } = user;
  return emailVerified ? (
    <Outlet />
  ) : (
    <Navigate to="verifie" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes