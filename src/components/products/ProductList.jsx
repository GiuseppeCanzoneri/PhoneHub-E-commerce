// ProductList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import ProductH from "./ProductH";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import productData from "./detail/ProductData";

const categories = [
  "All Products",
  "Tablets",
  "Smartphones",
  "Cases & Covers",
  "Cables & Chargers",
  "Laptops",
  "TVs",
  "Audio",
  "Wearables",
];

function FilterMenuLeft({ onSelectCategory, selectedCategory }) {
  return (
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">Browse</h5>
        <div className="d-flex flex-wrap my-2">
          {categories.map((v, i) => (
            <button
              key={i}
              className={`btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 ${selectedCategory === v ? "active" : ""}`}
              onClick={() => onSelectCategory(v)}
            >
              {v}
            </button>
          ))}
        </div>
      </li>
    </ul>
  );
}

function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    });
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  const filteredProducts =
    selectedCategory === "All Products"
      ? productData
      : productData.filter(product => product.details.category === selectedCategory);

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded">
        <ol className="breadcrumb p-3 mb-0">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none text-dark link-secondary" to="/products" replace>
              All Products
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Phones & Tablets
          </li>
        </ol>
      </nav>

      <div className="row mb-4 mt-lg-3">
        <div className="d-none d-lg-block col-lg-3">
          <div className="border rounded shadow-sm">
            <div className="border rounded shadow-sm">
              <FilterMenuLeft onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
            </div>
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
              {filteredProducts.map(product => (
                <React.Fragment key={product.id}>
                  <Link to={`/products/${product.id}`} className="text-decoration-none">
                    {viewType.grid ? <Product product={product} /> : <ProductH product={product} />}
                  </Link>
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
