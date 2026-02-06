import { useState } from "react";
import { Link } from "react-router-dom";

export default function FamilyDetails() {
  const [relationship, setRelationship] = useState("");
  const [age, setAge] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  const [familyMembers, setFamilyMembers] = useState([
    { relationship: "Spouse", age: 32, aadhaar: "XXXX-XXXX-1234" },
    { relationship: "Child", age: 10, aadhaar: "XXXX-XXXX-5678" },
    { relationship: "Child", age: 5, aadhaar: "XXXX-XXXX-9012" },
  ]);

  const handleAddMember = () => {
    if (!relationship || !age || !aadhaar) return;

    setFamilyMembers([
      ...familyMembers,
      { relationship, age, aadhaar },
    ]);

    setRelationship("");
    setAge("");
    setAadhaar("");
  };

  return (
     <div className="applicant-container">
       {/* Progress Steps */}
      <div className="steps">
        <div className="step active">1</div>
        <div className="line2"></div>
        <div className="step active">2</div>
        <div className="line2"></div>
        <div className="step active">3</div>
        <div className="line"></div>
        <div className="step">4</div>
      </div>
    <div className="family-page">
      <div className="family-container">
        <h2 className="family-title">Family Details</h2>
        <p className="family-subtitle">
          Please provide details of all family members to be included in the ration card.
        </p>

        {/* Add Member Section */}
        <div className="family-form">
          <input
            type="text"
            placeholder="Relationship"
            className="family-input"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            className="family-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="text"
            placeholder="Aadhaar Number"
            className="family-input"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
          />

          <button
            className="family-add-button"
            onClick={handleAddMember}
          >
            Add Member
          </button>
        </div>

        {/* Members Table */}
        <div className="family-table-container">
          <h3 className="family-table-title">Family Members</h3>

          <table className="family-table">
            <thead>
              <tr>
                <th>Relationship</th>
                <th>Age</th>
                <th>Aadhaar Number</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.relationship}</td>
                  <td>{member.age}</td>
                  <td>{member.aadhaar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Navigation Buttons */}
        <div className="family-navigation">
            <Link to="/address"  className="address-prev-button">Previous</Link>
            <Link to="/upload"  className="address-next-button">Next</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
