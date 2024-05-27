import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              We Offer Professional <b>Solutions</b> With Artificial
              Intelligence
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Engineers</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>

                <Link href="/service-details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/icon2.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Data Analysts</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Security & Surveillance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-four">
                  <img src="/images/home-six/services/icon4.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Health & Manufacturing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-five">
                  <img src="/images/home-six/services/icon5.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Robotic Automation</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/icon6.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Automatic Optimization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="/services" className="btn btn-primary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
