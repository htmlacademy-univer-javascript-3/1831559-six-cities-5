import { FC } from 'react';
import { OfferType } from '../../mocks/offers';
import { FavotriteItem } from '../../components/FavoriteItem/FavoriteItem';

type FavoritesOffersProps = {
  offers: OfferType[];
}

export const Favorites: FC<FavoritesOffersProps> = ({ offers }) => {
  const groupedOffers = new Map<string, OfferType[]>();

  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!groupedOffers.has(cityName)) {
      groupedOffers.set(cityName, []);
    }
    groupedOffers.get(cityName)!.push(offer);
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Array.from(groupedOffers.entries()).map(([city, cityOffers]) => (
                <FavotriteItem key={`favorites-in-${city}`} offers={cityOffers} city={city}/>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};
