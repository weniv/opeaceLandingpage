import React, { useState } from 'react';
import styled from 'styled-components';

export default function FloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    // 버튼이 클릭될 때 수행할 작업 정의
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤 효과를 원하면 추가
    });
  };

  const copyToClipboard = (textToCopy) => {
    // 텍스트를 클립보드에 복사합니다.
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const copyCurrentPageURL = () => {
    const currentPageURL = window.location.href;
    copyToClipboard(currentPageURL);
    alert('링크가 복사되었습니다: ' + currentPageURL);
  };

  // 카카오톡 공유하기
  // Kakao.init('YOUR_APP_KEY'); // 여기에 앱 키를 입력하세요

  const shareToKakao = () => {
    // Kakao.Link.sendDefault({
    //   objectType: 'feed',
    //   content: {
    //     title: '타이틀',
    //     description: '설명',
    //     imageUrl: '이미지 URL',
    //     link: {
    //       mobileWebUrl: '모바일 웹 URL',
    //       webUrl: '웹 URL',
    //     },
    //   },
    // });
  };

  return (
    <Wrap>
      {isOpen ? (
        <div className="expand" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <div>
            <button className="linkBtn" type="button" onClick={copyCurrentPageURL}></button>
            <hr />
            <button className="kakaoBtn" type="button" onClick={shareToKakao}></button>
          </div>
        </div>
      ) : null}

      <button
        className="circle shareBtn"
        onClick={handleButtonClick}
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        type="button"
      ></button>
      <button className="circle topBtn" onClick={scrollToTop} type="button"></button>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 15.625rem;
  gap: 1.313rem;
  align-self: flex-end;

  div.expand {
    position: absolute;
    width: 3.75rem;
    height: 180px;
    background-color: var(--dark-color);
    bottom: 5.2rem;
    border-radius: 40px;

    div {
      display: flex;
      height: 5.063rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;
      padding: 0 0.688rem;

      hr {
        width: 100%;
        border: none;
        height: 2px;
        background-color: var(--light-color);
        border-radius: 1px; /* 둥근 끝 모양을 만들기 위한 반지름 값 */
      }
    }

    button {
      width: 2.344rem;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-color: transparent;
    }

    button.linkBtn {
      height: 1.688rem;
      background-image: url(${process.env.PUBLIC_URL + '/img/linkIcon.svg'});
    }

    button.kakaoBtn {
      height: 1.563rem;
      background-image: url(${process.env.PUBLIC_URL + '/img/kakaoIcon.svg'});
    }
  }

  button.circle {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: none;
    z-index: 999;
  }

  button.shareBtn {
    background-color: var(--main-color);
    background-image: url(${process.env.PUBLIC_URL + '/img/shareIcon.svg'});
  }

  button.topBtn {
    background-color: #d9d9d9;
    background-image: url(${process.env.PUBLIC_URL + '/img/topIcon.svg'});
  }
`;
