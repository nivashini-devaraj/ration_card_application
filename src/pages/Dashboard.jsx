import { Link } from "react-router-dom";
import img2 from "../assets/img 2.jpg";
import img3 from "../assets/img 3.jpg";
import img4 from "../assets/img 4.jpg";
import img5 from "../assets/img 5.jpg";
import img6 from "../assets/img 6.jpg";
import img7 from "../assets/img 7.jpg";

const Dashboard = () => {
  return (
    <div className="page-container">
        <h3 className="m-2 mb-4">Welcome, Priya Sharma</h3>

        {/* Apply for New Ration Card */}
        <div className="card-container">
            <div>
                <h4>Apply for New Ration Card</h4>
                <p className="desc-text">
                    Start your application for a new ration card. 
                    Ensure you have all
                    required documents ready.
                </p>
                <Link to="/apply" className="dashboard-btn">
                    Apply Now
                </Link>
            </div>

            <div>
            <img src={img2} className="image image-fluid" alt=""/>
            </div>
        </div>

        {/* View/Edit Application */}
        <div className="card-container">
            <div className="card-content">
                <h3>View/Edit Application</h3>
                <p className="desc-text">
                    Review or modify your existing application details. Make sure all
                    information is accurate.
                </p>
                <Link to="/edit" className="dashboard-btn">
                    View / Edit
                </Link>
            </div>

            <div>
                <img src={img3} className="image image-fluid" alt=""/>
            </div>
        </div>

        {/* Upload Documents */}
        <div className="card-container">
            <div className="card-content">
                <h3>Upload Documents</h3>
                <p className="desc-text">
                    Upload necessary documents to support your application. Accepted
                    formats: PDF, JPG.
                </p>
                <Link to="/upload" className="dashboard-btn">
                    Upload
                </Link>
            </div>
            <div>
                <img src={img4} className="image image-fluid" alt=""/>
            </div>
        </div>

        {/* Check Application Status */}
        <div className="card-container">
            <div className="card-content">
                <h3>Check Application Status</h3>
                <p className="desc-text">
                    Track the progress of your application. Get real-time updates on its approval status.

                </p>
                <Link to="/status" className="dashboard-btn">
                    Check Status
                </Link>
            </div>
            <div>
                <img src={img5} className="image image-fluid" alt=""/>
            </div>
        </div>
        {/* Download Ration Card */}
        <div className="card-container">
            <div className="card-content">
                <h3>Download Ration Card</h3>
                <p className="desc-text">
                    Download your approved ration card. Keep a digital copy for your records.
                </p>
                <Link to="/download" className="dashboard-btn">
                    Download
                </Link>
            </div>
            <div> <img src={img6} className="image image-fluid" alt=""/></div>
        </div>

        {/* Profile*/}
        <div className="card-container">
            <div className="card-content">
                <h3>Profile</h3>
                <p className="desc-text">
                    Manage your personal information and settings. Update contact details and preferences.
                </p>
                <Link to="/profile" className="dashboard-btn">
                    Manage Profile
                </Link>
            </div>
            <div>
                <img src={img7} className="image image-fluid" alt=""/>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
