import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Change</button>
      <p>
        {count}parent:{Math.random()}
      </p>
    </div>
  );
}

export default App;
