import React from "react";
import styled from "styled-components";

const IntroText = () => {
  return <StyledIntroText placeholder="프로젝트 요약을 입력해주세요." />;
};

export default IntroText;

const StyledIntroText = styled.textarea`
  resize: none;
  width: 98.4rem;
  height: 10rem;

  padding: 1rem 1.6rem;
  border: 1px solid ${({ theme: { colors } }) => colors.red1};
  box-sizing: border-box;
  border-radius: 0.5rem;
`;
