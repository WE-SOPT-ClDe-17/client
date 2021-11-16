import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`

    @font-face {
      font-family: 'Pretendard-Regular';
      font-display: fallback;
      src: url("./Pretendard-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Pretendard-Medium";
      font-display: fallback;
      src: url("./Pretendard-Medium.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "Pretendard-Bold";
      font-display: fallback;
      src: url("./Pretendard-Bold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
`;

export default GlobalFonts;
