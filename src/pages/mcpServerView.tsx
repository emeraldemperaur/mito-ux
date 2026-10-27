import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/mitoMCP.scss'; 

const MitoMCP = () => {
    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer mcp-page-container">
                
                <section className="mcp-hero-section">
                    <h1 className="display-heading">Mito Model Context Protocol<br/><span className="text-muted">(MCP) Server</span></h1>
                    <p className="mcp-lead-text">
                        The Vanguard of AI-Context Integration. Empower your autonomous AI agents to rapidly and reliably generate secure, zero-trust backend infrastructure alongside predictable, production-ready frontend code.
                    </p>
                    <p className="mcp-sub-text">
                        By feeding strict, typed domain context directly into your AI tooling, Mito MCP eliminates hallucinations and grounds Generative AI responses in reality.
                    </p>
                </section>

                <section className="mcp-section">
                    <div className="section-header">
                        <h2 className="display-heading" style={{fontSize: '2.5rem'}}>Dual Transport Modes</h2>
                        <p className="text-muted">Flexible infrastructure engineered for both local IDEs and cloud-hosted enterprise agents.</p>
                    </div>
                    
                    <div className="transport-grid">
                        <div className="transport-card">
                            <div className="transport-icon stdio-icon"><i className="fa-solid fa-terminal"></i></div>
                            <h3>Localhost (stdio)</h3>
                            <p>Direct standard input/output streaming. Ideal for local agentic development environments like Cursor, Windsurf, and VS Code extensions. Ensures zero-latency context injection directly on your machine.</p>
                        </div>
                        <div className="transport-card">
                            <div className="transport-icon http-icon"><i className="fa-solid fa-server"></i></div>
                            <h3>Remote (Streamable HTTP)</h3>
                            <p>Server-Sent Events (SSE) over standard HTTP. Designed for cloud-hosted autonomous agents, enterprise VPC deployments, and multi-tenant AI applications requiring strict authentication boundaries.</p>
                        </div>
                    </div>
                </section>

                <section className="mcp-section">
                    <h2 className="display-heading" style={{fontSize: '2.5rem', marginBottom: '40px'}}>Core Architectural Features</h2>
                    <div className="architecture-grid">
                        <div className="arch-item">
                            <h4>Seamless Authentication</h4>
                            <p>Utilizes PKCE to deliver a frictionless user experience, enabling secure credentialed access without complex security configurations.</p>
                        </div>
                        <div className="arch-item">
                            <h4>Generative Frontend Components</h4>
                            <p>Streams architectural blueprints directly into your IDE, allowing agents to scaffold pixel-perfect Mito UI React components.</p>
                        </div>
                        <div className="arch-item">
                            <h4>Backend MCP Templates</h4>
                            <p>Transforms isolated components into full-stack solutions, intrinsically pairing your UI with secure zero-trust backend infrastructure.</p>
                        </div>
                    </div>
                </section>

                <section id='mcp-pricing' className="mcp-pricing-section">
                    <div className="pricing-card-surface">
                        <div className="pricing-header">
                            <span className="pricing-badge">Commercial License</span>
                            <h2>Mito MCP Enterprise Key</h2>
                            <p>Unlock unrestricted access to the Mito MCP server binary, premium templates, and future transport mode updates.</p>
                        </div>
                        <div className="pricing-cost">
                            <span className="currency">$</span>
                            <span className="amount">199</span>
                            <span className="currency">USD</span>
                        </div>
                        <p className="pricing-terms">One-time payment. Lifetime access.</p>
                        
                        <div className="pricing-action">
                            <a href="https://your-subscription-portal-url.com" target="_blank" rel="noopener noreferrer" className="btn-primary buy-btn" style={{ fontFamily: 'Quicksand' }}>
                                Buy MCP License Key <i className="fa-solid fa-arrow-up-right-from-square" style={{marginLeft: '8px', fontSize: '0.85em'}}></i>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default MitoMCP;