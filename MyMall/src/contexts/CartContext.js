import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const action = {
    addToCart: (item) => {
      let isAvailable = true;
      data.forEach((_item, idx) => {
        if (item.id === _item.id) {
          isAvailable = false;
          return;
        }
      });
      if (isAvailable) {
        setData((prevState) => [...prevState, { ...item, count: 1 }]);
      }
    },
    updateNumberProducts: (id, number) => {
      setData((prevState) => {
        return prevState.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + number };
          } else {
            return { ...item };
          }
        });
      });
    },
    removeFromCart: (id) => {
      setData((prevState) => prevState.filter((item) => item.id !== id));
    },
    calculatePrice: () => {
      return data
        .reduce((prevState, item) => prevState + item.price * item.count, 0)
        .toFixed(2);
    },
  };

  return (
    <CartContext.Provider value={{ state: data, action }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
