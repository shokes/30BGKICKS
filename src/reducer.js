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

  if (action.type === 'ADD_TO_CART') {
    const { id, amount, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
        tempStock: 1,
      };
    }
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
      tempStock: 1,
    };
  }
  if (action.type === 'INCREASE_AMOUNT') {
    const { value, stock } = action.payload;

    let tempValue = value + 1;

    if (tempValue > stock) {
      tempValue = stock;
      return {
        ...state,
      };
    }
    return {
      ...state,
      tempStock: tempValue,
    };
  }

  if (action.type === 'DECREASE_AMOUNT') {
    const { value, stock } = action.payload;

    let tempValue = value - 1;

    if (tempValue < 1) {
      tempValue = 1;
      return {
        ...state,
        tempStock: tempValue,
      };
    }
    return {
      ...state,
      tempStock: tempValue,
    };
  }

  if (action.type === 'INCREASE_CART_AMOUNT') {
    const { id } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount + 1;

        if (newAmount > item.max) {
          newAmount = item.max;
        }

        return {
          ...item,
          amount: newAmount,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === 'DECREASE_CART_AMOUNT') {
    const { id } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount - 1;

        if (newAmount < 1) {
          newAmount = 1;
        }

        return {
          ...item,
          amount: newAmount,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === 'COUNT_CART_TOTALS') {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching '${action.type}' - action type`);
};

export default reducer;
