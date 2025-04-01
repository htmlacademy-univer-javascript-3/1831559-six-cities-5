import { FC, useState } from 'react';
import type { OfferType } from '../../types';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { Pages } from '../../const';
import { AuthStatus } from '../../authStatus';

type OffersTypeProps = {
  offers: OfferType[];
  authStatus: AuthStatus;
}

export const OfferList: FC<OffersTypeProps> = ({ offers, authStatus }) => {
  const [, setActiveOffer] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offerData={offer}
          onMouseEnter={() => setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer(null)}
          page={Pages.MAIN}
          authStatus={authStatus}
        />))}
    </div>
  );
};
