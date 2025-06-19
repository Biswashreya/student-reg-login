import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <>
          {currentPage === 'login' ? (
            <Login onTogglePage={togglePage} onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Register onTogglePage={togglePage} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
