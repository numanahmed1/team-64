import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import RegisterImage from "../../images/signup.svg"
import {
    Link, useHistory, useLocation
} from "react-router-dom";

const Register = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className="container">
            <div class="card login-card my-5">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <h3 className="text-center text-secondary mb-5">Register</h3>
                            <form onSubmit={handleSubmit()}>
                                <div className="input-group mb-3">
                                    <input {...register("email", { required: true })} type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input {...register("password", { required: true })} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-success mb-3">Register</button>
                                </div>
                                <Link to="/login">
                                    <a>Already have an account? login now</a>
                                </Link>
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

export default Register;