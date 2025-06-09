import React from "react";
import { pricings } from "../../utils/constants";
import arrow from "../../assets/arrow.svg";

const Pricing = () => {
  return (
    <div className="main-price w-full h-[90vh] bg-zinc-950 flex gap-2 px-3 py-4 justify-center items-center ">
      {pricings.map((plan, i) => {
        return (
          <div
            key={i}
            className={`plan-con each-plan border-[#0173732e]
         ${
           plan.darkMode === true ? " bg-[#01737307]" : "bg-white"
         }  border-1 px-5 py-15 gap-4 rounded-lg`}
          >
            <div className={`planTitle-div flex mb-9 items-center   `}>
              <img
                className="plan-img mr-3 border-[#0173732e] border-1 px-3 py-1.5 rounded-md w-[45px] "
                src={plan.planicon}
                alt=""
              />
              <p
                className={`plan-type ${
                  plan.darkMode === true ? "text-white" : "text-black"
                }`}
              >
                {plan.plan}
              </p>
            </div>
            <h2
              className={`paln-price mb-4 text-4xl font-bold ${
                plan.darkMode === true ? "text-white" : "text-black"
              } `}
            >
              `{(plan.planPrice / 100).toFixed(2)}"/monthly"`
            </h2>
            <div className="plan-bullets flex flex-col gap-4 ">
              {plan.bullets.map((bullet, i) => {
                return (
                  <ul
                    className={`${
                      plan.darkMode === true ? "text-white" : "text-black"
                    } `}
                    key={i}
                  >
                    {bullet}
                  </ul>
                );
              })}
            </div>
            <button
              className={`plan-btn flex ${
                plan.darkMode === true ? "text-white" : "text-black"
              }  py-3 px-4 rounded-sm gap-3.5 font-500 mt-6  ${
                plan.darkMode === true ? "nav-cta" : "nav-cta-white"
              } `}
            >
              {plan.callToAction}
              <img src={arrow} alt="" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pricing;
