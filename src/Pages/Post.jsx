import React from "react";
import styled from "styled-components";
import Tags from "../Components/Post/Tags";
import TextNPost from "../Components/Post/TextNPost";

const Fonts = styled.h3`
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 3rem;
`;

const Post = () => {
  return (
    <StyledMain>
      <section>
        <StyledTagH1>
          멋진 아이디어가 있으시군요!
          <br />
          어떤 프로젝트를 계획 중이신가요?
        </StyledTagH1>
        <StyledTagH3>나중에 변경 가능하니 너무 걱정마세요</StyledTagH3>
        <Tags />
      </section>

      <StyeldSection>
        <StyledIntroH1>프로젝트를 간단하게 소개해주세요.</StyledIntroH1>
        <StyledIntroH3>나중에 수정 가능하니 편하게 적어주세요.</StyledIntroH3>
        <TextNPost />
      </StyeldSection>
    </StyledMain>
  );
};

export default Post;

const StyledMain = styled.main`
  /* 1044 - 30*4 = 984 */
  max-width: 104.4rem;
  margin: 0 auto;
  padding: 0 3rem;
  @media ${({ theme: { device } }) => device.mobile} {
    padding: 0 2.8rem;
  }
`;
// const Section = styled.section``;
const StyledTagH1 = styled.h1`
  margin-top: 5.5rem;

  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: bold;

  @media ${({ theme: { device } }) => device.tablet} {
    margin-top: 9rem;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    margin-top: 9.1rem;
  }
`;
const StyledTagH3 = styled.h3`
  margin: 1.7rem 0 3.7rem;

  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 1.4rem;
  line-height: 2.4rem;

  @media ${({ theme: { device } }) => device.tablet} {
    margin: 0.9rem 0 2.9rem;

    font-size: 1.3rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    margin: 0.7rem 0 2.7rem;
  }
`;
const StyeldSection = styled.section`
  position: relative;
`;
const StyledIntroH1 = styled.h1`
  margin-top: 8.9rem;

  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: bold;

  @media ${({ theme: { device } }) => device.tablet} {
    margin-top: 5.9rem;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    margin-top: 5.6rem;
  }
`;
const StyledIntroH3 = styled.h3`
  margin: 1.7rem 0 3.5rem;

  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 1.4rem;
  line-height: 2.4rem;

  @media ${({ theme: { device } }) => device.tablet} {
    margin: 0.8rem 0 2.9rem;

    font-size: 1.3rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    margin: 0.7rem 0 2.8rem;
  }
`;
