import React, { useState } from 'react';
import styled from 'styled-components';

export default function FloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    // 버튼이 클릭될 때 수행할 작업 정의
  };

  return (
    <Wrap>
      <div className="expand">
        <div>
          <button className="linkBtn"></button>
          <hr />
          <button className="kakaoBtn"></button>
        </div>
      </div>
      <button className="circle shareBtn" onClick={handleButtonClick}></button>
      <button className="circle topBtn" onClick={handleButtonClick}></button>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 250px;
  gap: 21px;
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
