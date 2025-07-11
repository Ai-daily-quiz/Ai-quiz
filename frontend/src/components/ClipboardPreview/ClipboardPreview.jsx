import { useRef, useState } from 'react';
import './ClipboardPreview.css';
import { Button } from './Button/Button';
import { Textarea } from './Button/Textarea';

export const ClipboardPreview = ({
  analyzeClipboard,
  onSubmit,
  onGetQuizzes,
  isPendingQuestion,
}) => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);
  const myClipBoard = navigator.clipboard;

  const handleClipBoard = () => {
    onSubmit();
  };

  const handlePreview = async () => {
    // 미리보기 버튼
    const clipText = await myClipBoard.readText();
    const slicedText = clipText.slice(-500);
    setPreview(slicedText);
    analyzeClipboard(clipText);
  };
  const handlePDFupload = async () => {
    inputRef.current.click();
  };

  return (
    <>
      <div>
        <Button onClick={handlePreview} text={'클립보드 미리보기'} />
        <Button onClick={handlePDFupload} text={'파일 업로드'} />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          // onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      <div>
        <Textarea preview={preview} />
      </div>
      <div>
        <Button onClick={handleClipBoard} text={'새 퀴즈 생성하기'} />
      </div>
    </>
  );
};
