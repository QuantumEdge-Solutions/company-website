import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PartnerSlider = () => {
  return (
    <>
      <div className="partner-section ptb-110" style={{"backgroundColor": "#dee4f3"}}>
        <div className="container">
        <div className="section-title">
            <h2>Our Proud Partners</h2>
            <p>
              We are honored to collaborate with these forward-thinking organizations
            </p>
          </div>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/brownlee-icon.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/quickcard-icon.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/opermax-icon.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/carecloud.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/nomor.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/Apify-logo.svg" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/myscale.jpeg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
