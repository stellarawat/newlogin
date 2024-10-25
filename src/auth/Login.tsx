import { FC, FormEvent, useState } from "react";
import "../style.css";
import eyeImg from "../assets/img/eye.png";
import phoneImg from "../assets/img/phone-call.png";
import eyeclossedImg from "../assets/img/eye-clossed.png";

interface LoginProps {
  goToRegister: () => void; 
  goToForgotPassword :()=> void ;

}

const Login: FC<LoginProps> = ({ goToRegister, goToForgotPassword }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setshowPassword]=useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", { phoneNumber, password, rememberMe });
  };

  const togglePasswordVisibility = () =>{
    setshowPassword(!showPassword);
  };


  return (
    <div className="login-container">
  <span className="header">LOGIN</span>

  <form className="user-inputs" onSubmit={handleSubmit}>
    <div className="inputs-div">
      <input
        className="inputs"
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        maxLength={10}
        required
      />
      <img className="icon-img" src={phoneImg} alt="Phone" />
    </div>

    <div className="inputs-div">
      <input
        className="inputs"
        type={showPassword? "text":"password"}
        placeholder="Password"
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
        minLength={3}
        maxLength={15}
        required
      />

      <img className="icon-img" 
      src={showPassword?eyeImg:eyeclossedImg} 
      alt="toggle Password Visibility"
      onClick={togglePasswordVisibility}
      style={{cursor:'pointer'}}
      />
    </div>

    <div className="options-container">
      <div className="forget">
        <a href="#" onClick={goToForgotPassword}>
          Forgot Password?
        </a>
      </div>

      <div className="remember-me">
        <input
          type="checkbox"
          id="remember"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember">Remember me</label>
      </div>
    </div>

    <button type="submit">Login</button>
  </form>

  <div className="register">
    <p>
      Don't have an account?{" "}
      <a href="#" onClick={goToRegister}>
        Register
      </a>
    </p>
  </div>
</div>

  );
};

export default Login;
