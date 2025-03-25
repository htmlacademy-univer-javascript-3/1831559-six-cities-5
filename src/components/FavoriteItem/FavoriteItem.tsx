import { FC } from 'react';
import { OfferType } from '../../mocks/offers';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { CardPrefix } from '../../const';

type FavoriteItemProps = {
  offers: OfferType[];
  city: string;
}

export const FavotriteItem: FC<FavoriteItemProps> = ({ offers, city }) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => (<PlaceCard key={offer.id} offerData={offer} prefix={CardPrefix.FAVORITES} />))}
    </div>
  </li>
);
