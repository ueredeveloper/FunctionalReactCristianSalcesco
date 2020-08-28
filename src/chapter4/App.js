import React from 'react';
import ProductList from './ProductList'; 

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
  return (
    <div>
      <h1>Cap. 04</h1>
      <ProductList products={products} />
    </div>
  )
}
export default App; 