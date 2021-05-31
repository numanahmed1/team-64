import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllProduct } from "../../../redux/actions/productActions";
import ProductCard from "../ProductCard/ProductCard";

const ProductData = () => {
  const productData = useSelector((state) => {
    return state.products.AllProducts;
  });

  const dispatch = useDispatch();

  useEffect(() => dispatch(viewAllProduct()), [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row my-5">
        {productData.length > 0 ? (
          productData.map((data) => (
            <ProductCard key={data.id} data={data}></ProductCard>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductData;
