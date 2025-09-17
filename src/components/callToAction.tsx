/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/callToAction.scss';
import MaterialButton from './materialButton';
const CallToAction = ({version, heading, subheading, content, imgSrc, routePath, buttonText, buttonVersion = 1}: 
    {version : number, heading: string, subheading: string, content: string, imgSrc: any, 
    routePath: string, buttonText: string, buttonVersion: number}) => {

    return(
        <>
        {version == 1 ? 
        <>
        <div className="cta-container">
            <div className="cta-column text-column">
                <p className='cta-heading'>{heading}</p>
                <p className='cta-subheading'>{subheading}</p>
                <p className='cta-content'>{content}</p>
                <MaterialButton style={{marginTop: '13px'}} version={buttonVersion} buttonText={buttonText} routePath={routePath}/> 
            </div>
            <div className="cta-column img-column">
                <img width={'500px'} height={'250px'} src={imgSrc}/>
            </div>
        </div>
        </> 
        : 
        <>
        <div className="cta-container">
            <div className="cta-column img-column">
                <img width={'500px'} height={'250px'} src={imgSrc}/>
            </div>
            <div className="cta-column text-column">
                <p className='cta-heading'>{heading}</p>
                <p className='cta-subheading'>{subheading}</p>
                <p className='cta-content'>{content}</p>
                <MaterialButton style={{marginTop: '19px'}} version={buttonVersion} buttonText={buttonText} routePath={routePath}/>
            </div>
        </div>
        </>}
        </>
    )
}

export default CallToAction;