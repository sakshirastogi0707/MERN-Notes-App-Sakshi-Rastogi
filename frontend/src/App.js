import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./layouts/header/AppBar";
import Home from "./pages/home/Home";
import Notes from "./pages/notes/Notes";
import Login from "./pages/Login/login";
import Signup from "./pages/signup/Signup";
function App() {
  const [UserData, setUserData] = useState();
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
