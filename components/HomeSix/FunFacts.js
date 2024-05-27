import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-wrap-area">
        <div className="container">
          <div className="fun-facts-wrap-area-inner-box pt-100 pb-70">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                <div className="single-funfacts-card">
                  <h3>
                    5000 <span className="sign-icon">+</span>
                  </h3>
                  <p>Downloaded dolor sit amet consectetur adipiscin.</p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                <div className="single-funfacts-card">
                  <h3>
                    3000 <span className="sign-icon">+</span>
                  </h3>
                  <p>Generated revenue by AI solutions.</p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                <div className="single-funfacts-card">
                  <h3>
                    500 <span className="sign-icon">+</span>
                  </h3>
                  <p>Feedback we get dolor sit consectetur adipiscin.</p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                <div className="single-funfacts-card">
                  <h3>
                    100 <span className="sign-icon">+</span>
                  </h3>
                  <p>Saved operational costs due to AI solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fun-facts-wrap-shape">
          <img src="/images/home-six/fun-facts-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FunFacts;
