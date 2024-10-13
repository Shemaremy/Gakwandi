import React from "react";
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Mods.css';

function Part2() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero section dark-background">
      <img className="landing-img desktop-land" src="assets/img/Landing/Furniture-landing3.jpg" alt="" data-aos="fade-in" />
      <img className="landing-img phone-land" src="assets/img/Landing/Furniture-landing4.jpg" alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="landing-container col-xl-6 col-lg-8">
            <h2>{t('hero_title')}<span>.</span></h2>
            <p>{t('hero_subtitle')}</p>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <i className="fa-solid fa-check"></i>
              <h3><a href="">{t('high_quality')}</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
              <i className="fa-solid fa-sack-dollar"></i>
              <h3><a href="">{t('affordability')}</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-box">
              <i className="bi bi-fullscreen-exit"></i>
              <h3><a href="">{t('wide_selection')}</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-box">
              <i className="fa-regular fa-face-smile"></i>
              <h3><a href="">{t('customer_satisfaction')}</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="icon-box">
              <i className="fa-solid fa-truck"></i>
              <h3><a href="">{t('reliable_delivery')}</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part2;
