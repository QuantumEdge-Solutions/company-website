import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pt-0 ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src="/images/about/about3.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Engaging New Audiences through Smart Approach</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Classification
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Examples
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Extensions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Extraction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Selection
                    </span>
                  </li>
                </ul>

                <Link href="/about" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
