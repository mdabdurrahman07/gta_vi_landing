import React from "react";

import heroBg from "/images/hero-bg.webp";
import heroText from "/images/hero-text.webp";
import trailerLogo from "/images/watch-trailer.png";
import playImg from "/images/play.png";
import bigHero from "/images/big-hero-text.svg";
import ComingSoon from "./ComingSoon";

function Hero() {
  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src={heroBg} alt="HeroBg" className="scale-out" />
        <img src={heroText} alt="HeroText" className="title-logo fade-out" />
        <img
          src={trailerLogo}
          alt="trailerLogo"
          className="trailer-logo fade-out"
        />
      </div>
      <div className="play-img fade-out">
        <img src={playImg} alt="playImg" className="w-7 ml-1" />
      </div>
      <div>
        <img
          src={bigHero}
          alt="bigHero"
          className="size-full object-cover mask-logo"
        />
      </div>
      {/* this is fake logo wrapper */}
      <div className="fake-logo-wrapper">
        <img src={bigHero} alt="fakeLogo" className="overlay-logo" />
      </div>
      <ComingSoon />
    </section>
  );
}

export default Hero;
