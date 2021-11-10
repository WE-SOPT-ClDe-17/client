Written by 쏘

# 1. 설치 먼저 하실게요~

**잠깐! eslint와 prettier 깔려있는지 화긴~**
**Ctrl+Shift+P -> format document... -> default -> Prettier**

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks lint-staged husky
```

- 오류나세요?
  ```bash
  error @eslint/eslintrc@1.0.4: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.16.1"error Found incompatible module.
  ```
  ```bash
  error @eslint/eslintrc@1.0.4: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "12.20.0"error Found incompatible module.info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
  ```
  node -v 했을 때 버전이 16이상이어야함
  업그레이드 하시구 그래도 안되면 다시 까세여

```bash
yarn add axios react-router-dom styled-components
```

eslint와 prettier의 차이는?

eslint는 안되는 것을 검사! "세미콜론 없자나! 사용되지 않는 변수 있자나!"

prettier는 더 똑똑한 애! "이렇게 하면 더 예뻐~"

prettier가 먼저 바꿀 수 있는 만큼 바꿔주면 eslint에서 태클을 거는 방식이라서 아무 생각없이 막 갈기면 둘이 충돌할 수 있음!

그래서 파일을 따로 만들게여~

# 2. package.json

package.json 파일의 scripts에 아래 내용을 추가합니다.

```json
"lint": "npm run lint-eslint && npm run lint-prettier",
"lint-eslint": "eslint --ignore-path .gitignore src/**/*{js,jsx} --fix",
"lint-prettier": "prettier --write \"src/**/*.(js|jsx)\""
```

igonre에 있는 내용들은 제외하고 src 내에 있는 js와 jsx 파일들에 대해서 eslint를 적용하겠다.

—fix의 의미는 가능한 만큼 알아서 해주겠다.

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "npm run lint-eslint && npm run lint-prettier",
    "lint-eslint": "eslint --ignore-path .gitignore src/**/*{js,jsx} --fix",
    "lint-prettier": "prettier --write \"src/**/*.(js|jsx)\""
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  },
  "devDependencies": {
    "eslint": "^8.2.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.27.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "husky": "^7.0.4",
    "lint-staged": "^11.2.6",
    "prettier": "^2.4.1"
  }
}
```

- 버전 Downgrade 필요

  `yarn add -D eslint@^7.11.0 eslint-plugin-prettier@^3.4.0`

- Husky / lint-staged ?

  커밋하기 전 자동검사 (안 원하면 yarn remove ~)

  `"prepare": "husky install"`

  -> `$ yarn prepare`

  -> `$ npx husky add .husky/pre-commit "yarn lint"`

# 3. .eslintrc.js

```bash
yarn eslint --init
```

이거는 npm으로 깔아버리니까 충돌 방지를 위해서 벤-

```jsx
// eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
```

- 여기까지 했을 때 오류들 톺아보기
  ```
  'React' must be in scope when using JSX eslint(react/react-in-jsx-scope)
  ```
  과거에는 `import React from 'react'`가 필수였기 때문에 생긴 에러
  이제는 없어도 무방하기에 .eslintrc.js의 rules에 아래 내용을 추가하여 이 에러는 꺼버리겠습니다!
  참고로 경고 문구의 마지막 eslint()의 내용들은 rules들의 이름이라고 생각하면 됩니다.
  ```jsx
  "react/react-in-jsx-scope": "off"
  ```
  이건 어디에 추가하는거더라..~,~ 무슨 오류뜨면 하랬는데 이건 나중에 녹화보고 고쳐두겠삼
  ```json
  settings: {
      react: {
        version: "detect",
      },
  },
  ```

`yarn lint` 했을 때 나오는 오류들을 하나 둘 해결해보세용

위에서 말한 것처럼 가장 마지막의 내용들이 rules의 이름입니다.

```jsx
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
  },
};
```

- extends에 아래 내용으로 변경하여 prettier와 eslint의 충돌을 방지합니다.
  ```jsx
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  ```
  이거 넣었더니 혹시 eslintrc.js에 빨간 밑줄이 뜨셨나요? Delete CR 어쩌구,,
  이건 윈도우에서만 생기는 에러인데, 맥과 윈도우가 엔터를 표현하는 방식이 달라서 생기는 것입니다. 깃헙 푸시할 때 CRLF 워닝이 뜨는 것도 같은 원리입니다.
  .eslintrc.js의 rules에 아래 내용을 추가하고 저장하면 해결됩니다!
  ```jsx
  "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
  ```

# 4. .prettierrc

파일을 만들고 아래 내용을 넣으세요

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 120,
  "trailingComma": "all",
  "bracketSameLine": true
}
```

# 5. .vscode

폴더의 빈공간에서 오른쪽 클릭 후 폴더 설정(Open folder settings)를 클릭해서 `format on save`를 검색해서 체크해주세요

그럼 .vscode폴더가 생기고 그 아래 settings.json에 해당 내용이 담깁니다.

협업자들이 클론 받아 사용할 때도 같은 설정을 유지할 수 있게 됩니다.

```json
{
  "editor.formatOnSave": true
}
```

# 7. 이것듀

ctrl/cmd + shift + p

format document **...**

configure default formatter

perttier를 default로 적용

# 8. 푸시 전에 yarn lint 갈기기
