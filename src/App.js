import React from 'react';
import './App.css';

/**
 * 定义组件:
 * 1. js 函数 
 *    function fn() {return <div></div>}
 * 2. es6 class 定义
 *    class fn extends React.Componnet {
 *      render() { return <div></div> }
 *    }
 */

// 正常返回应该是字符串类，使用 jsx 语法可直接返回标签
// jsx: 标签语法，js 的语法扩展
// props: 把 <App /> 中所有属性转换为对象保存，通过 props. 来访问属性
// props （只读）
function App(props) {
  return (
    <div>{props.name}</div>
  );
}

export default App;
