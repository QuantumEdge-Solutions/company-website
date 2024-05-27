import React from "react";
import Link from "next/link";

const LatestBlog = () => {
  return (
    <>
      <div className="ai-blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              Latest Blog and News Don’t Miss Any <b>Updates</b> and News!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="ai-blog-card">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/home-six/blog/blog5.jpg" alt="image" />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <div className="tag">
                    <Link href="/blog-details">TECHNOLOGY</Link>
                  </div>
                  <h3>
                    <Link href="/blog-details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      By <a href="#">Thomas Kelbin</a>
                    </li>
                    <li>17th January</li>
                    <li>0 Comment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ai-blog-card">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/home-six/blog/blog2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <div className="tag">
                    <Link href="/blog-details">TECHNOLOGY</Link>
                  </div>
                  <h3>
                    <Link href="/blog-details">
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      By <a href="#">Thomas Kelbin</a>
                    </li>
                    <li>17th January</li>
                    <li>0 Comment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ai-blog-card">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/home-six/blog/blog6.jpg" alt="image" />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <div className="tag">
                    <Link href="/blog-details">TECHNOLOGY</Link>
                  </div>
                  <h3>
                    <Link href="/blog-details">
                      Here Are The 5 Most Telling Signs Of Micromanagement
                    </Link>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      By <a href="#">Thomas Kelbin</a>
                    </li>
                    <li>17th January</li>
                    <li>0 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
