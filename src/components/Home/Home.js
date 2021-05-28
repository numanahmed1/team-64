import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const Home = () => {
    const products = useSelector((state) => {
        console.log("state:", state.product.products)
        return state.product.products;
    })
    return (
        <div>
            {
                products?.map((product) => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;