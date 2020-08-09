import React from 'react';

/*
  Expressions
  
  resume: 
    jsx accept valid JavaScript expression
*/

function Message ({valid}) {
  
  const message = '1+1=2';
  const sum = (a,b) => a+b;

  return (
    <div>
    
    {/*example 1*/}
    {message}
    
    {/*example 2*/}
    <div>1+1={1+1}</div>
    
    {/*example 3*/}
    <div>1+1={sum(1,1)}</div>
    
    {/*example 4*/}
    <div>{valid ? 'true' : 'false'}</div>
    
    </div>
    
  )
}
export default Message;