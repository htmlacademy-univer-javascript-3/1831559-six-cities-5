import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes';
import { CITIES } from '../../const';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/action';
import { store } from '../../store';

type CityTabProps = {
  city: typeof CITIES[number];
}

export const CityTab: FC<CityTabProps> = ({ city }) => {
  const activeTab = useSelector((state: ReturnType<typeof store.getState>) => state.city);
  const isActive = activeTab === city;

  const dispatch = useDispatch();

  const handleCityChange = () => {
    dispatch(changeCity(city));
  };

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} to={AppRoutes.Main}>
        <span onClick={handleCityChange}>{city}</span>
      </Link>
    </li>
  );

};
