import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "./atom/index";
import Layout from "./Layout";
import { qnaList } from "../text";

export default function QnA() {
  const [curId, setCurId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const activeId = (id) => {
    setCurId(id);
  };

  const listOpen = (id) => {
    setIsOpen(id === curId ? !isOpen : true);
  };

  return (
    <Layout>
      <Title>Q&A</Title>
      <MenuWrap>
        {qnaList.map((el) => (
          <div key={el.id}>
            <div
              className="question"
              onClick={() => {
                activeId(el.id);
                listOpen(el.id);
              }}
            >
              <p>{el.question}</p>
              <img
                src={process.env.PUBLIC_URL + `/img/downarrow.svg`}
                className={el.id === curId && isOpen ? "open" : ""}
              />
            </div>
            {el.id === curId && isOpen ? (
              <div
                className={el.id === curId && isOpen ? "open answer" : "answer"}
              >
                <p>{el.answer}</p>
              </div>
            ) : null}
          </div>
        ))}
      </MenuWrap>
    </Layout>
  );
}

const MenuWrap = styled.div`
  width: 49.125rem;
  height: auto;
  margin: 0 auto;
  border-bottom: 1px solid var(--dark-color);

  div.question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    font-size: 1rem;
    padding: 0 10px;
    background-color: var(--light-color);
    border-top: 1px solid var(--dark-color);
    cursor: pointer;

    img {
      width: 1.063rem;
      transition: transform 0.3s ease-in-out;
    }

    img.open {
      transform: rotate(180deg);
    }
  }

  div.answer {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    /* height: 0;
    transition: height 0.3s ease-in-out; */
  }

  div.answer.open {
    height: auto; /* 내용의 높이에 따라 자동으로 조절됩니다. */
    padding: 15px;
    /* height: 47px; */
    font-size: 0.875rem;
    border-top: 1px solid #d9d9d9;
    background-color: var(--light-color);
    transition: height 0.3s ease-in-out;
    /* padding: 10px;
    height: 47px;
    font-size: 0.875rem;
    border-top: 1px solid #d9d9d9;
    background-color: var(--light-color);
    transition: height 0.3s ease-in-out; */
  }
`;
