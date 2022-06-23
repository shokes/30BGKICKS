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

  // return {
  //   ...state,
  // };

  throw new Error('no matching action type');
};

export default reducer;
