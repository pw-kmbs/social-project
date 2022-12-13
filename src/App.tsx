import React from 'react';
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/routes/Home"
import { Signup } from "./components/routes/Signup"
import { Login } from "./components/routes/Login"
import { Navbar } from "./components/Navbar"
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </>
  );
}

export default App;
