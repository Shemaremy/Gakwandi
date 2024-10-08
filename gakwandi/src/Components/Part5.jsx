import React from "react";
import '../App.css';
import './Mods.css';

function Part5() {
  return (
    // Call To Action Section
    <section id="call-to-action" className="call-to-action section dark-background">
      {/* <img src="assets/img/cta-bg.jpg" alt="" /> */}
      <img className="landing-img" src="assets/img/Landing/Furniture-landing.jpg" alt="" data-aos="fade-in" />
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h5 className="scan-to-explore">Scan to Explore</h5>
              <div className="qr-container">
                <img src="/assets/img/QR/Gakwandi-QR.png" alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part5;
