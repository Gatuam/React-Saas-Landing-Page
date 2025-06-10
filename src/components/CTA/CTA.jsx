import React from "react";
import shape from "../../assets/abstract-shapes.png";
import arrow from "../../assets/arrow.svg";

const CTA = () => {
  return (
    <div className="bg-zinc-950 flex px-15 py-11 h-90vh justify-center items-center gap-10">
      <div className="right w-[45%] flex flex-col justify-between h-75 realtive">
        <h1 className="heading text-5xl text-white font-bold w-[75%] mb-5 ">
          Still have questions? We're here to help.
        </h1>
        <p className="content text-xl font-thin text-neutral-400 w-[75%] mb-3">
          Didn’t find what you were looking for? Contact our support team and
          we’ll make sure you get the answers you need—fast and clear.
        </p>
        <div className="mt-6">
          <button className="nav-cta flex py-3 px-4 rounded-sm gap-3.5 font-500 text-lg ">
            Get in Touch
            <img
              className="nav-cta-icon border-1 rounded-sm text-black "
              src={arrow}
              alt=""
            />
          </button>
        </div>
        <div className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-black to-teal-400 blur-3xl left-30 opacity-15 "></div>
      </div>
      <div className="hero">
        <img className="left-img" src={shape} alt="" />
      </div>
    </div>
  );
};

export default CTA;
