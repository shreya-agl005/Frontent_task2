import React from 'react';

// const ProductCard = ({ name, price }) => {
//   return (
//     <div className="product-card">
//       <h3>{name}</h3>
//       <p>₹{price}</p>
//     </div>
//   );
// };

// export default ProductCard;


import './ProductCard.css';

const ProductCard = ({ name, price }) => {
  return (
    <div className="product-card">
      <div className="product-img"></div>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
