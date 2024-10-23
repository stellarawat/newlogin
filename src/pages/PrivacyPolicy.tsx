import {FC} from "react";
import CloseImg from "../assets/close.png";

interface PrivacyPolicyProps {
    onBack: () => void;
}

export const PrivacyPolicy: FC<PrivacyPolicyProps> = ({onBack}) => {
    return (
        <div>
            <img className="close-transaction-button" src={CloseImg} alt="Close" onClick={onBack}/>
            <div style={{marginTop: "30px", padding: '8px'}}>
                <span>
                    <p>
                        Welcome to Tushinde! We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information in accordance with Kenyan and international data protection regulations.
                    </p>

                    <p>1. Information We Collect</p>
                    <span>
                        We may collect and process the following types of personal information:

                        <ul>
                            <li>Personal Identification Information: Name, phone number, and other contact details.</li>
                            <li>Financial Information: Payment details necessary for processing transactions.</li>
                            <li>Technical Data: IP address, browser type, and other technical information collected when you visit our website or use our services.</li>
                            <li>Usage Data: Information about how you use our website and services, including your interactions and preferences</li>
                        </ul>
                    </span>

                    <p>2. How We Use Your Information</p>
                    <span>
                        Your information is used to:

                        <ul>
                            <li>Provide and manage your access to our services.</li>
                            <li>Process transactions and manage your account.</li>
                            <li>Send you promotional materials, newsletters, and other communications.</li>
                            <li>Improve our website and services based on your feedback and usage patterns.</li>
                            <li>Comply with legal obligations and protect against fraud.</li>
                        </ul>
                    </span>

                    <p>3. Data Security</p>
                    <span>
                        We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. Our website uses SSL encryption, and we regularly review our security practices.
                    </span>

                    <p>4. Sharing Your Information</p>
                    <span>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information with:

                        <ul>
                            <li>Service providers who assist us in operating our website and services (e.g., payment processors).</li>
                            <li>Law enforcement or other government agencies if required by law.</li>
                            <li>Other parties with your consent.</li>
                        </ul>
                    </span>

                    <p>5. Your Rights</p>
                    <span>
                        Under Kenyan and international data protection laws, you have the right to:

                        <ul>
                            <li>Access your personal data held by us.</li>
                            <li>Request the correction of inaccurate or incomplete data.</li>
                            <li>Request the deletion of your data, subject to legal obligations.</li>
                            <li>Withdraw consent for data processing where consent is the basis for processing.</li>
                        </ul>
                    </span>

                    <p>6. Cookies</p>
                    <span>
                        Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us recognize your browser and remember certain information. You can manage your cookie preferences through your browser settings.
                    </span>

                    <p>7. International Data Transfers</p>
                    <span>
                        We may transfer your personal data to countries outside Kenya, including countries that may not have the same level of data protection as Kenya. When we do so, we ensure that appropriate safeguards are in place to protect your information.
                    </span>

                    <p>8. Changes to This Privacy Policy</p>
                    <span>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on our website, and we encourage you to review the policy regularly.
                    </span>

                    <p>9. Contact Us</p>
                    <span>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        <br/>
                        Email: support@lottomotto.co.ke
                        Phone: +254111050420
                    </span>
                </span>
            </div>
        </div>
    );
};
