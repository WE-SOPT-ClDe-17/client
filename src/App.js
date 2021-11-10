import "./App.css";

function App() {
  return (
    <div className="App">
      <Button>sfad</Button>
    </div>
  );
}

const Button = (props) => {
  return <button>{props.children}</button>;
};

export default App;
