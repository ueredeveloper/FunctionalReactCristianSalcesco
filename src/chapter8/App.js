import React, {useState}from 'react';
import Header from './Header';
import ProductList from './ProductList'; 
import ShoppingCart from './ShoppingCart';
import './App.css';

const products = [
  {
    id: 1,
    name:'mango',
    quantity: 0
  }, 
  {
    id: 2,
    name:'banana',
    quantity: 0
  }
];


function App () {
  
  const [shoppingMap, setShoppingMap] = useState({});
  
  /*    takes a product and a map and returns the 
    current quantity of that product.
    */
  function getProductQuantity(product, map) {  
    const existingProduct = map[product.id];  
    //console.log("getProdQua"); 
    return (existingProduct) ? existingProduct.quantity : 0;  
  }
  
  /*   takes a product and a map and returns 
    the new map with the product quantity 
    updated
    */      
  function addProductToMap (product, map) {  
    let newMap = { ...map };  
    let quantity = 
      getProductQuantity(product, map) + 1;  
    newMap[product.id] = { ...product, quantity };  
    //console.log("addProdToMap"); 
    
    console.log(JSON.stringify(shoppingMap)); 
    
    return Object.freeze(newMap);
  };
  
  function addToCart (product) {
    setShoppingMap(map => addProductToMap(product, map));
    //console.log(JSON.stringify(product)); 
    products.map( p => JSON.stringify(p));
  };
  
  function removeToCart () {
    
  }
  
  return (
    <div>
      <h1>Chapter 8 - Stateful Functional Components </h1> 
      <Header />
      
      <ProductList 
        products={products}
        onAddClick={addToCart}
        />
       
      {/*
      <ShoppingCart cart={products} 
        onRemoveClick={removeToCart}/>
        */} 
    </div>
  )
}
export default App ; 