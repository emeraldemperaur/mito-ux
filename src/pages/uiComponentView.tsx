import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getLogo } from '../utils/artificer'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/uiComponents.scss';

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <h3 className="accordion-title">{title}</h3>
        <span className="accordion-icon">{isOpen ? '×' : '+'}</span>
      </div>
      <div className="accordion-content-wrapper" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
};

const UIComponents = ({ darkMode }: { darkMode: boolean }) => {
    const [openInstallId, setOpenInstallId] = useState<number | null>(0);
    const [openBackendId, setOpenBackendId] = useState<number | null>(null);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const toggleInstall = (id: number) => setOpenInstallId(openInstallId === id ? null : id);
    const toggleBackend = (id: number) => setOpenBackendId(openBackendId === id ? null : id);
    
    const handleCopy = (text: string, id: number) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };  

    const backendTemplates = [
        { cat: 'AI', tech: 'AdaCX, Amazon Bedrock, Amazon Sagemaker, Amplify AI, LangChain, Vercel AI, Watsonx, SpaceXSI' },
        { cat: 'Authentication', tech: 'AWS Amplify, Biometrics, Cognito, Crypto Wallet, OpenID Federated, Firebase, Passkey' },
        { cat: 'Billing', tech: 'Flutterwave, Flutterwave Webhooks, Paystack, Paystack Webhooks, Stripe, Stripe Webhooks' },
        { cat: 'Communication', tech: 'Mailchimp, Mailer Lite, SMTP Transporter, Twilio' },
        { cat: 'Data', tech: 'Airflow, AppSync, DynamoDB, MongoDB, PostgreSQL, Redis, Snowflake' },
        { cat: 'Ecommerce', tech: 'Big Commerce, Merchant, Orders, Rentals, Reviews, Shopify, Shopping Carts, Wishlists' },
        { cat: 'Error Handling', tech: 'Database Errors, HTTP Errors' },
        { cat: 'Identity', tech: 'Amazon Rekognition, Clerk, Cognito, Jumio, Plaid, Trulioo' },
        { cat: 'Logging', tech: 'CloudWatch, Datadog, Dynatrace, Grafana, Logger, Splunk' },
        { cat: 'Notifications', tech: 'Amazon Event Bridge, Amazon SNS, Amazon SQS, Apache Kafka, RabbitMQ' },
        { cat: 'Security', tech: 'JWT, OAuth, OTP, Passport.js' },
        { cat: 'Services', tech: 'Atlassian, ButterflyMX, n8n, Notion, OpenTable, Salesforce, Zapier' },
        { cat: 'Storage', tech: 'Airtable, Firebase, S3, S3 Vectors' },
        { cat: 'Validation', tech: 'Credit Card, Date, Email, IRD, NINO, NIR, North America, RICN, SPI, TFN, WestAfrican NIN' }
    ];

    return (
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer uic-page-container">
                
                <section className="uic-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        The Architect's<br/><span className="text-muted">Component Suite</span>
                    </h1>
                    <p className="uic-lead-text">
                        A vanguard collection of generative-ready interfaces, resilient controls, and strict backend templates designed for autonomous AI tooling and enterprise scaling.
                    </p>
                </section>

                <section id="getting-started" className="uic-split-section">
                    <div className="split-left">
                        <h2 className="display-heading" style={{fontSize: '2.5rem'}}>Getting Started</h2>
                    </div>
                    <div className="split-right">
                        <div className="accordion-container">
                            <AccordionItem title="NPM Package Installation" isOpen={openInstallId === 0} onClick={() => toggleInstall(0)}>
                                <p>Initialize the Mito UI component library in your React application via your preferred package manager.</p>
                                <div className="code-block">
                                    <button className="copy-btn" onClick={() => handleCopy("npm install @mito/ui-components @mito/mcp-core", 0)} title="Copy to clipboard">
                                        {copiedId === 0 ? <i className="fa-solid fa-check" style={{ color: '#27c93f' }}></i> : <i className="fa-regular fa-copy"></i>}
                                    </button>
                                    <code>npm install @mito/ui-components @mito/mcp-core</code>
                                </div>
                            </AccordionItem>
                            
                            <AccordionItem title="Mito MCP: Localhost (stdio) Setup" isOpen={openInstallId === 1} onClick={() => toggleInstall(1)}>
                                <p>Configure your IDE (Cursor, Windsurf) or local agent to stream structural context directly via standard I/O.</p>
                                <div className="code-block">
                                    <button className="copy-btn" onClick={() => handleCopy(`"mcpServers": {\n  "mito-local": {\n    "command": "npx",\n    "args": ["-y", "@mito/mcp-server", "--transport", "stdio"]\n  }\n}`, 1)} title="Copy to clipboard">
                                        {copiedId === 1 ? <i className="fa-solid fa-check" style={{ color: '#27c93f' }}></i> : <i className="fa-regular fa-copy"></i>}
                                    </button>
                                    <code>
                                        {`"mcpServers": {
  "mito-local": {
    "command": "npx",
    "args": ["-y", "@mito/mcp-server", "--transport", "stdio"]
  }
}`}
                                    </code>
                                </div>
                            </AccordionItem>

                            <AccordionItem title="Mito MCP: Remote (HTTP/SSE) Setup" isOpen={openInstallId === 2} onClick={() => toggleInstall(2)}>
                                <p>Connect cloud-hosted agents to your enterprise VPC using our zero-trust SSE transport.</p>
                                <div className="code-block">
                                    <button className="copy-btn" onClick={() => handleCopy(`"mcpServers": {\n  "mito-remote": {\n    "url": "https://api.yourdomain.com/mcp",\n    "transport": "sse",\n    "auth": "Bearer <YOUR_MITO_LICENSE_KEY>"\n  }\n}`, 2)} title="Copy to clipboard">
                                        {copiedId === 2 ? <i className="fa-solid fa-check" style={{ color: '#27c93f' }}></i> : <i className="fa-regular fa-copy"></i>}
                                    </button>
                                    <code>
                                        {`"mcpServers": {
  "mito-remote": {
    "url": "https://api.yourdomain.com/mcp",
    "transport": "sse",
    "auth": "Bearer <YOUR_MITO_LICENSE_KEY>"
  }
}`}
                                    </code>
                                </div>
                            </AccordionItem>
                        </div>
                    </div>
                </section>

                <section id="frontend-components" className="uic-grid-section">
                    <h2 className="display-heading text-center" style={{fontSize: '2.5rem', marginBottom: '64px'}}>Frontend Architecture</h2>
                    <div className="component-grid">
                        <div className="component-card">
                            <div className="card-icon"><i className="fa-solid fa-microchip"></i></div>
                            <h3>AI Components</h3>
                            <p>Seamlessly bridge LLM outputs and the DOM with streaming data handlers.</p>
                            <NavLink to="/components/ai" className="card-link">Explore AI Components →</NavLink>
                        </div>
                        <div className="component-card">
                            <div className="card-icon"><i className="fa-solid fa-sliders"></i></div>
                            <h3>UI Controls</h3>
                            <p>Resilient, accessible forms, temporal inputs, and dense enterprise controls.</p>
                            <NavLink to="/components/controls" className="card-link">Browse Controls →</NavLink>
                        </div>
                        <div className="component-card">
                            <div className="card-icon"><i className="fa-solid fa-photo-film"></i></div>
                            <h3>Multimedia Controls</h3>
                            <p>High-throughput handlers for dynamic image scaling, video, and audio streaming.</p>
                            <NavLink to="/components/multimedia" className="card-link">View Multimedia →</NavLink>
                        </div>
                        <div className="component-card">
                            <div className="card-icon"><i className="fa-solid fa-layer-group"></i></div>
                            <h3>Modals & Information</h3>
                            <p>Context-aware dialogs, transient alerts, and nested routing views.</p>
                            <NavLink to="/components/modals" className="card-link">Explore Modals →</NavLink>
                        </div>
                        <div className="component-card">
                            <div className="card-icon"><i className="fa-solid fa-chart-pie"></i></div>
                            <h3>Data Visualization</h3>
                            <p>Performant data tables, temporal charts, and scalable telemetry dashboards.</p>
                            <NavLink to="/components/data" className="card-link">View Data Comps →</NavLink>
                        </div>
                        
                        <div className="component-card">
                            <div className="card-icon"><i className="fa-solid fa-fingerprint"></i></div>
                            <h3>Authentication</h3>
                            <p>Secure, zero-trust login flows, biometric triggers, and federated identity handlers.</p>
                            <NavLink to="/components/authentication" className="card-link">Explore Auth →</NavLink>
                        </div>

                    </div>
                </section>

                <section id="backend-templates" className="uic-split-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '120px' }}>
                    <div className="split-left">
                        <h2 className="display-heading" style={{fontSize: '2.5rem'}}>Backend<br/>Templates</h2>
                        <p className="text-muted" style={{marginTop: '16px', fontSize: '1.125rem'}}>Pre-configured, zero-trust backend scaffolds for rapid agentic deployment.</p>
                    </div>
                    <div className="split-right">
                        <div className="accordion-container">
                            {backendTemplates.map((template, idx) => (
                                <AccordionItem 
                                    key={idx} 
                                    title={template.cat} 
                                    isOpen={openBackendId === idx} 
                                    onClick={() => toggleBackend(idx)}
                                >
                                    <div className="template-tech-grid">
                                        {template.tech.split(', ').map((tool, i) => (
                                            <div key={i} className="tech-logo-item">
                                                <img src={getLogo(tool, darkMode)} alt={`${tool} logo`} className="tech-logo" />
                                                <span>{tool}</span>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default UIComponents;