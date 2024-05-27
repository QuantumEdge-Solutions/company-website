import React from "react";

const MainBanner = () => {
  return (
    <>
      <div className="ml-main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-content">
                <span className="sub-title">
                  Analysis & Deep Machine Learning With <b>Ai</b>
                </span>
                <h1>
                  AI and Machine <span>Learning</span> Products Creators
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form className="banner-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">Request Demo</button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-image">
                <img src="/images/home-seven/banner/main.png" alt="image" />

                <div className="circle-shape"></div>

                <div className="wrap-shape">
                  <img src="/images/home-seven/banner/shape3.png" alt="image" />
                </div>

                <div className="wrap-text">
                  <i className="fa-solid fa-check"></i>
                  <span>Get Professional Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-main-banner-shape1">
          <img src="/images/home-seven/banner/shape1.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape2">
          <img src="/images/home-seven/banner/shape2.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape3">
          <img src="/images/home-seven/banner/shape4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
