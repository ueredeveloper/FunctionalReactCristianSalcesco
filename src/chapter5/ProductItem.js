import React from 'react';

function ProductItem ({product, onAddClick}) {
  return (
        <div> 
          <div>{product.name}</div>
          <div>
            <button 
              type="button" 
              onClick={
                () => onAddClick(product)}>
                add</button>
          </div> 
        </div>
       ) ;
}

export default ProductItem ;