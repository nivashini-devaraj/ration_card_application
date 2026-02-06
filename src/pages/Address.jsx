import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddressDetails() {
  

  return (
    <div className="applicant-container">
        {/* Progress Steps */}
        <div className="steps">
            <div className="step active">1</div>
            <div className="line2"></div>
            <div className="step active">2</div>
            <div className="line"></div>
            <div className="step">3</div>
            <div className="line"></div>
            <div className="step">4</div>
        </div>
    
        <div className="address-page">
        
        <div className="address-container">
            <h2 className="address-title">Address Details</h2>

            <div className="address-form">
            {/* District */}
            <label className="address-label">District</label>
            <select className="address-select">
                <option value="">Select District</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Kovilpatti">Chennai</option>
                <option value="Tiruchendur">Coimbatore</option>
            </select>

            {/* Taluk */}
            <label className="address-label">Taluk</label>
            <select
                className="address-select">
                <option value="">Select Taluk</option>
                <option value="Thoothukudi">Ettayapuram</option>
                <option value="Kovilpatti">Kovilpatti</option>
                <option value="Tiruchendur">Tiruchendur</option>
            </select>

            {/* Village / City */}
            <label className="address-label">Village/City</label>
            <select className="address-select">
                <option value="">Select Village/City</option>
                <option value="Thoothukudi">Masarpatti</option>
                <option value="Ettayapuram">Ettayapuram</option>
            </select>

            {/* Full Address */}
            <label className="address-label">Full Address</label>
            <textarea className="address-textarea"
                onClick={(e) => e.target.value = "1/205,masarpatti,masarpatti(po),Ettayapuram (tk),thoothukudi(dist),pincode-626202"}
            />

            {/* Pincode */}
            <label className="address-label">Pincode</label>
            <input type="text" className="address-input" placeholder="Enter Pincode"
                onClick={(e) =>  e.target.value = "626202"} />
            </div>

            {/* Navigation */}
            <div className="address-navigation">
                <Link to="/apply"  className="address-prev-button">Previous</Link>
                <Link to="/family"  className="address-next-button">Next</Link>
            </div>
        </div>
        </div>
    </div>
  );
}
