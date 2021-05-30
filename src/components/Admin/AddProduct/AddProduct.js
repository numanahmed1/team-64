import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import RegisterImage from "../../../images/login.svg"
import axios from 'axios';
import {
    Link, useHistory, useLocation
} from "react-router-dom";

const AddProduct = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    const [imageURL, setImageURL] = useState(null);

    const handleImage = event => {
        const imageData = new FormData()
        imageData.set('key', 'bcaa76da5c37cf7520b24da6b76c88ea');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res?.data?.data?.display_url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div class="card login-card my-5">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <h3 className="text-center text-secondary mb-5">Add Product</h3>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Product Name" aria-label="pname" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Product Price" aria-label="pprice" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control" placeholder="Product Price" aria-label="image" aria-describedby="basic-addon1" />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-success mb-3">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <img src={RegisterImage} alt="" width="500" className="mt-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;