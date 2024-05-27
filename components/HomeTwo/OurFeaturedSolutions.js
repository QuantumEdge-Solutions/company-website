import React from "react";
import Link from "next/link";

const OurFeaturedSolutions = () => {
  return (
    <>
      <div className="featured-solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="icon">
                  <img src="/images/icon1.png" alt="image" />
                </div>
                <h3>
                  <Link href="/projects-details">Robotic Automation</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects-details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="icon">
                  <img src="/images/icon2.png" alt="image" />
                </div>
                <h3>
                  <Link href="/projects-details">Machine Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects-details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="icon">
                  <img src="/images/icon3.png" alt="image" />
                </div>
                <h3>
                  <Link href="/projects-details">Cognitive Engagement</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects-details" className="learn-more-btn">
                  Read More
                </Link>
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

export default OurFeaturedSolutions;
