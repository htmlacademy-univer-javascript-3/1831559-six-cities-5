import type { OfferType } from '../../types';
import { FC } from 'react';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { Pages } from '../../const';

type PlacesNearbyProps = {
  offersNearby: OfferType[];
}

export const PlacesNearby: FC<PlacesNearbyProps> = ({ offersNearby }) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offersNearby.map((offer) => (
        <PlaceCard key={offer.id} offerData={offer} page={Pages.OFFER} />
      ))}
    </div>
  </section>
);
