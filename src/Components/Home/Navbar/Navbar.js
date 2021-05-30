import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const totalInCart = useSelector((state) => {
    return state.products.cart;
  });
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand px-3" to="/">
            FakeStore
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <form class="d-flex">
                  <input
                    class="form-control "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-dark" type="submit">
                    Search
                  </button>
                </form>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#">
                  Sign in
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#">
                  Your orders
                </a>
              </li>
              <li class="nav-item px-3">
                <div className="cart-box">
                  {totalInCart.length > 0 ? (
                    <div className="cart-length">{totalInCart.length}</div>
                  ) : (
                    <div className="cart-length">0</div>
                  )}
                  <Link class="nav-link" to="/cart">
                    Cart
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
