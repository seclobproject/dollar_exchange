import React from "react";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OtpVerification from './pages/OtpVerification'
import NewPassword from './pages/NewPassword'
import ExchangePage from "./pages/ExchangePage";
import Details from "./pages/Details";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/details-form" element={<Details />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

      </Routes>
    </Router>

    
  );
}

export default App;
