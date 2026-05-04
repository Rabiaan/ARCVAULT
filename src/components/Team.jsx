import { team } from '../data/siteData';
import './Team.css';

const Team = () => {
    return (
        <section id="team" className="team-section">
            <div className="section-header">
                <span className="section-label">EXECUTIVE TEAM</span>
                <h2 className="section-heading">Our Leadership</h2>
            </div>
            
            <div className="team-grid">
                {team.map((member) => (
                    <div key={member.id} className="team-card">
                        <div className="member-photo-wrapper">
                            {member.image ? (
                                <img src={member.image} alt={member.name} className="member-photo" />
                            ) : (
                                <div className="placeholder-gradient member-photo">
                                    <span className="initials">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                            )}
                        </div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
