import React from "react";
import video from "../../assets/video.png";
import videoBtn from "../../assets/play-button.png";

const Video = () => {
  return (
    <div className=" video-section w-full h-[80vh] bg-zinc-950 flex justify-center items-center  ">
      <div className="video relative">
        <img className="vid-img w-[100%] " src={video} alt="" />
        <img
          className="btn absolute inset-[46%] z-1 hover:shadow-cyan-900 cursor-pointer "
          src={videoBtn}
          alt=""
        />
        <div className=" w-full h-[100%] absolute bg-[#01737372] inset-0 rounded-2xl "></div>
      </div>
    </div>
  );
};

export default Video;
