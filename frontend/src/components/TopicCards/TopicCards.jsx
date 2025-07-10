import { useEffect } from 'react';
import { TopicCard } from './TopicCard/TopicCard';

export const TopicCards = ({ topics, onTopicSelect, setIsPreview }) => {
  useEffect(() => {
    setIsPreview(false);
  }, []);
  const handleTopic = (category, topic) => {
    onTopicSelect(category, topic);
  };

  return (
    <>
      <div className="font-medium mb-5 text-center">주제를 선택해주세요</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {topics.map(topic => (
            <div className="bg-cyan-500/70 rounded-lg shadow-lg p-3 w-[150px] h-[150px] flex items-center justify-center">
              <TopicCard
                key={topic.topic_id}
                topic={topic}
                onClick={() => handleTopic(topic.category, topic)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
