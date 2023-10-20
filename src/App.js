import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <h1>welcome</h1>
      <div className="app">
        <SignUp />
        <Login />
      </div>
    </>
  );
}

export default App;
