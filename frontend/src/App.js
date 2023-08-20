import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homeage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homeage}></Route>
        <Route path="/chats" Component={ChatPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
