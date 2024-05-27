import React, { Component } from "react";
import Link from "next/link";

export default class PricingPlan extends Component {
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
        <div className="pricing-area ptb-110 pt-0">
          <div className="container">
            <div className="section-title">
              <h2>Our Pricing Plan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="tab pricing-tab pricing-bg-color">
              <ul className="tabs">
                <li
                  className="current"
                  onClick={(e) => this.openTabSection(e, "tab1")}
                >
                  Monthly Plan
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab2")}>
                  Yearly Plan
                </li>
              </ul>

              <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box">
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
                            <i className="flaticon-tick"></i> Drag & Drop
                            Builder
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
                            <i className="flaticon-tick"></i> Unlimited
                            Broadcasts
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Landing Pages &
                            Web Widgets
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box active">
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
                            <i className="flaticon-tick"></i> Drag & Drop
                            Builder
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
                            <i className="flaticon-tick"></i> Unlimited
                            Broadcasts
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Landing Pages &
                            Web Widgets
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                      <div className="single-pricing-box">
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
                            <i className="flaticon-tick"></i> Drag & Drop
                            Builder
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
                            <i className="flaticon-tick"></i> Unlimited
                            Broadcasts
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Landing Pages &
                            Web Widgets
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab2" className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box">
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
                            <i className="flaticon-tick"></i> Drag & Drop
                            Builder
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
                            <i className="flaticon-tick"></i> Unlimited
                            Broadcasts
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Landing Pages &
                            Web Widgets
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box active">
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
                            <i className="flaticon-tick"></i> Drag & Drop
                            Builder
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
                            <i className="flaticon-tick"></i> Unlimited
                            Broadcasts
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Landing Pages &
                            Web Widgets
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                      <div className="single-pricing-box">
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
                            <i className="flaticon-tick"></i> Drag & Drop
                            Builder
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
                            <i className="flaticon-tick"></i> Unlimited
                            Broadcasts
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Landing Pages &
                            Web Widgets
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
