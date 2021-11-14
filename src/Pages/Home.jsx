import React from "react";
import styled from "styled-components";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      <Button>🔥 김 지 수 현 지 영 이 주 함 🔥</Button>
      <Footer />
    </>
  );
};

export default Home;

const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.red1};

  @media ${({ theme: { device } }) => device.tablet} {
    color: green;
  }
`;
