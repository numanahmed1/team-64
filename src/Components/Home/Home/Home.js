import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProductData from '../ProductData/ProductData';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductData />
      <Footer />
    </div>
  );
};

export default Home;