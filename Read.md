# client
🔥 김 지 수 현 지 영 이 주 함 🔥

## 🌈 클라이언트 협업 방법

### 1. github commit message 컨벤션

- Feat: 기능추가
- Refactor: 코드 수정 - 기능 변경
- Style: 코드 수정 - 기능 변경x
- Fix: 오류 수정
- Error:  에러
- Etc: 기타

### 2. 코드 컨벤션

- 일반변수는 명사로, 메소드나 함수는 동사로 (클린코드✔️)
- 의미 없는 변수x
- 배열은List
- Camel Case
- styled
- function
- props를 받아오는 방식 : `{변수1, 변수2, 변수3}`

! **[처음에] git pull 하기**
! **yarn lint 하고 commit 하기**
-> 자동 실행이긴 한데, 그래도 ~
! **폰트 크기 10px 기준(웹)**
-> 13px 이면, 1.3rem

! **ThemeProvider 사용법 (구성 방법은 `초기세팅자료` 참고)**

```jsx
// components/common/theme.js 에서

const theme = {
  colors,
  deviceSizes,
  device,
};

// 으로 export 되어 있고, App.jsx 에서 다 import 하고 감싸주었으므로

const Button = styled.button`
  color: ${(props) => props.theme.colors.red1};

  @media ${(props) => props.theme.device.tablet} {
    color: blue;
  }
`;

// 따로 import 할 필요 없이 위 코드처럼 사용할 수 있음!

const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.red1};

  @media ${({ theme: { device } }) => device.tablet} {
    color: green;
  }
`;

// 분해할당해서 사용하는 게 좀 더 깔끔할 듯?!!!

// **만약 theme이나 global 하게 추가할 것이 있다면 - 소통하고 main에 추가하기!**
```

### 2+. 마지막 확인할 게 뭐가 있을까?

- 네이밍 컨벤션 /  const → function / 시멘틱 태그 / 효율적인 css - 코드리뷰
- svg 폴더 경로
- 폰트설정
- 서버랑은 ?

### 3. 폴더 구조

- 폴더 구조
    
    ```
    📦.git
     ┗ ...
    📦.husky
     ┗ 📜pre-commit
    📦.vscode
     ┗ 📜settings.json
    📦public
     ┗ 📜index.html
    📦src
     ┣ 📂assets
     ┃ ┣ 📂images
     ┃ ┃ ┗ 📜~.png
     ┃ ┗ 📂icons
     ┃ ┃ ┗ 📜~.svg
     ┣ 📂Components
     ┃ ┣ 📂common
     ┃ ┃ ┣ 📜GlobalStyles.jsx
     ┃ ┃ ┣ 📜Header.jsx
     ┃ ┃ ┣ 📜Router.jsx
     ┃ ┃ ┗ 📜theme.js
     ┃ ┣ 📂Post
     ┃ ┃ ┣ 📜Tags.jsx
     ┃ ┃ ┗ 📜TextNPost.jsx
     ┃ ┣ 📂Home
     ┃ ┃ ┣ 📜Banner.jsx
     ┃ ┃ ┣ 📜Card.jsx
     ┃ ┃ ┣ 📜Cards.jsx
     ┃ ┃ ┗ 📜Footer.jsx
     ┣ 📂Lib
     ┃ ┣ 📂Constant
     ┃ ┃ ┗ 📜color.js
     ┃ ┗ 📜api.js
     ┣ 📂Pages
     ┃ ┣ 📜Home.jsx
     ┃ ┗ 📜Post.jsx
     ┣ 📂styles
     ┃ ┣ 📂fonts
     ┃ ┃ ┣ 📜font.css
     ┃ ┃ ┣ 📜font.js
     ┃ ┃ ┗ 📜~.woff
     ┣ 📜App.jsx
     ┗ 📜index.jsx
    📜.eslintrc.js
    📜.gitignore
    📜.prettierrc
    📜package.json
    📜README.md
    📜yarn.lock
    ```
  
### 4. 브랜치 전략(ex. git flow)

기능별로 브랜치

`feat/`

### 5. 기술스택 (library ...)

react-router-dom

styled-components
