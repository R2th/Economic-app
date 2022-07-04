import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import * as React from "react";

import { CartProvider } from "./src/contexts/CartContext";

// import { combineReducers, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// const rootReducer = combineReducers({
//   store: productReducer,
//   cart: cartReducer
// })

export default function App() {
  return (
    <CartProvider>
      <StatusBar />
      <Navigation />
    </CartProvider>
  );
}
