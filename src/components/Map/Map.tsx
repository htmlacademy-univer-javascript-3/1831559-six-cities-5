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
  const { map } = useMap(mapRef, city);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (!map) {
      return;
    }

    points.forEach((point) => {
      const marker = leaflet
        .marker(
          {
            lat: point.latitude,
            lng: point.longitude,
          },
          {
            icon: defaultIcon,
          })
        .addTo(map);

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [points, map]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
};
