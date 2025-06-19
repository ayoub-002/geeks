import React, { Component } from 'react';

class LifecycleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
    };
  }

  // Part I: control if component should update
  shouldComponentUpdate() {
    return true; // try false to see it block updates
  }

  // Part II: update color after mounting
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  // Part III: track snapshot before update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
      </div>
    );
  }
}

export default LifecycleUpdate;
