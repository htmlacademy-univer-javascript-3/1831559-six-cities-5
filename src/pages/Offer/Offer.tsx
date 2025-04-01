import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppRoutes } from '../../routes';
import { FC, useEffect, useState } from 'react';
import { getOfferById, OFFERS } from '../../mocks/offers';
import { Rating } from '../../components/Rating/Rating';
import { capitalize } from '../../utils';
import { ReviewForm } from '../../components/ReviewForm/ReviewForm';
import { AuthStatus } from '../../authStatus';
import type { Review, OfferType } from '../../types';
import { ReviewList } from '../../components/ReviewList/ReviewList';
import { REVIEWS } from '../../mocks/review';
import { Map } from '../../components/Map/Map';
import { PlacesNearby } from '../../components/PlacesNearby/PlacesNearby';

type OfferProps = {
  authStatus: AuthStatus;
}

export const Offer: FC<OfferProps> = ({ authStatus }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [offerData, setOfferData] = useState<OfferType | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [offersNearby, setoOffersNearby] = useState<OfferType[] | []>([]);

  useEffect(() => {
    if (id) {
      setOfferData(getOfferById(id));
      setReviews(REVIEWS);
      setoOffersNearby(OFFERS.filter((offer) => offer.id !== id));
    }
  }, [id]);

  if (!id) {
    navigate(AppRoutes.Empty);
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.Main}>
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
                    <span className="header__favorite-count">3</span>
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
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerData?.isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerData?.title}
                </h1>
                <button className={`${offerData?.isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offerData?.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <Rating count={offerData?.rating ? offerData?.rating : 0} classPreffix='offer'>
                <span className="offer__rating-value rating__value">{offerData?.rating}</span>
              </Rating>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(offerData?.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerData?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
                { reviews && reviews.length > 0 && <ReviewList reviews={reviews.slice(0, 10)}/>}
                { authStatus === AuthStatus.Auth ? <ReviewForm /> : null}
              </section>
            </div>
          </div>
          { offerData && <Map classPrefix='offer' points={offersNearby.map((offer) => offer.location)} city={offerData?.city} />}
        </section>
        <div className="container">
          <PlacesNearby offersNearby={offersNearby} />
        </div>
      </main>
    </div>
  );
};
