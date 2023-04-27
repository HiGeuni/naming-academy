import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인한 사용자 정보를 가져오는 비동기 함수
    async function fetchUser() {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        if (data.response === 200) {
          setUser(data);
          isLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
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
