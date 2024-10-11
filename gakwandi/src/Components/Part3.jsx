import React from "react";
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Mods.css';

function Part3() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="assets/img/Business-talk.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>{t('about_title')}</h3>
            <p className="fst-italic">
              {t('about_intro')}
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>{t('about_strategy')}</span></li>
              <li><i className="bi bi-check2-all"></i> <span>{t('about_environment')}</span></li>
              <li><i className="bi bi-check2-all"></i> <span>{t('about_service')}</span></li>
            </ul>
            <p>
              {t('about_conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part3;
