import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/raisonDetre.scss';
import ParticleOrb from "../components/ParticleOrb";

const RaisonDetre = () => {
    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer rd-page-container">
                
                <section className="rd-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Architecting<br/><span className="text-muted">Next-Generation Interfaces</span>
                    </h1>
                    <p className="rd-lead-text">
                        At the intersection of deterministic engineering and generative AI.
                    </p>
                </section>

                <section className="rd-philosophy-split">
                    <div className="rd-text-column">
                        <h2 className="rd-subheading">Engineering the Modern Interface</h2>
                        <p>
                            Vanguard software engineering requires a delicate balance: front-end elegance backed by strict, zero-trust backend logic. Mito UI is built on the philosophy of developer empowerment and equipping creators with tools that elevate the digital medium without compromising on security or scalability.
                        </p>
                        <p>
                            By merging deterministic UI architecture with non-deterministic AI models, it proffers a standard for frontend components and backend infrastructure that is structurally reliable, highly extensible and intuitively designed for the agentic web.
                        </p>
                    </div>
                    <div className="rd-graphic-column">
                        <div className="pedestal-glass">
                            <ParticleOrb 
                                width="100%" 
                                height="100%" 
                                orbSize={150} 
                                baseHue={280}
                                particleCount={250} 
                            />
                        </div>
                    </div>
                </section>

                <section className="rd-developer-section">
                    <h2 className="display-heading text-center" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>
                        Connect & Collaborate
                    </h2>
                    <div className="rd-social-grid">
                        <a href="https://github.com/emeraldemperaur" target="_blank" rel="noopener noreferrer" className="rd-social-card">
                            <div className="icon-wrapper"><i className="fa-brands fa-github"></i></div>
                            <div className="social-info">
                                <span className="platform">GitHub</span>
                                <span className="handle">@emeraldemperaur</span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/emekaegwimdeveloper/" target="_blank" rel="noopener noreferrer" className="rd-social-card">
                            <div className="icon-wrapper"><i className="fa-brands fa-linkedin-in"></i></div>
                            <div className="social-info">
                                <span className="platform">LinkedIn</span>
                                <span className="handle">Meka Egwim</span>
                            </div>
                        </a>
                        
                        <a href="https://instagram.com/chromito.me" target="_blank" rel="noopener noreferrer" className="rd-social-card">
                            <div className="icon-wrapper"><i className="fa-brands fa-instagram"></i></div>
                            <div className="social-info">
                                <span className="platform">Instagram</span>
                                <span className="handle">@chromito.me</span>
                            </div>
                        </a>
                        
                        <a href="mailto:me@mekaegwim.ca" className="rd-social-card">
                            <div className="icon-wrapper"><i className="fa-solid fa-envelope"></i></div>
                            <div className="social-info">
                                <span className="platform">Email</span>
                                <span className="handle">me@mekaegwim.ca</span>
                            </div>
                        </a>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default RaisonDetre;