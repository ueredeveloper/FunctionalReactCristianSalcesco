import React, {useState}from 'react';
import ProductList from '../chapter4/ProductList'; 
import Header from './Header';

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


function App () {
  
  const [shoppingMap, setShoppingMap] = useState({});
  
  function addToCart() {
    
  }
  function removeToCart () {
    
  }
  
  function addProductToMap (product, map) {
    
  }
  
  return (
    <div>
      <h1>Chapter 8 - Stateful Functional Components </h1> 
      <Header />
      <ProductList products={products}/>
    </div>
  )
}
export default App ; 