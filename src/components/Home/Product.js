import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/login.svg'

const Product = ({ product }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div class="card m-3">
                <img src={Image} class="card-img-top" width="100px" height="200" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <Link to={`/product/${product._id}`}>
                        <a class="btn btn-secondary mx-3">VIEW</a>
                    </Link>
                    <a class="btn btn-success">ADD TO CART</a>
                </div>
            </div>
        </div>
    );
};

export default Product;