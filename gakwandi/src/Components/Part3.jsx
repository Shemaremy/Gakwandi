import React from "react";
import '../App.css';
import './Mods.css';

function Part3() {
  return (
    // About Section
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            {/* <img src="assets/img/about.jpg" className="img-fluid" alt="" /> */}
            <img src="assets/img/Business-talk.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>Elevate Your Space with Premium Furniture & Smart Electronics</h3>
            <p className="fst-italic">
              Our products combine functionality, comfort, and cutting-edge technology, designed to suit your lifestyle.
              Our expert-led workshops foster collaboration, innovation, and growth within our organization. 
              We provide actionable insights that drive the best results through:
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>Developing best tailored strategies to achieve our business goals</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Fostering a collaborative, innovative and trustworthy working environment,</span></li>
              <li><i className="bi bi-check2-all"></i> <span>And ensuring exceptional feedback from every customer by delivering outstanding service and exceeding expectations across all aspects of their experience.</span></li>
            </ul>
            <p>
              From sleek, contemporary designs to smart home devices, we offer everything you need to create the perfect environment. 
              Our commitment to quality and customer satisfaction ensures you get the best products at competitive prices.
              Transform your home or workspace with us today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part3;
