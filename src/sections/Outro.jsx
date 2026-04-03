import React from "react";
import logo from "/images/logo.webp";
import psLogo from "/images/ps-logo.svg";
import XLogo from "/images/x-logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", {
      marginTop: "-100vh",
      opacity: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-message",
        start: "top 30%",
        end: "top 10%",
        scrub: "true",
      },
    });
    tl.to(".final-content", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.to(".final-message", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src={logo} alt="Logo" className="md:w-72 w-52" />
        <div>
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>
        <div className="flex-center gap-10">
          <img src={psLogo} alt="psLogo" className="md:w-32 w-20 " />
          <img src={XLogo} alt="psLogo" className="md:w-52 w-40 " />
        </div>
      </div>
    </section>
  );
};

export default Outro;
