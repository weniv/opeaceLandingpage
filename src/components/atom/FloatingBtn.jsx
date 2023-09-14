import React from 'react';
import styled from 'styled-components';

export default function FloatingBtn() {
  const handleButtonClick = () => {
    // 버튼이 클릭될 때 수행할 작업 정의
  };

  return (
    <Wrap>
      <button className="shareBtn" onClick={handleButtonClick}>
        버튼 내용
      </button>
      <button className="topBtn" onClick={handleButtonClick}>
        버튼 내용
      </button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 250px;
  gap: 21px;
  align-self: flex-end;

  background-color: pink;
  button.shareBtn {
    /* right: 0; */
    background-color: #007bff; /* 배경색 설정 */
    color: #fff; /* 글자색 설정 */
    padding: 10px 20px; /* 패딩 설정 */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    /* 필요한 다른 스타일링 추가 */
  }
`;
