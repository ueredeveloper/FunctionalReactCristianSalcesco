import React, {useState}from 'react';
import Header from './Header';
import ProductList from './ProductList'; 
import ShoppingCart from './ShoppingCart';
import './App.css';

const products = [
  {
    id: 1,
    name:'mango',
  }, 
  {
    id: 2,
    name:'banana'
  }
]


function App ({products}) {
  
  const [shoppingMap, setShoppingMap] = useState({});
  
  function addToCart(product) {
    
  }
  function removeToCart () {
    
  }
  
  function addProductToMap (product, map) {
    
  }
  
  return (
    <div>
      <h1>Chapter 8 - Stateful Functional Components </h1> 
      <Header />
     {/*<ProductList products={products}/>*/} 
      {/*
      <ShoppingCart cart={products} 
        onRemoveClick={removeToCart}/>
        */} 
    </div>
  )
}
export default App ; 