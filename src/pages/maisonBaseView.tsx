import { useNavigate } from 'react-router-dom';
import CallToAction from "../components/callToAction";
import SloganRibbon from "../components/sloganRibbon";
import devLogo from '../assets/agentic-icon.png';
import ideLogo from '../assets/https-icon.png';
import llmLogo from '../assets/llm-icon.png';
import nodeLogo from '../assets/nodejs-icon.png';
import reactLogo from '../assets/react-icon.png';
import promptLightLogo from '../assets/text-input.png';
import promptDarkLogo from '../assets/text-input-white.png';
import scssLogo from '../assets/scss-icon.png';
import AgenticRibbon from "../components/agenticRibbon";
import '../styles/homePage.scss'; 

const MaisonBase = ({ darkMode }: { darkMode: boolean }) => {
    const navigate = useNavigate();

    return(
        <main className="maison-enterprise-layout">
          
          <div className="maison-bg-canvas">
              <div className="ambient-orb orb-1"></div>
              <div className="ambient-orb orb-2"></div>
              <div className="ambient-orb orb-3"></div>
              <div className="sliding-perspective-grid"></div>
              <div className="noise-overlay"></div>
          </div>

          <div className="content-layer">
              <section className="hero-section">
                <SloganRibbon 
                  title="Step through the looking glass" 
                  content="Vanguard component library & Model Context Protocol server optimized for rapid agentic development, extensibility and accessibility."
                />
              </section>

              <section className="features-section">
                <CallToAction 
                  version={1} imgSrc={devLogo} heading='AI Components' subheading='Empower Your Interface with Generative AI' 
                  content='Seamlessly bridge the gap between large language models, backend services, and the DOM. Purpose-built functional components engineered to handle streaming data, generative workflows, and context-aware interactions right out of the box—transforming static pages into autonomous experiences.'
                  routePath='components/ai' buttonText='Explore AI Components' buttonVersion={1}
                />
                
                <CallToAction 
                  version={2} imgSrc={devLogo} heading='UI Control & Data Components' subheading='Command Complex Data at Scale' 
                  content='From high-throughput data tables to complex temporal forms, leverage a suite of resilient, accessible controls. Built for enterprise-grade density, these components give you absolute command over how complex data is captured, mutated, and displayed.'
                  routePath='components/controls' buttonText='Browse UI Controls' buttonVersion={1}
                />
                
                <CallToAction 
                  version={1} imgSrc={devLogo} heading='Model Context Protocol (Agentic) Server' subheading='Supercharge Your Agents with Mito MCP' 
                  content='Eliminate LLM hallucinations and accelerate development. Mito MCP server streams strict, strongly typed architectural blueprints directly into your IDE, empowering autonomous agents to generate secure user interfaces and zero-trust infrastructure on demand.'
                  routePath='mito-mcp' buttonText='Connect Your IDE' buttonVersion={1}
                />
                
                <CallToAction 
                  version={2} imgSrc={devLogo} heading='Theme Friendly, Multi-Variant Design' subheading='Fluid Multi-Variant Design System' 
                  content='Switch seamlessly between vivid Outline, tactile Material, and context-aware Neumorphic styles. Natively supports light/dark modes and dynamic brand colors for pixel-perfect contrast in any environment.'
                  routePath='components/themes' buttonText='Explore Theming' buttonVersion={0}
                />
                
                <CallToAction 
                  version={1} imgSrc={devLogo} heading='TypeScript enhanced code quality' subheading='Deploy with Absolute Confidence' 
                  content='Engineered with strict end-to-end type safety. Experience flawless IDE autocomplete, predictable state transitions, and zero-regression deployments across your entire stack.'
                  routePath='raison-detre' buttonText='Discover' buttonVersion={0}
                />
              </section>

              <section className="integrations-section">
                <div className="section-header">
                    <h2 className="display-heading">Connect once, build seamlessly<br/><span className="text-muted">with your existing stack</span></h2>
                </div>
                <div className="integration-grid">
                    <div className="integration-card">
                    <img src={ideLogo} alt="IDE Integration" className="integration-icon-img" />
                    <p>Stream directly to IDE</p>
                    </div>
                    <div className="integration-card">
                    <img src={llmLogo} alt="LLM Optimization" className="integration-icon-img" />
                    <p>Eliminate LLM hallucinations</p>
                    </div>
                    <div className="integration-card">
                    <img src={nodeLogo} alt="Backend Templates" className="integration-icon-img" />
                    <p>Production-ready backend templates</p>
                    </div>
                    <div className="integration-card">
                    <img src={reactLogo} alt="React Server Components" className="integration-icon-img" />
                    <p>React Server Components compatible</p>
                    </div>
                    <div className="integration-card">
                    <img src={darkMode ? promptDarkLogo : promptLightLogo} alt="Generative UI" className="integration-icon-img" />
                    <p>Design a prompt, generate UI</p>
                    </div>
                    <div className="integration-card">
                    <img src={scssLogo} alt="SCSS Injection" className="integration-icon-img" />
                    <p>Zero-config SCSS injection</p>
                    </div>
                </div>
              </section>

              <section className="changelog-section">
                <div className="changelog-layout">
                  <div className="changelog-header">
                    <h2 className="display-heading">Feature<br/>highlights</h2>
                  </div>
                  <div className="changelog-list">
                    <div className="changelog-item">
                      <span className="date">24.01</span>
                      <span className="title">Introducing Mito MCP Server v2.0</span>
                      <span className="category">Architecture</span>
                    </div>
                    <div className="changelog-item">
                      <span className="date">24.02</span>
                      <span className="title">Generative Data Grids with Context-Aware Sorting</span>
                      <span className="category">Components</span>
                    </div>
                    <div className="changelog-item">
                      <span className="date">24.03</span>
                      <span className="title">Claude 3.5 Sonnet is now supported in Mito MCP</span>
                      <span className="category">Integrations</span>
                    </div>
                    <div className="changelog-item">
                      <span className="date">24.04</span>
                      <span className="title">Fluid Multi-Variant System: Neumorphic Update</span>
                      <span className="category">Design</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="enterprise-security-section">
                <div className="security-layout">
                  <div className="security-header">
                    <h2 className="display-heading">Enterprise architecture<br/><span className="text-muted">with fine-grained controls</span></h2>
                  </div>
                  <div className="security-content">
                    <div className="badges-row">
                      <div className="badge">Strict Type Safety</div>
                      <div className="badge">WCAG 2.1 AA</div>
                      <div className="badge">Zero-Trust MCP</div>
                    </div>
                    <div className="security-grid">
                      <div className="security-item">Generated code is always your IP</div>
                      <div className="security-item">Every generation runs in isolated ASTs</div>
                      <div className="security-item">Zero telemetry enforced on local servers</div>
                      <div className="security-item">Strict DOM sanitization pre-render</div>
                      <div className="security-item">Comprehensive state transition logs</div>
                      <div className="security-item">Private NPM registry support available</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="final-cta-section">
                <div className="final-cta-content">
                  <h2 className="massive-heading"><span className="text-muted">Stop rebuilding from scratch.</span><br/>Generate it all with Mito.</h2>
                  <div className="button-group">
                    <button className="btn-primary" style={{ fontFamily: 'Quicksand' }} onClick={() => navigate('/components')}>Get started</button>
                    <button className="btn-secondary" style={{ fontFamily: 'Quicksand' }} onClick={() => navigate('/mito-mcp')}>Buy MCP License Key</button>
                  </div>
                </div>
              </section>
              <section className="agentic-footer-section">
                <AgenticRibbon />
              </section>
          </div>
        </main>
    )
}

export default MaisonBase;