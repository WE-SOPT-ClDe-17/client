import React from "react";
import styled from "styled-components";
import Footer from "../Components/Home/Footer";

const Text = styled.h1`
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  color: blue;
`;

const Medium = styled.h1`
  font-family: "Pretendard-Medium";
  font-size: 2rem;
`;

const Bold = styled.h1`
  font-family: "Pretendard";
  font-size: 2rem;
  font-weight: 700;
`;

const Home = () => {
  return (
    <>
      <Button>🔥 김 지 수 현 지 영 이 주 함 🔥</Button>
      <Text>볼드체</Text>
      <Medium>프리텐다드 미디엄</Medium>
      <Bold>🔥 김지수 현지영 이주함 🔥 볼드</Bold>
      <Footer />
    </>
  );
};

export default Home;

const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.red1};
  font-size: 3rem;

  @media ${({ theme: { device } }) => device.tablet} {
    color: green;
  }
`;
