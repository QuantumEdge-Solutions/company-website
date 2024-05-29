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
                  AI Powered Software Development Solutions
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  {/* At 3pointO, we're committed to providing our customers with the most up-to-date AI solutions,
                   ensuring your business stays ahead of the curve and reaps the full benefits of AI advancements.
                    */}
                    Transforming your vision with cutting-edge technology, we specialize in tailored software development
                      and innovative AI solutions. Our scalable SAAS development enhances your digital presence and 
                     streamlines business processes, driving growth and innovation. Let's build the future today.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <Link href="https://calendly.com/saeedarshad/" className="btn btn-primary" target="_blank">
                    Book a Call
                  </Link>
                  <Link href="mailto:m.saeedarshad95@gmail.com" className="btn btn-secondary" style={{'margin-left': '0.5rem'}}>
                    Contact Us
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
