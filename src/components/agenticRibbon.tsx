/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/agenticRibbon.scss';
import { NavLink } from 'react-router-dom';
import replitLogo from '../assets/replit-logo.png';
import windsurfLogo from '../assets/windsurf-icon-logo.png';
import cognitionAILogo from '../assets/cognitionai-logo.png';
import spaceXAILogo from '../assets/spacexai-logo-black.png';
import grokbotLogo from '../assets/grokbot-logo.png';
import claudeLogo from '../assets/claude-logo.png'; 

const AgenticRibbon = () => {
    return(
    <>
        <div className='agentic-card'>
            <p className="agentic-heading">Interested in unlocking the potential of Agentic AI? <NavLink to='agentic-ai'>Learn more</NavLink></p>
            <div className="agentic-container">
                <div className="agentic-item">
                    <AgenticCard imgSrc={spaceXAILogo} agentName='SpaceXSI' productName='Cursor' url='https://cursor.com/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={windsurfLogo} agentName='Windsurf' productName='Cascade' url='https://www.windsurf.com/cascade'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={cognitionAILogo} agentName='Cognition' productName='Devin' url='https://www.devin.ai/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={replitLogo} agentName='Replit' productName='Agent3' url='https://www.replit.com/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={grokbotLogo} agentName='SpaceXSI' productName='Grokbot' url='https://grok.com/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={claudeLogo} agentName='Anthropic' productName='Claude' url='https://claude.ai/'/>
                </div>
            </div>
        </div>
    </>
    )
}

const AgenticCard = ({ imgSrc, agentName, productName, url } : {imgSrc: any, agentName: string, productName: string, url: string}) => {
    return(
    <>
        <NavLink to={url} target='_blank' className='agent-card-link'>
        <div className='agent-card'>
            <div className='box'>
                <div className="img-wrapper">
                    <img className="agent-logo-img" src={imgSrc} alt={`${agentName} logo`}/>
                </div>
                <p className='agent-name'>{agentName}</p>
                <p className='product-name'>{productName}</p>
            </div>
        </div>
        </NavLink>
    </>
    )
}

export default AgenticRibbon;