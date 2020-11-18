import React from 'react';
import ShoppingItem from './ShoppingItem'; 

function ShoppingCart ({cart, onRemoveClick}) {
  return (
    <div>
    ShoppingCart 
    {cart.list.map(product =>  
      <ShoppingItem  
        key={product.id}
        product={product}
        onRemoveClick={onRemoveClick} />
    )}
    </div>
  );
}

export default ShoppingCart ; 