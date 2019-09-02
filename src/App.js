import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}
// class App extends React.Component {

//   constructor(props) {

//     // 将 props 传递到父类的构造函数中
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

export default App;
