import React, { useMemo } from 'react';
import '../styles/particleOrb.scss';

export interface ParticleOrbProps {
    /** The overall width of the container */
    width?: string | number;
    /** The overall height of the container */
    height?: string | number;
    /** The radius of the orb structure in pixels */
    orbSize?: number;
    /** The base HSL hue value for the particles (0-360). E.g., 180 is cyan/blue, 0 is red, 120 is green. */
    baseHue?: number;
    /** Number of particles to render */
    particleCount?: number;
    /** Duration of the animation loop in seconds */
    animationDuration?: number;
}

const ParticleOrb: React.FC<ParticleOrbProps> = ({
    width = '100%',
    height = '100%',
    orbSize = 200,
    baseHue = 180,
    particleCount = 300,
    animationDuration = 14
}) => {
    // Generate static randomized positions and delays for the particles on mount
    const particles = useMemo(() => {
        return Array.from({ length: particleCount }).map((_, i) => {
            const zDeg = Math.random() * 360;
            const yDeg = Math.random() * 360;
            return {
                id: i,
                z: `${zDeg}deg`,
                negZ: `-${zDeg}deg`,
                y: `${yDeg}deg`,
                hueOffset: (40 / particleCount) * i,
                delay: `${i * 0.01}s`
            };
        });
    }, [particleCount]);

    return (
        <div 
            className="mito-particle-orb-container" 
            style={{ width, height }}
        >
            <div 
                className="mito-particle-orb-wrap"
                style={{
                    '--orb-size': `${orbSize}px`,
                    '--base-hue': baseHue,
                    '--orb-time': `${animationDuration}s`
                } as React.CSSProperties}
            >
                {particles.map((p) => (
                    <div 
                        key={p.id} 
                        className="mito-particle" 
                        style={{
                            '--z': p.z,
                            '--neg-z': p.negZ,
                            '--y': p.y,
                            '--hue-offset': p.hueOffset,
                            '--delay': p.delay
                        } as React.CSSProperties} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ParticleOrb;