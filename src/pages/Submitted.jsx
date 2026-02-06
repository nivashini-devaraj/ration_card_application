import { Link } from "react-router-dom";
import download from "../assets/img 8.png";


const TrackForm = () => {
  return (
    <div className="form-wrapper">
        <form className="form-style">
        <img src={download} className="image-fluid" alt=" "/>
        <h2 className="text-center">Tracking Applications</h2>
        <p className="text-center">Your application for a new ration card has been successfully submitted. Please keep the following application number for tracking purposes.</p>

        <label className="fw-bold">Application Number</label>
            <input
            type="text"
            placeholder="Enter  your application number"
            onClick={(e) => e.target.value="UCS20060545875621"}
            className="form-control"
            />


            <div className="d-flex justify-content-center align-items-center flex-column flex-md-row gap-5 mt-3">
                <Link to='/status' className="btn btn-bg">Track Application Status</Link>
                <Link to='/dashboard' className="btn btn-light">Go to Dashboard</Link>
            </div>
        

        </form>
        
    </div>
  );
};

export default TrackForm;
