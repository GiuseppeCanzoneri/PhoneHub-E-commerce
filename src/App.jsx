import React, { useState } from "react";
import Template from "./components/template/Template";
import ProductDetail from "./components/products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ProductList from "./components/products/ProductList";
import Carrello from "./components/shop/Carrello";

function App() {
  const [cartItems, setCartItems] = useState([]); // Stato del carrello

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  // Funzione per rimuovere un prodotto dal carrello
  const removeFromCart = product => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <Template cartItemCount={cartItems.length}>
      {" "}
      {/* Passa la lunghezza del carrello al componente Header */}
      <Switch>
        <Route path="/products" exact>
          <ProductList addToCart={addToCart} />
        </Route>
        <Route path="/products/:id">
          {/* Passa la funzione addToCart al componente ProductDetail */}
          <ProductDetail addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          {/* Passa il carrello e la funzione removeFromCart al componente Carrello */}
          <Carrello items={cartItems} onRemove={removeFromCart} />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
