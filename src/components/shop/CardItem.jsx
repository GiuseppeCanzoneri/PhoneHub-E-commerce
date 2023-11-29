// Nel file CartItem.js
import React from "react";

function CartItem({ product, onRemove }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded border-dark">
      <div className="d-flex flex-column align-items-center">
        <strong>{product.title}</strong>
        <img src={product.images[0].url} alt="" style={{ width: 100, height: 100 }} />
        <small>Quantità: {product.quantity || 1}</small>
      </div>
      <div className="d-flex align-items-center">
        <div className="me-3">€{(product.price * (product.quantity || 1)).toFixed(2)}</div>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onRemove(product)}>
          Rimuovi
        </button>
      </div>
    </div>
  );
}

export default CartItem;
