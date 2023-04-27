import { axiosInstance } from "api";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인한 사용자 정보를 가져오는 비동기 함수
    const { data } = axiosInstance.request({
      method: "GET",
      url: "/users/mypage",
    });
    console.log(data);
  }, []);

  const value = {
    user,
    isLoggedIn: isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
