import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";
import OtpVerification from './pages/OtpVerification';
import NewPassword from './pages/NewPassword';
import ExchangePage from "./pages/ExchangePage";
import Details from "./pages/Details";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import Header from "./components/homePage/Header";
import ErrorPage from './pages/ErrorPage'
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const noHeaderPaths = ["/login", "/signup", "/forgot-password", "/otp-verification", "/new-password"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
