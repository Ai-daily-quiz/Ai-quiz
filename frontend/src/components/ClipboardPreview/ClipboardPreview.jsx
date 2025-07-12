import { useRef, useState } from 'react';
import './ClipboardPreview.css';
import { Button } from './Button/Button';
import { Preview } from './Button/Preview';
import { MyDropzone } from './DND';
import { ToggleMode } from './ToggleMode';

export const ClipboardPreview = ({
  analyzeClipboard,
  onSubmit,
  setUploadFile,
  onSendFile,
}) => {
  const [fileName, setFileName] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isFile, setIsFile] = useState(null); /// 파일선택시 플래그
  const [showClipboard, setShowClipboard] = useState(true); // 클립보드 플래그
  const [showDropZone, setShowDropZone] = useState(null); // 드랍존 플래그
  const inputRef = useRef(null);

  const myClipBoard = navigator.clipboard;

  const handleShowClipboard = () => {
    setShowClipboard(false);
    setShowDropZone(true);
  };
  const handleShowDropZone = () => {
    setShowDropZone(false);
    setShowClipboard(true);
  };
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

  const handleFileSelect = () => {
    inputRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setIsFile(true);
      setFileName(file.name);
      setUploadFile(file);
    }
  };
  const handleDeleteFile = async () => {
    setFileName(null);
    setIsFile(false);
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  return (
    <>
      <div className="text-left mb-2 flex items-center">
        <ToggleMode
          setShowClipboard={setShowClipboard}
          setShowDropZone={setShowDropZone}
        />
        {/* {showClipboard && (
          <Button onClick={handlePreview} text={'클립보드 미리보기'} />
        )} */}
      </div>

      <div className="text-right">
        <div className="flex items-center justify-end">
          <span className="text-right underline">{fileName}</span>
          {isFile && (
            <button className="p-0 ml-1.5" onClick={handleDeleteFile}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        {showClipboard && (
          <Preview
            preview={preview}
            showClipboard={showClipboard}
            onClickPreview={handlePreview}
            setShowClipboard={setShowClipboard}
          />
        )}
        {showDropZone && (
          <MyDropzone setUploadFile={setUploadFile} onSendFile={onSendFile} />
        )}
      </div>
      <div>
        <Button onClick={handleClipBoard} text={'새 퀴즈 생성하기'} />
        {/* <Button onClick={onSendFile} text={'파일 보내기'} /> */}
      </div>
    </>
  );
};
