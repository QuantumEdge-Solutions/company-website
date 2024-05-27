import React, { Component } from "react";
import Link from "next/link";

export default class Services extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <div className="services-section bg-f2f6f9 ptb-110">
          <div className="container">
            <div className="section-title">
              <h2>We Offer Professional Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="tab services-tab-list">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => this.openTabSection(e, "tab1")}
                    >
                      <i className="flaticon-income"></i>
                      <span>Data Analysis</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <i className="flaticon-automatic"></i>
                      <span>Automation Optimization</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <i className="flaticon-locked"></i>
                      <span>Security & Surveillance</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab4")}>
                      <i className="flaticon-molecular"></i>
                      <span>Health & Manufacturing</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab5")}>
                      <i className="flaticon-gear"></i>
                      <span>Software Engineers</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab6")}>
                      <i className="flaticon-ceo"></i>
                      <span>IT Professional</span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-8 col-md-8">
                  <div className="tab-content">
                    <div id="tab1" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab2" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab3" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab4" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab5" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab6" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images  */}
          <div className="shape-img1">
            <img src="/images/shape/shape1.png" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/shape3.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/shape2.svg" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/shape5.svg" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/shape4.svg" alt="image" />
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
  }
}
