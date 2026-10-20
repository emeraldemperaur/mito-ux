import mockupVideo from '../assets/agentic-icon.png'; 
import mockupAudio from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/multimediaComponents.scss';

const MultimediaComponents = () => {
    const supportedFormats = [
        "MP4", "WebM", "Ogg Video", "MP3", "WAV", "Ogg Audio", "FLAC"
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

            <div className="content-layer multimedia-page-container">
                
                <section className="multimedia-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        High-Throughput<br/><span className="text-muted">Media Architecture</span>
                    </h1>
                    <p className="multimedia-lead-text">
                        Enterprise-grade streaming components engineered for zero-latency delivery. Seamlessly embed web-optimized, high-definition video and lossless audio with deeply customizable, accessible playback controls.
                    </p>
                </section>

                <section className="multimedia-feature-grid">
                    
                    <div className="feature-card highlight-card">
                        <div className="card-icon"><i className="fa-solid fa-video"></i></div>
                        <div className="card-content">
                            <h3>High-Definition Video</h3>
                            <p>Stream web-optimized, high-definition video with responsive, state-driven multimedia controls. Natively supports adaptive bitrates, custom buffering states, and strict accessibility standards for enterprise media delivery.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="card-icon"><i className="fa-solid fa-headphones-simple"></i></div>
                        <div className="card-content">
                            <h3>High-Fidelity Audio</h3>
                            <p>Stream web-optimized, high-quality audio feeds. Features a resilient audio control suite with dynamic waveform rendering, precise temporal scrubbing, and volume modulation designed for agentic voice and podcasting interfaces.</p>
                        </div>
                    </div>

                    <div className="feature-card wide-card formats-card">
                        <div className="card-icon"><i className="fa-solid fa-photo-film"></i></div>
                        <div className="card-content">
                            <h3>Universal Format Support</h3>
                            <p>Built-in cross-browser compatibility handling all modern and legacy web formats gracefully, ensuring uninterrupted playback across your entire user base.</p>
                            <div className="format-pill-grid">
                                {supportedFormats.map((format, idx) => (
                                    <span key={idx} className="format-pill">{format}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="multimedia-showcase-section">
                    <div className="showcase-sliding-bg"></div>
                    
                    <div className="showcase-mockup-grid">
                        
                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">video-player-component.tsx</span>
                            </div>
                            <img src={mockupVideo} alt="HD Video Player UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>

                        <div className="mockup-window">
                            <div className="mockup-header">
                                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                                <span className="mockup-title">audio-stream-component.tsx</span>
                            </div>
                            <img src={mockupAudio} alt="Audio Player UI" className="ui-mockup-img" style={{backgroundColor: '#1a1a1a'}} />
                        </div>

                    </div>
                </section>

            </div>
        </main>
    )
}

export default MultimediaComponents;