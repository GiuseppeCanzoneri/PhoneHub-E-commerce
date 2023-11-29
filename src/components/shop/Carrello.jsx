// Carrello.js
import React from "react";
import CartItem from "./CardItem";

function Carrello({ items, onRemove }) {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div className="p-3 mt-5">
      <h5 className="mb-3">Il tuo carrello</h5>
      {items && items.length > 0 ? (
        items.map(item => <CartItem key={item.id} product={item} onRemove={onRemove} />)
      ) : (
        <p>Il carrello è vuoto</p>
      )}
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <strong>Totale:</strong>
        <div>€{calculateTotal().toFixed(2)}</div>
      </div>
      <button className="btn btn-dark mt-3">Buy Now</button>
    </div>
  );
}

export default Carrello;
