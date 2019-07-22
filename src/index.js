import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Welcome from './component/Welcome/Welcome';
// import StudenID from './component/StudenID/StudenID';
// import MessageBoard from './component/MessageBoard/MessageBoard'; //留言板
// import Clock from './component/Clock/Clock'; //時鐘
// import Calculator from './component/Calculator/Calculator'; //溫度計
// import FilterableProductTable from  './component/FilterableProductTable/FilterableProductTable'; //清單

import Todolist from './component/Todolist/Todolist'; 

// import Home from './component/Home/Home'; 
import * as serviceWorker from './serviceWorker';
//  <FilterableProductTable  products={PRODUCTS} 
// const PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//   ];

ReactDOM.render( <Todolist/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
