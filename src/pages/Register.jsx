import React, { useState } from "react";

const RegistrationForm = () => {
  return (
    <div className="form-wrapper">
        <form className="form-style">
        <h2 className="text-center">New User Registration</h2>

        <label className="fw-bold">Full Name</label>
        <input
            type="text"
            placeholder="Enter your full name"
            onClick={(e) => e.target.value="Priya Sharma"}
            className="form-control"
        />

        <label className="fw-bold">Mobile Number</label>
        
            <input
            type="text"
            placeholder="Enter your mobile number"
            onClick={(e) => e.target.value="93524875692"}
            className="form-control"
            />

            <button
            type="button"
            className="btn otp-btn"
            >
            Get OTP
            </button>

            
        <label className="fw-bold">OTP</label>

        <input
            type="text"
            placeholder="Enter OTP"
            onClick={(e) => e.target.value="232345"}
            className="form-control"
        />

        <label className="fw-bold">Aadhaar Number</label>

        <input
            type="text"
            placeholder="Enter your Aadhaar number"
            onClick={(e) => e.target.value="6767  8978  2342"}
            className="form-control"
        />

        <label className="fw-bold">Password</label>

        <input
            type="password"
            placeholder="Create a password"
            onClick={(e) => e.target.value="25252525"}
            className="form-control"
        />

        <button
            type="submit"
            className="btn register-btn">
            Register
        </button>

        <p className="login-help-label" style={{ textAlign: "center", marginTop: "10px" }}>
            Already have an account? <a href="/login">Login</a>
        </p>
        </form>
    </div>
  );
};

export default RegistrationForm;
