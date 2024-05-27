import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="creativity-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="creativity-content">
                <h3>
                  Power your Creativity With <span>Computer Vision AI</span> on
                  a Trusted Platform
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="skill-bar">
                  <p className="progress-title-holder">
                    <span className="progress-title">Data Consulting</span>
                  </p>
                  <div className="progress-content-outter">
                    <div
                      className="progress-content"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="skill-bar">
                  <p className="progress-title-holder">
                    <span className="progress-title">Big Data & AI</span>
                  </p>
                  <div className="progress-content-outter">
                    <div
                      className="progress-content"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div className="creativity-btn">
                  <Link href="/contact" className="btn btn-primary">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row justify-content-center creativity-card-content">
                <div className="col-lg-6 col-sm-6">
                  <div className="creativity-card">
                    <div className="icon-image">
                      <img
                        src="/images/home-eight/creativity/icon1.png"
                        alt="image"
                      />
                    </div>
                    <h3>Advanced Programing</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="creativity-card">
                    <div className="icon-image">
                      <img
                        src="/images/home-eight/creativity/icon2.png"
                        alt="image"
                      />
                    </div>
                    <h3>Cloud AI Integration</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="creativity-card">
                    <div className="icon-image">
                      <img
                        src="/images/home-eight/creativity/icon3.png"
                        alt="image"
                      />
                    </div>
                    <h3>Robotic Arm</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="creativity-card">
                    <div className="icon-image">
                      <img
                        src="/images/home-eight/creativity/icon4.png"
                        alt="image"
                      />
                    </div>
                    <h3>AI Chippest</h3>
                  </div>
                </div>

                <div className="creativity-circle-shape">
                  <img
                    src="/images/home-eight/creativity/circle-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
