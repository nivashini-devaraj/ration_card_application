import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReviewSubmit() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="submit-page">
      <div className="submit-container">
        <h2 className="submit-title">Review & Submit</h2>

        {/* Applicant Details */}
        <section className="submit-section">
          <h4 className="submit-section-title">Applicant Details</h4>
          <div className="submit-box">
            <div className="submit-row">
              <div>
                <span className="submit-label">Full Name</span>
                <p>Sophia Clark</p>
              </div>
              <div>
                <span className="submit-label">Date of Birth</span>
                <p>15/08/1985</p>
              </div>
            </div>

            <div className="submit-row">
              <div>
                <span className="submit-label">Gender</span>
                <p>Female</p>
              </div>
              <div>
                <span className="submit-label">Marital Status</span>
                <p>Married</p>
              </div>
            </div>
          </div>
        </section>

        {/* Family Details */}
        <section className="submit-section">
          <h4 className="submit-section-title">Family Details</h4>
          <div className="submit-box">
            <div className="submit-row">
              <div>
                <span className="submit-label">Father's Name</span>
                <p>Robert Clark</p>
              </div>
              <div>
                <span className="submit-label">Mother's Name</span>
                <p>Emily Clark</p>
              </div>
            </div>

            <div className="submit-row">
              <div>
                <span className="submit-label">Spouse's Name</span>
                <p>Ethan Carter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Address Details */}
        <section className="submit-section">
          <h4 className="submit-section-title">Address Details</h4>
          <div className="submit-box">
            <div className="submit-row">
              <div>
                <span className="submit-label">Address Line 1</span>
                <p>123 Maple Street</p>
              </div>
              <div>
                <span className="submit-label">Address Line 2</span>
                <p>Apt 4B</p>
              </div>
            </div>

            <div className="submit-row">
              <div>
                <span className="submit-label">City</span>
                <p>Springfield</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details */}
        <section className="submit-section">
          <h4 className="submit-section-title">Contact Details</h4>
          <div className="submit-box">
            <div className="submit-row">
              <div>
                <span className="submit-label">Mobile Number</span>
                <p>987-654-3210</p>
              </div>
              <div>
                <span className="submit-label">Email Address</span>
                <p>sophia.clark@email.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Confirmation */}
        <div className="submit-confirmation">
          <input
            type="checkbox"
            id="confirm"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
          />
          <label htmlFor="confirm">
            I confirm that all the information provided is accurate and complete to the best of my knowledge.
          </label>
        </div>

        {/* Submit Button */}
        <Link to='/acknowledge'
          className="submit-button"
          disabled={!confirmed}
        >
          Submit Application
        </Link>
      </div>
    </div>
  );
}
