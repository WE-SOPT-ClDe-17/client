import React, { useState } from "react";
import styled from "styled-components";

const IntroText = () => {
  const MAX_NUM = 50;
  const [textCnt, setTextCnt] = useState(0);
  const [isOver10, setIsOver] = useState(false);

  function handleChange(e) {
    const target = e.target;
    const length = e.target.value.length;

    if (length > MAX_NUM) {
      target.value = target.value.substring(0, MAX_NUM);
      setTextCnt(MAX_NUM);
      return;
    } else if (length >= 10) setIsOver(true);
    else setIsOver(false);

    setTextCnt(length);
  }

  return (
    <>
      <StyledIntroText onChange={handleChange} isOver={isOver10} placeholder="프로젝트 요약을 입력해주세요." />
      <StyledIntroExplain isOver={isOver10}>
        {!isOver10 && <p>최소 10자이상 입력해주세요.</p>}
        <StyledCnt isOver={isOver10}>
          {textCnt}/{MAX_NUM}
        </StyledCnt>
      </StyledIntroExplain>
    </>
  );
};

export default IntroText;

const StyledIntroText = styled.textarea`
  resize: none;
  width: 98.4rem;
  height: 10rem;

  padding: 1rem 1.6rem;
  border: 1px solid ${({ theme: { colors }, isOver }) => (isOver ? colors.titleBlack : colors.red1)};
  box-sizing: border-box;
  border-radius: 0.5rem;

  outline: none;
  &:hover {
    outline: none;
  }
`;
const StyledIntroExplain = styled.div`
  display: flex;
  justify-content: ${({ isOver }) => (isOver ? "flex-end" : "space-between")};
  margin-top: 0.2rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: ${({ theme: { colors } }) => colors.red1};
`;
const StyledCnt = styled.p`
  color: ${({ theme: { colors }, isOver }) => (isOver ? colors.lightGray : colors.red1)};
`;
