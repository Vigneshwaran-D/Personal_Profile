"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

export function Hero() {
  return (
    <section id="home-section" className="hero animated-gradient">
      <Swiper
        className="home-slider owl-carousel"
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        slidesPerView={1}
      >
        <SwiperSlide className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ backgroundImage: "url(/images/bg_1.png)" }}
              >
                <div className="overlay"></div>
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate glass-card"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Vigneshwaran D</span>
                  </h1>
                  <h2 className="mb-4">Manager - Generative AI | Convo AI</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ backgroundImage: "url(/images/bg_2.png)" }}
              >
                <div className="overlay"></div>
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate glass-card"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm a <span>Generative AI</span> Specialist
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

