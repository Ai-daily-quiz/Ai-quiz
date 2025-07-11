import { useRef, useState } from 'react';
import './ClipboardPreview.css';
import { Button } from './Button/Button';
import { Textarea } from './Button/Textarea';

export const ClipboardPreview = ({ analyzeClipboard, onSubmit }) => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [File, setFile] = useState(null);
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
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setFileName(file.name);
      console.log(file.name);
    }
  };
  const handleDeleteFile = async () => {
    setFileName(null);
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  return (
    <>
      <div className="flex justify-between text-lg mb-4">
        <Button onClick={handlePreview} text={'클립보드 미리보기'} />
        <Button onClick={handlePDFupload} text={'📁 파일 선택'} />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className="text-right">{fileName}</div>
      <div className="bg_hover_text" onClick={handleDeleteFile}>
        삭제
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
