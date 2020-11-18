import React from 'react';
import ProductList from './ProductList';


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
]

function App () {
   
  function addToCart (product) {
    console.log(product.name); 
  }
  
  return (
        <div>
          <ProductList products={products} onAddClick={addToCart}/>
        </div>
       ) ;
}

export default App;