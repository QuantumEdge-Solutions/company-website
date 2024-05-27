import React from "react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="topbar-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-md-3">
              <div className="topbar-content">
                <span>
                  Welcome to Bariton. Need Help?{" "}
                  <Link href="/contact">Contact Us</Link>
                </span>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <ul className="topbar-action-list">
                <li>
                  <i className="fa-solid fa-location-pin"></i> 2750 Quadra
                  Street Victoria, Canada
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>{" "}
                  <a href="tel:44587154756">+44 587 154756</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  <a href="mailto:bariton@gmail.com">bariton@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
