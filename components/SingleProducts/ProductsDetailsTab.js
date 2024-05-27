import React, { Component } from "react";

export default class ProductsDetailsTab extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
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
      <div className="tab products-details-tab">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                <div className="dot"></div> Description
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab2")}>
                <div className="dot"></div> Additional information
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab3")}>
                <div className="dot"></div> Reviews
              </li>
            </ul>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <div className="products-details-tab-content">
                  <p>
                    Design inspiration lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Morbi commodo, ipsum sed pharetra gravida,
                    orci magna rhoncus neque, id pulvinar odio lorem non turpis.
                    Nullam sit amet enim. Suspendisse id velit vitae ligula
                    volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
                    Nulla facilisi. Nulla libero. Vivamus pharetra posuere
                    sapien. Nam consectetuer. Sed aliquam, nunc eget euismod
                    ullamcorper, lectus nunc ullamcorper orci, fermentum
                    bibendum enim nibh eget ipsum. Nam consectetuer. Sed
                    aliquam, nunc eget euismod ullamcorper, lectus nunc
                    ullamcorper orci, fermentum bibendum enim nibh eget ipsum.
                    Nulla libero. Vivamus pharetra posuere sapien.
                  </p>
                </div>
              </div>

              <div id="tab2" className="tabs_item">
                <div className="products-details-tab-content">
                  <ul className="additional-information">
                    <li>
                      <span>Brand:</span> ThemeForest
                    </li>
                    <li>
                      <span>Color:</span> Brown
                    </li>
                    <li>
                      <span>Size:</span> Large, Medium
                    </li>
                    <li>
                      <span>Weight:</span> 27 kg
                    </li>
                    <li>
                      <span>Dimensions:</span> 16 x 22 x 123 cm
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tab3" className="tabs_item">
                <div className="products-details-tab-content">
                  <div className="product-review-form">
                    <h3>Customer Reviews</h3>

                    <div className="review-title">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p>Based on 3 reviews</p>

                      <a href="#" className="btn btn-primary">
                        Write a Review
                      </a>
                    </div>

                    <div className="review-comments">
                      <div className="review-item">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <h3>Good</h3>
                        <span>
                          <strong>Admin</strong> on{" "}
                          <strong>Sep 21, 2019</strong>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>

                        <a href="#" className="review-report-link">
                          Report as Inappropriate
                        </a>
                      </div>

                      <div className="review-item">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <h3>Good</h3>
                        <span>
                          <strong>Admin</strong> on{" "}
                          <strong>Sep 21, 2019</strong>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>

                        <a href="#" className="review-report-link">
                          Report as Inappropriate
                        </a>
                      </div>

                      <div className="review-item">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <h3>Good</h3>
                        <span>
                          <strong>Admin</strong> on{" "}
                          <strong>Sep 21, 2019</strong>
                        </span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>

                        <a href="#" className="review-report-link">
                          Report as Inappropriate
                        </a>
                      </div>
                    </div>

                    <div className="review-form">
                      <h3>Write a Review</h3>

                      <form>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Review Title</label>
                              <input
                                type="text"
                                id="review-title"
                                name="review-title"
                                placeholder="Enter your review a title"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Body of Review (1500)</label>
                              <textarea
                                name="review-body"
                                id="review-body"
                                cols="30"
                                rows="7"
                                placeholder="Write your comments here"
                                className="form-control"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn btn-primary">
                              Submit Review
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
