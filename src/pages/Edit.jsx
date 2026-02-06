
export default function EditApplication() {
  return (
    <div className="edit-wrapper">
    <div className="edit-page">
      <h2 className="edit-title">Edit Application</h2>

      <form className="edit-form">
        <div className="edit-field">
          <label>Application Number</label>
          <input type="text" value="UCS200605789564" />
        </div>

        <div className="edit-field">
          <label>Applicant Name</label>
          <input type="text" defaultValue="Priya Sharma" />
        </div>

        <div className="edit-field">
          <label>Date of Birth</label>
          <input type="date" />
        </div>

        <div className="edit-field">
          <label>Gender</label>
          <input type="text" defaultValue="Female" />
        </div>

        <div className="edit-field">
          <label>Address</label>
          <input
            type="text"
            defaultValue="1/205, middlestreet, masarpatti, ettayapuram(tk), thoothugudi(dist), pincode-626202"
          />
        </div>

        <div className="edit-field">
          <label>Aadhar Number</label>
          <input type="text" defaultValue="6363 5686 9568" />
        </div>

        <div className="edit-field">
          <label>Mobile Number</label>
          <input type="text" defaultValue="3662598679" />
        </div>

        <div className="edit-field">
          <label>Email</label>
          <input type="email" defaultValue="priyasharma123@gmail.com" />
        </div>

        <div className="edit-field">
          <label>Family Members</label>
          <input type="text" value={4} />
        </div>

        <div className="edit-field">
          <label>Income</label>
          <input type="text" />
        </div>

        <div className="edit-field">
          <label>Occupation</label>
          <input type="text" />
        </div>

        <div className="edit-field">
          <label>Category</label>
          <input type="text" />
        </div>

        <div className="edit-field">
          <label>Documents</label>
          <input type="number" />
        </div>

        {/* BUTTON */}
        <div className="edit-actions">
          <button type="submit" className="edit-submit">
            Resubmit Application
          </button>
        </div>
      </form>
    </div></div>
  );
}
