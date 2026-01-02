import aboutImg from '../assets/img/about/about-15.webp';

export default function Home() {
    return (
        <section id="hero" className="hero section">
        <div className="hero-background">
            <div className="hero-overlay"></div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center text-center">
            <div className="col-lg-10">
                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                <h1>Innovative Business Solutions for Tomorrow</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>

                <div className="hero-btns" data-aos="fade-up" data-aos-delay="300">
                    <a href="#about" className="btn btn-primary">Start Your Journey</a>
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn btn-outline glightbox">
                    <i className="bi bi-play-circle"></i>
                    Watch Demo
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="hero-image-container" data-aos="zoom-in" data-aos-delay="400">
                <div className="hero-image">
                    <img src={aboutImg} alt="Business Innovation" className="img-fluid"/>
                    <div className="image-decoration"></div>
                </div>
                </div>
            </div>
            </div>

            <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                <div className="stat-item">
                    <div className="stat-icon">
                    <i className="bi bi-trophy"></i>
                    </div>
                    <h3><span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter">25</span>+</h3>
                    <p>Awards Won</p>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">
                    <i className="bi bi-people"></i>
                    </div>
                    <h3><span data-purecounter-start="0" data-purecounter-end="850" data-purecounter-duration="1" className="purecounter">850</span>+</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">
                    <i className="bi bi-lightning"></i>
                    </div>
                    <h3><span data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="1" className="purecounter">95</span>%</h3>
                    <p>Project Success</p>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">
                    <i className="bi bi-globe"></i>
                    </div>
                    <h3><span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter">12</span>+</h3>
                    <p>Countries Served</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}