import React, { useEffect } from "react";
import '../App.css';
import './Mods.css';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import 'swiper/swiper-bundle.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { renderToString } from 'react-dom/server';




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









// ---------------- Array of portfolio items -----------------------------------------------------------
// ---------------- Array of portfolio items -----------------------------------------------------------
// ---------------- Array of portfolio items ----------------------------------------------------------- 





const PortfolioDescription = ({ imageUrl }) => {
  const handleShopNow = () => {
    const phoneNumber = "+25771126865";
    const message = `How much is this sir? ${imageUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleShopNow}>Shop now</button>  {/* When rendered to string, onclick doesnt work cause component is rendered as a string */}
    </div>
  );
};



const portfolioItems = [
  {
    title: "App 1",
    category: "filter-app",
    image: "assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
    gallery: "portfolio-gallery-app",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" />)
  },
  {
    title: "Product 1",
    category: "filter-product",
    image: "assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
    gallery: "portfolio-gallery-product",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" />)
  },
  {
    title: "Branding 1",
    category: "filter-branding",
    image: "assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
    gallery: "portfolio-gallery-branding",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" />)
  },
  {
    title: "App 2",
    category: "filter-app",
    image: "assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
    gallery: "portfolio-gallery-app",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" />)
  },
  {
    title: "Product 2",
    category: "filter-product",
    image: "assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
    gallery: "portfolio-gallery-product",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" />)
  },
  {
    title: "Branding 2",
    category: "filter-branding",
    image: "assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
    gallery: "portfolio-gallery-branding",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" />)
  },
  {
    title: "App 3",
    category: "filter-app",
    image: "assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
    gallery: "portfolio-gallery-app",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" />)
  },
  {
    title: "Product 3",
    category: "filter-product",
    image: "assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
    gallery: "portfolio-gallery-product",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" />)
  },
  {
    title: "Branding 3",
    category: "filter-branding",
    image: "assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
    gallery: "portfolio-gallery-branding",
    description: renderToString(<PortfolioDescription imageUrl="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" />)
  }
];


















  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Check our Portfolio</p>
      </div>

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, index) => (
                <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                  <img src={item.image} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href={item.image} title={item.title} data-gallery={item.gallery} data-description={item.description} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Part6;
