import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>
                  Analysis And Deep <span>Machine</span> Learning Provider With
                  Ai Solution
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> The Most Personalized
                    Object Detection
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> We Create The Most
                    Realistic AI
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Innovative Machine
                    Learning Products
                  </li>
                </ul>
                <div className="about-btn">
                  <Link href="/about-2" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
