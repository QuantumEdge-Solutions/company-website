import React, { Component } from "react";
import Link from "next/link";

class PricingCard extends Component {
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
      <section className="pricing-area ptb-110 bg-fafafa">
        <div className="container">
          <div className="tab pricing-tab">
            {/* Pricing Tab List */}
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

            <div className="tab_content">
              <div id="MonthlyPlan" className="tabs-item">
                <div className="row">
                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/Monthly</span>
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
                          <i className="fas fa-times"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $149 <span>/Monthly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Start 3 Days Free Trial
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
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $179 <span>/Monthly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Start 6 Days Free Trial
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
                </div>
              </div>

              <div id="YearlyPlan" className="tabs-item">
                <div className="row">
                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/Yearly</span>
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
                          <i className="fas fa-times"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $249 <span>/Yearly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Start 3 Days Free Trial
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
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $279 <span>/Yearly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Start 6 Days Free Trial
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingCard;
