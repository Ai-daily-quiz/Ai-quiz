export const Textarea = ({ previewClipBoard }) => {
  return (
    <>
      <textarea
        name="clipboard"
        id="clipboard"
        placeholder="클립보드 미리보기..."
        value={previewClipBoard}
        style={{ fontSize: '10px', width: '500px', height: '300px' }}
      ></textarea>
    </>
  );
};
