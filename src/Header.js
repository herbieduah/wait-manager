import logo from "./CVAVentures.png";
import "./App.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} className="header__logo" alt="logo" />
        <a className="header__contact-button" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Contact Us
        </a>
      </div>
    </header>
  );
}

export default Header;
