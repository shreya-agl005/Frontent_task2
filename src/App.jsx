// import React, { useState } from 'react';
// import Header from './components/Header';  // Adjust path to your Header location
// import Home from './pages/Home';
// import ProductListing from './pages/ProductListing';
// import Cart from './pages/Cart';
// import OrderConfirmation from './pages/OrderConfirmation';

// function App() {
//   const [activePage, setActivePage] = useState('home');

//   const renderPage = () => {
//     switch (activePage) {
//       case 'home':
//         return <Home />;
//       case 'products':
//         return <ProductListing />;
//       case 'cart':
//         return <Cart />;
//       case 'order':
//         return <OrderConfirmation />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="App">
//       <Header onNavigate={setActivePage} />
//       <main>{renderPage()}</main>
//     </div>
//   );
// }



// export default App;
import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Skeleton from './components/Skeleton';
import './App.css';

// Lazy load pages
const Home = lazy(() =>
  // Optional delay to demo skeleton
  new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/Home')), 1000); // 1s delay
  })
);
const ProductListing = lazy(() => import('./pages/ProductListing'));
const Cart = lazy(() => import('./pages/Cart'));
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'));

// function App() {
//   const [activePage, setActivePage] = useState('home');

//   // Function to render the active page
//   const renderPage = () => {
//     switch (activePage) {
//       case 'products':
//         return <ProductListing />;
//       case 'cart':
//         return <Cart />;
//       case 'order':
//         return <OrderConfirmation />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="app">
//       {/* Header always visible */}
//       <Header onNavigate={setActivePage} />

//       {/* Lazy-loaded page with Skeleton fallback */}
//       <Suspense fallback={<Skeleton />}>
//         {renderPage()}
//       </Suspense>
//     </div>
//   );
//}

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Header />

      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderConfirmation />} />
        </Routes>
      </Suspense>

    </Router>
  );
}

export default App;



