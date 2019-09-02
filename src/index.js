// 以大写字母开头都是组件
import React from 'react';

// 把组件挂载到 dom 节点上
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 接收输入的数据，并返回需要展示的内容
ReactDOM.render(<App name="Listen" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
