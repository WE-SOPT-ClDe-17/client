import React from "react";
import Footer from "../Components/Home/Footer";
import Cards from "../Components/Home/Cards";

const Home = () => {
  return (
    <>
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
