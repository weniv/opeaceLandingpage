import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// const url = window.location.href;
const url = 'https://weniv.github.io/opeaceXweniv-workation/';
const kakaoKey = process.env.REACT_APP_KAKAO_KEY;
const Kakao = window.Kakao;

export default function FloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(kakaoKey);
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

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
      objectType: 'text',
      text: '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
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
  top: 42.938rem;
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
