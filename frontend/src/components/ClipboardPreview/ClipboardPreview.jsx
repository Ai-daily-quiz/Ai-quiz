import { useState } from 'react';
import './ClipboardPreview.css';
import { Button } from './Button/Button';
import { Textarea } from './Button/Textarea';

export const ClipboardPreview = ({ onAnalyze }) => {
  const [preview, setPreview] = useState(null);
  const myClipBoard = navigator.clipboard;

  const handleClick = () => {
    // 제출버튼
    // setClipboardPreview(false)
    // showTopicCards(True)
    console.log('제출 버튼 클릭!');
  };

  const handlePreview = async () => {
    // 미리보기 버튼
    const clipText = await myClipBoard.readText();
    const slicedText = clipText.slice(-500);
    setPreview(slicedText);
    onAnalyze(clipText);
  };

  return (
    <>
      <div>
        <Button onClick={handlePreview} text={'클립보드 미리보기'} />
      </div>
      <div></div>
      <Textarea preview={preview} />
      <div>
        <Button onClick={handleClick} text={'제출'} />
      </div>
    </>
  );
};
