import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  // This function will be called by the Login component on success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // This function will be called by the Home component to log out
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login'); // Go back to login page after logout
  };

  // If user is logged in, show the Home page
  if (isLoggedIn) {
    return <Home onLogout={handleLogout} />;
  }
  
  // Otherwise, show the login or registration page
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {currentPage === 'login' ? (
        <Login onTogglePage={togglePage} onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Register onTogglePage={togglePage} />
      )}
    </div>
  );
}

export default App;