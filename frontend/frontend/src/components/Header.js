import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Shop Rental Management System</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shops">Shops</Link></li>
          <li><Link to="/owners">Owners</Link></li>
          <li><Link to="/rentals">Rentals</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
