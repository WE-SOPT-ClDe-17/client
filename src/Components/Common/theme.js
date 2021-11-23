// 디자이너들이 지정한 색목록
const colors = {
  titleBlack: "#000000",
  contentBlack: "#3D3D3D",
  gray1: "#6D6D6D",
  gray2: "#9E9E9E",
  borderGray: "#E6E6E6",
  lightGray: "#707070",
  buttonGray: "#E5E5E5",
  contentGray: "#C4C4C4",
  heartGray: "#727474",
  hrGray: "#EFEFEF",
  red1: "#FF5757",
  red2: "#FF7878",
  red3: "#E66D5B",
  white: "#ffffff",
};

// 반응형에 사용될 사이즈 정의
const deviceSizes = {
  mobile: "414px",
  tablet: "768px",
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

// export를 위한 정의
const theme = {
  colors,
  deviceSizes,
  device,
};

export default theme;
