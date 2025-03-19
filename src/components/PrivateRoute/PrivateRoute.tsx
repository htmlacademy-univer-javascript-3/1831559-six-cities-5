import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../authStatus';
import { AppRoutes } from '../../routes';
import { FC, ReactElement } from 'react';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ authStatus, children }) => (authStatus === AuthStatus.Auth) ? children : <Navigate to={AppRoutes.Login}/>;
