import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as TimeIcon } from "../../assets/icons/TimeIcon.svg";
import { ReactComponent as LikeActive } from "../../assets/icons/likeActiveIcon.svg";
import { ReactComponent as LikeInActive } from "../../assets/icons/likeInactiveIcon.svg";
import { ReactComponent as _PickIcon } from "../../assets/icons/icn_pick.svg";
import { serverClient } from "../../Lib/api.js";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Card({ cardData }) {
  const [like, setLike] = useState(false);
  let restTime = 0;
  if (cardData.ttl >= 24) {
    restTime = `${Math.floor(cardData.ttl / 24)}일`;
  } else {
    restTime = `${cardData.ttl}시간`;
  }
  const handleLike = async () => {
    try {
      const temp = await serverClient.post("my-like-post/like", { postId: cardData.postId, userId: 1 });
      if (temp.data.status === 200) {
        setLike(!like);
      }
    } catch (e) {
      return null;
    }
  };

  return (
    <StyledCardBox>
      <PickIcon />
      <ThumbnailBox>
        <img src={cardData.thumbnail} />
        <LikeButton onClick={handleLike}>{like ? <LikeInActive /> : <LikeActive />}</LikeButton>
      </ThumbnailBox>
      <StyledTitle>{cardData.title}</StyledTitle>
      <StyledTag>
        {cardData.tag} | {cardData.userName}
      </StyledTag>
      <StyledContent>{cardData.description}</StyledContent>
      <CardFooter>
        <div>
          <FundMoneyTag>{numberWithCommas(cardData.collectedMoney)}원</FundMoneyTag>
          <FundRasingRate>{cardData.achievedPercentage}%</FundRasingRate>
        </div>
        <TimeTagBox>
          <TimeIcon width="1.3rem" />
          <TimeLimitTag>{restTime} 남음</TimeLimitTag>
        </TimeTagBox>
      </CardFooter>
    </StyledCardBox>
  );
}

export default Card;

const StyledCardBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 30.4rem;
  height: 43.2rem;
  margin: 3rem 1.8rem;
  position: relative;

  @media ${({ theme: { device } }) => device.mobile} {
    margin: 4rem 2.8rem;
  }
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
  position: relative;
`;

const LikeButton = styled.button`
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 1.4rem;
  right: 1.1rem;
`;

const PickIcon = styled(_PickIcon)`
  position: absolute;
  left: -5px;
  top: 7px;
  z-index: 2;
`;

const CardFooter = styled.footer`
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
