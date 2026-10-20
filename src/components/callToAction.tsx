/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/callToAction.scss';
import MaterialButton from './materialButton';

const CallToAction = ({version, heading, subheading, content, imgSrc, routePath, buttonText, buttonVersion = 1}: 
    {version : number, heading: string, subheading: string, content: string, imgSrc: any, 
    routePath: string, buttonText: string, buttonVersion: number}) => {

    const TextColumn = () => (
        <div className="cta-column text-column">
            <div className="cta-badge">{heading}</div>
            <h2 className='cta-subheading'>{subheading}</h2>
            <p className='cta-content'>{content}</p>
            <div className="cta-actions">
                <MaterialButton style={{marginTop: '24px'}} version={buttonVersion} buttonText={`${buttonText} →`} routePath={routePath}/> 
            </div>
        </div>
    );

    const ImageColumn = () => (
        <div className="cta-column img-column">
            <div className="img-glass-wrapper">
                <img className="cta-img" src={imgSrc} alt={heading} />
                <div className="img-glow-overlay"></div>
            </div>
        </div>
    );

    return(
        <div className={`cta-container reveal-on-scroll ${version === 2 ? 'reverse-layout' : ''}`}>
            <div className="cta-card-surface">
                {version === 1 ? (
                    <>
                        <TextColumn />
                        <ImageColumn />
                    </> 
                ) : (
                    <>
                        <ImageColumn />
                        <TextColumn />
                    </>
                )}
            </div>
        </div>
    )
}

export default CallToAction;