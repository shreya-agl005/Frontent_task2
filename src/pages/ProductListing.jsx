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

// const ProductListing = () => {
//   const products = [
//     { id: 1, name: 'Milk', price: 50 },
//     { id: 2, name: 'Bread', price: 30 },
//   ];

//   return (
//     <div>
//     <div className="bod">
//       {products.map(p => (
//         <ProductCard key={p.id} name={p.name} price={p.price} />
//       ))}
//     </div>
//     <Footer/>
//      </div>
//   );
// };
// export default ProductListing


import './ProductListing.css';

const products = [
  { id: 1, name: 'Milk', price: 50 },
  { id: 2, name: 'Bread', price: 40 },
  { id: 3, name: 'Eggs', price: 120 },
  { id: 4, name: 'Fruits', price: 90 },
];

const ProductListing = () => {
  return (
    <div>
    <div className="product-listing">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
   <Footer/>
     </div>
  );
};

export default ProductListing;
