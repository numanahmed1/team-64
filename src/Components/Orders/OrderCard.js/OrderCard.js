import React from "react";
import "./OrderCard.css";

export default function CartCard({ data }) {
  const { image, title, description, price } = data;
  return (
    <div className="order-card">
      <div className="order-img-box">
        <img src={image} alt="" />
      </div>
      <div className="order-details">
        <h3>{title}</h3>
        <p className="order-desc">{description}</p>
        <p className="order">${price}</p>
      </div>
    </div>
  );
}
