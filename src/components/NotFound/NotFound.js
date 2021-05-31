import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1>404 Page not Found!</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
