import React, {useState} from "react";
import '../App.css';
import './Mods.css';

function Part9() {




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
            setErrorMessage(data.message || 'Subscription failed.');
            console.error('Subscription failed:', data.message);
          }
        } catch (error) {
          console.error('Error:', error);
          setErrorMessage('Something went wrong. Please try again later.');
          setLoading(false);
          window.location.reload();
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
                <p>Avenue de l'OUA,</p>
                <p>Bujumbura, Burundi</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+257 711 268 65</span></p>
                <p><strong>Email:</strong> <span>gakwandishops@gmail.com</span></p>
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
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Retail Selling</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Wholesale</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Product installation & assembly</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Consultation</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form onSubmit={handleSubscribe} className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" placeholder="Email address"
                    name="Email" value={Email} 
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={80} 
                    required 
                  />
                  <input type="submit" value="Subscribe" />
                </div>
                {loading && <div className="loading d-block">Loading...</div>}
                {errorMessage && <div className="error-message d-block">{errorMessage}</div>}
                {successMessage && <div className="sent-message d-block">Your subscription request has been sent. Thank you!</div>}
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container text-center">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Gz</strong> <span>All Rights Reserved</span></p>
        </div>
      </div>
    </>
  );
}

export default Part9;
