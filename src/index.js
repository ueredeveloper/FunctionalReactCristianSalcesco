import React from 'react';
import ReactDOM from 'react-dom';
// ----- chapter2 -----//
//import App from './chapter2/App';
// ----- chapter3 ------ //
//import App from './chapter3/App';
// ----- chapter4 ------ //
//import App from './chapter4/App';
// ----- chapter5 ------ //
//import App from './chapter5/App';
// ----- chapter6 ------ //
//import App from './chapter6/App';
// ----- chapter7 ------ //
//import App from './chapter7/App';
// ----- chapter8 ------ //
import App from './chapter8_/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


