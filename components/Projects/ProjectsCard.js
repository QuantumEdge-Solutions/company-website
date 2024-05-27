import React from "react";
import Link from "next/link";

const ProjectsCard = () => {
  return (
    <>
      <div className="projects-area ptb-110">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img1.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img2.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img3.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img4.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img5.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img6.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img7.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <img src="/images/projects-img8.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src="/images/projects-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
