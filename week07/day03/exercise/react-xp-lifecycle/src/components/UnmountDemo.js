import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('Child component unmounted!');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

class UnmountDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h2>Unmounting Phase Example</h2>
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete Child</button>
      </div>
    );
  }
}

export default UnmountDemo;
