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

        <div
          onClick={handlePDFupload}
          style={{
            display: 'flex',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>

          <span className="ml-1">파일선택</span>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end">
          <span className="text-right underline">{fileName}</span>

          {File && (
            <button className="p-0 ml-1.5" onClick={handleDeleteFile}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
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
