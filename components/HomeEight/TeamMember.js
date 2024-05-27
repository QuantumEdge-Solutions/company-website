import React from "react";
import Link from "next/link";

const TeamMember = () => {
  return (
    <>
      <div className="ai-team-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              We Provide Solutions With Our <b>Leadership Team</b> Of Experts
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="ai-team-card">
                <div className="team-image">
                  <img
                    src="/images/home-eight/team/team1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Thomas Adbadon</h3>
                  <span>CEO & Head of Operations</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="ai-team-card">
                <div className="team-image">
                  <img
                    src="/images/home-eight/team/team2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />

                  <div className="social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Jenifar Andress</h3>
                  <span>Head of Managing</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="ai-team-card">
                <div className="team-image">
                  <img
                    src="/images/home-eight/team/team3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />

                  <div className="social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Albart Jekson</h3>
                  <span>Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="ai-team-card">
                <div className="team-image">
                  <img
                    src="/images/home-eight/team/team4.jpg"
                    className="rounded-circle"
                    alt="image"
                  />

                  <div className="social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Medbin Hinter</h3>
                  <span>Developer Head</span>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="ai-all-team-btn">
                <Link href="/team" className="btn btn-primary">
                  View All Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-team-shape-1">
          <img src="/images/home-eight/team/shape-1.png" alt="image" />
        </div>
        <div className="ai-team-shape-2">
          <img src="/images/home-eight/team/shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default TeamMember;
