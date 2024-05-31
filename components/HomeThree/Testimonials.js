import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What Clients Say About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author3.jpg" alt="image" />
                  <h3>Willem</h3>
                  <span>CEO at TaptoConnect</span>
                </div>
                <p>
                The QuantumEdge team was highly communicative, providing regular updates and seeking feedback. They invested time to understand my vision and requirements, which was reflected in the final product. 
                I was impressed with their work quality and customer service and would confidently recommend them for AI solutions.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author1.jpg" alt="image" />
                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Accusantium veritatis dolore ducimus illum, cumque excepturi,
                  autem rerum illo amet placeat odit corporis! Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Aliquid ullam harum
                  sit.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author2.jpg" alt="image" />
                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Accusantium veritatis dolore ducimus illum, cumque excepturi,
                  autem rerum illo amet placeat odit corporis! Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Aliquid ullam harum
                  sit.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
