import React from 'react';
import './App.css'; 
import ProductItem from './ProductItem'; 


const product = {
    id: 1,
    name:'mango',
    price:'15,00'
  };

function App () {
  
  function onAddClick () {
    console.log("Clicked onAddClick "); 
  }
  return (
    <div>
      <ProductItem 
        product={product} 
        onAddClick={onAddClick}/>
    </div>
  );
}

export default App; 