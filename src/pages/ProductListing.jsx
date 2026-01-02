import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'

// const ProductListing = () => {
//   return (
//     <div>
//      <div className="bod">
//       <h1>Products</h1>
//       <div className="products">
//         <div className="product-card">Product 1</div>
//         <div className="product-card">Product 2</div>
//         <div className="product-card">Product 3</div>
//       </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const products = [
    { id: 1, name: 'Milk', price: 50 },
    { id: 2, name: 'Bread', price: 30 },
  ];

  return (
    <div>
      {products.map(p => (
        <ProductCard key={p.id} name={p.name} price={p.price} />
      ))}
    </div>
  );
};
export default ProductListing