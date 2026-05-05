import { siteConfig } from '../data/siteData';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="page-hero">
                <div className="container">
                    <span className="section-label">GET IN TOUCH</span>
                    <h1 className="page-title">Contact Us</h1>
                </div>
            </div>
            
            <div className="contact-page-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <div className="contact-item">
                                <span className="contact-label">Email</span>
                                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Phone</span>
                                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Address</span>
                                <span>{siteConfig.address}</span>
                            </div>
                        </div>
                        
<form className="contact-form">
                             <div className="form-group">
                                 <input type="text" placeholder="Name" required />
                             </div>
                             <div className="form-group">
                                 <input type="email" placeholder="Email" required />
                             </div>
                             <div className="form-group">
                                 <input type="text" placeholder="Subject" required />
                             </div>
                             <div className="form-group">
                                 <textarea placeholder="Message" rows="5" required></textarea>
                             </div>
                             <button type="submit" className="submit-btn">Send Message</button>
                         </form>
                     </div>
                 </div>
             </div>
             <Footer />
         </div>
    );
};

export default ContactPage;