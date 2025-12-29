import React, { useState } from 'react';
import Header from './components/Header';  // Adjust path to your Header location
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'products':
        return <ProductListing />;
      case 'cart':
        return <Cart />;
      case 'order':
        return <OrderConfirmation />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header onNavigate={setActivePage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;