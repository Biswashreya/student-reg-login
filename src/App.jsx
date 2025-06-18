import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  
  const [currentPage, setCurrentPage] = useState('login');


  const togglePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      {currentPage === 'login' ? (
        <Login onTogglePage={togglePage} />
      ) : (
        <Register onTogglePage={togglePage} />
      )}
    </div>
  );
}

export default App;