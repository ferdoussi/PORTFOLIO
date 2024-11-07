import React, { useRef } from "react";
import './hero.css';
import Lottie from "lottie-react";
import dev from '../../../src/animation/dev.json'
function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/public/anas.png" alt="" className="avatar" />
          <div className="icon-verified "></div>
        </div>
        <h1 className="title">Full Stack Developer</h1>
        <p className="sub-title">A versatile full-stack developer, I specialize in creating dynamic, user-friendly web applications. Known for my strong problem-solving abilities with a proven ability to quickly learn and adapt to new technologies and modern programming languages.
          Sewelni ChatBot
          Sewelni ChatBot
          Wonderful Morocco
          Wonderful Morocco
          Recouv Management
          Recouv Management
          aroscka
          aroscka
          Sabri Elevage
          Sabri Elevage
          PDevelopers
        </p>
        <div className="icons flex">
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github" ></div>
          <div className="icon icon-linkedin-with-circle"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie className=""
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={dev} />
      </div>
    </section>
  )
}
export default Hero;