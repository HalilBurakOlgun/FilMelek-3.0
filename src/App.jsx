import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  return (
    <BrowserRouter>
      <AuthHandler />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return null;
};

export default App;