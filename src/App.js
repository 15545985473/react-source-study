import React from 'react';
import Extend from './Extend';

class App extends React.Component {
  state = {
    count: 0,
  };

  onClick = () => {
    debugger;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Hello React</p>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.onClick()}>Add</button>
      </div>
    );
  }
}

export default App;
