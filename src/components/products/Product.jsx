import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product({ product, percentOff }) {
  const { id, title, price, images } = product;

  let offPrice = `${price}€`;

  if (percentOff && percentOff > 0) {
    offPrice = (
      <>
        <del>{price}€</del> {price - (percentOff * price) / 100}€
      </>
    );
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={`/products/${id}`} replace>
          {percentOff && percentOff > 0 && (
            <div className="badge bg-dim py-2 text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
              {percentOff}% OFF
            </div>
          )}
          <img className="card-img-top bg-dark cover" height="200" alt="" src={images[0].url} />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">{title}</h5>
          <p className="card-text text-center text-muted mb-0">{offPrice}</p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
              <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
