import { useEffect } from 'react';
import { TopicCard } from './TopicCard/TopicCard';

export const TopicCards = ({
  topics,
  onTopicSelect,
  setIsPreview,
  quizMode,
}) => {
  useEffect(() => {
    setIsPreview(false);
  }, []);
  const handleTopic = (category, topic) => {
    onTopicSelect(category, topic);
  };

  const getTopicCardColor = quizMode => {
    if (quizMode === 'incorrect') {
      return 'red';
    } else {
      return 'cyan';
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {topics.map(topic => (
            <div
              key={topic.topic_id}
              onClick={() => handleTopic(topic.category, topic)}
              //bg-color 주제 카드 컬러
              className={`bg-${getTopicCardColor(quizMode)}-500/70 rounded-lg shadow-lg p-3 w-[150px] h-[150px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-cyan-500/90 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transform`}
            >
              <TopicCard topic={topic} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
