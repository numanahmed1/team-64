import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../../../redux/actions/productActions";
import "./ProductCard.css";
const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const showDetails = (id) => {
    const url = `/products/${id}`;
    history.push(url);
  };
  return (
    <div className="col-md-3 my-4">
      <div className="card product-card text-center h-100 shadow-sm border-0">
        <img src={data.image} className="image-card" />
        <div className="card-body ">
          <h5 className="card-title">{data.title}</h5>
          <div className="card-text">
            <h6> Category: {data.category}</h6>
            <p>Price: {data.price}</p>
            <p className="description text-secondary">
              <small>{data.description}</small>
            </p>
            <button
              onClick={() => dispatch(addToCart(data))}
              className="btn btn-dark mx-3"
            >
              Add to cart
            </button>
            <button
              className="btn btn-dark"
              onClick={() => showDetails(data.id)}
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
