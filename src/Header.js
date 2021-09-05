import logo from "./assets/cvalogo.svg";
import "./App.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__title-wrapper header__title-wrapper--desktop">
          <span className="header__title">Waitmanager</span>
          <span className="header__subtitle">Subsidiary of CVA Tech Ventures</span>
        </div>
        <div>
          <a
            className="header__contact-button"
            href="mailto:vuks.amonju@cvatechventure.com"
            target="_blank"
            rel="noopener noreferrer">
            Contact Us
          </a>
        </div>
      </div>
      <div className="header__title-wrapper header__title-wrapper--mobile">
        <span className="header__title">Waitmanager</span>
        <span className="header__subtitle">Subsidiary of CVA Tech Ventures</span>
      </div>
    </header>
  );
}

export default Header;
