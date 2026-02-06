import React, { useState } from "react";
import { Link } from "react-router-dom";

const TrackForm = () => {
  return (
    <div className="form-wrapper">
        <form className="form-style">
        <h2 className="text-center">Track Your Application Status</h2>


        <label className="fw-bold">Application Number</label>
            <input
            type="text"
            placeholder="Enter  your application number"
            onClick={(e) => e.target.value="UCS20060545875621"}
            className="form-control"
            />

        <label className="fw-bold">Registered Mobile Number</label>

        <input
            type="number"
            placeholder="Enter  your registered mobile number"
            onClick={(e) => e.target.value="9365875485"}
            className="form-control"
        />
       
        <Link to={"/download"}
            type="submit"
            className="btn register-btn">
            View Status
        </Link>

        <p className="login-help-label" style={{ textAlign: "center", marginTop: "10px" }}>
             For any queries, please contact our helpline at 1800-123-4567
        </p>
        </form>
    </div>
  );
};

export default TrackForm;
