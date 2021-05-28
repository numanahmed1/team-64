import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/">
                    <a class="navbar-brand" href="#">E-COM</a>
                </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/" class="nav-item me-5">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                        <Link to="/about" class="nav-item me-5">
                            <a class="nav-link" href="#">About</a>
                        </Link>
                        <Link to="/about" class="nav-item me-5">
                            <a class="nav-link" href="#">Contact us</a>
                        </Link>
                        <Link to="/addDoner" class="nav-item me-5">
                            <a class="nav-link" href="#">Cart</a>
                        </Link>
                        <Link to="/login" class="nav-item me-5">
                            <a class="nav-link" href="#">Login</a>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;