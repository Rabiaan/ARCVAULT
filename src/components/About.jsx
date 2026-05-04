import { aboutContent } from '../data/siteData';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-image-panel">
                {aboutContent.image ? (
                    <img src={aboutContent.image} alt="About ARCVAULT" className="about-img" />
                ) : (
                    <div className="placeholder-gradient about-img">
                        <span className="placeholder-text">Est. 2006</span>
                    </div>
                )}
            </div>
            
            <div className="about-content-panel">
                <span className="section-label">SINCE 2006</span>
                <h2 className="section-heading">{aboutContent.heading}</h2>
                
                <div className="about-body">
                    {aboutContent.body.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>

                <div className="milestones-timeline">
                    {aboutContent.milestones.map((milestone, index) => (
                        <div key={index} className="milestone-item">
                            <div className="milestone-year">{milestone.year}</div>
                            <div className="milestone-marker">
                                <div className="milestone-dot"></div>
                                {index !== aboutContent.milestones.length - 1 && <div className="milestone-line"></div>}
                            </div>
                            <div className="milestone-event">{milestone.event}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
