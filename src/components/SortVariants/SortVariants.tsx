import { FC, useState, useRef, useEffect } from 'react';
import { SORT_TYPES } from './SortVariants.const';
import { useSort } from '../../hooks/useSort';

export const SortVariants: FC = () => {
  const { sortType, setSortType } = useSort();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLFormElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (sortTypeKey: keyof typeof SORT_TYPES) => {
    setSortType(sortTypeKey);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <form className="places__sorting" action="#" method="get" ref={dropdownRef}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleDropdown}>
        {SORT_TYPES[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {Object.keys(SORT_TYPES).map((sortTypeKey) => (
          <li
            key={sortTypeKey}
            className={`places__option ${sortTypeKey === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleOptionClick(sortTypeKey as keyof typeof SORT_TYPES)}
          >
            {SORT_TYPES[sortTypeKey as keyof typeof SORT_TYPES]}
          </li>
        ))}
      </ul>
    </form>
  );
};
