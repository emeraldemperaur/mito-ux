import React, { useState } from 'react';
import generatedUI from '../assets/agentic-icon.png'; 
import '../styles/main.scss';
import '../styles/homePage.scss'; 
import '../styles/learnMore.scss';

const LearnMore = () => {
    const [prompt, setPrompt] = useState('');
    const [appState, setAppState] = useState<'idle' | 'generating' | 'generated'>('idle');

    const presetPrompts = [
        "Generate a responsive SaaS billing dashboard with a dark mode toggle and a Stripe payment modal.",
        "Scaffold an interactive RAG chat interface with file attachment actions and context injection.",
        "Build a high-density enterprise data table with extensible columns and native pagination."
    ];

    const handlePresetClick = (selectedPrompt: string) => {
        if (appState === 'generating') return;
        setPrompt(selectedPrompt);
        setAppState('idle'); 
    };

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        
        setAppState('generating');
        
        setTimeout(() => {
            setAppState('generated');
        }, 2500);
    };

    return(
        <main className="maison-enterprise-layout">
            
            <div className="maison-bg-canvas">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
                <div className="sliding-perspective-grid"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="content-layer learn-page-container">
                
                <section className="learn-hero-section">
                    <h1 className="display-heading" style={{ marginTop: '24px' }}>
                        Agentic Generation<br/><span className="text-muted">in Real-Time</span>
                    </h1>
                    <p className="learn-lead-text">
                        Experience the deterministic power of Mito MCP. Select an optimized prompt below to instantly scaffold enterprise-grade interfaces, seamlessly rendering both the raw architecture and the pixel-perfect visual output simultaneously.
                    </p>
                </section>

                <section className="playground-section">
                    
                    <div className="chat-console-wrapper">
                        
                        <div className="preset-prompts">
                            {presetPrompts.map((preset, idx) => (
                                <button 
                                    key={idx} 
                                    className={`preset-pill ${prompt === preset ? 'active' : ''}`}
                                    onClick={() => handlePresetClick(preset)}
                                    disabled={appState === 'generating'}
                                >
                                    {preset}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleGenerate} className={`chat-input-form ${appState === 'generating' ? 'locked' : ''}`}>
                            <div className="input-header">
                                <span><i className="fa-solid fa-microchip"></i> Mito Architect Model</span>
                                <span className="badge">v2.4.0</span>
                            </div>
                            
                            <textarea 
                                className="chat-textarea" 
                                placeholder="Select an optimized prompt above to begin generating..."
                                value={prompt}
                                readOnly
                                rows={3}
                            ></textarea>
                            
                            <div className="input-footer">
                                <div className="action-buttons">
                                    <button type="button" className="icon-btn" title="Attach Context" disabled><i className="fa-solid fa-paperclip"></i></button>
                                    <button type="button" className="icon-btn" title="Inject Web Link" disabled><i className="fa-solid fa-globe"></i></button>
                                </div>
                                <button type="submit" className="submit-btn" disabled={!prompt.trim() || appState === 'generating'}>
                                    {appState === 'generating' ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-arrow-up"></i>}
                                </button>
                            </div>
                        </form>
                    </div>

                    {appState === 'generating' && (
                        <div className="generating-state">
                            <div className="pulse-loader">
                                <div></div><div></div><div></div>
                            </div>
                            <p>Synthesizing prompt context and scaffolding structural components...</p>
                        </div>
                    )}

                    {appState === 'generated' && (
                        <div className="output-split-pane fade-in">
                            
                            <div className="pane code-pane">
                                <div className="pane-header">
                                    <span className="file-name"><i className="fa-brands fa-react"></i> GeneratedComponent.tsx</span>
                                    <button className="copy-btn"><i className="fa-regular fa-copy"></i></button>
                                </div>
                                <div className="pane-content code-content">
                                    <pre>
                                        <code>
{`import React from 'react';
import { Container, Row, Column } from '@mito/layout';
import { DataGrid } from '@mito/data';
import { BottomModal } from '@mito/modals';

export const GeneratedView = () => {
  return (
    <Container variant="neumorphic">
      <Row>
        <Column span={12}>
          <h2>Enterprise Interface</h2>
          <DataGrid 
            columns={['ID', 'Status', 'Metrics']} 
            data={mockData} 
          />
        </Column>
      </Row>
      <BottomModal 
        id="action-modal" 
        positiveAction="Confirm"
      />
    </Container>
  );
};`}
                                        </code>
                                    </pre>
                                </div>
                            </div>

                            <div className="pane render-pane">
                                <div className="pane-header">
                                    <span className="file-name"><i className="fa-solid fa-desktop"></i> Live Preview</span>
                                    <div className="window-controls">
                                        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                                    </div>
                                </div>
                                <div className="pane-content visual-content">
                                    <img src={generatedUI} alt="Generated UI Output" className="rendered-ui-img" style={{backgroundColor: '#111'}} />
                                </div>
                            </div>

                        </div>
                    )}
                </section>

            </div>
        </main>
    )
}

export default LearnMore;