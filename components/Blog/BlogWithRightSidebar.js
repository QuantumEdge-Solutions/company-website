import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const BlogWithRightSidebar = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <Link href="/blog-details">
                        <img src="/images/blog/blog1.jpg" alt="image" />
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <Link href="#">Admin</Link>
                          </li>
                          <li>March 10, 2020</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog-details">
                          Making Peace With The Feast Or Famine Of Freelancing
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
                      </p>

                      <Link href="/blog-details" className="learn-more-btn">
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <Link href="/blog-details">
                        <img src="/images/blog/blog2.jpg" alt="image" />
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <Link href="#">Admin</Link>
                          </li>
                          <li>March 11, 2020</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog-details">
                          I Used The Web For A Day On A 50 MB Budget
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
                      </p>

                      <Link href="/blog-details" className="learn-more-btn">
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <Link href="/blog-details">
                        <img src="/images/blog/blog3.jpg" alt="image" />
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <Link href="#">Admin</Link>
                          </li>
                          <li>March 12, 2020</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog-details">
                          Here are the 5 most telling signs of micromanagement
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
                      </p>

                      <Link href="/blog-details" className="learn-more-btn">
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <Link href="/blog-details">
                        <img src="/images/blog/blog4.jpg" alt="image" />
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <Link href="#">Admin</Link>
                          </li>
                          <li>March 13, 2020</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog-details">
                          Add And Show Image With Size From Elementor Widget
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
                      </p>

                      <Link href="/blog-details" className="learn-more-btn">
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <Link href="/blog-details">
                        <img src="/images/blog/blog5.jpg" alt="image" />
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <Link href="#">Admin</Link>
                          </li>
                          <li>March 14, 2020</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog-details">
                          How To The Active Menu Based On URL In Next.JS?
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
                      </p>

                      <Link href="/blog-details" className="learn-more-btn">
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <Link href="/blog-details">
                        <img src="/images/blog/blog6.jpg" alt="image" />
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <Link href="#">Admin</Link>
                          </li>
                          <li>March 14, 2020</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog-details">
                          Instagram Feed Add To Your WordPress Site
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
                      </p>

                      <Link href="/blog-details" className="learn-more-btn">
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="col-lg-12 col-sm-12">
                  <div className="pagination-area">
                    <a href="#" className="prev page-numbers">
                      <i className="fas fa-angle-double-left"></i>
                    </a>

                    <a href="#" className="page-numbers">
                      1
                    </a>

                    <a href="#" className="page-numbers current">
                      2
                    </a>

                    <a href="#" className="page-numbers">
                      3
                    </a>

                    <a href="#" className="page-numbers">
                      4
                    </a>

                    <a href="#" className="next page-numbers">
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogWithRightSidebar;
