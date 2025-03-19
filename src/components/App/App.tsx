import { FC } from 'react';
import { Main } from '../../pages/Main/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../routes';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Login } from '../../pages/Login/Login';
import { Offer } from '../../pages/Offer/Offer';
import { EmptyPage } from '../../pages/EmptyPage/EmptyPage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { AuthStatus } from '../../authStatus';

type AppProps = {
  offerCount: number;
}

export const App: FC<AppProps> = ({offerCount}) => (
  <Router>
    <Routes>
      <Route path={AppRoutes.Main} element={<Main offerCount={offerCount}/>} />
      <Route path={AppRoutes.Favorites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><Favorites /></PrivateRoute>} />
      <Route path={AppRoutes.Login} element={<Login />} />
      <Route path={AppRoutes.Offer} element={<Offer />} />
      <Route path='*' element={<EmptyPage />} />
    </Routes>
  </Router>
);
