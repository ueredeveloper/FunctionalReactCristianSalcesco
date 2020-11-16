import React from 'react';

function ProductItem ({product}) {  
  return (  
    <>
    <h2>Product</h2>
    
      <div>Id: {product.id}</div> 
      <div>Name: {product.name}</div>  
      <div>Quantity: {product.quantity}</div> 
    
    </>
    );  
}
export default ProductItem;