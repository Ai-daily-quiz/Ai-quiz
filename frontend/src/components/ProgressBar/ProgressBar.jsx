import { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './ProgressBar.css';

export default function TimeBar() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const setInterval_id = setTimeout(() => {
      setSec(sec + 1);
    }, 1000);
    if (sec === 10) {
      clearInterval(setInterval_id);
      // 실패 처리 함수 호출
    }
  });

  return (
    // <Row>
    //   {/*<Clock />*/}
    //   {/* <SvgIcon src={ClockSrc} size="100px" /> */}
    //   <SizedBox width={'50px'} />
    //   <ProgressBar
    //     completed={String(sec)}
    //     bgColor="var(--yellow)"
    //     width="500px"
    //     height="40px"
    //   />
    //   {sec}
    // </Row>
    <>
      <div className="flex items-center mt-2 ml-5">
        <img
          src="/assets/clock2.png"
          className="w-9 h-9"
          alt="clockImageError"
        />
        <ProgressBar
          className="gradient-progress-bar"
          completed={sec} // 진행률
          maxCompleted={10}
          height="15px" // 세로
          width="550px" // 가로
          borderRadius="50px" // 테두리를 얼마나 둥글게 할지
          isLabelVisible={false} // 프로그레스 바 안에 라벨 표시를 할지 말지
          baseBgColor="#dcdcdc" // 바 컬러
          bgColor="linear-gradient(to right, #ffc700, red)" //  진행바 컬러
          // #ffc700
          // #fbbc04
        />

        <div className="ml-2">{sec}</div>
      </div>
    </>
  );
}
