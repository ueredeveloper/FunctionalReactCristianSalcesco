import React from 'react';
import ShoppingCart from './ShoppingCart'; 

const products = [
  {
    id: 1,
    name:'mango',
    price:'15,00'
  }, 
  {
    id: 2,
    name:'banana', 
    price:'25,00'
  }
];

function App () {
  
  const cart = {list:products};
  
  function onRemoveClick () {
    console.log("remove"); 
  }
  
  return (
    <div>
    <div> Chapter 6 </div>
    <ShoppingCart 
      cart={cart} 
      onRemoveClick={onRemoveClick}/>
    </div>
  );
}

export default App; 