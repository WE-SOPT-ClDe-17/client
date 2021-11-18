import React from "react";
import styled from "styled-components";
import { kakaoIcon, facebookIcon, twitterIcon, instaIcon, naverIcon, brunchIcon } from "../../styles/images";

function Footer() {
  return (
    <StyledRoot>
      <Main>
        <Content>
          <Info>
            <ul>
              <li>텀블벅</li>
              <li>공지사항</li>
              <li>뉴스레터 구독</li>
              <li>채용</li>
              <li>제휴·협력</li>
            </ul>
            <ul>
              <li>헬프 센터</li>
              <li>창작자 가이드</li>
              <li>프로젝트 심사 기준</li>
              <li>수수료 정책</li>
            </ul>
            <ul>
              <li>정책</li>
              <li>이용약관</li>
              <li>개인정보 처리방침</li>
            </ul>
            <ul>
              <li>App</li>
              <li>안드로이드</li>
              <li>iOS</li>
            </ul>
          </Info>
          <Contact>
            <p>고객지원</p>
            <p>평일 10:00 ~ 17:00 (12:00 ~ 14:00 제외)</p>
            <button>텀블벅에 문의</button>
          </Contact>
        </Content>
      </Main>
      <Detail>
        <p>© 2021 Tumblbug Inc.</p>
        <div>
          <img src={kakaoIcon} alt="kakaoIcon" />
          <img src={facebookIcon} alt="facebookIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={instaIcon} alt="instaIcon" />
          <img src={naverIcon} alt="naverIcon" />
          <img src={kakaoIcon} alt="kakaoIcon" />
          <img src={brunchIcon} alt="brunchIcon" />
        </div>
      </Detail>
    </StyledRoot>
  );
}

export default Footer;

const StyledRoot = styled.footer`
  width: 120rem;
  margin: 0 auto;
  @media ${({ theme: { device } }) => device.tablet} {
    width: 76.8rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    display: none;
  }
`;

const Main = styled.section`
  font-size: 1.4rem;
  border-top: 1px solid ${({ theme: { colors } }) => colors.borderGray};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderGray};
  color: ${({ theme: { colors } }) => colors.gray1};
`;

const Content = styled.section`
  width: 98.4rem;
  height: 18.4rem;
  margin: 0 auto;
  display: flex;
  padding-top: 2rem;
  line-height: 3rem;
  @media ${({ theme: { device } }) => device.tablet} {
    width: 100%;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    display: none;
  }
`;

const Info = styled.section`
  display: flex;
  flex: 1;
  font-family: "Pretendard-Regular";
  & > ul {
    margin-right: 1.2rem;
  }
  & > ul > li:first-child {
    font-family: "Pretendard-Medium";
    font-size: 1.6rem;
    color: ${({ theme: { colors } }) => colors.contentBlack};
    font-weight: bold;
  }
`;
const Contact = styled.div`
  font-family: "Pretendard-Regular";
  & > p:first-child {
    font-family: "Pretendard-Medium";
    font-size: 1.6rem;
    color: ${({ theme: { colors } }) => colors.contentBlack};
    font-weight: bold;
  }
  & > button {
    color: ${({ theme: { colors } }) => colors.gray1};
    width: 16.5rem;
    height: 3.4rem;
    border: 1px solid ${({ theme: { colors } }) => colors.buttonGray};
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const Detail = styled.section`
  display: flex;
  justify-content: space-between;
  width: 98.4rem;
  margin: 2.5rem auto 0;
  color: ${({ theme: { colors } }) => colors.gray1};
  & > div > img {
    margin-left: 0.9rem;
  }
  @media ${({ theme: { device } }) => device.tablet} {
    width: 100%;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    display: none;
  }
`;
