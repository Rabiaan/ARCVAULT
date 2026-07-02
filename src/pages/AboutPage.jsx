import { ArrowRight, Star, CheckCircle, Clock, DollarSign, MessageCircle, Shield, Eye } from 'lucide-react';
import Footer from '../components/Footer';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container">
                {/* ── Hero Section ── */}
                <header className="about-hero">
                    <div className="about-hero-left">
                        <h1>PREMIUM PROPERTY <span className="highlight">TRANSFORMATION</span> IN THE ALGARVE.</h1>
                        <p className="hero-desc">
                            You've bought your dream home in Portugal. Now let's make it livable. 
                            We bring European standards, transparent pricing, and Belgium expertise 
                            to your Algarve renovation project.
                        </p>
                        <div className="hero-btns">
                            <button className="btn-primary">
                                Start Your Project <ArrowRight size={18} />
                            </button>
                            <button className="btn-secondary">
                                <Eye size={18} /> View Transformations
                            </button>
                        </div>
                    </div>
                    <div className="about-hero-right">
                        <p className="hero-right-text">
                            Don't let "Portuguese timing" and language barriers ruin your investment. 
                            We offer detailed quotes, English communication, and high-end finishing 
                            for international buyers.
                        </p>
                        <div className="hero-stat-cards">
                            <div className="hero-stat-card">
                                <span className="stat-val">15+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="hero-stat-card">
                                <span className="stat-val">100%</span>
                                <span className="stat-label">English Speaker</span>
                            </div>
                            <div className="hero-stat-card">
                                <span className="stat-val">Fixed</span>
                                <span className="stat-label">Price & Time</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ── Image Grid ── */}
                <div className="image-grid">
                    <div className="grid-item">
                        {/* 
                            IMAGE PROMPT: A high-end modern minimalist white villa in the Algarve Portugal, 
                            stone pathway leading to the entrance, dry mediterranean landscape, 
                            luxury real estate photography, golden hour.
                        */}
                        <img src="/images/about_hero_left.png" alt="Modern Algarve Villa" />
                        <div className="be-pt-badge">
                            <h3>BE/PT</h3>
                            <p>Belgium Expertise, Algarve Based</p>
                            <div className="badge-icon">
                                <Shield size={14} /> Fully Insured Excellence
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        {/* 
                            IMAGE PROMPT: Modern architecture A-frame style home with large glass windows, 
                            brick and wood facade, evening lighting, luxury residential design.
                        */}
                        <img src="/images/about_hero_right.png" alt="A-frame Modern Home" />
                        <div className="rating-badge">
                            <Star size={16} fill="#fcc419" /> 
                            <span>4.9/5 Expat Satisfaction</span>
                        </div>
                    </div>
                </div>

                <p className="grid-footer-text">
                    ARCVAULT is your bridge between Northern European expectations and Southern European charm. 
                    We handle everything from outdated kitchens to full property modernizations.
                </p>

                {/* ── Features Row ── */}
                <div className="features-row">
                    <div className="feature-card">
                        <div className="feature-icon"><Clock color="#fff" /></div>
                        <h4>Fixed Timelines</h4>
                        <p>We respect deadlines with contractual penalties for delays.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><DollarSign color="#fff" /></div>
                        <h4>Transparent Pricing</h4>
                        <p>Detailed breakdowns. No surprise budget explosions halfway through.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><MessageCircle color="#fff" /></div>
                        <h4>English Communication</h4>
                        <p>We speak your language. Follow your project from abroad with ease.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><Shield color="#fff" /></div>
                        <h4>Belgium Expertise</h4>
                        <p>15 years of high-end construction experience brought to Portugal.</p>
                    </div>
                </div>

                {/* ── Problem/Solution Section ── */}
                <div className="problem-solution">
                    <div className="ps-left">
                        <h2>We fix the problem every new buyer faces: finding a contractor you can trust.</h2>
                        <p className="ps-desc">
                            Local contractors don't return calls. Quotes vary wildly. "Portuguese timing" 
                            drives you crazy. ARCVAULT changes the narrative with professional management 
                            and European quality standards.
                        </p>
                        <div className="ps-btns">
                            <button className="btn-primary">Get a Proposal</button>
                            <button className="btn-secondary">Our Process</button>
                        </div>
                        <div className="ps-stats">
                            <div className="ps-stat-card">
                                <h5>73%</h5>
                                <span>Buyers Frustrated</span>
                            </div>
                            <div className="ps-stat-card">
                                <h5>100%</h5>
                                <span>Success Rate</span>
                            </div>
                            <div className="ps-stat-card">
                                <h5>5-Star</h5>
                                <span>Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="ps-right">
                        {/* 
                            IMAGE PROMPT: High-end luxury modern home renovation exterior, 
                            clean lines, large windows, landscaped garden, architectural photography.
                        */}
                        <img src="/images/about_bottom_section.png" alt="Home Transformation" />
                        <div className="ps-badge">
                            <CheckCircle size={16} color="#2ecc71" /> Bathroom upgraded in 14 days
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;