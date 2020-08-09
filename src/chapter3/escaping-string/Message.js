import React from 'react';

/*
  Escaping String Expression 
  resume:
    how add html inside a string.
    
    */

function Message () {
  
  //string write like jsx, the result is print 'learn' bold
  const messageText = <b>learn</b>;
  
  return (
    <div>{messageText}</div>
  )
  
}
export default Message;