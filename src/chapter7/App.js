import React from 'react';
import './App.css'; 
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart'; 

const products = [
  {
    id: 1,
    name:'mango',
    price:'15,00', 
    quantity:3
  }, 
  {
    id: 2,
    name:'banana',
    price:'30,00',
    quantity:4
  }
  ];
  
function App () {
  
  const cart = {list : products };
  
  function removeFromCart () {
    console.log("remove from cart "); 
  }
  
  function addToCart(product) {
    console.log(`add ${product.id}`);
  }

  
  function onAddClick () {
    console.log("Clicked onAddClick "); 
  }
  return (
    <div> 
      <Header />
      <div className="content">
      <ProductList 
          products={products} 
          onAddClick={addToCart} />
          
      <ShoppingCart 
        cart={cart} 
        onRemoveClick={removeFromCart}
      />
      </div>
    </div>
  );
}

export default App; 