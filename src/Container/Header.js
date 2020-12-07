import './Header.css';
import Logo from '../Assets/logo.png';
import { Avatar } from '@material-ui/core';
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img alt="logo" className="header__left__logo" src={Logo} />
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__vertical"></div>
                <h2>Esports</h2>
                <h2>Music</h2>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" className="header__center__search" />
                <div className="header__center__logo">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right__container">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="far fa-comments"></i>
                </div>
                <div className="header__right__bits">
                    <i className="fas fa-gem"></i>
                    <h4>Get Bits</h4>
                </div>
                <Avatar className='header__right__avatar'/>
            </div>
        </div>
    );
};

export default Header;
