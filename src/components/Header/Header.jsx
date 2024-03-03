import "../Header/Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/avatar.jpg";
import upload from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__subcontainer">
        <div className="search">
          <img className="header__searchicon" src={search} alt="search" />
          <input className="header__input" type="text" placeholder="Search" />
        </div>
        <div className="header__avatar">
          <img className="header__avataricon" src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="header__upload">
        <img className="header__uploadicon" src={upload} alt="upload" />
        <Link to="/uploadVideo">
          <button className="header__uploadname"> UPLOAD</button>
        </Link>

        <div className="header__avatarr">
          <img className="header__avatarricon" src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
}
export default Header;
