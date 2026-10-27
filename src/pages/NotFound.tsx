import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/notFound.scss';

export interface NotFoundProps {
    text?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ text = '404' }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="mito-404-section">
            <div 
                className="mito-404-container"
                onMouseEnter={() => setIsHovered(true)}
            >
                <h1 className="mito-404-text">{text}</h1>
                
                <div className="mito-drip-one"></div>
                <div className="mito-drip-two"></div>
                <div className={`mito-drip-three ${isHovered ? 'mito-drip-active' : ''}`}></div>
                <div className="mito-drip-four"></div>
            </div>

            <div className="mito-404-actions">
                <h2>Page Not Found</h2>
                <p>The page you are looking for has been moved or does not exist.</p>
                <button onClick={() => navigate('/')} className="mito-404-btn">
                    Return to Base
                </button>
            </div>
        </section>
    );
};

export default NotFound;