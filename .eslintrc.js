module.exports = {
  env: {
    browser: true,
    node: true, //nodeJS API로 module을 export 하는데, 가능하다고 선언해줌
    //es2021 최신버전 X
  },
  extends: [
    //어떤 룰셋을 쓸지
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", //룰셋에 prettier를 추가하여 prettier 영억이라면 eslint가 무시함
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020, //13 최신버전 X
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", //error - warn - off 에러 출력
    "react/prop-types": "off",
    "react/display-name": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }], //Window(CR/LF)-Mac(LF)이 엔터를 표현하는 방식이 달라 호환성 문제가 생김
  },
};
