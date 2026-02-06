import { Link } from "react-router-dom";
import img8 from "../assets/img 8.png";

export default function Acknowledgement() {
  return (
    <div className="ack-page">
        <h3 className="ack-heading">Acknowledgment</h3>

        <div className="ack-card">
            <h4 className="ack-title">Application Submitted Successfully</h4>
            <p className="ack-subtitle">
            Your ration card application has been received successfully.
            </p>

            <div className="ack-content">
                {/* LEFT */}
                <div className="ack-left">
                    <h5 className="ack-section-title">Application Details</h5>

                    <p> Application Number:  RC2025XXXX</p>
                    <p> Applicant Name:  Sarah Johnson</p>
                    <p> Application Type:  New Ration Card</p>
                    <p> Submission Date: 15/07/2024</p>
                    <p> Current Status:  Under Verification</p>

                    <h5 className="ack-section-title mt">Next Steps</h5>

                    <ul className="ack-steps">
                        <li>Your application will be verified by the concerned authority.</li>
                        <li>Field verification may be conducted if required.</li>
                        <li>You will be notified once the status is updated.</li>
                    </ul>

                    <p className="ack-note">
                    Please keep your Application Number for future reference.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="ack-right">
                    <img src={img8} alt="Application Submitted" className="ack-image"/>
                </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="ack-actions">
                <button className="ack-btn primary">
                    View Application Status
                </button>
                <Link to='/submitted' className="ack-btn secondary">
                    Download Acknowledgment (PDF)
                </Link >
                <Link to='/' className="ack-btn link">
                    Go to Home
                </Link>
            </div>
        </div>
    </div>
  );
}
