import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUp';
import Login from '../pages/Login';
import ForgotPasswordPage from '../pages/ForgotPassword';
import OtpVerification from '../pages/OtpVerification';
import NewPassword from '../pages/NewPassword';
import ExchangePage from '../pages/ExchangePage';
import Details from '../pages/Details';
import PaymentPage from '../pages/PaymentPage';
import PaymentSuccess from '../pages/PaymentSuccess';
import Header from '../components/homePage/Header';
import BuyingPage from '../pages/BuyingPage';
import ErrorPage from '../pages/ErrorPage';
import { useAuth } from '../context/authContext';
import { PublicRoute, ProtectedRoute } from './routes';

const AppContent = () => {
 
  const location = useLocation();

  const noHeaderPaths = [
    '/login',
    '/signup',
    '/forgot-password',
    '/otp-verification',
    '/new-password',
  ];



  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<PublicRoute component={SignUpPage} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/forgot-password" element={<PublicRoute component={ForgotPasswordPage} />} />
        <Route path="/otp-verification" element={<PublicRoute component={OtpVerification} />} />
        <Route path="/new-password" element={<PublicRoute component={NewPassword} />} />
        <Route path="/exchange" element={<ProtectedRoute component={ExchangePage} />} />
        <Route path="/buyingPage" element={<ProtectedRoute component={BuyingPage} />} />

        <Route path="/details-form" element={<ProtectedRoute component={Details} />} />
        <Route path="/payment" element={<ProtectedRoute component={PaymentPage} />} />
        <Route path="/payment-success" element={<ProtectedRoute component={PaymentSuccess} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppContent;
