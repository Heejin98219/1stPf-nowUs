import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./assets/components/Components";
import Login from "./assets/components/Login";
import FindId from "./assets/components/FindId";
import Join from "./assets/components/Join";
import FindPw from "./assets/components/FindPw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/join" element={<Join />} />
        <Route path="/findPw" element={<FindPw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
