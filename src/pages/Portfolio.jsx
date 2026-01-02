import portfolio3 from '../assets/img/portfolio/portfolio-3.webp';
import portfolio7 from '../assets/img/portfolio/portfolio-7.webp';
import portfolio5 from '../assets/img/portfolio/portfolio-portrait-5.webp';
import portfolio8 from '../assets/img/portfolio/portfolio-8.webp';
import portfolioPortrait8 from '../assets/img/portfolio/portfolio-portrait-8.webp';
import portfolio9 from '../assets/img/portfolio/portfolio-9.webp';
import portfolio10 from '../assets/img/portfolio/portfolio-10.webp';
import portfolio11 from '../assets/img/portfolio/portfolio-11.webp';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <span className="description-title">Portfolio</span>
                <h2>Portfolio</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">

                <div className="portfolio-filters-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <ul className="portfolio-filters isotope-filters">
                        <li className="filter-active" onClick={filterPortfolioImagesByCategory('*')}>All Projects</li>
                        <li onClick={filterPortfolioImagesByCategory('filter-branding')}>Branding</li>
                        <li onClick={filterPortfolioImagesByCategory('filter-web')}>Web Design</li>
                        <li onClick={filterPortfolioImagesByCategory('filter-print')}>Print Design</li>
                        <li onClick={filterPortfolioImagesByCategory('filter-motion')}>Motion</li>
                    </ul>
                </div>

                <div className="row gy-4 portfolio-grid isotope-container" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio3} className="img-fluid" alt="Brand Identity" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio3} className="glightbox zoom-link" title="Brand Identity Project">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Brand Identity</h3>
                        <p>Corporate branding and visual identity system</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio7} className="img-fluid" alt="E-commerce Platform" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio7} className="glightbox zoom-link" title="E-commerce Platform">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>E-commerce Platform</h3>
                        <p>Modern online shopping experience</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-print">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio5} className="img-fluid" alt="Magazine Design" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio5} className="glightbox zoom-link" title="Magazine Design">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Magazine Design</h3>
                        <p>Editorial layout and typography</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motion">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio8} className="img-fluid" alt="Motion Graphics" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio8} className="glightbox zoom-link" title="Motion Graphics">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Motion Graphics</h3>
                        <p>Animated visual storytelling</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio9} className="img-fluid" alt="Logo Collection" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio9} className="glightbox zoom-link" title="Logo Collection">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Logo Collection</h3>
                        <p>Diverse brand mark explorations</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolioPortrait8} className="img-fluid" alt="Mobile App Design" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolioPortrait8} className="glightbox zoom-link" title="Mobile App Design">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Mobile App Design</h3>
                        <p>User-centered interface design</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-print">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio10} className="img-fluid" alt="Packaging Design" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio10} className="glightbox zoom-link" title="Packaging Design">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Packaging Design</h3>
                        <p>Sustainable product packaging solutions</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-motion">
                    <div className="portfolio-card">
                        <div className="image-container">
                        <img src={portfolio11} className="img-fluid" alt="Brand Animation" loading="lazy"/>
                        <div className="overlay">
                            <div className="overlay-content">
                            <a href={portfolio11} className="glightbox zoom-link" title="Brand Animation">
                                <i className="bi bi-zoom-in"></i>
                            </a>
                            <a href="portfolio-details.html" className="details-link" title="View Project Details">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="content">
                        <h3>Brand Animation</h3>
                        <p>Dynamic brand identity systems</p>
                        </div>
                    </div>
                    </div>

                </div>

                </div>

            </div>

        </section>
    );
}

function filterPortfolioImagesByCategory(category) {
    // alert(e)
}