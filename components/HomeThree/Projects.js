import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Projects = () => {
  return (
    <>
      <div className="projects-area pt-0 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Proud Projects That Make Us Stand Out</h2>
          </div>
        </div>

        <div className="container-fluid" style={{ maxHeight: "650px" }}>
          <Swiper
            navigation={true}
            spaceBetween={25}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="projects-slides"
          >
            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/nft-market.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/nft1.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/nft2.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/quickcard.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/opermax.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/brownlee.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/plankton.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/visual-stories.png" alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="circle-shape1">
          <img src="/images/projects-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Projects;
