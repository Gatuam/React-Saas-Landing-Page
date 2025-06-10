import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Nav from "../Navigaction/Nav";
import Page from "../Page/Page";
import Logo from "../Logos/Logo";
import Testimonial from "../Testimonial/Testimonial";
import Feature from "../Feature/Feature";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import Accordionitem from "../Accordionitem/Accordionitem";
import CTA from "../CTA/CTA";
import Fotter from "../Footer/Fotter";
import "./App.css";
import quote from "../../assets/double-quote.svg";

function App() {
  return (
    <>
      <Page>
        <Header>
          <Nav />
          <Hero />
        </Header>
        <Logo />
        <Testimonial>
          <div className=" flex w-full justify-center items-center  bg-zinc-950 h-[65vh] px-10 py-30 ">
            <div
              className="tex-con  text-white
         flex flex-col w-3xl px-4 py-5  relative "
            >
              <h3 className="main-text font-bold font-Poppins text-4xl text-center  w-3xl mb-6 leading-11 tracking-tight ">
                We’re a full-stack team helping startups and businesses launch
                fast, scalable websites and apps — from design to deployment.
              </h3>
              <div className="tex-info flex justify-center items-center gap-7 mt-3 ">
                <p className="font-bold text-zinc-400">EK GAUTHAM</p>
                <p className="text-zinc-600 font-thin ">full stack developer</p>
              </div>
              <img className=" absolute top-0 left-0 " src={quote} alt="" />
            </div>
          </div>
        </Testimonial>
        <Feature />
        <Testimonial>
          <div className=" flex w-full justify-center items-center  bg-zinc-950 h-[35vh] px-1 py-10 ">
            <div
              className="tex-con  text-white
         flex flex-col w-3xl px-4 py-4  relative "
            >
              <h3 className="main-text font-bold font-Poppins text-4xl text-center  w-3xl mb-6 leading-11 tracking-tight ">
                We’re a full-stack team helping startups and businesses launch
                fast, scalable websites and apps — from design to deployment.
              </h3>
              <div className="tex-info flex justify-center items-center gap-7 mt-3 ">
                <p className="font-bold text-zinc-400">EK GAUTHAM</p>
                <p className="text-zinc-600 font-thin ">full stack developer</p>
              </div>
              <img className=" absolute top-0 left-0 " src={quote} alt="" />
            </div>
          </div>
        </Testimonial>
        <Video />
        <Testimonial>
          <div className=" flex w-full justify-center items-center  bg-zinc-950 h-[35vh] px-1 py-10 ">
            <div
              className="tex-con  text-white
         flex flex-col w-3xl px-4 py-4  relative "
            >
              <h3 className="main-text font-bold font-Poppins text-4xl text-center  w-3xl mb-6 leading-11 tracking-tight ">
                We’re a full-stack team helping startups and businesses launch
                fast, scalable websites and apps — from design to deployment.
              </h3>
              <div className="tex-info flex justify-center items-center gap-7 mt-3 ">
                <p className="font-bold text-zinc-400">EK GAUTHAM</p>
                <p className="text-zinc-600 font-thin ">full stack developer</p>
              </div>
              <img className=" absolute top-0 left-0 " src={quote} alt="" />
            </div>
          </div>
        </Testimonial>
        <Pricing />
        <Testimonial>
          <div className=" flex w-full justify-center items-center  bg-zinc-950 h-[35vh] px-1 py-10 ">
            <div
              className="tex-con  text-white
         flex flex-col w-3xl px-4 py-4  relative "
            >
              <h3 className="main-text font-bold font-Poppins text-4xl text-center  w-3xl mb-6 leading-11 tracking-tight ">
                We’re a full-stack team helping startups and businesses launch
                fast, scalable websites and apps — from design to deployment.
              </h3>
              <div className="tex-info flex justify-center items-center gap-7 mt-3 ">
                <p className="font-bold text-zinc-400">EK GAUTHAM</p>
                <p className="text-zinc-600 font-thin ">full stack developer</p>
              </div>
              <img className=" absolute top-0 left-0 " src={quote} alt="" />
            </div>
          </div>
        </Testimonial>
        <FAQ>
          <Accordionitem />
        </FAQ>
        <Testimonial>
          <div className=" flex w-full justify-center items-center  bg-zinc-950 h-[35vh] px-1 py-10 ">
            <div
              className="tex-con  text-white
         flex flex-col w-3xl px-4 py-4  relative "
            >
              <h3 className="main-text font-bold font-Poppins text-4xl text-center  w-3xl mb-6 leading-11 tracking-tight ">
                We’re a full-stack team helping startups and businesses launch
                fast, scalable websites and apps — from design to deployment.
              </h3>
              <div className="tex-info flex justify-center items-center gap-7 mt-3 ">
                <p className="font-bold text-zinc-400">EK GAUTHAM</p>
                <p className="text-zinc-600 font-thin ">full stack developer</p>
              </div>
              <img className=" absolute top-0 left-0 " src={quote} alt="" />
            </div>
          </div>
        </Testimonial>
        <CTA />
        <Fotter />
      </Page>
    </>
  );
}

export default App;
