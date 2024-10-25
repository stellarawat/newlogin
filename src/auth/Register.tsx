import { ChangeEvent, FC, FormEvent, useState } from "react";
import "../style.css";
import eyeImg from "../assets/img/eye.png";
import phoneImg from "../assets/img/phone-call.png";
import CloseImg from "../assets/img/close.png";
import eyeclossedImg from "../assets/img/eye-clossed.png";
import { TermsAndConditions } from "../pages/TermsAndConditions";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";

interface RegisterProps {
  goToLogin: () => void;
}

const Register: FC<RegisterProps> = ({ goToLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [passwords, setPasswords] = useState<{password:string, confirmPassword:string, passwordError: string}>({
    password: "", 
    confirmPassword: "", 
    passwordError: ""
  })
  const [AgreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [goToTermsOverlay, setToTermsOverlay] = useState<boolean>(false);
  const [goToprivacyOverlay, setToPrivacyOverlay] = useState<boolean>(false);
  const [showPassword, setshowPassword]=useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (passwords.password !== passwords.confirmPassword) {
      setPasswords((prev) => ({...prev, passwordError: "Password mismatch"}))
      return;
    }
    setPasswords((prev) => ({ ...prev, passwordError: "" })); // Clear error if passwords match
    console.log("Registering", { phoneNumber, password: passwords.password });

  };

  const togglePasswordVisibility = () =>{
    setshowPassword(!showPassword);
  };
  

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickgotooverlay = () => setToTermsOverlay(true);
  const handleClickexitoverlay = () => setToTermsOverlay(false);
  const handleClickgotooverlayPrivacy = () => setToPrivacyOverlay(true);
  const handleClickexitoverlayPrivacy = () => setToPrivacyOverlay(false);

  return (
    <div className="login-container">
      <span className="header">REGISTER</span>

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
          name="password"
            className="inputs"
            type={showPassword? "text":"password"}
            placeholder="Password"
            value={passwords.password}
            onChange={handleChangePassword}
            minLength={3}
            maxLength={10}
            required
          />

        <img className="icon-img" 
        src={showPassword?eyeImg:eyeclossedImg} 
        alt="toggle Password Visibility"
        onClick={togglePasswordVisibility}
        style={{cursor:'pointer'}}
      />
        </div>

        <div className="inputs-div">
          <input
          name="confirmPassword"
            className="inputs"
            type={showPassword? "text":"password"}
            placeholder="Confirm Password"
            value={passwords.confirmPassword}
            onChange={handleChangePassword}
            minLength={3}
            maxLength={10}
            required
          />

          <img className="icon-img" 
        src={showPassword?eyeImg:eyeclossedImg} 
        alt="toggle Password Visibility"
        onClick={togglePasswordVisibility}
        style={{cursor:'pointer'}}
        />
        </div>

        {passwords.passwordError && (
          <div className="error-message">
            {passwords.passwordError}
          </div>
        )}

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
            <a href="#" onClick={handleClickgotooverlay}>Terms and Conditions</a>, the{" "}
            <a href="#" onClick={handleClickgotooverlayPrivacy}>Privacy Policy</a>, that I am 18 years old or over, and
            that all information given is true.
          </label>
        </div>

        <button 
          className={`button ${AgreeToTerms ? "button-active" : "button-inactive"}`}
          type="submit"
          disabled={!AgreeToTerms}>  
          Register
        </button>
      </form>

      <div className="register">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={goToLogin}>Login</a>
        </p>
      </div>

      {goToprivacyOverlay && (
        <div className="overlay">
        <div className="close-transaction-button-content">
          <img className="backImg" src={CloseImg} alt="Close" onClick={handleClickexitoverlayPrivacy} />
        </div>

          <div className="overlay-content">
            <PrivacyPolicy />
          </div>
        </div>
      )}

      {goToTermsOverlay && (
        <div className="overlay">
          <div className="close-transaction-button-content">
            <img className="backImg" src={CloseImg} alt="Close" onClick={handleClickexitoverlay} />
          </div>
          
          <div className="overlay-content">
            <TermsAndConditions />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
