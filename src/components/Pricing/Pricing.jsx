import React from "react";
import { pricings } from "../../utils/constants";
import arrow from "../../assets/arrow.svg";
import check from '../../assets/check.png'


const Pricing = () => {
  return (
    <>
    <div className="main-container px-1 py-10  bg-zinc-950 h-[85vh] flex flex-col justify-center " >
    <div className=" flex flex-col items-center justify-center px-3 py-4  " >
        <h1 className=" font-bold text-5xl text-transparent bg-gradient-to-r from-cyan-100 to-cyan-500 bg-clip-text mb-4 " >Price & Plans</h1>
        <p className=" text-neutral-400 text-md  ">With lots of unique web design & Solution for you & your Startup</p>
      </div>
    <div className="main-price w-full h-[60vh] flex gap-10 px-3 py-4 justify-center items-center ">
      {pricings.map((plan, i) => {
        return (
          <div
            key={i}
            className={`plan-con each-plan border-[#0173732e] w-95 h-[530px] flex flex-col justify-evenly
         ${
           plan.darkMode === true ? " bg-[#01737307]" : "bg-white"
         }  border-1 px-10 py-13 gap-4 rounded-lg`}
          >
            <div className={`planTitle-div flex mb-9 items-center`}>
              <img
                className="plan-img mr-3 border-[#0173732e] border-1 px-3 py-1 rounded-md w-[45px] "
                src={plan.planicon}
                alt=""
              />
              <p
                className={`plan-type text-sm ${
                  plan.darkMode === true ? "text-white" : "text-black"
                }`}
              >
                {plan.plan}
              </p>
            </div>
            <h2
              className={`paln-price mb-4 text-5xl font-bold ${
                plan.darkMode === true ? "text-white" : "text-black"
              } `}
            >
              {typeof plan.planPrice === "number" ? ( 
             <> ${(plan.planPrice / 100).toFixed(2)}
             <span className="text-sm text-neutral-400">/monthly</span>
             </>): ("Custom")}
            </h2>
            <div className="plan-bullets flex flex-col gap-4 ">
             
              {plan.bullets.map((bullet, i) => {
                return (
                  <div key={i} >
                  <ul
                    className={`${
                      plan.darkMode === true ? "text-white" : "text-black"
                    } flex`}
                    
                  >
                    <img className=" w-5 h-4 mr-3 " src={check} alt="" />
                    {bullet}
                    
                  </ul>
                  </div>
                );
              })}
            </div>
            <button
              className={`plan-btn flex justify-center ${
                plan.darkMode === true ? "text-white" : "text-black"
              }  py-3 px-4 rounded-sm gap-3.5 font-500 mt-6 w-full  ${
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
    </div>
    </>
  );
};

export default Pricing;
