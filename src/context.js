import React, { useContext, useReducer, useEffect } from 'react';
import { footWears } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(localStorage.getItem('cart'));
    } else {
      return [];
    }
  };
  const initialState = {
    products: footWears,
    allProducts: footWears,
    activeFilter: 'all',
    minPrice: 0,
    max_Price: 3000,
    price: '',
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    // shipping_fee: 50,
    tempStock: 1,
  };

  //  const [tempStock, setTempStock] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);

  const stockHandleDec = (value, stock) => {
    // let tempValue = value - 1;

    // if (tempValue < 1) {
    //   tempValue = 1;
    //   return setTempStock(tempValue);
    // }
    // return setTempStock(tempValue);
    dispatch({ type: 'DECREASE_AMOUNT', payload: { value, stock } });
  };

  const stockHandleInc = (value, stock) => {
    // let tempValue = value + 1;

    // if (tempValue > single.stock) {
    //   tempValue = single.stock;
    //   return setTempStock(tempValue);
    // }
    // return setTempStock(tempValue);

    dispatch({
      type: 'INCREASE_AMOUNT',
      payload: {
        value,
        stock,
      },
    });
  };

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (id, amount, product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        amount,
        product,
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
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
        addToCart,
        clearCart,
        stockHandleDec,
        stockHandleInc,
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
