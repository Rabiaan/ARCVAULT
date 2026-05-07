import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteData';
import './Navbar.css';

const navLinksWithRoutes = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                const heroSection = document.getElementById('home');
                if (heroSection) {
                    const heroBottom = heroSection.getBoundingClientRect().bottom;
                    setScrolled(heroBottom < 80);
                } else {
                    setScrolled(window.scrollY > 50);
                }
            } else {
                setScrolled(window.scrollY > 50);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className={`nav-container ${scrolled ? 'shrunken' : ''}`}>
                <div className="nav-logo">
                    <Link to="/">{siteConfig.company}</Link>
                </div>
                
                <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    {navLinksWithRoutes.map((link) => (
                        <Link 
                            key={link.label} 
                            to={link.path} 
                            onClick={() => setMobileMenuOpen(false)}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions">
                    <button className="quote-btn">Get a Quote</button>
                    <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;