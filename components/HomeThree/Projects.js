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

        <div className="container-fluid">
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
                <img src="/images/projects-img1.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/projects-img2.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/projects-img3.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/projects-img4.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <img src="/images/projects-img5.jpg" alt="image" />

                <div className="plus-icon">
                  <Link href="/projects-details">
                    <span></span>
                  </Link>
                </div>
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
