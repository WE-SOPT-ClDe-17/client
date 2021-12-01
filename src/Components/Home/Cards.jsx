import React, { useEffect, useState } from "react";
import { serverClient } from "../../Lib/api.js";
import Card from "./Card";
import styled from "styled-components";
//json불러오기 -> .map하기

function Cards() {
  //데이터 받아오기!:axios, async/await쓰장
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const { data } = await serverClient.get("/post");
    const cardData = data.data;
    console.log(`cardData`, cardData);
    setPostData(cardData);
  };
  useEffect(() => {
    getPostData();
  }, []);

  //map으로 배열안에있는 데이터들 반복문 돌려서 렌더링
  return (
    <>
      <RecommendTagBox>
        <StyledRecommendTag>2022 신년준비 위원회</StyledRecommendTag>
      </RecommendTagBox>
      <StyledCardsContainer>
        {postData.map((cardData) => (
          <Card key={cardData.postId} cardData={cardData} />
        ))}
      </StyledCardsContainer>
    </>
  );
}

export default Cards;

const RecommendTagBox = styled.div`
  max-width: 101rem;
  margin: auto;
  margin-top: 3.6rem;
  /* 
  @media ${({ theme: { device } }) => device.tablet} {
    max-width: 68rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    max-width: 36rem;
  } */
`;

const StyledRecommendTag = styled.div`
  font-family: "Pretendard";
  font-size: 2rem;
  line-height: 1.625rem;
  font-weight: 700;
  padding: 1.6rem 0 0 1.8rem;
  width: 100%;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 102rem;
  margin: auto;
  justify-content: flex-start;
`;
