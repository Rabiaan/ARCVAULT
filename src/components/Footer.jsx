import { siteConfig, navLinks, services } from '../data/siteData';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-col col-main">
                    <h2 className="footer-logo">{siteConfig.company}</h2>
                    <p className="footer-tagline">{siteConfig.subtagline}</p>
                    <div className="footer-contact">
                        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                        <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Company</h4>
                    <ul className="footer-list">
                        {navLinks.slice(0, 4).map(link => (
                            <li key={link.label}><a href={link.href}>{link.label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Services</h4>
                    <ul className="footer-list">
                        {services.slice(0, 3).map(service => (
                            <li key={service.id}><a href="#services">{service.title}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-col-title">Connect</h4>
                    <div className="footer-social">
                        {Object.entries(siteConfig.social).map(([platform, link]) => (
                            <a key={platform} href={link} className="social-link" target="_blank" rel="noopener noreferrer">
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} {siteConfig.company}. All rights reserved.</p>
                <p className="footer-crafted">Crafted by FrameGen</p>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
