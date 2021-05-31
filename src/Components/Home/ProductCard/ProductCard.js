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
    <div className="col-md-4 col-lg-3 col-sm-12 my-4">
      <div className="card product-card text-center h-100 shadow-sm border-0">
        <img src={data.image} className="image-card" />
        <div className="card-body pb-0">
          <h5 className="card-title">{data.title}</h5>
          <div className="card-text">
            <h6> Category: {data.category}</h6>
            <p>Price: {data.price}</p>
            <p className="description text-secondary">
              <small>{data.description}</small>
            </p>
          </div>
        </div>
        <div className="card-footer bg-white border-top-0 pb-3">
          <button
            onClick={() => dispatch(addToCart(data))}
            className="btn btn-dark mx-3 mt-2"
          >
            Add to cart
          </button>
          <button
            className="btn btn-dark mt-2"
            onClick={() => showDetails(data.id)}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
