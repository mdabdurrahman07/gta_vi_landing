import React from "react";
import logo from "/images/logo.webp";
import psLogo from "/images/ps-logo.svg";
import XLogo from "/images/x-logo.svg";

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src={logo} alt="Logo" className="entrance-logo" />
        <div className="text-wrapper">
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

export default ComingSoon;
