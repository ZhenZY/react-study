// 以大写字母开头都是组件
import React from 'react';

// 把组件挂载到 dom 节点上
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 因为 props 是只读属性，不能更改 date 的值，所以，只能通过 1s 渲染一次组件实现时钟
function tick() {
  ReactDOM.render(<App date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
