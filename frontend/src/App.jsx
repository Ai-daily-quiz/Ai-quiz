import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log('clicked');
    const payload = {
      message: 'Hello from React!',
      count: count + 1,
      timestamp: new Date().toISOString(),
    };
    axios.post('http://localhost:4000/api/message', payload);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>클립보드 보기</button>
      </div>
      <div>
        <textarea
          name="clipboard"
          id="clipboard"
          placeholder="클립보드 100자 보기..."
        ></textarea>
      </div>
      <div>
        <button onClick={handleClick}>제출</button>
      </div>

      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
