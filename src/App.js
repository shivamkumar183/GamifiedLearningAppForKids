import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GamePage from "./pages/GamePage";
import AgeSelection from "./pages/agesection";
import "./App.css";
import Profile1 from "./pages/Profile1"; 
import Profile2 from "./pages/Profile2";
import Profile3 from "./pages/Profile3";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:5000/api/auth/verify", { headers: { Authorization: token } })
        .then(() => setIsAuthenticated(true))
        .catch(() => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        });
    }
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/profile1" : "/login"} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game/:id" element={isAuthenticated ? <GamePage /> : <Navigate to="/login" />} />
        <Route path="/agesection" element={isAuthenticated ? <AgeSelection /> : <Navigate to="/login" />} />
        <Route path="/profile1" element={isAuthenticated ? <Profile1 /> : <Navigate to="/login" />} />
        <Route path="/profile2" element={isAuthenticated ? <Profile2 /> : <Navigate to="/login" />} />
        <Route path="/profile3" element={isAuthenticated ? <Profile3 /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
