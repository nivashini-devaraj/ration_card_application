import React from "react";
import { Link } from "react-router-dom";
import uploadicon from "../assets/upload icon.png";

const documents = [
  {
    title: "Aadhaar Card",
    desc: "Upload a clear copy of your Aadhaar card.",
  },
  {
    title: "Address Proof",
    desc: "Upload any document as proof of your current address.",
  },
  {
    title: "Income Certificate",
    desc: "Upload your income certificate issued by the relevant authority.",
  },
  {
    title: "Passport Photo",
    desc: "Upload a recent passport-sized photograph.",
  },
  {
    title: "Marriage Certificate",
    desc: "Upload your Marriage Certificate.",
  },
];

const UploadDocuments = () => {
  return (
    <div className="review-container">
      {/* Steps */}
      <div className="review-steps">
        <div className="review-step active">1</div>
        <div className="review-line"></div>
        <div className="review-step active">2</div>
        <div className="review-line"></div>
        <div className="review-step active">3</div>
        <div className="review-line"></div>
        <div className="review-step active">4</div>
      </div>

      <h2 className="review-title">Upload Documents</h2>
      <p className="review-subtitle">
        Please upload the following documents to complete your application.
        Ensure all documents are clear and legible.
      </p>

      <h4>Required Documents</h4>

      {/* Documents List */}
      <div className="review-doc-list">
        {documents.map((doc, index) => (
          <div className="review-doc-item" key={index}>
            <div className="review-doc-content">
              <div className="upload-icon-frame"> 
                <img src={uploadicon} className=""/>
              </div>
              <div className="review-doc-info">
                <h4>{doc.title}</h4>
                <p>{doc.desc}</p>
              </div>
            </div>

            <label className="review-upload-btn">
              Upload
              <input type="file" hidden />
            </label>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="review-nav">
         <Link to="/family"  className="address-prev-button">Previous</Link>
        <Link to="/review" className="review-submit-btn">Submit Application</Link>
      </div>
    </div>
  );
};

export default UploadDocuments;
