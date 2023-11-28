import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Landing() {
  const productData = [
    {
      id: 1,
      title: "iPhone 15",
      price: "$999",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846356600",
      brand: "Apple",
      brandImageUrl: "apple_logo.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy S23",
      price: "$899",
      imageUrl: "https://images.samsung.com/ae/smartphones/galaxy-s23/buy/kv_combo_MO_v2.jpg",
      brand: "Samsung",
      brandImageUrl: "samsung_logo.png",
    },
    {
      id: 3,
      title: "Google Pixel 6",
      price: "$799",
      imageUrl:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Probably_the_best_one_for_the_blog.width-1300.jpg",
      brand: "Google",
      brandImageUrl: "google_logo.png",
    },
    {
      id: 4,
      title: "OnePlus 9",
      price: "$849",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ulqN8KtKwD2KnTxCIi7omhTDATKRerbR0g&usqp=CAU",
      brand: "OnePlus",
      brandImageUrl: "oneplus_logo.png",
    },
    {
      id: 5,
      title: "Xiaomi Mi 11",
      price: "$699",
      imageUrl: "https://hd2.tudocdn.net/949051?w=550&h=550",
      brand: "Xiaomi",
      brandImageUrl: "xiaomi_logo.png",
    },
    {
      id: 6,
      title: "Huawei P40",
      price: "$799",
      imageUrl: "https://www.notebookcheck.it/uploads/tx_nbc2/huawei-p40-lite.jpg",
      brand: "Huawei",
      brandImageUrl: "huawei_logo.png",
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          Benvenuto nel Mondo della Tecnologia Mobile! Presso PhoneHub, ci impegniamo a offrirti il meglio della
          tecnologia mobile. <br /> Scopri la nostra selezione eclettica di smartphone che uniscono stile, innovazione e
          prestazioni all'avanguardia.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {productData.map(product => (
            <FeatureProduct
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              brand={product.brand}
              brandImageUrl={product.brandImageUrl}
              productId={product.id}
            />
          ))}
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
