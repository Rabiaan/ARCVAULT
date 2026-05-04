import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/siteData';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const sectionRef = useRef(null);

    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const cards = sectionRef.current.querySelectorAll('.project-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects-section" ref={sectionRef}>
            <div className="section-header">
                <span className="section-label">OUR PORTFOLIO</span>
                <h2 className="section-heading">Featured Projects</h2>
            </div>

            <div className="filter-bar">
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

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div 
                        key={project.id} 
                        className={`project-card ${project.size} reveal`}
                    >
                        <div className="project-image-wrapper">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="project-img" />
                            ) : (
                                <div className="placeholder-gradient project-img">
                                    <span>{project.title}</span>
                                </div>
                            )}
                            <div className="project-overlay glass">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-info">
                                    <span>{project.location}</span>
                                    <span className="dot">•</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
