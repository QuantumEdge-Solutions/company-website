import React from "react";
import Link from "next/link";

const Webinar = () => {
  return (
    <>
      <div className="webinar-area ptb-110 pt-0">
        <div className="container">
          <div className="webinar-inner">
            <div className="row m-0 align-items-center">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="image">
                  <img src="/images/webinar-img.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div className="content">
                  <h2>Check Out Our Latest Webinar</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <Link href="#" className="btn btn-primary">
                    Watch More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
