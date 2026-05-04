import { useEffect, useRef } from 'react';
import { services } from '../data/siteData';
import * as LucideIcons from 'lucide-react';
import './Services.css';

const Services = () => {
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
        <section id="services" className="services-section" ref={sectionRef}>
            <div className="section-header">
                <span className="section-label">OUR EXPERTISE</span>
                <h2 className="section-heading">Services</h2>
            </div>
            <div className="services-grid">
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
        </section>
    );
};

export default Services;
