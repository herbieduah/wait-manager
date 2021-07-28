import heroImage from "./heromain.png";
import "./App.scss";

function Hero() {
  return (
    <section className="hero container">
      <h1 className="hero__message">
        Lower wait times.
        <br />
        Higher satisfaction.
      </h1>

      <p className="hero__copy">
        Wait Manager enhances the customer experience by reducing customer wait ​times and lines. Customers can reserve
        a place in line using our virtual appointment system and select their appointment type. This solution allows
        businesses to improve operations, customer experience, and workforce management.
      </p>
      <div className="hero__cta-wrapper">
        <a className="hero__cta" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
      <img src={heroImage} className="hero__img" alt="people waiting" />
    </section>
  );
}

export default Hero;
