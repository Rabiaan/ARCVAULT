import { testimonials } from '../data/siteData';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="section-header">
                <span className="section-label">TESTIMONIALS</span>
                <h2 className="section-heading">Client Success</h2>
            </div>
            
            <div className="testimonials-grid">
                {testimonials.map((t) => (
                    <div key={t.id} className="testimonial-card glass">
                        <div className="quote-mark">"</div>
                        <p className="quote-text">{t.quote}</p>
                        <div className="quote-author">
                            <div className="author-name">{t.author}</div>
                            <div className="author-role">{t.company}, {t.location}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
