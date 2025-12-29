import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'

const ProductListing = () => {
  return (
    <div>
     <div className="bod">
      <h1>Products</h1>
      <div className="products">
        <div className="product-card">Product 1</div>
        <div className="product-card">Product 2</div>
        <div className="product-card">Product 3</div>
      </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductListing