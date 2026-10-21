import React from 'react';
import '../styles/dripEffect.scss';

export interface DripEffectProps {
    /** The hex, rgb, or named color of the drips (default: '#000000') */
    color?: string;
    /** Multiplier for the drip speed. 1 is normal, 2 is twice as fast, 0.5 is half speed (default: 1) */
    speed?: number;
    /** Optional z-index if you need it to sit behind or in front of specific page content */
    zIndex?: number;
}

const DripEffect: React.FC<DripEffectProps> = ({ 
    color = '#000000', 
    speed = 1,
    zIndex = 10 
}) => {
    return (
        <div 
            className="mito-drip-wrapper" 
            style={{ 
                '--drip-color': color, 
                '--drip-speed': speed,
                zIndex 
            } as React.CSSProperties}
        >
            <div className="mito-drip-top"></div>
            
            {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className={`mito-drip mito-drip-${i + 1}`}></div>
            ))}

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="mito-drip-svg-filter">
                <defs>
                    <filter id="mito-goo" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default DripEffect;