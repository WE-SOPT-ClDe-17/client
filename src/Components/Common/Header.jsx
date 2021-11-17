import React from "react";
import styled from "styled-components";
import { LogoIcon, searchIcon, profileIcon, hamburgerIcon, plusIcon } from "../../styles/images";

const Header = () => {
  return (
    <StyledRoot>
      <SContent>
        <SLeft>
          <button>프로젝트 둘러보기</button>
          <button>프로젝트 올리기</button>
          <img src={hamburgerIcon} alt="hamburgerIcon" />
          <img src={plusIcon} alt="plusIcon" />
        </SLeft>
        <SMiddle>
          <img src={LogoIcon} alt="LogoIcon" />
        </SMiddle>
        <SRight>
          <img src={searchIcon} alt="searchIcon" />
          <p>이채연</p>
          <img src={profileIcon} alt="profileIcon" />
        </SRight>
      </SContent>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.nav`
  width: 120rem;
  height: 6.6rem;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  font-size: 1.4rem;
  @media ${({ theme: { device } }) => device.tablet} {
    width: 100%;
    height: 6rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    width: 100%;
    height: 5rem;
  }
`;

const SContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98.4rem;
  height: 6.6rem;
  margin: 0 auto;
  position: relative;
  @media ${({ theme: { device } }) => device.tablet} {
    width: 90%;
    height: 6rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    width: 90%;
    height: 5rem;
  }
`;

const SLeft = styled.div`
  display: flex;
  align-items: center;
  & > img {
    visibility: hidden;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 2.2rem;
  }
  @media ${({ theme: { device } }) => device.tablet} {
    & > img {
      visibility: visible;
    }
    & > button {
      display: none;
    }
  }
  @media ${({ theme: { device } }) => device.mobile} {
    & > img {
      visibility: visible;
    }
    & > button {
      display: none;
    }
  }
`;

const SMiddle = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 9.3rem;
    height: 2.6rem;
    position: absolute;
    left: calc(50% - 4.65rem);
  }
`;

const SRight = styled.div`
  display: flex;
  align-items: center;
  & > img:first-child {
    width: 2rem;
    height: 2rem;
    margin-right: 3.2rem;
  }
  & > img:last-child {
    width: 3.6rem;
    height: 3.6rem;
    margin-left: 0.9rem;
  }
  @media ${({ theme: { device } }) => device.tablet} {
    & > p {
      display: none;
    }
  }
  @media ${({ theme: { device } }) => device.mobile} {
    & > p {
      display: none;
    }
  }
`;
