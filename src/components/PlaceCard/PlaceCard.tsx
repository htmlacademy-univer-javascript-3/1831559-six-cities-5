import { FC } from 'react';
import { OfferType } from '../../mocks/offers';
import { Rating } from '../Rating/Rating';
import { CardPrefix } from '../../const';
import { AuthStatus } from '../../authStatus';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, getOfferRoute } from '../../routes';

type PlaceCardProps = {
  offerData: OfferType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  prefix: CardPrefix;
  authStatus?: AuthStatus;
}

export const PlaceCard: FC<PlaceCardProps> = ({ offerData, onMouseEnter, onMouseLeave, prefix, authStatus }) => {
  const navigate = useNavigate();

  const bookmarkClickHandler = () => {
    // Пока обрабатывается только один сценарий
    if (authStatus === AuthStatus.NoAuth) {
      navigate(AppRoutes.Login);
    }
  };

  return (
    <article className={`${prefix}__card place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offerData.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offerData.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info ">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${offerData.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={bookmarkClickHandler}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offerData.isFavorite ? 'To bookmarks' : 'In bookmarks'}</span>
          </button>
        </div>
        <Rating count={offerData.rating} classPreffix='place-card' />
        <Link to={getOfferRoute(offerData.id)}>
          <h2 className="place-card__name">
            <a href="#">{offerData.title}</a>
          </h2>
        </Link>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
};
