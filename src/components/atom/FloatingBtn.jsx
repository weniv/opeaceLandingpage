import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// const url = window.location.href;
const url = 'https://weniv.github.io/opeaceXweniv-workation/';
const kakaoKey = process.env.REACT_APP_KAKAO_KEY;
const Kakao = window.Kakao;
Kakao.init(kakaoKey);

// console.log('kakaoKey', !!kakaoKey);
console.log('Kakao', Kakao.Share);

export default function FloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 텍스트 클립보드에 복사
  const copyToClipboard = (textToCopy) => {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const copyCurrentPageURL = () => {
    copyToClipboard(url);
    alert('링크가 복사되었습니다!');
  };

  const handleKakaoShare = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'O-PEACE X Weniv',
        description: '오피스제주와 위니브가 함께 Workation + Education 뜻의 워케이션 프로그램을 제공합니다.',
        imageUrl:
          'https://user-images.githubusercontent.com/94890646/268587488-46351367-3956-4b26-88ee-03adf6c70703.png',
        link: {
          mobileWebUrl: 'https://weniv.github.io/opeaceXweniv-workation/',
          webUrl: 'https://weniv.github.io/opeaceXweniv-workation/',
        },
      },
    });
  };

  return (
    <Wrap>
      {isOpen ? (
        <div className="expand" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <div>
            <button className="linkBtn" type="button" onClick={copyCurrentPageURL}></button>
            <hr />
            <button className="kakaoBtn" type="button" onClick={handleKakaoShare}></button>
          </div>
        </div>
      ) : null}

      <button
        className="circle shareBtn"
        onClick={() => setIsOpen(!isOpen)}
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
  bottom: 3vh;
  gap: 1.313rem;
  align-self: flex-end;
  z-index: 999;

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
      min-height: 1.688rem;
      background-image: url(${process.env.PUBLIC_URL + '/img/linkIcon.svg'});
      background-size: 70%;
    }

    button.kakaoBtn {
      min-height: 1.563rem;
      background-image: url(${process.env.PUBLIC_URL + '/img/kakaoIcon.svg'});
      background-size: 90%;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
