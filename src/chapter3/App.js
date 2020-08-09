import React from 'react';
import Transpiled from './transpiling/Transpiled';
import Message from './expressions/Message';
import EscapingStringMessage from './escaping-string/Message';


function App () {
  return (
    <div>
    <Transpiled />
    <Message/>
    <EscapingStringMessage/>
    </div>
  );
}

export default App;