// import { Button } from './Button/Button';

export const Quiz = ({ selectedTopic }) => {
  const options = selectedTopic.answerOptions;
  return (
    <>
      <div className="bg-[#c7c7c7] mt-3 p-3 rounded-xl">
        {selectedTopic.category}
      </div>
      <div className="bg-[#c7c7c7] mt-3 p-3 rounded-xl">
        {selectedTopic.quizMultipleChoice}
      </div>
      <div className="grid grid-cols-4">
        {options.map((option, index) => (
          <div className="bg-[#c7c7c7] m-3 p-3 rounded-xl text-xs">
            {index + 1 + '. ' + option}
          </div>
        ))}
      </div>
      <div className="bg-[#c7c7c7]  p-3 rounded-xl">{selectedTopic.quizOX}</div>
      {/* <div>
        <Button onClick={handleClipBoard} text={'제출'} />
      </div> */}
    </>
  );
};
