import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
//exercise 2 and 3
// import LifecycleUpdate from './components/LifecycleUpdate';
// import UnmountDemo from './components/UnmountDemo';


class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div>
      <h2>Simulation 1: Two counters wrapped in one ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 2: Each counter wrapped separately</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 3: No ErrorBoundary</h2>
      <BuggyCounter />
    </div>
    // exercise 2
      // <h2>Lifecycle Update Example</h2>
      // <LifecycleUpdate />
    // exercise 3
      // <h2>Exercise 3: Lifecycle - Unmounting Phase</h2>
      // <UnmountDemo />

  );
}

export default App;
