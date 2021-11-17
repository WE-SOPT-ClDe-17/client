import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
//json불러오기 -> .map하기

const StyledRecommendTag = styled.h2`
  font-family: "Pretendard";
  font-size: 2rem;
  line-height: 1.625rem;
  font-weight: 700;
  padding: 1.6rem 0 0 0;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function Cards() {
  //데이터 받아오기!:axios, async/await쓰장
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const { data } = await axios.get("http://localhost:4000/data", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`data`, data);
    setPostData(data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  //map으로 배열안에있는 데이터들 반복문 돌려서 렌더링
  return (
    <>
      <StyledRecommendTag>2022 신년준비 위원회</StyledRecommendTag>
      <StyledCardsContainer>
        {postData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </StyledCardsContainer>
    </>
  );
}

export default Cards;
