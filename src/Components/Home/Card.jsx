import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Pretendard";
  font-size: 2rem;
  line-height: 1.625rem;
  font-weight: 700;
  line-height: 3.8rem;
`;

const StyledPostBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 320px;
  height: 400px;
`;

const StyledContent = styled.p`
  color: grey;
  font-size: 1.4rem;
`;

function Card({ data }) {
  return (
    <StyledPostBox>
      <img src={data.image} />
      <StyledTitle>{data.title}</StyledTitle>
      <StyledContent>{data.content}</StyledContent>
      <span>{data.tags}</span>
      <span>{data.price}원</span>
      {/* prce ,구분 필요 */}
      <span>{data.fundRate}%</span>
      <span>{data.timeLimit}hour</span>
    </StyledPostBox>
  );
}

export default Card;
