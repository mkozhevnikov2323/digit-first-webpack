import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from './useAuth';

interface ProtectedProps {
  children: React.ReactNode;
}

export const Protected = ({ children }: ProtectedProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/"
        replace
        state={{ from: location }}
      />
    );
  }

  return <>{children}</>;
};
