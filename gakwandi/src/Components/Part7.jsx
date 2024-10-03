import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import '../App.css';
import './Mods.css';

function Part7() {
  useEffect(() => {
    new PureCounter();  // Initialize PureCounter after the component mounts
  }, []);
  
  return (
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 align-items-center justify-content-between">

          <div className="col-lg-5">
            <img src="assets/img/stats-img.jpg" alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6">

            <h3 className="fw-bold fs-2 mb-3">Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>

            <div className="row gy-4">

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-emoji-smile flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                  </div>
                </div>
              </div> {/* End Stats Item */}

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-journal-richtext flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                  </div>
                </div>
              </div> {/* End Stats Item */}

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-headset flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                  </div>
                </div>
              </div> {/* End Stats Item */}

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-people flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                  </div>
                </div>
              </div> {/* End Stats Item */}

            </div>

          </div>

        </div>

      </div>

    </section> // End Stats Section
  );
}

export default Part7;
