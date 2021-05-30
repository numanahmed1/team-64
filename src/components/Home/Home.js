import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewAllProduct } from '../../redux/actions/productActions';
import Product from './Product';

const Home = () => {
    const products = useSelector((state) => {
        // console.log("state:", state.product.products)
        return state.product.products;
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewAllProduct())
    }, [dispatch])
    return (
        <div className="row">
            {
                products?.map((product) => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;