// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import wait from "waait";
import About from "./About";
import "./App.scss";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  const [initialAnim, setIntialAnimation] = useState("hide");

  async function handleInitialAnim() {
    await wait(3000);
    setIntialAnimation("fade-in");
  }

  useEffect(() => {
    handleInitialAnim();
  }, []);
  // const initialAnim = "fade-in";
  return (
    <div className="wait-manager">
      <div className={initialAnim}>
        <Header />
      </div>
      <Hero initialAnimClass={initialAnim} />
      <div className={initialAnim}>
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
