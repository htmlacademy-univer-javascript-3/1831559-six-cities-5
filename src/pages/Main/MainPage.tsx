import { FC, useEffect } from 'react';
import { OfferList } from '../../components/OfferList/OfferList';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes';
import { AuthStatus } from '../../authStatus';
import { Map } from '../../components/Map/Map';
import { CITIES_COORDS } from '../../const';
import { CitiesTabs } from '../../components/CitiesTabs/CitiesTabs';
import { useSelector, useDispatch } from 'react-redux';
import { NoPlaces } from '../../components/NoPlaces/NoPlaces';
import { State, Dispatch } from '../../store/types';
import { OFFERS } from '../../mocks/offers';
import { setOffers } from '../../store/action';
import { SortVariants } from '../../components/SortVariants/SortVariants';
import { SortProvider } from '../../context/sort-context';

type MainProps = {
  authStatus: AuthStatus;
}

export const Main: FC<MainProps> = ({ authStatus }) => {
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch(setOffers(OFFERS));
  }, [dispatch]);

  const city = useSelector((state: State) => state.city);
  const allOffers = useSelector((state: State) => state.offers);

  const offersInCity = allOffers.filter((offer) => offer.city.name === city);
  const favoritesCount = allOffers.filter((offer) => offer.isFavorite).length;
  const mapPoints = offersInCity.map((offer) => offer.location);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoutes.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoutes.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoutes.Main}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${offersInCity.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <div className="cities">
          {offersInCity.length > 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersInCity.length} {offersInCity.length === 1 ? 'place' : 'places'} to stay in {offersInCity[0].city.name}</b>
                <SortProvider>
                  <SortVariants />
                  <OfferList authStatus={authStatus} onOfferHover={setActiveOfferId} />
                </SortProvider>
              </section>
              <div className="cities__right-section">
                <Map city={CITIES_COORDS[offersInCity[0].city.name]} points={mapPoints}/>
              </div>
            </div>
          ) : (
            <NoPlaces city={offersInCity[0]?.city.name} />
          )}
        </div>
      </main>
    </div>
  );
};
