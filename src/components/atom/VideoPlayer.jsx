import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onReady = (event) => {
    event.target.playVideo();
  };

  const videoWidth = Math.min(windowWidth, 786); // 최대 너비: 786px
  const videoHeight = (videoWidth / 786) * 444; // 가로 비율 유지

  useEffect(() => {
    // 창 크기가 변경될 때마다 windowWidth 상태를 업데이트합니다.
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const opts = {
    height: videoHeight.toString(),
    width: videoWidth.toString(),
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0,
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
      controls: 0,
      fs: 0,
      loop: 1,
      mute: 1,
    },
  };

  return (
    <div>
      <YouTube
        videoId="xXwyt8Ybqlw?si=Dtwqq_h6_xKB74aD" // YouTube 동영상 ID를 여기에 입력하세요.
        opts={opts}
        onReady={onReady}
      />
    </div>
  );
}
