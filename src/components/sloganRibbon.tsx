import '../styles/sloganRibbon.scss';

const SloganRibbon = ({title, content}: {title: string, content: string}) => {
    return(
        <div className='slogan-box'>
            <div className='slogan-content-wrapper'>
                <h1 className='slogan-title'>
                    <span className="text-gradient">{title}</span>
                </h1>
                <p className='slogan-subtitle'>{content}</p>
                <div className="slogan-fade-line"></div>
            </div>
        </div>
    )
}

export default SloganRibbon;