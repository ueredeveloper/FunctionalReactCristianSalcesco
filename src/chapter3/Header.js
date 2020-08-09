import React from 'react';

/*
  Transpiling
  
  resume:
    jsx describes how the user interface looks like
    offer friendly html sintax

*/

function Header () {
  return (
    React.createElement('header', null, 
      React.createElement('h1', null, 'a shopping cart')
    )
  )
}

export default Header;