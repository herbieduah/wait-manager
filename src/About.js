import "./App.scss";
import businessDecisions from "./assets/Business_decisions.svg";
function About() {
  return (
    <section className="about-product">
      <div className="container">
        <p className="about-product__heading">What can Wait Manager do for you?</p>

        <p className="about-product__copy">
          Wait Manager will allow your business to fuel growth revenue, improve customer satisfaction, lower cost to
          serve, and engage employees. Studies also support the findings that Digital Queue Management Systems can
          decrease retail foot traffic and decrease customer complaint rates.
        </p>

        <div className="about-product__info-boxes">
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={businessDecisions}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Search and select your desired business.</p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={businessDecisions}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Search and select your desired business.</p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={businessDecisions}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Search and select your desired business.</p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={businessDecisions}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Search and select your desired business.</p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={businessDecisions}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Search and select your desired business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
