/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/agenticRibbon.scss';
import { NavLink } from 'react-router-dom';
import replitLogo from '../assets/replit-icon.png';
import windsurfLogoDark from '../assets/windsurf-dark-icon.png';
import windsurfLogo from '../assets/windsurf-light-icon.png';
import cursorLogo from '../assets/cursor-icon.png';
import spaceXLightLogo from '../assets/spacex-light-icon.png';
import spaceXDarkLogo from '../assets/spacex-dark-icon.png';
import claudeLogo from '../assets/claude-logo.png';
import antigravityLogo from '../assets/antigravity-icon.png'; 


const AgenticRibbon = ({ darkMode }: { darkMode: boolean }) => {
    return(
    <>
        <div className='agentic-card'>
            <p className="agentic-heading">Interested in unlocking the potential of Agentic AI? <NavLink to='agentic-ai'>Learn more</NavLink></p>
            <div className="agentic-container">
                <div className="agentic-item">
                    <AgenticCard imgSrc={cursorLogo} agentName='SpaceXSI' productName='Cursor' url='https://cursor.com/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={darkMode ? windsurfLogoDark : windsurfLogo} agentName='Windsurf' productName='Cascade' url='https://www.windsurf.com/cascade'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={antigravityLogo} agentName='Google' productName='Antigravity' url='https://antigravity.google'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={replitLogo} agentName='Replit' productName='Agent3' url='https://www.replit.com/'/>
                </div>
                <div className="agentic-item">
                    <AgenticCard imgSrc={darkMode ? spaceXDarkLogo : spaceXLightLogo} agentName='SpaceXSI' productName='Grok Build' url='https://x.ai/build'/>
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