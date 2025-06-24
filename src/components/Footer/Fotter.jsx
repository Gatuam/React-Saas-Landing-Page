import React from 'react'
import arrow from "../../assets/arrow.svg";

const Fotter = () => {
  return (
    <div className=' h-60 bg-zinc-950 px-20 text-white flex justify-between items-center border-t border-t-[#40f9f619]'>
      <div className="logo-nav justify-center items-center gap-2 text-white ">
        <h1 className="logo-name text-3xl font-bold  ">
          TECH <span className='text-[#24e7c9d8]'> NOVA</span>
        </h1>
        <p className='mt-2 '>
          Experience the power of smart note taking Ai tool
        </p>
      </div>
      <div>
        <div className="right-form  w-[22vw] h-[84px] flex gap-1 py-3 items-center relative">
                  <input
                    type="email"
                    className="px-3 py-4 pr-28 rounded-lg text-neutral-600 bg-amber-50 w-full outline-0 "
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
    </div>
  )
}

export default Fotter