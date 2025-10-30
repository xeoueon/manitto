import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import app from "./firebase/firebaseConfig"; // ✅ Firebase 설정 불러오기

import Home from "./pages/Home";
import Login from "./pages/Login";
import Group from "./pages/Group";
import Manitto from "./pages/Manitto";

// ✅ Firebase 연결 테스트
const db = getFirestore(app);
console.log("✅ Firebase 연결 성공! DB 객체:", db);

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