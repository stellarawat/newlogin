import { FC, useState } from "react";
import CloseImg from "../assets/img/close.png";
import phoneImg from "../assets/img/phone-call.png";
import eyeImg from "../assets/img/eye.png";
import eyeclossedImg from "../assets/img/eye-clossed.png";

interface ForgotPasswordProps {
    goToLogin: () => void;
}

const ForgotPassword: FC<ForgotPasswordProps> = ({ goToLogin }) => {
    const [hideForm, setHideForm] = useState(false);
    const [otpForm, setOtpForm] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickSendButton = () => {
        setHideForm(true);
        setOtpForm(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="forgot-password-page">
            <img className="close-transaction-button" src={CloseImg} alt="Close" onClick={goToLogin} />
            <h3 style={{ textDecoration: 'underline' }}>Forgot Password</h3>

            {otpForm && (
                <>
                    <p>Enter Phone Number</p>
                    <input
                        className="forgot-input"
                        placeholder="Enter Phone Number"
                        maxLength={10}
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <img className="icon-img" src={phoneImg} alt="Phone" style={{ position: 'relative', left: '120px', bottom: '40px' }} />

                    <button className="forgot-btn-otp" onClick={handleClickSendButton}>
                        Request OTP
                    </button>

                    <input
                        className="forgot-input"
                        placeholder="Enter OTP"
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <button className="forgot-btn-otp" onClick={handleClickSendButton}>
                        Verify OTP
                    </button>
                </>
            )}

            {hideForm && (
                <div className="forgot-password-page">
                    <p>Enter New Password</p>
                    <input
                        className="forgot-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter New Password"
                        minLength={3}
                        maxLength={10}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <img
                        className="icon-img"
                        src={showPassword?eyeImg:eyeclossedImg} 
                        alt="Toggle Password Visibility"
                        style={{ position: 'relative', left: '120px', bottom: '40px', cursor: 'pointer' }}
                        onClick={togglePasswordVisibility}
                    />

                    <p>Confirm Password</p>
                    <input
                        className="forgot-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        minLength={3}
                        maxLength={10}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <img
                        className="icon-img" 
                        src={showPassword?eyeImg:eyeclossedImg} 
                        alt="toggle Password Visibility"
                        onClick={togglePasswordVisibility}
                        style={{ position: 'relative', left: '120px', bottom: '40px', cursor: 'pointer' }}
                    />

                    <button className="forgot-btn" onClick={goToLogin}>
                        Save New Password
                    </button>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;