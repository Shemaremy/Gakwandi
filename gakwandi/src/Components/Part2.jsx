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
          <div className="landing-container col-xl-6 col-lg-8">
            <h2>Innovative Furniture & Electronics with Gz<span>.</span></h2>
            <p>We offer a curated selection of high quality furniture and the latest electronic devices.</p>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              {/* <i className="bi bi-binoculars"></i> */}
              <i className="fa-solid fa-check"></i>
              <h3><a href="">High Quality</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
              {/* <i className="bi bi-bullseye"></i> */}
              <i className="fa-solid fa-sack-dollar"></i>
              <h3><a href="">Affordability</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-box">
              <i className="bi bi-fullscreen-exit"></i>
              <h3><a href="">Wide Selection</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-box">
              {/* <i className="bi bi-card-list"></i> */}
              <i className="fa-regular fa-face-smile"></i>
              <h3><a href="">Customer Satisfaction</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="icon-box">
              {/* <i className="bi bi-gem"></i> */}
              <i className="fa-solid fa-truck"></i>
              <h3><a href="">Reliable Delivery</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part2;
