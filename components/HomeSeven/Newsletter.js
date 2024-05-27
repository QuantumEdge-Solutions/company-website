import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="ai-subscribe-area ptb-100">
        <div className="container">
          <div className="ai-subscribe-content">
            <h2>Get The Best Blog Stories Into Your Inbox!</h2>

            <form className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email"
                name="EMAIL"
                required
              />

              <button type="submit">Subscribe</button>

              <div className="newsletter-checkbox-btn">
                <input className="inp-cbx" id="cbx" type="checkbox" />
                <label className="cbx" htmlFor="cbx">
                  <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>
                    I agree that submitted data is being collected stored.
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="ai-subscribe-shape">
          <img src="/images/home-six/subscribe-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
