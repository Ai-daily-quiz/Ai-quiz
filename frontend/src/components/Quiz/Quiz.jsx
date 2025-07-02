// import { Button } from './Button/Button';

export const Quiz = ({ selectedTopic }) => {
  return (
    <>
      <div>{selectedTopic.categoy}</div>
      <div>{selectedTopic.quizMultipleChoice}</div>
      <div>{selectedTopic.answerOptions}</div>
      <div>{selectedTopic.quizOX}</div>
      {/* <div>
        <Button onClick={handleClipBoard} text={'제출'} />
      </div> */}
    </>
  );
};
