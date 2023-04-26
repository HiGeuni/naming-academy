import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import "styles/global.css";
import Detail from "pages/Detail";
import Upload from "pages/Upload";
import LogIn from "pages/Login";
import SignUp from "pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
