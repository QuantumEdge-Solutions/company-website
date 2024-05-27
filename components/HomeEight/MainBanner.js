import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="ml-main-banner-area with-linear-gradient-color">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-content with-white-color-text">
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

                <ul className="banner-btn">
                  <li>
                    <Link href="/contact" className="btn btn-primary">
                      Get Started Free
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="flaticon-play-button"></i>
                      Watch Intro Video
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-wrap-image">
                <img src="/images/home-eight/banner/main.png" alt="image" />

                <div className="circle-shape"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-main-banner-shape4">
          <img src="/images/home-eight/banner/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
