import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const checkCount = () => {
    if (count === 0) return;
    else setCount(count - 1);
  };

  const buttonDisplay = count <= 0 ? true : false;
  return (
    <div className='App'>
      <div>
        <div className='card'>
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>{count}</p>
          <button onClick={() => checkCount(count)} disabled={buttonDisplay}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
