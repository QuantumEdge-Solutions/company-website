import React from "react";
import Link from "next/link";

const FeaturedServices = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-robot"></i>
                </div>

                <h3>
                  <Link href="/service-details">
                    Robotic Process Automation
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-featured-services-box active">
                <div className="icon">
                  <i className="flaticon-artificial-intelligence"></i>
                </div>

                <h3>
                  <Link href="/service-details">Cognitive Automation</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>

                <h3>
                  <Link href="/service-details">Cognitive Engagement</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
