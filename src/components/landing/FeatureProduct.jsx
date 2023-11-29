// Nel file FeatureProduct.js
import React from "react";
import { Link } from "react-router-dom";

function FeatureProduct({ imageUrl, title, price, productId }) {
  return (
    <div className="col mb-4">
      <div className="card shadow-sm h-100">
        <img
          className="card-img-top bg-dark cover"
          style={{ height: "240px", objectFit: "cover" }}
          alt=""
          src={imageUrl}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title text-center">{title}</h5>
            <p className="card-text text-center text-muted">{price}€</p>
          </div>
          <div className="d-grid">
            <Link to={`/products/${productId}`} className="btn btn-outline-dark" replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
