import './CTABanner.css';
import './CTABanner.css';

const CTABanner = () => {
    return (
        <section id="contact" className="cta-banner">
            <div className="cta-decorator"></div>
            <h2 className="cta-heading">Ready to Build Something Lasting?</h2>
            <p className="cta-subtext">Contact our team today to discuss your next landmark project.</p>
            <div className="cta-actions">
                <button className="primary-btn">Start Your Project</button>
                <button className="secondary-btn">View Our Process</button>
            </div>
        </section>
    );
};

export default CTABanner;
