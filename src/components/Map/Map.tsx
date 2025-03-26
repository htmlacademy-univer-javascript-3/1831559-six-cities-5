import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { City, Location } from '../../types';
import { FC, useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { DEFAULT_ICON } from './Map.const';

type MapProps = {
  city: City;
  points: Location[];
}

const defaultIcon = leaflet.icon({
  iconUrl: DEFAULT_ICON,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

export const Map: FC<MapProps> = ({ city, points }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet.marker({
          lat: point.latitude,
          lng: point.longitude
        }, {
          icon: defaultIcon
        }).addTo(map);
      });
    }

  }, [points, map]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
};
