import "./App.css";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import ScanPage from "./components/ScanPage";
import HomePage from "./components/HomePage";
import CodePage from "./components/CodePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/scan" element={<ScanPage />}></Route>
        <Route path="/code" element={<CodePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
