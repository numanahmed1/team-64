import React from 'react';
import store01 from '../../images/store01.jpg'
import store02 from '../../images/store02.jpg'
import store03 from '../../images/store03.jpg'
import './Header.css'

const Header = () => {
  return (
    <div>
      <h4>This is header</h4>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1800">
      <img src={store01} class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item" data-bs-interval="1800">
      <img src={store02} class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item " data-bs-interval="1800">
      <img src={store03} class="d-block w-100 " alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  );
};

export default Header;