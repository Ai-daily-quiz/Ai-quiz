import { useState } from 'react';
import { TopicCard } from './TopicCard/TopicCard';

export const TopicCards = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopic = topic => {
    console.log(`선택 주제 ${topic}`);
    setSelectedTopic(topic);
  };

  return (
    <>
      {/* <div className="topic-List"> */}
      <div className="font-medium mb-5">주제를 선택해주세요</div>
      <div className="grid grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div className="bg-cyan-500/50 rounded-lg shadow-lg p-5">
            <TopicCard key={index} topic={topic} onClick={handleTopic} />
          </div>
        ))}
      </div>
    </>
  );
};
