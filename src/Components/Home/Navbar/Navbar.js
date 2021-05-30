import React from 'react';

const Navbar = () => {
  return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand px-3" href="/">FakeStore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     <li>
     <form class="d-flex">
        <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
     </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Sign in</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Your orders</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;