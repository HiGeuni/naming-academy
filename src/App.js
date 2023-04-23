import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import "styles/global.css";
import Detail from "pages/Detail";
import Upload from "pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
