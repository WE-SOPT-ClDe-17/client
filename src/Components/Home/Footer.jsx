import React from "react";
import styled from "styled-components";
import { kakaoIcon, facebookIcon, twitterIcon, instaIcon, naverIcon, brunchIcon } from "../../styles/images";

const Footer = () => {
  return (
    <StyledRoot>
      <Main>
        <Content>
          <Info>
            <div>
              <p>텀블벅</p>
              <p>공지사항</p>
              <p>뉴스레터 구독</p>
              <p>채용</p>
              <p>제휴·협력</p>
            </div>
            <div>
              <p>이용안내</p>
              <p>헬프 센터</p>
              <p>창작자 가이드</p>
              <p>프로젝트 심사 기준</p>
              <p>수수료 정책</p>
            </div>
            <div>
              <p>정책</p>
              <p>이용약관</p>
              <p>개인정보 처리방침</p>
            </div>
            <div>
              <p>App</p>
              <p>안드로이드</p>
              <p>iOS</p>
            </div>
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
};

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

const Main = styled.div`
  font-size: 1.4rem;
  border-top: 1px solid ${({ theme: { colors } }) => colors.borderGray};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderGray};
  color: ${({ theme: { colors } }) => colors.gray1};
`;

const Content = styled.div`
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

const Info = styled.div`
  display: flex;
  flex: 1;
  font-family: "Pretendard-Regular";
  & > div {
    margin-right: 1.2rem;
  }
  & > div > p:first-child {
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

const Detail = styled.div`
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
