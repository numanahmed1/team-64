import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/productActions";
import "./CartCard.css";

export default function CartCard({ data }) {
  const { image, title, description, price } = data;
  const dispatch = useDispatch();
  return (
    <div className="cart-card">
      <div className="cart-img-box">
        <img src={image} alt="" />
      </div>
      <div className="cart-details">
        <h3>{title}</h3>
        <p className="cart-desc">{description}</p>
        <p className="price">${price}</p>
      </div>
      <div className="cart-buttons">
        <button
          onClick={() => dispatch(removeFromCart(data))}
          className="custom-btn"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
