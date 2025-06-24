import React from "react";
import { logos } from "../../utils/constants";
import "./Logo.css";
import { motion } from "motion/react";

const Logo = () => {
  const allLogos = [...logos, ...logos]; // duplicate once

  return (
    <div className="  overflow-hidden ">
      <motion.div
        animate={{
          x: ["0%", "-30%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
        className="logo-section bg-zinc-950  h-[10vh]"
      >
        {allLogos.map((logo, i) => (
          <div className="main-logos " key={i}>
            <img className="logos-img" src={logo} alt="logo" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Logo;
