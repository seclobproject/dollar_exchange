import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authContext';
import AppContent from './routes/Appcontent';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AuthLoader>
          <AppContent />
        </AuthLoader>
      </Router>
    </AuthProvider>
  );
};

const AuthLoader = ({ children }) => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return null; // Return null or any loading 
  }
  return children;
};

export default App;
