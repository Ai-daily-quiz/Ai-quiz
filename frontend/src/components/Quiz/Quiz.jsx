// import { Button } from './Button/Button';

import { useState } from 'react';

export const Quiz = ({ selectedTopic }) => {
  const correctAnswer = selectedTopic.questions[0].correctAnswer; // 객관식 답
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log('정답 : ', correctAnswer);

  const handleAnswer = index => {
    setIsSubmitted(true);
    setSelectedAnswer(index);
    console.log('내 선택 : ', index + 1);
    if (index === selectedAnswer) {
      console.log('정답');
    } else {
      console.log('오답');
    }
  };
  return (
    <>
      <div className="bg-[#c7c7c7] mt-3 p-3 rounded-xl">
        {selectedTopic.category}
      </div>

      <div className="bg-[#c7c7c7] mt-3 p-3 rounded-xl">
        {selectedTopic.questions[0].question}
      </div>

      <div className="grid grid-cols-4">
        {!isSubmitted &&
          selectedTopic.questions[0].options.map((option, index) => (
            <div
              className="bg-transparent border border-indigo-500 m-3 p-3 rounded-xl text-xs "
              onClick={() => handleAnswer(index)}
            >
              {index + 1 + '. ' + option}
            </div>
          ))}

        {/* 제출 후 */}
        {isSubmitted &&
          selectedTopic.questions[0].options.map((option, index) => (
            <div
              className="bg-[#c7c7c7] border border-green-500 m-3 p-3 rounded-xl text-xs "
              onClick={() => handleAnswer(index)}
            >
              {index + 1 + '. ' + option}
            </div>
          ))}
      </div>
      {isSubmitted && (
        <div className="text-green">
          {selectedAnswer === correctAnswer ? (
            <div className="bg-[#32a852] text-white">정답입니다 ✅</div>
          ) : (
            <div className="bg-[#e67e8e] text-white">오답입니다 ❌</div>
          )}
        </div>
      )}
    </>
  );
};
