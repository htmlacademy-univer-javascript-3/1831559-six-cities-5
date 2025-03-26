import { FC } from 'react';
import type { OfferType } from '../../types';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { CardPrefix } from '../../const';
import { Link } from 'react-router-dom';

type FavoriteItemProps = {
  offers: OfferType[];
  city: string;
}

export const FavoriteItem: FC<FavoriteItemProps> = ({ offers, city }) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to="#">
          <span>{city}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => (<PlaceCard key={offer.id} offerData={offer} prefix={CardPrefix.FAVORITES} />))}
    </div>
  </li>
);
