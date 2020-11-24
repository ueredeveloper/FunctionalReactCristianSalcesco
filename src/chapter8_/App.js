import React, { useState }from 'react';
import './App.css'; 
import Header from './Header'; 

const products = [
  {
    id: 1,
    name:'mango',
    quantity: 2
  }, 
  {
    id: 2,
    name:'banana',
    quantity: 4
  }
];

function App () {
  
  const [shoppingMap, setShoppingMap ] = useState ({});
  
  function addProductToMap(product, map){  
    const newMap = { ...map };  
    const quantity = 
      getProductQuantity(product, map) + 1;  
      newMap[product.id] = { ...product, quantity };  
    return Object.freeze(newMap);  
  }
  
  function getProductQuantity(product, map) {  
    const existingProduct = map[product.id];  
    return 
      (existingProduct) ? existingProduct.quantity : 0;  
  }
  
  return (
    <div>
      <Header />
    </div>
  );
}

export default App; 