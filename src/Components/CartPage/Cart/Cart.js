import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import CartCard from "../CartCard/CartCard";
import "./Cart.css";
import {
  addToOrders,
  removeFromCart,
} from "../../../redux/actions/productActions";
import { Link } from "react-router-dom";

export default function Cart() {
  const totalInCart = useSelector((state) => {
    return state.products.cart;
  });

  const dispatch = useDispatch();

  const handleOrders = () => {
    totalInCart.map(
      (item) => (dispatch(addToOrders(item)), dispatch(removeFromCart(item)))
    );
    alert("Your order placed successfully.");
  };
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-sm-12">
            {totalInCart.length > 0 ? (
              <div>
                {totalInCart.map((data) => (
                  <CartCard key={data.id} data={data} />
                ))}
              </div>
            ) : (
              <p>You have nothing in cart.</p>
            )}
          </div>
          <div className="col-md-3 col-sm-12">
            {totalInCart.length > 0 ? (
              <div>
                <div className="subtotal">
                  <p>Subtotal: {totalInCart.length} items</p>
                </div>
                <div className="d-flex align-center justify-content-center mt-3">
                  <Link to="/orders">
                    <button onClick={handleOrders} className="custom-btn">
                      Buy now
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center mt-5">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
