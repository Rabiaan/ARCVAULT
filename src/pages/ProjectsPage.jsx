import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/siteData';
import Footer from '../components/Footer';
import './ProjectsPage.css';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');
    const sectionRef = useRef(null);

    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

        useEffect(() => {
            const observerOptions = {
                threshold: 0.05,
                rootMargin: "0px 0px -200px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const cards = sectionRef.current?.querySelectorAll('.stack-card') || [];
            cards.forEach((card, index) => {
                observer.observe(card);
                // Make first 3 cards active by default
                if (index < 3) {
                    card.classList.add('active');
                }
            });

            return () => observer.disconnect();
        }, [filteredProjects]);

    return (
        <div className="projects-page">
            <div className="page-hero">
                <div className="container">
                    <span className="section-label">ICONIC DESTINATIONS</span>
                    <h1 className="page-title">PORTFOLIO</h1>
                    
                    <div className="filter-container">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="projects-page-content" ref={sectionRef}>
                <div className="cards-container">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={`${project.id}-${filter}`} 
                            className="stack-card"
                            style={{ zIndex: index + 1 }}
                        >
                            <div className="card-inner">
                                <div className="card-content">
                                    <div className="card-text">
                                        <span className="card-number">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </span>
                                        <h3 className="card-title">{project.title}</h3>
                                        <span className="card-location">{project.location}</span>
                                        
                                        <p className="card-description">
                                            {project.description}
                                        </p>
                                        
                                        <a href="#" className="view-project-link">
                                            VIEW PROJECT
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                     <div className="card-image-container">
                                         {project.image ? (
                                             <img src={project.image} alt={project.title} className="card-img" />
                                         ) : (
                                             <div className="placeholder-gradient card-img"></div>
                                         )}
                                     </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;