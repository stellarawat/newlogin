import {useState} from "react";
import {useAppStore} from "../Hooks/store.ts";

export const ForgotPassword = () => {
    const [hideForm, setHideForm] = useState(false);
    const [otpForm, setOtpForm] = useState(true);

    const { setActivePage } = useAppStore ((state) => ({
        setActivePage: state.setActivePage
    }))

    const handleClickSendButton = () => {
        setHideForm(true);
        setOtpForm(false);
    }

    return (
        <div className="forgot-password-page">
            <h3 style={{textDecoration: 'underline'}}>Forgot Password</h3>

            {otpForm && (
                <>
                    <p>Enter Phone Number </p>
                    <input
                        className="forgot-input"
                        placeholder="Enter Phone Number"
                        required
                    />

                    <button className="forgot-btn-otp"> Request OTP</button>

                    <input
                        className="forgot-input"
                        placeholder="Enter OTP"
                        required
                    />

                    <button className="forgot-btn" onClick={handleClickSendButton}>Verify OTP</button>
                </>
            )}

            {
                hideForm && (
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

                        <button className="forgot-btn" onClick={() => setActivePage('login')}>Save New PassWord</button>

                    </div>
                )
            }

        </div>
    )
        ;
};