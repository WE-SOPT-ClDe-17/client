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
          <p>2022</p>
          <p>신년준비 위원회</p>
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
`;
const SliderContainer = styled.div`
  display: flex;
  width: 64.7rem;
  height: 36.7rem;
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
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 27.7rem;
  line-height: 4rem;
  & > p:nth-of-type(3) {
    font-family: "Pretendard-Regular";
    font-size: 1.6rem;
    font-weight: normal;
    margin-top: 1.5rem;
  }
  button {
    padding: 0;
    margin-right: 1rem;
  }
`;
