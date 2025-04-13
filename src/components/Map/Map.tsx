import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { City, OfferType } from '../../types';
import { FC, useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { DEFAULT_ICON, ACTIVE_ICON } from './Map.const';

type MapProps = {
  city: City;
  offers: OfferType[];
  activePointId: string | null;
}

const defaultIcon = leaflet.icon({
  iconUrl: DEFAULT_ICON,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const activeIcon = leaflet.icon({
  iconUrl: ACTIVE_ICON,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

export const Map: FC<MapProps> = ({ city, offers, activePointId }) => {
  const mapRef = useRef(null);
  const { map } = useMap(mapRef, city);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (!map) {
      return;
    }

    offers.forEach((offer) => {
      const marker = leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: offer.id === activePointId ? activeIcon : defaultIcon
          })
        .addTo(map);

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [offers, map, activePointId]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
};
