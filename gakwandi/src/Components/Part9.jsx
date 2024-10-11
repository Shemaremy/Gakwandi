import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Mods.css';

function Part9() {

  const { t } = useTranslation(); // Use translation hook

  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage(false);
    setLoading(true);
    async function sendEmail() {
      try {
        const response = await fetch('https://gakwandi-project.glitch.me/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Email }),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
          setSuccessMessage(true);
          setTimeout(() => window.location.reload(), 2000);
        } else {
          setErrorMessage(data.message || t('subscription_failed'));
        }
      } catch (error) {
        setErrorMessage(t('something_wrong'));
        setLoading(false);
      }
    }
    sendEmail();
  };

  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Gakwandi Zacharie.</span>
              </a>
              <div className="footer-contact pt-3">
                <p>{t('address')}</p>
                <p>Bujumbura, Burundi</p>
                <p className="mt-3"><strong>{t('phone')}</strong> <span>+257 711 268 65</span></p>
                <p><strong>{t('email')}</strong> <span>gakwandishops@gmail.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="https://wa.me/25771126865?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you." target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>{t('useful_links')}</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">{t('home')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#about">{t('about_us')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#services">{t('services')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#terms">{t('terms_of_service')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#privacy">{t('privacy_policy')}</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>{t('our_services')}</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">{t('retail_selling')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">{t('wholesale')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">{t('installation_assembly')}</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">{t('product_consultation')}</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>{t('newsletter')}</h4>
              <p>{t('newsletter_prompt')}</p>
              <form onSubmit={handleSubscribe} className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" placeholder={t('email_placeholder')}
                    name="Email" value={Email} 
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={80} 
                    required 
                  />
                  <input type="submit" value={t('subscribe')} />
                </div>
                {loading && <div className="loading d-block">{t('loading')}</div>}
                {errorMessage && <div className="error-message d-block">{errorMessage}</div>}
                {successMessage && <div className="sent-message d-block">{t('subscription_success')}</div>}
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container text-center">
          <p>© <span>{t('copyright')}</span> <strong className="px-1 sitename">Gz</strong> <span>{t('all_rights_reserved')}</span></p>
        </div>
      </div>
    </>
  );
}

export default Part9;
