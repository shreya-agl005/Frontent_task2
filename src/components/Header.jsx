import React from 'react';
import "../App.css";
// import logo from "../assets/logo.jpeg";  // Add back if using logo image

const Header = ({ onNavigate }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <h2>Frookoon</h2>
      </div>
      <nav className="nav">
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
        <a href="#products" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
        <a href="#cart" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}>Cart</a>
        <a href="#order" onClick={(e) => { e.preventDefault(); onNavigate('order'); }}>Order</a>
      </nav>
    </header>
  );
};

export default Header;