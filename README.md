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
