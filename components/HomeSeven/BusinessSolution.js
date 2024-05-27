import React from "react";
import Link from "next/link";

const BusinessSolution = () => {
  return (
    <>
      <div className="business-solution-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="business-solution-content">
                <h3>
                  AI Technology Best For Your <span>Business</span> Solution &
                  Target Audience
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices quis erat diam non rhoncus cras elit.
                </p>

                <ul className="solution-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Easy To Work With Our
                    Expert Engineers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Advance Data Analysis
                    Operation
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Various Analysis &
                    Competitve Price
                  </li>
                </ul>
                <div className="solution-btn">
                  <Link href="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="business-solution-image">
                <img
                  src="/images/home-seven/business-solution/business.png"
                  alt="image"
                />

                <div className="circle-shape">
                  <img
                    src="/images/home-seven/business-solution/circle-shape.png"
                    alt="image"
                  />
                </div>
                <div className="wrap-text">
                  <i className="fa-solid fa-check"></i>
                  <span>Advance Data Quality Audit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSolution;
