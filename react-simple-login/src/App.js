import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import MainHeader from "./components/MainHeader/MainHeader";
import LoginForm from "./components/Login/LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      console.log("1");
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <LoginForm onLogin={loginHandler} />}
        {isLoggedIn && <HomePage onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
};

export default App;
