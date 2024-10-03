import React, { useEffect } from "react";
import '../App.css';
import './Mods.css';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import 'swiper/swiper-bundle.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';




function initSwiperWithCustomPagination(swiperElement, config) {
  config.pagination = {
    el: swiperElement.querySelector('.swiper-pagination'),
    clickable: true
  };
  new Swiper(swiperElement, config);
}



function Part6() {












// -------------- Portfolio products animations and filtering ---------------------------------------------------
// -------------- Portfolio products animations and filtering ---------------------------------------------------
// -------------- Portfolio products animations and filtering ---------------------------------------------------


  useEffect(() => {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
        });
      });
    });
  }, []);


  useEffect(() => {
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }

    // Call initSwiper when the component mounts
    initSwiper();
  }, []);


  useEffect(() => {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }, []);



















  return (
    // Portfolio Section
    <section id="portfolio" className="portfolio section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Check our Portfolio</p>
      </div> {/* End Section Title */}

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul> {/* End Portfolio Filters */}

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div> {/* End Portfolio Item */}

          </div> {/* End Portfolio Container */}

        </div>

      </div>

    </section> // End Portfolio Section
  );
}

export default Part6;
