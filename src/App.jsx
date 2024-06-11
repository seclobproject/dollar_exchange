import React from "react";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp";
import ForgotPasswordPage from "./pages/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    
    </Routes>
  </Router>
  );
}

export default App;
