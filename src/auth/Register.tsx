import { FC, FormEvent, useState } from "react";
import "../style.css";
import eyeImg from "../assets/img/eye.png";
import phoneImg from "../assets/img/phone-call.png";

interface RegisterProps {
  goToLogin: () => void;  
}

const Register: FC<RegisterProps> = ({ goToLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [AgreeToTerms, setAgreeToTerms] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    console.log("Registering", { phoneNumber, password });
  };

  return (
    <div className="login-container">
      <span className="header">REGISTER</span>

      <div className="user-inputs" onSubmit={handleSubmit}>
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={3}
            maxLength={10}
            required
          />
          <img className="icon-img" src={eyeImg} alt="Eye" />
        </div>

        <div className="inputs-div">
          <input
            className="inputs"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={3}
            maxLength={10}
            required
          />
          <img className="icon-img" src={eyeImg} alt="Eye" />
        </div>

        <div className="policy-section">
          <input
            type="checkbox"
            id="terms"
            checked={AgreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            required
          />
          <label htmlFor="terms">
            By checking this box, I hereby confirm that I agree with the{" "}
            <a href="#">Terms and Conditions</a>, the{" "}
            <a href="#">Privacy Policy</a>, that I am 18 years old or over, and
            that all information given is true.
          </label>
        </div>

        <button type="submit">Register</button>
      </div>

      <div className="register">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={goToLogin}>
            Login 
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
