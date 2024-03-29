// 以大写字母开头都是组件
import React from 'react';

// 把组件挂载到 dom 节点上
import ReactDOM from 'react-dom';
import './index.css';
import List from './component/List';
import * as serviceWorker from './serviceWorker';

const numbers = [1, 2, 3, 4];
// const listItems = numbers.map((number) => <li>{number}</li>);
// 挂载（mount）：组件第一次被渲染到 DOM 中
// unmount: 卸载
// ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));
ReactDOM.render(<List numbers={numbers} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
