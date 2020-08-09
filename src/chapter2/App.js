import React from 'react';
import Header from './functional-components/Header';
import ProductItem from './props/ProductItem';
import Single from './entry-point/Single';

const product = {
  id:1,
  name:'mango',
}

function App () {
  return (
    <div>
      <Header />
      <ProductItem product={product}/>
      <Single/>
    </div>
  );
}

export default App;