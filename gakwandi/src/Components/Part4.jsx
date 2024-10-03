import React from "react";
import '../App.css';
import './Mods.css';

function Part4() {
  return (
    // Services Section
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Our Services</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-person"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Retail Selling</h3>
              </a>
              <p>We offer a wide range of high-quality furniture and electronic devices tailored to meet the needs of everyday customers.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Wholesale to Businesses</h3>
              </a>
              <p>Partner with us for competitive bulk pricing on furniture and electronics, designed to elevate your business with quality products.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Reliable Delivery Service</h3>
              </a>
              <p>Our efficient delivery service ensures your items arrive safely and on time, whether you're buying for home or business.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Free Assembly & Installation</h3>
              </a>
              <p>Enjoy hassle-free shopping with our complimentary product assembly and installation service, available on all purchases.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-regular fa-comments"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Expert Product Consultation</h3>
              </a>
              <p>Our knowledgeable team is here to guide you through choosing the best products to suit your needs, whether at home or work.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Flexible Payment Plans</h3>
              </a>
              <p>We offer flexible payment options to make purchasing large items more convenient and accessible for everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part4;
