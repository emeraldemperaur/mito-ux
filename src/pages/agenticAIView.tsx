import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/agenticAI.scss';

const AgenticAIView = () => {
    return (
        <main className="maison-enterprise-layout">
            
            {/* Cinematic Background */}
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer agentic-page-container">
                
                {/* Hero Section */}
                <section className="agentic-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Autonomous Orchestration<br/><span className="text-muted">& Goal-Oriented Systems</span>
                    </h1>
                    <p className="agentic-lead-text">
                        Transition from reactive chatbots to proactive reasoning engines. Agentic AI leverages advanced foundation models to autonomously plan, adapt, and execute complex, multi-step workflows with strict enterprise safeguards.
                    </p>
                </section>

                {/* Crash Course Content */}
                <section className="agentic-content-section" id="architecture">
                    
                    <div className="course-card highlight-card">
                        <div className="card-icon"><i className="fa-solid fa-brain"></i></div>
                        <div className="card-content">
                            <h3>What is Agentic AI?</h3>
                            <p style={{ textAlign: 'justify' }}>
                                Agentic artificial intelligence represents the shift from responsive, single-turn language models to autonomous systems capable of executing complex workflows to achieve overarching objectives. These systems dynamically evaluate their environments, utilize external software tools, and independently correct their course without requiring human intervention at every step.
                            </p>
                        </div>
                    </div>

                    <div className="course-grid">
                        <div className="course-card">
                            <div className="card-icon"><i className="fa-solid fa-layer-group"></i></div>
                            <h3>Core Architecture</h3>
                            <p>An AI agent functions on three primary pillars:</p>
                            <ul className="course-list" style={{ textAlign: 'justify' }}>
                                <li><strong>The Brain:</strong> A foundation model (e.g., Amazon Nova or Cohere Command A+) provides reasoning, planning, and task breakdown capabilities.</li>
                                <li><strong>Memory:</strong> Short-term and long-term storage mechanisms track conversation history and past execution outcomes to inform future decisions.</li>
                                <li><strong>Tools:</strong> External APIs and software integrations that allow the agent to mutate data, search knowledge bases, and interact with enterprise infrastructure.</li>
                            </ul>
                        </div>

                        <div className="course-card">
                            <div className="card-icon"><i className="fa-solid fa-shield-halved"></i></div>
                            <h3>Enterprise Applications</h3>
                            <p style={{ textAlign: 'justify' }}>By delegating multi-step tasks to bespoke agentic AI systems, enterprises can radically scale operations. Use cases span from autonomous software generation and testing, business process automation to dynamic customer support resolution and real-time cybersecurity threat mitigation.</p>
                        </div>
                    </div>

                </section>

            </div>
        </main>
    );
};

export default AgenticAIView;