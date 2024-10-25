    import { FC,useState } from "react";
    import CloseImg from "../assets/img/close.png";
    import phoneImg from "../assets/img/phone-call.png";

    interface ForgotPasswordProps {
    goToLogin: () => void;
    }

    const ForgotPassword: FC <ForgotPasswordProps> = ({ goToLogin }) => {
    const [hideForm, setHideForm] = useState(false);
    const [otpForm, setOtpForm] = useState(true);

    const handleClickSendButton = () => {
        setHideForm(true);
        setOtpForm(false);
    };

    return (
        <div className="forgot-password-page">
            <img className="close-transaction-button" src={CloseImg} alt="Close" onClick={goToLogin}/>
        <h3 style={{ textDecoration: 'underline' }}>Forgot Password</h3>

        {otpForm && (
            <>
            <p>Enter Phone Number</p>
            <input
                className="forgot-input"
                placeholder="Enter Phone Number"
                maxLength={10}
                required
            />
            <img className="icon-img" src={phoneImg} alt="Phone"  style={{position:'relative', left:'120px',bottom:'40px'}}/>


            <button className="forgot-btn-otp">Request OTP</button>

            <input
                className="forgot-input"
                placeholder="Enter OTP"
                required
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
                placeholder="Enter New Password"
                required
            />

            <p>Confirm Password</p>
            <input
                className="forgot-input"
                placeholder="Confirm Password"
                required
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
