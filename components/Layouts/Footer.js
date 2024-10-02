import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/new3-01.svg" alt="image" 
                    style={{width: "100px"}}/>
                  </Link>
                  <p style={{paddingRight: "0px"}}>
                  Transforming your vision with cutting-edge technology, we specialize in tailored software development and 
                  innovative AI solutions. Our scalable SAAS development enhances your digital presence and streamlines business 
                  processes, driving growth and innovation. Let's build the future today.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <span>Mobile & Web Development</span>
                  </li>
                  <li>
                    <span>Machine Learning</span>
                  </li>
                  <li>
                    <span>Generative AI</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    1 Palmerston Circuit <br /> Northern Territory, Australia
                  </li>
                  <li>
                    <span>Email:</span>
                    threepointo.ai@gmail.com@
                  </li>
                  <li>
                    <span>Phone:</span>
                    +61 480 548892
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} 3PointO Technologies. All Rights Reserved{" "}
                  <a href="https://3point0.tech/" target="_blank">
                    3PointO Technologies
                  </a>
                  .
                </p>
              </div>

              {/* <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
