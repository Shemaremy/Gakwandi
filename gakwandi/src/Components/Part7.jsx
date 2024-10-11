import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import '../App.css';
import './Mods.css';

function Part7() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    new PureCounter(); 
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-lg-5">
            <img src="assets/img/Happy-clients.jpg" alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6">
            <h3 className="fw-bold fs-2 mb-3">{t('building_trust')}</h3> {/* Translation for Building Trust */}
            <p>{t('company_commitment')}</p> {/* Translation for Commitment Text */}

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-emoji-smile flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>{t('happy_clients')}</strong> <span>{t('happy_clients_sub')}</span></p> {/* Happy Clients */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-headset flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>{t('hours_of_support')}</strong> <span>{t('hours_of_support_sub')}</span></p> {/* Hours of Support */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-people flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>{t('hard_workers')}</strong> <span>{t('hard_workers_sub')}</span></p> {/* Hard Workers */}
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part7;
