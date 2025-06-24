import React from 'react';
import "./Nav.css";
import arrow from '../../assets/arrow.svg'

const Nav = () => {
  return (
    <nav className="nav-header">
      <div className="logo-nav flex justify-center items-center gap-2 text-white ">
        <h1 className="logo-name text-3xl font-bold  ">
          TECH <span className='text-[#24e7c9d8]'> NOVA</span>
        </h1>
      </div>
      <div className="nav-link-div flex justify-between items-center gap-20 text-white decoration-0 ">
      <a href="#" className="nav-links hover:text-[#94d8e4] ">Feature</a>
      <a href="#" className="nav-links hover:text-[#94d8e4] ">Pricing</a>
      <a href="#" className="nav-links hover:text-[#94d8e4] ">Support</a>
      </div>
      <button className="nav-cta flex py-3 px-4 rounded-sm gap-3.5 font-500 ">
        Get Start 
        <img className="nav-cta-icon border-1 rounded-sm text-black " src= {arrow} alt=""  />
      </button>
    </nav>
  )
}

export default Nav