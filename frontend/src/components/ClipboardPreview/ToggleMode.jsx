import { useState } from 'react';

export const ToggleMode = ({ setShowClipboard, setShowDropZone }) => {
  const [isClipboardMode, setIsClipboardMode] = useState(true);

  const handleToggle = () => {
    const newMode = !isClipboardMode;
    setIsClipboardMode(newMode);
    // console.log(isClipboardMode);
    if (newMode) {
      setShowDropZone(true);
      setShowClipboard(false);
    } else {
      setShowClipboard(true);
      setShowDropZone(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-20 h-10 mr-3 rounded-full transition-colors duration-300 focus:outline-none hover:outline-none
        ${isClipboardMode ? 'bg-blue-500' : 'bg-orange-400'}`}
    >
      {/* 텍스트 모드 (왼쪽) */}
      <div
        className={`absolute left-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 `}
      >
        <span className="text-white font-bold text-[15px] pl-0.5">Txt</span>
      </div>

      {/* 파일 모드 (오른쪽) */}
      <div
        className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          !isClipboardMode ? 'opacity-100' : 'opacity-40'
        }`}
      >
        <svg
          className="w-6 h-6 text-white mr-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* 슬라이딩 원 */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-1 h-8 w-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isClipboardMode ? 'translate-x-0' : 'translate-x-10'
        }`}
      />
    </button>
  );
};
