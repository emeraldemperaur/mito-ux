import mockup1 from '../assets/agentic-icon.png'; 
import mockup2 from '../assets/agentic-icon.png'; 
import mockup3 from '../assets/agentic-icon.png'; 
import mockup4 from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/controlsComponents.scss';

const ControlsComponents = () => {
    const inputComponents = [
        "Button", "ButtonGroup", "FloatingActionButton", "CheckboxGroupInput", 
        "ConditionalTrigger", "CountrySelectInput", "CreditCardInput", "CurrencyInput", 
        "DatePickerInput", "DropdownInput", "FileInput", "Input (Text)", 
        "NumberInput", "PasswordInput", "RadioGroupInput", "SelectInput", 
        "StockInput", "ToggleInput"
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

            <div className="content-layer controls-page-container">
                
                <section className="controls-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Deterministic Inputs<br/><span className="text-muted">& Orchestration</span>
                    </h1>
                    <p className="controls-lead-text">
                        A rigorous library of Formik-ready, strongly typed interface controls. Engineered for absolute data integrity, temporal inputs, and enterprise-grade validation out of the box.
                    </p>
                </section>

                <section className="controls-feature-grid">
                    
                    <div className="feature-card wide-card highlight-card">
                        <div className="card-icon"><i className="fa-solid fa-network-wired"></i></div>
                        <div className="card-content">
                            <h3>VectorSigma Orchestrator</h3>
                            <p>The ultimate dynamic form orchestrator. Easily generate robust, backend-integration-ready enterprise forms via declarative <strong>xForm schema definitions</strong> (Titles, Sections, Queries) or through DX-friendly chained instance object methods. Built-in, zero-config input validation.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-solid fa-compass"></i></div>
                        <h3>Adaptive Navigation</h3>
                        <p>Highly responsive routing components featuring native <code>darkMode</code> prop integrations, allowing seamless transitions between light and dark enterprise themes across your entire topology.</p>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-solid fa-filter"></i></div>
                        <h3>SearchRibbon</h3>
                        <p>An extensible data filtration component providing immediate, tactile user feedback. Displays real-time record counts and contextual metadata for highly specified filter parameters.</p>
                    </div>

                    <div className="feature-card wide-card inputs-card">
                        <div className="card-icon"><i className="fa-solid fa-keyboard"></i></div>
                        <div className="card-content">
                            <h3>Typed Input Architecture</h3>
                            <p>Available in Material, Outline, and Neumorphic design variants. All inputs feature native error boundaries, hint text formatting, and direct Formik compatibility.</p>
                            <div className="input-pill-grid">
                                {inputComponents.map((input, idx) => (
                                    <span key={idx} className="input-pill">{input}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="controls-showcase-section">
                    <div className="showcase-sliding-bg"></div>
                    
                    <div className="showcase-mockup-grid">
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">controls-component-1.tsx</span>
                            </div>
                            <img src={mockup1} alt="VectorSigma Form UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">controls-component-2.tsx</span>
                            </div>
                            <img src={mockup2} alt="SearchRibbon UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">controls-component-3.tsx</span>
                            </div>
                            <img src={mockup3} alt="Input Variants UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">controls-component-4.tsx</span>
                            </div>
                            <img src={mockup4} alt="Navigation UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default ControlsComponents;