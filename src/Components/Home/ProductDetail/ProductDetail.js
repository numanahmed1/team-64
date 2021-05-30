import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);
  console.log(detail);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-md-4 offset-2">
            <img src={detail.image} className="img-fluid" alt="" />
          </div>
          <div className="col-md-5 offset-1 mt-5 pt-5">
            <h2>{detail.title}</h2>
            <h4>Price: {detail.price}</h4>
            <p>
              <small> Category: {detail.category}</small>
            </p>
            <h5 className='text-secondary'>{detail.description}</h5>
            <button className="btn btn-dark mt-3">Buy Now!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
