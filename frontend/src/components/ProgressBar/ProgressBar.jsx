import { useEffect, useRef, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './ProgressBar.css';

export default function TimeBar({ isSubmitted }) {
  const [progress, setProgress] = useState(0);
  const [sec, setSec] = useState(0);
  const intervalRef = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (isSubmitted) return;
    setProgress(100);
    startRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setSec(prevSec => {
        const nextSec = prevSec + 1;
        if (nextSec === 10) {
          clearInterval(intervalRef.current);
          //함수 호출 실패
        }
        return nextSec;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isSubmitted]);

  useEffect(() => {
    if (isSubmitted) {
      clearInterval(intervalRef.current);
      setProgress((Date.now() - startRef.current) / 100);
    }
  }, [isSubmitted]);

  return (
    <>
      <div className="flex items-center mt-2 ml-5">
        <img
          src="/assets/clock2.png"
          className="w-9 h-9 "
          alt="clockImageError"
        />
        <ProgressBar
          key={isSubmitted ? 'stopped' : 'running'}
          className="ml-1"
          completed={progress} // 0 → 100으로 변경됨
          maxCompleted={100} // 최대값 100
          height="10px"
          width="550px"
          borderRadius="50px"
          isLabelVisible={false}
          baseBgColor="#dcdcdc"
          bgColor="linear-gradient(to right, #ffc700, red)"
          transitionDuration={isSubmitted ? '0s' : '10s'} // 10초 동안 천천히 채워짐
          transitionTimingFunction="linear" // 일정한 속도로
          animateOnRender={false}
        />
        <div className="ml-2 text-lg">{sec}</div>
      </div>
    </>
  );
}
