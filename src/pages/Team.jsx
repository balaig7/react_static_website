import personf2 from '../assets/img/person/person-f-2.webp';
import personm7 from '../assets/img/person/person-m-7.webp';
import personf11 from '../assets/img/person/person-f-11.webp';
import personm17 from '../assets/img/person/person-m-14.webp';
import personf13 from '../assets/img/person/person-f-13.webp';
import personm15 from '../assets/img/person/person-m-15.webp';


export default function Team() {

    return (

        <section id="team" className="team section">

            <div className="container section-title" data-aos="fade-up">
                <span className="description-title">Team</span>
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row g-4">

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="team-member">
                    <div className="member-image">
                        <img src={personf2} className="img-fluid" alt="" loading="lazy"/>
                        <div className="social-overlay">
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Emma Rodriguez</h4>
                        <span>Senior Developer</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="team-member">
                    <div className="member-image">
                        <img src={personm7} className="img-fluid" alt="" loading="lazy"/>
                        <div className="social-overlay">
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Michael Torres</h4>
                        <span>Creative Director</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="team-member">
                    <div className="member-image">
                        <img src={personf11} className="img-fluid" alt="" loading="lazy"/>
                        <div className="social-overlay">
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Sarah Mitchell</h4>
                        <span>Project Manager</span>
                        <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="team-member">
                    <div className="member-image">
                        <img src={personm17} className="img-fluid" alt="" loading="lazy" />
                        <div className="social-overlay">
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>David Kim</h4>
                        <span>Business Analyst</span>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="team-member">
                    <div className="member-image">
                        <img src={personf13} className="img-fluid" alt="" loading="lazy" />
                        <div className="social-overlay">
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Lisa Chang</h4>
                        <span>Marketing Lead</span>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="team-member">
                    <div className="member-image">
                        <img src={personm15} className="img-fluid" alt="" loading="lazy"/>
                        <div className="social-overlay">
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Ryan Cooper</h4>
                        <span>Software Engineer</span>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                    </div>
                    </div>
                </div>

                </div>

            </div>

        </section>

    );
}