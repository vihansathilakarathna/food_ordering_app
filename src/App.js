import { useState } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
import CartProvider from './Store/CartProvider';
import Cart from './Component/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main><Meals/></main>    
    </CartProvider>
  );
}

export default App;
