import React, { useContext, useReducer, useEffect } from 'react';
import { footWears } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    products: footWears,
    allProducts: footWears,
    activeFilter: 'all',
    minPrice: 0,
    max_Price: 3000,
    price: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_PRICE' });
  }, []);

  const sortHandler = (value) => {
    dispatch({ type: 'HANDLE_SORT', payload: value });
  };

  const handleCategory = (value) => {
    dispatch({ type: 'HANDLE_CATEGORY', payload: value });
  };

  const handleCompany = (value) => {
    dispatch({ type: 'HANDLE_COMPANY', payload: value });
  };

  const updatePriceFilter = (value) => {
    dispatch({ type: 'PRICE_FILTER', payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        sortHandler,
        handleCategory,
        handleCompany,
        updatePriceFilter,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
