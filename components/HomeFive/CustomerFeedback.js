import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CustomerFeedback = () => {
  return (
    <>
      <div className="testimonials-section ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h2>Our Customer Review</h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="icon">
                  <i className="flaticon-chat"></i>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour predefined words which don't look.
                </p>
                <div className="client-info">
                  <h3>Filip Luis</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour predefined words which don't look.
                </p>
                <div className="client-info">
                  <h3>Steven Smith</h3>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour predefined words which don't look.
                </p>
                <div className="client-info">
                  <h3>Sarah Taylor</h3>
                  <span>EnvyTheme</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
