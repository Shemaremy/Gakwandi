import React from "react";
import '../App.css';
import './Mods.css';

function Part2() {
  return (
    // Hero Section
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-xl-6 col-lg-8">
            <h2>Powerful Digital Solutions With GP<span>.</span></h2>
            <p>We are a team of talented digital marketers</p>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h3><a href="">Lorem Ipsum</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
              <i className="bi bi-bullseye"></i>
              <h3><a href="">Dolor Sitema</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-box">
              <i className="bi bi-fullscreen-exit"></i>
              <h3><a href="">Sedare Perspiciatis</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-box">
              <i className="bi bi-card-list"></i>
              <h3><a href="">Magni Dolores</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="icon-box">
              <i className="bi bi-gem"></i>
              <h3><a href="">Nemos Enimade</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part2;
