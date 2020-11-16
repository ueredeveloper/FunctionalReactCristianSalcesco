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
  return (
    <div>
      <h1>Cap. 04</h1>
      <ProductList products={products} />
    </div>
  )
}
export default App; 