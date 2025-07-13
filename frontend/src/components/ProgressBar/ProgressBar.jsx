import { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './ProgressBar.css';

export default function TimeBar() {
  const [progress, setProgress] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setProgress(100);
    const intervalId = setInterval(() => {
      setSec(prevSec => {
        const nextSec = prevSec + 1;
        if (nextSec === 10) {
          clearInterval(intervalId);
        }
        return nextSec;
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex items-center mt-2 ml-5">
        <img
          src="/assets/clock2.png"
          className="w-9 h-9"
          alt="clockImageError"
        />
        <ProgressBar
          completed={progress} // 0 → 100으로 변경됨
          maxCompleted={100} // 최대값 100
          height="10px"
          width="550px"
          borderRadius="50px"
          isLabelVisible={false}
          baseBgColor="#dcdcdc"
          bgColor="linear-gradient(to right, #ffc700, red)"
          transitionDuration="10s" // 10초 동안 천천히 채워짐
          transitionTimingFunction="linear" // 일정한 속도로
          animateOnRender={true}
        />
        <div className="ml-2">{sec}</div>
      </div>
    </>
  );
}
