import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { bannerImage1, bannerImage2, prevIcon, nextIcon } from "../../styles/images";

function Banner() {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <StyledRoot>
      <SliderContainer ref={slideRef}>
        <img src={bannerImage1} alt="bannerImage1" />
        <img src={bannerImage2} alt="bannerImage2" />
      </SliderContainer>
      <Detail>
        <Content>
          <span>2022</span>
          <span>신년준비 위원회</span>
          <p>새로운 한 해를 준비해 보세요</p>
          <div>
            <button onClick={prevSlide}>
              <img src={prevIcon} alt="prevIcon" />
            </button>
            <button onClick={nextSlide}>
              <img src={nextIcon} alt="nextIcon" />
            </button>
          </div>
        </Content>
      </Detail>
    </StyledRoot>
  );
}

export default Banner;

const StyledRoot = styled.div`
  width: 98.4rem;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  @media ${({ theme: { device } }) => device.tablet} {
    width: 100%;
    flex-direction: column;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;
const SliderContainer = styled.div`
  display: flex;
  width: 64.7rem;
  height: 36.7rem;
  & > img {
    width: 100%;
  }
  @media ${({ theme: { device } }) => device.tablet} {
    width: 100%;
    height: 43.6rem;
    img {
      object-fit: cover;
    }
  }
  @media ${({ theme: { device } }) => device.mobile} {
    width: 100%;
    height: 20.5rem;
    img {
      object-fit: cover;
    }
  }
`;
const Detail = styled.div`
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  width: 33.7rem;
  height: 36.7rem;
  background-color: ${({ theme: { colors } }) => colors.titleBlack};
  @media ${({ theme: { device } }) => device.tablet} {
    width: 100%;
    height: 12rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    flex-direction: column;
    width: 100%;
    height: 12rem;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 27.7rem;
  line-height: 4rem;
  & > span {
    display: block;
  }
  & > p {
    font-family: "Pretendard-Regular";
    font-size: 1.6rem;
    font-weight: normal;
    margin-top: 1.5rem;
  }
  button {
    padding: 0;
    margin-right: 1rem;
  }
  @media ${({ theme: { device } }) => device.tablet} {
    font-size: 2rem;
    width: 90%;
    & > span {
      display: inline-block;
    }
    & > p {
      margin-top: 0;
    }
    & > div {
      display: flex;
      justify-content: flex-end;
    }
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  @media ${({ theme: { device } }) => device.mobile} {
    width: 90%;
    & > span {
      display: inline-block;
    }
    & > p {
      margin-top: 0;
      font-size: 1.1rem;
    }
    & > div {
      display: flex;
      justify-content: flex-end;
    }
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
