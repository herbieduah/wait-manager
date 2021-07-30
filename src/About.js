import "./App.scss";
import businessDecisions from "./assets/Business_decisions.svg";
import airport from "./assets/airport.svg";
import appointment from "./assets/appt.svg";
import mobileUser from "./assets/mobile_user.svg";
import noTime from "./assets/no_time.svg";
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
                src={airport}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">
                Assess waiting time and get in line with estimated arrival.
              </p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={mobileUser}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">
                Get notified via mobile phone when your turn is approaching.
              </p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={noTime}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Arrive at estimated time.</p>
            </div>
          </div>
          <div className="about-product__info-box">
            <div className="about-product__info-box-container">
              <img
                src={appointment}
                className="about-product__info-box-img"
                alt="drawing of a guy making business decisions"
              />
              <p className="about-product__info-box-copy">Complete your appointment in less time than normal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
