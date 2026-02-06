import download from "../assets/download.png";
import React, { useState } from "react";

export default function DownloadRationCard() {
  const [showButton, setShowButton] = useState(false);
      const handleClick = () => {
          setShowButton(true);
  
          setTimeout(() => {
          setShowButton(false);
          }, 3000); // 3 seconds
      };
  return (
    <div className="download-page">
        <h2 className="download-title">Download Ration Card</h2>

        <div className="download-content">
            {/* Card Image */}
            <div className="download-image-box">
            <img src={download} alt="Ration Card" className="download-image" />
            </div>

            {/* Application Details */}
            <div className="download-details">
            <p className="download-label theme-text">Application Status</p>

            <h5>
                <strong>Application Number:</strong> RC2024001234
            </h5>
            <p  className="theme-text">
                <strong>Applicant Name:</strong> Priya Sharma
            </p>
            <p  className="theme-text">
                <strong>Application Date:</strong> 2024-07-20
            </p>

            <span className="download-status address-prev-button">Current Status: Approved</span>
            </div>
        </div>

        {/* Buttons */}
        <div className="download-actions">
            <button className="download-btn primary" onClick={handleClick}>Download PDF</button>
            <button className="download-btn secondary ">Print</button>
        </div>
        <div className="success-btn-container">
            {showButton && (
                <button className="download-btn-success ">
                Downloaded Successfully
                </button>
            )}
            </div>
    </div>
  );
}
