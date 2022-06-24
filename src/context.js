import React, { useContext, useState, useReducer, useEffect } from 'react';
import { footWears } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    products: footWears,
    allProducts: footWears,
    activeFilter: 'all',
    minPrice: 0,
    max_Price: 3333,
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

  return (
    <AppContext.Provider
      value={{ ...state, sortHandler, handleCategory, handleCompany }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};  

export { AppContext, AppProvider };
