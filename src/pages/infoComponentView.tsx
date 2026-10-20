import mockupModal from '../assets/agentic-icon.png'; 
import mockupFeedback from '../assets/agentic-icon.png'; 
import mockupUser from '../assets/agentic-icon.png'; 
import mockupVariant from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/infoComponents.scss';

const InfoComponents = () => {
    const modalTypes = ["BottomModal", "BottomRightModal", "FullScreenModal", "ExtraLargeModal"];
    const feedbackTypes = ["Alerts", "Toasts", "Badges", "Breadcrumbs"];
    const variantTypes = ["Material", "Outline", "Neumorphic"];
    const layoutTypes = ["ErrorBoundary", "Accordion", "Codex (Stepper)", "Container", "Row", "Column"];

    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer info-page-container">
                
                <section className="info-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Contextual Feedback<br/><span className="text-muted">& Transient Interfaces</span>
                    </h1>
                    <p className="info-lead-text">
                        A comprehensive suite of fluid modals, non-blocking informational alerts, and deeply integrated SaaS profile cards designed to orchestrate complex user flows without disrupting the primary view.
                    </p>
                </section>

                <section className="info-feature-grid">
                    
                    <div className="feature-card wide-card highlight-card">
                        <div className="card-icon"><i className="fa-solid fa-id-card-clip"></i></div>
                        <div className="card-content">
                            <h3>SaaS User Profile Architecture</h3>
                            <p>Pre-wired, enterprise-grade account profile components designed specifically for SaaS platforms. Seamlessly integrates with payment and subscription orchestration (Stripe, Flutterwave) using built-in lifecycle hooks:</p>
                            <div className="pill-grid">
                                <span className="action-pill">onSubscribe()</span>
                                <span className="action-pill">onCancelSubscription()</span>
                                <span className="action-pill">onRenewSubscription()</span>
                                <span className="action-pill">onUpdatePayment()</span>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-regular fa-window-restore"></i></div>
                        <h3>Fluid Modals</h3>
                        <p>High-performance overlay architecture for seamlessly rendering CRUD forms or expansive data views. Includes built-in positive/negative action bindings.</p>
                        <div className="pill-grid small-pills" style={{ marginTop: '16px' }}>
                            {modalTypes.map((type, idx) => <span key={idx} className="data-pill">{type}</span>)}
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
                        <h3>System Feedback</h3>
                        <p>Compact, non-blocking informational components for system telemetry, state changes, and user guidance. Includes context-aware severity states (Success, Info, Warning, Error).</p>
                        <div className="pill-grid small-pills" style={{ marginTop: '16px' }}>
                            {feedbackTypes.map((type, idx) => <span key={idx} className="data-pill">{type}</span>)}
                        </div>
                    </div>

                    <div className="feature-card wide-card">
                        <div className="card-icon"><i className="fa-solid fa-layer-group"></i></div>
                        <div className="card-content">
                            <h3>Structural Layout</h3>
                            <p>Agile and responsive structural components engineered for an enterprise-grade aesthetic layout and flawless UX geometry.</p>
                            <div className="pill-grid">
                                {layoutTypes.map((type, idx) => (
                                    <span key={idx} className="data-pill">{type}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="feature-card wide-card variants-card">
                        <div className="card-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                        <div className="card-content">
                            <h3>Agnostic Design Variants</h3>
                            <p>Every modal, alert, and profile component is thoroughly styled across three distinct enterprise aesthetics, allowing you to instantly align the library with your brand's specific visual language.</p>
                            <div className="pill-grid">
                                {variantTypes.map((variant, idx) => (
                                    <span key={idx} className="variant-pill">{variant} Theme</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="info-showcase-section">
                    <div className="showcase-sliding-bg"></div>
                    
                    <div className="showcase-mockup-grid">
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">modal-orchestrator.tsx</span>
                            </div>
                            <img src={mockupModal} alt="Modals UI Mockup" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">system-toast-feedback.tsx</span>
                            </div>
                            <img src={mockupFeedback} alt="System Feedback UI Mockup" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">saas-user-profile.tsx</span>
                            </div>
                            <img src={mockupUser} alt="SaaS User Profile UI Mockup" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">design-variants-preview.tsx</span>
                            </div>
                            <img src={mockupVariant} alt="Design Variants Mockup" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default InfoComponents;