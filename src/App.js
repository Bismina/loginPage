import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPageComponent/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./components/HomePageComponent/HomePages";

function App() {
  return (
    <div className="mainDiv">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<HomePages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
