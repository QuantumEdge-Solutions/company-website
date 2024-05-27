import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-area">
        <div className="container-flauid p-0">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour predefined words which don't
                      look.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client1.jpg" alt="image" />
                      </div>

                      <h3>Filip Luis</h3>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg1">
                    <img src="/images/clients/client1.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour predefined words which don't
                      look.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client2.jpg" alt="image" />
                      </div>

                      <h3>Sarah Taylor</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg2">
                    <img src="/images/clients/client2.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour predefined words which don't
                      look.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client3.jpg" alt="image" />
                      </div>

                      <h3>Sarah Taylor</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg3">
                    <img src="/images/clients/client3.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
