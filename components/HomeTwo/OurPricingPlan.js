import React, { Component } from "react";
import Link from "next/link";

export default class OurPricingPlan extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("pricing-tabs-item");
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
      <div className="pricing-area ptb-110 pt-0">
        <div className="container">
          <div className="section-title">
            <h2>Our Pricing Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="tab pricing-tab bg-color">
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "MonthlyPlan")}
              >
                Monthly Plan
              </li>

              <li onClick={(e) => this.openTabSection(e, "YearlyPlan")}>
                Yearly Plan
              </li>
            </ul>

            <div className="tab-content">
              <div id="MonthlyPlan" className="pricing-tabs-item">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $149 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 3300
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $179 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 10000
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="YearlyPlan" className="pricing-tabs-item">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $249 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 3300
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $279 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 10000
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
      </div>
    );
  }
}
