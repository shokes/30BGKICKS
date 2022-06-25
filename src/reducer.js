const reducer = function (state, action) {
  if (action.type === 'HANDLE_SORT' && action.payload === 'lowest') {
    const products = [...state.products].sort((a, b) => a.price - b.price);
    return {
      ...state,
      products,
    };
  }
  if (action.type === 'HANDLE_SORT' && action.payload === 'highest') {
    const products = [...state.products].sort((a, b) => b.price - a.price);
    return {
      ...state,
      products,
    };
  }
  if (action.type === 'HANDLE_SORT' && action.payload === 'accending') {
    const products = [...state.products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return {
      ...state,
      products,
    };
  }

  if (action.type === 'HANDLE_SORT' && action.payload === 'decending') {
    const products = [...state.products].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    return {
      ...state,
      products,
    };
  }

  if (action.type === 'HANDLE_CATEGORY' && action.payload === 'all') {
    return {
      ...state,
      products: state.allProducts,
      activeFilter: action.payload,
    };
  }

  if (action.type === 'HANDLE_CATEGORY') {
    let products = state.allProducts;

    products = products.filter(
      (product) => product.category === action.payload
    );

    return {
      ...state,
      products,
      activeFilter: action.payload,
    };
  }
  if (action.type === 'HANDLE_COMPANY' && action.payload === 'all') {
    return {
      ...state,
      products: state.allProducts,
      activeFilter: action.payload,
    };
  }
  if (action.type === 'HANDLE_COMPANY') {
    let products = state.allProducts;

    products = products.filter((product) => product.company === action.payload);
    return {
      ...state,
      products,
      activeFilter: action.payload,
    };
  }
  if (action.type === 'SET_PRICE') {
    let maxPrice = state.products.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      max_Price: maxPrice,
      price: maxPrice,
    };
  }

  if (action.type === 'PRICE_FILTER') {
    let tempProducts = state.allProducts.filter(
      (product) => product.price <= action.payload
    );
    return {
      ...state,
      price: action.payload,
      products: tempProducts,
    };
  }

  if (action.type === 'CLEAR_FILTERS') {
    let maxPrice = state.allProducts.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      products: state.allProducts,

      activeFilter: 'all',
      minPrice: 0,
      max_Price: maxPrice,
      price: maxPrice,
    };
  }
  throw new Error('no matching action type');
};

export default reducer;
