import React, {useEffect} from "react";
import '../App.css';
import './Mods.css';
//import '../../public/assets/js/main.js'

function Part1() {


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







  return (
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
        <h1 className="sitename">Gz</h1>
        <span>.</span>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul className="Mobile-panel">
          <li><a href="#hero" className="active">Home<br /></a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li className="dropdown">
            <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown">
                <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* <i className="mobile-nav-toggle d-xl-none bi bi-list"></i> */}
        <div className="hamburger_container">
            <button className="hamburger" onClick={toggleMobileMenu}>
                <div className="bar"></div>
            </button>
        </div>
        <div></div>
      </nav>

      <a className="btn-getstarted" href="index.html#about">Get Started</a>
    </div>
  );
}

export default Part1;
