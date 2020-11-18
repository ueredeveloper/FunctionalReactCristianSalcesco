import React from 'react';

function ShoppingItem ({product, onRemoveClick}) {
  return (
    <div>
      <h3>product.name</h3>
      <button
        type="button"
        onClick={onRemoveClick}>remove</button>
    </div>
  );
}

export default ShoppingItem; 