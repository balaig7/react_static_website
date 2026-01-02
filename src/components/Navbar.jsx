  
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">My Website</h1>
                </Link>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link to="/" className="active">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
                <div className="header-social-links">
                    <Link to="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
                    <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                    <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                    <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                </div>
            </div>
        </header>

    );

}
