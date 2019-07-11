import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Welcome from './component/Welcome/Welcome';
// import StudenID from './component/StudenID/StudenID';
import MessageBoard from './component/MessageBoard/MessageBoard'; //留言板
// import Home from './component/Home/Home'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MessageBoard  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
