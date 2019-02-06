import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';//.. when u wanna exit folder and same 1 dot when at folder level

import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
