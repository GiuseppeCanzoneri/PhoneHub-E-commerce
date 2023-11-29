import { Link } from "react-router-dom";

function RelatedProduct(props) {
  const { id, title, price, percentOff, images } = props.product;
  let offPrice = `${price}€`;

  if (percentOff && percentOff > 0) {
    offPrice = (
      <>
        <del>{price}€</del> {price - (percentOff * price) / 100}€
      </>
    );
  }

  return (
    <Link to={`/products/${id}`} className="col text-decoration-none" replace>
      <div className="card shadow-sm">
        {percentOff && (
          <div className="badge bg-dim py-2 text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
            {percentOff}% OFF
          </div>
        )}
        <img className="card-img-top bg-dark cover" height="200" alt="" src={images[0].url} />

        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">{title}</h5>
          <p className="card-text text-center text-muted">{offPrice}</p>
        </div>
      </div>
    </Link>
  );
}

export default RelatedProduct;
