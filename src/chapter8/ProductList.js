import React from 'react';
import ProductItem from './ProductItem'; 

function ProductList ({products, onAddClick}) {
  return (
    <div>
    {products.map( p => 
      <>
      <ProductItem product={p} key={p.id}/>
      <input type="button" value="  +  "
        onClick={() => onAddClick(p)}/> 
      <input type="button" value="  -  "/> 
      </>
    )}
    </div>
  )
}

export default ProductList;
