import React from "react";

const style = {
  border: "solid 1px blue",
  margin:"10px 10px 10px 10px"
}

function ProductItem ({product}) {
  return (
    <div>
    <h1>Props</h1>
      <p>Product Item</p>
      <p style={style}>{product.name}</p>
    </div>
  )
}
export default ProductItem;