import React from "react";
import Footer from "../Components/Home/Footer";
import Cards from "../Components/Home/Cards";
import Banner from "../Components/Home/Banner";

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
