import React from 'react';

function Valid ({valid}) {
  return (
  <div>
    <h1>Attributes</h1>
    <h2>resume:</h2>
    
    <table>
    <dl>
      <dt><p>onclick becomes onClick</p></dt>
      <dd></dd>
    </dl>
     <dl>
      <dt>curly braces</dt>
      <dd>specify expressions</dd>
      <dd>valid={"{false}"}</dd>
    </dl>
     <dl>
      <dt>cotes</dt>
      <dd>especify strings</dd>
      <dd>valid="string here"</dd>
    </dl>
    <dl>
      <dt>Examples</dt>
      <dd>the value of attribute valid is: {valid}</dd>
    </dl>
    </table>
  </div>
  );
}
export default Valid;