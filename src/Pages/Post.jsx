import React from "react";
import styled from "styled-components";
import Tags from "../Components/Post/Tags";
import IntroText from "../Components/Post/IntroText";

const Fonts = styled.h3`
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 3rem;
`;

const Post = () => {
  // const [textCnt, setTextCnt] = useState(0);
  // setTextCnt(0);
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
        <IntroText />
        <StyledIntroExplain>
          <p>최소 10자이상 입력해주세요.</p>
          <p>0/50</p>
        </StyledIntroExplain>
        <StyledPostHr />
        <StyledPostBtn>제출</StyledPostBtn>
      </StyeldSection>
    </StyledMain>
  );
};

export default Post;

const StyledMain = styled.main`
  max-width: 98.4rem;
  margin: 0 auto;
`;
// const Section = styled.section``;
const StyledTagH1 = styled.h1`
  margin-top: 5.5rem;

  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: bold;
`;
const StyledTagH3 = styled.h3`
  margin: 1.7rem 0 3.7rem;

  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
const StyeldSection = styled.section`
  position: relative;
`;
const StyledIntroH1 = styled.h1`
  margin-top: 5.5rem;

  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: bold;
`;
const StyledIntroH3 = styled.h3`
  margin: 1.7rem 0 3.5rem;

  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
const StyledIntroExplain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: ${({ theme: { colors } }) => colors.red1};
`;
const StyledPostHr = styled.hr`
  margin: 3.5rem 0 4.2rem;
  border: 1px solid #efefef;
`;
const StyledPostBtn = styled.button`
  position: absolute;
  right: 0;

  width: 8.3rem;
  height: 3.7rem;

  background-color: ${({ theme: { colors } }) => colors.buttonGray};
  /* 활성화 -> red3 */
  border-radius: 0.3rem;
`;

// 1. textarea 2. 라디오 버튼 3. POST 서버
