import React from "react";
import { features } from "../../utils/constants";
import { div } from "motion/react-client";
import circle from "../../assets/features/radial-gradient-features.png";

const Feature = () => {
  return (
    <>
      <div className="w-full h-[75vh] bg-zinc-950 flex flex-col items-center ">
        <div className="heading bg-zinc-950 flex flex-col justify-center items-center relative ">
          <h1 className=" font-bold text-5xl bg-gradient-to-r from-cyan-100 to-cyan-300 bg-clip-text text-transparent ">
            What We Do Best
          </h1>
          <p className=" text-white text-md mt-3 mb-4 ">
            From full-stack development to flawless UI/UX, discover how we bring
            ideas to life.
          </p>
          <img className=" absolute top-10 " src={circle} alt="" />
        </div>
        <div className="feature-con grid grid-cols-4 gap-4 bg-zinc-950 h-[55vh] w-[88vw] items-center px-8 py-6 ">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className={`main-features ${
                  i < 2 ? "col-span-2" : ""
                } border-[1px] border-[#0173732e] px-6 py-9 rounded-md h-[100%] `}
              >
                <img
                  className="feature-icon mb-2.5 border-[1px] border-[#0173732e] px-3 py-3 rounded-lg "
                  src={feature.img}
                  alt=""
                />
                <h1 className="feature-heading font-bold text-2xl text-amber-50 mt-1 mb-3 ">
                  {feature.heading}
                </h1>
                <p className="feature-description text-zinc-300 mt-2 ">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feature;
