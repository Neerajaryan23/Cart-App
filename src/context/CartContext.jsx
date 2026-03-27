import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => { },
  removeBtn: () => { },
  increaseQty: () => { },
  decreaseQty: () => { },
});

// Load cart from localStorage when app first opens
const getInitialCart = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

const reducer = (state, action) => {

  // Check if product already exists in cart
  if (action.type === "ADD_TO_CART") {
    const existingItem = state.find((item) => item.id === action.payload.id);
    if (existingItem) {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    return [...state, { ...action.payload, quantity: 1 }];
  }

  if (action.type === "INCREASE_QTY") {
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }

  if (action.type === "DECREASE_QTY") {
    const existingItem = state.find((item) => item.id === action.payload.id);

    if (!existingItem) return state;

    if (existingItem.quantity === 1) {
      return state;
    }
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
  }

  if (action.type === "REMOVE") {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, [], getInitialCart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
    return () => {
      console.log("cleaning up useEffect");
    };
  }, []);

  // Auto-save cart to localStorage every time cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  // Add selected product to cart using reducer action
  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const increaseQty = (product) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: product,
    });
  };

  const decreaseQty = (product) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: product,
    });
  };

  const removeBtn = (product) => {
    dispatch({
      type: "REMOVE",
      payload: product,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeBtn,
        products,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
