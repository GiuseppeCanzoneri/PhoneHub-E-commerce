import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

function Header({ cartItemCount, cartItems, onRemoveFromCart }) {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
            <img src={logo} alt="" style={{ width: 120, height: 90 }} />
            <span className="ms-2 h5">Techub</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? "open" : "")}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/products" className="nav-link" replace onClick={changeNav}>
                  Products
                </Link>
              </li>
            </ul>

            <Link to="/cart" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">{cartItemCount}</span>
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  href="!#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={["fas", "user-alt"]} />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-inline-block d-lg-none">
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
