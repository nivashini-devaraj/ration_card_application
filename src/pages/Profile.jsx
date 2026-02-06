import React, { useState } from "react";

const RegistrationForm = () => {
    const [showButton, setShowButton] = useState(false);

    const handleClick = () => {
        setShowButton(true);

        setTimeout(() => {
        setShowButton(false);
        }, 3000); // 3 seconds
    };
    return (
        <div className="form-wrapper">
            <form className="form-style">
            <h2 className="text-center">Your Profile</h2>

            <label className="fw-bold">Full Name</label>
            <input
                type="text"
                placeholder="Enter your full name"
                onClick={(e) => e.target.value="Priya Sharma"}
                className="form-control"/>

            <label className="fw-bold">Email</label>
            <input
                type="text"
                placeholder="Enter your Email"
                onClick={(e) => e.target.value="priyasharma123@gmail.com"}
                className="form-control"/>

            <label className="fw-bold">Phone Number</label>
            
                <input
                type="text"
                placeholder="Enter your phone number"
                onClick={(e) => e.target.value="93524875692"}
                className="form-control" />

            <label className="fw-bold">Aadhaar Number</label>

            <input
                type="text"
                placeholder="Enter your Aadhaar number"
                onClick={(e) => e.target.value="6767  8978  2342"}
                className="form-control" />


            <button className="update-profile-button" onClick={handleClick}>Update Profile</button>

            {showButton && (
                <button className="update-profile-button profile-updated-btn">
                Profile Updated
                </button>
            )}
            </form>
        </div>
    );
};

export default RegistrationForm;
