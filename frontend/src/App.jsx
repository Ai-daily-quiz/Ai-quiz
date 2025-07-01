import { ClipboardPreview } from './components/ClipboardPreview/ClipboardPreview';
import { TopicCards } from './components/TopicCards/TopicCards';
import axios from 'axios';

function App() {
  /*
2. 제출버튼 클릭
  로딩 인디케이터
  LLM 결과 카드로 보여주기
*/

  const analyzeClipboard = async clipText => {
    const payload = {
      clipboard: clipText,
      timestamp: new Date().toISOString(),
    };
    const response = await axios.post(
      'http://localhost:4000/api/message',
      payload
    );
    console.log('LLM 결과 주제 : ', response.data);
  };

  return (
    <>
      <ClipboardPreview onAnalyze={analyzeClipboard} />
      {/* <TopicCards /> */}
    </>
  );
}

export default App;
