import React from "react";
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Mods.css';

function Part4() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('services_title')}</h2>
        <p>{t('services_subtitle')}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-person"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>{t('service_retail')}</h3>
              </a>
              <p>{t('service_retail_desc')}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>{t('service_wholesale')}</h3>
              </a>
              <p>{t('service_wholesale_desc')}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>{t('service_delivery')}</h3>
              </a>
              <p>{t('service_delivery_desc')}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>{t('service_assembly')}</h3>
              </a>
              <p>{t('service_assembly_desc')}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-regular fa-comments"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>{t('service_consultation')}</h3>
              </a>
              <p>{t('service_consultation_desc')}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>{t('service_payment')}</h3>
              </a>
              <p>{t('service_payment_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part4;
