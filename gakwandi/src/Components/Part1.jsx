import React, {useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Mods.css';

function Part1() {

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  const goToAdmin = () => {
    navigate('/admin');
  };


  // When the burger is clicked, this is called
  const toggleMobileMenu = () => {
    const hamburger_container = document.querySelector('.hamburger_container');
    const menu_btn = document.querySelector('.hamburger');
    const mobile_panel = document.querySelector('.Mobile-panel')
    const body_styles = document.querySelector('.index-page');
    
    hamburger_container.classList.toggle('is-active');
    menu_btn.classList.toggle('is-active');
    mobile_panel.classList.toggle('is-active');
    body_styles.classList.toggle('mobile-nav-active');

  };



  // Handling scroll to section and remove panel onclick
  useEffect(() => {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    const hamburger_container = document.querySelector('.hamburger_container');
    const menu_btn = document.querySelector('.hamburger');
    const mobile_panel = document.querySelector('.Mobile-panel')
    const body_styles = document.querySelector('.index-page');

    const navmenuScrollspy = () => {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
          hamburger_container.classList.remove('is-active');
          menu_btn.classList.remove('is-active');
          mobile_panel.classList.remove('is-active');
          body_styles.classList.remove('mobile-nav-active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

    return () => {
      window.removeEventListener('load', navmenuScrollspy);
      document.removeEventListener('scroll', navmenuScrollspy);
    };
  }, []);







  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage.toLowerCase());
  };






  return (
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
        <h1 className="sitename">Gz</h1>
        <span>.</span>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul className="Mobile-panel">
          <li><a href="#hero" className="active">{t('home')}<br /></a></li>
          <li><a href="#about">{t('about')}</a></li>
          <li><a href="#portfolio">{t('portfolio')}</a></li>
          <li><a href="#services">{t('services')}</a></li>
          <li><a href="#contact">{t('contact')}</a></li>
        </ul>
        <div className="hamburger_container">
            <button className="hamburger" onClick={toggleMobileMenu}>
                <div className="bar"></div>
            </button>
        </div>
        <div></div>
      </nav>

      <a className="btn-getstarted" onClick={goToAdmin}>Admin</a>
      <div className="lang-switch-dropdown">
      <select value={language} onChange={handleLanguageChange}>
        <option value="EN">En</option>
        <option value="FR">Fr</option>
      </select>
    </div>
    </div>
  );
}

export default Part1;
