import { Button } from './Button';

export const Preview = ({
  preview,
  showClipboard,
  onClickPreview,
  setShowClipboard,
}) => {
  return (
    <div className="w-[500px] h-[300px] bg-[#fafafa] rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm"></div>
        <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm"></div>
        <div className="w-3 h-3 rounded-full bg-[#28c940] shadow-sm"></div>
        <span className="text-gray-600 text-xs ml-3 font-medium">
          Clipboard Preview
        </span>
      </div>
      <div className="p-4 overflow-auto h-[calc(100%-40px)] bg-white">
        <pre className="text-gray-700 text-sm font-['SF Mono','Monaco','monospace']">
          {
            preview
            // || (
            //   <span className="text-gray-400">텍스트를 붙여넣으세요...</span>
            // )
          }
          {!preview && showClipboard && (
            <Button onClick={onClickPreview} text={'클립보드 미리보기'} />
          )}
        </pre>
      </div>
    </div>
  );
};
