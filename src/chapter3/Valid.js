import React from 'react';

/*
  Expressions
  
  resume: 
    can be used inside statements
    assign to variables
    passed as arguments
  
  */

function Valid ({valid}) {
  if (valid) {
    return (<>valid</>)
  } else {
    return (<>invalid</>)
  }
}
export default Valid;