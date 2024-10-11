import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Mods.css';

function Part8() {
  const { t } = useTranslation();

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleEmailSend = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage(false);
    setLoading(true);
    
    async function sendEmail() {
      try {
        const response = await fetch('https://gakwandi-project.glitch.me/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Name, Email, Subject, Message }),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
          setSuccessMessage(true);
          setTimeout(() => window.location.reload(), 2000);
        } else {
          setErrorMessage(data.message || t('error_message')); 
          console.error('Form submission failed:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage(t('error_message')); 
        setLoading(false);
        window.location.reload();
      }
    }

    sendEmail();
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('contact_title')}</h2> 
        <p>{t('contact_us')}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe 
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3982.92466107285!2d29.350193119049074!3d-3.3685928970193544!3m2!1i1024!2i768!4f13.1!2m1!1sAvenue%20de%20I&#39;Oua%2C%20Bujumbura%2C%20Burundi!5e0!3m2!1sen!2srw!4v1728131851907!5m2!1sen!2srw" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">  
          </iframe>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>{t('address')}</h3> {/* Translation for Address */}
                <p>Avenue de l'OUA, Bujumbura, Burundi</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>{t('call_us')}</h3> {/* Translation for Call Us */}
                <p>+257 711 268 65</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>{t('email_us')}</h3> {/* Translation for Email Us */}
                <p>gakwandishops@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form onSubmit={handleEmailSend} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input className="form-control" 
                    type="text" 
                    name="Name" 
                    value={Name} 
                    onChange={(e) => setName(e.target.value)}
                    maxLength={20} 
                    placeholder={t('your_name')} // Translation for Your Name
                    required 
                  />
                </div>

                <div className="col-md-6">
                  <input className="form-control" 
                    type="email" 
                    name="Email" 
                    value={Email} 
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={80} 
                    placeholder={t('your_email')} // Translation for Your Email
                    required 
                  />
                </div>

                <div className="col-md-12">
                  <input className="form-control"
                    type="text" 
                    name="Subject" 
                    value={Subject} 
                    onChange={(e) => setSubject(e.target.value)}
                    maxLength={50}
                    placeholder={t('subject')} // Translation for Subject
                    required 
                  />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" 
                    name="Message" 
                    value={Message} 
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={1000} 
                    rows="6" 
                    placeholder={t('message')} // Translation for Message
                    required>
                  </textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading d-block">{t('loading')}</div>} {/* Translation for Loading */}
                  {errorMessage && <div className="error-message d-block">{errorMessage}</div>} {/* Translation for Error Message */}
                  {successMessage && <div className="sent-message d-block">{t('success_message')}</div>} {/* Translation for Success Message */}

                  {!loading && (
                    <button type="submit">
                      {t('send_message')} {/* Translation for Send Message */}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Part8;
