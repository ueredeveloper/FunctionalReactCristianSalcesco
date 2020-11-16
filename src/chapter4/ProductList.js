import React from 'react';
import ProductItem from './ProductItem'; 
/*
  Product List creates interface for a list of 
    elements (product item )*/

function ProductList ({products}) {
  return (
    <div>
    {/*spread attribute {... product}*/}
    {products.map( product => 
      <ProductItem {...product}/>
    )}
    </div>
  )
}
export default ProductList;
