import React from 'react';
import Child from './Child';

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
        <Child>
          <p>child</p>
          {() => <p>child1</p>}
        </Child>
      </div>
    );
  }
}

export default App;
