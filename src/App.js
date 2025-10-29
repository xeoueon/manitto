import app from "./firebase/firebaseConfig";
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Group from "./pages/Group";
import Manitto from "./pages/Manitto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/group" element={<Group />} />
        <Route path="/manitto" element={<Manitto />} />
      </Routes>
    </Router>
  );
};

export default App;
