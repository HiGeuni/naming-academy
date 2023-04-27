import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import "styles/global.css";
import Detail from "pages/Detail";
import Upload from "pages/Upload";
import LogIn from "pages/Login";
import SignUp from "pages/SignUp";
import { AuthProvider } from "hooks/useAuth";

import { useRoutes, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const PrivateRoutes = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/upload"
        element={isLoggedIn ? <Upload /> : <Navigate to="/login" replace />}
      />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PrivateRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
