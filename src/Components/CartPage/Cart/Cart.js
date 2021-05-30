import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import CartCard from "../CartCard/CartCard";
import "./Cart.css";

export default function Cart() {
  const totalInCart = useSelector((state) => {
    return state.products.cart;
  });
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
              <p>0 product in cart.</p>
            )}
          </div>
          <div className="col-md-3 col-sm-12">
            {totalInCart.length > 0 && (
              <div>
                <div className="subtotal">
                  <p>Subtotal: {totalInCart.length} items</p>
                </div>
                <div className="d-flex align-center justify-content-center mt-3">
                  <button className="custom-btn">Buy now</button>
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
