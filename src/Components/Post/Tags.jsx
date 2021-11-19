import React from "react";
import styled from "styled-components";

function Tags() {
  const tagsText = [
    "게임",
    "공연",
    "디자인",
    "만화",
    "예술",
    "음악",
    "출판",
    "테크",
    "공예",
    "사진",
    "영화·비디오",
    "푸드",
    "패션",
    "저널리즘",
  ];
  return (
    <div>
      {tagsText.map((text, idx) => (
        <React.Fragment key={`tag-${idx - 1}`}>
          <TagRadio type="radio" id={`tag_radio${idx - 1}`} name="tag" />
          <TagRadioLabel htmlFor={`tag_radio${idx - 1}`}>{text}</TagRadioLabel>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Tags;

const TagRadio = styled.input`
  /* visually hidden */
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  margin: 0;

  /* when checked, label css */
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

  @media ${({ theme: { device } }) => device.tablet} {
    height: 3.3rem;
    padding: 0 1.7rem;

    line-height: 3.3rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    height: 3.2rem;
    padding: 0 1.6rem;

    font-size: 1.2rem;
    line-height: 3.2rem;
  }
`;
