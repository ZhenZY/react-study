import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // 如果没有这句话，handleClick 里如果有用 this, 会undefined
    // js 方法如果没有用 ()，如 onClick={this.handleClick}
    // 要绑定 this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  deleteRow() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br/>
        <button onClick={this.deleteRow.bind(this)}>
          Delete Row
        </button>
      </div>
    )
  }
}

export default Toggle;