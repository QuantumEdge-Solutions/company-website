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
              3Point0 Technologies excels in AI solutions and brings expertise in the following domains:
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-solutions-box">
                <div className="icon">
                  <img src="/images/icon1.png" alt="image" />
                </div>
                <h3>
                  <Link href="/service-details">Mobile & Web Development</Link>
                </h3>
                <p>
                Experience our tailored mobile and web solutions, including custom development, responsive design, API integration,
                and intuitive UX/UI. Elevate your digital presence with our comprehensive services.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-solutions-box">
                <div className="icon">
                  <img src="/images/icon2.png" alt="image" />
                </div>
                <h3>
                  <Link href="/service-details">Machine Learning</Link>
                </h3>
                <p>
                We provide tailored machine learning solutions, including predictive analytics, NLP, 
                and computer vision, to transform your data into actionable insights and drive business growth.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-featured-solutions-box">
                <div className="icon">
                  <img src="/images/icon3.png" alt="image" />
                </div>
                <h3>
                  <Link href="/service-details">Generative AI</Link>
                </h3>
                <p>
                Specializing in Generative AI and Chatbots, 
                we streamline creative workflows and transform ideas into reality, enabling businesses to innovate and excel.
                </p>
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
