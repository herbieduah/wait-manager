import heroImage from "./assets/waitManagerHero.svg";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters.jsx";
import "./App.scss";
import { Link } from "react-scroll";

function Hero({ initialAnimClass }) {
  const headingText1 = "Lower wait times.";
  const headingText2 = "Higher satisfaction.";
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <section className="hero ">
      {/* <h1 className="hero__message">
        Lower wait times.
        <br />
        Higher satisfaction.
      </h1> */}

      <motion.h1 className="hero__message" initial="hidden" animate="visible" variants={container}>
        <div className="container">
          <AnimatedCharacters text={headingText1} wait={0.85} />
          <br />
          <AnimatedCharacters text={headingText2} wait={1.65} />
        </div>
      </motion.h1>
      <div className={`${initialAnimClass} container`}>
        <p className="hero__copy">
          Wait Manager enhances the customer experience by reducing customer wait ​times and lines. Customers can
          reserve a place in line using our virtual appointment system and select their appointment type. This solution
          allows businesses to improve operations, customer experience, and workforce management.
        </p>
        <div className="hero__cta-wrapper">
          {/* <a  href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn More
          </a> */}
          <Link className="hero__cta" to="about" spy={true} smooth={true}>
            Learn More
          </Link>
        </div>
        <img src={heroImage} className="hero__img" alt="people waiting" />
      </div>
    </section>
  );
}

export default Hero;
