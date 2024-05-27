import React from "react";
import ContactForm from "../Contact/ContactForm";

const FaqForm = () => {
  return (
    <>
      <div className="faq-contact">
        <div className="section-title">
          <h2>Do You Have Any Questions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="faq-contact-form">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="faq-contact-image">
                <img src="/images/contact.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqForm;
