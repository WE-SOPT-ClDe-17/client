import React from "react";
import styled from "styled-components";
import Footer from "../Components/Home/Footer";
import Cards from "../Components/Home/Cards";
import Banner from "../Components/Home/Banner";

const StyledRecommendBox = styled.div`
  padding: 2.25rem;
`;

const StyledTitle = styled.h2`
  font-family: "Pretendard";
  font-size: 2rem;
  line-height: 1.625rem;
  font-weight: 700;
`;

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <StyledRecommendBox>
        <StyledTitle>2022 신년준비 위원회</StyledTitle>
      </StyledRecommendBox>
      <Cards />
      <Footer />
    </>
  );
};

export default Home;

// const Button = styled.button`
//   color: ${({ theme: { colors } }) => colors.red1};
//   font-size: 3rem;

//   @media ${({ theme: { device } }) => device.tablet} {
//     color: green;
//   }
// `;
