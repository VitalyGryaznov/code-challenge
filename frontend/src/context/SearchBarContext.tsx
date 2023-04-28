import React, { useState } from 'react';

export const SearchBarContext = React.createContext({
  query: '',
  setQuery: (a: any) => {
    console.log('setQuery undefined');
  },
  show: false,
  setShow: (a: any) => {
    console.log('setShow undefined');
  }
});

export const SearchBarContextProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <SearchBarContext.Provider
      value={{
        show,
        setShow,
        query,
        setQuery
      }}>
      {children}
    </SearchBarContext.Provider>
  );
};
