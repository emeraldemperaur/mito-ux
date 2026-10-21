import { NavLink  } from 'react-router-dom';
import '../styles/main.scss';
import BlobLogo from './DripLogo';

const NavigationMenu = ({ isDarkMode, toggleTheme }: { isDarkMode?: boolean, toggleTheme?: () => void }) => {
    //const navigator = useNavigate();
    //const homeNavigator = () => { navigator('/') };

    return(
    <>
    <>
        <div className='header-menu'>
        <nav>
        <div className="wrapper">
            <div className="logo">
                <NavLink to="/">
                    <BlobLogo width="60px" height="60px" color="#000000" />
                    <span className='logo-mito-text'>Mito</span> <span className='logo-ui-text'>UI</span>
                </NavLink>
            </div>
            <input type="radio" name="slider" id="menu-btn"/>
            <input type="radio" name="slider" id="close-btn"/>
            <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><NavLink style={({ isActive }) => isActive ? {background:'#000000', color: '#ffffff'} : {}} to="documentation">Documentation</NavLink></li>
            <li><NavLink style={({ isActive }) => isActive ? {background:'#000000', color: '#ffffff'} : {}} to="components">Components</NavLink></li>
            <li><NavLink style={({ isActive }) => isActive ? {background:'#000000', color: '#ffffff'} : {}} to="mito-mcp">Mito MCP</NavLink></li>
            <li><NavLink style={({ isActive }) => isActive ? {background:'#000000', color: '#ffffff'} : {}} to="raison-detre">Raison D'être</NavLink></li>
            <li><NavLink style={({ isActive }) => isActive ? {background:'#000000', color: '#ffffff'} : {}} to="learn">Learn</NavLink></li>
            <li>
            <a href='https://www.github.com/emeraldemperaur/mito-ux' target='_blank'  className="desktop-item"><i className="header-menu-icon fa-brands fa-github"></i></a>
            </li>
            <li>
            <a onClick={toggleTheme} className="desktop-item" style={{ cursor: 'pointer' }}>
                <i className={`header-menu-icon fa-regular ${isDarkMode ? 'fa-lightbulb' : 'fa-moon'}`}></i>
            </a>
            </li>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn"><i className="mobile-menu-icon fas fa-bars"></i></label>
        </div>
        </nav>
        </div>
        </>
    </>
    )
}

export default NavigationMenu;