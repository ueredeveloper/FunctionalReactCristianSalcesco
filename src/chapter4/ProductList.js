import React from 'react';
import ProductItem from './ProductItem'; 


function ProductList ({products}) {
  return (
    <div>
    {products.map( p => 
      <ProductItem product={p}/>
    )}
    </div>
  )
}
export default ProductList;
