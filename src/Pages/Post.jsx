import React from "react";
import styled from "styled-components";

const Post = () => {
  // const [textCnt, setTextCnt] = useState(0);
  // setTextCnt(0);
  return (
    <MainWrapper>
      <section>
        <TagH1>
          멋진 아이디어가 있으시군요!
          <br />
          어떤 프로젝트를 계획 중이신가요?
        </TagH1>
        <TagH3>나중에 변경 가능하니 너무 걱정마세요</TagH3>
        <div>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </section>

      <PostSection>
        <IntroH1>프로젝트를 간단하게 소개해주세요.</IntroH1>
        <IntroH3>나중에 수정 가능하니 편하게 적어주세요.</IntroH3>
        <IntroText placeholder="프로젝트 요약을 입력해주세요." />
        <IntroExplain>
          <p>최소 10자이상 입력해주세요.</p>
          <p>0/50</p>
        </IntroExplain>
        <PostHr />
        <PostBtn>제출</PostBtn>
      </PostSection>
    </MainWrapper>
  );
};

export default Post;

const MainWrapper = styled.main`
  max-width: 98.4rem;
  margin: 0 auto;
`;
// const Section = styled.section``;
const TagH1 = styled.h1`
  margin-top: 5.5rem;

  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: bold;
`;
const TagH3 = styled.h3`
  margin: 1.7rem 0 3.7rem;

  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
const PostSection = styled.section`
  position: relative;
`;
const IntroH1 = styled.h1`
  margin-top: 5.5rem;

  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: bold;
`;
const IntroH3 = styled.h3`
  margin: 1.7rem 0 3.5rem;

  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
const IntroText = styled.textarea`
  resize: none;
  width: 98.4rem;
  height: 10rem;

  padding: 1rem 1.6rem;
  border: 1px solid ${({ theme: { colors } }) => colors.red1};
  box-sizing: border-box;
  border-radius: 0.5rem;
`;
const IntroExplain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: ${({ theme: { colors } }) => colors.red1};
`;
const PostHr = styled.hr`
  margin: 3.5rem 0 4.2rem;
  border: 1px solid #efefef;
`;
const PostBtn = styled.button`
  position: absolute;
  right: 0;

  width: 8.3rem;
  height: 3.7rem;

  background-color: ${({ theme: { colors } }) => colors.buttonGray};
  /* 활성화 -> red3 */
  border-radius: 0.3rem;
`;

// hr 색깔 : #efefef

// input:focus, textarea:focus {
//     outline: none;
// }

// 1. textarea 2. 라디오 버튼 3. POST 서버
