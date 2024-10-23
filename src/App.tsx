import { useState } from 'react';
import "./style.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { TermsAndConditions } from './pages/TermsAndConditions';

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  
  return (
    <div className="auth-container">

      {isLoginPage ? (
      <Login goToRegister ={()=> setIsLoginPage(false)} />
      ) : (
      <Register goToLogin = {() => setIsLoginPage(true)} />

      )}

    </div>
  );
};

export default App;
