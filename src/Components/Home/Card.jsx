import React from "react";
import styled from "styled-components";
import { ReactComponent as TimeIcon } from "../../assets/icons/TimeIcon.svg";
// import { ReactComponent as likeActiveIcon } from "../../assets/icons/likeActiveIcon.svg";
// import { ReactComponent as likeInactiveIcon } from "./../assets/icons/likeInactiveIcon.svg";

const StyledCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30.4rem;
  height: 43.2rem;

  margin: 3rem 1.8rem;
`;

const StyledTitle = styled.h2`
  font-family: "Pretendard-Bold";
  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 800;
  margin-top: 1.6rem;
`;

const StyledTag = styled.span`
  color: ${({ theme: { colors } }) => colors.gray2};
  font-size: 1.3rem;
  line-height: 2.6rem;
  font-family: "Pretendard-Regular";
  margin-top: 0.7rem;
  margin-bottom: 0.6rem;
`;

const StyledContent = styled.p`
  color: ${({ theme: { colors } }) => colors.contentBlack};
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  margin-bottom: 1.3rem;
  min-height: 4.8rem;
`;

const ThumbnailBox = styled.div`
  font-family: "Pretendard-Regular";
  width: 30.4rem;
  height: 22.8rem;
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: solid 1px ${({ theme: { colors } }) => colors.red1};
`;

const FundMoneyTag = styled.span`
  color: ${({ theme: { colors } }) => colors.contentBlack};
  font-size: 1.5rem;
  line-height: 2.6rem;
  font-family: "Pretendard-Regular";
  margin-right: 0.7rem;
  vertical-align: middle;
`;

const FundRasingRate = styled.span`
  color: ${({ theme: { colors } }) => colors.red1};
  font-size: 1.4rem;
  line-height: 2.6rem;
  font-family: "Pretendard-Regular";
  vertical-align: middle;
`;

const TimeTagBox = styled.div`
  & > svg {
    vertical-align: middle;
  }
`;

const TimeLimitTag = styled(FundRasingRate)`
  color: ${({ theme: { colors } }) => colors.gray2};
  vertical-align: middle;
  margin-left: 0.4rem;
`;

function Card({ data }) {
  // const [like, setLike] = useState(false);

  return (
    <StyledCardBox>
      <ThumbnailBox>
        <img src={data.image} />
      </ThumbnailBox>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledTag>{data.tags.join(" | ")}</StyledTag>
      <StyledContent>{data.content}</StyledContent>
      <CardFooter>
        <div>
          <FundMoneyTag>{data.price}원</FundMoneyTag>
          <FundRasingRate>{data.fundRate}%</FundRasingRate>
        </div>
        <TimeTagBox>
          <TimeIcon width="1.3rem" />
          <TimeLimitTag>{data.timeLimit}시간 남음</TimeLimitTag>
        </TimeTagBox>
      </CardFooter>
    </StyledCardBox>
  );
}

export default Card;
