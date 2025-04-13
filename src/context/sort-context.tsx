import { createContext, ReactNode, useState } from 'react';
import { SORT_TYPES } from '../components/SortVariants/SortVariants.const';

type SortContextType = {
  sortType: keyof typeof SORT_TYPES;
  setSortType: (sortType: keyof typeof SORT_TYPES) => void;
};

export const SortContext = createContext<SortContextType | null>(null);

export const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sortType, setSortType] = useState<keyof typeof SORT_TYPES>('popular');

  return (
    <SortContext.Provider value={{ sortType, setSortType }}>
      {children}
    </SortContext.Provider>
  );
};
