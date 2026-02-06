import React from "react";
import contacticon1 from "../assets/contact icon 1.png";
import contacticon2 from "../assets/contact icon 2.png";
import contacticon3 from "../assets/contact icon 3.png";


const HelpContact = () => {
  return (
        <div className="submit-help-page">
            <h2 className="submit-title">Help & Contact</h2>
            <p className="submit-subtitle">
            Find answers to common questions or get in touch with our support team.
            </p>

            <h5 className="submit-section-title">Frequently Asked Questions</h5>

            <div className="accordion submit-accordion" id="faqAccordion">

          {/* FAQ 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                How do I apply for a ration card?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="faqOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can apply online through the Ration Card portal by filling out
                the application form and uploading required documents.
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What documents are required for application?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Aadhaar card, address proof, income certificate, and family
                details are required.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can I track my application status?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="faqThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Login to the portal and navigate to “Track Application Status”.
              </div>
            </div>
          </div>
            </div>
            <h5 className="submit-section-title mt-4">Contact Information</h5>

            <div className="submit-contact-box">
                <div className="submit-contact-row">
                <div className="submit-contact-left">
                    <div className="submit-contact-icon"><img src={contacticon1} alt="image" className="image image-fluid"/></div>
                    <div>
                    <div className="submit-contact-title">Helpline Number</div>
                    <div className="submit-contact-subtitle">
                        Available Monday to Friday, 9 AM to 6 PM
                    </div>
                    </div>
                </div>
                <div className="submit-contact-value">+91-123-456-7890</div>
                </div>

                <div className="submit-contact-row">
                <div className="submit-contact-left">
                    <div className="submit-contact-icon"><img src={contacticon2} alt="image" className="image image-fluid"/></div>
                    <div>
                    <div className="submit-contact-title">Email Support</div>
                    <div className="submit-contact-subtitle">
                        Response within 2 business days
                    </div>
                    </div>
                </div>
                <div className="submit-contact-value">
                    support@rationcard.gov.in
                </div>
                </div>

                <div className="submit-contact-row">
                <div className="submit-contact-left">
                    <div className="submit-contact-icon"><img src={contacticon3} alt="image" className="image image-fluid"/></div>
                    <div>
                    <div className="submit-contact-title">Office Address</div>
                    <div className="submit-contact-subtitle">
                        Visit during office hours
                    </div>
                    </div>
                </div>
                <div className="submit-contact-value submit-address">
                    Ration Card Department, Government Building, New Delhi, India
                </div>
                </div>
            </div>
        </div>
  );
};

export default HelpContact;
