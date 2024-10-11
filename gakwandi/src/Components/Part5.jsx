import React from "react";
import { useTranslation } from 'react-i18next'; // Import the hook
import '../App.css';
import './Mods.css';

function Part5() {
  const { t } = useTranslation(); 

  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img className="landing-img" src="assets/img/Landing/Furniture-landing.jpg" alt="" data-aos="fade-in" />
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h5 className="scan-to-explore">{t('scan_to_explore')}</h5>
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
