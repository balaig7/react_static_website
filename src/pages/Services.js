import service8 from '../assets/img/services/services-8.webp';

export default function Services() {
    return (
        <section id="services" className="services section">

            <div className="container section-title" data-aos="fade-up">
                <span className="description-title">Services</span>
                <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="services-container">
                <div className="row g-4">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="bi bi-code-slash"></i>
                        </div>
                        <div className="service-content">
                        <span className="service-number">01</span>
                        <h3 className="service-title">Custom Application Development</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.</p>
                        <a href="#" className="service-link">
                            Learn More
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="bi bi-bar-chart"></i>
                        </div>
                        <div className="service-content">
                        <span className="service-number">02</span>
                        <h3 className="service-title">Strategic Business Planning</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.</p>
                        <a href="#" className="service-link">
                            Learn More
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="bi bi-palette"></i>
                        </div>
                        <div className="service-content">
                        <span className="service-number">03</span>
                        <h3 className="service-title">Brand &amp; Identity Design</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.</p>
                        <a href="#" className="service-link">
                            Learn More
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item">
                        <div className="service-icon">
                        <i className="bi bi-megaphone"></i>
                        </div>
                        <div className="service-content">
                        <span className="service-number">04</span>
                        <h3 className="service-title">Digital Marketing &amp; SEO</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu. Duis pellentesque.</p>
                        <a href="#" className="service-link">
                            Learn More
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="cta-wrapper mt-5 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                    <div className="cta-box">
                        <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="cta-image" data-aos="zoom-in" data-aos-delay="200">
                            <img src={service8} alt="Services" className="img-fluid rounded-circle"/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cta-content text-lg-start" data-aos="fade-left" data-aos-delay="300">
                            <h3>Need a Custom Solution?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <a href="#" className="primary-btn">Schedule a Consultation</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>

        </section>
    );
}