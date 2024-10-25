import { useState } from 'react';
import "./style.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./pages/ForgotPassword";


const App = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'register' | 'forgotPassword'>('login');

  return (
    <>
      <div className="auth-container">
      {currentPage === 'login' && (
        <Login 
          goToRegister={() => setCurrentPage('register')} 
          goToForgotPassword={() => setCurrentPage('forgotPassword')} 
        />
      )}
      
      {currentPage === 'register' && (
        <Register 
          goToLogin={() => setCurrentPage('login')}
        />
      )}

      {currentPage === 'forgotPassword' && (
        <ForgotPassword goToLogin={() => setCurrentPage('login')} />
      )} </div>
    
    </>
  );
};

export default App;
