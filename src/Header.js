import logo from "./assets/cvalogo.svg";
import "./App.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} className="header__logo" alt="logo" />
        <a
          className="header__contact-button"
          href="mailto:vuks.amonju@cvatechventure.com"
          target="_blank"
          rel="noopener noreferrer">
          Contact Us
        </a>
      </div>
    </header>
  );
}

export default Header;
