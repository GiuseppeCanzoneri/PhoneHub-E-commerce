import React from "react";
import { Link } from "react-router-dom";

function FeatureProduct({ imageUrl, title, price, productId }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top bg-dark cover" height="240" alt="" src={imageUrl} />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center text-muted">{price}</p>
          <div className="d-grid gap-2">
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
