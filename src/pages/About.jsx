import aboutSquare from '../assets/img/about/about-square-15.webp';

export default function About() {
    return (
        <section id="about" className="about section">

        <div className="container section-title" data-aos="fade-up">
            <span className="description-title">About</span>
            <h2>About</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gx-0 gx-lg-5 gy-5 align-items-center">
            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
                <div className="image-wrapper">
                <div className="image-box">
                    <img src={aboutSquare} className="img-fluid" alt="About Image" loading="lazy"/>
                </div>
                <div className="experience-box" data-aos="zoom-in" data-aos-delay="300">
                    <div className="years">15+</div>
                    <div className="text">Years of<br/>Experience</div>
                </div>
                </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <div className="content">
                <div className="section-header">
                    <h2>Empowering Businesses Through Innovative Solutions</h2>
                </div>

                <p className="highlight-text">Agile methodologies drive our collaborative approach, ensuring optimal outcomes across diverse industry verticals.</p>

                <div className="features-list">
                    <div className="feature-item" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box">
                        <i className="bi bi-check2-circle"></i>
                    </div>
                    <div className="text">
                        <h4>Expert Consulting</h4>
                        <p>In today's dynamic market landscape, strategic implementation of emerging technologies drives competitive advantage and sustainable growth trajectories.</p>
                    </div>
                    </div>

                    <div className="feature-item" data-aos="zoom-in" data-aos-delay="400">
                    <div className="icon-box">
                        <i className="bi bi-lightbulb"></i>
                    </div>
                    <div className="text">
                        <h4>Innovative Solutions</h4>
                        <p>Leveraging cutting-edge frameworks and methodologies to deliver scalable solutions that address complex business challenges effectively.</p>
                    </div>
                    </div>

                    <div className="feature-item" data-aos="zoom-in" data-aos-delay="500">
                    <div className="icon-box">
                        <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="text">
                        <h4>Growth Strategy</h4>
                        <p>Our comprehensive approach to digital transformation enables organizations to achieve sustainable competitive advantages in their respective markets.</p>
                    </div>
                    </div>
                </div>

                <div className="cta-buttons">
                    <a href="#" className="btn-learn-more">Learn More</a>
                    <a href="#" className="btn-get-started">Get Started</a>
                </div>
                </div>
            </div>
            </div>

        </div>

        </section>
    );
}