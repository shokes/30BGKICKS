import React, { useContext, useState, useReducer } from 'react';
import { footWears } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const initialState = {
    products: footWears,
    mainProducts: footWears,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const sortHandler = (value) => {
    dispatch({ type: 'HANDLE_SORT', payload: value });
  };

  return (
    <AppContext.Provider value={{ ...state, sortHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
