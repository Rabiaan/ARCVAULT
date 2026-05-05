import { useEffect, useRef } from 'react';
import { services } from '../data/siteData';
import * as LucideIcons from 'lucide-react';
import Footer from '../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const cards = sectionRef.current.querySelectorAll('.service-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="services-page">
            <div className="page-hero">
                <div className="container">
                    <span className="section-label">OUR EXPERTISE</span>
                    <h1 className="page-title">Services</h1>
                </div>
            </div>
            
            <div className="services-page-content" ref={sectionRef}>
                <div className="container">
                    <div className="services-grid-page">
                        {services.map((service, index) => {
                            const IconComponent = LucideIcons[service.icon];
                            return (
                                <div 
                                    key={service.id} 
                                    className="service-card reveal" 
                                    style={{ transitionDelay: `${index * 0.1}s` }}
                                >
                                    <div className="service-icon">
                                        {IconComponent ? <IconComponent size={32} strokeWidth={1.5} /> : null}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;