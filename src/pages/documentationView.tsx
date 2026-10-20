import { useState, useEffect } from 'react';
import ChromaticEmbed from '../components/ChromaticEmbed';
import '../styles/main.scss';
import '../styles/homePage.scss';
import '../styles/documentationView.scss';

const Documentation = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        setIsDarkMode(!document.body.classList.contains('light-mode'));

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDarkMode(!document.body.classList.contains('light-mode'));
                }
            });
        });

        observer.observe(document.body, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const storybookBaseUrl = "https://6a657230d0c8812ee04774fc-jnfasftpdt.chromatic.com/";
    
    const themedUrl = `${storybookBaseUrl}?theme=${isDarkMode ? 'dark' : 'light'}`;

    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer docs-page-container">
                
                <section className="docs-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Documentation<br/><span className="text-muted">& API Reference</span>
                    </h1>
                    <p className="docs-lead-text">
                        Explore the complete Mito component ecosystem. Interact with rendered UI controls, review strict TypeScript interfaces, and validate design system constraints directly within our embedded Storybook playground.
                    </p>
                </section>

                <section className="docs-embed-section">
                    <div className="embed-window">
                        
                        <div className="window-header">
                            <div className="window-controls">
                                <span className="dot r"></span>
                                <span className="dot y"></span>
                                <span className="dot g"></span>
                            </div>
                            <div className="window-title">
                                <i className="fa-solid fa-book-open"></i> mito-storybook-client
                            </div>
                            <div className="window-actions">
                                <a 
                                    href={storybookBaseUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="external-link" 
                                    title="Open Storybook in new tab"
                                >
                                    Open Externally <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>

                        <div className="embed-content">
                            <ChromaticEmbed src={themedUrl} />
                        </div>
                        
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Documentation;