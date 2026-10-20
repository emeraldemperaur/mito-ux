import aiChatMockup from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/aiComponents.scss';

const AIComponents = () => {
    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer aic-page-container">
                
                <section className="aic-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Generative Interfaces<br/><span className="text-muted">for Agentic Workflows</span>
                    </h1>
                    <p className="aic-lead-text">
                        Purpose-built, context-aware functional components engineered to handle streaming data, Retrieval-Augmented Generation (RAG), and multi-modal autonomous interactions right out of the box.
                    </p>
                </section>

                <section className="aic-spotlight-section">
                    <div className="spotlight-header">
                        <span className="spotlight-badge">Super Component</span>
                        <h2 className="display-heading" style={{fontSize: '2.5rem', marginBottom: '16px'}}>AI Chat Interface</h2>
                        <p className="text-muted" style={{fontSize: '1.125rem', maxWidth: '996px', margin: '0 auto'}}>
                            A resilient, <em>a la carte</em> chat UI designed specifically for RAG architectures. It natively manages complex state boundaries, streaming lockouts, and hidden prompt context injection while providing a pixel-perfect user experience.
                        </p>
                    </div>

                    <div className="aic-feature-grid">
                        
                        <div className="feature-card">
                            <div className="card-icon"><i className="fa-solid fa-window-maximize"></i></div>
                            <h3>Session Header</h3>
                            <p>Dynamic top-level navigation displaying active Brand/Model iconography alongside real-time session metadata and telemetry.</p>
                        </div>

                        <div className="feature-card">
                            <div className="card-icon"><i className="fa-regular fa-comments"></i></div>
                            <h3>Multi-Modal Chat Window</h3>
                            <p>Intelligently renders distinct agent vs. user interaction bubbles with customizable role avatars. Natively supports <strong>RAG citation chips</strong> and embeds inline viewers for generated artifacts (images, video, and audio).</p>
                        </div>

                        <div className="feature-card">
                            <div className="card-icon"><i className="fa-solid fa-terminal"></i></div>
                            <h3>Dynamic Input Console</h3>
                            <p>A highly responsive command center featuring Prompt Template dropdowns, auto-resizing text areas, and intelligent state management that automatically blocks user input collisions during model streaming/processing.</p>
                        </div>

                        <div className="feature-card wide-card">
                            <div className="card-icon"><i className="fa-solid fa-link"></i></div>
                            <div className="card-content">
                                <h3>Context Injection & Extensible Actions</h3>
                                <p>The Input Console houses powerful action buttons designed to seamlessly enrich the LLM's knowledge base without cluttering the UI:</p>
                                <ul className="feature-list">
                                    <li><strong>File Attachments:</strong> Injects local file paths directly into the model prompt as hidden system context.</li>
                                    <li><strong>Weblink Validation:</strong> Captures and validates URLs, storing them in component state to be passed as hidden context for web-scraping agents.</li>
                                    <li><strong>Custom Actions:</strong> Complete extensibility to bind bespoke enterprise tools and listeners to the input console.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="aic-showcase-section">
                    <div className="showcase-sliding-bg"></div>
                    
                    <div className="showcase-mockup-wrapper">
                        <div className="mockup-header">
                            <span className="dot r"></span>
                            <span className="dot y"></span>
                            <span className="dot g"></span>
                            <span className="mockup-title">ai-component.tsx</span>
                        </div>
                        <img src={aiChatMockup} alt="AI Chat Interface Mockup" className="ui-mockup-img" />
                    </div>
                </section>

            </div>
        </main>
    )
}

export default AIComponents;