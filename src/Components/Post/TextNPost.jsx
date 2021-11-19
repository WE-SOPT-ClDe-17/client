import React, { useState } from "react";
import styled from "styled-components";

const TextNPost = () => {
  const MAX_NUM = 50;
  const [textCnt, setTextCnt] = useState(0);
  const [isOver10, setIsOver10] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const length = e.target.value.length;

    if (length > MAX_NUM) {
      target.value = target.value.substring(0, MAX_NUM);
      setTextCnt(MAX_NUM);
      return;
    } else if (length >= 10) setIsOver10(true);
    else setIsOver10(false);

    setTextCnt(length);
  };

  return (
    <>
      <StyledIntroText onChange={handleChange} isOver={isOver10} placeholder="프로젝트 요약을 입력해주세요." />
      <StyledIntroExplain isOver={isOver10}>
        {!isOver10 && <p>최소 10자이상 입력해주세요.</p>}
        <StyledCnt isOver={isOver10}>
          {textCnt}/{MAX_NUM}
        </StyledCnt>
      </StyledIntroExplain>
      <StyledPostHr />
      <StyledPostBtn isOver={isOver10}>제출</StyledPostBtn>
    </>
  );
};

export default TextNPost;

const StyledIntroText = styled.textarea`
  resize: none;
  width: 100%;
  height: 10rem;

  padding: 1rem 1.6rem;
  border: 1px solid ${({ theme: { colors }, isOver }) => (isOver ? colors.titleBlack : colors.red1)};
  box-sizing: border-box;
  border-radius: 0.5rem;

  outline: none;
  &:hover {
    outline: none;
  }

  font-size: 1.4rem;
  @media ${({ theme: { device } }) => device.mobile} {
    font-size: 1.2rem;
  }
`;
const StyledIntroExplain = styled.div`
  display: flex;
  justify-content: ${({ isOver }) => (isOver ? "flex-end" : "space-between")};
  margin-top: 0.2rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: ${({ theme: { colors } }) => colors.red1};

  @media ${({ theme: { device } }) => device.tablet} {
    font-size: 1.1rem;
  }
`;
const StyledCnt = styled.p`
  color: ${({ theme: { colors }, isOver }) => (isOver ? colors.lightGray : colors.red1)};
`;
const StyledPostHr = styled.hr`
  margin: 3.5rem 0 4.2rem;
  border: 1px solid #efefef;

  @media ${({ theme: { device } }) => device.tablet} {
    margin: 2.7rem 0 1.5rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    margin: 2.6rem 0 1.4rem;
  }
`;
const StyledPostBtn = styled.button`
  position: absolute;
  right: 0;

  width: 8.3rem;
  height: 3.7rem;

  border-radius: 0.3rem;
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors }, isOver }) => (isOver ? colors.red3 : colors.buttonGray)};
  ${({ isOver }) => !isOver && "&:hover {cursor: default;}"}

  @media ${({ theme: { device } }) => device.tablet} {
    width: 8.1rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    width: 7.7rem;
    height: 3.6rem;

    font-size: 1.2rem;
  }
`;
