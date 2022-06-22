const reducer = function (state, action) {
  if (action.type === 'HANDLE_SORT' && action.payload === 'lowest') {
    const products = state.products.sort((a, b) => a.price - b.price);
    return {
      ...state,
      products,
    };
  }
  if (action.type === 'HANDLE_SORT' && action.payload === 'highest') {
    const products = state.products.sort((a, b) => b.price - a.price);
    return {
      ...state,
      products,
    };
  }
  if (action.type === 'HANDLE_SORT' && action.payload === 'accending') {
    const products = state.products.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return {
      ...state,
      products,
    };
  }

  if (action.type === 'HANDLE_SORT' && action.payload === 'decending') {
    const products = state.products.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    return {
      ...state,
      products,
    };
  }

  return {
    ...state,
  };

  // throw new Error('no matching action type');
};

export default reducer;
