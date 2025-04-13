import { FC, useState } from 'react';
import type { OfferType } from '../../types';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { CardPrefix } from '../../const';
import { AuthStatus } from '../../authStatus';
import { useSelector } from 'react-redux';
import type { State } from '../../store/types';
import { useSort } from '../../hooks/useSort';

type OffersTypeProps = {
  authStatus: AuthStatus;
}

export const OfferList: FC<OffersTypeProps> = ({ authStatus }) => {
  const [, setActiveOffer] = useState<string | null>(null);
  const city = useSelector((state: State) => state.city);
  const offers = useSelector((state: State) =>
    state.offers.filter((offer: OfferType) => offer.city.name === city)
  );
  const { sortType } = useSort();

  const sortedOffers = useMemo(() => {
    const offersCopy = [...offers];
    switch (sortType) {
      case 'priceAsc':
        return offersCopy.sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return offersCopy.sort((a, b) => b.price - a.price);
      case 'topRated':
        return offersCopy.sort((a, b) => b.rating - a.rating);
      default:
        return offersCopy;
    }
  }, [offers, sortType]);

  return (
    <div className="cities__places-list places__list tabs__content">
      { sortedOffers.map((offer: OfferType) => (
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
