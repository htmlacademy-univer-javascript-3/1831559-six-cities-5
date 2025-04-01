import { FC } from 'react';
import type { OfferType } from '../../types';
import { Rating } from '../Rating/Rating';
import { Pages } from '../../const';
import { AuthStatus } from '../../authStatus';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, getOfferRoute } from '../../routes';
import { capitalize } from '../../utils';
import { CARD_IMAGE_SIZE, CARD_PREFIX } from './PlaceCard.const';

type PlaceCardProps = {
  offerData: OfferType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  page: Pages;
  authStatus?: AuthStatus;
}

export const PlaceCard: FC<PlaceCardProps> = ({ offerData, onMouseEnter, onMouseLeave, page, authStatus }) => {
  const navigate = useNavigate();
  const imageSize = CARD_IMAGE_SIZE[page];
  const prefix = CARD_PREFIX[page];

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
        <Link to={getOfferRoute(offerData.id)} target='_blank'>
          <img
            className="place-card__image"
            src={offerData.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </Link>
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
        <Link to={getOfferRoute(offerData.id)} target='_blank'>
          <h2 className="place-card__name">
            {offerData.title}
          </h2>
        </Link>
        <p className="place-card__type">{capitalize(offerData.type)}</p>
      </div>
    </article>
  );
};
