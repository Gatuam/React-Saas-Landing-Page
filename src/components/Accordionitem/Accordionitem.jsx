import React, { useState } from "react";
import { FAQS } from "../../utils/constants";
import arrow from "../../assets/colored-arrow.svg";
import rightArrow from "../../assets/colored-arrow-right.svg";
import circle from "../../assets/features/radial-gradient-features.png";

const Accordionitem = () => {
  const [open, setOpen] = useState(null);

  const handleAns = (index) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" faqs-container group w-full h-100vh bg-zinc-950 flex flex-col justify-center items-center gap-1 px-2 py-10 relative ">
      <img className=" absolute -top-30 left-350" src={circle} alt="" />
      <div className=" flex flex-col items-center justify-center px-4 py-4 mb-6  ">
        <h1 className=" font-bold text-5xl text-transparent bg-gradient-to-r from-cyan-100 to-cyan-500 bg-clip-text mb-4 ">
          Frequently Ask Questions?
        </h1>
        <p className=" text-neutral-400 text-md  ">
          "Find clear and detailed answers to the most common questions about
          our services, pricing, policies, and support."
        </p>
      </div>
      {FAQS.map((faq, i) => {
        return (
          <div
            className="flex flex-col w-[75%] justify-center items-center "
            key={i}
            onClick={() => handleAns(i)}
          >
            <div className="faq-question group-hover:cursor-pointer w-[80%] items-center  border-1 border-r-2 border-l-2 border-[#55eea922] border-r-[#55eea95e] border-l-[#55eea95e] gap-2.5 px-8 py-4  rounded-lg mb-5 ">
              <div className=" w-full">
                <h1 className=" text-white text-xl flex justify-between ">
                  {faq.question}
                  <img
                    className="border-[1px] border-[#0173732e] rounded-lg px-2 py-1 "
                    src={arrow}
                    alt=""
                  />
                </h1>
              </div>
            </div>

            {open === i && (
              <div className="faq-answers">
                <div className="flex flex-col gap-2 w-[1130px] bg-[#eeeeee1d] px-7 py-5 rounded-xl border-1 border-r-2 border-l-2 border-[#55eea922] border-r-[#55eea95e] border-l-[#55eea95e] ">
                  <h2 className="text-neutral-100 text-md font-bold mt-2 mb-4">
                    {faq.question}
                  </h2>
                  <p className=" flex justify-between items-start text-neutral-400 w-[100%] mb-2">
                    {faq.answer}
                    <img
                      className="ml-20 border-[1px] border-[#0173732e] rounded-lg px-2 py-1  "
                      src={rightArrow}
                      alt=""
                    />
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordionitem;
