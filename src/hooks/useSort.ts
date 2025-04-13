import { useContext } from 'react';
import { SortContext } from '../context/sort-context';

export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error('hook must be used inside SortProvider');
  }
  return context;
};
