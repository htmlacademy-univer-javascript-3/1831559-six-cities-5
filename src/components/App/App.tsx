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
import { useSelector } from 'react-redux';
import type { State } from '../../store/types';

export const App: FC = () => {
  const offers = useSelector((state: State) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main authStatus={AuthStatus.Auth}/>} />
        <Route path={AppRoutes.Favorites} element={<PrivateRoute authStatus={AuthStatus.Auth}><Favorites offers={favoriteOffers}/></PrivateRoute>} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Offer} element={<Offer authStatus={AuthStatus.Auth}/>} />
        <Route path='*' element={<EmptyPage />} />
      </Routes>
    </Router>
  );
};
