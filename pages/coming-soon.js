import React from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2023 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <>
      <div className="coming-soon-area">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="coming-soon-time">
                <img src="/images/coming-soon-bg.jpg" alt="image" />

                <div id="timer">
                  <div id="days">
                    {days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {seconds} <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="coming-soon-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="logo">
                      <Link href="/">
                        <img src="/images/black-logo.png" alt="logo" />
                      </Link>
                    </div>

                    <h3>
                      Our website is Coming Soon, follow us for update now!
                    </h3>

                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email Address"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Subscribe
                      </button>

                      <p>
                        And don’t worry, we hate spam too! You can unsubscribe
                        at anytime.
                      </p>
                    </form>

                    <div className="social">
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="twitter"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            className="youtube"
                            rel="noreferrer"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="facebook"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="linkedin"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="instagram.com"
                            target="_blank"
                            className="instagram"
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
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
