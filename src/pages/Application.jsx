import { Link } from "react-router-dom";

const ApplicantDetails = () => {
  

  return (
    <div className="applicant-container">
        {/* Progress Steps */}
        <div className="steps">
            <div className="step active">1</div>
            <div className="line"></div>
            <div className="step">2</div>
            <div className="line"></div>
            <div className="step">3</div>
            <div className="line"></div>
            <div className="step">4</div>
        </div>

        <h2 className="title">Applicant Details</h2>

        <form className="form">
            <label>Name</label>
            <input type="text" name="name" placeholder="Priya Sharma" onClick={(e) => e.target.value="Priya Sharma"}/>

            <label>Gender</label>
            <select name="gender" onClick={(e) => e.target.value="Female"}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            </select>

            <label>Date of Birth</label>
            <input type="date" name="dob" onClick={(e) => e.target.value="26-06-1997"}/>

            <label>Aadhaar Number</label>
            <input type="text" name="aadhaar"
            placeholder="Enter your 12-digit Aadhaar number" onClick={(e) => e.target.value="6363  8545  6954"}/>

            <label>Mobile Number</label>
            <input type="text" name="mobile"
            placeholder="Enter your 10-digit mobile number" onClick={(e) => e.target.value="9361485675"} />

            <Link to="/address"  type="submit" className="next-btn text-white text-center">
                Next
            </Link>
        </form>
    </div>
  );
};

export default ApplicantDetails;
