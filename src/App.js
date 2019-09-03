import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {

    // 将 props 传递到父类的构造函数中
    super(props);
    this.state = {
      date: new Date()
    };
  }
  
  /**
   * 组件已被渲染到 dom 后运行
   */
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
