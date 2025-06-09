import React from "react";
import "./Hero.css";
import shape from "../../assets/abstract-shapes.png";
import arrow from "../../assets/arrow.svg";

const Hero = () => {
  return (
    <div className=" flex justify-between items-center px-[4.5vw] py-[4vw] bg-zinc-950 ">
      <div className="right-section w-1/2  ">
        <h1 className="right-main tracking-tight leading-[4.9vw] text-white text-[4vw] font-bold ">
          <span className=" text-gradient">Intelligent</span>
          <span>cloud-based</span>
          <span className=" text-gradient">note-taking</span>
          <span className="">and collaboration tool</span>
        </h1>

        <p className="right-content text-amber-50 mt-[0.8vw] mb-[2vw] ">
          Experience the power of smart note taking Ai tool
        </p>

        <div className="right-form  w-[22vw] h-[84px] flex gap-1 py-3 items-center relative">
          <input
            type="email"
            className="px-3 py-4 pr-28 rounded-lg bg-amber-50 w-full outline-0 "
            placeholder="emial"
          />
          <button className="nav-cta flex py-3 px-4 rounded-lg gap-3 font-500 font-medium text-[16px] absolute right-2 ">
            Signup
            <img
              className="nav-cta-icon border-1 rounded-sm text-black "
              src={arrow}
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="left-section">
        <img className="left-img" src={shape} alt="" />
      </div>
    </div>
  );
};

export default Hero;
