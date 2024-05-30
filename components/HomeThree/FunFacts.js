import React from "react";
import Link from "next/link";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>We completed 50+ Projects Yearly Successfully & counting</h2>
            <p>
            We have developed a diverse range of projects over the past year, showcasing our 
            commitment to excellence and progres
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div className="single-funfacts">
                <h3>
                  30 <span className="sign-icon">+</span>
                </h3>
                <p>Completed</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div className="single-funfacts">
                <h3>
                  17 <span className="sign-icon">+</span>
                </h3>
                <p>Feedbacks</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div className="single-funfacts">
                <h3>
                  500 <span className="sign-icon">+</span>
                </h3>
                <p>Workers</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div className="single-funfacts">
                <h3>
                  70 <span className="sign-icon">+</span>
                </h3>
                <p>Contributors</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us.</p>

            <Link href="mailto:m.saeedarshad95@gmail.com" className="btn btn-primary" style={{'margin-left': '0.5rem'}}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Shape Images  */}
        <div className="shape-img1">
          <img src="/images/map.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FunFacts;
