import { FC } from 'react';
import { SORT_TYPES } from './SortVariants.const';
import { useSort } from '../../hooks/useSort';

export const SortVariants: FC = () => {
  const { sortType, setSortType } = useSort();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.keys(SORT_TYPES).map((sortTypeKey) => (
          <li
            key={sortTypeKey}
            className={`places__option ${sortTypeKey === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => setSortType(sortTypeKey as keyof typeof SORT_TYPES)}
          >
            {SORT_TYPES[sortTypeKey as keyof typeof SORT_TYPES]}
          </li>
        ))}
      </ul>
    </form>
  );
};
