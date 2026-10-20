import mockupAuth1 from '../assets/agentic-icon.png'; 
import mockupAuth2 from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/authComponents.scss';

const AuthComponents = () => {
    const promiseHooks = [
        "onSignIn()", "onSignUp()", "onVerifyCode()", 
        "onResendCode()", "onForgotPassword()"
    ];

    const configProps = [
        "signInVerificationCode", "signUpVerificationCode", "brandLogo", "brandTitle"
    ];

    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer auth-page-container">
                
                <section className="auth-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Zero-Trust Identity<br/><span className="text-muted">& Access Architecture</span>
                    </h1>
                    <p className="auth-lead-text">
                        Customizable, strictly WCAG-compliant components that orchestrate complex authentication flows. Engineered for immediate integration with enterprise IAM platforms through declarative props and asynchronous lifecycle hooks.
                    </p>
                </section>

                <section className="auth-feature-grid">
                    
                    <div className="feature-card highlight-card">
                        <div className="card-icon"><i className="fa-solid fa-fingerprint"></i></div>
                        <div className="card-content">
                            <h3>Declarative Configuration</h3>
                            <p>Instantly adapt the UI to your security requirements. Toggle complex flows like Multi-Factor Authentication (MFA) or biometric prompts using simple boolean convenience props, while passing custom branding on the fly.</p>
                            <div className="pill-grid" style={{ marginTop: '16px' }}>
                                {configProps.map((prop, idx) => (
                                    <span key={idx} className="data-pill">{prop}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-solid fa-table-columns"></i></div>
                        <div className="card-content">
                            <h3>Dynamic Layout Topologies</h3>
                            <p>A highly extensible <code>layout</code> prop facilitates the immediate rendering of distinct architectural variants. Seamlessly pivot between split-pane, centered modal, or full-bleed identity flows without rewriting core logic.</p>
                        </div>
                    </div>

                    <div className="feature-card wide-card hooks-card">
                        <div className="card-icon"><i className="fa-solid fa-link"></i></div>
                        <div className="card-content">
                            <h3>Asynchronous Lifecycle Integration</h3>
                            <p>Built to interface seamlessly with modern IAM providers (AWS Cognito, Firebase, Auth0). Handle credential submission, OTP validation, and recovery gracefully using strongly-typed promise function props:</p>
                            
                            <div className="pill-grid dense-pill-grid">
                                {promiseHooks.map((hook, idx) => (
                                    <span key={idx} className="action-pill">{hook}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="auth-showcase-section">
                    <div className="showcase-sliding-bg"></div>
                    
                    <div className="showcase-mockup-grid">
                        
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">auth-split-layout.tsx</span>
                            </div>
                            <img src={mockupAuth1} alt="Split Layout Auth UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>

                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">auth-modal-layout.tsx</span>
                            </div>
                            <img src={mockupAuth2} alt="Centered Modal Auth UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>

                    </div>
                </section>

            </div>
        </main>
    )
}

export default AuthComponents;