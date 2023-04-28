import React, { useContext } from 'react';
import { SearchBarContext } from '../context/SearchBarContext';

export const useSearchBarContext = () => {
  return useContext(SearchBarContext);
};
