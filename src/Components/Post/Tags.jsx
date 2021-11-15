import React from "react";
import styled from "styled-components";

const Tags = () => {
  return (
    <div>
      <TagRadio type="radio" id="tag_radio1" name="tag" />
      <TagRadioLabel htmlFor="tag_radio1">게임</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio2" name="tag" />
      <TagRadioLabel htmlFor="tag_radio2">공연</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio3" name="tag" />
      <TagRadioLabel htmlFor="tag_radio3">디자인</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio4" name="tag" />
      <TagRadioLabel htmlFor="tag_radio4">만화</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio5" name="tag" />
      <TagRadioLabel htmlFor="tag_radio5">예술</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio6" name="tag" />
      <TagRadioLabel htmlFor="tag_radio6">음악</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio7" name="tag" />
      <TagRadioLabel htmlFor="tag_radio7">출판</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio8" name="tag" />
      <TagRadioLabel htmlFor="tag_radio8">테크</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio9" name="tag" />
      <TagRadioLabel htmlFor="tag_radio9">공예</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio10" name="tag" />
      <TagRadioLabel htmlFor="tag_radio10">사진</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio11" name="tag" />
      <TagRadioLabel htmlFor="tag_radio11">영화·비디오</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio12" name="tag" />
      <TagRadioLabel htmlFor="tag_radio12">푸드</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio13" name="tag" />
      <TagRadioLabel htmlFor="tag_radio13">패션</TagRadioLabel>
      <TagRadio type="radio" id="tag_radio14" name="tag" />
      <TagRadioLabel htmlFor="tag_radio14">저널리즘</TagRadioLabel>
    </div>
  );
};

export default Tags;

const TagRadio = styled.input`
  /* visually hidden */
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  margin: 0;
  &:checked + label {
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.red3};
    border-color: ${({ theme: { colors } }) => colors.red3};
  }
`;
const TagRadioLabel = styled.label`
  display: inline-block;
  height: 3.5rem;
  margin: 0 1rem 1rem 0;
  padding: 0 2.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.hrGray};
  border-radius: 1.5rem;

  font-size: 1.4rem;
  line-height: 3.5rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
