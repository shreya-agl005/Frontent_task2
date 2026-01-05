import React from 'react';
import "../App.css";
  

// const Header = ({ onNavigate }) => {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <h2>Frookoon</h2>
//       </div>
//       <nav className="nav">
//         <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
//         <a href="#products" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
//         <a href="#cart" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}>Cart</a>
//         <a href="#order" onClick={(e) => { e.preventDefault(); onNavigate('order'); }}>Order</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import logo from "../assets/logo.jpeg";

//component switching
// const Header = ({ onNavigate }) => {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         {logo && <img src={logo} alt="Frookoon Logo" className="logo" />}
//         <h2>Frookoon</h2>
//       </div>

//       <nav className="nav">
//         <a href="#home" onClick={() => onNavigate('home')}>Home</a>
//         <a href="#products" onClick={() => onNavigate('products')}>Products</a>
//         <a href="#cart" onClick={() => onNavigate('cart')}>Cart</a>
//         <a href="#order" onClick={() => onNavigate('order')}>Order Confirmation</a>
//       </nav>
//     </header>
//   );
// };

//routing
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Frookoon Logo" className="logo" />
        <h2>Frookoon</h2>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/order">Order</Link>
      </nav>
    </header>
  );
};

export default Header;
