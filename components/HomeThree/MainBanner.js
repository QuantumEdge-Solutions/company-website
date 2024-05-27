import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  World’s Leading Machine Learning Company
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  ML today are able to supply needful of help, information, and
                  positive experience of maintaining intimacy with customers.
                  Eventually, chatbot ideas bring a pleasant experience of all
                  these qualities into the conversation.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-banner-image">
                <img
                  src="/images/banner-image.png"
                  className="animate__animated animate__zoomInUp animate__delay-0.1s"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
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

export default MainBanner;
