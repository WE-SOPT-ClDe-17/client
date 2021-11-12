import GlobalStyles from "./Components/Common/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* remove */}
      <Button>🔥 김 지 수 현 지 영 이 주 함 🔥</Button>
      {/* remove */}
    </div>
  );
}

// remove
const Button = (props) => {
  return <button>{props.children}</button>;
};
// remove

export default App;
