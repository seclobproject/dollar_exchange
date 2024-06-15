import React from "react";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OtpVerification from './pages/OtpVerification'
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />

      </Routes>
    </Router>

    
  );
}

export default App;
