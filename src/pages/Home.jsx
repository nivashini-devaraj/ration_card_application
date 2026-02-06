import heroImage from "../assets/img1.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
        <div className=" d-flex flex-column justify-content-center align-items-center text-center text-white"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "80vh",
                position: "relative",
            }}>
            <div className='overlay'>
                <h1 className="fw-bold">Ration Card Services Portal</h1>
                <p className="lead">Apply, track, and manage your ration card online.</p>
                <div className="d-flex flex-column flex-md-row gap-2 mt-3">
                    <Link to='/register' className="btn btn-bg">Apply for New Ration Card</Link>
                    <Link to='/status' className="btn btn-light">Check Application Status</Link>
                </div>
            </div>
        </div>

        <h2 className='m-4 mt-4'> Eligibility and Required Documents</h2>
        <p className='m-4 mt-4'>To be eligible for a ration card, applicants must be residents of the state and not 
            possess any existing ration card. Required documents typically include proof of residence (e.g., Aadhaar 
            card, voter ID), proof of identity (e.g., PAN card, passport), and a recent passport-sized photograph. 
            Specific requirements may vary, so please refer to the detailed guidelines for your region.
        </p>
          
        <h2 className='m-4 mt-4'>Contact Us</h2>
        <p className='m-4 mt-4'>For any queries or assistance, please contact our helpline at 1800-123-4567 or email us 
            at support@rationcard.gov.in.
        </p>

        <div className="d-flex justify-content-center gap-2 mt-3 mb-5">
            <Link to='/register' className="btn btn-bg">Apply for New Ration Card</Link>
        </div>
    </>
    );
}

export default HomePage;
