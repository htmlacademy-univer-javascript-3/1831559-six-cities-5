import { FC } from 'react';
import { CITIES } from '../../const';
import { CityTab } from '../CityTab/CityTab';

export const CitiesTabs: FC = () => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => <CityTab key={city} city={city} />)}
      </ul>
    </section>
  </div>
);
