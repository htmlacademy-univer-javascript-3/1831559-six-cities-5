import { FC, useState } from 'react';
import type { OfferType } from '../../types';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { CardPrefix } from '../../const';
import { AuthStatus } from '../../authStatus';
import { useSelector } from 'react-redux';
import { store } from '../../store';

type OffersTypeProps = {
  authStatus: AuthStatus;
}

export const OfferList: FC<OffersTypeProps> = ({ authStatus }) => {
  const [, setActiveOffer] = useState<string | null>(null);
  const city = useSelector((state: ReturnType<typeof store.getState>) => state.city);
  const offers = useSelector((state: ReturnType<typeof store.getState>) =>
    state.offers.filter((offer: OfferType) => offer.city.name === city)
  );

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer: OfferType) => (
        <PlaceCard
          key={offer.id}
          offerData={offer}
          onMouseEnter={() => setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer(null)}
          prefix={CardPrefix.MAIN}
          authStatus={authStatus}
        />))}
    </div>
  );
};
