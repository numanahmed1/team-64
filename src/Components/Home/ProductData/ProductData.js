import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductData = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [productData]);

  return (
    <div className="container-fluid">
      <div className="row my-5">
        {productData.map((data) => (
          <ProductCard data={data}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
