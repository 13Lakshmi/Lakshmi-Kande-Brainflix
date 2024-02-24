import "../Header/Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/avatar.jpg"
import upload from "../../assets/icons/upload.svg";

function Header(){
    return(
        <header className="header">
        <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />
        </div>
        <div className="header__subcontainer">
            <div className="search">
            <img className="header__searchicon" src={search} alt="search" />
            <input className="header__input"  type = "text" placeholder="Search" />    
            </div>
            <div className="header__avatar">
            <img className="header__avataricon" src={avatar} alt="avatar" />
            </div>
        </div>
        <div className="header__upload">
            <img className="header__uploadicon" src={upload} alt="upload" />
            <button className="header__uploadname"> UPLOAD</button>
        
            <div className="header__avatarr">
            <img className="header__avatarricon" src={avatar} alt="avatar" />
            </div>
        </div>
        </header>
    );
}
export default Header;