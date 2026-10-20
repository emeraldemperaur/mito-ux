import mockupTable from '../assets/agentic-icon.png'; 
import mockupViz from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/dataComponents.scss';

const DataComponents = () => {
    const vizComponents = [
        "Bar Charts", "Histograms", "Grouped Bar Charts", "Stacked Bar Charts", 
        "Box Plots", "Violin Plots", "Ridgeline Plots", "Scatterplots", 
        "Bubble Charts", "Line Graphs", "Lollipop Charts", "Area Charts", 
        "Stacked Area Charts", "Streamgraphs", "Horizon Charts", "Pie Charts", 
        "Donut Charts", "Treemaps", "Circle Packing", "Sunburst Diagrams", 
        "Icicle Diagrams", "Tidy Trees", "Radial Trees", "Dendrograms", 
        "Force-Directed Graphs", "Chord Diagrams", "Sankey Diagrams", "Arc Diagrams", 
        "Hierarchical Edge Bundling", "Choropleth Maps", "Hexbin Maps", "Contour Maps", 
        "Cartograms", "Bubble Maps", "Radar Charts", "Parallel Coordinates", 
        "Parallel Sets", "Heatmaps", "Correlograms", "Word Clouds"
    ];

    const variantTypes = ["Material", "Outline", "Neumorphic"];

    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer datac-page-container">
                
                <section className="datac-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Performant Telemetry<br/><span className="text-muted">& Enterprise Analytics</span>
                    </h1>
                    <p className="datac-lead-text">
                        A rigorous suite of high-density data tables and visualization primitives. Engineered for massive datasets, extensible column definitions, and providing immediate analytical insights directly to the user.
                    </p>
                </section>

                <section className="datac-feature-grid">
                    
                    <div className="feature-card highlight-card">
                        <div className="card-icon"><i className="fa-solid fa-table-list"></i></div>
                        <div className="card-content">
                            <h3>High-Density Data Tables</h3>
                            <p>Performant, virtualization-ready data tables built for scale. Features highly extensible column definitions for strict DX convenience, native data pagination, and integrated sorting boundaries.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                        <div className="card-content">
                            <h3>Agnostic Design Variants</h3>
                            <p>Every table and chart container is robustly styled across three distinct enterprise aesthetics, enabling seamless integration into your overarching brand topology.</p>
                            <div className="pill-grid" style={{ marginTop: '16px' }}>
                                {variantTypes.map((variant, idx) => (
                                    <span key={idx} className="variant-pill">{variant} Theme</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="feature-card wide-card viz-card">
                        <div className="card-icon"><i className="fa-solid fa-chart-pie"></i></div>
                        <div className="card-content">
                            <h3>Data Visualization Primitives</h3>
                            <p>Compact, highly performant rendering engines for translating complex telemetry into immediate user insights. Supports interactive tooltips, temporal zooming, and responsive scaling across over 40 distinct visualization mediums:</p>
                            
                            <div className="pill-grid dense-pill-grid">
                                {vizComponents.map((viz, idx) => (
                                    <span key={idx} className="viz-pill">{viz}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="datac-showcase-section">
                    <div className="showcase-sliding-bg"></div>
                    
                    <div className="showcase-mockup-grid">
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">enterprise-data-table.tsx</span>
                            </div>
                            <img src={mockupTable} alt="Data Table UI Mockup" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>

                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">telemetry-dashboard.tsx</span>
                            </div>
                            <img src={mockupViz} alt="Data Visualization UI Mockup" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>

                    </div>
                </section>

            </div>
        </main>
    )
}

export default DataComponents;