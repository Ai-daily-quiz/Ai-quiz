import { useState } from 'react';
import axios from 'axios';
import './ClipboardPreview.css';

export const ClipboardPreview = () => {
  const [count, setCount] = useState(0);
  const [previewClipBoard, setPreviewClipBoard] = useState(null);
  const myClipBoard = navigator.clipboard;

  const handleClick = () => {
    // 제출버튼
  };

  const handlePreview = async () => {
    // 미리보기 버튼
    const clipText = await myClipBoard.readText();
    const slicedText = clipText.slice(-500);
    setPreviewClipBoard(slicedText);
    const payload = {
      clipboard: clipText,
      timestamp: new Date().toISOString(),
    };
    const response = await axios.post(
      'http://localhost:4000/api/message',
      payload
    );
    console.log('LLM 결과 주제 : ', response.data);
  };

  return (
    <>
      <div>
        <button onClick={handlePreview}>클립보드 미리보기</button>
      </div>
      <div>
        <textarea
          name="clipboard"
          id="clipboard"
          placeholder="클립보드 미리보기..."
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
};
