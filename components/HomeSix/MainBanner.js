import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const DomainSearch = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="ai-main-banner-area">
        <div className="container-fluid">
          <div className="ai-main-banner-content">
            <h1>
              AI and Machine <span>Learning</span> Products Creators
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="banner-btn">
              <li>
                <Link href="/contact" className="btn btn-primary">
                  Get Started Free
                </Link>
              </li>
              <li>
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="flaticon-play-button"></i>
                  Watch Intro Video
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="ai-main-banner-image">
          <img src="/images/home-six/banner/main1.png" alt="image" />
          <div className="circle-shape"></div>
        </div>
        <div className="ai-main-banner-image right-image">
          <img src="/images/home-six/banner/main2.png" alt="image" />
          <div className="circle-shape"></div>
        </div>

        {/* Shape Images */}
        <div className="ai-main-banner-shape-1">
          <img src="/images/home-six/banner/shape-1.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape-2">
          <img src="/images/home-six/banner/shape-2.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape-3">
          <img src="/images/home-six/banner/shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default DomainSearch;
