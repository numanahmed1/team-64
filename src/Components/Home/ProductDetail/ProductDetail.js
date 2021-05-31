import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addToOrders,
  viewSingleProduct,
} from "../../../redux/actions/productActions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  const detail = useSelector((state) => {
    return state.products.product;
  });
  console.log(detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewSingleProduct(id));
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container">
        {detail.id ? (
          <div className="row mt-5 pt-5">
            <div className="col-md-4 offset-md-2">
              <div className="d-flex justify-content-center">
                <img
                  src={detail.image}
                  className="img-fluid product-details-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <h2>{detail.title}</h2>
              <h4>Price: {detail.price}</h4>
              <p>
                <small> Category: {detail.category}</small>
              </p>
              <h5 className="text-secondary">{detail.description}</h5>
              <Link to="/orders">
                <button
                  onClick={() => dispatch(addToOrders(detail))}
                  className="btn btn-dark mt-3"
                >
                  Buy Now!
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
      <Footer />
    </div>
  );
};

export default ProductDetail;
