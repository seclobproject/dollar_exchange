// App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUp';
import Login from './pages/Login';
import ForgotPasswordPage from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import NewPassword from './pages/NewPassword';
import ExchangePage from './pages/ExchangePage';
import Details from './pages/Details';
import PaymentPage from './pages/PaymentPage';
import PaymentSuccess from './pages/PaymentSuccess';
import Header from './components/homePage/Header';
import ErrorPage from './pages/ErrorPage';
import { AuthProvider, useAuth } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth(); 
  console.log(isAuthenticated);
  const location = useLocation();

  const noHeaderPaths = [
    '/login',
    '/signup',
    '/forgot-password',
    '/otp-verification',
    '/new-password',
  ];

  if (isLoading) { 
    return <div>Loading...</div>; 
  }

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUpPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/exchange" element={isAuthenticated ? <ExchangePage /> : <Navigate to="/login" />} />
        <Route path="/details-form" element={isAuthenticated ? <Details /> : <Navigate to="/login" />} />
        <Route path="/payment" element={isAuthenticated ? <PaymentPage /> : <Navigate to="/login" />} />
        <Route path="/payment-success" element={isAuthenticated ? <PaymentSuccess /> : <Navigate to="/login" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
