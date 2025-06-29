import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const myClipBoard = navigator.clipboard;
  const [previewClipBoard, setPreviewClipBoard] = useState(null);

  const handleClick = () => {
    console.log('clicked');
    const payload = {
      message: 'Hello from React!',
      count: count + 1,
      timestamp: new Date().toISOString(),
    };
    axios.post('http://localhost:4000/api/message', payload);
  };

  const handleClipClick = () => {
    myClipBoard.readText().then(clipText => {
      const slicedText = clipText.slice(-500, -60);
      console.log('클리보드 미리보기 텍스트: ' + slicedText);
      setPreviewClipBoard(slicedText);
    });
  };

  return (
    <>
      <div>
        <button onClick={handleClipClick}>클립보드 보기</button>
      </div>
      <div>
        <textarea
          name="clipboard"
          id="clipboard"
          placeholder="클립보드 100자 보기..."
          value={previewClipBoard}
          style={{ fontSize: '8px' }}
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
