import React from 'react';

/*
  product item create interface for a 
    single element 
  
  */

function ProductItem ({name, price}) {  
  return (  
    <div>
      <h2>Product: {name}</h2>
      <h3>Price: {price}</h3>
    </div>  
    );  
}
export default ProductItem;