import { useEffect } from 'react';
import '../styles/materialButton.scss';
import { useNavigate } from 'react-router-dom';


const MaterialButton = ({version, buttonText, routePath, style}: {version: number, buttonText: string, routePath: string, style: object}) => {
    const navigator = useNavigate();
    useEffect(() => {

    }, [version, buttonText, routePath]);

    const renderButton = () => {
        switch (version) {
            case 0:
                return <></>
            case 1:
                return <button style={style} className="material-button-1" role="button" onClick={() => navigator(routePath)}>{buttonText}</button>
            case 2:
                return <button style={style} className="material-button-1" role="button" onClick={() => navigator(routePath)}>{buttonText}</button>
            case 3:
                return <button style={style} className="material-button-1" role="button" onClick={() => navigator(routePath)}>{buttonText}</button>
            case 4:
                return <button style={style} className="material-button-1" role="button" onClick={() => navigator(routePath)}>{buttonText}</button>
            default:
                return <button style={style} className="material-button-1" role="button" onClick={() => navigator(routePath)}>{buttonText}</button>
        }
    }
    return(
        <>
            {renderButton()}
        </>
    )
}

export default MaterialButton;