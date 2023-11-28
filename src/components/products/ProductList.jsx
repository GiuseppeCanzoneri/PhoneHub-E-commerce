// ProductList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductH from "./ProductH";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import productData from "./detail/ProductData";

const categories = [
  "All Products",
  "Phones & Tablets",
  "Cases & Covers",
  "Screen Guards",
  "Cables & Chargers",
  "Power Banks",
];

function FilterMenuLeft() {
  return (
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">Browse</h5>
        <div className="d-flex flex-wrap my-2">
          {categories.map((v, i) => {
            return (
              <Link key={i} to="/products" className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2" replace>
                {v}
              </Link>
            );
          })}
        </div>
      </li>
      {/* ... (Altri filtri rimangono invariati) */}
    </ul>
  );
}

function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    });
  }

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded">
        <ol className="breadcrumb p-3 mb-0">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/products" replace>
              All Products
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Phones & Tablets {/* Modifica dinamicamente in base alla categoria selezionata */}
          </li>
        </ol>
      </nav>

      <div className="row mb-4 mt-lg-3">
        <div className="d-none d-lg-block col-lg-3">
          <div className="border rounded shadow-sm">
            <FilterMenuLeft />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex flex-column h-100">
            <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
              }
            >
              {productData.map((product, index) => (
                <React.Fragment key={index}>
                  {viewType.grid ? (
                    <Product product={product} percentOff={index % 2 === 0 ? 15 : null} />
                  ) : (
                    <ProductH product={product} percentOff={index % 4 === 0 ? 15 : null} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
