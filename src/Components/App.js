import React, { useState } from 'react';
import '../Styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className={`counter ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>
        {count}
      </h1>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
